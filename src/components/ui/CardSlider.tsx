'use client';

import type { ReactNode } from 'react';
import { Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import s from './CardSlider.module.scss';

/**
 * Swiper-based carousel used for every slider on the site: the track follows the finger / mouse drag, then snaps.
 * `slideWidth` is a CSS length for one slide (e.g. "72%"); slides are `slidesPerView: auto` so any count works.
 */
export function CardSlider({ items, slideWidth = '72%', gap = 12, label }: { items: ReactNode[]; slideWidth?: string; gap?: number; label: string }) {
  return (
    <Swiper
      className={s.slider}
      style={{ ['--slide-w' as string]: slideWidth }}
      modules={[Pagination, Keyboard]}
      slidesPerView="auto"
      spaceBetween={gap}
      grabCursor
      keyboard
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
