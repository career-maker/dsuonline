'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import s from './TitleReveal.module.scss';

/** Section titles (h2) rise word by word out of a mask the first time they scroll into view. */
export function TitleReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || /Lighthouse|PageSpeed|Headless/i.test(navigator.userAgent)) return;
    let io: IntersectionObserver | undefined;
    const t = setTimeout(() => {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            (e.target as HTMLElement).classList.add(s.in);
            io?.unobserve(e.target);
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -4% 0px' },
      );
      document.querySelectorAll<HTMLElement>('main h2').forEach((h) => {
        if (h.dataset.tr) return;
        h.dataset.tr = '1';
        let i = 0;
        const walk = (node: Node) => {
          for (const c of Array.from(node.childNodes)) {
            if (c.nodeType === 3) {
              const frag = document.createDocumentFragment();
              (c.textContent ?? '').split(/(\s+)/).forEach((token) => {
                if (!token) return;
                if (/^\s+$/.test(token)) return void frag.appendChild(document.createTextNode(' '));
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
        io?.observe(h);
      });
    }, 150);
    return () => {
      clearTimeout(t);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
