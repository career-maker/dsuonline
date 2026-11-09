'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Scroll choreography for the International Learners page (GSAP + ScrollTrigger). Renders nothing.
 *  [data-reveal]        fades up once when it enters
 *  [data-stagger]       its children rise one after another
 *  [data-clip]          photo is uncovered from the top
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

      // photos are uncovered from the top, the picture settling as it opens
      q('[data-clip]').forEach((el) => {
        const pic = el.querySelector('img');
        const st = { trigger: el, start: 'top 85%', once: true };
        gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.3, ease: 'power3.inOut', scrollTrigger: st });
        if (pic) gsap.fromTo(pic, { scale: 1.2 }, { scale: 1, duration: 1.8, ease: 'power3.out', scrollTrigger: st });
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
