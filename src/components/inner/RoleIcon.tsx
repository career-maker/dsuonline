import type { ReactNode } from 'react';

const P: Record<string, ReactNode> = {
  chart: <path d="M5 20V10m7 10V4m7 16v-7" />,
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.4c1.8.8 3 2.6 3 5.6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.500-7-10V6l7-3Zm-3 9 2 2 4-4" />,
  code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2.500-11-3 14" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.500" />
      <path d="m16 16 4.500 4.500" />
    </>
  ),
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  book: <path d="M4 5.500A2.500 2.500 0 0 1 6.500 3H20v15H6.500A2.500 2.500 0 0 0 4 20.500v-15ZM4 20.500A2.500 2.500 0 0 0 6.500 23H20" />,
  coin: (
    <>
      <circle cx="12" cy="12" r="8.500" />
      <path d="M14.500 9.200c-.5-.8-1.400-1.200-2.500-1.200-1.500 0-2.500.8-2.500 1.900 0 2.600 5.200 1.300 5.200 4 0 1.100-1.100 1.900-2.700 1.900-1.200 0-2.200-.5-2.700-1.400M12 6v2m0 8v2" />
    </>
  ),
  megaphone: <path d="M4 10v4h3l7 4V6l-7 4H4Zm13-1.500a5 5 0 0 1 0 7M19.500 6a8.500 8.500 0 0 1 0 12" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.500M12 18.500V21M3 12h2.500M18.500 12H21M5.600 5.600l1.800 1.800M16.600 16.600l1.800 1.800M5.600 18.400l1.800-1.800M16.600 7.400l1.800-1.800" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v4h4M9 13h6M9 17h4" />
    </>
  ),
};

// first matching keyword wins
const MAP: [RegExp, keyof typeof P][] = [
  [/learn|train|educat|teach|l&d/i, 'book'],
  [/analy|data|insight|research|intelligence|risk/i, 'chart'],
  [/secur|compliance|audit|legal|law|govern/i, 'shield'],
  [/develop|engineer|software|program|cloud|devops|iot|network/i, 'code'],
  [/financ|bank|invest|account|treasury|credit|fintech/i, 'coin'],
  [/market|brand|sales|advertis|media|content|digital|growth/i, 'megaphone'],
  [/people|hr\b|human|talent|recruit|relation|culture|team/i, 'people'],
  [/operation|supply|logistic|procure|process|service|support/i, 'gear'],
  [/consult|advis|strateg|business|manage|product|leader|executive|director/i, 'briefcase'],
  [/architect|platform|system|infra/i, 'layers'],
  [/report|document|policy|regulat/i, 'doc'],
  [/explor|discover|scout/i, 'search'],
];

/** Small outline icon chosen from the role title (falls back to a briefcase). */
export function RoleIcon({ title }: { title: string }) {
  const key = MAP.find(([re]) => re.test(title))?.[1] ?? 'briefcase';
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[key]}
    </svg>
  );
}
