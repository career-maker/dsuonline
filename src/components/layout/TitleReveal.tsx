'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import s from './TitleReveal.module.scss';

/** Page titles (h1) and section titles (h2) rise word by word out of a mask the first time they scroll into view. */
export function TitleReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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

    // wrap every word of a title in a masked span (all DOM writes)
    const split = (h: HTMLElement) => {
      h.dataset.tr = '1';
      let i = 0;
      const walk = (node: Node) => {
        for (const c of Array.from(node.childNodes)) {
          if (c.nodeType === 3) {
            const frag = document.createDocumentFragment();
            (c.textContent ?? '').split(/(\s+)/).forEach((token) => {
              if (!token) return;
              if (/^\s+$/.test(token)) return void frag.appendChild(document.createTextNode(' '));
              // "Engagement/Networking" must be able to wrap on narrow screens: break after slashes
              token.split(/(?<=\/)/).forEach((part) => {
                const w = document.createElement('span');
                w.className = s.w;
                const inner = document.createElement('span');
                inner.className = s.wi;
                inner.style.setProperty('--i', String(i++));
                inner.textContent = part;
                w.appendChild(inner);
                frag.appendChild(w);
              });
            });
            c.replaceWith(frag);
          } else if (c.nodeType === 1 && (c as HTMLElement).tagName !== 'BR') walk(c);
        }
      };
      walk(h);
      h.classList.add(s.title);
    };

    // page titles (h1) and section titles (h2); the home hero h1 has its own identical animation (aria-label)
    const scan = () => {
      const fresh = Array.from(document.querySelectorAll<HTMLElement>('main h1:not([data-tr]):not([aria-label]), main h2:not([data-tr])'));
      if (!fresh.length) return;
      fresh.forEach(split);
      // reads after all writes: one layout pass
      const vh = window.innerHeight * 0.9;
      const rects = fresh.map((h) => h.getBoundingClientRect());
      fresh.forEach((h, i) => {
        if (rects[i].top < vh && rects[i].bottom > 0) requestAnimationFrame(() => h.classList.add(s.in));
        else io.observe(h);
      });
    };

    // sections can stream in after mount, so keep watching for new titles
    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    const t = setTimeout(scan, 150);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
