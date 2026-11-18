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
 * Dual specialisation builder: pick one major and one minor elective (never the same one twice); the combination is previewed beside the lists.
 * Electives come from the page; the wording from `programme-architect.ts`.
 */
export function ElectiveCombinator({ programName, programCode, electives }: { programName: string; programCode: string; electives: Elective[] }) {
  const { open } = useEnquiry();
  const copy = architectCopy(programName, electives.map((e) => e.name), programCode === 'mba');
  const [major, setMajor] = useState<number | null>(0);
  const [minor, setMinor] = useState<number | null>(electives.length > 1 ? 1 : null);
  const chosen = [major, minor].map((i) => (i === null ? undefined : electives[i]));
  const both = !!chosen[0] && !!chosen[1];
  const title = both ? `Online ${programName} in ${chosen[0]!.name} & ${chosen[1]!.name}` : undefined;

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
          {([
            ['Major elective', major, setMajor, minor],
            ['Minor elective', minor, setMinor, major],
          ] as const).map(([label, val, set, other]) => (
            <fieldset key={label} className={s.group}>
              <legend>{label}</legend>
              <ul className={s.options}>
                {electives.map((e, i) => {
                  const on = val === i;
                  const locked = other === i; // same elective cannot be both major and minor
                  return (
                    <li key={e.name}>
                      <label className={`${s.opt} ${on ? s.on : ''} ${locked ? s.locked : ''}`}>
                        <input type="radio" name={`${label}-${programCode}`} checked={on} disabled={locked} onChange={() => set(i)} />
                        <span className={s.box} aria-hidden="true" />
                        <span className={s.name}>{e.name}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          ))}
          <div className={s.foot}>
            <span aria-live="polite">{(major !== null ? 1 : 0) + (minor !== null ? 1 : 0)} of 2 selected</span>
            <button type="button" onClick={() => { setMajor(null); setMinor(null); }} disabled={major === null && minor === null}>
              Clear selection
            </button>
          </div>
        </section>

        <aside className={s.result} aria-live="polite">
          <p className={s.kicker}>Your dual specialisation</p>
          <h3>{title ?? `Online ${programName} with Dual Specialisation`}</h3>
          <div className={s.pair}>
            {(['Major', 'Minor'] as const).map((role, slot) => {
              const e = chosen[slot];
              return e ? (
                <div key={role} className={s.sel}>
                  <small>{role}</small>
                  <b>{e.name}</b>
                  {e.blurb && <p>{e.blurb}</p>}
                </div>
              ) : (
                <div key={role} className={`${s.sel} ${s.empty}`}>
                  <small>{role}</small>
                  <b>Choose a {role.toLowerCase()} elective</b>
                </div>
              );
            })}
          </div>
          <ArrowLink variant="outline" className={s.cta} onClick={() => open(programCode, title)}>
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
