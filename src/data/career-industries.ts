/** Industries on the back of each career flip card, per programme and role (client-supplied). Keys are the role titles on the page, compared ignoring case and spaces. */
const mk = (rows: string[][]): Record<string, string[]> => Object.fromEntries(rows.map(([role, inds]) => [role, inds.split(', ')]));

const bizRows = [
  ['Business Analyst', 'Consulting, Banking & Finance, IT & Tech, E-commerce, Manufacturing, Healthcare & Pharma, FinTech'],
  ['Marketing Executive', 'FMCG, E-commerce, IT & Tech, EdTech, Healthcare & Pharma'],
  ['Human Resource Executive', 'Consulting, IT & Tech, Manufacturing, Banking & Finance, Healthcare & Pharma'],
  ['Financial Analyst', 'Banking & Finance, FinTech, Consulting, IT & Tech, Manufacturing'],
  ['Sales & Business Development Manager', 'Banking & Finance, IT & Tech, FMCG, Manufacturing, Healthcare & Pharma, E-commerce'],
  ['Operations Executive', 'Manufacturing, Logistics, E-commerce, FMCG, Consulting, Healthcare & Pharma'],
  ['Digital Marketing Specialist', 'E-commerce, FMCG, IT & Tech, EdTech, FinTech, Healthcare & Pharma'],
  ['Customer Relationship Manager', 'Banking & Finance, IT & Tech, E-commerce, Telecom, Healthcare & Pharma, FinTech'],
  ['Brand Executive', 'FMCG, E-commerce, IT & Tech, Healthcare & Pharma, EdTech'],
  ['Management Trainee', 'Consulting, Banking & Finance, IT & Tech, FMCG, Manufacturing, E-commerce'],
];

export const careerIndustries: Record<string, Record<string, string[]>> = {
  mca: mk([
    ['Full Stack Developer', 'IT Services, Software Product Companies, E-commerce, EdTech & HealthTech'],
    ['Mobile App Developer', 'Software Product Companies, IT Services, FinTech, EdTech & HealthTech, Telecom, E-commerce'],
    ['DevOps Engineer', 'Cloud Computing, IT Services, Software Product Companies, Telecom, Government & Defense Tech'],
    ['Systems Analyst', 'IT Services, Software Product Companies, FinTech, EdTech & HealthTech, Government & Defense Tech'],
    ['AI / ML Engineer', 'Data Science & AI, Software Product Companies, FinTech, EdTech & HealthTech, Government & Defense Tech'],
    ['Technical Project Manager', 'IT Services, Software Product Companies, FinTech, Telecom, EdTech & HealthTech, E-commerce'],
    ['Software Engineer', 'Software Product Companies, IT Services, FinTech, EdTech & HealthTech, Telecom, E-commerce'],
    ['Data Scientist', 'Data Science & AI, FinTech, EdTech & HealthTech, E-commerce, Telecom, Government & Defense Tech'],
    ['Cloud Developer', 'Cloud Computing, IT Services, Software Product Companies, FinTech, Telecom, Government & Defense Tech'],
    ['Cybersecurity Analyst', 'Cybersecurity, FinTech, IT Services, Telecom, Government & Defense Tech, Software Product Companies'],
  ]),
  mba: mk([
    ['Brand & Product Management', 'FMCG, E-commerce, IT & Tech, Banking & Finance, EdTech'],
    ['Digital Marketing', 'E-commerce, FMCG, IT & Tech, EdTech, FinTech'],
    ['Marketing Analytics / Strategy', 'Consulting, Banking & Finance, IT & Tech, E-commerce, FMCG, FinTech'],
    ['Sales & Business Development (With Marketing Focus)', 'Banking & Finance, IT & Tech, FMCG, Manufacturing, Healthcare & Pharma, E-commerce'],
    ['Educational / Program Marketing', 'EdTech, IT & Tech, Healthcare & Pharma'],
    ['Niche / Specialized Marketing', 'Banking & Finance, FinTech, Manufacturing, Logistics, Consulting'],
    ['Social Media & Content Marketing', 'IT & Tech, FMCG, E-commerce, EdTech, Healthcare & Pharma'],
  ]),
  bba: mk(bizRows),
  bcom: mk(bizRows.map((r) => (r[0] === 'Customer Relationship Manager' ? [r[0], 'Banking & Finance, IT & Tech, E-commerce, Healthcare & Pharma, FinTech'] : r))),
  bca: mk([
    ['Technical Support Engineer', 'IT & Tech, Banking & Finance, Healthcare & Pharma, EdTech, Consulting'],
    ['IT Analyst', 'IT & Tech, Banking & Finance, Healthcare & Pharma, Consulting, Manufacturing'],
    ['Cloud Support Associate', 'IT & Tech, Banking & Finance, E-commerce, EdTech, FinTech'],
    ['QA / Test Engineer', 'IT & Tech, Banking & Finance, Healthcare & Pharma, E-commerce, EdTech'],
    ['Software Developer', 'IT & Tech, Banking & Finance, Healthcare & Pharma, EdTech, E-commerce, FinTech'],
    ['Web Developer', 'IT & Tech, E-commerce, EdTech, FMCG, Healthcare & Pharma'],
    ['Mobile App Developer', 'IT & Tech, Banking & Finance, Healthcare & Pharma, E-commerce, FinTech'],
    ['Full Stack Developer', 'IT & Tech, Banking & Finance, E-commerce, EdTech, Healthcare & Pharma, FinTech'],
    ['API / Integration Developer', 'IT & Tech, Banking & Finance, E-commerce, Logistics, Manufacturing, FinTech'],
    ['UI/UX Designer', 'IT & Tech, E-commerce, EdTech, FMCG, Healthcare & Pharma'],
    ['Product Designer (Junior)', 'IT & Tech, E-commerce, EdTech, Banking & Finance, Healthcare & Pharma'],
    ['Data Analyst', 'Consulting, Banking & Finance, IT & Tech, FMCG, E-commerce, Manufacturing, Healthcare & Pharma, FinTech'],
  ]),
};

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, '');
/** Industries for one role of a programme (`code` = mba | mca | bba | bca | bcom); undefined when the role is not listed. */
export function industriesFor(code: string, role: string): string[] | undefined {
  const m = careerIndustries[code];
  const k = m && Object.keys(m).find((x) => norm(x) === norm(role));
  return k ? m[k] : undefined;
}
