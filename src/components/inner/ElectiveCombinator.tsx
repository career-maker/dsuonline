'use client';

import { useState } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { CardSlider } from '@/components/ui/CardSlider';
import { useEnquiry } from '@/components/layout/EnquiryProvider';
import { architectCopy } from '@/data/programme-architect';
import s from './ElectiveCombinator.module.scss';

type Elective = { name: string; blurb?: string };

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
 * Dual specialisation builder: tick any two electives (never more than two) and the combination is previewed beside the list.
 * Electives come from the page; the wording from `programme-architect.ts`.
 */
export function ElectiveCombinator({ programName, programCode, electives }: { programName: string; programCode: string; electives: Elective[] }) {
  const { open } = useEnquiry();
  const copy = architectCopy(programName, electives.map((e) => e.name), programCode === 'mba');
  const [picked, setPicked] = useState<number[]>(electives.length > 1 ? [0, 1] : [0]); // selection order = badge number
  const full = picked.length >= 2;

  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : p.length < 2 ? [...p, i] : p));
  const chosen = picked.map((i) => electives[i]);

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
              const n = picked.indexOf(i);
              const on = n >= 0;
              const locked = full && !on;
              return (
                <li key={e.name}>
                  <label className={`${s.opt} ${on ? s.on : ''} ${locked ? s.locked : ''}`}>
                    <input type="checkbox" checked={on} disabled={locked} onChange={() => toggle(i)} />
                    <span className={s.box} aria-hidden="true">
                      {on ? n + 1 : ''}
                    </span>
                    <span className={s.name}>{e.name}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          <div className={s.foot}>
            <span aria-live="polite">{picked.length} of 2 selected</span>
            <button type="button" onClick={() => setPicked([])} disabled={!picked.length}>
              Clear selection
            </button>
          </div>
        </section>

        <aside className={s.result} aria-live="polite">
          <p className={s.kicker}>Your dual specialisation</p>
          <h3>{chosen.length === 2 ? `Online ${programName} in ${chosen[0].name} & ${chosen[1].name}` : `Online ${programName} with Dual Specialisation`}</h3>
          <div className={s.pair}>
            {[0, 1].map((slot) => {
              const e = chosen[slot];
              return e ? (
                <div key={e.name} className={s.sel}>
                  <b>{e.name}</b>
                  {e.blurb && <p>{e.blurb}</p>}
                </div>
              ) : (
                <div key={slot} className={`${s.sel} ${s.empty}`}>
                  <b>Choose a specialisation</b>
                  <p>Tick {slot === 0 ? 'your first' : 'one more'} from the list.</p>
                </div>
              );
            })}
          </div>
          <ArrowLink variant="outline" className={s.cta} onClick={() => open(programCode)}>
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
