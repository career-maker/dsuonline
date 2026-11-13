import Image from 'next/image';
import { CardSlider } from '@/components/ui/CardSlider';
import type { Img } from './parse';
import s from './ProgramFaculty.module.scss';

type Item = { name: string; creds?: string; role?: string; img?: Img };

function initials(name: string) {
  return name
    .replace(/^(dr|prof)\.?\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}

function Card({ f }: { f: Item }) {
  return (
    <article className={s.card}>
      <div className={s.photo}>
        {f.img ? <Image src={f.img.src} alt={f.img.alt || f.name} fill sizes="140px" className={s.img} /> : <span className={s.initials}>{initials(f.name)}</span>}
      </div>
      <h3 className={s.name}>{f.name}</h3>
      {f.creds && <p className={s.creds}>{f.creds}</p>}
      {f.role && <p className={s.role}>{f.role}</p>}
    </article>
  );
}

/** Programme faculty: small light cards with a round photo; a grid on desktop, a Swiper carousel on phones. */
export function ProgramFaculty({ items }: { items: Item[] }) {
  return (
    <>
      <ul className={s.grid} aria-label="Faculty">
        {items.map((f) => (
          <li key={f.name}>
            <Card f={f} />
          </li>
        ))}
      </ul>
      <div className={s.mobile}>
        <CardSlider label="Faculty" slideWidth="68%" items={items.map((f) => <Card key={f.name} f={f} />)} />
      </div>
    </>
  );
}
