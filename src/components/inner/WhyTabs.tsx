'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import s from './Kit.module.scss';

export type WhyItem = { t: string; d: string; img: string | null; w?: number; h?: number };

/** "Why Choose ..." list: pick a point on the left, read its full description and photo on the right (as on the live site). */
export function WhyTabs({ items }: { items: WhyItem[] }) {
  const [cur, setCur] = useState(0);
  const uid = useId();
  const it = items[cur];
  return (
    <div className={s.whyTabs}>
      <div role="tablist" aria-orientation="vertical" className={s.whyMenu}>
        {items.map((x, i) => (
          <button
            key={x.t}
            id={`${uid}-t${i}`}
            type="button"
            role="tab"
            aria-selected={i === cur}
            aria-controls={`${uid}-p`}
            tabIndex={i === cur ? 0 : -1}
            className={i === cur ? s.whyOn : undefined}
            onClick={() => setCur(i)}
            onKeyDown={(e) => {
              if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
              e.preventDefault();
              const n = (i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
              setCur(n);
              document.getElementById(`${uid}-t${n}`)?.focus();
            }}
          >
            <i aria-hidden="true">{String(i + 1).padStart(2, '0')}</i>
            <span>{x.t}</span>
          </button>
        ))}
      </div>
      <div id={`${uid}-p`} role="tabpanel" aria-labelledby={`${uid}-t${cur}`} className={s.whyPanel}>
        {it.img && (
          <div className={s.whyImg}>
            <Image src={it.img} alt={it.t} width={it.w ?? 1024} height={it.h ?? 600} sizes="(max-width: 900px) 100vw, 640px" />
            <span className={s.whyBadge}>{String(cur + 1).padStart(2, '0')}</span>
          </div>
        )}
        <div className={s.whyText}>
          <h3>{it.t}</h3>
          <p>{it.d}</p>
        </div>
      </div>
    </div>
  );
}
