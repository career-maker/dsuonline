import Image from 'next/image';
import Link from 'next/link';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { ChevronLeft, ChevronRight } from '@/components/ui/icons';
import { articles, faculty } from '@/data/home';
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

export function FacultyArticles() {
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
          <ArrowLink href="/academics-at-dsu" className={s.btn}>
            View All Faculty
          </ArrowLink>
        </header>

        {/* single page of faculty for now; arrows activate when the CMS provides more */}
        <div className={`${s.arrows} ${s.arrowsFaculty}`}>
          <button type="button" aria-label="Previous faculty" disabled>
            <ChevronLeft />
          </button>
          <button type="button" aria-label="Next faculty" disabled>
            <ChevronRight />
          </button>
        </div>

        <ul className={s.faculty}>
          {faculty.map((f, i) => (
            <li key={f.key}>
              <div className={s.fphoto}>
                <FramedImage src={`/images/faculty/${f.key}.webp`} alt={f.name} frame={[95 + i * 350, 6962, 330, 243]} box={f.box} sizes="(max-width: 900px) 50vw, 330px" />
              </div>
              <div className={s.fbody}>
                <h3>{f.name}</h3>
                <p className={s.role}>{f.role}</p>
                <ul className={s.points}>
                  {f.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className={s.links}>
                  <Link href="/academics-at-dsu">View Profile &gt;</Link>
                  <a href="https://www.linkedin.com/company/dsuonline" target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" /> LinkedIn
                  </a>
                </div>
              </div>
            </li>
          ))}
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

        {/* single page of articles for now; arrows activate when the CMS provides more */}
        <div className={`${s.arrows} ${s.arrowsArticles}`}>
          <button type="button" aria-label="Previous articles" disabled>
            <ChevronLeft />
          </button>
          <button type="button" aria-label="Next articles" disabled>
            <ChevronRight />
          </button>
        </div>

        <ul className={s.articles}>
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
                <Link href="/resources/blogs" className={s.read}>
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
