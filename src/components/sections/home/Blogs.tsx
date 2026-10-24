import Link from 'next/link';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { FramedImage } from '@/components/ui/FramedImage';
import { blogs } from '@/data/home';
import s from './Blogs.module.scss';

// design arrow: blue chevron with a dark outline inside a 37px ring
const Arrow = ({ d }: { d: string }) => (
  <svg viewBox="0 0 37 37" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} stroke="#212121" strokeWidth="2.8" />
    <path d={d} stroke="#007dc5" strokeWidth="1.2" />
  </svg>
);

export function Blogs() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <p className={s.eyebrow}>Blogs &amp; Insights</p>
            <div className={s.row}>
              <h2>Latest Blogs &amp; Insights</h2>
              {/* all posts fit on screen; arrows activate with more posts (CMS phase) */}
              <div className={s.arrows}>
                <button type="button" disabled aria-label="Previous posts">
                  <Arrow d="M23 9 13 18.5 23 28" />
                </button>
                <button type="button" disabled aria-label="Next posts">
                  <Arrow d="M14 9 24 18.5 14 28" />
                </button>
              </div>
            </div>
          </div>
          <ArrowLink href="/resources/blogs" className={s.all}>
            View All
          </ArrowLink>
        </header>

        <ul className={s.grid}>
          {blogs.map((b) => (
            <li key={b.slug} className={s.card}>
              <FramedImage src={b.image} frame={b.frame} box={b.box} sizes="(max-width: 900px) 100vw, 560px" />
              <span className={s.shade} />
              <time className={s.date}>
                <strong>
                  {b.date.day}
                  <sup>{b.date.ord}</sup>
                </strong>
                <span>{b.date.month}</span>
              </time>
              <div className={s.body}>
                <h3>
                  {b.title.map((l, j) => (
                    <span key={l}>
                      {j > 0 && (
                        <>
                          {' '}
                          <br className={s.br} />
                        </>
                      )}
                      {l}
                    </span>
                  ))}
                </h3>
                <p>
                  {b.excerpt[0]} <br className={s.br} />
                  {b.excerpt[1]}
                </p>
                <Link href={`/resources/blogs/${b.slug}`} className={s.read}>
                  Read More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
