'use client';

import Image, { getImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { heroSlides } from '@/data/home';
import s from './Hero.module.scss';

// object-position that reproduces the design's crop of each slide
const slidePos = ['100% 25%', '0% 25%'] as const;
const slideSize = [
  [2069, 987],
  [1860, 906],
] as const;

export function Hero() {
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive((i) => (i + d + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
    <section className={s.hero} aria-roledescription="carousel" aria-label="Featured">
      {heroSlides.map((slide, i) => {
        const desktop = getImageProps({ src: slide.desktop, alt: '', width: slideSize[i][0], height: slideSize[i][1], sizes: '110vw', priority: i === 0 }).props;
        const mobile = getImageProps({ src: slide.mobile, alt: '', width: 790, height: 987, sizes: '100vw', priority: i === 0 }).props;
        return (
          <div key={slide.desktop} className={`${s.bg} ${i === active ? s.bgOn : ''}`} aria-hidden={i !== active}>
            <picture>
              <source media="(max-width: 759.98px)" srcSet={mobile.srcSet} sizes="100vw" />
              <img {...desktop} alt="" fetchPriority={i === 0 ? 'high' : 'low'} loading={i === 0 ? 'eager' : 'lazy'} className={i ? s.slide1 : s.slide0} style={{ objectPosition: slidePos[i] }} />
            </picture>
          </div>
        );
      })}
      <div className={s.shade} />

      <div className={s.dotsNav} role="group" aria-label="Choose slide">
        {heroSlides.map((_, i) => (
          <button key={i} type="button" className={i === active ? s.dotOn : undefined} onClick={() => setActive(i)} aria-label={`Show slide ${i + 1}`} aria-current={i === active} />
        ))}
      </div>
      <button type="button" className={`${s.arrow} ${s.prev}`} onClick={() => go(-1)} aria-label="Previous slide">
        <Image src="/icons/arrow-l-white.png" alt="" width={23} height={40} />
      </button>
      <button type="button" className={`${s.arrow} ${s.next}`} onClick={() => go(1)} aria-label="Next slide">
        <Image src="/icons/arrow-r-white.png" alt="" width={23} height={40} />
      </button>

      <div className={s.layout}>
      <div className={s.copy}>
        <div key={`b${active}`} className={s.badges}>
          <Image className={s.naac} src="/images/brand/naac.webp" alt="NAAC A+ grade accredited" width={294} height={100} />
          <i aria-hidden="true" />
          <Image className={s.ugc} src="/images/brand/ugc.webp" alt="UGC Entitled" width={202} height={103} />
          <i aria-hidden="true" />
          <Image className={s.legacy} src="/images/brand/legacy.webp" alt="7 decades legacy in education and healthcare" width={116} height={103} />
        </div>
        {/* re-keyed on every slide change so the headline re-plays its word-by-word rise */}
        <h1 key={`t${active}`} className={s.title} aria-label="Your Degree. Your Pace. Your Future.">
          {[['Your', 'Degree.', 'Your', 'Pace.'], ['Your', 'Future.']].map((line, li) => (
            <span key={li} className={s.line} aria-hidden="true">
              {line.map((w, wi) => (
                <span key={wi} className={s.tw}>
                  <span className={s.twi} style={{ '--i': li * 4 + wi } as React.CSSProperties}>
                    {w}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p key={`p${active}`} className={s.sub}>
          Pursue a UGC-entitled online program from Dayananda Sagar{' '}
          <br />
          University with the freedom to learn anytime, anywhere.
        </p>
        <div className={s.ctas}>
          <ArrowLink href="#programs" variant="dark">
            Explore Programs
          </ArrowLink>
        </div>
      </div>

      </div>
    </section>
    </>
  );
}
