// Programme + specialization catalogue (source: "Programmes" tab of the pages sheet, URLs mirror dsuonline.com)
export type Specialization = { name: string; slug: string };

export type Program = {
  code: 'mba' | 'mca' | 'bba' | 'bca' | 'bcom';
  name: string; // short label, e.g. "MBA"
  fullName: string;
  /** hero/glass card + listing copy broken over two lines */
  lines: [string, string];
  href: string;
  duration: string;
  firstSemFee: string;
  specializations: Specialization[];
};

const s = (name: string, slug: string): Specialization => ({ name, slug });

export const programs: Program[] = [
  {
    code: 'mba',
    name: 'MBA',
    fullName: 'Master of Business Administration',
    lines: ['Master of', 'Business Administration'],
    href: '/online-mba',
    duration: '2 Years',
    firstSemFee: '32,875',
    specializations: [
      s('Financial Management', 'financial_management'),
      s('Human Resource Management (HRM)', 'human-resource'),
      s('Marketing Management', 'marketing-management'),
      s('IT & Systems Management', 'IT&Systems-Management'),
      s('Supply Chain Management', 'supply_chain_management'),
      s('Entrepreneurship Management', 'entrepreneurship-management'),
      s('Business Analytics', 'business_analytics'),
      s('Artificial Intelligence', 'artificial_intelligence'),
    ],
  },
  {
    code: 'mca',
    name: 'MCA',
    fullName: 'Master of Computer Applications',
    lines: ['Master of', 'Computer Applications'],
    href: '/online-mca',
    duration: '2 Years',
    firstSemFee: '32,875',
    specializations: [
      s('Cloud Computing Technologies', 'cloud-computing'),
      s('Data Science', 'data-science'),
      s('Blockchain Technologies', 'block_chain_technologies'),
      s('Quantum Computing', 'Quantum-Computing'),
      s('Artificial Intelligence', 'artificial_intelligence'),
      s('Deep Learning', 'deep-learning'),
      s('Big Data Analytics', 'big_data_analytics'),
      s('Internet of Things (IoT)', 'iot'),
      s('Natural Language Processing', 'Natural-Language-Processing'),
      s('Mobile Application Development', 'Mobile-Application'),
      s('Data Analytics & Visualization', 'data-analytics'),
      s('Industrial IoT & Automation', 'industrial_IoT'),
      s('Business Intelligence Technology', 'business-intelligence'),
      s('Business Data Analytics', 'business-data'),
      s('Quantum Machine Learning', 'quantum-ml'),
    ],
  },
  {
    code: 'bba',
    name: 'BBA',
    fullName: 'Bachelor of Business Administration',
    lines: ['Bachelor of', 'Business Administration'],
    href: '/online-bba',
    duration: '2 Years',
    firstSemFee: '32,875',
    specializations: [
      s('Digital Marketing', 'digital-marketing'),
      s('Supply Chain Management', 'supply_chain_management'),
      s('Business Analytics', 'business_analytics'),
    ],
  },
  {
    code: 'bca',
    name: 'BCA',
    fullName: 'Bachelor of Computer Applications',
    lines: ['Bachelor of', 'Computer Applications'],
    href: '/online-bca',
    duration: '2 Years',
    firstSemFee: '32,875',
    specializations: [
      s('Artificial Intelligence', 'artificial_intelligence'),
      s('Machine Learning', 'machine_learning'),
      s('Big Data Analytics', 'big_data_analytics'),
      s('Blockchain Technologies', 'block_chain_technologies'),
      s('Full Stack Development', 'full_stack_develpoment'),
      s('DevOps', 'devops'),
      s('Ethical Hacking', 'ethical_hacking'),
      s('Mobile Programming', 'mobile_programming'),
      s('Database Administration', 'database_administration'),
      s('Advanced Database (NoSQL)', 'advanced_database'),
      s('Internet of Things (IoT)', 'iot'),
      s('Game Programming', 'game_programming'),
    ],
  },
  {
    code: 'bcom',
    name: 'B.Com',
    fullName: 'Bachelor of Commerce',
    lines: ['Bachelor of', 'Commerce'],
    href: '/online-bcom',
    duration: '2 Years',
    firstSemFee: '32,875',
    specializations: [
      s('Fintech Regulations & Security', 'fintech'),
      s('Supply Chain Management', 'supply_chain_management'),
      s('Business Analytics', 'business_analytics'),
    ],
  },
];

export const specializationHref = (p: Program, sp: Specialization) => `${p.href}/${p.code}-electives/${sp.slug}`;
