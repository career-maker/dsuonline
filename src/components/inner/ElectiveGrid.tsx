import Image from 'next/image';
import Link from 'next/link';
import { ICONS, ICON_BY_SLUG } from './electiveIcons';
import s from './Kit.module.scss';

type Item = { name: string; href: string; duration?: string };

/** Programme electives: horizontal cards - icon, name, duration, Know More on the left; photo with a diagonal edge on the right. Photos: public/images/electives/<slug>.webp. */
export function ElectiveGrid({ items, eyebrow, title, lead }: { items: Item[]; eyebrow: string; title: string; lead: string }) {
  return (
    <div className={s.elGridWrap}>
      <header className={s.elHead}>
        <p className={s.elEyebrow}>
          {eyebrow}
          <i aria-hidden="true" />
        </p>
        <h2>{title}</h2>
        <p className={s.elLead}>{lead}</p>
      </header>
      <ul className={s.elGrid} aria-label="Program electives">
        {items.map((l) => {
          const slug = l.href.split('/').pop()!.replace('&', '-and-');
          return (
            <li key={l.href}>
              <Link href={l.href} className={s.elCard}>
                <span className={s.elPic}>
                  <Image src={`/images/electives/${slug}.webp`} alt="" fill sizes="(max-width: 600px) 45vw, (max-width: 1200px) 25vw, 260px" />
                </span>
                <span className={s.elInfo}>
                  <span className={s.elTile}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {ICONS[ICON_BY_SLUG[slug.toLowerCase()] ?? 'code']}
                    </svg>
                  </span>
                  <b>{l.name}</b>
                  {l.duration && (
                    <small>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      {l.duration}
                    </small>
                  )}
                  <span className={s.elMore}>
                    <u>Know More</u> <i aria-hidden="true">→</i>
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
