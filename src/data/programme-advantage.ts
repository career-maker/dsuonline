/** "The DSU Online advantage" block on programme pages. Copy for cards/banner is shared by all programmes; edit here (CMS later). */
export type AdvantageCard = { icon: 'degree' | 'clock' | 'book' | 'play' | 'exam' | 'alumni' | 'globe' | 'growth'; title: string; text: string };

export const advantageCards: AdvantageCard[] = [
  { icon: 'degree', title: 'UGC-Entitled Degree', text: 'At par with regular on-campus degrees' },
  { icon: 'clock', title: 'Flexible Learning', text: '100% online learning at a flexible pace' },
  { icon: 'book', title: 'Industry-Relevant', text: 'Curriculum with in-demand electives' },
  { icon: 'play', title: 'Learn Your Way', text: 'Live online sessions and recorded content' },
  { icon: 'exam', title: 'Online Examination', text: 'Convenient online examination format' },
  { icon: 'alumni', title: 'DSU Alumni Recognition', text: 'Benefit from the reputed DSU legacy' },
  { icon: 'globe', title: 'Global Recognition', text: 'Degree value for higher education in India' },
  { icon: 'growth', title: 'Career Focus', text: 'Build confidence, leadership and business expertise' },
];

export const advantageBanner = {
  eyebrow: 'A degree designed around you',
  words: ['Learn.', 'Lead.', 'Advance.'],
  text: 'Build strategic thinking, leadership capability and business expertise through a flexible online learning experience.',
};

/** MBA wording supplied by the client; other programmes use the generic lead built in Page.tsx */
export const advantageLead: Record<string, string> = {
  'online-mba': 'A flexible 2-year curriculum that blends strategic thinking with real-world business skills for learners across industries.',
};

export const dualCopy: Record<string, string> = {
  'online-mba': 'Combine two in-demand electives, such as Finance with Business Analytics or Marketing with AI, and build expertise across two business functions in one Online MBA.',
};

/** Client-supplied fee section copy (2026-11-24). Programmes without an entry keep the copy built from their fee facts. */
const feeText = (n: string) => ({
  title: `Online ${n} Course Fee Structure`,
  desc: `The DSU Online ${n} programme fee is INR 1,30,000 for the complete 2-year degree. Learners can pay semester-wise, with INR 32,875 for the first semester and INR 32,375 for each remaining semester. Explore the detailed Online ${n} semester-wise and year-wise fee structure below.`,
});
export const feeCopy: Record<string, { title: string; desc: string }> = {
  'online-mba': feeText('MBA'),
  'online-mca': feeText('MCA'),
};
