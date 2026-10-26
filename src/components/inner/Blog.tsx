import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { BLOGS_PER_PAGE, loadBlogs, type Block, type PageData } from '@/lib/content';
import { programs } from '@/data/programs';
import { site } from '@/data/site';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { CtaBand, InnerHero } from './InnerPage';
import { EnquireButton } from './EnquireButton';
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
                    Read Article →
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

export function BlogPost({ data, slug }: { data: PageData; slug?: string }) {
  const allBlogs = loadBlogs();
  const currentIndex = slug ? allBlogs.findIndex((b) => b.slug === slug) : -1;
  const currentPost = currentIndex >= 0 ? allBlogs[currentIndex] : null;

  const prevPost = currentIndex > 0 ? allBlogs[currentIndex - 1] : allBlogs[allBlogs.length - 1];
  const nextPost = currentIndex >= 0 && currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : allBlogs[0];

  const related = allBlogs
    .filter((b) => (slug ? b.slug !== slug : true))
    .slice(0, 3);

  const recentPosts = allBlogs.slice(0, 4);

  const featured = data.blocks.find((b): b is Extract<Block, { t: 'img' }> => b.t === 'img');
  const byline = data.blocks.find((b): b is Extract<Block, { t: 'p' }> => b.t === 'p' && b.x.startsWith('By'));
  const h1 = data.blocks.find((b) => b.t === 'h1') as { x: string } | undefined;
  const body = data.blocks.filter((b) => b !== featured && b !== byline && b.t !== 'h1');
  const chunks: Chunk[] = [{ blocks: [] }];
  for (const b of body) {
    if (b.t === 'h2' || b.t === 'h3' || b.t === 'h4') chunks.push({ head: { t: b.t, x: b.x }, blocks: [] });
    else chunks[chunks.length - 1].blocks.push(b);
  }

  const postTitle = h1?.x ?? data.title;
  const postDate = currentPost?.date ?? 'Oct 2026';
  const postImage = featured?.src ?? currentPost?.image ?? '/images/brand/dsu-logo.png';
  const postImageAlt = featured?.alt ?? currentPost?.imageAlt ?? postTitle;

  return (
    <>
      <InnerHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blogs', href: '/resources/blogs' }, { label: postTitle }]}
        title={postTitle}
        subtitle={byline?.x ?? `Published ${postDate} · 5 min read`}
      />

      <section className={s.postLayout}>
        <div className={s.postContainer}>
          {/* Main Article Content (Left Column) */}
          <article className={s.mainCol}>
            {postImage && (
              <div className={s.postHeroWrapper}>
                <Image
                  className={s.hero}
                  src={postImage}
                  alt={postImageAlt}
                  width={featured?.w ?? 1200}
                  height={featured?.h ?? 625}
                  priority
                  sizes="(max-width: 900px) 100vw, 840px"
                />
              </div>
            )}

            <div className={s.postMetaBar}>
              <span className={s.metaPill}>Distance &amp; Online Education</span>
              <span className={s.metaDate}>📅 {postDate}</span>
              <span className={s.metaRead}>⏱ 5 min read</span>
            </div>

            <div className={s.articleBody}>
              {chunks.map((c, i) => (
                <div key={i} className={s.chunk}>
                  {c.head && (c.head.t === 'h2' ? <h2>{c.head.x}</h2> : c.head.t === 'h3' ? <h3>{c.head.x}</h3> : <h4>{c.head.x}</h4>)}
                  <Flow blocks={c.blocks} plain faq={!!c.head && /faq|frequently/i.test(c.head.x)} />
                </div>
              ))}
            </div>

            {/* Next / Previous Navigation Bar */}
            <nav className={s.postNav} aria-label="Previous and next articles">
              {prevPost && (
                <Link href={`/resources/blogs/${prevPost.slug}`} className={s.navPrev}>
                  <span className={s.navArrow}>← Previous Article</span>
                  <strong className={s.navTitle}>{prevPost.title}</strong>
                </Link>
              )}
              {nextPost && (
                <Link href={`/resources/blogs/${nextPost.slug}`} className={s.navNext}>
                  <span className={s.navArrow}>Next Article →</span>
                  <strong className={s.navTitle}>{nextPost.title}</strong>
                </Link>
              )}
            </nav>
          </article>

          {/* Right Sidebar Widgets */}
          <aside className={s.sidebar}>
            {/* Widget 1: Admission CTA Card */}
            <div className={`${s.widget} ${s.ctaWidget}`}>
              <span className={s.badge}>Admissions Open</span>
              <h3>Take the Next Step in Your Career</h3>
              <p>Learn from anywhere with UGC-entitled, NAAC A+ accredited online degree programs from Dayananda Sagar University.</p>
              <div className={s.widgetActions}>
                <ArrowLink href={site.apply} external variant="solid" className={s.wApplyBtn}>
                  Apply Now
                </ArrowLink>
                <EnquireButton variant="outline">
                  Download Brochure
                </EnquireButton>
              </div>
            </div>

            {/* Widget 2: Popular Programs */}
            <div className={s.widget}>
              <h4 className={s.widgetTitle}>Explore Online Degrees</h4>
              <ul className={s.progList}>
                {programs.map((p) => (
                  <li key={p.code}>
                    <Link href={p.href} className={s.progItem}>
                      <div>
                        <strong>{p.name}</strong>
                        <span>{p.fullName}</span>
                      </div>
                      <span className={s.feeBadge}>INR {p.firstSemFee}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Trending / Recent Articles */}
            <div className={s.widget}>
              <h4 className={s.widgetTitle}>Recent Insights</h4>
              <ul className={s.recentList}>
                {recentPosts.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/resources/blogs/${r.slug}`} className={s.recentItem}>
                      {r.image && (
                        <div className={s.recentThumb}>
                          <Image src={r.image} alt="" width={80} height={52} sizes="80px" />
                        </div>
                      )}
                      <div className={s.recentBody}>
                        <span className={s.recentDate}>{r.date}</span>
                        <p className={s.recentTitle}>{r.title}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Related Articles Cards Section */}
        {related.length > 0 && (
          <section className={s.relatedSection}>
            <div className={s.relatedInner}>
              <div className={s.relatedHeader}>
                <span className={s.relatedEyebrow}>RECOMMENDED READS</span>
                <h2>Related Articles &amp; Insights</h2>
              </div>
              <ul className={s.relatedGrid}>
                {related.map((rb) => (
                  <li key={rb.slug} className={s.relatedCard}>
                    <Link href={`/resources/blogs/${rb.slug}`} className={s.relatedThumb}>
                      {rb.image && (
                        <Image
                          src={rb.image}
                          alt={rb.imageAlt || rb.title}
                          width={400}
                          height={250}
                          sizes="(max-width: 768px) 100vw, 360px"
                        />
                      )}
                      <span className={s.relatedDate}>{rb.date}</span>
                    </Link>
                    <div className={s.relatedBody}>
                      <h3>
                        <Link href={`/resources/blogs/${rb.slug}`}>{rb.title}</Link>
                      </h3>
                      <p>{rb.excerpt}</p>
                      <Link href={`/resources/blogs/${rb.slug}`} className={s.relatedMore}>
                        Read Article →
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </section>

      <CtaBand />
    </>
  );
}
