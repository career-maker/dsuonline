// Homepage copy. Text follows design/Index.pdf (v3); FAQ answers and programme facts follow dsuonline.com.
// Shapes are provisional and map 1:1 to future Strapi components.

// Each slide carries its own desktop/tablet and phone artwork (CMS: one image field per breakpoint).
export const heroSlides = [
  { desktop: '/images/hero/slide-1.webp', mobile: '/images/hero/mobile-1.webp' },
  { desktop: '/images/hero/slide-2.webp', mobile: '/images/hero/mobile-2.webp' },
] as const;

export const tickerItems: { text: string; link?: string }[] = [
  { text: 'Net Zero Conclave On 29/12/2025' },
  { text: 'Academic Calendar For 2025-26 Even Semester (SOE)' },
  { text: 'Academic Calendar For 2025-26', link: 'CLICK HERE' },
  { text: 'DSU AI Conclave On 29/12/2025' },
  { text: 'AI Summit 2026 March 25 2026 2PM' },
];

export const learnerVideos = [
  { key: 'rakshit', name: 'Mr. Rakshit R', course: 'MCA', company: 'Capgemini -  Manager' },
  { key: 'chinmaya', name: 'Ms. Chinmaya R', course: 'MBA', company: 'Wipro - Marketing Manager' },
  { key: 'akhil', name: 'Mr. Akhil S', course: 'BCA', company: 'CTS - Operations Manager' },
  { key: 'john', name: 'Mr. John Joe', course: 'MCA', company: 'TCS - Senior Project Lead' },
  { key: 'arun', name: 'Mr. Arun Kumar', course: 'MBA', company: 'Capgemini - Senior Project Lead' },
] as const;

export const aboutStats = [
  { value: '70', label: 'Years Educational Legacy' },
  { value: '100', label: 'Industry Programs' },
  { value: '700', label: 'Placement Partners' },
  { value: '35', unit: 'LPA', label: 'Highest Package' },
] as const;

export const aboutCopy = [
  'A true visionary, late Sri Dayananda Sagar, founded Dayananda Sagar Institutions in the 60s. Dayananda Sagar University (DSU) was created by an Act of the Karnataka State in 2014, rooted in its glorious legacy and inspired by its milestones.',
  'Our aim of meeting the needs of quality higher education continues with DSU Online, one of the best online universities offering the best online degree programs and industry-relevant online university degrees in India.',
];

export const aboutFeatures = [
  { icon: 'about-ugc', label: ['UGC Entitled', 'Programs'] },
  { icon: 'about-industry', label: ['Industry-Aligned', 'Curriculum'] },
  { icon: 'about-alumni', label: ['Global Alumni', 'Network'] },
  { icon: 'about-flexible', label: ['Flexible Learning', 'Model'] },
] as const;

/** Programme cards on the homepage: design order + the specializations it surfaces as chips */
export const homePrograms = [
  { code: 'mca', top: ['Cloud Computing Technologies', 'Artificial Intelligence', 'Data Science', 'Business Data Analytics'] },
  { code: 'mba', top: ['Financial Management', 'Human Resource Management (HRM)', 'Marketing Management', 'IT & Systems Management'] },
  { code: 'bba', top: ['Digital Marketing', 'Supply Chain Management', 'Business Analytics'] },
  { code: 'bca', top: ['Artificial Intelligence', 'Machine Learning', 'Ethical Hacking', 'Full Stack Development', 'Big Data Analytics'] },
  { code: 'bcom', top: ['Fintech Regulations & Security', 'Business Analytics', 'Supply Chain Management'] },
] as const;

export type Rect = readonly [x: number, y: number, w: number, h: number];

export type BentoTile = {
  key: string;
  label: string;
  icon: string;
  /** clip frame, design px */
  frame: Rect;
  /** where the design draws the full photo, design px */
  box: Rect;
  src: string;
};

export const bentoTiles: BentoTile[] = [
  { key: 'dedicated', label: 'Dedicated Learning Experience', icon: 'tile-dedicated', src: '/images/learn/dedicated.webp', frame: [95, 4276, 562, 621], box: [-308.8, 4162, 1484.4, 835] },
  { key: 'assignments', label: 'Assignments', icon: 'tile-assign', src: '/images/learn/assignments.webp', frame: [680, 4276, 267, 298], box: [626.8, 4276, 447.1, 298] },
  { key: 'projects', label: 'Projects', icon: 'tile-projects', src: '/images/learn/projects.webp', frame: [973, 4276, 267, 298], box: [873.9, 4269.9, 466.2, 311] },
  { key: 'learn-your-way', label: 'Learn Your Way', icon: 'tile-learn', src: '/images/learn/learn-your-way.webp', frame: [1266, 4276, 267, 298], box: [1177.1, 4276, 447, 298] },
  { key: 'live-classes', label: 'Live Classes', icon: 'tile-live', src: '/images/learn/live-classes.webp', frame: [1559, 4276, 267, 298], box: [1468.1, 4276, 447, 298] },
  { key: 'discussion-forums', label: 'Discussion Forums', icon: 'tile-forums', src: '/images/learn/discussion-forums.webp', frame: [680, 4599, 267, 298], box: [627.3, 4598.5, 372.6, 298] },
  { key: 'online-exams', label: 'Online Exams', icon: 'tile-exams', src: '/images/learn/online-exams.webp', frame: [973, 4599, 267, 298], box: [974.2, 4598.5, 337.1, 297.9] },
  { key: 'mobile-learning', label: 'Mobile Learning', icon: 'tile-mobile', src: '/images/learn/mobile-learning.webp', frame: [1266, 4599, 267, 298], box: [1170, 4566.6, 518.4, 336.4] },
  { key: 'recorded-lectures', label: 'Recorded Lectures', icon: 'tile-recorded', src: '/images/learn/recorded-lectures.webp', frame: [1559, 4599, 267, 298], box: [1467.2, 4598.2, 447.1, 298] },
];

export const whyItems = [
  { icon: 'why-flexible', label: ['Flexible Learning', 'Options'] },
  { icon: 'why-faculty', label: ['Top-notch Faculty &', 'Experienced Leadership'] },
  { icon: 'why-placement', label: ['A Dedicated', 'Placement Cell'] },
  { icon: 'why-digital', label: ['Cutting-Edge', 'Digital Resources'] },
] as const;

export const certifications = [
  { kind: 'ugc', label: ['UGC Entitled'] },
  { kind: 'naac', label: ['NAAC A+ University'] },
  { kind: 'cert-degree', label: ['Equivalent to', 'On-Campus Degree'] },
  { kind: 'cert-curriculum', label: ['Industry-Oriented', 'Curriculum'] },
  { kind: 'cert-online', label: ['100% Online', 'Learning'] },
  { kind: 'cert-recognized', label: ['Recognized for Higher', 'Education &  Employment'] },
] as const;

export const careerTabs = [
  {
    key: 'skills',
    icon: 'career-1',
    title: ['Skill Enhancement', 'Workshops'],
    intro: [
      'Boost your employability through skill enhancement workshops offered as part of the Dayananda Sagar University online learning ecosystem.',
      'Designed for learners enrolled in online degree courses in India, these sessions focus on resume building, interview skills, and personal branding to help you stand out in todays competitive job market.',
    ],
    points: ['Expert-Led Workshops', 'Industry-Relevant Curriculum', 'Practical Learning Approach', 'Personalized Guidance'],
  },
  {
    key: 'networking',
    icon: 'career-2',
    title: ['Industry Networking', 'Opportunities'],
    intro: [
      'Connect with industry leaders, alumni, and recruiters through exclusive networking events, webinars, and mentorship programs available to students pursuing a DSU online degree, including those enrolled in an online degree program in Bangalore.',
    ],
    points: [],
  },
  {
    key: 'placement',
    icon: 'career-3',
    title: ['Job Placement', 'Assistance'],
    intro: [
      'Receive dedicated job placement assistance tailored for learners pursuing an online degree program in Bangalore, with support in job applications, interview preparation, and access to trusted placement partners through Dayananda Sagar University online.',
    ],
    points: [],
  },
  {
    key: 'progression',
    icon: 'career-4',
    title: ['Career', 'progression'],
    intro: [
      'Plan your long-term career growth with personalized guidance, upskilling roadmaps, and leadership training designed for students enrolled in online degree courses India, helping you advance confidently in your chosen profession.',
    ],
    points: [],
  },
  {
    key: 'leadership',
    icon: 'career-5',
    title: ['Leadership', 'Programs'],
    intro: [
      'Develop strong leadership capabilities through experiential learning, team projects, and executive coaching sessions offered as part of the best online degree programs at DSU, empowering learners enrolled in DSU online degree programs to take on leadership roles across industries.',
    ],
    points: [],
  },
] as const;

export const recruiters = [
  { name: 'EY', src: 'ey', w: 59, h: 60 },
  { name: 'ANZ', src: 'anz', w: 113, h: 36 },
  { name: 'Capgemini', src: 'capgemini', w: 130, h: 29 },
  { name: 'CSB Bank', src: 'csb', w: 130, h: 19 },
  { name: 'CUB', src: 'cub', w: 52, h: 48 },
  { name: 'Deloitte', src: 'deloitte', w: 130, h: 24 },
  { name: 'DXC Technology', src: 'dxc', w: 88, h: 48 },
  { name: 'Aditya Birla Capital', src: 'aditya-birla', w: 111, h: 42 },
] as const;

export type Faculty = {
  key: string;
  name: string;
  role: string;
  points: [string, string];
  /** where the design draws the full photo, design px (card photo frame is x, 6962, 330, 243) */
  box: Rect;
};

export const faculty: Faculty[] = [
  { key: 'prashant', name: 'Dr Prashant Raman', role: 'Professor of Finance', points: ['20+ years of Academic Experience', 'Ph.D in Finance'], box: [95, 6962.1, 329.9, 257.5] },
  { key: 'raghavendra', name: 'Dr. Raghavendra S', role: 'Associate Professor, Management Studies', points: ['20+ years of Academic Experience', 'Ph.D in Management'], box: [445, 6898.8, 330, 494.3] },
  { key: 'sneha', name: 'Dr. Sneha Joshi', role: 'Senior Lecturer, Marketing', points: ['15+ years of Industry Experience', 'Ph.D in Marketing'], box: [795, 6941.1, 330, 438.2] },
  { key: 'aakash', name: 'Dr. Aakash Verma', role: 'Assistant Professor, Information Systems', points: ['10+ years of Academic Experience', 'Ph.D in Information Technology'], box: [1096.3, 6962.5, 538, 358.6] },
  { key: 'meera', name: 'Dr. Meera Singh', role: 'Lecturer, Human Resources', points: ['8+ years in Academia and Consulting', 'Ph.D in Organizational Behavior'], box: [1278.7, 6961.8, 664.4, 443.2] },
];

export const articles = [
  {
    key: 'ai',
    date: '12 sep 2025',
    title: ['The Role of Generative A1 in', 'Higher Education'],
    excerpt: ['Exploring how generative A1 can transform teaching, learning', 'and research in universities.'],
    frame: [96, 7830, 563, 224],
    box: [96, 7784.9, 563, 314.2],
    author: { name: 'Dr. Raghavendra S', role: 'Associate Professor, Management Studies', avatar: 'raghavendra' },
  },
  {
    key: 'data',
    date: '15 sep 2025',
    title: ['Gaining Deeper Insights into Business', 'Operations Through Data Analysis'],
    excerpt: ['A closer look at how data and analytics help students', 'understand business trends, make informed ...'],
    frame: [679, 7830, 563, 224],
    box: [679, 7754.4, 563, 375.2],
    author: { name: 'Dr. Meera Singh', role: 'Lecturer, Human Resources', avatar: 'meera' },
  },
  {
    key: 'global',
    date: '20 sep 2025',
    title: ['Building Careers in a Global', 'Economy'],
    excerpt: ['Exploring how global markets, international opportunities, and', 'cross-cultural'],
    frame: [1262, 7830, 563, 224],
    box: [1262, 7784.2, 563, 315.7],
    author: { name: 'Dr. Aakash Verma', role: 'Assistant Professor, Information Systems', avatar: 'aakash' },
  },
] as const;

export const blogs = [
  {
    slug: 'everything-you-need-to-know-about-online-mba-subjects-structure-how-it-could-change-your-career',
    date: { day: '28', ord: 'th', month: 'Apr 2026' },
    title: ['Everything You Need to Know About', 'Online MBA: Subjects, Structure & How', 'It Could Change Your Career'],
    excerpt: ['If the MBA idea keeps coming back to you at work, in', 'conversations, or just quietly in then...'],
    image: '/images/blog/blog-1.webp',
    frame: [94, 10034, 560, 673],
    box: [-175.5, 10035, 1100.4, 672],
  },
  {
    slug: 'top-job-oriented-professional-online-degree-courses-after-class-12th-puc-2-or-graduation',
    date: { day: '28', ord: 'th', month: 'Apr 2026' },
    title: ['Top Job-Oriented Professional Online', 'Degree Courses After Class 12th /', 'PUC +2 or Graduation'],
    excerpt: ["You've finished school or college. Now comes the real", "question: what's next? W..."],
    image: '/images/blog/blog-2.webp',
    frame: [680, 10034, 560, 673],
    box: [677.1, 10035.1, 567.3, 671.7],
  },
  {
    slug: 'accelerate-your-career-growth-with-premium-online-learning-at-dsu-online',
    date: { day: '28', ord: 'th', month: 'Apr 2026' },
    title: ['Accelerate Your Career Growth with', 'Premium Online Learning at', 'DSU Online'],
    excerpt: ['You may think you’ve peaked at your job or in your career', 'when you become aware of how your current ...'],
    image: '/images/blog/blog-3.webp',
    frame: [1266, 10034, 560, 673],
    box: [1267, 9951.4, 559.4, 839.1],
  },
] as const;

export const faqs = [
  {
    q: 'Is DSU Online approved by the UGC?',
    a: 'Yes. All online degree programs offered by DSU Online are UGC‑Entitled, ensuring they are recognized and equivalent to regular on‑campus degrees.',
  },
  { q: 'Can I apply for multiple programs at DSU Online?', a: 'A student can pursue two academic programmes, in Online mode simultaneously.' },
  {
    q: 'Is the online BBA IB.Com I BCA I MBA I MCA degree equal to a regular degree?',
    a: 'Yes. DSU’s online degree courses are equivalent to traditional on‑campus degrees, as per UGC guidelines, and are recognized across industries and for higher studies.',
  },
  {
    q: 'Are the online degrees from DSU Online recognized and valid?',
    a: 'Yes, all degrees offered through DSU Online are recognized by the University Grants Commission (UGC), and the university is NAAC A+ accredited. These degrees are fully valid and hold the same academic weight as traditional on‑campus degrees.',
  },
  {
    q: 'Is DSU a government-recognized university?',
    a: 'Yes. DSU Online (Dayananda Sagar University) is a private university established by the Karnataka State Act, and is officially recognized by the UGC. It operates under full regulatory compliance.',
  },
];

export const awards = [
  { name: 'IIRF 2024 - National Rank 9', src: 'iirf', w: 289, h: 81.6 },
  { name: 'Careers360 AAA Ranking 2021', src: 'careers360', w: 212.8, h: 97 },
  { name: 'NAAC A+ Grade accredited', src: 'naac', w: 286.9, h: 96.4 },
  { name: 'Educational Excellence Awards & Conference 2021', src: 'edu-excellence', w: 299.2, h: 96.2 },
  { name: 'ICARE Ratings KSURF Teaching Excellence', src: 'ksurf', w: 300.5, h: 75.3 },
  { name: 'SiliconIndia B School Survey 2021 - A+++ category', src: 'siliconindia', w: 295, h: 96.2 },
  { name: 'Emerging Engineering Institute - Placement 2022', src: 'emerging', w: 300.5, h: 90.1 },
] as const;
