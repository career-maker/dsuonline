import s from './ModuleCards.module.scss';

/** Numbered cards in the same look as the programme pages' Careers cards (white card, brand accent bar, faint number), without the flip. */
export function ModuleCards({ items }: { items: { title: string; text?: string; list?: string[] }[] }) {
  return (
    <ul className={s.grid}>
      {items.map((c, i) => (
        <li key={c.title} className={s.card}>
          <span className={s.no} aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3>{c.title}</h3>
          {c.list ? (
            <ul className={s.roles}>
              {c.list.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          ) : (
            c.text && <p>{c.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
