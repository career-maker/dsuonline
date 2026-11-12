'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import s from './Preloader.module.scss';

/**
 * First load: logo rises into place with a gold rule under it. Visibility and timing are driven by the
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
          <Image src="/images/brand/logo-preload.webp" alt="" width={720} height={140} loading="eager" fetchPriority="low" unoptimized />
          <span className={s.rule} />
        </div>
      </div>
      {sweep > 0 && <div key={sweep} className={s.sweep} />}
    </>
  );
}
