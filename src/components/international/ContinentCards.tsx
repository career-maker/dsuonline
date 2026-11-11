'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { continents } from './data';
import { EVT_ACTIVE, EVT_PICK } from './HeroMap';
import { Rail } from './Rail';
import s from './International.module.scss';

/** Continent photos with the name on them. Follows the hero map; picking one traces its route up there. */
export function ContinentCards() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const on = (e: Event) => setActive((e as CustomEvent<number>).detail);
    window.addEventListener(EVT_ACTIVE, on);
    return () => window.removeEventListener(EVT_ACTIVE, on);
  }, []);

  const pick = (i: number) => {
    window.dispatchEvent(new CustomEvent(EVT_PICK, { detail: i }));
    document.getElementById('hero-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Rail className={s.continents} label="continent" stagger>
      {continents.map((c, i) => (
        <li key={c.n}>
          <button type="button" aria-pressed={i === active} className={i === active ? s.on : ''} onClick={() => pick(i)}>
            <Image src={`/images/international/${c.img}.webp`} alt={`Online learner from ${c.n}`} fill sizes="(max-width: 760px) 80vw, (max-width: 1200px) 33vw, 20vw" />
            <span className={s.contFlag} aria-hidden="true">
              {c.e}
            </span>
            <span className={s.contTxt}>
              <small>Learners from</small>
              <b>{c.n}</b>
            </span>
          </button>
        </li>
      ))}
    </Rail>
  );
}
