import Image from 'next/image';
import { CardSlider } from '@/components/ui/CardSlider';
import { Icon } from '@/components/ui/Icon';
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

/** Same card as the home "Meet Our Faculty": light-blue box, portrait on top, name, job title, degrees with the yellow marker, profile links. */
function Card({ f }: { f: Item }) {
  return (
    <article className={s.card}>
      <div className={s.photo}>
        {f.img ? <Image src={f.img.src} alt={f.img.alt || f.name} fill sizes="(max-width: 600px) 80vw, 300px" className={s.img} /> : <span className={s.initials}>{initials(f.name)}</span>}
      </div>
      <div className={s.body}>
        <h3>{f.name}</h3>
        {f.role && <p className={s.role}>{f.role}</p>}
        {f.creds && (
          <ul className={s.points}>
            <li>{f.creds}</li>
          </ul>
        )}
        <div className={s.links}>
          <a href="#" aria-label={`View profile: ${f.name}`}>
            View Profile &gt;
          </a>
          <a href="https://www.linkedin.com/company/dsuonline" target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn: ${f.name}`}>
            <Icon name="linkedin" /> LinkedIn
          </a>
        </div>
      </div>
    </article>
  );
}

/** Programme faculty: a centred grid on desktop / tablet, a Swiper carousel on phones. */
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
        <CardSlider label="Faculty" slideWidth="82%" items={items.map((f) => <Card key={f.name} f={f} />)} />
      </div>
    </>
  );
}
