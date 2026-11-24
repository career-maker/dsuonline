'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { CardSlider } from '@/components/ui/CardSlider';
import { useEnquiry } from '@/components/layout/EnquiryProvider';
import { architectCopy } from '@/data/programme-architect';
import s from './ElectiveCombinator.module.scss';

type Elective = { name: string; blurb?: string; slug?: string };

const ICON: Record<'branch' | 'swap' | 'rise' | 'clock', string> = {
  branch: 'M6 3v6a4 4 0 004 4h4a4 4 0 014 4v4M6 3a2 2 0 100 .01M18 21a2 2 0 100-.01M6 13a2 2 0 100 .01',
  swap: 'M4 8h13l-3-3m6 11H7l3 3',
  rise: 'M3 17l6-6 4 4 8-8m0 0h-5m5 0v5',
  clock: 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v5l3 2',
};

function Benefit({ icon, title, text }: { icon: keyof typeof ICON; title: string; text: string }) {
  return (
    <div className={s.benefit}>
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={ICON[icon]} />
      </svg>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

/**
 * Dual specialisation block: pick one elective from the list and it is previewed beside it.
 * Electives come from the page; the wording from `programme-architect.ts`.
 */
export function ElectiveCombinator({ programName, programCode, electives }: { programName: string; programCode: string; electives: Elective[] }) {
  const { open } = useEnquiry();
  const copy = architectCopy(programName, electives.map((e) => e.name), programCode === 'mba');
  const [picked, setPicked] = useState(0);
  const chosen = electives[picked];

  return (
    <div className={s.wrap}>
      <header className={s.head}>
        <div>
          <p className={s.eyebrow}>{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p className={s.lead}>{copy.lead}</p>
        </div>
        <dl className={s.stats}>
          {copy.stats.map((x) => (
            <div key={x.label}>
              <dt>{x.value}</dt>
              <dd>{x.label}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className={s.builder} id="architect">
        <section className={s.pick} aria-labelledby="architect-pick">
          <h3 id="architect-pick">{copy.buildTitle}</h3>
          <p className={s.hint}>{copy.buildHint}</p>
          <ul className={s.options}>
            {electives.map((e, i) => {
              const on = picked === i;
              return (
                <li key={e.name}>
                  <label className={`${s.opt} ${on ? s.on : ''}`}>
                    <input type="radio" name={`architect-${programCode}`} checked={on} onChange={() => setPicked(i)} />
                    <span className={`${s.box} ${s.radio}`} aria-hidden="true" />
                    <span className={s.name}>{e.name}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </section>

        <aside className={s.result} aria-live="polite">
          <p className={s.kicker}>Your specialisation</p>
          {chosen && (
            <div className={s.one}>
              <h3>{chosen.name}</h3>
              {chosen.slug && (
                <span className={s.selPic}>
                  <Image src={`/images/electives/${chosen.slug}.webp`} alt="" fill sizes="(max-width: 1200px) 90vw, 44vw" className={s.selImg} />
                </span>
              )}
              {chosen.blurb && <p>{chosen.blurb}</p>}
            </div>
          )}
          <ArrowLink variant="outline" className={s.cta} onClick={() => open(programCode, chosen ? `Online ${programName} in ${chosen.name}` : undefined)}>
            {copy.cta}
          </ArrowLink>
        </aside>
      </div>

      <ul className={s.benefits}>
        {copy.benefits.map((b) => (
          <li key={b.title}>
            <Benefit {...b} />
          </li>
        ))}
      </ul>
      <div className={s.benefitsMobile}>
        <CardSlider label="Benefits of a dual specialisation" slideWidth="78%" items={copy.benefits.map((b) => <Benefit key={b.title} {...b} />)} />
      </div>
    </div>
  );
}
