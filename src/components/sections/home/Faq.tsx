'use client';

import { useId, useState } from 'react';
import { ChevronRight } from '@/components/ui/icons';
import type { Faq as FaqItem } from '@/components/inner/parse';
import s from './Faq.module.scss';

const FIRST = 6;

/** Site FAQ (home, programme and inner pages): questions in two aligned columns, "View More" reveals the rest. */
export function Faq({ items, title = 'Frequently Asked Questions' }: { items: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const [shown, setShown] = useState(FIRST);
  const faqs = items.slice(0, shown);
  const done = shown >= items.length;
  const uid = useId();

  const row = (f: FaqItem, i: number) => {
    const isOpen = open === i;
    return (
      <li key={f.q}>
        <h3>
          <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
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
    <section className={s.faq} id="dsu-faq">
      <div className={s.inner}>
        <p className={s.eyebrow}>FAQ</p>
        <h2>{title}</h2>

        <div className={s.cols}>
          {[0, 1].map((c) => (
            <ul key={c} className={s.list}>
              {faqs.map((f, i) => (i % 2 === c ? row(f, i) : null))}
            </ul>
          ))}
        </div>
        {items.length > FIRST && (
          <button type="button" className={s.more} aria-expanded={shown > FIRST} onClick={() => setShown(done ? FIRST : shown + FIRST)}>
            {done ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
    </section>
  );
}
