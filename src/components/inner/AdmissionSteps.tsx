'use client';

import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import s from './AdmissionSteps.module.scss';

type Step = { title: string; text: string };

const ic = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const wrap = (d: ReactNode) => (
  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" {...ic}>
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

/** Admission process: numbered timeline (hover / focus moves the highlight), one column per step; stacks on phones. */
export function AdmissionSteps({ eyebrow, title, steps, image }: { eyebrow?: string; title: string; steps: Step[]; image?: { src: string; alt: string; w?: number; h?: number } }) {
  const [active, setActive] = useState(0);
  return (
    <div className={s.wrap}>
      <header className={s.head}>
        {eyebrow && (
          <p className={s.eyebrow}>
            {eyebrow}
            <i aria-hidden="true" />
          </p>
        )}
        <h2>{title}</h2>
      </header>
      {image && (
        <div className={s.photo}>
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 40vw" />
        </div>
      )}

      <ol className={s.steps} style={{ ['--n' as string]: steps.length }}>
        {steps.map((st, i) => (
          <li key={st.title} className={i === active ? s.on : undefined} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
            <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
            <div className={s.card} tabIndex={0}>
              <span className={s.ico}>{icons[i % icons.length]}</span>
              <h3>{st.title}</h3>
              <p>{st.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
