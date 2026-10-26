'use client';

import { useEffect, useRef, useState } from 'react';

/** Counts from 0 to `to` the first time it scrolls into view (ease-out); shows the final value for reduced motion / no JS. */
export function Counter({ to, ms = 1800 }: { to: number; ms?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / ms);
          setN(Math.round(to * (1 - Math.pow(1 - p, 4))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, ms]);

  return (
    <span ref={ref}>
      <span className="sr-only">{to}</span>
      <span aria-hidden="true">{n}</span>
    </span>
  );
}
