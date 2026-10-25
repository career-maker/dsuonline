import Image from 'next/image';
import type { ReactNode } from 'react';
import { localHref, type Block } from '@/lib/content';
import { AboutBand, aboutPhotos } from '@/components/sections/home/About';
import { WhyChoose } from '@/components/sections/home/WhyChoose';
import { cleanBlocks } from './clean';
import { CtaBand, InnerHero, type Crumb } from './InnerPage';
import { FaqList, LeaderGrid } from './Interactive';
import {
  CardGrid,
  Checklist,
  ContactRow,
  Head,
  CtaLink,
  DocList,
  OfficeCard,
  DataTable,
  FacultyGrid,
  LinkGrid,
  LogoWall,
  Pic,
  Prose,
  QuoteCards,
  StoryCards,
  Sec,
  Split,
  Steps,
  Tabs,
  type Tone,
} from './Kit';
import { parseFaq, parseFaqByQuestionMarks, parsePairs, parseQuotes, splitBullets, type Img } from './parse';
import { facts as parseFacts, structure, type Section, type Sub } from './structure';
import s from './Kit.module.scss';

type Props = {
  slug: string;
  crumbs: Crumb[];
  blocks: Block[];
  programLinks?: { name: string; href: string }[];
  withFacts?: boolean;
};

type P = Extract<Block, { t: 'p' }>;
const isP = (b: Block): b is P => b.t === 'p';
const imgOf = (b: Block): Img => b as Img & { t: 'img' };

/** every block of a section including its sub-headings, flattened for parsers that look at the whole run */
function flat(sec: Section): Block[] {
  return [...sec.blocks, ...sec.subs.flatMap((x) => [{ t: `h${x.level}`, x: x.title } as Block, ...x.blocks])];
}

const isStepTitle = (t: string) => /^step\s*\d/i.test(t);

// ---------- generic block runs -> components

type Seg = { k: 'prose'; paras: string[] } | { k: 'checks'; items: string[] } | { k: 'pairs'; items: { title: string; text: string }[] } | { k: 'logos'; imgs: Img[] } | { k: 'figs'; items: { img: Img; cap: string }[] } | { k: 'media'; img: Img } | { k: 'table'; rows: string[][] } | { k: 'link'; x: string; href: string } | { k: 'list'; items: string[] } | { k: 'embed'; src: string } | { k: 'contacts'; items: { x: string; href: string }[] };

function segments(blocks: Block[]): Seg[] {
  const out: Seg[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.t === 'img') {
      // picture + short caption, repeated: logo cards with captions
      const figs: { img: Img; cap: string }[] = [];
      let k = i;
      while (k + 1 < blocks.length && blocks[k].t === 'img' && blocks[k + 1].t === 'p' && (blocks[k + 1] as P).x.length < 70) {
        figs.push({ img: imgOf(blocks[k]), cap: (blocks[k + 1] as P).x });
        k += 2;
      }
      if (figs.length >= 2) {
        out.push({ k: 'figs', items: figs });
        i = k;
        continue;
      }
      const run: Img[] = [];
      while (i < blocks.length && blocks[i].t === 'img') run.push(imgOf(blocks[i++]));
      if (run.length >= 3 || (run.length === 2 && run.every((r) => (r.w ?? 999) < 400))) out.push({ k: 'logos', imgs: run });
      else run.forEach((r) => out.push({ k: 'media', img: r }));
      continue;
    }
    if (b.t === 'p') {
      const run: string[] = [];
      while (i < blocks.length && blocks[i].t === 'p') run.push((blocks[i++] as P).x);
      // long intro paragraph(s) followed by a run of short lines => prose + checklist
      let cut = run.length;
      while (cut > 0 && run[cut - 1].length <= 70) cut--;
      if (cut > 0 && run.length - cut >= 3 && cut < run.length) {
        out.push({ k: 'prose', paras: run.slice(0, cut) });
        out.push({ k: 'checks', items: [...new Set(run.slice(cut))] });
        continue;
      }
      const uniq = [...new Set(run)];
      const shortAll = uniq.every((x) => x.length <= 70);
      const pairable = uniq.length >= 4 && uniq.length % 2 === 0 && uniq.every((x, j) => (j % 2 === 0 ? x.length <= 70 : x.length > 20));
      if (pairable) {
        const items: { title: string; text: string }[] = [];
        for (let j = 0; j < uniq.length; j += 2) items.push({ title: uniq[j], text: uniq[j + 1] });
        out.push({ k: 'pairs', items });
      } else if (shortAll && uniq.length >= 3) out.push({ k: 'checks', items: uniq });
      else out.push({ k: 'prose', paras: run });
      continue;
    }
    if (b.t === 'ul') out.push({ k: 'list', items: b.items });
    else if (b.t === 'table') out.push({ k: 'table', rows: b.rows });
    else if (b.t === 'a') {
      if (/^(tel|mailto):/.test(b.href)) {
        const items: { x: string; href: string }[] = [];
        while (i < blocks.length && (blocks[i].t === 'a' || blocks[i].t === 'p') && (blocks[i].t === 'p' ? false : /^(tel|mailto):/.test((blocks[i] as { href: string }).href))) {
          items.push({ x: (blocks[i] as { x: string }).x, href: (blocks[i] as { href: string }).href });
          i++;
        }
        out.push({ k: 'contacts', items });
        continue;
      }
      out.push({ k: 'link', x: b.x, href: b.href });
    }
    else if (b.t === 'iframe') out.push({ k: 'embed', src: b.src });
    else if (b.t === 'h5' || b.t === 'h6' || b.t === 'h4') out.push({ k: 'prose', paras: [b.x] });
    i++;
  }
  return out;
}

function renderSeg(seg: Seg, key: string | number): ReactNode {
  switch (seg.k) {
    case 'prose':
      return <Prose key={key} paras={seg.paras} />;
    case 'checks':
      return <Checklist key={key} items={seg.items} cols={seg.items.length > 6 ? 2 : 1} />;
    case 'pairs':
      return <CardGrid key={key} items={seg.items} cols={seg.items.length % 3 === 0 || seg.items.length > 4 ? 3 : 2} tint />;
    case 'logos':
      return <LogoWall key={key} imgs={seg.imgs} />;
    case 'figs':
      return (
        <ul key={key} className={s.figs}>
          {seg.items.map((f) => (
            <li key={f.img.src}>
              <Pic img={f.img} sizes="260px" />
              <span>{f.cap}</span>
            </li>
          ))}
        </ul>
      );
    case 'media':
      return (
        <div key={key} className={`${s.splitMedia} ${s.single}`}>
          <Pic img={seg.img} />
        </div>
      );
    case 'table':
      return <DataTable key={key} rows={seg.rows} />;
    case 'list':
      return <Checklist key={key} items={seg.items} cols={seg.items.length > 3 && seg.items.every((x) => x.length <= 130) ? 2 : 1} />;
    case 'link':
      return /^(tel|mailto):/.test(seg.href) ? (
        <ContactRow key={key} label={seg.href.startsWith('tel') ? 'Call' : 'Email'} href={seg.href} text={seg.x} />
      ) : (
        <div key={key} style={{ justifySelf: 'start' }}>
          <CtaLink href={seg.href}>{seg.x}</CtaLink>
        </div>
      );
    case 'contacts':
      return (
        <div key={key} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 48px' }}>
          {seg.items.map((c) => (
            <ContactRow key={c.href} label={c.href.startsWith('tel') ? 'Call us' : 'Email us'} href={c.href} text={c.x} />
          ))}
        </div>
      );
    case 'embed':
      return <iframe key={key} src={seg.src} title="Embedded content" loading="lazy" className={s.splitMedia} style={{ width: '100%', aspectRatio: '16/9', border: 0 }} />;
  }
}

/** text segments beside a single picture when there is exactly one; otherwise stacked */
function Body({ blocks, head }: { blocks: Block[]; head?: ReactNode }) {
  const segs = segments(blocks);
  const media = segs.filter((x): x is Extract<Seg, { k: 'media' }> => x.k === 'media');
  const text = segs.filter((x) => x.k !== 'media');
  const wide = text.some((x) => x.k === 'pairs' || x.k === 'figs' || x.k === 'table' || x.k === 'logos' || (x.k === 'checks' && x.items.length > 6));
  if (media.length === 1 && text.length && !wide) {
    return (
      <Split media={<Pic img={media[0].img} />}>
        {head}
        {text.map((x, i) => renderSeg(x, i))}
      </Split>
    );
  }
  return (
    <div className={s.tables}>
      {segs.map((x, i) => renderSeg(x, i))}
    </div>
  );
}

function SubView({ sub }: { sub: Sub }) {
  if (!sub.blocks.length) return null;
  return (
    <div style={{ marginTop: 'clamp(28px, 3.4vw, 52px)' }}>
      <h3 style={{ marginBottom: 16, fontSize: 'max(21px, calc(var(--u) * 30))', fontWeight: 700, lineHeight: 1.2 }}>{sub.title}</h3>
      <Body blocks={sub.blocks} />
    </div>
  );
}

// ---------- section kinds

function curriculum(sec: Section): ReactNode | null {
  const tables = flat(sec).filter((b): b is Extract<Block, { t: 'table' }> => b.t === 'table');
  if (!tables.length) return null;
  const core = tables.filter((t) => /^course code$/i.test(t.rows[0]?.[0] ?? ''));
  const elec = tables.filter((t) => !core.includes(t));
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  const clean = (x: string) => x.replace(/^elective\s*[-–:]\s*/i, '').replace(/\s*\(\w+\)\s*$/, '').toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
  const groups = [
    core.length ? { label: 'Semesters', tabs: core.map((t, i) => ({ id: `s${i}`, label: `Semester ${roman[i] ?? i + 1}`, panel: <DataTable rows={t.rows} caption={`Semester ${roman[i]}`} /> })) } : null,
    elec.length ? { label: 'Electives', tabs: elec.map((t, i) => ({ id: `e${i}`, label: clean(t.rows[0]?.[2] ?? `Elective ${i + 1}`), panel: <DataTable rows={t.rows} caption={clean(t.rows[0]?.[2] ?? '')} /> })) } : null,
  ].filter((g): g is NonNullable<typeof g> => !!g);
  return <Tabs groups={groups} />;
}

function careers(sec: Section): ReactNode {
  const ps = sec.blocks.filter(isP).map((b) => b.x);
  const cards: { title: string; list: string[] }[] = [];
  for (let i = 0; i + 1 < ps.length; i += 2) cards.push({ title: ps[i], list: splitBullets(ps[i + 1]) });
  const ind = sec.subs.find((x) => /industr/i.test(x.title));
  const pairs = ind ? parsePairs(ind.blocks) : [];
  return (
    <>
      <CardGrid items={cards} cols={3} />
      {pairs.length > 0 && (
        <div style={{ marginTop: 'clamp(32px, 4vw, 60px)' }}>
          <h3 style={{ marginBottom: 18, fontSize: 'max(22px, calc(var(--u) * 36))', fontWeight: 700 }}>{ind?.title}</h3>
          <CardGrid items={pairs} cols={4} tint />
        </div>
      )}
    </>
  );
}

function faculty(sec: Section): ReactNode {
  const items = sec.subs.map((x) => {
    const ps = x.blocks.filter(isP).map((b) => b.x);
    const img = x.blocks.find((b) => b.t === 'img');
    return { name: x.title, creds: ps[0], role: ps[1], img: img ? imgOf(img) : undefined };
  });
  return <FacultyGrid items={items} />;
}

function learningCards(sec: Section): ReactNode {
  const items = sec.subs.map((x) => {
    const ps = x.blocks.filter(isP).map((b) => b.x);
    const list = x.blocks.filter((b): b is Extract<Block, { t: 'ul' }> => b.t === 'ul').flatMap((b) => b.items);
    return { title: x.title, text: list.length ? ps[0] : ps.join(' '), list: list.length ? list : undefined };
  });
  return (
    <>
      {sec.blocks.length > 0 && (
        <div style={{ marginBottom: 'clamp(22px, 3vw, 40px)' }}>
          <Body blocks={sec.blocks} />
        </div>
      )}
      <CardGrid items={items} cols={items.length === 4 ? 4 : items.length === 2 ? 2 : 3} tint />
    </>
  );
}

function leaders(sec: Section): ReactNode {
  type L = { name: string; role?: string; img?: Img; paras: string[] };
  const out: L[] = [];
  let cur: L | null = null;
  for (const b of flat(sec)) {
    if (b.t === 'img') {
      cur = { name: '', paras: [], img: imgOf(b) };
      out.push(cur);
    } else if (b.t === 'h3' && cur) cur.name = b.x;
    else if ((b.t === 'h5' || b.t === 'h4') && cur) cur.role = b.x;
    else if (b.t === 'p' && cur) cur.paras.push(b.x);
  }
  return (
    <LeaderGrid
      items={out
        .filter((l) => l.name)
        .map((l) => ({
          name: l.name,
          role: l.role,
          paras: l.paras,
          img: l.img ? <Pic img={{ ...l.img, w: l.img.w ?? 400, h: l.img.h ?? 400 }} sizes="200px" /> : null,
        }))}
    />
  );
}

function certificates(blocks: Block[]): ReactNode {
  const imgs = blocks.filter((b) => b.t === 'img').map(imgOf);
  return (
    <div className={s.certs}>
      {imgs.map((im, i) => (
        <figure key={im.src}>
          <Pic img={im} sizes="(max-width: 600px) 100vw, 600px" />
          <figcaption>{im.alt || (i === 0 ? 'Front' : 'Back')}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/** icon + label tiles ("UGC-Entitled degree", "100% online learning" ...) */
function iconTiles(blocks: Block[]): { icon: Img; label: string }[] {
  const out: { icon: Img; label: string }[] = [];
  for (let i = 0; i + 1 < blocks.length; i++) {
    const a = blocks[i];
    const b = blocks[i + 1];
    if (a.t === 'img' && (a.w ?? 999) <= 160 && b.t === 'p') out.push({ icon: imgOf(a), label: b.x });
  }
  return out;
}

function IconTiles({ items }: { items: { icon: Img; label: string }[] }) {
  return (
    <ul className={`${s.cards} ${s.g4} ${s.tint}`}>
      {items.map((t) => (
        <li key={t.label} style={{ textAlign: 'center', display: 'grid', justifyItems: 'center', gap: 14 }}>
          <span className={s.iconDisc}>
            <Image src={t.icon.src} alt="" width={64} height={64} />
          </span>
          <h3 style={{ fontSize: 'max(16px, calc(var(--u) * 20))' }}>{t.label}</h3>
        </li>
      ))}
    </ul>
  );
}

// ---------- the page

function ReferPage({ blocks, crumbs }: { blocks: Block[]; crumbs: Crumb[] }) {
  const st = structure(blocks);
  const prog = st.sections.find((x) => /programs offered/i.test(x.title));
  const terms = st.sections.find((x) => /terms/i.test(x.title));
  const logos = st.pre.filter((b) => b.t === 'img').map(imgOf);
  const names = ['MBA', 'MCA', 'BBA', 'BCA', 'B.Com'];
  const hrefs: Record<string, string> = { MBA: '/online-mba', MCA: '/online-mca', BBA: '/online-bba', BCA: '/online-bca', 'B.Com': '/online-bcom' };
  const full: Record<string, string> = { MBA: 'Master of Business Administration', MCA: 'Master of Computer Applications', BBA: 'Bachelor of Business Administration', BCA: 'Bachelor of Computer Applications', 'B.Com': 'Bachelor of Commerce' };
  const batch = st.pre.find((b): b is P => b.t === 'p' && /batch/i.test(b.x))?.x ?? 'Admissions Open for 2026 Batch';
  const tcs = (terms ? terms.blocks.filter((b): b is Extract<Block, { t: 'ul' }> => b.t === 'ul').flatMap((b) => b.items) : []).filter(Boolean);
  void prog;
  return (
    <>
      <InnerHero banner={3} crumbs={crumbs} eyebrow={batch} title="Refer & Earn Program" subtitle="Refer a friend to DSU Online and be rewarded once their admission cycle is complete." extra={[]} />
      {logos.length > 0 && (
        <Sec tone="white" center>
          <LogoWall imgs={logos} />
        </Sec>
      )}
      <Sec tone="grey" center eyebrow="Programmes offered" title="Refer a friend to any of our programmes">
        <ul className={`${s.cards} ${s.g3} ${s.tint}`} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))' }}>
          {names.map((n) => (
            <li key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
              <span className={s.iconDisc}>
                <b style={{ color: '#fff', fontSize: 15 }}>{n}</b>
              </span>
              <h3 style={{ flex: 1 }}>{full[n]}</h3>
              <CtaLink href={hrefs[n]}>Know more</CtaLink>
            </li>
          ))}
        </ul>
      </Sec>
      <Sec tone="white" eyebrow="Please note" title="Terms & Conditions">
        <ol className={s.steps}>
          {tcs.map((t, i) => (
            <li key={t}>
              <span className={s.stepNo}>{String(i + 1).padStart(2, '0')}</span>
              <p style={{ marginTop: 0 }}>{t}</p>
            </li>
          ))}
        </ol>
      </Sec>
      <CtaBand />
    </>
  );
}

export function ContentPage({ slug, crumbs, blocks: raw, programLinks, withFacts = false }: Props) {
  const blocks = cleanBlocks(raw);
  if (slug === 'refer') return <ReferPage blocks={blocks} crumbs={crumbs} />;
  const st = structure(blocks);
  const heroPs = st.hero.filter(isP);
  const preEyebrow = st.pre.filter(isP).map((b) => b.x).find((x) => x.length < 70 && !st.sections.some((sc) => sc.title === x));
  const facts = withFacts ? parseFacts(st.hero) : undefined;
  const factText = new Set<string>(facts?.flatMap((f) => [f.label, f.value, f.note ?? '']) ?? []);
  const subtitle = heroPs.find((p) => !factText.has(p.x) && !/^(Scroll|Duration|Elective)/.test(p.x) && p.x.length > 12)?.x;
  const heroImgs = st.hero.filter((b) => b.t === 'img');
  const introBlocks = st.hero.filter((b) => slug !== 'contact-us' && b.t !== 'a' && b.t !== 'img' && !(isP(b) && (factText.has(b.x) || b.x === subtitle)));
  const longSub = !withFacts && !!subtitle && subtitle.length >= 200;

  let ti = 0;
  const nextTone = (): Tone => (ti++ % 2 === 0 ? 'white' : 'grey');

  // sections whose body is a single paragraph (Why DSU: accordion titles) are merged into one FAQ-style block
  const secs = st.sections;
  const nodes: ReactNode[] = [];
  for (let n = 0; n < secs.length; n++) {
    const sec = secs[n];
    const all = flat(sec);
    const title = sec.title;
    const key = `${title}-${n}`;
    if (!sec.blocks.length && !sec.subs.length) continue; // heading with no content (its body was layout notes)

    // --- /about: the two 'quality education' sections become the home About block (stats, photos, features)
    if (slug === 'about' && /how dsu online ensures quality education\?/i.test(title)) {
      const digital = secs.find((x) => /digital format/i.test(x.title));
      const copy = [...sec.blocks.filter(isP), ...(digital ? digital.blocks.filter(isP) : [])].map((b) => b.x);
      nodes.push(
        <AboutBand
          key={key}
          id="about-dsu"
          title={
            <>
              How DSU Online Ensures
              <br />
              Quality Education?
            </>
          }
          copy={copy.slice(0, 2)}
          after={copy.slice(2)}
          left={aboutPhotos.left}
          right={aboutPhotos.right}
          href="/admission"
          cta="Apply Now"
          play={false}
        />,
      );
      continue;
    }
    if (slug === 'about' && /digital format/i.test(title)) continue;

    // --- /about: 'Why choose' becomes the home Why Choose block (icons + certifications) plus the full benefit list
    if (slug === 'about' && /^why choose/i.test(title)) {
      const items = sec.blocks.filter(isP).map((b) => b.x);
      const copy = sec.subs.flatMap((x) => x.blocks.filter(isP)).map((b) => b.x)[0];
      nodes.push(<WhyChoose key={key} title={title} copy={copy} />);
      if (items.length) {
        nodes.push(
          <Sec key={`${key}-list`} tone="white" eyebrow="Benefits" title="What you get with DSU Online">
            <Checklist items={items} cols={2} />
          </Sec>,
        );
      }
      continue;
    }

    // --- single-paragraph sections in a row => accordion with the image beside it
    if (slug === 'why-dsu-online' && sec.blocks.length === 1 && isP(sec.blocks[0]) && !sec.subs.length) {
      const run: Section[] = [];
      let m = n;
      const simple = (x: Section) => isP(x.blocks[0] ?? ({} as Block)) && !x.subs.length && x.blocks.slice(1).every((b) => b.t === 'img');
      while (m < secs.length && simple(secs[m])) {
        run.push(secs[m++]);
        if (secs[m - 1].blocks.length > 1) break; // the last item carries the side picture + award logos
      }
      if (run.length >= 3) {
        const trailing = run[run.length - 1].blocks.filter((b) => b.t === 'img');
        const img = trailing[0];
        const logos = trailing.slice(1).map(imgOf);
        nodes.push(
          <Sec key={key} tone={nextTone()} eyebrow="Learning experience" title="A Learning Experience That’s a Class Apart">
            <Split media={img ? <Pic img={imgOf(img)} /> : undefined} top>
              <FaqList items={run.map((r) => ({ q: r.title, a: [(r.blocks[0] as P).x] }))} />
            </Split>
          </Sec>,
        );
        if (logos.length) {
          nodes.push(
            <Sec key={`${key}-logos`} tone="white" center title="Awards & Recognitions">
              <LogoWall imgs={logos} />
            </Sec>,
          );
        }
        n = m - 1;
        continue;
      }
    }

    // --- document lists: sub-headings whose content is only download links
    const docSubs = sec.subs.filter((x) => x.blocks.length > 0 && x.blocks.every((b) => b.t === 'a'));
    if (docSubs.length >= 1 && docSubs.length === sec.subs.length && !sec.blocks.length) {
      nodes.push(
        <Sec key={key} tone={nextTone()} title={title}>
          <DocList items={docSubs.map((x) => ({ title: x.title, links: x.blocks.filter((b): b is Extract<Block, { t: 'a' }> => b.t === 'a').map((b) => ({ x: b.x, href: b.href })) }))} />
        </Sec>,
      );
      continue;
    }

    // --- contact page: office cards + maps
    if (slug === 'contact-us' && /touch/i.test(title)) {
      const lead = sec.blocks.filter(isP)[0]?.x;
      const maps = all.filter((b): b is Extract<Block, { t: 'iframe' }> => b.t === 'iframe');
      const rows = (bl: Block[]) => bl.filter((b): b is Extract<Block, { t: 'a' }> => b.t === 'a').map((b) => <ContactRow key={b.href} label={b.href.startsWith('tel') ? 'Call us' : 'Email us'} href={b.href} text={b.x} />);
      const addr = all.filter(isP).map((b) => b.x);
      const li = addr.findIndex((x) => /^location$/i.test(x));
      const campus = addr.findIndex((x) => /main campus/i.test(x));
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="Contact" title={title} lead={lead}>
          <div className={s.officeGrid}>
            {sec.subs.map((x) => (
              <OfficeCard key={x.title} title={x.title}>
                {rows(x.blocks)}
              </OfficeCard>
            ))}
            {li >= 0 && addr[li + 1] && (
              <OfficeCard title="Location">
                <p>{addr[li + 1]}</p>
              </OfficeCard>
            )}
            {campus >= 0 && addr[campus + 1] && (
              <OfficeCard title="DSU Main Campus">
                <p>{addr[campus + 1]}</p>
              </OfficeCard>
            )}
          </div>
          {maps.length > 0 && (
            <div className={s.maps}>
              {maps.map((m) => (
                <iframe key={m.src} src={m.src} title="Map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              ))}
            </div>
          )}
        </Sec>,
      );
      continue;
    }

    // --- FAQ
    const faq = parseFaq(all);
    if ((/frequently|faq/i.test(title) || faq.length >= 3) && (faq.length || parseFaqByQuestionMarks(all).length >= 2)) {
      const items = faq.length >= 2 ? faq : parseFaqByQuestionMarks(all);
      nodes.push(
        <Sec key={key} tone="sky" center eyebrow="Got questions?" title={title.replace(/^Frequently Asked Questions$/i, 'Frequently Asked Questions')}>
          <FaqList items={items} />
        </Sec>,
      );
      continue;
    }

    // --- testimonials
    const quotes = parseQuotes(all);
    if (quotes.length >= 2 && /stor|testimonial|experience|impact|say|review|voice/i.test(title)) {
      const lead = sec.blocks.filter(isP).find((b) => b.x.length > 30 && !/^[“"]/.test(b.x) && !quotes.some((q) => q.quote === b.x))?.x;
      nodes.push(
        <Sec key={key} tone="sky" center title={title} lead={lead} eyebrow="Testimonials">
          {quotes.filter((q) => q.img).length >= quotes.length / 2 ? <StoryCards items={quotes} initial={9} /> : <QuoteCards items={quotes} initial={6} />}
        </Sec>,
      );
      continue;
    }

    // --- programme electives grid
    if (programLinks && /elective/i.test(title) && sec.subs.length > 0) {
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="Specialisations" title={title}>
          <LinkGrid items={programLinks.map((l) => ({ name: l.name, href: l.href, hint: 'Know more' }))} />
        </Sec>,
      );
      continue;
    }

    // --- fees
    if (/fee/i.test(title) && all.some((b) => b.t === 'table')) {
      const tables = all.filter((b): b is Extract<Block, { t: 'table' }> => b.t === 'table');
      const note = all.filter(isP).map((b) => b.x).find((x) => /^note/i.test(x));
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="Investment" title={title}>
          <div className={s.tables}>
            {tables.map((t, i) => (
              <DataTable key={i} rows={t.rows} caption={title} />
            ))}
          </div>
          {note && <p className={s.note}>{note}</p>}
        </Sec>,
      );
      continue;
    }

    // --- curriculum tabs
    if (/curriculum/i.test(title) && all.some((b) => b.t === 'table')) {
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="What you will study" title={title}>
          {curriculum(sec)}
        </Sec>,
      );
      continue;
    }

    // --- faculty
    if (/faculty/i.test(title) && sec.subs.some((x) => x.blocks.some((b) => b.t === 'img'))) {
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="Learn from the best" title={title}>
          {faculty(sec)}
        </Sec>,
      );
      continue;
    }

    // --- career options
    if (/career options/i.test(title)) {
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="Where it leads" title={title}>
          {careers(sec)}
        </Sec>,
      );
      continue;
    }

    // --- learning system (sub-headings become cards)
    if (/learning system/i.test(title) && sec.subs.length >= 2) {
      nodes.push(
        <Sec key={key} tone={nextTone()} title={title}>
          {learningCards(sec)}
        </Sec>,
      );
      continue;
    }

    // --- admission steps
    const stepSubs = sec.subs.filter((x) => isStepTitle(x.title) || /^(registration|online application|document verification|admissions? confirmation)$/i.test(x.title));
    if (stepSubs.length >= 3) {
      const rest = sec.subs.filter((x) => !stepSubs.includes(x));
      const steps = stepSubs.map((x) => ({ title: x.title.replace(/^step\s*\d+\s*[:.-]?\s*/i, ''), text: x.blocks.filter(isP).map((b) => b.x).join(' ') }));
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="Apply" title={title}>
          <Steps items={steps} />
        </Sec>,
      );
      for (const r of rest) {
        const rimg = r.blocks.find((b) => b.t === 'img');
        nodes.push(
          <Sec key={`${key}-${r.title}`} tone="sky">
            <Split media={rimg ? <Pic img={imgOf(rimg)} /> : undefined}>
              <h3 style={{ fontSize: 'max(22px, calc(var(--u) * 36))', fontWeight: 700, lineHeight: 1.2, color: '#212121' }}>{r.title}</h3>
              <Prose paras={r.blocks.filter(isP).map((b) => b.x)} />
              <CtaLink href="/online-mba">Explore programmes</CtaLink>
            </Split>
          </Sec>,
        );
      }
      continue;
    }
    const stepList = sec.blocks.find((b): b is Extract<Block, { t: 'ul' }> => b.t === 'ul' && b.items.length >= 3 && b.items.every((x) => /^step\s*\d/i.test(x)));
    if (stepList) {
      const names = ['Registration', 'Online Application', 'Document Verification', 'Admissions Confirmation'];
      const steps = stepList.items.map((x, i) => {
        const body = x.replace(/^step\s*\d+\s*[:.-]?\s*/i, '');
        const nm = names.find((t) => body.toLowerCase().startsWith(t.toLowerCase())) ?? (/^admissions?\s+confirmation/i.test(body) ? body.match(/^admissions?\s+confirmation/i)![0] : undefined);
        return nm && stepList.items.length === 4 ? { title: nm.replace(/^admission /i, 'Admissions '), text: body.slice(nm.length).trim() } : { title: `Step ${i + 1}`, text: body };
      });
      const img = sec.blocks.find((b) => b.t === 'img');
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="Apply" title={title} lead={sec.blocks.filter(isP)[0]?.x}>
          <Steps items={steps} />
          {img && (
            <div className={s.splitMedia} style={{ marginTop: 28, maxWidth: 480 }}>
              <Pic img={imgOf(img)} />
            </div>
          )}
        </Sec>,
      );
      continue;
    }

    // --- leaders (about)
    if (/message from the leadership/i.test(title)) {
      nodes.push(
        <Sec key={key} tone={nextTone()} eyebrow="Leadership" title={title}>
          {leaders(sec)}
        </Sec>,
      );
      continue;
    }

    // --- certificate pair
    const imgs = all.filter((b) => b.t === 'img');
    if ((/certificate|added value/i.test(title) || (sec.blocks.length > 0 && sec.blocks.every((b) => b.t === 'img'))) && imgs.length >= 2) {
      nodes.push(
        <Sec key={key} tone={nextTone()} center eyebrow="Your credential" title={title}>
          {certificates(sec.blocks)}
        </Sec>,
      );
      continue;
    }

    // --- icon tiles
    const tiles = iconTiles(sec.blocks);
    if (tiles.length >= 4) {
      const lead = sec.blocks.filter(isP).find((b) => b.x.length > 80)?.x;
      nodes.push(
        <Sec key={key} tone={nextTone()} center title={title} lead={lead}>
          <IconTiles items={tiles} />
        </Sec>,
      );
      continue;
    }

    // --- stats (placement counters: h3 number + p label)
    const statSubs = sec.subs.filter((x) => /^[\d,]+\+?$/.test(x.title));
    if (statSubs.length >= 3) {
      nodes.push(
        <Sec key={key} tone="white" center title={title}>
          <ul className={s.stats}>
            {statSubs.map((x) => (
              <li key={x.title + x.blocks[0]}>
                <b>{x.title}</b>
                <span>{x.blocks.filter(isP)[0]?.x}</span>
              </li>
            ))}
          </ul>
        </Sec>,
      );
      continue;
    }

    // --- mixed: sub-headings that all hold a few lines become cards
    const cardSubs = sec.subs.length >= 2 && sec.subs.every((x) => !x.blocks.some((b) => b.t === 'img' || b.t === 'table') && x.blocks.reduce((t, b) => t + (isP(b) ? b.x.length : b.t === 'ul' ? b.items.join('').length : 0), 0) < 700);
    const hasLead = sec.blocks.length > 0;

    if (cardSubs && !hasLead) {
      nodes.push(
        <Sec key={key} tone={nextTone()} title={title}>
          {learningCards({ ...sec, blocks: [] })}
        </Sec>,
      );
      continue;
    }

    // --- empty-title block (callout)
    if (!title && sec.subs.length) {
      const sub = sec.subs[0];
      nodes.push(
        <Sec key={key} tone="sky" center narrow>
          <h3 style={{ fontSize: 'max(22px, calc(var(--u) * 36))', fontWeight: 700, lineHeight: 1.25 }}>{sub.title}</h3>
          <div style={{ marginTop: 12 }}>
            <Body blocks={sub.blocks} />
          </div>
        </Sec>,
      );
      continue;
    }

    // --- default
    const segs0 = segments(sec.blocks);
    const oneMedia = segs0.filter((x) => x.k === 'media').length === 1 && segs0.some((x) => x.k !== 'media') && !segs0.some((x) => x.k === 'pairs' || x.k === 'figs' || x.k === 'table' || x.k === 'logos' || (x.k === 'checks' && x.items.length > 6));
    nodes.push(
      <Sec key={key} tone={nextTone()} title={oneMedia ? undefined : title || undefined} narrow={!imgs.length && !sec.subs.length && sec.blocks.every((b) => b.t === 'p' && b.x.length > 80)}>
        {hasLead && <Body blocks={sec.blocks} head={oneMedia ? <Head title={title || undefined} /> : undefined} />}
        {cardSubs && hasLead ? <div style={{ marginTop: 28 }}>{learningCards({ ...sec, blocks: [] })}</div> : sec.subs.map((x) => <SubView key={x.title} sub={x} />)}
      </Sec>,
    );
  }

  return (
    <>
      <InnerHero banner={[...slug].reduce((n, c) => n + c.charCodeAt(0), 0)} crumbs={crumbs} eyebrow={preEyebrow} title={st.h1} subtitle={withFacts || !longSub ? subtitle : undefined} facts={facts} extra={st.hero} />
      {(longSub || (introBlocks.length > 0 && !withFacts)) && (
        <Sec tone="white" narrow={!heroImgs.length} center={!heroImgs.length}>
          <Body blocks={[...(longSub ? ([{ t: 'p', x: slug === 'student-testimonials' ? subtitle.replace(/^Testimonials\s+/, '') : subtitle } as Block]) : []), ...introBlocks, ...heroImgs.slice(0, 1)]} />
        </Sec>
      )}
      {nodes}
      <CtaBand />
    </>
  );
}

export { localHref };
