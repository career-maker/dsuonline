'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import { useDragScroll } from '@/components/ui/useDragScroll';
import s from './Kit.module.scss';

const AUTO_MS = 3500;

// line icons (24px grid), one per specialization so the badge matches the subject
const ICONS: Record<string, ReactNode> = {
  coin: <><circle cx="12" cy="12" r="9" /><path d="M14.5 8.5C14 7.5 13 7 11.8 7 10.3 7 9 7.8 9 9.1c0 3 5.8 1.5 5.8 4.4 0 1.3-1.3 2.1-2.8 2.1-1.3 0-2.3-.6-2.8-1.6M12 5v2M12 17v2" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.4" /><path d="M17 14c2.5 0 4.5 2 4.5 5" /></>,
  megaphone: <><path d="M3 10v4h4l8 5V5l-8 5z" /><path d="M18.5 9a4 4 0 0 1 0 6" /></>,
  server: <><rect x="3" y="3" width="18" height="7" rx="1.5" /><rect x="3" y="14" width="18" height="7" rx="1.5" /><path d="M7 6.5h.01M7 17.5h.01" /></>,
  truck: <><path d="M2 6h11v10H2z" /><path d="M13 9h4l4 4v3h-8z" /><circle cx="6.5" cy="18" r="1.8" /><circle cx="17.5" cy="18" r="1.8" /></>,
  rocket: <><path d="M12 2c3.5 2 5 6 4 11l-4 3-4-3c-1-5 .5-9 4-11z" /><circle cx="12" cy="9" r="1.6" /><path d="M8 14l-3 3 3 .5M16 14l3 3-3 .5M12 16v5" /></>,
  bars: <><path d="M3 21h18" /><rect x="5" y="12" width="3" height="7" /><rect x="10.5" y="7" width="3" height="12" /><rect x="16" y="3" width="3" height="16" /></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  cloud: <path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 10a4 4 0 0 1-.5 8z" />,
  pie: <><path d="M12 3v9h9" /><path d="M20.5 15A9 9 0 1 1 9 3.5" /></>,
  blocks: <><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /><path d="M11 7h2a2 2 0 0 1 2 2v2M13 17h-2a2 2 0 0 1-2-2v-2" /></>,
  atom: <><circle cx="12" cy="12" r="1.8" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12.5l9 5 9-5" /><path d="M3 17l9 5 9-5" /></>,
  database: <><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  wifi: <><path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0" /><circle cx="12" cy="19.5" r="1" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-5.5A8 8 0 1 1 21 12z" /><path d="M8.5 11.5h7M8.5 14.5h4" /></>,
  phone: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18.5h2" /></>,
  factory: <><path d="M3 21V11l6 4v-4l6 4V4h6v17z" /><path d="M8 21v-3M12 21v-3M16 21v-3" /></>,
  gauge: <><path d="M4 18a9 9 0 1 1 16 0" /><path d="M12 14l4-5" /><circle cx="12" cy="15" r="1.3" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>,
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  cycle: <><path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  network: <><circle cx="5" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><path d="M7 6l3.5 5M7 18l3.5-5M14 12h3" /></>,
  gamepad: <><rect x="2" y="7" width="20" height="11" rx="5" /><path d="M7 10.5v4M5 12.5h4M15.5 11.5h.01M18 13.5h.01" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M2 10h20M6 15h4" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>,
  sparkle: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 17v4M17 19h4" /></>,
  drive: <><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M5 14l2.5-9h9L19 14M7 17h.01M11 17h.01" /></>,
  trend: <><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></>,
};

const ICON_BY_SLUG: Record<string, string> = {
  financial_management: 'coin',
  'human-resource': 'users',
  'marketing-management': 'megaphone',
  'digital-marketing': 'target',
  'it-and-systems-management': 'server',
  supply_chain_management: 'truck',
  'entrepreneurship-management': 'rocket',
  business_analytics: 'bars',
  artificial_intelligence: 'cpu',
  'cloud-computing': 'cloud',
  'data-science': 'pie',
  block_chain_technologies: 'blocks',
  'quantum-computing': 'atom',
  'deep-learning': 'layers',
  big_data_analytics: 'database',
  iot: 'wifi',
  'natural-language-processing': 'chat',
  'mobile-application': 'phone',
  mobile_programming: 'phone',
  'data-analytics': 'trend',
  industrial_iot: 'factory',
  'business-intelligence': 'gauge',
  'business-data': 'briefcase',
  'quantum-ml': 'sparkle',
  machine_learning: 'network',
  full_stack_develpoment: 'code',
  devops: 'cycle',
  ethical_hacking: 'shield',
  database_administration: 'database',
  advanced_database: 'drive',
  game_programming: 'gamepad',
  fintech: 'card',
};

/** Programme elective cards: photo, icon badge, name and Know More footer. Scrolls sideways and advances by itself when the cards overflow. Photos: public/images/electives/<slug>.webp. */
export function ElectiveCarousel({ items }: { items: { name: string; href: string; duration?: string }[] }) {
  const track = useRef<HTMLUListElement>(null);
  const paused = useRef(false);
  const [overflow, setOverflow] = useState(false);
  useDragScroll(track);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('li');
    const w = (card?.offsetWidth ?? 280) + 20;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: max, behavior: 'smooth' });
    else el.scrollBy({ left: dir * w, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => setOverflow(el.scrollWidth > el.clientWidth + 4);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const id = reduce ? 0 : window.setInterval(() => {
      if (!paused.current && el.scrollWidth > el.clientWidth + 4) step(1);
    }, AUTO_MS);
    return () => {
      ro.disconnect();
      window.clearInterval(id);
    };
  }, [step]);

  return (
    <div className={s.elWrap} onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }} onFocus={() => { paused.current = true; }} onBlur={() => { paused.current = false; }} onTouchStart={() => { paused.current = true; }} onTouchEnd={() => { paused.current = false; }}>
      <ul className={s.elective} ref={track} aria-label="Program electives">
        {items.map((l) => {
          const slug = l.href.split('/').pop()!.replace('&', '-and-');
          return (
            <li key={l.href}>
              <Link href={l.href}>
                <span className={s.elPhoto}>
                  <Image src={`/images/electives/${slug}.webp`} alt="" fill sizes="(max-width: 600px) 80vw, 300px" />
                  <svg className={s.elIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {ICONS[ICON_BY_SLUG[slug.toLowerCase()] ?? 'code']}
                  </svg>
                </span>
                <span className={s.elBody}>
                  <b>{l.name}</b>
                  {l.duration && <small>{l.duration}</small>}
                </span>
                <span className={s.elFoot}>
                  Know More <i aria-hidden="true">→</i>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {overflow && (
        <div className={s.elArrows}>
          <button type="button" onClick={() => step(-1)} aria-label="Previous electives">
            <ChevronLeft />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next electives">
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
