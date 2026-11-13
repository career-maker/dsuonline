/**
 * Copy for the "Interactive Elective Architect" block on programme pages (dual specialisation).
 * MBA wording is the client's; other programmes get the same sentences with their own electives filled in. CMS-ready.
 */
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
  const [a, b, c, d] = electives;
  const last2 = electives.slice(-2);
  return {
    eyebrow: `Two specialisations. One ${name}.`,
    title: `Online ${name} with Dual Specialisation`,
    lead: isMba
      ? 'Every DSU Online MBA learner graduates with a dual specialisation, pairing two management electives such as Financial Management and Business Analytics or Marketing Management and Artificial Intelligence. You graduate with expertise in two business functions, so you can work across teams, move between roles and stand out in a competitive job market.'
      : `Every DSU Online ${name} learner graduates with a dual specialisation, pairing two electives such as ${a} and ${b}${c && d ? ` or ${c} and ${d}` : ''}. You graduate with expertise in two areas, so you can work across teams, move between roles and stand out in a competitive job market.`,
    stats: [
      { value: '2', label: `Specialisations in every ${name}` },
      { value: String(electives.length), label: 'Electives to combine from' },
      { value: '1', label: `UGC-entitled Online ${name}` },
    ],
    buildTitle: 'Build your dual specialisation',
    buildHint: 'Select any two specialisations to preview your combination.',
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
    cta: 'Discuss this combination with a counsellor',
  };
}
