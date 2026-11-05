'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import { articles } from '@/data/home';
import { realFaculty } from '@/data/faculty';
import { useLoopCarousel } from '@/hooks/useLoopCarousel';
import s from './FacultyArticles.module.scss';

const avatar = (key: string) => (key === 'meera' ? '/images/faculty/meera.webp' : `/images/avatars/${key}.webp`);

const toIsoDate = (dateStr: string) => {
  const months: Record<string, string> = {
    jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
    jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
  };
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length >= 3) {
    const d = parts[0].padStart(2, '0');
    const m = months[parts[1].slice(0, 3).toLowerCase()] ?? '01';
    const y = parts[2];
    return `${y}-${m}-${d}`;
  }
  return dateStr;
};

export type FacultyCardData = { name: string; role: string; creds: string; src: string };

/** One "Meet Our Faculty" card (shared by the home page and /academics-at-dsu). */
export function FacultyCard({ f, clone }: { f: FacultyCardData; clone?: boolean }) {
  return (
    <li aria-hidden={clone || undefined} inert={clone || undefined}>
      <div className={s.fphoto}>
        {/* whole portrait, top-aligned so heads are never cut */}
        <Image src={f.src} alt={clone ? '' : f.name} fill sizes="(max-width: 900px) 50vw, 330px" className={s.fimg} />
      </div>
      <div className={s.fbody}>
        <h3>{f.name}</h3>
        <p className={s.role}>{f.role}</p>
        <ul className={s.points}>
          <li>{f.creds}</li>
        </ul>
        <div className={s.links}>
          <a href="https://www.linkedin.com/company/dsuonline" target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn: ${f.name}`} tabIndex={clone ? -1 : undefined}>
            <Icon name="linkedin" /> LinkedIn
          </a>
        </div>
      </div>
    </li>
  );
}

/** The home faculty carousel (same cards, same styles) for other pages: 2s autoplay, arrows below. */
export function FacultyStrip({ items }: { items: FacultyCardData[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const { canScroll, step } = useLoopCarousel(ref, { looped: true, auto: 2000 });
  return (
    <div className={s.section} style={{ padding: 0, background: 'transparent' }}>
      <ul className={s.faculty} ref={ref} aria-label="Faculty" style={{ marginTop: 0 }}>
        {[0, 1].map((copy) => items.map((f) => <FacultyCard key={`${copy}-${f.name}`} f={f} clone={copy === 1} />))}
      </ul>
      {canScroll && (
        <div className={s.arrowBtns} style={{ justifyContent: 'flex-end', marginTop: 18 }}>
          <button type="button" className={s.arrowBtn} onClick={() => step(-1)} aria-label="Previous faculty">
            <ChevronLeft />
          </button>
          <button type="button" className={s.arrowBtn} onClick={() => step(1)} aria-label="Next faculty">
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export function FacultyArticles() {
  const facultyTrackRef = useRef<HTMLUListElement>(null);
  const articlesTrackRef = useRef<HTMLUListElement>(null);
  const { canScroll: facultyCan, step: facultyStep } = useLoopCarousel(facultyTrackRef, { looped: true, auto: 2000 });
  const { canScroll: articlesCan } = useLoopCarousel(articlesTrackRef, { looped: true, auto: 2000 });
  const [articleIdx, setArticleIdx] = useState(0);

  const step = useCallback((el: HTMLElement | null, currentIdx: number, dir: 1 | -1, setIdx: (n: number) => void) => {
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>(':scope > li'));
    const nextIdx = Math.max(0, Math.min(cards.length - 1, currentIdx + dir));
    if (cards[nextIdx]) {
      cards[nextIdx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setIdx(nextIdx);
    }
  }, []);

  const scrollTo = useCallback((el: HTMLElement | null, idx: number, setIdx: (n: number) => void) => {
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>(':scope > li'));
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setIdx(idx);
    }
  }, []);

  useEffect(() => {
    const syncScroll = (el: HTMLElement | null, setIdx: (n: number) => void) => {
      if (!el) return () => {};
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const cards = Array.from(el.querySelectorAll<HTMLElement>(':scope > li'));
            const scrollLeft = el.scrollLeft;
            let best = 0;
            let minDiff = Infinity;
            cards.forEach((c, i) => {
              const diff = Math.abs(c.offsetLeft - scrollLeft - el.offsetLeft);
              if (diff < minDiff) {
                minDiff = diff;
                best = i;
              }
            });
            setIdx(best);
            ticking = false;
          });
          ticking = true;
        }
      };
      el.addEventListener('scroll', onScroll, { passive: true });
      return () => el.removeEventListener('scroll', onScroll);
    };

    const cleanupA = syncScroll(articlesTrackRef.current, setArticleIdx);
    return () => {
      cleanupA();
    };
  }, []);

  return (
    <section className={s.section}>
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <p className={s.eyebrow}>Learning Experience</p>
            <h2>Meet Our Faculty</h2>
          </div>
          <p className={s.lead}>
            Learn from accomplished academicians. researchers and industry experts who are shaping the next generation of leaders.
          </p>
          <ArrowLink href="/academics-at-dsu#faculty" className={s.btn}>
            View All Faculty
          </ArrowLink>
        </header>

        {facultyCan && (
          <div className={`${s.arrows} ${s.arrowsFaculty}`}>
            <button type="button" aria-label="Previous faculty" onClick={() => facultyStep(-1)}>
              <ChevronLeft />
            </button>
            <button type="button" aria-label="Next faculty" onClick={() => facultyStep(1)}>
              <ChevronRight />
            </button>
          </div>
        )}

        {facultyCan && (
          <div className={`${s.controls} ${s.controlsOn}`}>
            <div className={s.arrowBtns}>
              <button type="button" className={s.arrowBtn} onClick={() => facultyStep(-1)} aria-label="Previous faculty">
                <ChevronLeft />
              </button>
              <button type="button" className={s.arrowBtn} onClick={() => facultyStep(1)} aria-label="Next faculty">
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
        <ul className={s.faculty} ref={facultyTrackRef} aria-label="Faculty">
          {[0, 1].map((copy) => realFaculty.map((f) => <FacultyCard key={`${copy}-${f.name}`} f={{ name: f.name, role: f.role || `Online ${f.program}`, creds: f.creds, src: f.src }} clone={copy === 1} />))}
        </ul>


        <hr className={s.rule} />

        <header className={`${s.head} ${s.head2}`}>
          <div>
            <p className={s.eyebrow}>Faculty Insights</p>
            <h2>
              Articles &amp; Expert
              <br />
              Perspectives
            </h2>
          </div>
          <p className={s.lead}>Explore thought leadership, research updates and expert opinions from our faculty on topics that matter.</p>
          <ArrowLink href="/resources/blogs" className={s.btn}>
            View All Articles
          </ArrowLink>
        </header>

        {/* desktop chevrons */}
{articlesCan && (
        <div className={`${s.arrows} ${s.arrowsArticles}`}>
          <button
            type="button"
            aria-label="Previous articles"
            onClick={() => step(articlesTrackRef.current, articleIdx, -1, setArticleIdx)}
            disabled={articleIdx === 0}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next articles"
            onClick={() => step(articlesTrackRef.current, articleIdx, 1, setArticleIdx)}
            disabled={articleIdx === articles.length - 1}
          >
            <ChevronRight />
          </button>
        </div>
)}

        {articlesCan && (
<div className={s.controls}>
          <div className={s.arrowBtns}>
            <button
              type="button"
              className={s.arrowBtn}
              onClick={() => step(articlesTrackRef.current, articleIdx, -1, setArticleIdx)}
              disabled={articleIdx === 0}
              aria-label="Previous article"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className={s.arrowBtn}
              onClick={() => step(articlesTrackRef.current, articleIdx, 1, setArticleIdx)}
              disabled={articleIdx === articles.length - 1}
              aria-label="Next article"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
)}
        <ul className={s.articles} ref={articlesTrackRef}>
          {articles.map((a) => (
            <li key={a.key}>
              <div className={s.aphoto}>
                <FramedImage src={`/images/articles/${a.key}.webp`} alt="" frame={a.frame} box={a.box} sizes="(max-width: 900px) 100vw, 563px" />
              </div>
              <div className={s.abody}>
                <time dateTime={toIsoDate(a.date)}>{a.date}</time>
                <h3>
                  {a.title[0]} <br className={s.br} />
                  {a.title[1]}
                </h3>
                <p>
                  {a.excerpt[0]} <br className={s.br} />
                  {a.excerpt[1]}
                </p>
                <Link href={`/resources/blogs/${a.post}`} className={s.read}>
                  Read Article &gt;
                </Link>
                <div className={s.author}>
                  <Image
                    src={avatar(a.author.avatar)}
                    alt=""
                    width={63}
                    height={63}
                    className={a.author.avatar === 'meera' ? s.top : undefined}
                  />
                  <div>
                    <b>{a.author.name}</b>
                    <span>{a.author.role}</span>
                    <p>
                      <Link href="/academics-at-dsu">View Profile &gt;</Link>
                      <a href="https://www.linkedin.com/company/dsuonline" target="_blank" rel="noopener noreferrer">
                        LinkedIn <Icon name="linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
