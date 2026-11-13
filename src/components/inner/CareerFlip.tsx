'use client';

import { useState, type KeyboardEvent } from 'react';
import { CardSlider } from '@/components/ui/CardSlider';
import s from './CareerFlip.module.scss';

export type CareerItem = { title: string; items?: string[]; text?: string };
export type IndustryItem = { title: string; text: string };

/**
 * Career options as flip cards: front = role group and its roles, back = the industries that hire (hover, tap or Enter/Space flips it).
 * Only the page's own career and industry copy is used.
 */
export function CareerFlip({ careers, industries, industriesTitle = 'Industries' }: { careers: CareerItem[]; industries: IndustryItem[]; industriesTitle?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const key = (e: KeyboardEvent, i: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(open === i ? null : i);
    }
  };
  const card = (c: CareerItem, i: number) => {
        const flipped = open === i;
        return (
          <div key={c.title} className={`${s.item} ${flipped ? s.flipped : ''}`}>
            <div
              className={s.card}
              role="button"
              tabIndex={0}
              aria-pressed={flipped}
              aria-label={`${c.title}: ${flipped ? 'hide' : 'show'} industries`}
              onClick={() => setOpen(flipped ? null : i)}
              onKeyDown={(e) => key(e, i)}
            >
              <div className={s.inner}>
                <div className={s.front} aria-hidden={flipped}>
                  <span className={s.no} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{c.title}</h3>
                  {c.items ? (
                    <ul className={s.roles}>
                      {c.items.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{c.text}</p>
                  )}
                  <span className={s.hint}>
                    <i aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" />
                        <path d="M18 3v4h-4M6 21v-4h4" />
                      </svg>
                    </i>
                    See hiring industries
                  </span>
                </div>
                <div className={s.back} aria-hidden={!flipped}>
                  <p className={s.label}>{industriesTitle}</p>
                  <h3>{c.title}</h3>
                  <ul className={s.chips}>
                    {industries.map((x) => (
                      <li key={x.title} title={x.text}>
                        {x.title}
                      </li>
                    ))}
                  </ul>
                  <span className={s.hint}>Tap to flip back</span>
                </div>
              </div>
            </div>
          </div>
        );
  };

  return (
    <>
      <ul className={s.grid}>
        {careers.map((c, i) => (
          <li key={c.title}>{card(c, i)}</li>
        ))}
      </ul>
      <div className={s.mobile}>
        <CardSlider label="Career options" slideWidth="84%" items={careers.map((c, i) => card(c, i))} />
      </div>
    </>
  );
}
