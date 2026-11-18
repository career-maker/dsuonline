'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import s from './TitleReveal.module.scss';

/** Page titles (h1) and section titles (h2) rise word by word out of a mask the first time they scroll into view. */
export function TitleReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Titles are only given classes (never re-written): splitting their text into word spans raced React's hydration and caused
    // "hydration failed" (React error 418) on slow devices, which throws the server HTML away.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).classList.add(s.in);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -4% 0px' },
    );

    // page titles (h1) and section titles (h2); the home hero h1 has its own identical animation (aria-label)
    const scan = () => {
      document.querySelectorAll<HTMLElement>('main h1:not([data-tr]):not([aria-label]), main h2:not([data-tr])').forEach((h) => {
        h.dataset.tr = '1';
        h.classList.add(s.title);
        io.observe(h);
      });
    };

    // sections can stream in after mount, so keep watching for new titles
    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    const t = setTimeout(scan, 0);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
