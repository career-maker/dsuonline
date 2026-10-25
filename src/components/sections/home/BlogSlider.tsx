'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import s from './Blogs.module.scss';

export type Slide = { slug: string; day: string; ord: string; month: string; title: string; excerpt: string; image: string; alt: string; w: number; h: number };

const AUTO_MS = 2000;

// design arrow: blue chevron with a dark outline inside a 37px ring
const Arrow = ({ d }: { d: string }) => (
  <svg viewBox="0 0 37 37" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} stroke="#212121" strokeWidth="2.8" />
    <path d={d} stroke="#007dc5" strokeWidth="1.2" />
  </svg>
);

export function BlogSlider({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLUListElement>(null);
  const hold = useRef(false);
  const [paused, setPaused] = useState(false);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li');
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const w = (card?.getBoundingClientRect().width ?? el.clientWidth) + gap;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    else el.scrollBy({ left: dir * w, behavior: 'smooth' });
  }, []);

  // auto-advance every 2s; paused while hovered / focused / tab hidden; off for reduced motion
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => {
      if (!hold.current && !document.hidden) step(1);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, [step]);

  const pause = (v: boolean) => {
    hold.current = v;
    setPaused(v);
  };

  return (
    <>
      <header className={s.head}>
        <div>
          <p className={s.eyebrow}>Blogs &amp; Insights</p>
          <div className={s.row}>
            <h2>Latest Blogs &amp; Insights</h2>
            <div className={s.arrows}>
              <button type="button" aria-label="Previous posts" onClick={() => step(-1)}>
                <Arrow d="M23 9 13 18.5 23 28" />
              </button>
              <button type="button" aria-label="Next posts" onClick={() => step(1)}>
                <Arrow d="M14 9 24 18.5 14 28" />
              </button>
            </div>
          </div>
        </div>
        <ArrowLink href="/resources/blogs" className={s.all}>
          View All
        </ArrowLink>
      </header>

      <ul
        ref={track}
        className={`${s.grid} ${paused ? s.paused : ''}`}
        aria-label="Latest blog posts"
        onMouseEnter={() => pause(true)}
        onMouseLeave={() => pause(false)}
        onFocus={() => pause(true)}
        onBlur={() => pause(false)}
        onTouchStart={() => pause(true)}
        onTouchEnd={() => setTimeout(() => pause(false), 4000)}
      >
        {slides.map((b, i) => (
          <li key={b.slug} className={s.card}>
            <Image src={b.image} alt={b.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1200px) 48vw, 32vw" className={s.photo} loading={i < 3 ? 'eager' : 'lazy'} />
            <span className={s.shade} />
            <time className={s.date}>
              <strong>
                {b.day}
                <sup>{b.ord}</sup>
              </strong>
              <span>{b.month}</span>
            </time>
            <div className={s.body}>
              <h3>{b.title}</h3>
              <p>{b.excerpt}</p>
              <Link href={`/resources/blogs/${b.slug}`} className={s.read}>
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
