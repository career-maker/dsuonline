'use client';

import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import type { Testimonial } from '@/data/testimonials';
import s from './TestimonialShowcase.module.scss';

const initialOf = (name: string) => name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '').charAt(0);

/**
 * Learner stories: one large portrait with the quote beside it, the other learners as a thumbnail strip
 * (the one before + the next three). Click a thumbnail to bring that learner forward; autoplays, pauses on hover / focus / touch.
 */
export function TestimonialShowcase({ items, label = 'Testimonials', interval = 2000 }: { items: Testimonial[]; label?: string; interval?: number }) {
  const n = items.length;
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);
  const [open, setOpen] = useState(false); // quote expanded
  const [long, setLong] = useState(false); // quote taller than its clamp
  const [playing, setPlaying] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const qRef = useRef<HTMLParagraphElement>(null);
  const t = items[i];

  const go = (k: number) => {
    setI(((k % n) + n) % n);
    setOpen(false);
    setPlaying(false);
  };

  // does the quote need "Read more"? (measured collapsed)
  useLayoutEffect(() => {
    const q = qRef.current;
    if (!q) return;
    setLong(!open && q.scrollHeight > q.clientHeight + 2 ? true : long && open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, open]);

  // autoplay: next learner; idle while hovered / focused / touched, quote expanded, video playing, off-screen or tab hidden
  useEffect(() => {
    const el = rootRef.current;
    if (!el || n < 2 || hold || open || playing || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let inView = false;
    const io = new IntersectionObserver(([e]) => (inView = e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    const id = setInterval(() => {
      if (inView && !document.hidden) setI((v) => (v + 1) % n);
    }, interval);
    return () => {
      clearInterval(id);
      io.disconnect();
    };
  }, [n, hold, open, playing, interval]);

  if (!t) return null;
  const thumbs = Array.from(new Set([i - 1, i + 1, i + 2, i + 3].map((k) => ((k % n) + n) % n))).filter((k) => k !== i);
  const dept = [t.course, t.company].filter(Boolean).join(' · ');

  return (
    <div
      ref={rootRef}
      className={s.root}
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
      onTouchStart={() => setHold(true)}
      onTouchEnd={() => setTimeout(() => setHold(false), 4000)}
    >
      <figure className={s.stage} key={i}>
        <div className={s.photo}>
          {t.img ? (
            <Image src={t.img} alt={`${t.name}${t.course ? `, ${t.course} learner` : ''}`} fill sizes="(max-width: 900px) 80vw, 340px" priority={i === 0} />
          ) : (
            <span className={s.initial} aria-hidden="true">
              {initialOf(t.name)}
            </span>
          )}
          {t.video &&
            (playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${t.video}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={`${t.name} testimonial video`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <button type="button" className={s.play} onClick={() => setPlaying(true)} aria-label={`Watch ${t.name}'s video`}>
                <PlayIcon />
              </button>
            ))}
        </div>

        <figcaption className={s.copy}>
          <span className={s.no}>#{i + 1}</span>
          <h3>{t.name}</h3>
          {dept && <p className={s.dept}>{dept}</p>}
          <blockquote className={s.quote}>
            <p ref={qRef} className={open ? s.qOpen : s.q}>
              {t.quote}
            </p>
          </blockquote>
          {(long || open) && (
            <button type="button" className={s.more} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
              {open ? 'Show less' : 'Show more'}
            </button>
          )}
        </figcaption>
      </figure>

      <div className={s.strip} role="group" aria-label="More learner stories">
        {thumbs.map((k) => (
          <button key={k} type="button" className={s.thumb} onClick={() => go(k)} aria-label={`Show ${items[k].name}'s story`}>
            {items[k].img ? <Image src={items[k].img!} alt="" fill sizes="96px" /> : <span aria-hidden="true">{initialOf(items[k].name)}</span>}
            <i>{items[k].name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '')}</i>
          </button>
        ))}
      </div>

      {n > 1 && (
        <div className={s.arrows}>
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous story">
            <ChevronLeft />
          </button>
          <span aria-live="polite">
            {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next story">
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
