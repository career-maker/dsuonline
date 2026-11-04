import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { TestimonialGrid } from '@/components/ui/Testimonial';
import { FacultyScroller } from './FacultyScroller';
import { QuoteSlider } from './QuoteSlider';
import { localHref } from '@/lib/content';
import { slugify } from './clean';
import { Tabs } from './Interactive';
import type { Img, Quote } from './parse';
import s from './Kit.module.scss';

export type Tone = 'white' | 'grey' | 'sky' | 'blue' | 'night';

export function Head({ title, eyebrow, lead, center }: { title?: string; eyebrow?: string; lead?: string; center?: boolean }) {
  if (!title && !eyebrow) return null;
  return (
    <header className={`${s.head} ${center ? s.center : ''}`}>
      {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {lead && <p className={s.lead}>{lead}</p>}
    </header>
  );
}

export function Sec({ title, eyebrow, lead, tone = 'white', center, narrow, compact, children, id }: { title?: string; eyebrow?: string; lead?: string; tone?: Tone; center?: boolean; narrow?: boolean; compact?: boolean; children?: ReactNode; id?: string }) {
  return (
    <section className={`${s.sec} ${s[tone]} ${compact ? s.compactSec : ''}`} id={id ?? (title ? slugify(title) : undefined)}>
      <div className={`${s.wrap} ${narrow ? s.narrow : ''} ${center ? s.centerAll : ''}`}>
        <Head title={title} eyebrow={eyebrow} lead={lead} center={center} />
        {children}
      </div>
    </section>
  );
}

export function Pic({ img, sizes = '(max-width: 900px) 100vw, 640px', className, priority }: { img: Img; sizes?: string; className?: string; priority?: boolean }) {
  return (
    <Image
      src={img.src}
      alt={img.alt}
      width={img.w ?? 1200}
      height={img.h ?? 800}
      sizes={sizes}
      className={className}
      priority={priority}
      unoptimized={img.src.endsWith('.svg')}
    />
  );
}

/** text beside a picture (stacks on tablet/phone) */
export function Split({ media, reverse, children, top }: { media?: ReactNode; reverse?: boolean; children: ReactNode; top?: boolean }) {
  return (
    <div className={`${s.split} ${reverse ? s.rev : ''} ${top ? s.top : ''} ${media ? '' : s.solo}`}>
      <div className={s.splitText}>{children}</div>
      {media && <div className={s.splitMedia}>{media}</div>}
    </div>
  );
}

export function Prose({ paras }: { paras: string[] }) {
  return (
    <div className={s.prose}>
      {paras.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

export function Checklist({ items, cols = 2 }: { items: string[]; cols?: 1 | 2 | 3 }) {
  return (
    <ul className={`${s.checks} ${s[`c${cols}`]}`}>
      {items.map((it) => (
        <li key={it}>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

// ---------- programme "Why DSU Online X?": copy + icon tiles left, photo right
const wi = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const whyIcon = (label: string): ReactNode => {
  const l = label.toLowerCase();
  const svg = (d: ReactNode) => (
    <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" {...wi}>
      {d}
    </svg>
  );
  if (/ugc/.test(l)) return svg(<><path d="M2 12 16 5l14 7-14 7z" /><path d="M8 15v6c0 2 4 4 8 4s8-2 8-4v-6" /><path d="M30 12v8" /></>);
  if (/100%|online learning/.test(l)) return svg(<><rect x="6" y="7" width="20" height="14" rx="1.5" /><path d="M3 25h26" /></>);
  if (/flexible/.test(l)) return svg(<><path d="m16 4 12 6-12 6-12-6z" /><path d="m4 16 12 6 12-6" /><path d="m4 22 12 6 12-6" /></>);
  if (/curriculum|industry/.test(l)) return svg(<><path d="M7 26V16M13 26V10M19 26V14M25 26V6" /></>);
  if (/par with|campus/.test(l)) return svg(<><circle cx="16" cy="12" r="7" /><path d="m12 18-2 10 6-4 6 4-2-10" /></>);
  if (/elective/.test(l)) return svg(<><path d="m10 5 5 3v6l-5 3-5-3V8z" /><path d="m22 5 5 3v6l-5 3-5-3V8z" /><path d="m16 16 5 3v6l-5 3-5-3v-6z" /></>);
  if (/examination|exam/.test(l)) return svg(<><path d="M8 4h12l5 5v19H8z" /><path d="M20 4v5h5M12 14h8M12 19h4" /><path d="m17 24 2 2 4-4" /></>);
  if (/live/.test(l)) return svg(<><circle cx="16" cy="16" r="2.5" /><path d="M10.5 10.5a7.8 7.8 0 0 0 0 11M21.5 10.5a7.8 7.8 0 0 1 0 11M6.5 6.5a13.5 13.5 0 0 0 0 19M25.5 6.5a13.5 13.5 0 0 1 0 19" /></>);
  if (/record/.test(l)) return svg(<><rect x="4" y="6" width="24" height="20" rx="4" /><path d="m13 12 8 4-8 4z" /></>);
  return svg(<><circle cx="16" cy="11" r="4" /><path d="M6 27c0-5 4-8 10-8s10 3 10 8" /><circle cx="6.5" cy="13" r="2.5" /><circle cx="25.5" cy="13" r="2.5" /></>);
};

export function WhyProgram({ title, paras, items, photo }: { title: string; paras: string[]; items: string[]; photo: ReactNode }) {
  return (
    <div className={s.whyP}>
      <div className={s.whyPText}>
        <p className={s.eyebrow}>The Program</p>
        <h2>{title}</h2>
        {paras.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <ul className={s.whyTiles}>
          {items.map((it) => (
            <li key={it}>
              <span className={s.whyIco}>{whyIcon(it)}</span>
              <span className={s.whyLbl}>{it}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.whyPPhoto}>
        <div className={s.whyPFrame}>{photo}</div>
      </div>
    </div>
  );
}

export function CardGrid({ items, cols = 3, numbered, tint }: { items: { title: string; text?: string; list?: string[] }[]; cols?: 2 | 3 | 4; numbered?: boolean; tint?: boolean }) {
  return (
    <ul className={`${s.cards} ${s[`g${cols}`]} ${tint ? s.tint : ''}`}>
      {items.map((c, i) => (
        <li key={c.title}>
          {numbered && <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>}
          <h3>{c.title}</h3>
          {c.text && <p>{c.text}</p>}
          {c.list && (
            <ul className={s.dots}>
              {c.list.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

// phrases the live site marks with <span class="highlight-text"> in the admission steps
const HIGHLIGHTS = ['Rs. 1000/- + Taxes', "'Apply Now'", 'five working days', 'admission confirmation'];
function highlight(text: string): ReactNode {
  const hit = HIGHLIGHTS.find((h) => text.includes(h));
  if (!hit) return text;
  const i = text.indexOf(hit);
  return (
    <>
      {text.slice(0, i)}
      <mark>{hit}</mark>
      {highlight(text.slice(i + hit.length))}
    </>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className={s.steps}>
      {items.map((st, i) => (
        <li key={st.title}>
          <span className={s.stepNo}>{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{st.title}</h3>
            <p>{highlight(st.text)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DataTable({ rows, caption }: { rows: string[][]; caption?: string }) {
  return (
    <div className={s.tableWrap} tabIndex={0} role="region" aria-label={caption ?? 'Table'}>
      <table>
        <thead>
          <tr>
            {rows[0].map((c, j) => (
              <th key={j}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((r, j) => (
            <tr key={j} className={r.length < rows[0].length ? s.sumRow : undefined}>
              {r.map((c, k) => (
                <td key={k} colSpan={k === r.length - 1 && r.length < rows[0].length ? rows[0].length - k : undefined}>
                  {c === String.fromCharCode(0xfffd) ? '–' : c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function QuoteCards({ items, initial = 6, home }: { items: Quote[]; initial?: number; home?: boolean }) {
  const cards = items.map((q) => (
    <li key={q.quote} className={`${s.quote} ${home ? s.quoteHome : ''}`}>
      <span className={s.qmark} aria-hidden="true">
        “
      </span>
      <p>{q.quote.replace(/^[“"‘]\s*|[”"’]\s*$/g, '')}</p>
      <div className={s.who}>
        {q.img ? <Image src={q.img.src} alt="" width={96} height={96} sizes="56px" className={s.avatar} /> : <span className={s.avatar} aria-hidden="true">{q.name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '').charAt(0)}</span>}
        <div>
          <b>{q.name}</b>
          {q.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </li>
  ));
  void initial;
  return <QuoteSlider cards={cards} />;
}

/** "A Learning Experience That's a Class Apart": picture beside six numbered cards (replaces the old accordion). */
export function ClassApart({ items, img }: { items: { t: string; d: string }[]; img?: Img }) {
  return (
    <div className={s.apart}>
      {img && (
        <div className={s.apartPic}>
          <Pic img={img} sizes="(max-width: 900px) 100vw, 520px" />
        </div>
      )}
      <ol className={s.apartGrid}>
        {items.map((it, i) => (
          <li key={it.t}>
            <span className={s.apartNum}>{String(i + 1).padStart(2, '0')}</span>
            <h3>{it.t}</h3>
            <p>{it.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Logo strip. Six or more logos scroll as the home "Recognitions & Accreditations" marquee; fewer sit in a grid. */
export function LogoWall({ imgs }: { imgs: Img[] }) {
  if (imgs.length >= 6) {
    return (
      <div className={s.marquee}>
        <ul>
          {[...imgs, ...imgs].map((im, i) => (
            <li key={i} aria-hidden={i >= imgs.length}>
              <Pic img={{ ...im, alt: i >= imgs.length ? '' : im.alt }} sizes="320px" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <ul className={s.logos}>
      {imgs.map((im) => (
        <li key={im.src}>
          <Pic img={{ ...im, alt: im.alt || 'Hiring partner logo' }} sizes="200px" />
        </li>
      ))}
    </ul>
  );
}

export function FacultyGrid({ items }: { items: { name: string; creds?: string; role?: string; img?: Img }[] }) {
  const cards = items.map((f) => (
    <li key={f.name} className={s.fcCard}>
      <div className={s.fcPhoto}>
        {f.img && <Pic img={f.img} sizes="(max-width: 600px) 80vw, 300px" />}
        {f.role && <span className={s.fcRole}>{f.role}</span>}
      </div>
      <div className={s.fcBody}>
        <h3>{f.name}</h3>
        {f.creds && (
          <p className={s.fcCreds}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9 12 4l10 5-10 5z" />
              <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
            </svg>
            <span>{f.creds}</span>
          </p>
        )}
      </div>
    </li>
  ));
  return <FacultyScroller>{cards}</FacultyScroller>;
}

// ---------- "Program Learning System": icon cards (title, subtitle, bullets or paragraph)
const lsi = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const lsIcon = (title: string): ReactNode => {
  const l = title.toLowerCase();
  const svg = (d: ReactNode) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" {...lsi}>
      {d}
    </svg>
  );
  if (/tutorial/.test(l)) return svg(<><rect x="4" y="6" width="24" height="20" rx="4" /><path d="m13 12 8 4-8 4z" /></>);
  if (/content/.test(l)) return svg(<><path d="m16 4 12 6-12 6-12-6z" /><path d="m4 16 12 6 12-6" /><path d="m4 22 12 6 12-6" /></>);
  if (/web|resource/.test(l)) return svg(<><circle cx="16" cy="11" r="4" /><path d="M6 27c0-5 4-8 10-8s10 3 10 8" /><circle cx="6.5" cy="13" r="2.5" /><circle cx="25.5" cy="13" r="2.5" /></>);
  if (/assess/.test(l)) return svg(<><rect x="7" y="6" width="18" height="22" rx="2.5" /><path d="M12 4h8v4h-8zM12 15l2 2 4-4M12 22l2 2 4-4" /></>);
  if (/eligib/.test(l)) return svg(<><path d="M2 12 16 5l14 7-14 7z" /><path d="M8 15v6c0 2 4 4 8 4s8-2 8-4v-6" /></>);
  return svg(<><path d="M5 5h16a3 3 0 0 1 3 3v19H8a3 3 0 0 1-3-3z" /><path d="M24 10h3v17" /></>);
};

export function LearningCards({ items, intro }: { items: { title: string; sub?: string; list?: string[]; text?: string }[]; intro?: ReactNode }) {
  return (
    <>
      {intro}
      <ul className={`${s.lsGrid} ${s[`ls${Math.min(items.length, 6)}`] ?? ''}`}>
        {items.map((c) => (
          <li key={c.title} className={s.lsCard}>
            <div className={s.lsHead}>
              <span className={s.lsIco}>{lsIcon(c.title)}</span>
              <div>
                <h3>{c.title}</h3>
                {c.sub && <p>{c.sub}</p>}
              </div>
            </div>
            {c.list ? (
              <ul className={s.lsList}>
                {c.list.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            ) : (
              <p className={s.lsText}>{c.text}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export function LinkGrid({ items }: { items: { name: string; href: string; hint?: string }[] }) {
  return (
    <ul className={s.linkGrid}>
      {items.map((l) => (
        <li key={l.href}>
          <Link href={l.href}>
            <span>
              <b>{l.name}</b>
              {l.hint && <small>{l.hint}</small>}
            </span>
            <i aria-hidden="true">→</i>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ContactRow({ label, href, text }: { label: string; href: string; text: string }) {
  return (
    <p className={s.contactRow}>
      <span>{label}</span>
      <a href={href}>{text}</a>
    </p>
  );
}

export function CtaLink({ href, children }: { href: string; children: ReactNode }) {
  const h = localHref(href);
  return h.startsWith('/') ? <ArrowLink href={h}>{children}</ArrowLink> : <ArrowLink href={h} external>{children}</ArrowLink>;
}

export { Tabs };

export function DocList({ items }: { items: { title: string; links: { x: string; href: string }[] }[] }) {
  return (
    <ul className={s.docs}>
      {items.map((d) => (
        <li key={d.title}>
          <span className={s.docTitle}>{d.title}</span>
          <span className={s.docLinks}>
            {d.links.map((l) => {
              const h = localHref(l.href);
              return h.startsWith('/') ? (
                <Link key={l.href} href={h}>
                  {l.x}
                </Link>
              ) : (
                <a key={l.href} href={h} target="_blank" rel="noopener noreferrer">
                  {l.x}
                </a>
              );
            })}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function OfficeCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className={s.officeCard}>
      <h3>{title}</h3>
      {children}
    </article>
  );
}

/** Learner stories: same card as the home testimonials (hover shows the quote; carousel with the quote under the photo on tablet / phone). */
export function StoryCards({ items }: { items: Quote[]; initial?: number }) {
  return (
    <TestimonialGrid
      items={items.map((q) => {
        const [course, ...rest] = q.meta;
        return { name: q.name, course, company: rest.join(' - ') || undefined, quote: q.quote.replace(/^[“"‘]\s*|[”"’]\s*$/g, ''), img: q.img?.src };
      })}
    />
  );
}

/** Career roles: numbered cards, role name over its description. */
export function RoleGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className={s.roles}>
      {items.map((r, i) => (
        <li key={r.title}>
          <span className={s.roleNo} aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Industries that hire: compact tiles on a tinted band. */
export function IndustryGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className={s.industries}>
      {items.map((r) => (
        <li key={r.title}>
          <h3>{r.title}</h3>
          <p>{r.text}</p>
        </li>
      ))}
    </ul>
  );
}

/** Whole faculty list in the home "Meet Our Faculty" card design (photo, name, role, credentials, links). */
export function FacultyShowcase({ items }: { items: { name: string; creds?: string; role?: string; img?: Img }[] }) {
  return (
    <ul className={s.facAll}>
      {items.map((f) => (
        <li key={f.name}>
          <div className={s.facPhoto}>{f.img && <Pic img={f.img} sizes="(max-width: 600px) 90vw, 330px" />}</div>
          <div className={s.facBody}>
            <h3>{f.name}</h3>
            {f.role && <p className={s.facRole}>{f.role}</p>}
            {f.creds && (
              <ul className={s.facPoints}>
                <li>{f.creds}</li>
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
