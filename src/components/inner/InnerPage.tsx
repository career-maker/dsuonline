import Image from 'next/image';
import Link from 'next/link';
import { heroSlides } from '@/data/home';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { site } from '@/data/site';
import { localHref, type Block } from '@/lib/content';
import { EnquireButton } from './EnquireButton';
import { Flow } from './Flow';
import { facts as parseFacts, structure, type Section, type Sub } from './structure';
import s from './Inner.module.scss';

export type Crumb = { label: string; href?: string };

const isFaq = (t: string) => /frequently|faq/i.test(t);
const isStep = (t: string) => /^step\s*\d/i.test(t);
const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function subKind(sub: Sub): 'card' | 'wide' {
  const hasTable = sub.blocks.some((b) => b.t === 'table');
  const imgs = sub.blocks.filter((b) => b.t === 'img').length;
  if (imgs >= 2) return 'wide';
  const text = sub.blocks.reduce((n, b) => n + (b.t === 'p' ? b.x.length : b.t === 'ul' ? b.items.join('').length : 0), 0);
  return hasTable || text > 900 || sub.blocks.length > 9 ? 'wide' : 'card';
}

function SubBlock({ sub }: { sub: Sub }) {
  return (
    <div className={s.sub}>
      <h3>{sub.title}</h3>
      <Flow blocks={sub.blocks} />
    </div>
  );
}

function Subs({ subs }: { subs: Sub[] }) {
  const steps = subs.every((x) => isStep(x.title));
  if (steps) {
    return (
      <ol className={s.steps}>
        {subs.map((x, i) => (
          <li key={x.title}>
            <span className={s.stepNo}>{String(i + 1).padStart(2, '0')}</span>
            <h3>{x.title.replace(/^step\s*\d+\s*[:.-]?\s*/i, '')}</h3>
            <Flow blocks={x.blocks} />
          </li>
        ))}
      </ol>
    );
  }
  // consecutive card-like subs go into a grid, wide ones stay full width
  const rows: (Sub[] | Sub)[] = [];
  for (const x of subs) {
    if (subKind(x) === 'card') {
      const last = rows[rows.length - 1];
      if (Array.isArray(last)) last.push(x);
      else rows.push([x]);
    } else rows.push(x);
  }
  return (
    <>
      {rows.map((r, i) =>
        Array.isArray(r) ? (
          <div key={i} className={s.subGrid}>
            {r.map((x) => (
              <SubBlock key={x.title} sub={x} />
            ))}
          </div>
        ) : (
          <SubBlock key={r.title} sub={r} />
        ),
      )}
    </>
  );
}

function SectionView({ sec, tone, programLinks }: { sec: Section; tone: 'white' | 'grey' | 'sky'; programLinks?: { name: string; href: string }[] }) {
  const faq = isFaq(sec.title);
  const electives = programLinks && /elective/i.test(sec.title) && sec.subs.length > 0;
  return (
    <section className={`${s.section} ${s[tone]}`} id={slugify(sec.title)}>
      <div className={s.inner}>
        {sec.title && <h2 className={s.h2}>{sec.title}</h2>}
        {sec.blocks.length > 0 && <Flow blocks={sec.blocks} faq={faq} />}
        {electives ? (
          <ul className={s.electives}>
            {programLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>
                  <span>{l.name}</span>
                  <em>Know more</em>
                </Link>
              </li>
            ))}
          </ul>
        ) : sec.subs.length > 0 ? (
          <Subs subs={sec.subs} />
        ) : null}
      </div>
    </section>
  );
}

export function InnerHero({
  crumbs,
  eyebrow,
  title,
  subtitle,
  facts,
  extra,
  banner,
}: {
  banner?: number;
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  facts?: { label: string; value: string; note?: string }[];
  extra?: Block[];
}) {
  const links = (extra ?? []).filter((b): b is Extract<Block, { t: 'a' }> => b.t === 'a');
  return (
    <section className={s.hero}>
      {/* banner photo: desktop/tablet and phone crops come from the same slide data as the home hero (CMS: one image per breakpoint) */}
      <picture className={s.heroBg}>
        <source media="(max-width: 759.98px)" srcSet={heroSlides[(banner ?? 0) % heroSlides.length].mobile} />
        <Image src={heroSlides[(banner ?? 0) % heroSlides.length].desktop} alt="" fill priority sizes="100vw" className={s.heroImg} />
      </picture>
      <div className={s.heroShade} aria-hidden="true" />
      <div className={s.heroInner}>
        <nav aria-label="Breadcrumb" className={s.crumbs}>
          <ol>
            {crumbs.map((c, i) => (
              <li key={c.label}>
                {c.href && i < crumbs.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className={s.heroEyebrow}>{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className={s.heroSub}>{subtitle}</p>}
        {facts && facts.length > 0 && (
          <dl className={s.facts}>
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
                {f.note && <small>{f.note}</small>}
              </div>
            ))}
          </dl>
        )}
        <div className={s.heroCtas}>
          {links.slice(0, 1).map((l) => {
            const href = localHref(l.href);
            return href.startsWith('/') ? (
              <ArrowLink key={l.x} href={href}>
                {l.x}
              </ArrowLink>
            ) : (
              <ArrowLink key={l.x} href={href} external>
                {l.x}
              </ArrowLink>
            );
          })}
          {links.length === 0 && (
            <ArrowLink href={site.apply} external>
              Apply Now
            </ArrowLink>
          )}
          <EnquireButton />
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className={s.cta}>
      <div className={s.inner}>
        <div>
          <h2>Ready to take the Next Step ?</h2>
          <p>Admission Open for 2027, Enroll Now &amp; Stop Your Future</p>
        </div>
        <div className={s.ctaBtns}>
          <ArrowLink href={site.apply} external>
            Apply Now
          </ArrowLink>
          <EnquireButton variant="outline" />
        </div>
      </div>
    </section>
  );
}

export function InnerPage({
  crumbs,
  blocks,
  eyebrow,
  withFacts = false,
  programLinks,
  titleOverride,
}: {
  crumbs: Crumb[];
  blocks: Block[];
  eyebrow?: string;
  withFacts?: boolean;
  programLinks?: { name: string; href: string }[];
  titleOverride?: string;
}) {
  const st = structure(blocks);
  const heroPs = st.hero.filter((b): b is Extract<Block, { t: 'p' }> => b.t === 'p');
  const preEyebrow = eyebrow ?? st.pre.filter((b): b is Extract<Block, { t: 'p' }> => b.t === 'p').map((b) => b.x).find((x) => x.length < 70);
  const facts = withFacts ? parseFacts(st.hero) : undefined;
  // subtitle = first descriptive paragraph in the hero (not a fact label/value)
  const factText = new Set<string>(facts?.flatMap((f) => [f.label, f.value, f.note ?? '']) ?? []);
  const subtitle = heroPs.find((p) => !factText.has(p.x) && !/^(Scroll|Duration|Elective)/.test(p.x) && p.x.length > 12)?.x;
  const introBlocks = st.hero.filter((b) => b.t !== 'a' && !(b.t === 'p' && (factText.has(b.x) || b.x === subtitle)) && b.t !== 'img');
  const tones: ('white' | 'grey' | 'sky')[] = ['white', 'grey'];
  const longSubtitle = !withFacts && subtitle !== undefined && subtitle.length >= 220;
  return (
    <>
      <InnerHero
        banner={0}
        crumbs={crumbs}
        eyebrow={preEyebrow}
        title={titleOverride ?? st.h1}
        subtitle={withFacts ? subtitle : subtitle && subtitle.length < 220 ? subtitle : undefined}
        facts={facts}
        extra={st.hero}
      />
      {longSubtitle || (introBlocks.length > 0 && !withFacts) ? (
        <section className={`${s.section} ${s.white}`}>
          <div className={s.inner}>
            <Flow blocks={longSubtitle ? [{ t: 'p', x: subtitle }, ...introBlocks] : introBlocks} />
          </div>
        </section>
      ) : null}
      {st.sections.map((sec, i) => (
        <SectionView key={`${sec.title}-${i}`} sec={sec} tone={tones[i % 2]} programLinks={programLinks} />
      ))}
      <CtaBand />
    </>
  );
}
