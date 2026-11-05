'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { TestimonialShowcase } from '@/components/ui/TestimonialShowcase';
import { tickerItems } from '@/data/home';
import { showAnnouncement } from '@/data/site';
import { homeTestimonials } from '@/data/testimonials';

import s from './Testimonials.module.scss';

export function Testimonials() {
  const loop = [...tickerItems, ...tickerItems];
  return (
    <>
      {showAnnouncement && (
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
      )}

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

          <TestimonialShowcase items={homeTestimonials} />
        </div>
      </section>
    </>
  );
}
