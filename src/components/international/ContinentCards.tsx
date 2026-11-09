'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useDragScroll } from '@/components/ui/useDragScroll';
import { continents } from './data';
import { EVT_ACTIVE, EVT_PICK } from './HeroMap';
import s from './International.module.scss';

/** Continent photos, captioned underneath. Follows the hero map; picking one traces its route up there. The row scrolls sideways once there are more photos than fit. */
export function ContinentCards() {
  const [active, setActive] = useState(0);
  const track = useRef<HTMLUListElement>(null);
  useDragScroll(track);

  useEffect(() => {
    const on = (e: Event) => {
      const i = (e as CustomEvent<number>).detail;
      setActive(i);
      // keep the lit photo in view when the row scrolls (sideways only: never moves the page)
      const el = track.current;
      const card = el?.children[i] as HTMLElement | undefined;
      if (el && card && el.scrollWidth > el.clientWidth) el.scrollTo({ left: card.offsetLeft - el.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' });
    };
    window.addEventListener(EVT_ACTIVE, on);
    return () => window.removeEventListener(EVT_ACTIVE, on);
  }, []);

  const pick = (i: number) => {
    window.dispatchEvent(new CustomEvent(EVT_PICK, { detail: i }));
    document.getElementById('hero-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <ul ref={track} className={s.continents} data-stagger>
      {continents.map((c, i) => (
        <li key={c.n} className={i === active ? s.on : ''}>
          <button type="button" aria-pressed={i === active} onClick={() => pick(i)}>
            <span className={s.contPhoto}>
              <Image src={`/images/international/${c.img}.webp`} alt={`Online learner from ${c.n}`} fill sizes="(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 16vw" />
            </span>
            <b>{c.n}</b>
            <span className={s.contEx}>{c.ex}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
