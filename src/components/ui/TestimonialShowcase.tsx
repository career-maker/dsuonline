'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import type { Testimonial } from '@/data/testimonials';
import s from './TestimonialShowcase.module.scss';

const initialOf = (name: string) => name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '').charAt(0);

/**
 * Learner stories as a Swiper carousel: quote bubbles slide on their own every 2.5 s (loop), the track follows a finger / mouse drag,
 * the arrows move one card, and autoplay pauses on mouse hover and while a quote is opened. Works the same on touch screens.
 */
export function TestimonialShowcase({ items, label = 'Testimonials', onSky = false }: { items: Testimonial[]; label?: string; onSky?: boolean }) {
  const n = items.length;
  const sw = useRef<SwiperType | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [pos, setPos] = useState(0);
  const [reduce, setReduce] = useState(false);
  // Swiper's Autoplay module reads the clock while it is built, which Next.js refuses during server rendering: it is added after mount only
  const [live, setLive] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setLive(true);
  }, []);

  const toggle = (k: number) => {
    const next = open === k ? null : k;
    setOpen(next);
    // a quote being read must not slide away
    if (next !== null) sw.current?.autoplay?.stop();
    else if (!reduce) sw.current?.autoplay?.start();
  };

  return (
    <div className={onSky ? `${s.root} ${s.onSky}` : s.root} aria-roledescription="carousel" aria-label={label}>
      <div className={s.side}>
        <svg className={s.mark} viewBox="0 0 64 48" aria-hidden="true">
          <path d="M0 48V28C0 12 9 2 24 0l2 7C17 9 13 15 13 22h11v26H0Zm38 0V28C38 12 47 2 62 0l2 7c-9 2-13 8-13 15h11v26H38Z" fill="currentColor" />
        </svg>
        <div className={s.ctl}>
          <button type="button" onClick={() => sw.current?.slidePrev()} aria-label="Previous story">
            <ChevronLeft />
          </button>
          <span className={s.prog} aria-hidden="true">
            <span style={{ width: `${Math.max(8, ((pos + 1) / n) * 100)}%` }} />
          </span>
          <button type="button" onClick={() => sw.current?.slideNext()} aria-label="Next story">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className={s.rail}>
        <Swiper
          key={live ? 'live' : 'static'}
          className={s.swiper}
          modules={live ? [Autoplay] : []}
          onSwiper={(x) => (sw.current = x)}
          onSlideChange={(x) => setPos(x.realIndex)}
          slidesPerView="auto"
          spaceBetween={20}
          loop={n >= 6}
          loopAdditionalSlides={3}
          speed={700}
          grabCursor
          autoplay={!live || reduce || n < 2 ? false : { delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
          {items.map((t, k) => {
            const isOpen = open === k;
            const dept = [t.course, t.company].filter(Boolean).join(' · ');
            return (
              <SwiperSlide key={k} className={s.item}>
                <blockquote className={s.bubble}>
                  <p className={isOpen ? s.qOpen : s.q}>{t.quote}</p>
                  <button type="button" className={s.more} aria-expanded={isOpen} onClick={() => toggle(k)}>
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
                    <a className={s.play} href={`https://www.youtube.com/watch?v=${t.video}`} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${t.name} video`}>
                      <PlayIcon />
                    </a>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
