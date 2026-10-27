'use client';

import Image from 'next/image';
import { useEffect, useId, useState } from 'react';
import s from './Kit.module.scss';

export type WhyItem = { t: string; d: string; img: string | null; w?: number; h?: number };

/** "Why Choose ..." list: pick a point on the left, read its full description and photo on the right (as on the live site). */
export function WhyTabs({ items }: { items: WhyItem[] }) {
  const [cur, setCur] = useState(0);
  const uid = useId();
  const it = items[cur];

  // warm the browser cache with the other photos so switching is instant
  useEffect(() => {
    items.forEach((x) => {
      if (x.img) new window.Image().src = x.img;
    });
  }, [items]);
  return (
    <div className={s.whyStage}>
      <div id={`${uid}-p`} role="tabpanel" aria-labelledby={`${uid}-t${cur}`} className={s.whyHero}>
        {it.img && <Image key={it.img} src={it.img} alt="" width={it.w ?? 1024} height={it.h ?? 600} sizes="(max-width: 900px) 100vw, 1300px" className={s.whyHeroImg} unoptimized priority={cur === 0} />}
        <div className={s.whyCaption} key={cur}>
          <span className={s.whyBadge}>{String(cur + 1).padStart(2, '0')}</span>
          <h3>{it.t}</h3>
          <p>{it.d}</p>
        </div>
      </div>
      <div role="tablist" aria-orientation="vertical" className={s.whyRail}>
        {items.map((x, i) => (
          <button
            key={x.t}
            id={`${uid}-t${i}`}
            type="button"
            role="tab"
            aria-selected={i === cur}
            aria-controls={`${uid}-p`}
            tabIndex={i === cur ? 0 : -1}
            className={i === cur ? s.whyRailOn : undefined}
            onClick={() => setCur(i)}
            onKeyDown={(e) => {
              if (!/^Arrow(Right|Left|Down|Up)$/.test(e.key)) return;
              e.preventDefault();
              const n = (i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
              setCur(n);
              document.getElementById(`${uid}-t${n}`)?.focus();
            }}
          >
            <i aria-hidden="true">{String(i + 1).padStart(2, '0')}</i>
            <span>{x.t}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
