'use client';

import { useRef, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import { useLoopCarousel } from '@/hooks/useLoopCarousel';
import s from './Kit.module.scss';

/** Up to three cards sit centred; more become a looping auto-scroll slider (pauses on hover) with arrows. */
export function QuoteSlider({ cards }: { cards: ReactNode[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const many = cards.length > 3;
  const { canScroll, step } = useLoopCarousel(ref, { looped: many, auto: many ? 4000 : 0 });
  const list = many ? [...cards, ...cards.map((c, i) => <li key={`c${i}`} aria-hidden="true" className={(c as { props: { className?: string } }).props.className} inert>{(c as { props: { children: ReactNode } }).props.children}</li>)] : cards;
  return (
    <div className={s.sliderBox}>
      <ul ref={ref} className={`${s.quoteRow} ${many ? s.quoteRowSlide : ''}`}>
        {list}
      </ul>
      {many && canScroll && (
        <div className={s.sliderArrows}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous stories">
            <ChevronLeft />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next stories">
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
