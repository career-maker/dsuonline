'use client';

import { useId, useState, type FormEvent } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { site } from '@/data/site';
import { submitEnquiry } from '@/lib/enquiry';
import { formCountries } from './data';
import s from './International.module.scss';

type Phase = 'idle' | 'submitting' | 'sent' | 'unconfigured' | 'error';
const programmes = ['Online MBA', 'Online MCA', 'Online BBA', 'Online BCA', 'Online B.Com', 'Not sure yet'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** "Request a callback" form. Delivery goes through the shared enquiry endpoint; without one it says so instead of pretending. */
export function CallbackForm() {
  const uid = useId();
  const [phase, setPhase] = useState<Phase>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phase === 'submitting') return;
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? '').trim();
    const found: Record<string, string> = {};
    if (v('name').length < 2) found.name = 'Enter your full name.';
    if (!EMAIL.test(v('email'))) found.email = 'Enter a valid email, like name@example.com.';
    if (!v('country')) found.country = 'Select your country of residence.';
    if (v('phone') && !/^\+?[\d\s\-().]{6,18}$/.test(v('phone'))) found.phone = 'Enter a valid phone number with country code.';
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) return void e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();

    setPhase('submitting');
    setServerError('');
    const res = await submitEnquiry({
      name: v('name'),
      email: v('email'),
      phone: v('phone'),
      otp: '',
      programme: v('programme'),
      state: '',
      city: v('country'),
      message: `International learner. Country of residence: ${v('country')}`,
    });
    if (res.status === 'error') {
      setServerError(res.message);
      setPhase('error');
    } else setPhase(res.status);
  };

  if (phase === 'sent' || phase === 'unconfigured') {
    return (
      <div className={s.form} role="status">
        <h3>{phase === 'sent' ? "Thank you — we'll be in touch." : 'Not sent yet'}</h3>
        <p className={s.formNote}>
          {phase === 'sent' ? (
            'Our admissions team will contact you about your enquiry.'
          ) : (
            <>
              The online enquiry service is not connected, so nothing was submitted. Please call <a href={`tel:${site.phone}`}>{site.phoneLabel}</a> or write to{' '}
              <a href={`mailto:${site.admissionsEmail}`}>{site.admissionsEmail}</a>.
            </>
          )}
        </p>
      </div>
    );
  }

  const err = (k: string) => (errors[k] ? <p id={`${uid}-${k}-err`} className={s.err}>{errors[k]}</p> : null);
  const bad = (k: string) => (errors[k] ? { 'aria-invalid': true as const, 'aria-describedby': `${uid}-${k}-err` } : {});

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate aria-busy={phase === 'submitting'} data-reveal>
      <h3>Request a callback</h3>
      <div className={s.fieldRow}>
        <div className={s.field}>
          <label htmlFor={`${uid}-name`}>Full name</label>
          <input id={`${uid}-name`} name="name" autoComplete="name" placeholder="Your name" maxLength={80} {...bad('name')} />
          {err('name')}
        </div>
        <div className={s.field}>
          <label htmlFor={`${uid}-email`}>Email</label>
          <input id={`${uid}-email`} name="email" type="email" autoComplete="email" placeholder="you@email.com" maxLength={120} {...bad('email')} />
          {err('email')}
        </div>
      </div>
      <div className={s.fieldRow}>
        <div className={s.field}>
          <label htmlFor={`${uid}-country`}>Country of residence</label>
          <select id={`${uid}-country`} name="country" defaultValue="" {...bad('country')}>
            <option value="">Select country</option>
            {formCountries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          {err('country')}
        </div>
        <div className={s.field}>
          <label htmlFor={`${uid}-phone`}>Phone (with country code)</label>
          <input id={`${uid}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="+971 ..." maxLength={20} {...bad('phone')} />
          {err('phone')}
        </div>
      </div>
      <div className={s.field}>
        <label htmlFor={`${uid}-programme`}>Program of interest</label>
        <select id={`${uid}-programme`} name="programme" defaultValue="Online MBA">
          {programmes.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      {phase === 'error' && <p className={s.banner}>{serverError}</p>}
      <ArrowLink type="submit" disabled={phase === 'submitting'}>
        {phase === 'submitting' ? 'Sending…' : 'Get Free Counselling'}
      </ArrowLink>
      <p className={s.fine}>By submitting, you agree to be contacted by DSU Online about your enquiry.</p>
    </form>
  );
}
