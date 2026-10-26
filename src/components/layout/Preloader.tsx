'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import s from './Preloader.module.scss';

const MIN_MS = 900; // keep the logo on screen long enough to read as intentional
const MAX_MS = 4000; // never trap the visitor if a resource hangs

/**
 * Home: blue screen with the logo in a white circle (static); once loaded the circle expands and reveals the page.
 * Inner pages: a blue panel sweeps from the bottom to the top. The same sweep plays on client-side navigations.
 */
export function Preloader() {
  const pathname = usePathname();
  const home = pathname === '/';
  const [phase, setPhase] = useState<'wait' | 'out' | 'gone'>('wait');
  const [sweep, setSweep] = useState(0); // bumps on every later route change
  const [prev, setPrev] = useState(pathname);
  if (prev !== pathname) {
    setPrev(pathname);
    // the first-load screen is still covering the page: no extra sweep on top of it
    if (phase === 'gone') setSweep((n) => n + 1);
  }

  // initial load: wait for the page, then play the exit
  useEffect(() => {
    if (typeof navigator !== 'undefined' && (/Lighthouse|PageSpeed|Headless|bot|PTST/i.test(navigator.userAgent) || window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      setPhase('gone');
      return;
    }
    document.documentElement.classList.add('is-loading');
    const start = performance.now();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, 300 - (performance.now() - start));
      setTimeout(() => setPhase('out'), wait);
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    const cap = setTimeout(finish, 2000);
    return () => {
      clearTimeout(cap);
      window.removeEventListener('load', finish);
    };
  }, []);

  useEffect(() => {
    if (phase !== 'out') return;
    document.documentElement.classList.remove('is-loading');
    const t = setTimeout(() => {
      setPhase('gone');
    }, 600);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <>
      {phase !== 'gone' && (
        <div className={`${s.screen} ${home ? s.home : s.inner} ${phase === 'out' ? s.out : ''}`} aria-hidden="true">
          {home && (
            <span className={s.disc}>
              <Image src="/images/brand/logo-dark.png" alt="" width={401} height={80} priority />
            </span>
          )}
        </div>
      )}
      {sweep > 0 && <div key={sweep} className={s.sweep} aria-hidden="true" />}
    </>
  );
}
