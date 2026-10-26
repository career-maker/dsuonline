'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import s from './Preloader.module.scss';

const MIN_MS = 900; // keep the logo on screen long enough to read as intentional
const MAX_MS = 4000; // never trap the visitor if a resource hangs

/**
 * Route transitions: smooth panel sweep when navigating between pages.
 * Initial load: no blocking overlay so the hero renders immediately with maximum performance.
 */
export function Preloader() {
  const pathname = usePathname();
  const [sweep, setSweep] = useState(0);
  const [prev, setPrev] = useState(pathname);

  if (prev !== pathname) {
    setPrev(pathname);
    setSweep((n) => n + 1);
  }

  if (sweep === 0) return null;

  return <div key={sweep} className={s.sweep} aria-hidden="true" />;
}
