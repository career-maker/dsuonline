import type { Block } from '@/lib/content';

export type Heading = Extract<Block, { t: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }>;

export type Sub = { title: string; level: number; blocks: Block[] };
export type Section = { title: string; blocks: Block[]; subs: Sub[] };

export type Structure = {
  /** blocks before the first h1 (eyebrows, partner logos ...) */
  pre: Block[];
  h1: string;
  /** blocks between the h1 and the first h2 */
  hero: Block[];
  sections: Section[];
};

const isHead = (b: Block): b is Heading => /^h[1-6]$/.test(b.t);

export function structure(blocks: Block[]): Structure {
  const h1i = blocks.findIndex((b) => b.t === 'h1');
  const pre = h1i > 0 ? blocks.slice(0, h1i) : [];
  const h1 = h1i >= 0 ? (blocks[h1i] as Heading).x : '';
  const rest = h1i >= 0 ? blocks.slice(h1i + 1) : blocks;

  const hero: Block[] = [];
  let i = 0;
  while (i < rest.length && !(isHead(rest[i]) && rest[i].t !== 'h5' && rest[i].t !== 'h6')) hero.push(rest[i++]);

  const sections: Section[] = [];
  let cur: Section | null = null;
  let sub: Sub | null = null;
  for (; i < rest.length; i++) {
    const b = rest[i];
    if (b.t === 'h2') {
      cur = { title: b.x, blocks: [], subs: [] };
      sections.push(cur);
      sub = null;
    } else if (b.t === 'h3' || b.t === 'h4') {
      if (!cur) {
        cur = { title: '', blocks: [], subs: [] };
        sections.push(cur);
      }
      sub = { title: b.x, level: Number(b.t[1]), blocks: [] };
      cur.subs.push(sub);
    } else if (sub) sub.blocks.push(b);
    else if (cur) cur.blocks.push(b);
  }
  return { pre, h1, hero, sections };
}

// ---------- grouping of flat blocks into render nodes

export type Img = { src: string; alt: string; w?: number; h?: number };

export type Node =
  | { k: 'p'; x: string }
  | { k: 'h'; x: string; level: number }
  | { k: 'list'; items: string[] }
  | { k: 'table'; rows: string[][] }
  | { k: 'gallery'; imgs: Img[] }
  | { k: 'figure' } & Img
  | { k: 'cards'; items: { title: string; text: string }[] }
  | { k: 'quotes'; items: { img?: Img; quote: string; meta: string[] }[] }
  | { k: 'link'; x: string; href: string }
  | { k: 'embed'; src: string };

const endsSentence = (x: string) => /[.!?:]$/.test(x.trim());
const isTitle = (x: string) => x.length <= 80 && !endsSentence(x) && !/^[“"‘]/.test(x);
const isQuote = (x: string) => /^[“"‘]/.test(x.trim());

export function group(blocks: Block[], plain = false): Node[] {
  const out: Node[] = [];
  let i = 0;
  const n = blocks.length;
  while (i < n) {
    const b = blocks[i];
    if (b.t === 'img') {
      // img + quote => testimonial run
      if (!plain && blocks[i + 1]?.t === 'p' && isQuote((blocks[i + 1] as { x: string }).x)) {
        const items: { img?: Img; quote: string; meta: string[] }[] = [];
        while (i < n && blocks[i].t === 'img' && blocks[i + 1]?.t === 'p' && isQuote((blocks[i + 1] as { x: string }).x)) {
          const im = blocks[i] as Img;
          const quote = (blocks[i + 1] as { x: string }).x;
          i += 2;
          const meta: string[] = [];
          while (i < n && blocks[i].t === 'p' && !isQuote((blocks[i] as { x: string }).x) && meta.length < 3 && (blocks[i] as { x: string }).x.length < 90) {
            meta.push((blocks[i] as { x: string }).x);
            i++;
          }
          items.push({ img: im, quote, meta });
        }
        out.push({ k: 'quotes', items });
        continue;
      }
      const imgs: Img[] = [];
      while (i < n && blocks[i].t === 'img') {
        const im = blocks[i] as Img;
        imgs.push({ src: im.src, alt: im.alt, w: im.w, h: im.h });
        i++;
      }
      out.push(imgs.length > 1 ? { k: 'gallery', imgs } : { k: 'figure', ...imgs[0] });
      continue;
    }
    if (b.t === 'p') {
      if (!plain && isQuote(b.x) && blocks[i + 1]?.t === 'p') {
        // quote without photo
        const items: { quote: string; meta: string[] }[] = [];
        while (i < n && blocks[i].t === 'p' && isQuote((blocks[i] as { x: string }).x)) {
          const quote = (blocks[i] as { x: string }).x;
          i++;
          const meta: string[] = [];
          while (i < n && blocks[i].t === 'p' && !isQuote((blocks[i] as { x: string }).x) && meta.length < 3 && (blocks[i] as { x: string }).x.length < 90) {
            meta.push((blocks[i] as { x: string }).x);
            i++;
          }
          items.push({ quote, meta });
        }
        out.push({ k: 'quotes', items });
        continue;
      }
      // title/description pairs
      let j = i;
      const items: { title: string; text: string }[] = [];
      while (j + 1 < n && blocks[j].t === 'p' && blocks[j + 1].t === 'p') {
        const t = (blocks[j] as { x: string }).x;
        const d = (blocks[j + 1] as { x: string }).x;
        if (!isTitle(t) || isQuote(d) || (isTitle(d) && d.length < 40 && !endsSentence(d))) break;
        items.push({ title: t, text: d });
        j += 2;
      }
      if (!plain && items.length >= 2) {
        out.push({ k: 'cards', items });
        i = j;
        continue;
      }
      out.push({ k: 'p', x: b.x });
      i++;
      continue;
    }
    if (b.t === 'ul') out.push({ k: 'list', items: b.items });
    else if (b.t === 'table') out.push({ k: 'table', rows: b.rows });
    else if (b.t === 'a') out.push({ k: 'link', x: b.x, href: b.href });
    else if (b.t === 'iframe') out.push({ k: 'embed', src: b.src });
    else if (b.t === 'h5' || b.t === 'h6') out.push({ k: 'h', x: b.x, level: Number(b.t[1]) });
    i++;
  }
  return out;
}

/** Label/value facts such as Duration / 2 Years / (4 Semesters) used in programme heroes. */
export function facts(blocks: Block[]): { label: string; value: string; note?: string }[] {
  const ps = blocks.filter((b): b is { t: 'p'; x: string } => b.t === 'p').map((b) => b.x);
  const isNote = (x: string) => /^(\(|per )/i.test(x);
  const isValue = (x: string) => /^(INR|Rs|\d+\s*(Years?|Months?|Semesters?))/i.test(x) || /^Option to /i.test(x);
  const out: { label: string; value?: string; note?: string }[] = [];
  for (const x of ps) {
    const last = out[out.length - 1];
    if (isNote(x)) {
      if (last) last.note = x;
    } else if (isValue(x) || (last && !last.value && x.length < 60 && !/^Scroll/.test(x))) {
      if (last && !last.value) last.value = x;
    } else if (x.length < 40 && !/^Scroll/.test(x)) out.push({ label: x });
  }
  return out.filter((f): f is { label: string; value: string; note?: string } => !!f.value);
}
