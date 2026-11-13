'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CardSlider } from '@/components/ui/CardSlider';
import s from './ProgramLearning.module.scss';

export type LearnItem = { title: string; sub?: string; list?: string[]; text?: string };

// one line-icon per kind of learning activity (matched on the live tab name)
const ICON: [RegExp, string][] = [
  [/tutorial/i, 'M12 3a9 9 0 100 18 9 9 0 000-18zm-2 5.5v7l6-3.5-6-3.5z'],
  [/content/i, 'M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5zm2 14h12v2H6M9 7h6M9 11h6'],
  [/web|resource|forum/i, 'M4 5h16v11H9l-5 4V5zm4 4h8M8 12h5'],
  [/assess|test|exam/i, 'M8 4h8l1 2h2v15H5V6h2l1-2zm-.5 10l2.5 2.5 5-5'],
  [/eligib/i, 'M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-6 9a6 6 0 0112 0m4-9l2 2 4-4'],
];
const iconOf = (t: string) => ICON.find(([r]) => r.test(t))?.[1] ?? ICON[1][1];

// right-hand photo per tab (public/images/learn); falls back to the general one
const PHOTO: [RegExp, string][] = [
  [/tutorial/i, 'live-classes'],
  [/content/i, 'recorded-lectures'],
  [/web|resource|forum/i, 'discussion-forums'],
  [/assess|test|exam/i, 'online-exams'],
  [/eligib/i, 'dedicated'],
];
const photoOf = (t: string) => `/images/learn/${PHOTO.find(([r]) => r.test(t))?.[1] ?? 'learn-your-way'}.webp`;

function TabFace({ item }: { item: LearnItem }) {
  return (
    <>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={iconOf(item.title)} />
      </svg>
      <b>{item.title}</b>
      {item.sub && <small>{item.sub}</small>}
    </>
  );
}

/**
 * Programme learning system: mini title, title and intro on top; below on the left the tab cards with the chosen tab's content under them;
 * a photo on the right that follows the tab. Phones get the tab cards as a Swiper row.
 */
export function ProgramLearning({ eyebrow, title, intro, items }: { eyebrow?: string; title: string; intro: string[]; items: LearnItem[] }) {
  const [on, setOn] = useState(0);
  const cur = items[on];

  return (
    <div className={s.wrap}>
      <header className={s.head}>
        {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
        <h2>{title}</h2>
        {intro.map((p) => (
          <p key={p} className={s.intro}>
            {p}
          </p>
        ))}
      </header>

      <div className={s.body}>
        <div className={s.left}>
          <div className={s.tabs} role="tablist" aria-label={title}>
            {items.map((x, i) => (
              <button key={x.title} type="button" role="tab" id={`lt-${i}`} aria-selected={on === i} aria-controls="lt-panel" className={`${s.tab} ${on === i ? s.on : ''}`} onClick={() => setOn(i)}>
                <TabFace item={x} />
              </button>
            ))}
          </div>
          <div className={s.tabsMobile}>
            <CardSlider
              label={title}
              slideWidth="62%"
              gap={10}
              items={items.map((x, i) => (
                <button key={x.title} type="button" aria-pressed={on === i} className={`${s.tab} ${on === i ? s.on : ''}`} onClick={() => setOn(i)}>
                  <TabFace item={x} />
                </button>
              ))}
            />
          </div>

          <div key={on} id="lt-panel" role="tabpanel" aria-labelledby={`lt-${on}`} className={s.panel}>
            <h3>{cur.title}</h3>
            {cur.sub && <p className={s.sub}>{cur.sub}</p>}
            {cur.list ? (
              <ul>
                {cur.list.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            ) : (
              <p className={s.text}>{cur.text}</p>
            )}
          </div>
        </div>

        <div className={s.photo} aria-hidden="true">
          {items.map((x, i) => (
            <Image key={x.title} src={photoOf(x.title)} alt="" fill sizes="(max-width: 1200px) 100vw, 40vw" className={`${s.img} ${on === i ? s.shown : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
