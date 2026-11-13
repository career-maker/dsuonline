/**
 * Programme pages: mini title (eyebrow) + main title per section. Edit here (CMS: two optional fields per section).
 * `match` is tested against the section's live-site heading.
 * - eyebrow: mini title shown above the heading ('' / omitted = none)
 * - title:   main title override; `null` hides the main title; omitted keeps the live heading
 */
export type SectionHead = { match: RegExp; eyebrow?: string; title?: string | null };

export const sectionHeads: SectionHead[] = [
  { match: /learning system/i, eyebrow: 'Learning Experience' },
  { match: /elective/i, eyebrow: 'Customise your learning' },
  { match: /real stories/i, eyebrow: 'Testimonials' },
  { match: /fee/i, eyebrow: 'Fee Structure' },
  { match: /career/i, eyebrow: 'Careers' },
  { match: /curriculum/i, eyebrow: 'Curriculum' },
  { match: /faculty/i, eyebrow: 'Faculty' },
  { match: /admission|how to apply/i, eyebrow: 'Admission Process', title: 'A Step-by-Step Guide' },
  { match: /added value|certificate/i, eyebrow: 'Certification' },
  { match: /eligib/i, eyebrow: 'Eligibility' },
];

export function headFor(liveTitle: string): { eyebrow?: string; title?: string } {
  const h = sectionHeads.find((x) => x.match.test(liveTitle));
  return { eyebrow: h?.eyebrow || undefined, title: h?.title === null ? undefined : (h?.title ?? liveTitle) };
}
