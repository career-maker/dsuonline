'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CardSlider } from '@/components/ui/CardSlider';
import type { Testimonial } from '@/data/testimonials';
import s from './FaqStories.module.scss';

function Story({ t }: { t: Testimonial }) {
  const [more, setMore] = useState(false);
  const dept = [t.course, t.company].filter(Boolean).join(' · ');
  return (
    <figure className={s.card}>
      <blockquote>
        <p className={more ? s.open : s.q}>{t.quote}</p>
        <button type="button" aria-expanded={more} onClick={() => setMore((m) => !m)}>
          {more ? 'Show less' : 'Show more'}
        </button>
      </blockquote>
      <figcaption>
        <span className={s.av}>{t.img ? <Image src={t.img} alt="" fill sizes="56px" /> : <b aria-hidden="true">{t.name.replace(/^(Mr|Ms|Mrs|Dr)\.?\s*/i, '').charAt(0)}</b>}</span>
        <span>
          <strong>{t.name}</strong>
          {dept && <em>{dept}</em>}
        </span>
      </figcaption>
    </figure>
  );
}

/** Learner stories for the programme-page FAQ section: one card per slide, auto-advancing. */
export function FaqStories({ items }: { items: Testimonial[] }) {
  return (
    <div className={s.wrap}>
      <p className={s.eyebrow}>Learner stories</p>
      <h2>What our learners say</h2>
      <CardSlider label="Learner stories" slideWidth="100%" gap={16} autoplay items={items.map((t) => <Story key={t.name} t={t} />)} />
    </div>
  );
}
