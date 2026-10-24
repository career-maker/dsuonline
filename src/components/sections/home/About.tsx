import { ArrowLink } from '@/components/ui/ArrowLink';
import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { PlayIcon } from '@/components/ui/icons';
import { aboutCopy, aboutFeatures, aboutStats } from '@/data/home';
import s from './About.module.scss';

export function About() {
  return (
    <section className={s.about} id="about">
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <p className={s.eyebrow}>About DSU Online</p>
            <h2>
              DSU Online Degree
              <br />
              Programs with Added Value
            </h2>
          </div>
          <dl className={s.stats}>
            {aboutStats.map((st) => (
              <div key={st.label}>
                <dt>
                  {st.value}
                  <span>+</span>
                  {'unit' in st && <em>{st.unit}</em>}
                </dt>
                <dd>{st.label}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className={s.grid}>
          <div className={`${s.photo} ${s.left}`}>
            <FramedImage
              src="/images/about/about-left.webp"
              alt="Learner studying online with the DSU campus behind"
              frame={[95, 2100, 562, 541]}
              box={[-104.1, 2100, 961.3, 541]}
              sizes="(max-width: 900px) 100vw, 562px"
            />
          </div>

          <div className={s.mid}>
            <div className={s.copy}>
              {aboutCopy.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className={s.features}>
              {aboutFeatures.map((f) => (
                <li key={f.icon}>
                  <span className={s.fi}>
                    <Icon name={f.icon} />
                  </span>
                  <span>
                    {f.label[0]}
                    <br />
                    {f.label[1]}
                  </span>
                </li>
              ))}
            </ul>

            <ArrowLink href="/about" className={s.more}>
              Know More
            </ArrowLink>
          </div>

          <div className={`${s.photo} ${s.right}`}>
            <FramedImage
              src="/images/about/about-right.webp"
              alt="Dayananda Sagar University campus"
              frame={[1424, 2098, 400, 538]}
              box={[1333, 2098.1, 732.8, 537.9]}
              sizes="(max-width: 900px) 100vw, 400px"
            />
            <a
              className={s.play}
              href="https://www.youtube.com/@dsuonline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore DSU - watch the campus video"
            >
              <svg className={s.ring} viewBox="0 0 118 118" aria-hidden="true">
                <defs>
                  <path id="ring" d="M25.9 76.6A37.5 37.5 0 1 1 57.7 96.5" />
                </defs>
                {/* wording (incl. "EXLPORE") as in the approved design */}
                <text>
                  <textPath href="#ring" textLength="171" lengthAdjust="spacing">
                    UNIVERSITY EXLPORE DSU
                  </textPath>
                </text>
              </svg>
              <span>
                <PlayIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
