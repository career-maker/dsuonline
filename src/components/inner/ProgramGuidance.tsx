'use client';

import Image from 'next/image';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { useEnquiry } from '@/components/layout/EnquiryProvider';
import { site } from '@/data/site';
import s from './ProgramGuidance.module.scss';

/** "Personalised admission guidance": counsellor pitch with a topic card. The button opens the enquiry popup (no backend yet). */
export function ProgramGuidance({ name, code, degree, dual }: { name: string; code: string; degree: string; dual: boolean }) {
  const { open } = useEnquiry();
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
          <Image src="/images/faq/cta.webp" alt="" fill sizes="(max-width: 1200px) 100vw, 520px" className={s.img} />
        </div>
        <div className={s.card}>
          <h3>What our counsellors can help with</h3>
          <ul className={s.tags}>
            {topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p>Our counsellors can help you explore the {name} programme and choose the {dual ? 'two specialisations' : 'specialisation'} that match your goals.</p>
          <div className={s.actions}>
            <ArrowLink variant="outline" onClick={() => open(code)}>
              Chat with a Counsellor
            </ArrowLink>
            <a href={`tel:${site.phone}`}>Call {site.phoneLabel}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
