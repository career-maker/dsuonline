'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import s from './Preloader.module.scss';

/**
 * First load: crest draw-on (SVG strokes over the real logo). Visibility and timing are driven by the
 * inline script in layout.tsx (min 1.7s, hides on window load, failsafe 5.3s), so the markup is inert without JS.
 * Route changes: panel sweep.
 */
export function Preloader() {
  const pathname = usePathname();
  const [sweep, setSweep] = useState(0);
  const [prev, setPrev] = useState(pathname);

  if (prev !== pathname) {
    setPrev(pathname);
    setSweep((n) => n + 1);
  }

  return (
    <>
      <div className={s.boot} aria-hidden="true">
        <div className={s.lockup}>
          <svg viewBox="0 0 800 156">
            <circle className={s.draw} pathLength="1" cx="80" cy="77.5" r="74" style={{ '--d': '0s' } as React.CSSProperties} />
            <circle className={`${s.draw} ${s.ringIn}`} pathLength="1" cx="80" cy="77.5" r="62" style={{ '--d': '0.15s' } as React.CSSProperties} />
            <path className={`${s.draw} ${s.shield}`} pathLength="1" d="M39 40H121V84C121 108 100 125 80.5 134C61 125 39 108 39 84Z" style={{ '--d': '0.3s' } as React.CSSProperties} />
            <path className={s.draw} pathLength="1" d="M47 96L80.5 60L114 96" style={{ '--d': '0.5s' } as React.CSSProperties} />
          </svg>
          <Image src="/images/brand/logo-header.webp" alt="" width={800} height={156} sizes="360px" priority />
        </div>
      </div>
      {sweep > 0 && <div key={sweep} className={s.sweep} />}
    </>
  );
}
