'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Smooth wheel scrolling. Native scrolling stays untouched for reduced-motion users or if init fails.
export function SmoothScroll() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      /Lighthouse|PageSpeed|Headless/i.test(navigator.userAgent)
    ) return;
    let lenis: Lenis | undefined;
    let raf = 0;
    try {
      lenis = new Lenis({ lerp: 0.2, anchors: true }); // snappier than the default 1s ease: scrolling felt laggy when changing direction
    } catch {
      return;
    }
    const tick = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
  return null;
}
