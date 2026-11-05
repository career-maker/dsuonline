'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import { useLoopCarousel } from '@/hooks/useLoopCarousel';
import s from './Kit.module.scss';

type Item = { name: string; creds?: string; role?: string; img?: { src: string; alt: string; w?: number; h?: number } };

/** Faculty cards (home "Meet Our Faculty" look) as a looping auto-scroll carousel: 2s, pauses on hover, arrows. */
export function FacultyCarousel({ items }: { items: Item[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const { canScroll, step } = useLoopCarousel(ref, { looped: true, auto: 2000 });
  return (
    <div className={s.sliderBox}>
      <ul ref={ref} className={`${s.facAll} ${s.facCar}`} aria-label="Faculty">
        {[0, 1].map((copy) =>
          items.map((f) => (
            <li key={`${copy}-${f.name}`} aria-hidden={copy === 1 || undefined} inert={copy === 1 || undefined}>
              <div className={s.facPhoto}>{f.img && <Image src={f.img.src} alt={copy ? '' : f.img.alt} width={f.img.w ?? 400} height={f.img.h ?? 500} sizes="(max-width: 600px) 90vw, 330px" />}</div>
              <div className={s.facBody}>
                <h3>{f.name}</h3>
                {f.role && <p className={s.facRole}>{f.role}</p>}
                {f.creds && (
                  <ul className={s.facPoints}>
                    <li>{f.creds}</li>
                  </ul>
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
