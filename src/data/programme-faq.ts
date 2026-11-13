/**
 * FAQ copy for programme pages. MBA wording is the client's; the other programmes get the same questions answered from their own page data
 * (duration, credits, fee, electives, admission steps, eligibility). CMS-ready: replace `faqFor` with per-programme fields later.
 */
export type FaqItem = { q: string; a: string };
export type FaqInput = {
  name: string; // MBA, MCA, BBA, BCA, B.Com
  code: string; // mba ...
  years?: number;
  semesters?: number;
  credits?: number;
  fee?: string; // "INR 1,30,000"
  electives: string[];
  steps: string[];
  eligibility?: string;
  about?: string; // first sentence of the programme description
  dual: boolean;
};

const list = (xs: string[]) => (xs.length > 1 ? `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}` : (xs[0] ?? ''));
const rupees = (f?: string) => (f ? f.replace(/^INR\s*/i, '₹').replace(/\/-$/, '').trim() : undefined);

export function faqFor(x: FaqInput): { title: string; lead: string; items: FaqItem[] } {
  if (x.code === 'mba') {
    return {
      title: 'Online MBA dual specialisation FAQs',
      lead: 'Quick answers about the dual specialisation in the DSU Online MBA.',
      items: [
        { q: 'What is an Online MBA with dual specialization?', a: 'A dual specialisation MBA means you study two management electives within one MBA programme, for example Financial Management with Business Analytics. You graduate with expertise in two business functions instead of one.' },
        { q: 'Is dual specialisation compulsory in the DSU Online MBA?', a: 'Yes. The DSU Online MBA is offered with a dual specialisation only. Every learner chooses two of the eight electives.' },
        { q: 'Which specialisations can I choose for my dual specialisation?', a: 'The Online MBA offers eight electives: Financial Management, Human Resource Management, Marketing Management, IT & Systems Management, Supply Chain Management, Entrepreneurship, Business Analytics and Artificial Intelligence. Our admission counsellors can confirm the combinations available for your batch.' },
        { q: 'Is the DSU Online MBA with dual specialisation UGC-entitled?', a: 'Yes. The Online MBA from Dayananda Sagar University is a UGC-entitled degree, at par with regular on-campus degrees.' },
        { q: 'How long is the Online MBA with dual specialisation?', a: 'The Online MBA runs for 2 years across 4 semesters, with 102 total credits.' },
        { q: 'What are the fees for the DSU Online MBA?', a: 'The total programme fee for the Online MBA with dual specialisation is ₹1,30,000, payable semester-wise.' },
        { q: 'Which dual specialisation is best for my career?', a: 'It depends on your goals. Pairing a core function with a technology area, such as Marketing with Business Analytics or Finance with Artificial Intelligence, suits data-driven roles. Pairing two core functions, such as Marketing with HR, suits general management roles. A counsellor can help you decide.' },
        { q: 'Who is eligible for the Online MBA?', a: "Candidates with a recognised Bachelor's degree of minimum three years, with at least 50% aggregate marks (45% for SC / ST / OBC candidates as per government norms), are eligible to apply." },
      ],
    };
  }

  const n = x.name;
  const items: FaqItem[] = [];
  if (x.about) items.push({ q: `What is the Online ${n} at DSU Online?`, a: x.about });
  items.push({ q: `Is the DSU Online ${n} UGC-entitled?`, a: `Yes. The Online ${n} from Dayananda Sagar University is a UGC-entitled degree, at par with regular on-campus degrees.` });
  if (x.years && x.semesters) items.push({ q: `How long is the Online ${n}?`, a: `The Online ${n} runs for ${x.years} years across ${x.semesters} semesters${x.credits ? `, with ${x.credits} total credits` : ''}.` });
  if (x.fee) items.push({ q: `What are the fees for the DSU Online ${n}?`, a: `The total programme fee for the Online ${n} is ${rupees(x.fee)}, payable semester-wise.` });
  if (x.electives.length) items.push({ q: `Which specialisations can I choose in the Online ${n}?`, a: `The Online ${n} offers ${x.electives.length} electives: ${list(x.electives)}. Our admission counsellors can confirm the options available for your batch.` });
  items.push({ q: `Is the Online ${n} fully online?`, a: 'Yes. You learn 100% online through live and recorded sessions, so you can study at your own pace from anywhere.' });
  if (x.steps.length) items.push({ q: `How do I apply for the Online ${n}?`, a: `Admission takes ${x.steps.length} steps: ${list(x.steps.map((s) => s.toLowerCase()))}. The full process is described in the admission section above.` });
  if (x.eligibility) items.push({ q: `Who is eligible for the Online ${n}?`, a: x.eligibility });
  return { title: `Online ${n} FAQs`, lead: `Quick answers about the DSU Online ${n}.`, items };
}
