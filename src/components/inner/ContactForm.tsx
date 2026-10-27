'use client';

import { useId, useState, type ChangeEvent, type FormEvent } from 'react';
import { CountryPicker } from '@/components/layout/CountryPicker';
import s from '@/components/layout/EnquiryModal.module.scss';
import { defaultCountry, type Country } from '@/data/countries';
import { locations, stateNames } from '@/data/locations';
import { programs } from '@/data/programs';
import { site } from '@/data/site';
import { normalisePhone, submitEnquiry, validate, type EnquiryErrors, type EnquiryValues } from '@/lib/enquiry';
import k from './Kit.module.scss';

type Phase = 'idle' | 'submitting' | 'sent' | 'unconfigured' | 'error';
const empty: EnquiryValues = { name: '', email: '', phone: '', otp: '', programme: '', state: '', city: '', message: '' };

/** "Admissions Open" enquiry form of the live contact page (same fields as the popup, plus the consent line). */
export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<EnquiryValues>(empty);
  const [errors, setErrors] = useState<EnquiryErrors & { consent?: string }>({});
  const [country, setCountry] = useState<Country>(defaultCountry);
  const [consent, setConsent] = useState(true);
  const [phase, setPhase] = useState<Phase>('idle');
  const [serverError, setServerError] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((v) => (name === 'state' ? { ...v, state: value, city: '' } : { ...v, [name]: value }));
    if (errors[name as keyof EnquiryValues]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phase === 'submitting') return;
    const found: EnquiryErrors & { consent?: string } = validate(values, country.iso);
    if (!consent) found.consent = 'Please tick the consent box to continue.';
    setErrors(found);
    if (Object.keys(found).length) return;
    setPhase('submitting');
    setServerError('');
    const res = await submitEnquiry({ ...values, phone: `${country.dial}${normalisePhone(values.phone, country.iso)}` });
    if (res.status === 'error') {
      setServerError(res.message);
      setPhase('error');
    } else setPhase(res.status);
  };

  const busy = phase === 'submitting';
  const bad = (n: keyof EnquiryValues) => (errors[n] ? { 'aria-invalid': true as const, 'aria-describedby': `${uid}-${n}-e` } : {});
  const msg = (n: keyof EnquiryValues) =>
    errors[n] ? (
      <p id={`${uid}-${n}-e`} className={s.err}>
        {errors[n]}
      </p>
    ) : null;

  if (phase === 'sent' || phase === 'unconfigured') {
    return (
      <div className={k.contactFormCard}>
        <h2>Admissions Open</h2>
        <div className={s.result} role="status">
          {phase === 'sent' ? (
            <p>Your enquiry has been submitted. Our admissions team will contact you.</p>
          ) : (
            <p>
              The online enquiry service is not connected, so nothing was submitted. Please call <a href={`tel:${site.phone}`}>{site.phoneLabel}</a> or write to{' '}
              <a href={`mailto:${site.admissionsEmail}`}>{site.admissionsEmail}</a>.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={k.contactFormCard}>
      <h2>Admissions Open</h2>
      <form className={s.form} onSubmit={onSubmit} noValidate aria-busy={busy}>
        <div className={`${s.field} ${s.wide}`}>
          <label htmlFor={`${uid}-name`}>Enter Name (as per 10th class sheet) *</label>
          <input id={`${uid}-name`} name="name" type="text" autoComplete="name" value={values.name} onChange={onChange} maxLength={80} {...bad('name')} />
          {msg('name')}
        </div>
        <div className={`${s.field} ${s.wide}`}>
          <label htmlFor={`${uid}-email`}>Enter Email Address *</label>
          <input id={`${uid}-email`} name="email" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={onChange} maxLength={120} {...bad('email')} />
          {msg('email')}
        </div>
        <div className={`${s.field} ${s.wide}`}>
          <label htmlFor={`${uid}-phone`}>Enter Mobile Number *</label>
          <div className={s.phone}>
            <CountryPicker value={country} onChange={setCountry} />
            <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={onChange} maxLength={16} {...bad('phone')} />
          </div>
          {msg('phone')}
        </div>
        <div className={`${s.field} ${s.wide}`}>
          <label htmlFor={`${uid}-otp`}>Enter OTP</label>
          <input id={`${uid}-otp`} name="otp" type="text" inputMode="numeric" autoComplete="one-time-code" value={values.otp} onChange={onChange} maxLength={6} {...bad('otp')} />
          {msg('otp')}
        </div>
        <div className={`${s.field} ${s.wide}`}>
          <label htmlFor={`${uid}-programme`}>Select Programme *</label>
          <select id={`${uid}-programme`} name="programme" value={values.programme} onChange={onChange} {...bad('programme')}>
            <option value="" disabled>
              Select Programme
            </option>
            {programs.map((p) => (
              <option key={p.code} value={p.code}>
                {p.name} - {p.fullName}
              </option>
            ))}
          </select>
          {msg('programme')}
        </div>
        <div className={s.field}>
          <label htmlFor={`${uid}-state`}>Select State *</label>
          <select id={`${uid}-state`} name="state" value={values.state} onChange={onChange} {...bad('state')}>
            <option value="" disabled>
              Select State
            </option>
            {stateNames.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
          {msg('state')}
        </div>
        <div className={s.field}>
          <label htmlFor={`${uid}-city`}>Select City *</label>
          <select id={`${uid}-city`} name="city" value={values.city} onChange={onChange} disabled={!values.state} {...bad('city')}>
            <option value="" disabled>
              {values.state ? 'Select City' : 'Select a state first'}
            </option>
            {(locations[values.state] ?? []).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {msg('city')}
        </div>

        <label className={`${k.consent} ${s.wide}`}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            I authorize DSU Online and its associates to contact me with updates &amp; notifications via email, SMS, WhatsApp, and voice call. This consent will override any registered DND/NDNC.
          </span>
        </label>
        {errors.consent && <p className={`${s.err} ${s.wide}`}>{errors.consent}</p>}

        {phase === 'error' && (
          <p className={`${s.banner} ${s.wide}`} role="alert">
            {serverError}
          </p>
        )}
        <button type="submit" className={`${s.submit} ${s.wide}`} disabled={busy}>
          {busy ? (
            <>
              <span className={s.spin} aria-hidden="true" /> Sending...
            </>
          ) : (
            'Enquire Now'
          )}
        </button>
      </form>
    </div>
  );
}
