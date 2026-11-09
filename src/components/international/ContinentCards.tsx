'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { continents } from './data';
import { EVT_ACTIVE, EVT_PICK } from './HeroMap';
import s from './International.module.scss';

/** Six continent photo cards. Following the hero map: the lit continent is highlighted; picking one traces its route up there. */
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
    <div className={s.continents} data-stagger>
      {continents.map((c, i) => (
        <button key={c.n} type="button" className={`${s.cont} ${i === active ? s.on : ''}`} aria-pressed={i === active} onClick={() => pick(i)}>
          <Image src={`/images/international/${c.img}.webp`} alt={`Online learner from ${c.n}`} fill sizes="(max-width: 600px) 50vw, (max-width: 1080px) 33vw, 16vw" />
          <span className={s.contShade} aria-hidden="true" />
          <span className={s.contTxt}>
            <small>Learners from</small>
            <b>{c.n}</b>
            <span className={s.contEx}>{c.ex}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
