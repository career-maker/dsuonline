import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { bentoTiles } from '@/data/home';
import { VideoTile } from './VideoTile';
import s from './Learning.module.scss';

const VIDEO_ID = '10yxPMitlJs'; // sample: https://www.youtube.com/watch?v=10yxPMitlJs

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
              {t.key === 'dedicated' ? (
                <VideoTile id={VIDEO_ID} title="Dedicated learning experience at DSU Online">
                  <FramedImage src={t.src} alt={`${t.label} at DSU Online`} frame={t.frame} box={t.box} sizes="(max-width: 900px) 100vw, 562px" />
                  <span className={s.shade} />
                  <div className={s.label}>
                    <Icon name={t.icon} />
                    <h3>{t.label}</h3>
                  </div>
                </VideoTile>
              ) : (
                <>
                  <FramedImage src={t.src} alt={`${t.label} at DSU Online`} frame={t.frame} box={t.box} sizes="(max-width: 900px) 50vw, 267px" />
                  <span className={s.shade} />
                  <div className={s.label}>
                    <Icon name={t.icon} />
                    <h3>{t.label}</h3>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
