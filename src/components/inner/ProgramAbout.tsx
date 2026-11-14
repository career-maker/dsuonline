import Image from 'next/image';
import s from './ProgramAbout.module.scss';

/** one long SEO paragraph reads better as two: split at the sentence break nearest the middle (text is unchanged) */
function halves(p: string): string[] {
  if (p.length < 420) return [p];
  const mid = p.length / 2;
  let best = -1;
  for (const m of p.matchAll(/\.\s+(?=[A-Z])/g)) {
    const at = (m.index ?? 0) + 1;
    if (best < 0 || Math.abs(at - mid) < Math.abs(best - mid)) best = at;
  }
  return best < 0 ? [p] : [p.slice(0, best).trim(), p.slice(best).trim()];
}

/** "The Program" block on programme pages: a framed photo pair on the left, the live copy and benefit chips on the right. */
export function ProgramAbout({ title, paras, items, photo, inset, alt, eyebrow = 'The Program' }: { eyebrow?: string; title: string; paras: string[]; items: string[]; photo: string; inset: string; alt: string }) {
  return (
    <div className={s.about}>
      <div className={s.media}>
        <div className={s.main}>
          <Image src={photo} alt={alt} fill sizes="(max-width: 900px) 100vw, 560px" className={s.img} />
        </div>
        <div className={s.second}>
          <Image src={inset} alt="" fill sizes="240px" className={s.img} />
        </div>
      </div>
      <div className={s.copy}>
        <p className={s.eyebrow}>{eyebrow}</p>
        <h2>{title}</h2>
        {paras.flatMap(halves).map((p) => (
          <p key={p} className={s.para}>
            {p}
          </p>
        ))}
        <ul className={s.points}>
          {items.map((it) => (
            <li key={it}>
              <span className={s.tick} aria-hidden="true">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8.5l3.2 3L13 4.5" />
                </svg>
              </span>
              <span className={s.label}>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
