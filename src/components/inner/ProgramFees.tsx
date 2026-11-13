import Image from 'next/image';
import type { ReactNode } from 'react';
import s from './ProgramFees.module.scss';

/**
 * Programme "Fee Structure": the pitch (mini title, title, description) with a photo underneath on the left,
 * the fee tables on the right. The photo stretches so both columns end on the same line.
 */
export function ProgramFees({ eyebrow, title, desc, photo, note, children }: { eyebrow?: string; title: string; desc?: string; photo: string; note?: string; children: ReactNode }) {
  return (
    <div className={s.split}>
      <div className={s.side}>
        <header className={s.head}>
          {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
          <h2>{title}</h2>
          {desc && <p className={s.desc}>{desc}</p>}
        </header>
        <div className={s.photo}>
          <Image src={photo} alt="" fill sizes="(max-width: 1200px) 100vw, 40vw" className={s.img} />
        </div>
      </div>
      <div className={s.table}>
        {children}
        {note && <p className={s.note}>{note}</p>}
      </div>
    </div>
  );
}
