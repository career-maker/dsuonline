'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import { CarouselControls, TestimonialCard } from '@/components/ui/Testimonial';
import { tickerItems } from '@/data/home';
import { homeTestimonials } from '@/data/testimonials';

const pages = [homeTestimonials.slice(0, 5), homeTestimonials.slice(5, 10)];
const slotClass = ['rakshit', 'chinmaya', 'akhil', 'john', 'arun'];
import s from './Testimonials.module.scss';

export function Testimonials() {
  const loop = [...tickerItems, ...tickerItems];
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const go = (n: number) => setPage((n + pages.length) % pages.length);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!document.hidden) setPage((p) => (p + 1) % pages.length);
    }, 2000);
    return () => clearInterval(id);
  }, [paused]);

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

          <div ref={scroller} className={s.pages} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
            {pages.map((keys, pi) => (
              <ul key={pi} className={`${s.grid} ${s.page} ${pi === page ? '' : s.pageOff}`} aria-label={`Learner stories ${pi + 1}`} aria-hidden={pi === page ? undefined : true} inert={pi === page ? undefined : true}>
                {keys.map((v, si) => (
                  <li key={`${pi}-${v.name}`} className={`${s.card} ${s[slotClass[si]]} ${si === 0 ? s.big : ''}`}>
                    <TestimonialCard t={v} big={si === 0} sizes={si === 0 ? '(max-width: 600px) 100vw, 860px' : '(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 430px'} />
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <CarouselControls target={scroller} />

          <button type="button" className={`${s.arrow} ${s.prev}`} aria-label="Previous testimonials" onClick={() => go(page - 1)}>
            <ChevronLeft />
          </button>
          <button type="button" className={`${s.arrow} ${s.next}`} aria-label="Next testimonials" onClick={() => go(page + 1)}>
            <ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}
