'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useLoopCarousel } from '@/hooks/useLoopCarousel';
import { Icon } from '@/components/ui/Icon';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import { learnerVideos, tickerItems } from '@/data/home';
import s from './Testimonials.module.scss';

export function Testimonials() {
  const loop = [...tickerItems, ...tickerItems];
  const trackRef = useRef<HTMLUListElement>(null);
  const { canScroll, step } = useLoopCarousel(trackRef, { looped: true, auto: 3500 });

  return (
    <>
      <section className={s.ticker} aria-label="Announcements">
        <Icon name="ticker-icon" />
        <div className={s.track}>
          <ul>
            {loop.map((t, i) => (
              <li key={i} aria-hidden={i >= tickerItems.length}>
                {t.text}
                {t.link && (
                  <>
                    {' '}
                    {t.href ? (
                      <Link href={t.href} className={s.tickerLink} aria-label={`View ${t.text}`} tabIndex={i >= tickerItems.length ? -1 : undefined}>
                        {t.link}
                      </Link>
                    ) : (
                      <b>{t.link}</b>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <header className={s.head}>
            <div>
              <p className={s.eyebrow}>Testimonials</p>
              <h2>Hear From Our Learners</h2>
            </div>
            <p className={s.lead}>
              Hear from our alumni as they share how DSU Online helped accelerate their careers and achieve professional success.
            </p>
          </header>

          <ul className={s.grid} ref={trackRef} aria-label="Learner stories">
            {[0, 1].map((copy) =>
              learnerVideos.map((v) => {
                const clone = copy === 1;
                const extra = 'src' in v ? v.src : undefined;
                return (
                  <li key={`${copy}-${v.key}`} className={s.card} aria-hidden={clone || undefined} inert={clone || undefined}>
                    <Link href="/student-testimonials" aria-label={`Watch ${v.name}'s story`} tabIndex={clone ? -1 : undefined}>
                      <Image src={extra ?? `/images/testimonials/${v.key}.webp`} alt={clone ? '' : `${v.name}, ${v.course} learner`} fill sizes="(max-width: 900px) 85vw, 33vw" className={s.cardImg} />
                      <span className={s.shade} />
                      <span className={s.info}>
                        <span className={s.who}>
                          <b>{v.name}</b>
                          <strong>{v.course}</strong>
                          <span>{v.company}</span>
                        </span>
                      </span>
                      <span className={s.play}>
                        <PlayIcon />
                      </span>
                    </Link>
                  </li>
                );
              }),
            )}
          </ul>

          {canScroll && (
            <div className={`${s.controls} ${s.controlsOn}`}>
              <div className={s.arrowBtns}>
                <button type="button" className={s.arrowBtn} onClick={() => step(-1)} aria-label="Previous testimonial">
                  <ChevronLeft />
                </button>
                <button type="button" className={s.arrowBtn} onClick={() => step(1)} aria-label="Next testimonial">
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
