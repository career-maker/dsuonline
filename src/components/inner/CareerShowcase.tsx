import Image from 'next/image';
import { CardSlider } from '@/components/ui/CardSlider';
import { ModuleCard } from './ModuleCards';
import s from './CareerShowcase.module.scss';

type Role = { title: string; text: string };

const body = (t: string) =>
  t
    .split('•')
    .map((x) => x.trim())
    .filter(Boolean)
    .join(' · ');

/**
 * Career path: a photo on one side, the career points on the other scrolling upwards like a marquee (pauses and highlights on hover / focus).
 * On phones the same points are a swipe carousel instead.
 */
export function CareerShowcase({ items, image, alt = '' }: { items: Role[]; image: string; alt?: string }) {
  const list = (hidden?: boolean) => (
    <ul className={s.list} aria-hidden={hidden || undefined}>
      {items.map((r, i) => (
        <li key={r.title} className={s.item}>
          <span className={s.no} aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3>{r.title}</h3>
            {r.text && <p>{body(r.text)}</p>}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className={s.wide}>
        <div className={s.photo}>
          <Image src={image} alt={alt} fill sizes="(max-width: 1200px) 100vw, 560px" />
        </div>
        <div className={s.view} tabIndex={0} aria-label="Career paths (scrolls automatically; hover to pause)">
          <div className={s.track} style={{ ['--dur' as string]: `${Math.max(items.length, 4) * 6}s` }}>
            {list()}
            {list(true)}
          </div>
        </div>
      </div>
      <div className={s.mobile}>
        <CardSlider
          label="Career paths"
          slideWidth="84%"
          items={items.map((r, i) => (
            <ModuleCard key={r.title} no={i + 1} title={r.title} text={r.text ? body(r.text) : undefined} />
          ))}
        />
      </div>
    </>
  );
}
