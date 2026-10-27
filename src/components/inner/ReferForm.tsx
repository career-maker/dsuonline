'use client';

import { useId, useState, type ChangeEvent, type FormEvent } from 'react';
import { CountryPicker } from '@/components/layout/CountryPicker';
import s from '@/components/layout/EnquiryModal.module.scss';
import { defaultCountry, type Country } from '@/data/countries';
import { site } from '@/data/site';
import { normalisePhone, submitEnquiry } from '@/lib/enquiry';
import k from './Kit.module.scss';

type V = { usn: string; refName: string; refPhone: string; refEmail: string; appName: string; appEmail: string; appPhone: string; otp: string };
const empty: V = { usn: '', refName: '', refPhone: '', refEmail: '', appName: '', appEmail: '', appPhone: '', otp: '' };
type Phase = 'idle' | 'submitting' | 'sent' | 'unconfigured' | 'error';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Refer & Earn form from the live /refer banner (same fields, same order). */
export function ReferForm() {
  const uid = useId();
  const [v, setV] = useState<V>(empty);
  const [c1, setC1] = useState<Country>(defaultCountry);
  const [c2, setC2] = useState<Country>(defaultCountry);
  const [consent, setConsent] = useState(false);
  const [err, setErr] = useState<Partial<Record<keyof V | 'consent', string>>>({});
  const [phase, setPhase] = useState<Phase>('idle');
  const [step, setStep] = useState<1 | 2>(1);
  const [serverError, setServerError] = useState('');

  const on = (e: ChangeEvent<HTMLInputElement>) => {
    setV((x) => ({ ...x, [e.target.name]: e.target.value }));
    setErr((x) => ({ ...x, [e.target.name]: undefined }));
  };
  const phoneOk = (n: string, c: Country) => (c.iso === 'in' ? /^[6-9]\d{9}$/.test(normalisePhone(n, c.iso)) : /^\d{6,14}$/.test(normalisePhone(n, c.iso)));

  const checkStep1 = () => {
    const f: typeof err = {};
    if (!v.usn.trim()) f.usn = 'Enter the USN number / employee ID.';
    if (v.refName.trim().length < 2) f.refName = 'Enter the referring person name.';
    if (!phoneOk(v.refPhone, c1)) f.refPhone = 'Enter a valid mobile number.';
    if (!EMAIL.test(v.refEmail.trim())) f.refEmail = 'Enter a valid email address.';
    setErr(f);
    return Object.keys(f).length === 0;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (phase === 'submitting') return;
    if (step === 1) {
      if (checkStep1()) setStep(2);
      return;
    }
    const f: typeof err = {};
    if (v.appName.trim().length < 2) f.appName = 'Enter the applicant name.';
    if (v.appEmail && !EMAIL.test(v.appEmail.trim())) f.appEmail = 'Enter a valid email address.';
    if (!phoneOk(v.appPhone, c2)) f.appPhone = 'Enter a valid mobile number.';
    if (v.otp && !/^\d{4,6}$/.test(v.otp.trim())) f.otp = 'OTP is 4 to 6 digits.';
    if (!consent) f.consent = 'Please tick the consent box to continue.';
    setErr(f);
    if (Object.keys(f).length) return;
    setPhase('submitting');
    setServerError('');
    const res = await submitEnquiry({
      name: v.appName,
      email: v.appEmail || v.refEmail,
      phone: `${c2.dial}${normalisePhone(v.appPhone, c2.iso)}`,
      otp: v.otp,
      programme: 'referral',
      state: '',
      city: '',
      message: `Referral by ${v.refName} (${v.usn}), ${c1.dial}${normalisePhone(v.refPhone, c1.iso)}, ${v.refEmail}`,
    });
    if (res.status === 'error') {
      setServerError(res.message);
      setPhase('error');
    } else setPhase(res.status);
  };

  const field = (name: keyof V, label: string, type = 'text', req = true) => (
    <div className={`${s.field} ${s.wide}`}>
      <label htmlFor={`${uid}-${name}`}>
        {label}
        {req ? ' *' : ''}
      </label>
      <input id={`${uid}-${name}`} name={name} type={type} value={v[name]} onChange={on} maxLength={120} aria-invalid={err[name] ? true : undefined} aria-describedby={err[name] ? `${uid}-${name}-e` : undefined} />
      {err[name] && (
        <p id={`${uid}-${name}-e`} className={s.err}>
          {err[name]}
        </p>
      )}
    </div>
  );
  const phone = (name: 'refPhone' | 'appPhone', label: string, c: Country, set: (c: Country) => void) => (
    <div className={`${s.field} ${s.wide}`}>
      <label htmlFor={`${uid}-${name}`}>{label} *</label>
      <div className={s.phone}>
        <CountryPicker value={c} onChange={set} />
        <input id={`${uid}-${name}`} name={name} type="tel" inputMode="tel" value={v[name]} onChange={on} maxLength={16} aria-invalid={err[name] ? true : undefined} />
      </div>
      {err[name] && <p className={s.err}>{err[name]}</p>}
    </div>
  );

  if (phase === 'sent' || phase === 'unconfigured') {
    return (
      <div className={k.contactFormCard}>
        <div className={s.result} role="status">
          {phase === 'sent' ? (
            <p>Your referral has been submitted.</p>
          ) : (
            <p>
              The online referral service is not connected, so nothing was submitted. Please call <a href={`tel:${site.phone}`}>{site.phoneLabel}</a> or write to{' '}
              <a href={`mailto:${site.admissionsEmail}`}>{site.admissionsEmail}</a>.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={k.contactFormCard}>
      <form className={`${s.form} ${s.compact}`} onSubmit={submit} noValidate aria-busy={phase === 'submitting'}>
        <ol className={k.stepDots} aria-label="Progress">
          <li className={step === 1 ? k.stepOn : k.stepDone}>1. Referring person</li>
          <li className={step === 2 ? k.stepOn : undefined}>2. Applicant</li>
        </ol>
        {step === 1 && (
          <>
            {field('usn', 'Enter Referring Person USN Number / Employee ID')}
            {field('refName', 'Enter Referring Person Name')}
            {phone('refPhone', 'Enter Referring Person Mobile Number', c1, setC1)}
            {field('refEmail', 'Enter Referring Person Email Address', 'email')}
          </>
        )}
        {step === 2 && (
          <>
            {field('appName', 'Enter Applicant Name')}
            {field('appEmail', 'Enter Applicant Email Address', 'email', false)}
            {phone('appPhone', 'Enter Applicant Mobile Number', c2, setC2)}
            {field('otp', 'Enter OTP', 'text', false)}
        <label className={`${k.consent} ${s.wide}`}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>I authorise Dayananda Sagar University- DSUOnline &amp; its representatives to contact me with updates and notifications via Email/SMS/What&apos;sApp/Call. This will override DND/NDNC. *</span>
        </label>
        {err.consent && <p className={`${s.err} ${s.wide}`}>{err.consent}</p>}
        {phase === 'error' && (
          <p className={`${s.banner} ${s.wide}`} role="alert">
            {serverError}
          </p>
        )}
          </>
        )}
        <div className={`${k.stepBtns} ${s.wide}`}>
          {step === 2 && (
            <button type="button" className={k.stepBack} onClick={() => setStep(1)}>
              Back
            </button>
          )}
          <button type="submit" className={s.submit} disabled={phase === 'submitting'}>
            {step === 1 ? 'NEXT' : phase === 'submitting' ? 'Sending...' : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
  );
}
