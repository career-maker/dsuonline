'use client';

import { useCallback, useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { CloseIcon } from '@/components/ui/icons';
import { defaultCountry, type Country } from '@/data/countries';
import { locations, stateNames } from '@/data/locations';
import { programs } from '@/data/programs';
import { CountryPicker } from './CountryPicker';
import { site } from '@/data/site';
import { normalisePhone, submitEnquiry, validate, type EnquiryErrors, type EnquiryValues } from '@/lib/enquiry';
import s from './EnquiryModal.module.scss';

type Phase = 'idle' | 'submitting' | 'sent' | 'unconfigured' | 'error';
const empty: EnquiryValues = { name: '', email: '', phone: '', otp: '', programme: '', state: '', city: '', message: '' };
const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]';

export function EnquiryModal({ onClose, initialProgramme }: { onClose: () => void; initialProgramme?: string }) {
  const uid = useId();
  const titleId = `${uid}-title`;
  const dialogRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const [values, setValues] = useState<EnquiryValues>(() => ({
    ...empty,
    programme: initialProgramme ?? '',
  }));
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [phase, setPhase] = useState<Phase>('idle');
  const [serverError, setServerError] = useState('');
  const [country, setCountry] = useState<Country>(defaultCountry);

  const close = useCallback(() => {
    abortRef.current?.abort();
    onClose();
  }, [onClose]);

  // focus management, Escape, focus trap, scroll lock (Lenis is told to ignore wheel events over the modal)
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const f = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPad = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`; // no layout jump when the scrollbar disappears
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPad;
      previous?.focus?.();
    };
  }, [close]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => (name === 'state' ? { ...v, state: value, city: '' } : { ...v, [name]: value }));
    if (errors[name as keyof EnquiryValues]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phase === 'submitting') return; // double-submit guard
    const found = validate(values, country.iso);
    setErrors(found);
    const firstBad = (Object.keys(found) as (keyof EnquiryValues)[])[0];
    if (firstBad) {
      dialogRef.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    setPhase('submitting');
    setServerError('');
    abortRef.current = new AbortController();
    const res = await submitEnquiry({ ...values, phone: `${country.dial}${normalisePhone(values.phone, country.iso)}` }, abortRef.current.signal);
    if (res.status === 'error') {
      setServerError(res.message);
      setPhase('error');
    } else setPhase(res.status);
  };

  const busy = phase === 'submitting';
  const finished = phase === 'sent' || phase === 'unconfigured';
  const invalid = (k: keyof EnquiryValues) => (errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `${uid}-${k}-err` } : {});
  const msg = (k: keyof EnquiryValues) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className={s.err}>
        {errors[k]}
      </p>
    ) : null;

  return (
    <div className={s.backdrop} data-lenis-prevent onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div ref={dialogRef} tabIndex={-1} data-lenis-prevent className={s.dialog} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button type="button" className={s.close} onClick={close} aria-label="Close enquiry form">
          <CloseIcon />
        </button>

        <aside className={s.aside}>
          <h2 id={titleId}>
            Admissions Open <br />
            for 2027
          </h2>
          <p>Tell us which programme you are considering and how to reach you.</p>
          <ul className={s.reach}>
            <li>
              <span>Call</span>
              <a href={`tel:${site.phone}`}>{site.phoneLabel}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${site.admissionsEmail}`}>{site.admissionsEmail}</a>
            </li>
          </ul>
        </aside>

        <div className={s.pane}>
          {finished ? (
            <div className={s.result} role="status">
              {phase === 'sent' ? (
                <>
                  <h3>Thank you, {values.name.trim().split(/\s+/)[0]}.</h3>
                  <p>Your enquiry has been submitted. Our admissions team will contact you on {country.dial} {values.phone.trim()}.</p>
                </>
              ) : (
                <>
                  <h3>Not sent yet</h3>
                  <p>
                    The online enquiry service is not connected, so nothing was submitted. Please call <a href={`tel:${site.phone}`}>{site.phoneLabel}</a> or write to{' '}
                    <a href={`mailto:${site.admissionsEmail}`}>{site.admissionsEmail}</a>.
                  </p>
                </>
              )}
              <ArrowLink onClick={close}>Close</ArrowLink>
            </div>
          ) : (
            <form className={s.form} onSubmit={onSubmit} noValidate aria-busy={busy}>
              <p className={`${s.lead} ${s.wide}`}>Fields marked * are required.</p>

              <div className={s.field}>
                <label htmlFor={`${uid}-name`}>Full name *</label>
                <input id={`${uid}-name`} name="name" type="text" autoComplete="name" value={values.name} onChange={onChange} maxLength={80} {...invalid('name')} />
                {msg('name')}
              </div>

              <div className={s.field}>
                <label htmlFor={`${uid}-email`}>Email address *</label>
                <input id={`${uid}-email`} name="email" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={onChange} maxLength={120} {...invalid('email')} />
                {msg('email')}
              </div>

              <div className={s.field}>
                <label htmlFor={`${uid}-phone`}>Mobile number *</label>
                <div className={s.phone}>
                  <CountryPicker value={country} onChange={setCountry} />
                  <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={country.iso === 'in' ? '98765 43210' : 'Phone number'} value={values.phone} onChange={onChange} maxLength={16} {...invalid('phone')} />
                </div>
                {msg('phone')}
              </div>

              <div className={s.field}>
                <label htmlFor={`${uid}-otp`}>Enter OTP</label>
                <input id={`${uid}-otp`} name="otp" type="text" inputMode="numeric" autoComplete="one-time-code" placeholder="Enter OTP" value={values.otp} onChange={onChange} maxLength={6} {...invalid('otp')} />
                {msg('otp')}
              </div>

              <div className={`${s.field} ${s.wide}`}>
                <label htmlFor={`${uid}-programme`}>Select your program *</label>
                <select id={`${uid}-programme`} name="programme" value={values.programme} onChange={onChange} {...invalid('programme')}>
                  <option value="" disabled>
                    Select a programme
                  </option>
                  {programs.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.name} - {p.fullName}
                    </option>
                  ))}
                  <option value="unsure">Not sure yet</option>
                </select>
                {msg('programme')}
              </div>

              <div className={s.field}>
                <label htmlFor={`${uid}-state`}>Select state *</label>
                <select id={`${uid}-state`} name="state" value={values.state} onChange={onChange} {...invalid('state')}>
                  <option value="" disabled>
                    Select state
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
                <label htmlFor={`${uid}-city`}>Select city *</label>
                <select id={`${uid}-city`} name="city" value={values.city} onChange={onChange} disabled={!values.state} {...invalid('city')}>
                  <option value="" disabled>
                    {values.state ? 'Select city' : 'Select a state first'}
                  </option>
                  {(locations[values.state] ?? []).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {msg('city')}
              </div>

              <div className={`${s.field} ${s.wide}`}>
                <label htmlFor={`${uid}-message`}>
                  Message <small>(optional)</small>
                </label>
                <textarea id={`${uid}-message`} name="message" rows={3} value={values.message} onChange={onChange} maxLength={500} {...invalid('message')} />
                {msg('message')}
              </div>

              {phase === 'error' && (
                <p className={`${s.banner} ${s.wide}`} role="alert">
                  {serverError}
                </p>
              )}

              <ArrowLink type="submit" className={s.submit} disabled={busy}>
                {busy ? 'Sending...' : 'Submit Enquiry'}
              </ArrowLink>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
