'use client';

import Image from 'next/image';
import { useRef, useState, type RefObject } from 'react';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import type { Testimonial } from '@/data/testimonials';
import s from './Testimonial.module.scss';

/**
 * One learner card (home + inner pages). Fills its parent `li` on desktop; on tablet / phone the quote sits under the photo.
 * Text-only: hover / focus shows the quote over the photo. With `video`: play button, plays inside the card.
 */
export function TestimonialCard({ t, big, sizes = '(max-width: 600px) 100vw, 430px' }: { t: Testimonial; big?: boolean; sizes?: string }) {
  const [playing, setPlaying] = useState(false);
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
          <span className={s.reveal} aria-hidden="true">
            <span className={s.q}>{t.quote}</span>
            <span className={`${s.who} ${s.whoB}`}>{who}</span>
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
