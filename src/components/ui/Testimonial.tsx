'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import type { Testimonial } from '@/data/testimonials';
import s from './Testimonial.module.scss';

/**
 * One learner card (home + inner pages). Fills its parent `li` on desktop; on tablet / phone the quote sits under the photo.
 * Text-only: hover / focus shows the quote over the photo. With `video`: play button, plays inside the card.
 */
export function TestimonialCard({ t, big, sizes = '(max-width: 600px) 100vw, 430px' }: { t: Testimonial; big?: boolean; sizes?: string }) {
  const [playing, setPlaying] = useState(false);
  const qRef = useRef<HTMLSpanElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  // hover panel shows the quote a "page" at a time (whole lines only); Show more moves to the next page, the last page offers Show less
  const measure = useCallback(() => {
    const q = qRef.current;
    if (!q) return;
    q.style.maxHeight = '';
    q.scrollTop = 0;
    const lh = parseFloat(getComputedStyle(q).lineHeight) || 20;
    const h = Math.max(1, Math.floor(q.clientHeight / lh)) * lh;
    q.style.maxHeight = `${h}px`;
    setPages(Math.max(1, Math.ceil((q.scrollHeight - 2) / h)));
    setPage(0);
  }, []);

  useEffect(() => {
    measure();
    const q = qRef.current;
    if (!q) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(q.parentElement!);
    return () => ro.disconnect();
  }, [measure]);

  const turn = () => {
    const q = qRef.current;
    if (!q) return;
    const next = page >= pages - 1 ? 0 : page + 1;
    q.scrollTop = next * q.clientHeight;
    setPage(next);
  };
  const who = (
    <>
      <b>{t.name}</b>
      {t.course && <strong>{t.course}</strong>}
      {t.company && <span>{t.company}</span>}
    </>
  );
  const reveal = !t.video && !!t.quote;
  return (
    <div className={`${s.tc} ${big ? s.big : ''}`}>
      <div className={s.media} tabIndex={reveal ? 0 : undefined}>
        {t.img ? (
          <>
            {/* blurred copy fills the card; the sharp photo is shown whole (contain) so faces never get cropped */}
            <Image src={t.img} alt="" aria-hidden="true" fill sizes={sizes} className={s.backdrop} />
            <Image src={t.img} alt={`${t.name}${t.course ? `, ${t.course} learner` : ''}`} fill sizes={sizes} className={s.photo} />
          </>
        ) : (
          <span className={s.initial} aria-hidden="true">
            {t.name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '').charAt(0)}
          </span>
        )}
        <span className={s.shade} />
        <span className={s.info}>
          <span className={s.who}>{who}</span>
        </span>
        {reveal && (
          <span className={s.reveal}>
            <span className={s.q} ref={qRef}>
              {t.quote}
            </span>
            <span className={s.rWho}>
              <span className={s.rText}>
                <span className={s.rName}>{t.name}</span>
                {t.course && <span className={s.rSub}>{t.course}</span>}
              </span>
              {pages > 1 && (
                <button type="button" className={s.more} onClick={turn}>
                  {page >= pages - 1 ? 'Show less' : 'Show more'}
                </button>
              )}
            </span>
          </span>
        )}
        {t.video &&
          (playing ? (
            <iframe
              className={s.player}
              src={`https://www.youtube.com/embed/${t.video}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={`${t.name} testimonial video`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button type="button" className={s.play} onClick={() => setPlaying(true)} aria-label={`Play ${t.name}'s video`}>
              <PlayIcon />
            </button>
          ))}
      </div>
      <div className={s.cap}>
        <b>{t.name}</b>
        {(t.course || t.company) && <span>{[t.course, t.company].filter(Boolean).join(' · ')}</span>}
      </div>
      {t.quote && <p className={s.text}>{t.quote}</p>}
    </div>
  );
}

/** Prev / next buttons for a scroll-snap row (tablet + phone only). */
export function CarouselControls({ target }: { target: RefObject<HTMLElement | null> }) {
  const go = (dir: number) => {
    const el = target.current;
    const li = el?.querySelector('li');
    if (el && li) el.scrollBy({ left: dir * (li.getBoundingClientRect().width + 12), behavior: 'smooth' });
  };
  return (
    <div className={s.controls}>
      <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>
        <ChevronLeft />
      </button>
      <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>
        <ChevronRight />
      </button>
    </div>
  );
}

/** Inner-page list: grid on desktop, one-card (phone) / multi-card (tablet) carousel below. */
export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  const ref = useRef<HTMLUListElement>(null);
  // tablet / phone carousel: next card every 2s (wraps); idle on desktop (grid), while hovered / touched, off-screen or tab hidden
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let hold = false;
    let inView = false;
    const io = new IntersectionObserver(([e]) => (inView = e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    const on = () => (hold = true);
    const off = () => setTimeout(() => (hold = false), 3000);
    el.addEventListener('pointerenter', on);
    el.addEventListener('pointerleave', off);
    el.addEventListener('touchstart', on, { passive: true });
    el.addEventListener('touchend', off, { passive: true });
    const t = setInterval(() => {
      const li = el.querySelector('li');
      if (hold || !inView || document.hidden || !li || el.scrollWidth <= el.clientWidth + 2) return;
      const stepW = li.getBoundingClientRect().width + 12;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + stepW, behavior: 'smooth' });
    }, 2000);
    return () => {
      clearInterval(t);
      io.disconnect();
      el.removeEventListener('pointerenter', on);
      el.removeEventListener('pointerleave', off);
      el.removeEventListener('touchstart', on);
      el.removeEventListener('touchend', off);
    };
  }, []);
  return (
    <>
      <ul ref={ref} className={s.grid}>
        {items.map((t) => (
          <li key={t.name + (t.quote ?? '')} className={s.item}>
            <TestimonialCard t={t} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px" />
          </li>
        ))}
      </ul>
      <CarouselControls target={ref} />
    </>
  );
}
