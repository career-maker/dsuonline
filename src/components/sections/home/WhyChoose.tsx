import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { certifications, whyItems } from '@/data/home';
import s from './WhyChoose.module.scss';

const DEFAULT_COPY =
  'DSU Online empowers learners with flexible, industry-aligned education designed for career growth and academic excellence. Through expert faculty, a future-focused curriculum, and a seamless digital learning experience, students can earn a recognized degree while balancing their personal and professional commitments.';

// Used on the home page and the About page (title/copy differ).
export function WhyChoose({ title = 'Why Choose DSU Online ?', copy = DEFAULT_COPY }: { title?: string; copy?: string }) {
  return (
    <section className={s.why}>
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.text}>
            <h2>{title}</h2>
            <p className={s.copy}>{copy}</p>
          </div>
          <div className={s.student}>
            <Image src="/images/why/why-student.webp" alt="" width={1125} height={900} sizes="(min-width: 1200px) 34vw, (min-width: 600px) 60vw, 90vw" />
          </div>
        </div>

        <ul className={s.features}>
          {whyItems.map((w) => (
            <li key={w.icon}>
              <span className={s.fi}>
                <Icon name={w.icon} />
              </span>
              <span className={s.label}>
                {w.label[0]} {w.label[1]}
              </span>
            </li>
          ))}
        </ul>

        <h2 className="sr-only">Certifications</h2>
        <ul className={s.certs}>
          {certifications.map((c) => (
            <li key={c.kind} className={s.cert}>
              <span className={s.cimg}>
                {c.kind === 'ugc' && <Image src="/images/brand/ugc.webp" alt="" width={119} height={61} />}
                {c.kind === 'naac' && <Image src="/images/brand/naac.webp" alt="" width={159} height={54} />}
                {c.kind !== 'ugc' && c.kind !== 'naac' && <Icon name={c.kind} />}
              </span>
              <span className={s.ctext}>{c.label.join(' ')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
