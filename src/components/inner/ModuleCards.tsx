import { CardSlider } from '@/components/ui/CardSlider';
import s from './ModuleCards.module.scss';

type Item = { title: string; text?: string; list?: string[] };

/** One numbered card in the Careers-card look (white card, brand accent bar, faint number), without the flip. */
export function ModuleCard({ no, title, text, list }: Item & { no: number }) {
  return (
    <div className={s.card}>
      <span className={s.no} aria-hidden="true">
        {String(no).padStart(2, '0')}
      </span>
      <h3>{title}</h3>
      {list ? (
        <ul className={s.roles}>
          {list.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      ) : (
        text && <p>{text}</p>
      )}
    </div>
  );
}

/** Card grid; on phones the same cards become a swipe carousel so the section stays short. */
export function ModuleCards({ items }: { items: Item[] }) {
  return (
    <>
      <ul className={s.grid}>
        {items.map((c, i) => (
          <li key={c.title}>
            <ModuleCard no={i + 1} {...c} />
          </li>
        ))}
      </ul>
      <div className={s.mobile}>
        <CardSlider label="Cards" slideWidth="84%" items={items.map((c, i) => <ModuleCard key={c.title} no={i + 1} {...c} />)} />
      </div>
    </>
  );
}
