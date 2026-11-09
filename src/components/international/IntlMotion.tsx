'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Scroll choreography for the International Learners page (GSAP + ScrollTrigger). Renders nothing.
 *  [data-reveal]        fades up once when it enters
 *  [data-stagger]       its children rise one after another
 *  [data-parallax]      photo drifts slower than the page (scrubbed)
 *  [data-draw]          line grows with scroll
 *  [data-ticks] [data-tick]  comparison ticks pop in
 * Reduced-motion users get the finished page with no animation.
 */
export function IntlMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = (sel: string) => gsap.utils.toArray<HTMLElement>(sel);

      const once = (targets: HTMLElement[] | HTMLElement[][], from: gsap.TweenVars, to: gsap.TweenVars) => {
        gsap.set(targets.flat(), from);
        ScrollTrigger.batch(targets.flat(), {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => gsap.to(batch, { ...to, overwrite: true }),
        });
      };

      once(q('[data-reveal]'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1 });

      q('[data-stagger]').forEach((group) => {
        const kids = Array.from(group.children) as HTMLElement[];
        gsap.set(kids, { opacity: 0, y: 46 });
        ScrollTrigger.create({
          trigger: group,
          start: 'top 85%',
          once: true,
          onEnter: () => gsap.to(kids, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, clearProps: 'transform,opacity' }),
        });
      });

      q('[data-parallax]').forEach((img) => {
        gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      q('[data-draw]').forEach((line) => {
        gsap.fromTo(line, { scaleX: 0 }, { scaleX: 1, ease: 'none', transformOrigin: 'left center', scrollTrigger: { trigger: line.parentElement, start: 'top 80%', end: 'bottom 70%', scrub: 0.6 } });
      });

      q('[data-ticks]').forEach((table) => {
        const ticks = Array.from(table.querySelectorAll('[data-tick]'));
        gsap.set(ticks, { scale: 0.3, opacity: 0 });
        ScrollTrigger.create({
          trigger: table,
          start: 'top 80%',
          once: true,
          onEnter: () => gsap.to(ticks, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2.4)', stagger: 0.07, delay: 0.25 }),
        });
      });

      const refresh = setTimeout(() => ScrollTrigger.refresh(), 800);
      return () => clearTimeout(refresh);
    });
    return () => mm.revert();
  }, []);
  return null;
}
