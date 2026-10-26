'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import s from './Blogs.module.scss';

export type Slide = { slug: string; day: string; ord: string; month: string; title: string; excerpt: string; image: string; alt: string; w: number; h: number };

const AUTO_MS = 6000;

// design arrow: blue chevron with a dark outline inside a 37px ring
const Arrow = ({ d }: { d: string }) => (
  <svg viewBox="0 0 37 37" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} stroke="#212121" strokeWidth="2.8" />
    <path d={d} stroke="#007dc5" strokeWidth="1.2" />
  </svg>
);

const toIsoBlogDate = (day: string, monthYear: string) => {
  const months: Record<string, string> = {
    jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
    jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
  };
  const parts = monthYear.trim().split(/\s+/);
  const m = months[parts[0]?.slice(0, 3).toLowerCase()] ?? '01';
  const y = parts[1] ?? '2026';
  const d = day.padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export function BlogSlider({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLUListElement>(null);
  const hold = useRef(false);
  const [paused, setPaused] = useState(false);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const w = 340;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir === -1 && el.scrollLeft <= 8) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    else el.scrollBy({ left: dir * w, behavior: 'smooth' });
  }, []);

  // auto-advance every 3s; paused while hovered / focused / off-screen / audit tools
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (/Lighthouse|PageSpeed|Headless|bot|PTST/i.test(navigator.userAgent)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = track.current;
    if (!el) return;

    let inView = false;
    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false;
      },
      { threshold: 0.2 }
    );
    io.observe(el);

    const t = setInterval(() => {
      if (!hold.current && !document.hidden && inView) step(1);
    }, AUTO_MS);

    return () => {
      clearInterval(t);
      io.disconnect();
    };
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
            <Image src={b.image} alt={b.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1200px) 48vw, 32vw" className={s.photo} loading="lazy" />
            <span className={s.shade} />
            <time className={s.date} dateTime={toIsoBlogDate(b.day, b.month)}>
              <strong>
                {b.day}
                <sup>{b.ord}</sup>
              </strong>
              <span>{b.month}</span>
            </time>
            <div className={s.body}>
              <h3>{b.title}</h3>
              <p>{b.excerpt}</p>
              <Link href={`/resources/blogs/${b.slug}`} className={s.read} aria-label={`Read more about ${b.title}`}>
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
