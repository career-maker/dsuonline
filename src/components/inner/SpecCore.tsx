import { CardSlider } from '@/components/ui/CardSlider';
import type { SpecExtra } from '@/data/spec-extras';
import s from './SpecCore.module.scss';

/**
 * "Core course" block on a specialisation page: summary, course at a glance, key topics, objective -> outcome pairs.
 * On phones "at a glance" and "objective to outcome" are auto-scrolling carousels and the topic chips collapse to a two-row strip.
 */
export function SpecCore({ core, credits }: { core: NonNullable<SpecExtra['core']>; credits?: number }) {
  return (
    <div className={s.core}>
      <div className={s.top}>
        <div>
          <p className={s.eyebrow}>Core course</p>
          <h2>{core.title}</h2>
          <p className={s.text}>{core.text}</p>
        </div>
        <dl className={s.card}>
          {credits ? (
            <div className={s.big}>
              <dt>Credits</dt>
              <dd>{credits}</dd>
            </div>
          ) : null}
          <div>
            <dt>Course objectives</dt>
            <dd>{core.objectives.length}</dd>
          </div>
          <div>
            <dt>Course outcomes</dt>
            <dd>{core.outcomes.length}</dd>
          </div>
          <div>
            <dt>Key topics</dt>
            <dd>{core.topics.length}</dd>
          </div>
        </dl>
      </div>

      <div className={s.panel}>
        <h3>Course at a glance</h3>
        <ol className={`${s.glance} ${s.desk}`}>
          {core.glance.map((g, i) => (
            <li key={g.title}>
              <small>{String(i + 1).padStart(2, '0')}</small>
              <b>{g.title}</b>
              <span>{g.text}</span>
            </li>
          ))}
        </ol>
        <div className={s.mob}>
          <CardSlider
            label="Course at a glance"
            slideWidth="78%"
            autoplay
            items={core.glance.map((g, i) => (
              <div key={g.title} className={s.gSlide}>
                <span className={s.gNo} aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <b>{g.title}</b>
                  <span>{g.text}</span>
                </div>
              </div>
            ))}
          />
        </div>
      </div>

      <div className={`${s.panel} ${s.topicsPanel}`}>
        <h3>Explore the topics</h3>
        <ul className={s.chips}>
          {core.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <div className={s.panel}>
        <h3>From objective to outcome</h3>
        <ol className={`${s.pairs} ${s.desk}`}>
          {core.objectives.map((o, i) => (
            <li key={o.verb}>
              <div className={s.obj}>
                <small>Course objective {i + 1}</small>
                <p>
                  <mark>{o.verb}</mark> {o.text}
                </p>
              </div>
              <span className={s.arrow} aria-hidden="true">
                →
              </span>
              <div className={s.out}>
                <small>Course outcome {i + 1}</small>
                <p>
                  <mark>{core.outcomes[i].verb}</mark> {core.outcomes[i].text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className={s.mob}>
          <CardSlider
            label="From objective to outcome"
            slideWidth="86%"
            autoplay
            items={core.objectives.map((o, i) => (
              <div key={o.verb} className={s.pSlide}>
                <div className={s.obj}>
                  <small>Course objective {i + 1}</small>
                  <p>
                    <mark>{o.verb}</mark> {o.text}
                  </p>
                </div>
                <span className={s.pArrow} aria-hidden="true">
                  ↓
                </span>
                <div className={s.out}>
                  <small>Course outcome {i + 1}</small>
                  <p>
                    <mark>{core.outcomes[i].verb}</mark> {core.outcomes[i].text}
                  </p>
                </div>
              </div>
            ))}
          />
        </div>
      </div>
    </div>
  );
}
