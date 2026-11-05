'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import type { Testimonial } from '@/data/testimonials';
import s from './TestimonialShowcase.module.scss';

const initialOf = (name: string) => name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '').charAt(0);

/**
 * Learner stories as a marquee: quote bubbles drift left on a loop (JS-driven so the arrows and the progress line share one position).
 * Pauses on hover / focus / touch / an opened quote and when off-screen; the arrows nudge it one card.
 */
export function TestimonialShowcase({ items, label = 'Testimonials', onSky = false }: { items: Testimonial[]; label?: string; onSky?: boolean }) {
  const n = items.length;
  const railRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const hold = useRef(false);
  const opened = useRef(false);
  const [open, setOpen] = useState<number | null>(null);
  const loop = [...items, ...items];

  useEffect(() => {
    const el = railRef.current;
    if (!el || n < 2) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let inView = false;
    const io = new IntersectionObserver(([e]) => (inView = e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    const tick = () => {
      const half = el.scrollWidth / 2;
      if (!reduce && inView && !hold.current && !opened.current && !document.hidden) el.scrollLeft += 0.6;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft < 0) el.scrollLeft += half;
      if (barRef.current) barRef.current.style.width = `${Math.max(8, (el.scrollLeft / half) * 100)}%`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [n]);

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    const card = el?.querySelector('li');
    if (el && card) el.scrollBy({ left: dir * (card.clientWidth + 20), behavior: 'smooth' });
  };

  const toggle = (k: number) => {
    const next = open === k ? null : k;
    setOpen(next);
    opened.current = next !== null;
  };

  return (
    <div
      className={onSky ? `${s.root} ${s.onSky}` : s.root}
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => (hold.current = true)}
      onMouseLeave={() => (hold.current = false)}
      onFocus={() => (hold.current = true)}
      onBlur={() => (hold.current = false)}
      onTouchStart={() => (hold.current = true)}
      onTouchEnd={() => setTimeout(() => (hold.current = false), 3000)}
    >
      <div className={s.side}>
        <svg className={s.mark} viewBox="0 0 64 48" aria-hidden="true">
          <path d="M0 48V28C0 12 9 2 24 0l2 7C17 9 13 15 13 22h11v26H0Zm38 0V28C38 12 47 2 62 0l2 7c-9 2-13 8-13 15h11v26H38Z" fill="currentColor" />
        </svg>
        <div className={s.ctl}>
          <button type="button" onClick={() => nudge(-1)} aria-label="Previous story">
            <ChevronLeft />
          </button>
          <span className={s.prog} aria-hidden="true">
            <span ref={barRef} />
          </span>
          <button type="button" onClick={() => nudge(1)} aria-label="Next story">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className={s.rail} ref={railRef}>
        <ul>
          {loop.map((t, k) => {
            const dup = k >= n;
            const isOpen = open === k;
            const dept = [t.course, t.company].filter(Boolean).join(' · ');
            return (
              <li key={k} className={s.item} aria-hidden={dup || undefined}>
                <blockquote className={s.bubble}>
                  <p className={isOpen ? s.qOpen : s.q}>{t.quote}</p>
                  <button type="button" className={s.more} tabIndex={dup ? -1 : undefined} aria-expanded={isOpen} onClick={() => toggle(k)}>
                    {isOpen ? 'Show less' : 'Show more'}
                  </button>
                </blockquote>
                <div className={s.who}>
                  <span className={s.av}>{t.img ? <Image src={t.img} alt="" fill sizes="56px" /> : <b aria-hidden="true">{initialOf(t.name)}</b>}</span>
                  <span className={s.nm}>
                    <strong>{t.name}</strong>
                    {dept && <em>{dept}</em>}
                  </span>
                  {t.video && (
                    <a className={s.play} href={`https://www.youtube.com/watch?v=${t.video}`} target="_blank" rel="noopener noreferrer" tabIndex={dup ? -1 : undefined} aria-label={`Watch ${t.name} video`}>
                      <PlayIcon />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
