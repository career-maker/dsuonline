'use client';

import { useId, useState } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { FramedImage } from '@/components/ui/FramedImage';
import { ChevronRight } from '@/components/ui/icons';
import type { Faq as FaqItem } from '@/components/inner/parse';
import { site } from '@/data/site';
import s from './Faq.module.scss';

const FIRST = 6;

/** Default (home): list on the left, call-to-action panel on the right. `split` (inner pages): the questions run in two aligned columns, no numbers, no panel. */
export function Faq({ items, title = 'Frequently Asked Questions', image = '/images/faq/faq-learner.webp', split = false }: { items: FaqItem[]; title?: string; image?: string; split?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const first = split ? FIRST : 5;
  const [shown, setShown] = useState(first);
  const faqs = items.slice(0, shown);
  const done = shown >= items.length;
  const uid = useId();

  const row = (f: FaqItem, i: number) => {
    const isOpen = open === i;
    return (
      <li key={f.q}>
        <h3>
          <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
            {!split && <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>}
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
  };

  return (
    <section className={`${s.faq} ${split ? s.faqSplit : ""}`} id="dsu-faq">
      <div className={`${s.inner} ${split ? s.two : ''}`}>
        <div className={s.left}>
          <p className={s.eyebrow}>FAQ</p>
          <h2>{title}</h2>

          {split ? (
            <div className={s.cols}>
              {[0, 1].map((c) => (
                <ul key={c} className={s.list}>
                  {faqs.map((f, i) => (i % 2 === c ? row(f, i) : null))}
                </ul>
              ))}
            </div>
          ) : (
            <ul className={`${s.list} ${shown > first ? s.scroll : ''}`} data-lenis-prevent={shown > first ? '' : undefined}>
              {faqs.map(row)}
            </ul>
          )}
          {items.length > first && (
            <button type="button" className={s.more} aria-expanded={shown > first} onClick={() => setShown(done ? first : shown + first)}>
              {done ? 'View Less' : 'View More'}
            </button>
          )}
        </div>

        {!split && (
        <aside className={s.cta}>
          <FramedImage src={image} frame={[1115, 9060, 711, 608]} box={[1115, 9059.9, 711, 608.2]} sizes="(max-width: 1200px) 100vw, 711px" />
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
        )}
      </div>
    </section>
  );
}
