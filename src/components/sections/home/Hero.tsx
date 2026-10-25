'use client';

import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useId, useState, type FormEvent } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { ChevronDown } from '@/components/ui/icons';
import { heroSlides } from '@/data/home';
import { programs, specializationHref } from '@/data/programs';
import { site } from '@/data/site';
import s from './Hero.module.scss';

// object-position that reproduces the design's crop of each slide
const slidePos = ['100% 25%', '0% 25%'] as const;
const slideSize = [
  [2069, 987],
  [1860, 906],
] as const;

export function Hero() {
  const router = useRouter();
  const uid = useId();
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState<(typeof programs)[number]['code']>('mba');
  const [spec, setSpec] = useState('');
  const go = (d: number) => setActive((i) => (i + d + heroSlides.length) % heroSlides.length);
  const program = programs.find((p) => p.code === code)!;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 8000);
    return () => clearInterval(t);
  }, []);

  // Prototype behaviour: no backend yet (Strapi/CRM phase), so the form only confirms locally.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const explore = (e: FormEvent) => {
    e.preventDefault();
    const sp = program.specializations.find((x) => x.slug === spec);
    router.push(sp ? specializationHref(program, sp) : program.href);
  };

  return (
    <section className={s.hero} aria-roledescription="carousel" aria-label="Featured">
      {heroSlides.map((slide, i) => {
        const desktop = getImageProps({ src: slide.desktop, alt: '', width: slideSize[i][0], height: slideSize[i][1], sizes: '110vw', priority: i === 0 }).props;
        const mobile = getImageProps({ src: slide.mobile, alt: '', width: 790, height: 987, sizes: '100vw', priority: i === 0 }).props;
        return (
          <div key={slide.desktop} className={`${s.bg} ${i === active ? s.bgOn : ''}`} aria-hidden={i !== active}>
            <picture>
              <source media="(max-width: 759.98px)" srcSet={mobile.srcSet} />
              <img {...desktop} alt="" className={i ? s.slide1 : s.slide0} style={{ objectPosition: slidePos[i] }} />
            </picture>
          </div>
        );
      })}
      <div className={s.shade} />

      <button type="button" className={`${s.arrow} ${s.prev}`} onClick={() => go(-1)} aria-label="Previous slide">
        <Image src="/icons/arrow-l-white.png" alt="" width={23} height={40} />
      </button>
      <button type="button" className={`${s.arrow} ${s.next}`} onClick={() => go(1)} aria-label="Next slide">
        <Image src="/icons/arrow-r-white.png" alt="" width={23} height={40} />
      </button>

      <div className={s.layout}>
      <div className={s.copy}>
        <div className={s.badges}>
          <Image className={s.naac} src="/images/brand/naac-light.png" alt="NAAC A+ grade accredited" width={294} height={100} />
          <i aria-hidden="true" />
          <Image className={s.ugc} src="/images/brand/ugc.png" alt="UGC Entitled" width={202} height={103} />
          <i aria-hidden="true" />
          <Image className={s.legacy} src="/images/brand/legacy-light.png" alt="7 decades legacy in education and healthcare" width={116} height={103} />
        </div>
        {/* re-keyed on every slide change so the headline re-plays its word-by-word rise */}
        <h1 key={`t${active}`} className={s.title} aria-label="Your Degree. Your Pace. Your Future.">
          {[['Your', 'Degree.', 'Your', 'Pace.'], ['Your', 'Future.']].map((line, li) => (
            <span key={li} className={s.line} aria-hidden="true">
              {line.map((w, wi) => (
                <span key={wi} className={s.tw}>
                  <span className={s.twi} style={{ '--i': li * 4 + wi } as React.CSSProperties}>
                    {w}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p key={`p${active}`} className={s.sub}>
          Pursue a UGC-entitled online degree from Dayananda Sagar{' '}
          <br />
          University with the freedom to learn anytime, anywhere.
        </p>
        <div className={s.ctas}>
          <ArrowLink href="/online-mba" variant="dark">
            Explore Programs
          </ArrowLink>
          <ArrowLink href={site.apply} external>
            Apply Now
          </ArrowLink>
        </div>
      </div>

      <div className={s.panels}>
      <form className={s.enquiry} onSubmit={submit} aria-labelledby={`${uid}-t1`}>
        <h2 id={`${uid}-t1`}>What Programme are you Looking for?</h2>
        <p>Choose a programme or search by degree, specialisation or course.</p>
        {sent ? (
          <p className={s.sent} role="status">
            Thank you. This is a prototype form: your details were not sent anywhere yet.
          </p>
        ) : (
          <>
            <input className={s.f1} name="name" type="text" autoComplete="name" placeholder="Name *" aria-label="Name" required />
            <input className={s.f2} name="email" type="email" autoComplete="email" placeholder="Email *" aria-label="Email" required />
            <div className={s.f3}>
              <span className={s.flag} aria-hidden="true" />
              <ChevronDown />
              <span className={s.cc}>+91</span>
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="000 000 0000" aria-label="Mobile number" pattern="[0-9 ]{10,13}" required />
            </div>
            <input className={s.f4} name="otp" type="text" inputMode="numeric" placeholder="Enter OTP *" aria-label="OTP" required />
            <div className={`${s.sel} ${s.f5}`}>
              <select name="programme" aria-label="Programme" defaultValue="" required>
                <option value="" disabled>
                  Select a Programme...
                </option>
                {programs.map((p) => (
                  <option key={p.code} value={p.code}>
                    {p.name} - {p.fullName}
                  </option>
                ))}
              </select>
              <ChevronDown />
            </div>
            <div className={`${s.sel} ${s.f6}`}>
              <select name="state" aria-label="State" defaultValue="" required>
                <option value="" disabled>
                  Select State
                </option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Telangana</option>
                <option>Andhra Pradesh</option>
                <option>Maharashtra</option>
                <option>Other</option>
              </select>
              <ChevronDown />
            </div>
            <div className={`${s.sel} ${s.f7}`}>
              <select name="city" aria-label="City" defaultValue="" required>
                <option value="" disabled>
                  Select City
                </option>
                <option>Bengaluru</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
                <option>Kochi</option>
                <option>Mumbai</option>
                <option>Other</option>
              </select>
              <ChevronDown />
            </div>
            <ArrowLink type="submit" className={s.submit}>
              Submit
            </ArrowLink>
          </>
        )}
      </form>

      <form className={s.finder} onSubmit={explore} aria-labelledby={`${uid}-t2`}>
        <h2 id={`${uid}-t2`}>What Programme are you Looking for?</h2>
        <p>Choose a programme or search by degree, specialisation or course.</p>
        <div className={s.chips} role="radiogroup" aria-label="Programme">
          {programs.map((p) => (
            <button
              key={p.code}
              type="button"
              role="radio"
              aria-checked={p.code === code}
              className={p.code === code ? s.chipOn : undefined}
              onClick={() => {
                setCode(p.code);
                setSpec('');
              }}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div className={`${s.sel} ${s.spec}`}>
          <select aria-label="Specialization" value={spec} onChange={(e) => setSpec(e.target.value)}>
            <option value="">Select a Specialization..</option>
            {program.specializations.map((sp) => (
              <option key={sp.slug} value={sp.slug}>
                {sp.name}
              </option>
            ))}
          </select>
          <ChevronDown />
        </div>
        <ArrowLink type="submit" variant="dark" className={s.explore}>
          Explore
        </ArrowLink>
        <p className={s.notSure}>
          Not Sure Which Programme is Right for you? <Link href="/contact-us">Enquire Now</Link>
        </p>
      </form>
      </div>
      </div>
    </section>
  );
}
