import Image from 'next/image';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { CardSlider } from '@/components/ui/CardSlider';
import { advantageBanner, advantageCards, type AdvantageCard } from '@/data/programme-advantage';
import s from './ProgramAdvantage.module.scss';

const P: Record<AdvantageCard['icon'] | 'swap', string> = {
  degree: 'M2 9l10-5 10 5-10 5L2 9zm4 3.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6',
  clock: 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v5l3 2',
  book: 'M4 5a2 2 0 012-2h12v16H6a2 2 0 00-2 2V5zm2 14h12v2H6M9 7h6M9 11h6',
  play: 'M12 3a9 9 0 100 18 9 9 0 000-18zm-2 5.5v7l6-3.5-6-3.5z',
  exam: 'M8 4h8l1 2h2v15H5V6h2l1-2zm-.5 10l2.5 2.5 5-5',
  alumni: 'M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-6 9a6 6 0 0112 0M17 4.5a3.5 3.5 0 010 6.5m1.5 3.2A6 6 0 0121 20',
  globe: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3z',
  growth: 'M3 17l6-6 4 4 8-8m0 0h-5m5 0v5',
  swap: 'M4 8h13l-3-3m6 11H7l3 3',
};

function Card({ c }: { c: AdvantageCard }) {
  return (
    <div className={s.card}>
      <span className={s.tile}>
        <Ico n={c.icon} />
      </span>
      <h3>{c.title}</h3>
      <p>{c.text}</p>
    </div>
  );
}

function Ico({ n }: { n: keyof typeof P }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[n]} />
    </svg>
  );
}

/** Advantage cards + closing banner shown under the programme hero. All text comes from props / `programme-advantage.ts`. */
export function ProgramAdvantage({ name, lead, dual, bannerSrc }: { name: string; lead: string; dual?: { text: string; href: string }; bannerSrc: string }) {
  return (
    <>
      <section className={s.sec} id="advantage">
        <div className={s.wrap}>
          <header className={s.head}>
            <div>
              <p className={s.eyebrow}>The DSU Online Advantage</p>
              <h2>Why choose the Online {name}?</h2>
            </div>
            <p className={s.lead}>{lead}</p>
          </header>
          {dual && (
            <div className={s.dual}>
              <span className={s.tile}>
                <Ico n="swap" />
              </span>
              <h3>Dual Specialisation</h3>
              <p>{dual.text}</p>
              <ArrowLink href={dual.href} className={s.combo}>
                Build your combination
              </ArrowLink>
            </div>
          )}
          <ul className={s.cards}>
            {advantageCards.map((c) => (
              <li key={c.title}>
                <Card c={c} />
              </li>
            ))}
          </ul>
          <div className={s.mobileCards}>
            <CardSlider label={`Why choose the Online ${name}`} items={advantageCards.map((c) => <Card key={c.title} c={c} />)} />
          </div>
        </div>
      </section>
      <section className={s.bannerSec}>
        <div className={s.wrap}>
          <div className={s.banner}>
            <Image src={bannerSrc} alt="" fill sizes="(max-width: 1200px) 100vw, 1180px" className={s.bannerImg} />
            <div className={s.bannerCopy}>
              <p className={s.bannerEyebrow}>{advantageBanner.eyebrow}</p>
              <p className={s.words} aria-label={advantageBanner.words.join(' ')}>
                {advantageBanner.words.map((w) => (
                  <span key={w} aria-hidden="true">
                    {w}
                  </span>
                ))}
              </p>
              <p className={s.bannerText}>{advantageBanner.text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
