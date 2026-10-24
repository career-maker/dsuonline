'use client';

import { useId, useState } from 'react';
import { ChevronRight } from '@/components/ui/icons';
import s from './Inner.module.scss';

export function Accordion({ items }: { items: { q: string; a: string[] }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();
  return (
    <ul className={s.faq}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span className={s.faqNum}>{String(i + 1).padStart(2, '0')}</span>
                <span>{f.q.replace(/^\d+\s*\.\s*/, '')}</span>
                <ChevronRight className={isOpen ? s.rot : ''} />
              </button>
            </h3>
            <div id={`${uid}-${i}`} role="region" className={isOpen ? s.faqOpen : s.faqShut}>
              {f.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
