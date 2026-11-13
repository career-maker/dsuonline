import { ArrowLink } from '@/components/ui/ArrowLink';
import { site } from '@/data/site';
import s from './ProgramEligibility.module.scss';

/** the live page prints the criteria as one paragraph: split it into its sentences (not at "B.Tech." style abbreviations) */
export function criteria(text: string): string[] {
  return text
    .replace(/\s+([,.;])/g, '$1') // the live copy has stray spaces before punctuation ("45% , as")
    .split(/(?<=[a-z0-9)%])\.\s*(?=[A-Z])/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x) => (/[.)]$/.test(x) ? x : `${x}.`));
}

const CAP = 'M2 9l10-5 10 5-10 5L2 9zm4 3.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6';
const PERCENT = 'M19 5L5 19M7.5 9a1.8 1.8 0 100-.01M16.5 18a1.8 1.8 0 100-.01';
const INFO = 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 8v5m0-8.5v.01';
const iconOf = (t: string) => (/%|marks|aggregate|relaxation/i.test(t) ? PERCENT : /^note|bridge|mandatory/i.test(t) ? INFO : CAP);

/** "Eligibility overview": a call-to-action card on the left, the criteria from the page on the right. */
export function ProgramEligibility({ name, text }: { name: string; text: string }) {
  const points = criteria(text);
  return (
    <div className={s.wrap}>
      <header className={s.head}>
        <p className={s.eyebrow}>Before you apply</p>
        <h2>Eligibility overview</h2>
      </header>
      <div className={s.grid}>
        <div className={s.cta}>
          <h3>Ready to take the next step?</h3>
          <p>Check the eligibility criteria for the Online {name} programme before beginning your application.</p>
          <ArrowLink href={site.apply} external variant="outline">
            Apply Now
          </ArrowLink>
        </div>
        <ul className={s.points}>
          {points.map((p) => (
            <li key={p}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={iconOf(p)} />
              </svg>
              <p>{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
