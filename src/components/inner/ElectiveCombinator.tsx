'use client';

import { useState } from 'react';
import { useEnquiry } from '@/components/layout/EnquiryProvider';
import s from './ElectiveCombinator.module.scss';

/**
 * "Pair 1 Major + 1 Minor": pick a major and a minor elective and see the combined profile.
 * Copy here is placeholder text (to be replaced later); electives and hiring sectors come from the page itself.
 */
export function ElectiveCombinator({ programName, programCode, electives, sectors }: { programName: string; programCode: string; electives: string[]; sectors: string[] }) {
  const { open } = useEnquiry();
  const [major, setMajor] = useState(0);
  const [minor, setMinor] = useState(electives.length > 1 ? 1 : 0);
  const a = electives[major];
  const b = electives[minor];

  const pick = (role: 'major' | 'minor', i: number) => {
    if (role === 'major') {
      if (i === minor && electives.length > 1) setMinor(major); // swap so the two never clash
      setMajor(i);
    } else {
      if (i === major && electives.length > 1) setMajor(minor);
      setMinor(i);
    }
  };

  const panel = (role: 'major' | 'minor') => {
    const cur = role === 'major' ? major : minor;
    const other = role === 'major' ? minor : major;
    return (
      <div className={s.panel}>
        <div className={s.panelHead}>
          <h3>
            <span className={`${s.no} ${role === 'minor' ? s.noAlt : ''}`}>{role === 'major' ? 1 : 2}</span>
            {role === 'major' ? 'Select Major Elective' : 'Select Complementary Minor'}
          </h3>
          <p>
            Current: <b>{electives[cur]}</b>
          </p>
        </div>
        <div className={s.tiles} role="radiogroup" aria-label={role === 'major' ? 'Major elective' : 'Minor elective'}>
          {electives.map((name, i) => (
            <button
              key={name}
              type="button"
              role="radio"
              aria-checked={i === cur}
              aria-disabled={i === other && electives.length > 1 ? true : undefined}
              className={`${s.tile} ${i === cur ? (role === 'major' ? s.onMajor : s.onMinor) : ''} ${i === other && electives.length > 1 ? s.taken : ''}`}
              onClick={() => i !== other && pick(role, i)}
            >
              {name}
              {i === other && electives.length > 1 && <small>{role === 'major' ? 'Selected as minor' : 'Selected as major'}</small>}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={s.wrap}>
      <header className={s.head}>
        <p className={s.pill}>Interactive Elective Architect</p>
        <h2>
          Pair 1 Major + 1 Minor:
          <span className={s.accent}> Unlock Multi-Dimensional Market Dominance</span>
        </h2>
        <p className={s.lead}>
          Choose your primary major and a complementary minor from the {programName} electives below to see how the combination shapes your career profile.
        </p>
      </header>

      <div className={s.grid}>
        <div className={s.pickers}>
          {panel('major')}
          {electives.length > 1 && panel('minor')}
        </div>

        <aside className={s.profile} aria-live="polite">
          <p className={s.kicker}>Synergy profile</p>
          <div className={s.profileHead}>
            <h3>
              {a}
              {electives.length > 1 && <> + {b}</>}
            </h3>
            <span className={s.demand}>High demand</span>
          </div>

          <p className={s.label}>Job market strategic advantage</p>
          <p className={s.body}>
            {electives.length > 1
              ? `Pairing ${a} with ${b} gives you depth in one discipline and range in another, making you a stronger fit for roles that cut across both areas.`
              : `${a} builds focused depth for roles in this area.`}
          </p>

          <p className={s.label}>Prime target job roles</p>
          <ul className={s.roles}>
            <li>{a} Manager</li>
            {electives.length > 1 && <li>{b} Specialist</li>}
            {electives.length > 1 && (
              <li>
                {a} &amp; {b} Consultant
              </li>
            )}
            <li>Program Lead – {a}</li>
          </ul>

          <div className={s.meta}>
            <div>
              <span>Target hiring sectors</span>
              <b>{sectors.slice(0, 4).join(', ')}</b>
            </div>
            <div>
              <span>Your selection</span>
              <b>
                {a} (Major){electives.length > 1 && <>, {b} (Minor)</>}
              </b>
            </div>
          </div>

          <button type="button" className={s.cta} onClick={() => open(programCode)}>
            Lock this combination in your application
          </button>
        </aside>
      </div>
    </div>
  );
}
