'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import s from './Kit.module.scss';

const AUTO_MS = 3500;

/** Programme elective cards: photo, icon badge, name and Know More footer. Scrolls sideways and advances by itself when the cards overflow. Photos: public/images/electives/<slug>.webp. */
export function ElectiveCarousel({ items }: { items: { name: string; href: string }[] }) {
  const track = useRef<HTMLUListElement>(null);
  const paused = useRef(false);
  const [overflow, setOverflow] = useState(false);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('li');
    const w = (card?.offsetWidth ?? 280) + 20;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: max, behavior: 'smooth' });
    else el.scrollBy({ left: dir * w, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => setOverflow(el.scrollWidth > el.clientWidth + 4);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const id = reduce ? 0 : window.setInterval(() => {
      if (!paused.current && el.scrollWidth > el.clientWidth + 4) step(1);
    }, AUTO_MS);
    return () => {
      ro.disconnect();
      window.clearInterval(id);
    };
  }, [step]);

  return (
    <div className={s.elWrap} onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }} onFocus={() => { paused.current = true; }} onBlur={() => { paused.current = false; }} onTouchStart={() => { paused.current = true; }} onTouchEnd={() => { paused.current = false; }}>
      <ul className={s.elective} ref={track} aria-label="Program electives">
        {items.map((l) => {
          const slug = l.href.split('/').pop()!.replace('&', '-and-');
          return (
            <li key={l.href}>
              <Link href={l.href}>
                <span className={s.elPhoto}>
                  <Image src={`/images/electives/${slug}.webp`} alt="" fill sizes="(max-width: 600px) 80vw, 300px" />
                  <svg className={s.elIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 4.5h6a4 4 0 0 1 4 4V20a3 3 0 0 0-3-3H2z" />
                    <path d="M22 4.5h-6a4 4 0 0 0-4 4V20a3 3 0 0 1 3-3h7z" />
                  </svg>
                </span>
                <span className={s.elBody}>
                  <b>{l.name}</b>
                </span>
                <span className={s.elFoot}>
                  Know More <i aria-hidden="true">→</i>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {overflow && (
        <div className={s.elArrows}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous electives">
            <ChevronLeft />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next electives">
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
