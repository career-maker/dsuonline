import type { Block } from '@/lib/content';

// Layout/dev notes left in the live site's markup; they are not content.
const NOTE =
  /^(hero|description|how to apply|eligibility|points to remember|documents required|fee payment|support|faq|success stories|row \d+|left:.*|right:.*|heading|carousel with cards|navigation buttons.*|testimonial \d+|slide \d+|pagination|image column|content column|card (header|body)|update the image path.*|widget will be added.*|(start|end)\s*:.*form|accreditation logos|×|‹|›|show more|read more|view more|\+ ?more|flip certificate|front|back)$|^.* section( - .*)?$/i;

export const isNote = (x: string) => NOTE.test(x.trim());

export function cleanBlocks(blocks: Block[]): Block[] {
  const out: Block[] = [];
  for (const b of blocks) {
    if (b.t === 'p' || b.t === 'q') {
      const x = b.x.replace(/\s*[▲▼]\s*$/, '').trim();
      // notes, bare step/card numbers and icon glyphs are layout leftovers, not content
      if (!x || isNote(x) || /^\d{1,2}$/.test(x) || /^[\u2709\u260e\u{1F4DE}]\uFE0F?$/u.test(x)) continue;
      const nb = { ...b, x };
      const last = out[out.length - 1];
      if (last && last.t === nb.t && 'x' in last && last.x === x && x.length < 60) continue; // carousel duplicates
      out.push(nb);
    } else if (b.t === 'img' && (b.w ?? 999) < 60 && (b.h ?? 999) < 60) continue; // decorative glyphs
    else out.push(b);
  }
  return out;
}

export const isQuote = (x: string) => /^[“"‘]\s*/.test(x.trim());
export const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
