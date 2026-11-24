/**
 * Copy for the "Interactive Elective Architect" block on programme pages (dual specialisation).
 * MBA wording is the client's; other programmes get the same sentences with their own electives filled in. CMS-ready.
 */
/** Programmes that show dual specialisation. Add a code (bba, bca, bcom, mca) to switch it on for that programme; CMS flag later. */
export const DUAL_PROGRAMMES = ['mba', 'mca', 'bba', 'bca', 'bcom'];
export const dualOn = (slug: string) => DUAL_PROGRAMMES.includes(slug.replace(/^online-/, ''));

export type ArchitectCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  stats: { value: string; label: string }[];
  buildTitle: string;
  buildHint: string;
  benefits: { icon: 'branch' | 'swap' | 'rise' | 'clock'; title: string; text: string }[];
  cta: string;
};

export function architectCopy(name: string, electives: string[], isMba: boolean): ArchitectCopy {
  const [a, b, c] = electives;
  const last2 = electives.slice(-2);
  return {
    eyebrow: `Two specialisations. One ${name}.`,
    title: `Online ${name} with Dual Specialisation – One Degree, Two Specialisations`,
    // client copy (MBA, 2026-11-24); other programmes get the same text with their own name
    lead: `Pursue the DSU Online ${name} with Dual Specialisation from Dayananda Sagar University. Choose from diverse, in-demand ${name} electives as your Major and Minor Specialisations. Gain expertise in two management domains through a single ${name} degree, broaden your career opportunities and develop versatile skills for evolving business roles.`,
    stats: [
      { value: '2', label: `Specialisations in every ${name}` },
      { value: String(electives.length), label: 'Electives to combine from' },
      { value: '1', label: `UGC-entitled Online ${name}` },
    ],
    buildTitle: 'Build your dual specialisation',
    buildHint: 'Select a specialisation to preview it.',
    benefits: [
      {
        icon: 'branch',
        title: 'Broader career options',
        text: isMba ? 'Prepare for roles that sit between two functions, such as finance and analytics or marketing and technology.' : `Prepare for roles that sit between two areas, such as ${a} and ${c ?? b}.`,
      },
      { icon: 'swap', title: 'Cross-functional thinking', text: 'Connect strategic, financial, people and technology decisions the way modern businesses do.' },
      {
        icon: 'rise',
        title: 'Future-ready skills',
        text: isMba ? 'Combine a core management function with in-demand areas like Business Analytics and Artificial Intelligence.' : `Combine a core area of your ${name} with in-demand electives like ${last2.join(' and ')}.`,
      },
      { icon: 'clock', title: 'Same flexible format', text: 'Learn 100% online through live and recorded sessions, with online examinations.' },
    ],
    cta: 'Discuss with a counsellor',
  };
}
