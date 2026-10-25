// Global site data: contact details, nav, footer columns. Mirrors dsuonline.com.
export const site = {
  name: 'Dayananda Sagar University Online',
  phone: '+919880147004',
  phoneLabel: '+91 9880147004',
  helpdeskPhone: '+91 98801 48004',
  helpdeskEmail: 'helpdesk@dsuonline.com',
  admissionsPhone: '+91 98801 48004',
  admissionsEmail: 'admissions@dsuonline.com',
  address: 'Kudlu Gate, Hosur Road, Bengaluru - 560 114',
  learnerLogin: 'https://student.dsuonline.com/login',
  apply: 'https://apply.dsuonline.com/',
  designer: { name: 'Inter Smart', href: 'https://intersmart.in' },
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/dsuonline', icon: 'facebook' },
    { name: 'X', href: 'https://x.com/dsuonline', icon: 'x' },
    { name: 'Instagram', href: 'https://www.instagram.com/dsuonline', icon: 'instagram' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/dsuonline', icon: 'linkedin' },
    { name: 'YouTube', href: 'https://www.youtube.com/@dsuonline', icon: 'youtube' },
  ],
} as const;

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Admission', href: '/admission' },
  { label: 'Refer', href: '/refer' },
  { label: 'Contact', href: '/contact-us' },
];

/** Remaining pages from the requirements sheet's main menu, shown under "More" in the header. */
export const moreNav: NavLink[] = [
  { label: 'Academics', href: '/academics-at-dsu' },
  { label: 'Why DSU Online', href: '/why-dsu-online' },
  { label: 'Student Testimonials', href: '/student-testimonials' },
  { label: 'Placements', href: '/placements' },
  { label: 'Student Support', href: '/student-support' },
  { label: 'Mandatory Disclosures', href: '/mandatory-disclosures' },
  { label: 'Blog', href: '/resources/blogs' },
  { label: 'Facts', href: '/#about' },
  { label: 'FAQ', href: '/#dsu-faq' },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About DSU Online', href: '/about' },
      { label: 'Academics', href: '/academics-at-dsu' },
      { label: 'Admissions', href: '/admission' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Latest News & Events', href: '/resources/blogs' },
      { label: 'Student Testimonials', href: '/student-testimonials' },
      { label: 'Why DSU Online', href: '/why-dsu-online' },
      { label: 'Mandatory Disclosure', href: '/mandatory-disclosures' },
    ],
  },
  {
    title: 'Student Support',
    links: [
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Blogs', href: '/resources/blogs' },
      { label: 'FAQs', href: '/#dsu-faq' },
      { label: 'Placements', href: '/placements' },
      { label: 'Student Support', href: '/student-support' },
    ],
  },
];

export const announcements = [
  'Admission Open for 2026 - Apply Now',
  'Scholarship Opportunities Available for Eligible Students',
  'Academic Calendar 2026-27 Published',
  'Placement Assistance Program Registrations Open',
];
