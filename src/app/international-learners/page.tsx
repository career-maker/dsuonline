import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { CallbackForm } from '@/components/international/CallbackForm';
import { ContinentCards } from '@/components/international/ContinentCards';
import { compare, heroBadges, intlPrograms, modes, parChecks, steps, strip, usps } from '@/components/international/data';
import { HeroMap } from '@/components/international/HeroMap';
import { Ico } from '@/components/international/Ico';
import { indiaStates } from '@/components/international/india-paths';
import { IntlMotion } from '@/components/international/IntlMotion';
import { TimeZones } from '@/components/international/TimeZones';
import { site } from '@/data/site';
import s from '@/components/international/International.module.scss';

export const metadata: Metadata = {
  title: 'International Learners',
  description: 'Earn a UGC-entitled degree from Dayananda Sagar University, 100% online, from anywhere in the world.',
};

const img = (n: string) => `/images/international/${n}.webp`;

function Head({ eyebrow, title, text, center, light }: { eyebrow: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`${s.head} ${center ? s.center : ''} ${light ? s.light : ''}`} data-reveal>
      <p className={s.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className={s.sub}>{text}</p>}
    </div>
  );
}

export default function InternationalLearners() {
  return (
    <div className={s.page} data-intl>
      <IntlMotion />

      {/* HERO */}
      <section className={s.hero}>
        <Image src={img('hero')} alt="" fill priority sizes="100vw" className={s.heroImg} />
        <div className={s.heroShade} aria-hidden="true" />
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <nav aria-label="Breadcrumb" className={s.crumbs}>
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span aria-current="page">International Learners</span>
                </li>
              </ol>
            </nav>
            <p className={s.heroEyebrow}>Dayananda Sagar University · Bengaluru, India</p>
            <h1>
              An Indian degree that <em>travels</em> with you.
            </h1>
            <p className={s.heroLead}>
              Earn a UGC-entitled degree from Dayananda Sagar University — 100% online, on your schedule, from any country and any time zone. Keep your job, run your business, stay close to family.
            </p>
            <div className={s.ctas}>
              <ArrowLink href="#apply">Start Your Application</ArrowLink>
              <ArrowLink href="#programs" variant="outline">
                Explore Programs
              </ArrowLink>
            </div>
            <ul className={s.badges}>
              {heroBadges.map((b) => (
                <li key={b}>
                  <i aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <HeroMap>
            {indiaStates.map(([n, d]) => (
              <path key={n} data-n={n} d={d} className={n === 'Karnataka' ? `${s.st} ${s.ka}` : s.st} />
            ))}
          </HeroMap>
        </div>
      </section>

      {/* STRIP */}
      <div className={s.strip} aria-hidden="true">
        <div className={s.stripTrack}>
          {[...strip, ...strip].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* WHY */}
      <section className={`${s.sec} ${s.white}`} id="why">
        <div className={s.wrap}>
          <Head center eyebrow="Why DSU Online" title="Why learners worldwide choose DSU Online" text="Everything you need to earn a respected degree — without putting your career, family or country on hold." />
          <div className={s.uspGrid} data-stagger>
            {usps.map((u) =>
              u.feature ? (
                <article key={u.title} className={`${s.usp} ${s.feature}`}>
                  <Image src={img(u.feature.img)} alt={u.feature.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  <div className={s.uspBody}>
                    <span className={s.ico}>
                      <Ico name={u.icon} />
                    </span>
                    <h3>{u.title}</h3>
                    <p>{u.text}</p>
                    <span className={s.tag}>{u.feature.tag}</span>
                  </div>
                </article>
              ) : (
                <article key={u.title} className={s.usp}>
                  <span className={s.ico}>
                    <Ico name={u.icon} />
                  </span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* LEARN ANYWHERE */}
      <section className={`${s.sec} ${s.anywhere}`} id="learn">
        <div className={s.bgPhoto} aria-hidden="true">
          <div className={s.plx} data-parallax>
            <Image src={img('anywhere')} alt="" fill sizes="100vw" />
          </div>
        </div>
        <div className={s.wrap}>
          <Head light eyebrow="Built for every time zone" title="Your classroom opens wherever you are" text="Live lectures run on weekends; everything else is self-paced and open 24/7. Your learning fits your life — not the other way round." />
          <TimeZones />
          <div className={s.modes} data-stagger>
            {modes.map((m) => (
              <div key={m.title} className={s.mode}>
                <span className={s.ico}>
                  <Ico name={m.icon} />
                </span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENGALURU TO THE WORLD */}
      <section className={`${s.sec} ${s.sky}`} id="world">
        <div className={s.wrap}>
          <Head center eyebrow="Rooted in Bengaluru · Open to every continent" title="From Bengaluru to learners worldwide" text="Dayananda Sagar University is based in Bengaluru, Karnataka. With DSU Online, your classroom reaches you on any continent. Select a continent to trace its route on the map above." />
          <ContinentCards />
        </div>
      </section>

      {/* AT PAR */}
      <section className={`${s.sec} ${s.white}`}>
        <div className={`${s.wrap} ${s.par}`}>
          <div data-reveal>
            <p className={s.eyebrow}>Same degree, new way</p>
            <h2>At par with DSU&apos;s on-campus degrees</h2>
            <p className={s.sub}>An online degree from DSU holds the same academic standing as its regular on-campus degree. The only difference is where you sit while you earn it.</p>
            <ul className={s.checks}>
              {parChecks.map((c) => (
                <li key={c}>
                  <Ico name="check" />
                  {c}
                </li>
              ))}
            </ul>
            <div className={s.parImg}>
              <div className={s.plx} data-parallax>
                <Image src={img('par')} alt="Learner studying online from home" fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
            </div>
          </div>
          <div className={s.compare} data-reveal data-ticks role="table" aria-label="DSU Online compared with on-campus study">
            <div className={`${s.row} ${s.rowHead}`} role="row">
              <div role="columnheader">What you get</div>
              <div role="columnheader">DSU Online</div>
              <div role="columnheader">On-Campus</div>
            </div>
            {compare.map(([label, both]) => (
              <div key={label} className={s.row} role="row">
                <div role="cell">{label}</div>
                <div role="cell">
                  <span className={s.yes} data-tick>
                    <Ico name="check" />
                    <span className={s.sr}>Yes</span>
                  </span>
                </div>
                <div role="cell">
                  {both ? (
                    <span className={s.yes} data-tick>
                      <Ico name="check" />
                      <span className={s.sr}>Yes</span>
                    </span>
                  ) : (
                    <span className={s.no}>
                      —<span className={s.sr}>No</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className={`${s.sec} ${s.grey}`} id="programs">
        <div className={s.wrap}>
          <Head center eyebrow="Programs" title="Choose your path" text="Undergraduate and postgraduate degrees with electives employers are looking for." />
          <div className={s.progGrid} data-stagger>
            {intlPrograms.map((p) => (
              <article key={p.code} className={s.prog}>
                <div className={s.progPhoto}>
                  <Image src={img(p.code)} alt={p.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                </div>
                <div className={s.progBody}>
                  <span className={s.lvl}>{p.level}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul className={s.chipList}>
                    {p.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <Link href={p.href} className={s.go} aria-label={`${p.cta} - ${p.title} programme page`}>
                    {p.cta} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
            <article className={`${s.prog} ${s.advisor}`}>
              <Image src={img('advisor')} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <div className={s.progBody}>
                <span className={s.lvl}>Not sure where to start?</span>
                <h3>Talk to an advisor</h3>
                <p>Get free counselling on the right program and elective for your goals and country.</p>
                <a href="#apply" className={s.go}>
                  Request a callback <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className={`${s.sec} ${s.white}`} id="admissions">
        <div className={s.wrap}>
          <Head center eyebrow="Admissions" title="Four steps, fully online" text="Apply from your home country — no paperwork to post, no offices to visit." />
          <div className={s.stepsWrap}>
            <div className={s.stepsLine} aria-hidden="true">
              <i data-draw />
            </div>
            <ol className={s.steps} data-stagger>
              {steps.map((st, i) => (
                <li key={st.title} className={i === steps.length - 1 ? s.last : ''}>
                  <span className={s.stepNo}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{st.title}</h3>
                  <p>
                    {st.text}
                    {st.link && (
                      <>
                        {' '}
                        <a href={site.apply} target="_blank" rel="noopener noreferrer">
                          {st.link}
                        </a>
                        .
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ALUMNI */}
      <section className={`${s.white} ${s.alumniSec}`}>
        <div className={s.wrap}>
          <div className={s.alumni} data-reveal>
            <Image src={img('alumni')} alt="" fill sizes="100vw" />
            <div className={s.alumniShade} aria-hidden="true" />
            <div className={s.alumniCopy}>
              <h2>Graduate with a name that opens doors</h2>
              <p>When you complete your online degree, you join the Dayananda Sagar University alumni family — recognised across India and connected to professionals worldwide.</p>
              <ArrowLink href="#apply" className={s.alumniBtn}>
                Join the DSU Community
              </ArrowLink>
            </div>
            <div className={s.seal} aria-hidden="true">
              <b>DSU</b>
              <small>Alumni · Worldwide</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.sec} ${s.cta}`} id="apply">
        <div className={s.bgPhoto} aria-hidden="true">
          <Image src={img('cta')} alt="" fill sizes="100vw" />
        </div>
        <div className={`${s.wrap} ${s.ctaGrid}`}>
          <div data-reveal>
            <p className={s.eyebrow}>Talk to an advisor</p>
            <h2>Ready to earn your DSU degree from abroad?</h2>
            <p className={s.sub}>
              Share a few details and our admissions team will help you choose the right program, explain eligibility for your country, and walk you through fees and timelines.
            </p>
            <div className={s.ctaActions}>
              <a href={`tel:${site.phone}`} className={s.call}>
                <Ico name="phone" />
                {site.phoneLabel}
              </a>
              <ArrowLink href={site.apply} external>
                Apply Online
              </ArrowLink>
            </div>
            <p className={s.perks}>24x7 chat support · Dedicated placement cell · Skill enhancement workshops</p>
          </div>
          <CallbackForm />
        </div>
      </section>
    </div>
  );
}
