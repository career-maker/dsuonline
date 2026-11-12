import Image from 'next/image';
import { heroSlides } from '@/data/home';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Counter } from '@/components/ui/Counter';
import { site } from '@/data/site';
import { EnquireButton } from './EnquireButton';
import s from './ProgramHero.module.scss';

export type ProgramHeroProps = {
  eyebrow: string;
  /** two plain lines, then "Grow with <name>" and the closing line */
  lines: [string, string];
  name: string;
  closing: string;
  desc?: string;
  /** small pill under the description; `href` is an in-page anchor */
  pill?: { tag: string; text: string; href: string };
  stats: { value: number; label: string; note: string }[];
  glance: { title: string; tiles: { value: string; label: string }[] };
  curriculumHref?: string;
  /** photo kept on the right (desktop crop / phone crop); falls back to a home hero slide */
  bgSrc?: string;
  bgMobileSrc?: string;
  bgIndex?: number;
};

/** One hero for every programme page: all text comes from props so the CMS can drive it. Nothing on the right. */
export function ProgramHero({ eyebrow, lines, name, closing, desc, pill, stats, glance, bgSrc, bgMobileSrc, bgIndex = 0 }: ProgramHeroProps) {
  const slide = heroSlides[bgIndex % heroSlides.length];
  return (
    <section className={s.hero}>
      <picture className={s.bg}>
        <source media="(max-width: 899.98px)" srcSet={bgMobileSrc ?? bgSrc ?? slide.mobile} />
        <Image src={bgSrc ?? slide.desktop} alt="" fill priority sizes="100vw" className={s.img} />
      </picture>
      <div className={s.inner}>
        <p className={s.eyebrow}>{eyebrow}</p>
        <h1>
          <span>{lines[0]}</span>
          <span>{lines[1]}</span>
          <span>
            Grow with <b>{name}</b>
          </span>
          <b>{closing}</b>
        </h1>
        {desc && <p className={s.desc}>{desc}</p>}
        {pill && (
          <a className={s.pill} href={pill.href}>
            <i>{pill.tag}</i>
            <span>{pill.text} &rarr;</span>
          </a>
        )}
        <div className={s.ctas}>
          <ArrowLink href={site.apply} external>
            Apply Now
          </ArrowLink>
          <EnquireButton />
          <ArrowLink href="/docs/dsu-online-brochure.pdf" download="DSU-Online-Brochure.pdf" variant="outline">
            Download Brochure
          </ArrowLink>
        </div>
        <dl className={s.stats}>
          {stats.map((x) => (
            <div key={x.label}>
              <dt>
                <Counter to={x.value} /> {x.label}
              </dt>
              <dd>{x.note}</dd>
            </div>
          ))}
        </dl>
        <h2 className={s.glance}>{glance.title}</h2>
        <ul className={s.tiles}>
          {glance.tiles.map((t) => (
            <li key={t.label}>
              <strong>{t.value}</strong>
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
