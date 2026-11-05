'use client';

import { useId, useRef, useState } from 'react';
import { FeeTable, feeTitle } from './FeeTable';
import s from './FeeTabs.module.scss';

/** Semester-wise / Year-wise fee tables as two tabs; arrow keys move between them. */
export function FeeTabs({ tables }: { tables: string[][][] }) {
  const id = useId();
  const [on, setOn] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const key = (e: React.KeyboardEvent, i: number) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + tables.length) % tables.length;
    setOn(n);
    refs.current[n]?.focus();
  };

  return (
    <div className={s.wrap}>
      <div className={s.tabs} role="tablist" aria-label="Fee structure">
        {tables.map((rows, i) => (
          <button
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-t${i}`}
            aria-selected={on === i}
            aria-controls={`${id}-p${i}`}
            tabIndex={on === i ? 0 : -1}
            className={on === i ? `${s.tab} ${s.on}` : s.tab}
            onClick={() => setOn(i)}
            onKeyDown={(e) => key(e, i)}
          >
            {feeTitle(rows[0])}
          </button>
        ))}
      </div>
      {tables.map((rows, i) => (
        <div key={i} role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`} hidden={on !== i} className={s.panel}>
          <FeeTable rows={rows} bare />
        </div>
      ))}
    </div>
  );
}
