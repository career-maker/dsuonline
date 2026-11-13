import type { ReactNode } from 'react';
import { CardSlider } from '@/components/ui/CardSlider';
import s from './AdmissionSteps.module.scss';

type Step = { title: string; text: string };

// one title: keep "A" with "Step-by-Step" so it never ends a line on its own
const heading = (t: string): ReactNode => t.replace(/A (?=Step)/, 'A ');

const ic = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const wrap = (d: ReactNode) => (
  <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" {...ic}>
    {d}
  </svg>
);
const icons: ReactNode[] = [
  wrap(<><rect x="6" y="7" width="20" height="14" rx="1.5" /><path d="M3 25h26" /></>), // register
  wrap(<><rect x="4" y="7" width="24" height="18" rx="2.5" /><path d="m5 10 11 8 11-8" /></>), // verify
  wrap(<><rect x="4" y="8" width="24" height="17" rx="3" /><path d="M4 14h24M22 19h2" /></>), // fee
  wrap(<><path d="M8 4h12l5 5v19H8z" /><path d="M20 4v5h5M12 15h9M12 20h9M12 25h5" /></>), // details
  wrap(<><path d="M16 21V6M10 12l6-6 6 6" /><path d="M5 22v4h22v-4" /></>), // upload
  wrap(<><circle cx="16" cy="16" r="11" /><path d="m11 16.5 3.5 3.5 7-8" /></>), // submit
  wrap(<><path d="M2 12 16 5l14 7-14 7z" /><path d="M8 15v6c0 2 4 4 8 4s8-2 8-4v-6" /></>), // enrolled
];

function StepCard({ st, i }: { st: Step; i: number }) {
  // the colour shifts by one every row of four, so neighbours (across, down and in the phone carousel) never match
  return (
    <article className={`${s.card} ${s[`t${(i + Math.floor(i / 4)) % 4}`]}`}>
      <div className={s.top}>
        <span className={s.ico}>{icons[i % icons.length]}</span>
        <span className={s.step}>Step {i + 1}</span>
      </div>
      <h3>{st.title}</h3>
      <p>{st.text}</p>
    </article>
  );
}

/** Admission process: one tinted card per step. Grid on desktop / tablet, Swiper carousel on phones. */
export function AdmissionSteps({ eyebrow, title, steps }: { eyebrow?: string; title?: string; steps: Step[] }) {
  return (
    <div className={s.wrap}>
      <header className={s.head}>
        {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
        {title && <h2>{heading(title)}</h2>}
      </header>
      <ol className={s.grid}>
        {steps.map((st, i) => (
          <li key={st.title}>
            <StepCard st={st} i={i} />
          </li>
        ))}
      </ol>
      <div className={s.mobile}>
        <CardSlider label="Admission steps" slideWidth="78%" items={steps.map((st, i) => <StepCard key={st.title} st={st} i={i} />)} />
      </div>
    </div>
  );
}
