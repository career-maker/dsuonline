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

/** Lead under the advantage title, all client-supplied (MCA/BBA/BCA/B.Com 2026-11-24). Missing entries fall back to the generic lead in Page.tsx. */
export const advantageLead: Record<string, string> = {
  'online-mba': 'A flexible 2-year curriculum that blends strategic thinking with real-world business skills for learners across industries.',
  'online-mca': 'Build a future-ready career in technology with a flexible 2-year Online MCA degree designed for graduates and working professionals. Explore emerging technologies, strengthen your programming, analytical and problem-solving skills, and develop expertise for evolving IT roles. An Online Master of Computer Applications offers the flexibility to pursue higher education while balancing professional and personal commitments.',
  'online-bba': 'Build a strong foundation in business and management with a flexible 3-year Online BBA degree designed for aspiring professionals and future entrepreneurs. Explore in-demand electives, develop essential leadership and decision-making skills, and prepare for diverse career opportunities while balancing your education with personal and professional commitments.',
  'online-bca': 'Build a future-ready IT career with a flexible 3-year Online BCA degree. Explore in-demand technology electives, develop programming and software development skills, and prepare for diverse career opportunities while learning at your convenience.',
  'online-bcom': 'Build a strong foundation in commerce, finance and business with a flexible 3-year Online B.Com degree. Explore in-demand electives, develop essential accounting, financial and analytical skills, and prepare for diverse career opportunities while balancing your education with personal and professional commitments.',
};

/** Client title for the advantage block; MBA keeps the default "Why choose the Online MBA?". */
export const advantageTitle: Record<string, string> = {
  'online-mca': 'Why Choose an Online MCA?',
  'online-bba': 'Why Choose an Online BBA?',
  'online-bca': 'Why Choose an Online BCA?',
  'online-bcom': 'Why Choose an Online B.Com?',
};

export const dualCopy: Record<string, string> = {
  'online-mba': 'Combine two in-demand electives, such as Finance with Business Analytics or Marketing with AI, and build expertise across two business functions in one Online MBA.',
};

/** Client-supplied fee section copy (2026-11-24). Programmes without an entry keep the copy built from their fee facts. */
const feeText = (n: string) => ({
  title: `Online ${n} Course Fee Structure`,
  desc: `The DSU Online ${n} programme fee is INR 1,30,000 for the complete 2-year degree. Learners can pay semester-wise, with INR 32,875 for the first semester and INR 32,375 for each remaining semester. Explore the detailed Online ${n} semester-wise and year-wise fee structure below.`,
});
const ugFeeText = (n: string) => ({
  title: `Online ${n} Course Fee Structure`,
  desc: `The DSU Online ${n} programme fee is INR 1,30,000 for the complete 3-year degree. Dayananda Sagar University offers a convenient semester-wise fee payment structure, making it easier for learners to plan their education expenses. Explore the detailed Online ${n} semester-wise and year-wise fee structure below.`,
});
export const feeCopy: Record<string, { title: string; desc: string }> = {
  'online-mba': feeText('MBA'),
  'online-mca': feeText('MCA'),
  'online-bba': ugFeeText('BBA'),
  'online-bca': ugFeeText('BCA'),
  'online-bcom': ugFeeText('B.Com'),
};
