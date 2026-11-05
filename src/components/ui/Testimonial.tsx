'use client';

import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Testimonial } from '@/data/testimonials';
import { TestimonialShowcase } from './TestimonialShowcase';
import s from './Testimonial.module.scss';

/**
 * One learner card (home, testimonials page, programme pages): the quote first, then a small photo with name and department.
 * With `video`: a Watch button plays the video inside the card.
 */
export function TestimonialCard({ t, big }: { t: Testimonial; big?: boolean; sizes?: string }) {
  const [playing, setPlaying] = useState(false);
  const qRef = useRef<HTMLParagraphElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  // the quote area fills the card; it shows whole lines only and "Show more" moves to the next page ("Show less" returns)
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
  const initial = t.name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '').charAt(0);
  const dept = [t.course, t.company].filter(Boolean).join(' · ');
  return (
    <Card className={`${s.tc} ${big ? s.big : ''}`}>
      <CardContent className={s.body}>
        {t.course && <span className={s.tag}>{t.course}</span>}
        <p className={s.q} ref={qRef}>
          {t.quote}
        </p>
        {/* always rendered (hidden when the quote fits) so showing it never changes the quote area's height */}
        <button type="button" className={s.more} onClick={turn} style={pages > 1 ? undefined : { visibility: 'hidden' }} tabIndex={pages > 1 ? undefined : -1} aria-hidden={pages > 1 ? undefined : true}>
          {page >= pages - 1 ? 'Show less' : 'Show more'}
        </button>
      </CardContent>
      <CardFooter className={s.foot}>
        <Avatar>
          {t.img ? <AvatarImage src={t.img} alt={`${t.name}${t.course ? `, ${t.course} learner` : ''}`} /> : <AvatarFallback>{initial}</AvatarFallback>}
        </Avatar>
        <span className={s.who}>
          <b>{t.name}</b>
          {dept && <span>{dept}</span>}
        </span>
        {t.video && (
          <button type="button" className={s.play} onClick={() => setPlaying(true)} aria-label={`Watch ${t.name}'s video`}>
            <PlayIcon /> Watch
          </button>
        )}
      </CardFooter>
      {t.video && playing && (
        <div className={s.player}>
          <iframe
            src={`https://www.youtube.com/embed/${t.video}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`${t.name} testimonial video`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <button type="button" className={s.close} onClick={() => setPlaying(false)} aria-label="Close video">
            ✕
          </button>
        </div>
      )}
    </Card>
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

/** Inner-page learner stories (testimonials page, programme pages): the showcase layout. */
export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  return <TestimonialShowcase items={items} onSky />;
}
