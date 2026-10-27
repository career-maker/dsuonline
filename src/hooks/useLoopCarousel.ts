'use client';

import { useCallback, useEffect, useState, type RefObject } from 'react';

/**
 * Horizontal carousel helper.
 * - `looped`: the track renders its items twice (second set is a clone); scrolling wraps seamlessly between the sets.
 * - `canScroll`: false when everything already fits, so arrows can be hidden.
 * - `auto`: autoplay interval in ms (0 = off). Pauses while hovered / focused / touched / tab hidden / reduced motion.
 */
export function useLoopCarousel(ref: RefObject<HTMLElement | null>, { looped = true, auto = 0 }: { looped?: boolean; auto?: number } = {}) {
  const [canScroll, setCan] = useState(false);
  const [paused, setPaused] = useState(false);

  const geometry = useCallback(() => {
    const el = ref.current;
    if (!el) return null;
    const kids = Array.from(el.children) as HTMLElement[];
    const n = looped ? kids.length / 2 : kids.length;
    const step = kids.length > 1 ? kids[1].offsetLeft - kids[0].offsetLeft : el.clientWidth;
    const setW = looped && kids[n] ? kids[n].offsetLeft - kids[0].offsetLeft : el.scrollWidth;
    return { el, step, setW, n };
  }, [ref, looped]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const g = geometry();
      if (g) setCan(g.setW > g.el.clientWidth + 4);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, geometry]);

  // wrap between the original and cloned set once scrolling settles
  useEffect(() => {
    const el = ref.current;
    if (!el || !looped) return;
    let t: ReturnType<typeof setTimeout>;
    const settle = () => {
      const g = geometry();
      if (!g || g.setW <= g.el.clientWidth) return;
      if (el.scrollLeft >= g.setW - 2) {
        const prev = el.style.scrollBehavior;
        el.style.scrollBehavior = 'auto';
        el.scrollLeft -= g.setW;
        el.style.scrollBehavior = prev;
      }
    };
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(settle, 140);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      el.removeEventListener('scroll', onScroll);
    };
  }, [ref, geometry, looped]);

  const step = useCallback(
    (dir: 1 | -1) => {
      const g = geometry();
      if (!g) return;
      if (dir === -1 && looped && g.el.scrollLeft <= 2) {
        const prev = g.el.style.scrollBehavior;
        g.el.style.scrollBehavior = 'auto';
        g.el.scrollLeft = g.setW;
        g.el.style.scrollBehavior = prev;
      }
      g.el.scrollBy({ left: dir * g.step, behavior: 'smooth' });
    },
    [geometry, looped],
  );

  // pause handlers on the track's section
  useEffect(() => {
    const el = ref.current;
    const box = (el?.closest('section') as HTMLElement | null) ?? el;
    if (!box) return;
    const on = () => setPaused(true);
    const off = () => setPaused(false);
    box.addEventListener('mouseenter', on);
    box.addEventListener('mouseleave', off);
    box.addEventListener('focusin', on);
    box.addEventListener('focusout', off);
    box.addEventListener('touchstart', on, { passive: true });
    box.addEventListener('touchend', () => setTimeout(off, 4000), { passive: true });
    return () => {
      box.removeEventListener('mouseenter', on);
      box.removeEventListener('mouseleave', off);
      box.removeEventListener('focusin', on);
      box.removeEventListener('focusout', off);
      box.removeEventListener('touchstart', on);
    };
  }, [ref]);

  useEffect(() => {
    if (!auto || !canScroll || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => {
      if (!document.hidden) step(1);
    }, auto);
    return () => clearInterval(t);
  }, [auto, canScroll, paused, step]);

  return { canScroll, step };
}
