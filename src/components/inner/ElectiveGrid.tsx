import Image from 'next/image';
import Link from 'next/link';
import { CardSlider } from '@/components/ui/CardSlider';
import s from './ElectiveGrid.module.scss';

type Item = { name: string; href: string; duration?: string; blurb?: string };

function Card({ l }: { l: Item }) {
  // photos live in public/images/electives/<slug>.webp
  const slug = l.href.split('/').pop()!.replace('&', '-and-');
  return (
    <Link href={l.href} className={s.card}>
      <span className={s.pic}>
        <Image src={`/images/electives/${slug}.webp`} alt="" fill sizes="(max-width: 600px) 78vw, (max-width: 1200px) 45vw, 22vw" className={s.img} />
      </span>
      <span className={s.body}>
        <b>{l.name}</b>
        {l.blurb && <span className={s.blurb}>{l.blurb}</span>}
        <span className={s.more}>
          Know More <i aria-hidden="true">&rarr;</i>
        </span>
      </span>
    </Link>
  );
}

/** Programme electives: photo-led cards (photo = 2/3 of the card), name, a one-to-two line description, "Know More". Grid on desktop, Swiper carousel on phones. */
export function ElectiveGrid({ items, eyebrow, title, lead }: { items: Item[]; eyebrow: string; title: string; lead: string }) {
  return (
    <div className={s.wrap}>
      <header className={s.head}>
        <p className={s.eyebrow}>{eyebrow}</p>
        <h2>{title}</h2>
        <p className={s.lead}>{lead}</p>
      </header>
      <ul className={s.grid} aria-label="Program electives">
        {items.map((l) => (
          <li key={l.href}>
            <Card l={l} />
          </li>
        ))}
      </ul>
      <div className={s.mobile}>
        <CardSlider label="Program electives" slideWidth="76%" items={items.map((l) => <Card key={l.href} l={l} />)} />
      </div>
    </div>
  );
}
