'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEnquiry } from '@/components/layout/EnquiryProvider';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { FramedImage } from '@/components/ui/FramedImage';
import { Icon } from '@/components/ui/Icon';
import { programs, specializationHref } from '@/data/programs';
import s from './ProgramsBand.module.scss';

type Rect = readonly [number, number, number, number];

// Photo frame/box per card, design px (frame = clipped image area, box = where the design draws the full photo)
const photos: Record<string, { frame: Rect; box: Rect }> = {
  mca: { frame: [112, 3010, 525, 173], box: [112.1, 3009.4, 524.8, 252] },
  mba: { frame: [695, 3010, 525, 173], box: [693.9, 3013, 527.3, 174] },
  bba: { frame: [1279, 3010, 525, 173], box: [1279.3, 3014, 524.4, 173.2] },
  bca: { frame: [112, 3456, 525, 173], box: [112, 3459.7, 524.9, 234.3] },
  bcom: { frame: [691, 3456, 525, 173], box: [691, 3446.9, 525, 238.9] },
};

const order = ['mca', 'mba', 'bba', 'bca', 'bcom'] as const;

export function ProgramsBand({
  id = 'programs',
  eyebrow = 'Programs',
  title = (
    <>
      Which Programme are you
      <br />
      Looking for?
    </>
  ),
  lead = 'Explore flexible, industry-relevant online degrees from Dayananda Sagar University. Start by choosing the programme you are looking for, then explore the details when you\'re ready.',
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: string;
} = {}) {
  const { open } = useEnquiry();
  return (
    <section className={s.band} id={id}>
      <div className={s.inner}>
        <header className={s.head}>
          <div>
            {eyebrow && <p className={s.eyebrow}>{eyebrow}</p>}
            <h2>{title}</h2>
          </div>
          {lead && <p className={s.lead}>{lead}</p>}
        </header>

        <div className={s.grid}>
          {order.map((code) => {
            const p = programs.find((x) => x.code === code)!;
            const ph = photos[code];
            return (
              <article key={code} className={s.card}>
                <div className={s.media}>
                  <FramedImage
                    src={`/images/programs/${code}.webp`}
                    alt={`Learner pursuing ${p.name} online`}
                    frame={[0, 0, 525, 173]}
                    box={[ph.box[0] - ph.frame[0], ph.box[1] - ph.frame[1], ph.box[2], ph.box[3]]}
                    flip={code === 'bcom'}
                    sizes="(max-width: 900px) 100vw, 525px"
                  />
                  <span className={s.emi}>
                    <b>0%</b>
                    <i>
                      ZERO
                      <small>COST EMI</small>
                    </i>
                  </span>
                </div>
                <h3>
                  <Link href={p.href}>{p.name}</Link>
                </h3>
                <p className={s.full}>{p.fullName}</p>
                <ul className={s.meta}>
                  <li>
                    <Icon name="mini-online" />
                    Fully Online
                  </li>
                  <li>
                    <Icon name="mini-years" />
                    {p.duration}
                  </li>
                  <li>
                    <Icon name="mini-fee" />
                    <span>
                      1st Sem Fee : <b>INR {p.firstSemFee}</b>
                    </span>
                  </li>
                </ul>
                <div className={s.foot}>
                  <Link href={p.href} className={s.explore} aria-label={`Explore ${p.name} - ${p.fullName} Program`}>
                    Explore Program &gt;
                  </Link>
                  <ArrowLink
                    type="button"
                    variant="ghost"
                    className={s.apply}
                    onClick={() => open(code)}
                    aria-label={`Apply Now for ${p.name}`}
                  >
                    Apply Now
                  </ArrowLink>
                </div>

                {/* hover / keyboard-focus detail panel; hidden (and not tabbable) at rest */}
                <div className={s.detail}>
                  <Image src={`/images/programs/${code}.webp`} alt="" fill sizes="(max-width: 900px) 100vw, 525px" className={s.detailBg} />
                  <div className={s.detailTop}>
                    <div>
                      <p className={s.detailName}>{p.name}</p>
                      <p className={s.detailFull}>
                        {p.lines[0]}
                        <br />
                        {p.lines[1]}
                      </p>
                    </div>
                    <ul className={s.detailMeta}>
                      <li>
                        <Icon name="mini-online" />
                        Fully Online
                      </li>
                      <li>
                        <Icon name="mini-years" />
                        {p.duration}
                      </li>
                      <li>
                        <Icon name="mini-fee" />
                        <span>
                          1st Sem Fee : <b>INR {p.firstSemFee}</b>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className={s.detailLabel}>Top Specialization</p>
                  <ul className={s.chips}>
                    {p.specializations.slice(0, 4).map((sp) => (
                      <li key={sp.slug}>
                        <Link href={specializationHref(p, sp)}>{sp.name}</Link>
                      </li>
                    ))}
                    {p.specializations.length > 4 && (
                      <li>
                        <Link href={p.href} className={s.more}>
                          More +
                        </Link>
                      </li>
                    )}
                  </ul>
                  <div className={s.detailBtns}>
                    <ArrowLink href={p.href}>Know More</ArrowLink>
                    <ArrowLink
                      href="/docs/dsu-online-brochure.pdf"
                      download={`DSU-Online-${code.toUpperCase()}-Brochure.pdf`}
                      variant="outline"
                    >
                      Download Brochure
                    </ArrowLink>
                  </div>
                </div>
              </article>
            );
          })}

          <article className={`${s.card} ${s.cta}`}>
            <div className={s.ctaMedia}>
              <FramedImage src="/images/programs/cta.webp" frame={[0, 0, 525, 393]} box={[-47.2, 0, 619.5, 412.7]} sizes="(max-width: 900px) 100vw, 525px" />
              <div className={s.ctaShade} />
              <div className={s.ctaBody}>
                <h3>
                  Transform Your Career
                  <br />
                  with DSU Online
                </h3>
                <p>
                  Pursue a recognized online degree while balancing your work, personal commitments, and academic aspirations with complete
                  flexibility.
                </p>
                <div className={s.ctaBtns}>
                  <ArrowLink href="/online-mba" variant="dark">
                    Explore Programs
                  </ArrowLink>
                  <ArrowLink type="button" onClick={() => open()}>
                    Apply Now
                  </ArrowLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
