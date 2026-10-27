import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { certifications, whyItems } from '@/data/home';
import s from './WhyChoose.module.scss';

const DEFAULT_COPY =
  'DSU Online empowers learners with flexible, industry-aligned education designed for career growth and academic excellence. Through expert faculty, a future-focused curriculum, and a seamless digital learning experience, students can earn a recognized degree while balancing their personal and professional commitments.';

export function WhyChoose({ title = 'Why Choose DSU Online ?', copy = DEFAULT_COPY }: { title?: string; copy?: string }) {
  return (
    <section className={s.why}>
      <div className={s.inner}>
        <div className={s.left}>
          <h2>{title}</h2>
          <p className={s.copy}>{copy}</p>

          <ul className={s.features}>
            {whyItems.map((w) => (
              <li key={w.icon}>
                <span className={s.fi}>
                  <Icon name={w.icon} />
                </span>
                <span>
                  {w.label[0]}
                  <br />
                  {w.label[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.right}>
          <h2 className={s.certTitle}>Certifications</h2>
          <ul className={s.certs}>
            {certifications.map((c) => (
              <li key={c.kind} className={`${s.cert} ${s[c.kind] ?? ''}`}>
                <span className={s.cimg}>
                  {c.kind === 'ugc' && <Image src="/images/brand/ugc.webp" alt="" width={119} height={61} />}
                  {c.kind === 'naac' && (
                    <>
                      <Image className={s.onLight} src="/images/brand/naac.webp" alt="" width={159} height={54} />
                      <Image className={s.onBlue} src="/images/brand/naac-light.webp" alt="" width={159} height={54} />
                    </>
                  )}
                  {c.kind !== 'ugc' && c.kind !== 'naac' && <Icon name={c.kind} />}
                </span>
                <span className={s.ctext}>
                  {c.label.map((l, i) => (
                    <span key={l}>
                      {i > 0 && <br />}
                      {l}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
