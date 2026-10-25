'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { PlayIcon } from '@/components/ui/icons';
import s from './Learning.module.scss';

/** Poster tile that swaps to a YouTube player and starts playing (muted, as browsers require) once it scrolls into view. */
export function VideoTile({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting && e.intersectionRatio >= 0.5), { threshold: [0, 0.5, 1] });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const playing = on || manual;
  const src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1`;

  return (
    <div ref={box} className={s.videoBox}>
      {children}
      {playing ? (
        <iframe className={s.player} src={src} title={title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
      ) : (
        <button type="button" className={s.play} onClick={() => setManual(true)} aria-label={`Play video: ${title}`}>
          <PlayIcon />
        </button>
      )}
    </div>
  );
}
