import type { ReactNode } from 'react';
import s from './Kit.module.scss';

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

const icons: { match: RegExp; tone: string; svg: ReactNode }[] = [
  {
    match: /credit/i,
    tone: 'blue',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
        <path d="M2.5 10h19M6 15h4" />
      </svg>
    ),
  },
  {
    match: /debit/i,
    tone: 'teal',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
        <circle cx="9.5" cy="12" r="3" />
        <circle cx="14.5" cy="12" r="3" />
      </svg>
    ),
  },
  {
    match: /bank/i,
    tone: 'violet',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4M12 7.5l3 1.5v2c0 1.3-1.2 2.3-3 3-1.8-.7-3-1.7-3-3V9z" />
      </svg>
    ),
  },
  {
    match: /upi|wallet/i,
    tone: 'orange',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10.5 18.5h3M12 6v6m-2.5-2.5L12 12l2.5-2.5" />
      </svg>
    ),
  },
];

/** Payment methods: big tinted icon discs, one accent per method. Labels are the live site's, unchanged. */
export function PayOptions({ items }: { items: string[] }) {
  return (
    <ul className={s.pay}>
      {items.map((label) => {
        const ic = icons.find((i) => i.match.test(label)) ?? icons[0];
        return (
          <li key={label} className={s[`pay_${ic.tone}`]}>
            <span className={s.payIcon}>{ic.svg}</span>
            <span className={s.payLabel}>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
