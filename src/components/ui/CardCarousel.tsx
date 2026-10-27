'use client';

import { cloneElement, isValidElement, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from './icons';
import s from './CardCarousel.module.scss';

type Props = {
  children: ReactNode[];
  className?: string;
  desktopCount?: number;
  showMoreText?: string;
  showLessText?: string;
  ariaLabel?: string;
};

export function CardCarousel({
  children,
  className = '',
  desktopCount,
  showMoreText = 'Show More',
  showLessText = 'Show Less',
  ariaLabel = 'Cards',
}: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const total = children.length;

  const step = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>(':scope > li'));
    const nextIdx = Math.max(0, Math.min(cards.length - 1, activeIdx + dir));
    if (cards[nextIdx]) {
      cards[nextIdx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setActiveIdx(nextIdx);
    }
  }, [activeIdx]);

  const scrollTo = useCallback((idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>(':scope > li'));
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setActiveIdx(idx);
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = Array.from(el.querySelectorAll<HTMLElement>(':scope > li'));
          const scrollLeft = el.scrollLeft;
          let best = 0;
          let minDiff = Infinity;
          cards.forEach((c, i) => {
            const diff = Math.abs(c.offsetLeft - scrollLeft - el.offsetLeft);
            if (diff < minDiff) {
              minDiff = diff;
              best = i;
            }
          });
          setActiveIdx(best);
          ticking = false;
        });
        ticking = true;
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={s.wrapper}>
      <ul
        ref={trackRef}
        className={`${s.track} ${className}`}
        aria-label={ariaLabel}
      >
        {children.map((child, i) => {
          const isHiddenOnDesktop = desktopCount && !showAll && i >= desktopCount;
          if (isValidElement(child)) {
            const existingClass = ((child.props as Record<string, unknown>).className as string) || '';
            return cloneElement(child as React.ReactElement<{ className?: string }>, {
              key: child.key ?? i,
              className: `${existingClass} ${s.item} ${isHiddenOnDesktop ? s.hideOnDesktop : ''}`.trim(),
            });
          }
          return (
            <li
              key={i}
              className={`${s.item} ${isHiddenOnDesktop ? s.hideOnDesktop : ''}`.trim()}
            >
              {child}
            </li>
          );
        })}
      </ul>

      {total > 1 && (
        <div className={s.mobileControls}>
          <div className={s.dots}>
            {children.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${s.dot} ${activeIdx === i ? s.activeDot : ''}`}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1} of ${total}`}
              />
            ))}
          </div>
          <div className={s.arrows}>
            <button
              type="button"
              className={s.arrowBtn}
              onClick={() => step(-1)}
              disabled={activeIdx === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className={s.arrowBtn}
              onClick={() => step(1)}
              disabled={activeIdx === total - 1}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}

      {desktopCount && total > desktopCount && (
        <div className={s.desktopReveal}>
          <button
            type="button"
            className={s.revealBtn}
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
          >
            {showAll ? showLessText : showMoreText}
          </button>
        </div>
      )}
    </div>
  );
}
