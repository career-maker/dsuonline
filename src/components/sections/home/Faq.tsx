'use client';

import { useId, useState } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { FramedImage } from '@/components/ui/FramedImage';
import { ChevronRight } from '@/components/ui/icons';
import type { Faq as FaqItem } from '@/components/inner/parse';
import { site } from '@/data/site';
import s from './Faq.module.scss';

const FIRST = 5;

export function Faq({ items, title = 'Frequently Asked Questions' }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const [shown, setShown] = useState(FIRST);
  const faqs = items.slice(0, shown);
  const done = shown >= items.length;
  const uid = useId();

  return (
    <section className={s.faq} id="dsu-faq">
      <div className={s.inner}>
        <div className={s.left}>
          <p className={s.eyebrow}>FAQ</p>
          <h2>{title}</h2>

          <ul className={`${s.list} ${shown > FIRST ? s.scroll : ''}`} data-lenis-prevent>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                      <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={s.q}>{f.q.replace(/^\d+\s*\.\s*/, '')}</span>
                      <ChevronRight className={isOpen ? s.rot : ''} />
                    </button>
                  </h3>
                  <div id={`${uid}-${i}`} role="region" className={`${s.a} ${isOpen ? s.aOpen : ''}`}>
                    {f.a.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {f.list && (
                      <ul>
                        {f.list.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          {items.length > FIRST && (
            <button type="button" className={s.more} aria-expanded={shown > FIRST} onClick={() => setShown(done ? FIRST : shown + FIRST)}>
              {done ? 'View Less' : 'View More'}
            </button>
          )}
        </div>

        <aside className={s.cta}>
          <FramedImage src="/images/faq/cta.webp" frame={[1115, 9060, 711, 608]} box={[1115, 9059.9, 711, 608.2]} sizes="(max-width: 1200px) 100vw, 711px" />
          <div className={s.shade} />
          <div className={s.ctaBody}>
            <h2>
              Ready to take the
              <br />
              Next Step ?
            </h2>
            <p>Admission Open for 2027, Enroll Now &amp; Stop Your Future</p>
            <div className={s.btns}>
              <ArrowLink href={site.apply} external>
                Apply Now
              </ArrowLink>
              <ArrowLink href="/online-mba" variant="dark">
                Explore Courses
              </ArrowLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
