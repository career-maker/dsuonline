'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import s from './International.module.scss';

/**
 * A list of cards. Desktop: the `className` grid. Mobile (<760px): a swipeable carousel, one card at a time,
 * with previous / next arrow buttons instead of a scrollbar.
 */
export function Rail({ className, label, children, stagger, style }: { className: string; label: string; children: ReactNode; stagger?: boolean; style?: CSSProperties }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (el) setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    measure();
    el.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | undefined;
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 14), behavior: 'smooth' });
  };

  return (
    <div className={s.rail}>
      <ul ref={track} className={`${className} ${s.track}`} data-stagger={stagger ? '' : undefined} style={style}>
        {children}
      </ul>
      <button type="button" className={`${s.railBtn} ${s.railPrev}`} onClick={() => go(-1)} disabled={edge.start} aria-label={`Previous ${label}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
      </button>
      <button type="button" className={`${s.railBtn} ${s.railNext}`} onClick={() => go(1)} disabled={edge.end} aria-label={`Next ${label}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </button>
    </div>
  );
}
