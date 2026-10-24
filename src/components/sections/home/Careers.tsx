'use client';

import Image from 'next/image';
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { ChevronRight } from '@/components/ui/icons';
import { careerTabs, recruiters } from '@/data/home';
import s from './Careers.module.scss';

export function Careers() {
  const [active, setActive] = useState(0);
  const uid = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = careerTabs[active];

  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (active + d + careerTabs.length) % careerTabs.length;
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <section className={s.careers}>
      <div className={s.inner}>
        <header className={s.head}>
          <p className={s.eyebrow}>Hiring Partners</p>
          <h2>
            Careers Assistance &amp; Hiring
            <br />
            Partners
          </h2>
          <p className={s.copy}>
            At DSU Online, we go beyond academics to prepare you for a successful career. Our dedicated career services support you at every
            step.
          </p>
        </header>

        <div className={s.grid}>
          <div className={s.tabs}>
            <div role="tablist" aria-orientation="vertical" className={s.list} onKeyDown={onKey}>
              {careerTabs.map((t, i) => (
                <button
                  key={t.key}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${uid}-t${i}`}
                  aria-selected={i === active}
                  aria-controls={`${uid}-p`}
                  tabIndex={i === active ? 0 : -1}
                  className={i === active ? s.on : undefined}
                  onClick={() => setActive(i)}
                >
                  <span className={s.ic}>
                    <Icon name={i === active ? `${t.icon}-white` : t.icon} />
                  </span>
                  <span className={s.tt}>
                    {t.title[0]}
                    <br />
                    {t.title[1]}
                  </span>
                  <ChevronRight />
                </button>
              ))}
            </div>

            <div role="tabpanel" id={`${uid}-p`} aria-labelledby={`${uid}-t${active}`} className={s.panel}>
              <div className={s.ptitle}>
                <Icon name={tab.icon} />
                <h3>
                  {tab.title[0]}
                  <br />
                  {tab.title[1]}
                </h3>
              </div>
              <div className={s.body}>
                {tab.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {tab.points.length > 0 && (
                <ul>
                  {tab.points.map((pt) => (
                    <li key={pt}>
                      <Icon name="check" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={s.right}>
            <div className={s.photo}>
              <FramedImage
                src="/images/career/handshake.webp"
                alt="Graduates shaking hands with a recruiter"
                frame={[1117, 5829, 708, 372]}
                box={[1117, 5813.7, 708, 404.6]}
                sizes="(max-width: 1200px) 100vw, 708px"
              />
            </div>

            <div className={s.partners}>
              <h3>Our Recruitment Partners</h3>
              <ul>
                {recruiters.map((r) => (
                  <li key={r.src}>
                    <Image src={`/images/partners/${r.src}.png`} alt={r.name} width={r.w} height={r.h} style={{ width: r.w, height: 'auto' }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
