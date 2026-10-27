'use client';

import { useEffect, useRef, useState } from 'react';
import { CloseIcon } from '@/components/ui/icons';
import s from './FactsDrawer.module.scss';

// content of the live site's FACTS side frame ("About Online Degree at Dayananda Sagar University")
const rows: [string, string][] = [
  ['UGC & DEB Approved', 'Yes'],
  ['Approved for Higher Education in India', 'Yes'],
  ['Fees', 'Low as compared to On Campus'],
  ['Education Quality', 'At par with On Campus learning'],
  ['Global Recognition', 'Yes'],
  ['Learning Mode', 'Completely Online at Flexible Pace'],
  ['Learning Session', 'Pre recorded + Live Session over weekend'],
];

export const OPEN_FACTS = 'open-facts';

/** Slide-in panel from the right; opened with window.dispatchEvent(new Event('open-facts')). */
export function FactsDrawer() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setOpen(true);
    window.addEventListener(OPEN_FACTS, on);
    return () => window.removeEventListener(OPEN_FACTS, on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', key);
    document.documentElement.classList.add('facts-open');
    return () => {
      document.removeEventListener('keydown', key);
      document.documentElement.classList.remove('facts-open');
      prev?.focus?.();
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className={s.scrim} onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)} data-lenis-prevent>
      <aside className={s.panel} role="dialog" aria-modal="true" aria-labelledby="facts-title">
        <button ref={closeRef} type="button" className={s.close} onClick={() => setOpen(false)} aria-label="Close facts">
          <CloseIcon />
        </button>
        <p className={s.kicker}>FACTS</p>
        <h2 id="facts-title" className={s.title}>About Online Degree at Dayananda Sagar University</h2>
        <dl className={s.list}>
          <div className={s.head} aria-hidden="true">
            <span>What are you looking for</span>
            <span>Online Degree</span>
          </div>
          {rows.map(([q, a]) => (
            <div key={q} className={s.row}>
              <dt>{q}</dt>
              <dd>{a}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}
