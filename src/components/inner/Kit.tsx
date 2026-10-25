import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { localHref } from '@/lib/content';
import { slugify } from './clean';
import { Reveal, Tabs } from './Interactive';
import type { Img, Quote } from './parse';
import s from './Kit.module.scss';

export type Tone = 'white' | 'grey' | 'sky';

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

export function Sec({ title, eyebrow, lead, tone = 'white', center, narrow, children, id }: { title?: string; eyebrow?: string; lead?: string; tone?: Tone; center?: boolean; narrow?: boolean; children?: ReactNode; id?: string }) {
  return (
    <section className={`${s.sec} ${s[tone]}`} id={id ?? (title ? slugify(title) : undefined)}>
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

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className={s.steps}>
      {items.map((st, i) => (
        <li key={st.title}>
          <span className={s.stepNo}>{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{st.title}</h3>
            <p>{st.text}</p>
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
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function QuoteCards({ items, initial = 6 }: { items: Quote[]; initial?: number }) {
  const cards = items.map((q) => (
    <li key={q.quote} className={s.quote}>
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
  return <Reveal count={initial} className={s.quotes}>{cards}</Reveal>;
}

export function LogoWall({ imgs }: { imgs: Img[] }) {
  return (
    <ul className={s.logos}>
      {imgs.map((im) => (
        <li key={im.src}>
          <Pic img={im} sizes="200px" />
        </li>
      ))}
    </ul>
  );
}

export function FacultyGrid({ items }: { items: { name: string; creds?: string; role?: string; img?: Img }[] }) {
  return (
    <ul className={s.faculty}>
      {items.map((f) => (
        <li key={f.name}>
          <div className={s.fphoto}>{f.img && <Pic img={f.img} sizes="(max-width: 600px) 60vw, 280px" />}</div>
          <div className={s.fbody}>
            <h3>{f.name}</h3>
            {f.role && <p className={s.frole}>{f.role}</p>}
            {f.creds && <p className={s.fcreds}>{f.creds}</p>}
          </div>
        </li>
      ))}
    </ul>
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

/** Learner stories styled like the home testimonials: photo card, gradient shade, name / course / company over the photo. */
export function StoryCards({ items, initial = 9 }: { items: Quote[]; initial?: number }) {
  const cards = items.map((q) => {
    const [course, ...rest] = q.meta;
    return (
      <li key={q.quote} className={s.story}>
        <div className={s.storyPhoto}>
          {q.img ? <Pic img={q.img} sizes="(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 400px" /> : <span className={s.storyInitial} aria-hidden="true">{q.name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '').charAt(0)}</span>}
          <span className={s.storyShade} />
          <span className={s.storyWho}>
            <b>{q.name}</b>
            {course && <strong>{course}</strong>}
            {rest.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </span>
        </div>
        <p>{q.quote.replace(/^[“"‘]\s*|[”"’]\s*$/g, '')}</p>
      </li>
    );
  });
  return <Reveal count={initial} className={s.stories}>{cards}</Reveal>;
}
