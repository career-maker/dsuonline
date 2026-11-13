import Image from 'next/image';
import type { ReactNode } from 'react';
import s from './ProgramCertificate.module.scss';

/** "Degree with added value": convocation photo on the left, the flipping sample certificate (children) on the right. */
export function ProgramCertificate({ eyebrow, title, photo, children }: { eyebrow?: string; title: string; photo: string; children: ReactNode }) {
  return (
    <div className={s.wrap}>
      <header className={s.head}>
        {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
        <h2>{title}</h2>
      </header>
      <div className={s.split}>
        <div className={s.photo}>
          <Image src={photo} alt="A graduate receiving her degree at the Dayananda Sagar University convocation" fill sizes="(max-width: 1200px) 100vw, 46vw" className={s.img} />
        </div>
        <div className={s.cert}>{children}</div>
      </div>
    </div>
  );
}
