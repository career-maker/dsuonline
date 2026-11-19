import type { Metadata } from 'next';
import Link from 'next/link';
import { InnerHero } from '@/components/inner/InnerPage';
import { programs, specializationHref } from '@/data/programs';
import { footerColumns, mainNav, moreNav } from '@/data/site';
import s from './sitemap.module.scss';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Every page of Dayananda Sagar University Online in one place.',
};

const seen = new Set<string>(['/privacy-policy', '/sitemap']);
/** drop links already listed in an earlier group (same route) and in-page anchors */
const fresh = (links: { label: string; href: string }[]) => links.filter((l) => !l.href.includes('#') && !seen.has(l.href) && seen.add(l.href));

const groups = [
  { title: 'Main Pages', links: fresh([{ label: 'Home', href: '/' }, ...mainNav, ...moreNav]) },
  { title: 'Resources', links: fresh(footerColumns.flatMap((c) => c.links)) },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/privacy-policy#dnd-terms-and-conditions' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <InnerHero size="gradient" crumbs={[{ label: 'Home', href: '/' }, { label: 'Sitemap' }]} eyebrow="Explore" title="Sitemap" subtitle="Every page of DSU Online, in one place." />
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.groups}>
            {groups.map((g) => (
              <section key={g.title} className={s.card} aria-labelledby={`sm-${g.title}`}>
                <h2 id={`sm-${g.title}`}>{g.title}</h2>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link prefetch={false} href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <h2 className={s.heading}>Programmes</h2>
          <div className={s.programs}>
            {programs.map((p) => (
              <section key={p.code} className={s.card} aria-labelledby={`sm-${p.code}`}>
                <h3 id={`sm-${p.code}`}>
                  <Link prefetch={false} href={p.href}>Online {p.name}</Link>
                  <span>{p.fullName}</span>
                </h3>
                <ul>
                  {p.specializations.map((sp) => (
                    <li key={sp.slug}>
                      <Link prefetch={false} href={specializationHref(p, sp)}>{sp.name}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
