import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { BLOGS_PER_PAGE, loadBlogs, type Block, type PageData } from '@/lib/content';
import { CtaBand, InnerHero } from './InnerPage';
import { Flow } from './Flow';
import s from './Blog.module.scss';

export function BlogIndex({ page }: { page: number }) {
  const all = loadBlogs();
  const pages = Math.max(1, Math.ceil(all.length / BLOGS_PER_PAGE));
  const items = all.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);
  const href = (n: number) => (n === 1 ? '/resources/blogs' : `/resources/blogs/page/${n}`);
  const nums = Array.from({ length: pages }, (_, i) => i + 1).filter((n) => n === 1 || n === pages || Math.abs(n - page) <= 1);
  return (
    <>
      <InnerHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs' }]} title="Blogs" />
      <section className={s.list}>
        <div className={s.inner}>
          <ul className={s.grid}>
            {items.map((p) => (
              <li key={p.slug}>
                <Link href={`/resources/blogs/${p.slug}`} className={s.thumb}>
                  {p.image && <Image src={p.image} alt={p.imageAlt} width={p.w ?? 1024} height={p.h ?? 625} sizes="(max-width: 900px) 100vw, 560px" />}
                </Link>
                <div className={s.body}>
                  <p className={s.meta}>By | {p.date}</p>
                  <h2>
                    <Link href={`/resources/blogs/${p.slug}`}>{p.title}</Link>
                  </h2>
                  <p className={s.excerpt}>{p.excerpt}</p>
                  <Link href={`/resources/blogs/${p.slug}`} className={s.more}>
                    Read More...
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          {pages > 1 && (
            <nav className={s.pager} aria-label="Blog pages">
              {page > 1 && <Link href={href(page - 1)}>« Previous</Link>}
              {nums.map((n, i) => (
                <Fragment key={n}>
                  {i > 0 && n - nums[i - 1] > 1 && <span aria-hidden="true">…</span>}
                  {n === page ? (
                    <span className={s.on} aria-current="page">
                      {n}
                    </span>
                  ) : (
                    <Link href={href(n)}>{n}</Link>
                  )}
                </Fragment>
              ))}
              {page < pages && <Link href={href(page + 1)}>Next »</Link>}
            </nav>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

type Chunk = { head?: { t: 'h2' | 'h3' | 'h4'; x: string }; blocks: Block[] };

export function BlogPost({ data }: { data: PageData }) {
  const featured = data.blocks.find((b): b is Extract<Block, { t: 'img' }> => b.t === 'img');
  const byline = data.blocks.find((b): b is Extract<Block, { t: 'p' }> => b.t === 'p' && b.x.startsWith('By'));
  const h1 = data.blocks.find((b) => b.t === 'h1') as { x: string } | undefined;
  const body = data.blocks.filter((b) => b !== featured && b !== byline && b.t !== 'h1');
  const chunks: Chunk[] = [{ blocks: [] }];
  for (const b of body) {
    if (b.t === 'h2' || b.t === 'h3' || b.t === 'h4') chunks.push({ head: { t: b.t, x: b.x }, blocks: [] });
    else chunks[chunks.length - 1].blocks.push(b);
  }
  return (
    <>
      <InnerHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs', href: '/resources/blogs' }, { label: h1?.x ?? 'Post' }]}
        title={h1?.x ?? data.title}
        subtitle={byline?.x}
      />
      <article className={s.article}>
        <div className={s.articleInner}>
          {featured && <Image className={s.hero} src={featured.src} alt={featured.alt} width={featured.w ?? 1200} height={featured.h ?? 600} priority sizes="(max-width: 900px) 100vw, 860px" />}
          {chunks.map((c, i) => (
            <div key={i} className={s.chunk}>
              {c.head && (c.head.t === 'h2' ? <h2>{c.head.x}</h2> : c.head.t === 'h3' ? <h3>{c.head.x}</h3> : <h4>{c.head.x}</h4>)}
              <Flow blocks={c.blocks} plain faq={!!c.head && /faq|frequently/i.test(c.head.x)} />
            </div>
          ))}
        </div>
      </article>
      <CtaBand />
    </>
  );
}
