// International Learners page content. Copy is the client's own (dsu-online-international.html); nothing here is invented.

export const heroBadges = ['UGC-Entitled', 'NAAC A+ University', 'Legacy since the 1960s'];

export const strip = [
  'UGC-Entitled Degree',
  '100% Online Learning',
  'Flexible Learning Options',
  'Industry-Relevant Curriculum',
  'At Par with On-Campus Degrees',
  'In-Demand Electives',
  'Online Examinations',
  'Live Online Sessions',
  'Recorded Content',
  'DSU Alumni Recognition',
];

export type Usp = { icon: string; title: string; text: string; feature?: { img: string; alt: string; tag: string } };

export const usps: Usp[] = [
  {
    icon: 'cap',
    title: 'UGC-Entitled Degree',
    text: "Your online degree is entitled by the University Grants Commission (UGC), India's statutory higher-education regulator — a credential you can present with confidence to employers and institutions.",
    feature: { img: 'usp-degree', alt: 'Graduates celebrating their degree', tag: 'Officially recognised' },
  },
  { icon: 'globe', title: '100% Online Learning', text: 'Admissions, classes, assessments and exams — all online. No visa, no relocation, no campus visits.' },
  { icon: 'clock', title: 'Flexible Learning', text: 'Study at your own pace and around your job, family and time zone.' },
  { icon: 'case', title: 'Industry-Relevant Curriculum', text: 'Course content shaped around current industry needs, with practical, applied learning.' },
  { icon: 'equal', title: 'At Par with On-Campus', text: "Same academic standards and the same value as DSU's regular on-campus degrees." },
  { icon: 'layers', title: 'In-Demand Electives', text: 'Specialise in AI, Data Science, Business Analytics, Fintech, Cloud, Digital Marketing and more.' },
  { icon: 'screen', title: 'Online Examinations', text: 'Take exams from home — no travel to an exam centre. Assessed 30% continuous, 70% semester-end.' },
  { icon: 'video', title: 'Live Online Sessions', text: 'Interactive weekend lectures with faculty and classmates from around the world.' },
  { icon: 'play', title: 'Recorded Content', text: 'Faculty-led video lectures and e-content available 24/7 on the LMS — any time zone.' },
  {
    icon: 'award',
    title: 'Reputed DSU Alumni Recognition',
    text: 'Graduate into the alumni community of Dayananda Sagar Institutions — founded by the late Sri Dayananda Sagar in the 1960s — with hiring partners including Deloitte, EY, Capgemini and ANZ.',
    feature: { img: 'usp-alumni', alt: 'Alumni network collaborating', tag: 'Lifelong network' },
  },
];

export const zones = [
  { city: 'New York', tz: 'America/New_York', note: 'Evening study after work' },
  { city: 'London', tz: 'Europe/London', note: 'Weekend live sessions' },
  { city: 'Dubai', tz: 'Asia/Dubai', note: 'Close to India time' },
  { city: 'Singapore', tz: 'Asia/Singapore', note: 'Recorded lectures on demand' },
];

export const modes = [
  { icon: 'video', title: 'Weekend Live Sessions', text: 'Interactive lectures with course coordinators, plus dedicated mentors.' },
  { icon: 'layers', title: 'Four-Quadrant LMS', text: 'e-Tutorials, e-Content, discussion forums and self-assessments.' },
  { icon: 'screen', title: 'Online Exams', text: 'Continuous assessment and semester-end exams — all from home.' },
];

/** The five continents shown on the page (names only; same order as the hero map). */
export const continents = [
  { n: 'Asia', e: '🌏', img: 'asia' },
  { n: 'Africa', e: '🌍', img: 'africa' },
  { n: 'Europe', e: '🌍', img: 'europe' },
  { n: 'North America', e: '🌎', img: 'north-america' },
  { n: 'South America', e: '🌎', img: 'south-america' },
];

export const parChecks = [
  'Same university, same academic standards',
  'Equivalent to regular degrees as per UGC guidelines — valid for employment and higher studies',
  'University established by an Act of the Karnataka State in 2014, NAAC A+ accredited',
];

/** [row label, on-campus also has it] - DSU Online always has it. */
export const compare: [string, boolean][] = [
  ['UGC-recognised degree', true],
  ['DSU academic standards', true],
  ['NAAC A+ university', true],
  ['DSU alumni status', true],
  ['Study from your country', false],
  ['Keep working full-time', false],
  ['Rewatch every lecture', false],
  ['Lower fees than on-campus', false],
];

export const intlPrograms = [
  {
    code: 'mba',
    href: '/online-mba',
    level: 'Postgraduate · 2 Years',
    title: 'Online MBA',
    text: 'Master of Business Administration — strategic leadership and global business.',
    alt: 'Online MBA business strategy session',
    chips: ['Financial Mgmt', 'Marketing', 'HRM', 'IT & Systems', 'Supply Chain', 'Entrepreneurship', 'Business Analytics', 'Artificial Intelligence'],
    cta: 'Explore MBA',
  },
  {
    code: 'mca',
    href: '/online-mca',
    level: 'Postgraduate · 2 Years',
    title: 'Online MCA',
    text: 'Master of Computer Applications — AI, cyber security and cloud engineering.',
    alt: 'Online MCA programming on a laptop',
    chips: ['Artificial Intelligence', 'Data Science', 'Cloud Computing', 'Quantum Computing', 'Blockchain', 'Deep Learning', '+ 9 more'],
    cta: 'Explore MCA',
  },
  {
    code: 'bba',
    href: '/online-bba',
    level: 'Undergraduate · 3 Years',
    title: 'Online BBA',
    text: 'Bachelor of Business Administration — the foundation for a global business career.',
    alt: 'Online BBA team working in an office',
    chips: ['Digital Marketing', 'Supply Chain Management', 'Business Analytics'],
    cta: 'Explore BBA',
  },
  {
    code: 'bca',
    href: '/online-bca',
    level: 'Undergraduate · 3 Years',
    title: 'Online BCA',
    text: 'Bachelor of Computer Applications — build apps with AI, cloud and full-stack tech.',
    alt: 'Online BCA code on screen',
    chips: ['AI', 'Machine Learning', 'Full Stack', 'DevOps', 'Ethical Hacking', 'Game Programming', '+ 6 more'],
    cta: 'Explore BCA',
  },
  {
    code: 'bcom',
    href: '/online-bcom',
    level: 'Undergraduate · 3 Years',
    title: 'Online B.Com',
    text: 'Bachelor of Commerce — accounting, finance, taxation and analytics.',
    alt: 'Online B.Com accounting and finance',
    chips: ['Fintech Regulations & Security', 'Supply Chain Management', 'Business Analytics'],
    cta: 'Explore B.Com',
  },
];

export const steps = [
  { title: 'Register', text: 'Create your account on the', link: 'DSU Online admissions portal' },
  { title: 'Apply', text: 'Fill in the application form and choose your program and elective.' },
  { title: 'Upload documents', text: 'Submit academic records and ID online for verification.' },
  { title: 'Start learning', text: 'Pay the fee, receive confirmation and get your LMS access.' },
];

export const formCountries = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Oman',
  'Kuwait',
  'Bahrain',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Singapore',
  'Nepal',
  'Sri Lanka',
  'Bangladesh',
  'Kenya',
  'Nigeria',
  'Other',
];
