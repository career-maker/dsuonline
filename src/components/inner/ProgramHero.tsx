import Image from 'next/image';
import { heroSlides } from '@/data/home';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Counter } from '@/components/ui/Counter';
import { site } from '@/data/site';
import { brochureHref } from '@/data/brochures';
import s from './ProgramHero.module.scss';

export type ProgramHeroProps = {
  eyebrow: string;
  /** programme code (mba, mca ...): picks the brochure PDF */
  code?: string;
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
  /** words before the bold name in the second headline line */
  grow?: string;
  /** specialization pages: reversed gradient, no photo, yellow accent text */
  reverse?: boolean;
};

/** One hero for every programme page: all text comes from props so the CMS can drive it. Nothing on the right. */
export function ProgramHero({ eyebrow, lines, name, closing, desc, pill, stats, glance, bgSrc, bgMobileSrc, bgIndex = 0, grow = 'Grow with', reverse, code }: ProgramHeroProps) {
  const slide = heroSlides[bgIndex % heroSlides.length];
  const head = (
    <>
      <p className={s.eyebrow}>{eyebrow}</p>
      <h1>
        <span>
          {lines[0]} {lines[1]}
        </span>
        <span>
          {grow} <b>{name}</b> {closing && <b className={s.closing}>{closing}</b>}
        </span>
      </h1>
      {desc && <p className={s.desc}>{desc}</p>}
      {pill && (
        <a className={s.pill} href={pill.href}>
          <i>{pill.tag}</i>
          <span>{pill.text} &rarr;</span>
        </a>
      )}
    </>
  );
  const facts = (
    <>
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
    </>
  );
  const actions = (
    <div className={s.ctas}>
      {/* phones show the short label; the full one stays for screen readers */}
      <ArrowLink href={site.apply} external>
        <span className={s.full}>Apply Now</span>
        <span className={s.short} aria-hidden="true">Apply</span>
      </ArrowLink>
      <ArrowLink href={brochureHref(code)} external variant="outline">
        <span className={s.full}>Download Brochure</span>
        <span className={s.short} aria-hidden="true">Download</span>
      </ArrowLink>
    </div>
  );
  return (
    <section className={`${s.hero} ${reverse ? s.rev : ''}`}>
      {!reverse && <picture className={s.bg}>
        <source media="(max-width: 899.98px)" srcSet={bgMobileSrc ?? bgSrc ?? slide.mobile} />
        <Image src={bgSrc ?? slide.desktop} alt="" fill priority sizes="100vw" className={s.img} />
      </picture>}
      <div className={s.inner}>
        {reverse ? (
          <div className={s.split}>
            <div className={s.left}>
              {head}
              {actions}
            </div>
            <div className={s.side}>{facts}</div>
          </div>
        ) : (
          <>
            {head}
            {facts}
            {actions}
          </>
        )}
      </div>
    </section>
  );
}
