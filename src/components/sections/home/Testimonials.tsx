import Image from 'next/image';
import Link from 'next/link';
import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { ChevronLeft, ChevronRight, PlayIcon } from '@/components/ui/icons';
import { learnerVideos, tickerItems } from '@/data/home';
import s from './Testimonials.module.scss';

type Rect = readonly [number, number, number, number];

// frame = clipped card, box = where the design draws the photo (design px)
const layout: Record<string, { big?: boolean; frame: Rect; box: Rect; avatar: { w: number; h: number } }> = {
  rakshit: { big: true, frame: [95, 1277, 859, 487], box: [91.2, 1275, 867.6, 488], avatar: { w: 54, h: 59 } },
  chinmaya: { frame: [970, 1275, 420, 239], box: [967.6, 1275, 424.9, 239], avatar: { w: 59, h: 54 } },
  akhil: { frame: [1402, 1275, 423, 239], box: [1402.6, 1275, 424.9, 239], avatar: { w: 59, h: 54 } },
  john: { frame: [970, 1525, 420, 239], box: [970, 1245.3, 420, 798.4], avatar: { w: 73, h: 54 } },
  arun: { frame: [1402, 1525, 423, 239], box: [1402.6, 1525, 424.9, 239], avatar: { w: 54, h: 60 } },
};

const avatarSrc = (key: string) => `/images/avatars/${key}.webp`;

export function Testimonials() {
  const loop = [...tickerItems, ...tickerItems];
  return (
    <>
      <section className={s.ticker} aria-label="Announcements">
        <Icon name="ticker-icon" />
        <div className={s.track}>
          <ul>
            {loop.map((t, i) => (
              <li key={i} aria-hidden={i >= tickerItems.length}>
                {t.text}
                {t.link && (
                  <>
                    {' '}
                    {t.href ? (
                      <Link href={t.href} className={s.tickerLink} aria-label={`${t.text} - ${t.link}`} tabIndex={i >= tickerItems.length ? -1 : undefined}>
                        {t.link}
                      </Link>
                    ) : (
                      <b>{t.link}</b>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <header className={s.head}>
            <div>
              <p className={s.eyebrow}>Testimonials</p>
              <h2>Hear From Our Learners</h2>
            </div>
            <p className={s.lead}>
              Hear from our alumni as they share how DSU Online helped accelerate their careers and achieve professional success.
            </p>
          </header>

          {/* one page of videos for now; arrows activate when the CMS provides more */}
          <button type="button" className={`${s.arrow} ${s.prev}`} aria-label="Previous testimonials" disabled>
            <ChevronLeft />
          </button>
          <button type="button" className={`${s.arrow} ${s.next}`} aria-label="Next testimonials" disabled>
            <ChevronRight />
          </button>

          <ul className={s.grid}>
            {learnerVideos.map((v) => {
              const l = layout[v.key];
              return (
                <li key={v.key} className={`${s.card} ${s[v.key]} ${l.big ? s.big : ''}`}>
                  <Link href="/student-testimonials" aria-label={`Watch ${v.name}'s story`}>
                    <FramedImage src={`/images/testimonials/${v.key}.webp`} alt="" frame={l.frame} box={l.box} sizes="(max-width: 900px) 100vw, 860px" />
                    <span className={s.shade} />
                    <span className={s.info}>
                      <Image className={s.avatar} src={avatarSrc(v.key)} alt="" width={l.avatar.w} height={l.avatar.h} />
                      <span className={s.who}>
                        <b>{v.name}</b>
                        <strong>{v.course}</strong>
                        <span>{v.company}</span>
                      </span>
                    </span>
                    <span className={s.play}>
                      <PlayIcon />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
