'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import { useLoopCarousel } from '@/hooks/useLoopCarousel';
import type { Img } from './parse';
import s from './Kit.module.scss';

type Item = { name: string; creds?: string; role?: string; img?: Img };

/** Programme-page faculty cards as a looping carousel: autoplay every 2s (pauses on hover), arrows, drag. */
export function FacultyScroller({ items }: { items: Item[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const { canScroll, step } = useLoopCarousel(ref, { looped: true, auto: 2000 });
  return (
    <div className={s.sliderBox}>
      <ul ref={ref} className={`${s.facAll} ${s.facCar}`} aria-label="Faculty">
        {[0, 1].map((copy) =>
          items.map((f) => (
            <li key={`${copy}-${f.name}`} className={s.fcCard} aria-hidden={copy === 1 || undefined} inert={copy === 1 || undefined}>
              <div className={s.fcPhoto}>
                {f.img && <Image src={f.img.src} alt={copy ? '' : f.img.alt} width={f.img.w ?? 1200} height={f.img.h ?? 800} sizes="(max-width: 600px) 80vw, 300px" />}
                {f.role && <span className={s.fcRole}>{f.role}</span>}
              </div>
              <div className={s.fcBody}>
                <h3>{f.name}</h3>
                {f.creds && (
                  <p className={s.fcCreds}>
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 9 12 4l10 5-10 5z" />
                      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
                    </svg>
                    <span>{f.creds}</span>
                  </p>
                )}
              </div>
            </li>
          )),
        )}
      </ul>
      {canScroll && (
        <div className={s.sliderArrows}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous faculty">
            <ChevronLeft />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next faculty">
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
