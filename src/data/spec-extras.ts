// Extra specialisation-page content supplied by the client (one PDF per elective). Add an entry per elective as the client sends the rest;
// pages without an entry simply show the content already on the page. Key = `<programme code>/<elective slug>`.
export type SpecExtra = {
  /** corrected About heading + intro paragraph (replaces the scraped live-site copy) */
  aboutTitle?: string;
  about?: string;
  credits?: number;
  /** one-line summary of the core course, shown under the About copy */
  coreLine?: string;
  highlights?: string[];
  core?: {
    title: string;
    text: string;
    glance: { title: string; text: string }[];
    topics: string[];
    objectives: { verb: string; text: string }[];
    outcomes: { verb: string; text: string }[];
  };
};

export const SPEC_EXTRAS: Record<string, SpecExtra> = {
  'mba/financial_management': {
    aboutTitle: 'About Financial Management',
    about:
      'The Financial Management elective develops advanced expertise in financial markets, investment strategies, corporate restructuring and global finance. Learners build the analytical skills needed to make data-driven financial decisions.',
    credits: 4,
    coreLine: 'Introduction to Financial Management: from the Indian financial system to capital budgeting, capital structure and working capital',
    highlights: ['Financial markets', 'Investment strategies', 'Corporate restructuring', 'Global finance'],
    core: {
      title: 'Introduction to Financial Management',
      text: 'This course covers the Indian financial system, functions of financial management, time value of money, capital budgeting, financing decisions, capital structure, and dividend policies. Topics include cost of capital, risk analysis, working capital management, and sources of financing, equipping learners with tools for effective financial decision-making.',
      glance: [
        { title: 'Foundations', text: 'Indian financial system and the functions of financial management.' },
        { title: 'Valuation & investment', text: 'Time value of money and capital budgeting techniques.' },
        { title: 'Cost & structure', text: 'Cost of capital and optimal capital structure decisions.' },
        { title: 'Financing & payouts', text: 'Sources of financing, dividend policies and leverage effects.' },
        { title: 'Working capital & risk', text: 'Working capital needs, risk analysis and investment strategies.' },
      ],
      topics: ['Indian financial system', 'Functions of financial management', 'Time value of money', 'Capital budgeting', 'Cost of capital', 'Capital structure', 'Financing decisions', 'Sources of financing', 'Dividend policies', 'Working capital management', 'Risk analysis'],
      objectives: [
        { verb: 'Define', text: 'key concepts of financial systems and management functions.' },
        { verb: 'Explain', text: 'time value of money and capital budgeting processes.' },
        { verb: 'Illustrate', text: 'calculations for cost of capital and optimal capital structure.' },
        { verb: 'Indicate', text: 'financing sources, dividend policies, and leverage effects.' },
        { verb: 'Summarize', text: 'the need for working capital and strategies in investment decisions.' },
      ],
      outcomes: [
        { verb: 'Identify', text: 'fundamental concepts of financial systems and financial management functions.' },
        { verb: 'Describe', text: 'time value of money and capital budgeting techniques.' },
        { verb: 'Calculate', text: 'cost of capital and analyse capital structure decisions.' },
        { verb: 'Evaluate', text: 'financing options, dividend policies, and leverage impacts.' },
        { verb: 'Assess', text: 'working capital needs and devise investment strategies.' },
      ],
    },
  },
};
