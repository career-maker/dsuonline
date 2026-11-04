'use client';

import { useRef, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import s from './Kit.module.scss';

/** Faculty cards: grid on larger screens, swipeable carousel (arrows above, left) on phones. */
export function FacultyScroller({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);
  const go = (dir: number) => {
    const el = ref.current;
    const li = el?.querySelector('li');
    if (el && li) el.scrollBy({ left: dir * (li.getBoundingClientRect().width + 12), behavior: 'smooth' });
  };
  return (
    <>
      <div className={s.facCtl}>
        <button type="button" aria-label="Previous faculty" onClick={() => go(-1)}>
          <ChevronLeft />
        </button>
        <button type="button" aria-label="Next faculty" onClick={() => go(1)}>
          <ChevronRight />
        </button>
      </div>
      <ul ref={ref} className={s.facAll}>
        {children}
      </ul>
    </>
  );
}
