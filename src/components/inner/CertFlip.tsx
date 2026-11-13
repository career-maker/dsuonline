'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import s from './CertFlip.module.scss';

type Pic = { src: string; alt: string };

/**
 * Certificate that flips to show its back: mouse hover flips it on desktop, tap / click (and Enter / Space) flips it everywhere else.
 * A mouse click is ignored on purpose, otherwise clicking while hovering would flip it straight back.
 */
export function CertFlip({ front, back }: { front: Pic; back: Pic }) {
  const [flipped, setFlipped] = useState(false);
  const ptr = useRef<string>('');

  return (
    <div className={s.wrap}>
      <button
        type="button"
        className={`${s.card} ${flipped ? s.flipped : ''}`}
        aria-pressed={flipped}
        aria-label={flipped ? 'Sample certificate, back side. Press to see the front.' : 'Sample certificate, front side. Press to see the back.'}
        onPointerDown={(e) => {
          ptr.current = e.pointerType;
        }}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setFlipped(true)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && setFlipped(false)}
        onClick={(e) => {
          if (ptr.current === 'mouse' && e.detail > 0) return; // hover already did it
          setFlipped((f) => !f);
        }}
      >
        <span className={s.inner}>
          <span className={`${s.face} ${s.front}`}>
            <Image src={front.src} alt={front.alt} fill sizes="(max-width: 700px) 92vw, 640px" className={s.img} />
          </span>
          <span className={`${s.face} ${s.back}`}>
            <Image src={back.src} alt={back.alt} fill sizes="(max-width: 700px) 92vw, 640px" className={s.img} />
          </span>
        </span>
      </button>
      <p className={s.hint} aria-live="polite">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12a8 8 0 0114-5.3L20 9M20 4v5h-5M20 12a8 8 0 01-14 5.3L4 15M4 20v-5h5" />
        </svg>
        <span className={s.touch}>{flipped ? 'Showing the back. Tap to see the front' : 'Tap the certificate to see the back'}</span>
        <span className={s.mouse}>{flipped ? 'Showing the back' : 'Hover over the certificate to see the back'}</span>
      </p>
    </div>
  );
}
