'use client';

import { useSyncExternalStore, type ReactNode } from 'react';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import s from './CardSlider.module.scss';

/**
 * Swiper-based carousel used for every slider on the site: the track follows the finger / mouse drag, then snaps.
 * `slideWidth` is a CSS length for one slide (e.g. "72%"); slides are `slidesPerView: auto` so any count works.
 * `autoplay` moves one slide every few seconds (rewinds at the end, pauses while touched, off for reduced motion).
 */
export function CardSlider({ items, slideWidth = '72%', gap = 12, label, autoplay = false }: { items: ReactNode[]; slideWidth?: string; gap?: number; label: string; autoplay?: boolean }) {
  // Swiper's Autoplay module reads the clock while it is built, which Next.js refuses during server rendering: it is added after mount only
  const live = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const reduce = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      mq.addEventListener('change', cb);
      return () => mq.removeEventListener('change', cb);
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  );
  const auto = autoplay && live && !reduce && items.length > 1;

  return (
    <Swiper
      key={auto ? 'auto' : 'static'}
      className={s.slider}
      style={{ ['--slide-w' as string]: slideWidth }}
      modules={auto ? [Pagination, Keyboard, Autoplay] : [Pagination, Keyboard]}
      slidesPerView="auto"
      spaceBetween={gap}
      grabCursor
      keyboard
      rewind={auto}
      autoplay={auto ? { delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
      pagination={{ clickable: true }}
      a11y={{ enabled: false }}
      aria-label={label}
    >
      {items.map((it, i) => (
        <SwiperSlide key={i} className={s.slide}>
          {it}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
