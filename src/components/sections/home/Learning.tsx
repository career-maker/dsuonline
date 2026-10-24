import Link from 'next/link';
import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { PlayIcon } from '@/components/ui/icons';
import { bentoTiles } from '@/data/home';
import s from './Learning.module.scss';

export function Learning() {
  return (
    <section className={s.learning}>
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            <p className={s.eyebrow}>Learning Experience</p>
            <h2>
              Everything You Need to
              <br />
              Succeed Online
            </h2>
          </div>
          <p className={s.copy}>
            Empower your academic journey with a comprehensive digital learning ecosystem designed for modern students. Access live classes,
            interactive discussions, assignments, and recorded lectures anytime, anywhere. Stay connected, collaborate seamlessly, and track
            your progress through an engaging online platform. Experience flexible, technology-driven education that supports learning beyond
            the classroom.
          </p>
        </header>

        <ul className={s.grid}>
          {bentoTiles.map((t) => (
            <li key={t.key} className={`${s.tile} ${s[t.key] ?? ''}`}>
              <FramedImage
                src={t.src}
                frame={t.frame}
                box={t.box}
                sizes={t.key === 'dedicated' ? '(max-width: 900px) 100vw, 562px' : '(max-width: 900px) 50vw, 267px'}
              />
              <span className={s.shade} />
              {t.key === 'dedicated' && (
                <Link href="/academics-at-dsu" className={s.play} aria-label="Explore the dedicated learning experience">
                  <PlayIcon />
                </Link>
              )}
              <span className={s.label}>
                <Icon name={t.icon} />
                <h3>{t.label}</h3>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
