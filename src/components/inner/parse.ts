import type { Block } from '@/lib/content';
import { isQuote } from './clean';

export type Img = { src: string; alt: string; w?: number; h?: number };
export type Quote = { img?: Img; quote: string; name: string; meta: string[] };
export type Faq = { q: string; a: string[]; list?: string[] };

const txt = (b: Block) => ('x' in b ? b.x : '');
const asImg = (b: Block): Img => (b as Img & { t: 'img' });

/** testimonial-like runs: photo / name / programme / company / quote, in either order. */
export function parseQuotes(blocks: Block[]): Quote[] {
  const out: Quote[] = [];
  const stars = /^[★☆]+$/;
  const nameFirst = blocks.some((b, i) => (b.t === 'h3' || b.t === 'h4') && blocks.slice(i + 1, i + 5).some((n) => n.t === 'p' && isQuote(n.x)));
  let cur: Quote | null = null;
  let pendingImg: Img | undefined;
  const isIcon = (b: Block) => b.t === 'img' && /quote|comma/i.test(`${b.alt}${b.src}`);
  for (let bi = 0; bi < blocks.length; bi++) {
    const b = blocks[bi];
    const nextHead = blocks[bi + 1]?.t === 'h3' || blocks[bi + 1]?.t === 'h4';
    if (b.t === 'img') {
      if (isIcon(b)) continue;
      if (nameFirst) {
        if (cur && !cur.quote) cur.img = asImg(b);
        else {
          cur = { img: asImg(b), quote: '', name: '', meta: [] };
          out.push(cur);
        }
      } else if (cur && cur.quote && !cur.img && !cur.name) cur.img = asImg(b); // photo after the quote
      else pendingImg = asImg(b);
      continue;
    }
    const x = txt(b);
    if (!x || stars.test(x)) continue;
    if (nameFirst) {
      if (b.t === 'h3' || b.t === 'h4') {
        if (!cur || cur.quote) {
          cur = { quote: '', name: x, meta: [] };
          out.push(cur);
        } else cur.name = x;
      } else if (b.t === 'p') {
        if (!cur) continue;
        if (isQuote(x)) cur.quote = x;
        else if (!cur.quote) cur.meta.push(x);
      }
    } else if (b.t === 'p' || b.t === 'h3' || b.t === 'h4') {
      if (isQuote(x) || (b.t === 'p' && x.length > 80 && nextHead)) {
        cur = { img: pendingImg, quote: x, name: '', meta: [] };
        pendingImg = undefined;
        out.push(cur);
      } else if (cur) {
        if (!cur.name) cur.name = x;
        else if (cur.meta.length < 2) cur.meta.push(x);
      }
    }
  }
  return out.filter((q) => q.quote);
}

/** question/answer pairs from 'q' markers; answers are the paragraphs / lists that follow. */
export function parseFaq(blocks: Block[]): Faq[] {
  const out: Faq[] = [];
  let cur: Faq | null = null;
  for (const b of blocks) {
    if (b.t === 'q') {
      cur = { q: b.x, a: [] };
      out.push(cur);
    } else if (cur && b.t === 'p') cur.a.push(b.x);
    else if (cur && b.t === 'ul') cur.list = [...(cur.list ?? []), ...b.items];
  }
  return out.filter((f) => f.a.length || f.list?.length);
}

/** legacy FAQ blocks without 'q' markers: paragraphs ending in "?" start a new item. */
export function parseFaqByQuestionMarks(blocks: Block[]): Faq[] {
  const out: Faq[] = [];
  for (const b of blocks) {
    if (b.t === 'p' && /\?\s*$/.test(b.x)) out.push({ q: b.x, a: [] });
    else if (out.length && b.t === 'p') out[out.length - 1].a.push(b.x);
    else if (out.length && b.t === 'ul') out[out.length - 1].list = [...(out[out.length - 1].list ?? []), ...b.items];
  }
  return out.filter((f) => f.a.length || f.list?.length);
}

/** title/description (or title/bullets) pairs: short title paragraph followed by its text. */
export function parsePairs(blocks: Block[]): { title: string; text: string }[] {
  const out: { title: string; text: string }[] = [];
  const ps = blocks.filter((b): b is Extract<Block, { t: 'p' }> => b.t === 'p');
  for (let i = 0; i + 1 < ps.length; i += 2) out.push({ title: ps[i].x, text: ps[i + 1].x });
  return out;
}

export const splitBullets = (x: string) =>
  x
    .split('•')
    .map((s) => s.replace(/^[\s\-–]+|[\s\-–]+$/g, ''))
    .filter(Boolean);
