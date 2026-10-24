import Image from 'next/image';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Icon } from '@/components/ui/Icon';
import { localHref, type Block } from '@/lib/content';
import { Accordion } from './Accordion';
import { group, type Img, type Node } from './structure';
import s from './Inner.module.scss';

const isInternal = (href: string) => href.startsWith('/') && !href.startsWith('//');

function Pic({ src, alt, w, h, sizes = '(max-width: 900px) 100vw, 800px' }: Img & { sizes?: string }) {
  return <Image src={src} alt={alt} width={w ?? 1200} height={h ?? 800} sizes={sizes} className={s.pic} unoptimized={src.endsWith('.svg')} />;
}

function Qa(nodes: Node[]) {
  const ps = nodes.filter((n): n is Extract<Node, { k: 'p' }> => n.k === 'p').map((n) => n.x);
  const items: { q: string; a: string[] }[] = [];
  for (const x of ps) {
    if (/\?\s*$/.test(x) || /^\d+\s*\./.test(x)) items.push({ q: x, a: [] });
    else if (items.length) items[items.length - 1].a.push(x);
  }
  return items.filter((i) => i.a.length);
}

export function Flow({ blocks, faq = false, plain = false }: { blocks: Block[]; faq?: boolean; plain?: boolean }) {
  const nodes = group(blocks, plain);
  if (faq) {
    const items = Qa(nodes);
    if (items.length >= 2) return <Accordion items={items} />;
  }
  return (
    <>
      {nodes.map((n, i) => {
        switch (n.k) {
          case 'p':
            return (
              <p key={i} className={s.p}>
                {n.x}
              </p>
            );
          case 'h':
            return (
              <h4 key={i} className={s.minor}>
                {n.x}
              </h4>
            );
          case 'list':
            return (
              <ul key={i} className={s.checks}>
                {n.items.map((it) => (
                  <li key={it}>
                    <Icon name="check" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case 'table':
            return (
              <div key={i} className={s.tableWrap}>
                <table>
                  <thead>
                    <tr>
                      {n.rows[0].map((c, j) => (
                        <th key={j}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {n.rows.slice(1).map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'gallery':
            return (
              <ul key={i} className={s.gallery}>
                {n.imgs.map((im) => (
                  <li key={im.src}>
                    <Pic {...im} sizes="(max-width: 900px) 50vw, 300px" />
                  </li>
                ))}
              </ul>
            );
          case 'figure':
            return (
              <figure key={i} className={s.figure}>
                <Pic src={n.src} alt={n.alt} w={n.w} h={n.h} />
              </figure>
            );
          case 'cards':
            return (
              <ul key={i} className={s.cards}>
                {n.items.map((c) => (
                  <li key={c.title}>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </li>
                ))}
              </ul>
            );
          case 'quotes':
            return (
              <ul key={i} className={s.quotes}>
                {n.items.map((q) => (
                  <li key={q.quote}>
                    <p className={s.quote}>{q.quote}</p>
                    <div className={s.who}>
                      {q.img && <Image src={q.img.src} alt="" width={64} height={64} className={s.avatar} />}
                      <div>
                        {q.meta.map((m, j) => (j === 0 ? <b key={m}>{m}</b> : <span key={m}>{m}</span>))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            );
          case 'link': {
            const href = localHref(n.href);
            return (
              <p key={i} className={s.linkRow}>
                {isInternal(href) ? (
                  <ArrowLink href={href}>{n.x}</ArrowLink>
                ) : /^(tel|mailto):/.test(href) ? (
                  <a href={href} className={s.inline}>
                    {n.x}
                  </a>
                ) : (
                  <ArrowLink href={href} external>
                    {n.x}
                  </ArrowLink>
                )}
              </p>
            );
          }
          case 'embed':
            return (
              <div key={i} className={s.embed}>
                <iframe src={n.src} title="Embedded content" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            );
        }
      })}
    </>
  );
}

