import Image from 'next/image';
import type { CSSProperties } from 'react';
import { awards } from '@/data/home';
import s from './Recognitions.module.scss';

export function Recognitions() {
  return (
    <section className={s.recog} aria-labelledby="recog-title">
      <h2 id="recog-title">Recognitions &amp; Accreditations</h2>
      <div className={s.viewport}>
        <ul className={s.track}>
          {[...awards, ...awards].map((a, i) => (
            <li key={i} aria-hidden={i >= awards.length}>
              <Image src={`/images/awards/${a.src}.png`} alt={i >= awards.length ? '' : a.name} width={Math.round(a.w)} height={Math.round(a.h)} style={{ '--w': a.w } as CSSProperties} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
