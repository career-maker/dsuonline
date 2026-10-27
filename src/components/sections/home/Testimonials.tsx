'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import { learnerVideos, tickerItems } from '@/data/home';

type Rect = readonly [number, number, number, number];

// frame = clipped card, box = where the design draws the photo (design px)
const layout: Record<string, { big?: boolean; frame: Rect; box: Rect; avatar: { w: number; h: number } }> = {
  rakshit: { big: true, frame: [95, 1277, 859, 487], box: [91.2, 1275, 867.6, 488], avatar: { w: 54, h: 59 } },
  chinmaya: { frame: [970, 1275, 420, 239], box: [967.6, 1275, 424.9, 239], avatar: { w: 59, h: 54 } },
  akhil: { frame: [1402, 1275, 423, 239], box: [1402.6, 1275, 424.9, 239], avatar: { w: 59, h: 54 } },
  john: { frame: [970, 1525, 420, 239], box: [970, 1245.3, 420, 798.4], avatar: { w: 73, h: 54 } },
  arun: { frame: [1402, 1525, 423, 239], box: [1402.6, 1525, 424.9, 239], avatar: { w: 54, h: 60 } },
};

const avatarSrc = (key: string) => `/images/avatars/${key}.webp`;

// page 1 = the approved design; page 2 brings in the two added learners in the same bento slots
const pages = [
  ['rakshit', 'chinmaya', 'akhil', 'john', 'arun'],
  ['simran', 'varun', 'john', 'arun', 'chinmaya'],
];
const slotClass = ['rakshit', 'chinmaya', 'akhil', 'john', 'arun'];
import s from './Testimonials.module.scss';

export function Testimonials() {
  const loop = [...tickerItems, ...tickerItems];
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setPage((n + pages.length) % pages.length);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!document.hidden) setPage((p) => (p + 1) % pages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <>
      <section className={s.ticker} aria-label="Announcements">
        <Icon name="ticker-icon" />
        <div className={s.track}>
          <ul>
            {loop.map((t, i) => (
              <li key={i} aria-hidden={i >= tickerItems.length}>
                {t.text}
                {t.link && (
                  <>
                    {' '}
                    {t.href ? (
                      <Link href={t.href} className={s.tickerLink} aria-label={`View ${t.text}`} tabIndex={i >= tickerItems.length ? -1 : undefined}>
                        {t.link}
                      </Link>
                    ) : (
                      <b>{t.link}</b>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <header className={s.head}>
            <div>
              <p className={s.eyebrow}>Testimonials</p>
              <h2>Hear From Our Learners</h2>
            </div>
            <p className={s.lead}>
              Hear from our alumni as they share how DSU Online helped accelerate their careers and achieve professional success.
            </p>
          </header>

          <div className={s.pages} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
            {pages.map((keys, pi) => (
              <ul key={pi} className={`${s.grid} ${s.page} ${pi === page ? '' : s.pageOff}`} aria-label={`Learner stories ${pi + 1}`} aria-hidden={pi === page ? undefined : true} inert={pi === page ? undefined : true}>
                {keys.map((key, si) => {
                  const v = learnerVideos.find((x) => x.key === key)!;
                  const extra = 'src' in v ? v.src : undefined;
                  const l = layout[key];
                  const slot = slotClass[si];
                  const big = si === 0;
                  const dup = pi === 1 && !extra;
                  return (
                    <li key={`${pi}-${key}`} className={`${s.card} ${s[slot]} ${big ? s.big : ''} ${dup ? s.dup : ''}`}>
                      <Link href="/student-testimonials" aria-label={`Watch ${v.name}'s story`}>
                        {l && !big ? (
                          <FramedImage src={`/images/testimonials/${key}.webp`} alt={`${v.name}, ${v.course} learner`} frame={l.frame} box={l.box} sizes="(max-width: 900px) 100vw, 430px" />
                        ) : l ? (
                          <FramedImage src={`/images/testimonials/${key}.webp`} alt={`${v.name}, ${v.course} learner`} frame={l.frame} box={l.box} sizes="(max-width: 900px) 100vw, 860px" />
                        ) : (
                          <Image src={extra!} alt={`${v.name}, ${v.course} learner`} fill sizes={big ? '(max-width: 900px) 100vw, 860px' : '(max-width: 900px) 85vw, 430px'} className={s.plainImg} />
                        )}
                        <span className={s.shade} />
                        <span className={s.info}>
                          {l && <Image className={s.avatar} src={avatarSrc(key)} alt="" width={l.avatar.w} height={l.avatar.h} />}
                          <span className={s.who}>
                            <b>{v.name}</b>
                            <strong>{v.course}</strong>
                            <span>{v.company}</span>
                          </span>
                        </span>
                        <span className={s.play}>
                          <PlayIcon />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>

          <button type="button" className={`${s.arrow} ${s.prev}`} aria-label="Previous testimonials" onClick={() => go(page - 1)}>
            <ChevronLeft />
          </button>
          <button type="button" className={`${s.arrow} ${s.next}`} aria-label="Next testimonials" onClick={() => go(page + 1)}>
            <ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}
