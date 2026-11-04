import page from '../../content/pages/student-testimonials.json';

export type Testimonial = {
  name: string;
  course?: string;
  company?: string;
  quote?: string;
  img?: string;
  /** YouTube video id. When set the card shows a play button and plays the video inside the card. */
  video?: string;
};

type B = { t: string; x?: string; src?: string };

// Exact copy of the live /student-testimonials page: [photo] name / programme / company... / quote
function parse(blocks: B[]): Testimonial[] {
  const out: Testimonial[] = [];
  let img: string | undefined;
  let cur: Testimonial | undefined;
  let meta: string[] = [];
  const done = () => {
    if (cur) out.push({ ...cur, course: meta[0], company: meta.slice(1).join(' - ') || undefined });
  };
  for (const b of blocks) {
    if (b.t === 'img') img = b.src;
    else if (b.t === 'h3') {
      done();
      cur = { name: b.x!, img };
      img = undefined;
      meta = [];
    } else if (b.t === 'p' && cur) {
      if (/^[“"]/.test(b.x!)) cur.quote = b.x!.replace(/^[“"]\s*|[”"]\s*$/g, '');
      else if (!cur.quote) meta.push(b.x!);
    }
  }
  done();
  return out;
}

export const testimonials: Testimonial[] = parse((page as { blocks: B[] }).blocks).filter((t) => t.quote);

/** Home page shows the learners that have a photo, two bento pages of five. */
export const homeTestimonials: Testimonial[] = testimonials.filter((t) => t.img).slice(0, 10);
