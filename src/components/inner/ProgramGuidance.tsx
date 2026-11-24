'use client';

import { useId, useState, type FormEvent } from 'react';
import Image from 'next/image';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { site } from '@/data/site';
import { normalisePhone, submitEnquiry, validate, type EnquiryErrors } from '@/lib/enquiry';
import s from './ProgramGuidance.module.scss';

type Phase = 'idle' | 'submitting' | 'sent' | 'unconfigured' | 'error';
const FIELDS = [
  { k: 'name', label: 'Name', type: 'text', auto: 'name' },
  { k: 'email', label: 'Email', type: 'email', auto: 'email' },
  { k: 'phone', label: 'Mobile', type: 'tel', auto: 'tel' },
] as const;

/** "Leave a Query" (name, email, mobile). Uses the shared enquiry endpoint; without one it says nothing was sent. */
function QueryForm({ code }: { code: string }) {
  const uid = useId();
  const [phase, setPhase] = useState<Phase>('idle');
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [serverError, setServerError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phase === 'submitting') return;
    const f = new FormData(e.currentTarget);
    const v = { name: String(f.get('name') ?? ''), email: String(f.get('email') ?? ''), phone: String(f.get('phone') ?? '') };
    // shared rules, only for the three fields this form has
    const all = validate({ ...v, otp: '', programme: code, state: '-', city: '-', message: '' });
    const found: EnquiryErrors = {};
    for (const k of ['name', 'email', 'phone'] as const) if (all[k]) found[k] = all[k];
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) return void e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();

    setPhase('submitting');
    setServerError('');
    const res = await submitEnquiry({ ...v, phone: `+91${normalisePhone(v.phone)}`, otp: '', programme: code, state: '', city: '', message: 'Leave a Query (programme page)' });
    if (res.status === 'error') {
      setServerError(res.message);
      setPhase('error');
    } else setPhase(res.status);
  };

  if (phase === 'sent' || phase === 'unconfigured') {
    return (
      <div className={s.done} role="status">
        {phase === 'sent' ? (
          <p>Thank you. Our admissions team will contact you shortly.</p>
        ) : (
          <p>
            Not sent yet: the online enquiry service is not connected. Please call <a href={`tel:${site.phone}`}>{site.phoneLabel}</a> or write to{' '}
            <a href={`mailto:${site.admissionsEmail}`}>{site.admissionsEmail}</a>.
          </p>
        )}
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate aria-busy={phase === 'submitting'}>
      <h3>Leave a Query</h3>
      <div className={s.fields}>
        {FIELDS.map((x) => (
          <div key={x.k} className={s.field}>
            <label htmlFor={`${uid}-${x.k}`}>{x.label} *</label>
            <input
              id={`${uid}-${x.k}`}
              name={x.k}
              type={x.type}
              autoComplete={x.auto}
              inputMode={x.k === 'phone' ? 'numeric' : undefined}
              maxLength={x.k === 'phone' ? 14 : 80}
              placeholder={x.k === 'phone' ? '10-digit mobile number' : undefined}
              aria-invalid={errors[x.k] ? true : undefined}
              aria-describedby={errors[x.k] ? `${uid}-${x.k}-err` : undefined}
            />
            {errors[x.k] && (
              <p id={`${uid}-${x.k}-err`} className={s.err}>
                {errors[x.k]}
              </p>
            )}
          </div>
        ))}
      </div>
      {serverError && (
        <p className={s.err} role="alert">
          {serverError}
        </p>
      )}
      <div className={s.actions}>
        <ArrowLink type="submit" disabled={phase === 'submitting'}>
          {phase === 'submitting' ? 'Sending...' : 'Submit Query'}
        </ArrowLink>
        <a href={`tel:${site.phone}`}>Call {site.phoneLabel}</a>
      </div>
    </form>
  );
}

/** "Personalised admission guidance": counsellor pitch, topics, and a short "Leave a Query" form. */
export function ProgramGuidance({ name, code, degree, dual }: { name: string; code: string; degree: string; dual: boolean }) {
  const topics = ['Programme details', ...(dual ? ['Dual specialisation'] : ['Specialisations']), 'Eligibility', 'Fees', 'Admission process'];
  const points = ['Understand your programme options', dual ? 'Choose the right pair of specialisations' : 'Choose the right specialisation', 'Get help with eligibility and documents', 'Know the next steps to admission'];
  return (
    <div className={s.panel}>
      <div className={s.copy}>
        <p className={s.eyebrow}>Personalised admission guidance</p>
        <h2>Connect with our Admission Counsellors.</h2>
        <p className={s.lead}>
          Let our team guide you in your quest for a {degree}. Get clarity on the Online {name}, specialisations, eligibility, fees and the admission process.
        </p>
        <ul className={s.points}>
          {points.map((p) => (
            <li key={p}>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8.5l3.2 3L13 4.5" />
              </svg>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.side}>
        <div className={s.photo}>
          <Image src="/images/faq/faq-learner.webp" alt="" fill sizes="(max-width: 1200px) 100vw, 520px" className={s.img} />
        </div>
        <div className={s.card}>
          <h3>What our counsellors can help with</h3>
          <ul className={s.tags}>
            {topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p>Our counsellors can help you explore the {name} programme and choose the {dual ? 'two specialisations' : 'specialisation'} that match your goals.</p>
          <QueryForm code={code} />
        </div>
      </div>
    </div>
  );
}
