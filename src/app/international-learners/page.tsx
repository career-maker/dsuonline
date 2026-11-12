import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { CallbackForm } from '@/components/international/CallbackForm';
import { ContinentCards } from '@/components/international/ContinentCards';
import { compare, intlPrograms, modes, parChecks, steps, usps } from '@/components/international/data';
import { HeroMap } from '@/components/international/HeroMap';
import { Ico } from '@/components/international/Ico';
import { IntlMotion } from '@/components/international/IntlMotion';
import { Rail } from '@/components/international/Rail';
import { TimeZones } from '@/components/international/TimeZones';
import { site } from '@/data/site';
import s from '@/components/international/International.module.scss';

export const metadata: Metadata = {
  title: 'International Learners',
  description: 'Earn a UGC-entitled degree from Dayananda Sagar University, 100% online, from anywhere in the world.',
};

const img = (n: string) => `/images/international/${n}.webp`;
const tints = ['cyan', 'sky', 'violet', 'blue'];

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
            <p className={`${s.eyebrow} ${s.heroEyebrow}`}>Dayananda Sagar University · Bengaluru, India</p>
            <h1>
              <span>An Indian degree that</span> <span><em>travels</em> with you.</span>
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
            <div className={s.badges}>
              <Image src="/images/brand/naac.webp" alt="NAAC A+ grade accredited" width={294} height={100} />
              <Image src="/images/brand/ugc.webp" alt="UGC Entitled" width={202} height={103} />
              <Image src="/images/brand/legacy.webp" alt="Legacy since the 1960s" width={116} height={103} />
            </div>
          </div>
          <HeroMap />
        </div>
      </section>

      {/* WHY */}
      <section className={`${s.sec} ${s.white}`} id="why">
        <div className={s.wrap}>
          <div className={`${s.head} ${s.center}`} data-reveal>
            <p className={s.eyebrow}>Why DSU Online</p>
            <h2>Why learners worldwide choose DSU Online</h2>
            <p className={s.sub}>Everything you need to earn a respected degree — without putting your career, family or country on hold.</p>
          </div>
          <Rail className={s.uspGrid} label="reason" stagger>
            {usps.map((u, i) =>
              u.feature ? (
                <li key={u.title} className={`${s.usp} ${s.feature}`}>
                  <Image src={img(u.feature.img)} alt={u.feature.alt} fill sizes="(max-width: 760px) 90vw, 50vw" />
                  <div className={s.uspInner}>
                    <span className={s.ico}>
                      <Ico name={u.icon} />
                    </span>
                    <h3>{u.title}</h3>
                    <p>{u.text}</p>
                    <span className={s.tag}>{u.feature.tag}</span>
                  </div>
                </li>
              ) : (
                <li key={u.title} className={`${s.usp} ${s[tints[(i - 1) % 4]]}`}>
                  <span className={s.ico}>
                    <Ico name={u.icon} />
                  </span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </li>
              ),
            )}
          </Rail>
        </div>
      </section>

      {/* LEARN ANYWHERE */}
      <section className={`${s.sec} ${s.anywhere}`} id="learn">
        <Image src={img('anywhere')} alt="" fill sizes="100vw" className={s.bgImg} />
        <div className={s.bgShade} aria-hidden="true" />
        <div className={`${s.wrap} ${s.above}`}>
          <div className={s.head} data-reveal>
            <p className={s.eyebrow}>Built for every time zone</p>
            <h2>Your classroom opens wherever you are</h2>
            <p className={s.sub}>Live lectures run on weekends; everything else is self-paced and open 24/7. Your learning fits your life — not the other way round.</p>
          </div>
          <TimeZones />
          <Rail className={s.modes} label="learning mode" stagger>
            {modes.map((m) => (
              <li key={m.title} className={s.mode}>
                <span className={s.ico}>
                  <Ico name={m.icon} />
                </span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </Rail>
        </div>
      </section>

      {/* BENGALURU TO THE WORLD */}
      <section className={`${s.sec} ${s.white}`} id="world">
        <div className={s.wrap}>
          <div className={`${s.head} ${s.center}`} data-reveal>
            <p className={s.eyebrow}>Rooted in Bengaluru · Open to every continent</p>
            <h2>From Bengaluru to learners worldwide</h2>
            <p className={s.sub}>Dayananda Sagar University is based in Bengaluru, Karnataka. With DSU Online, your classroom reaches you on any continent. Select a continent to trace its route on the map above.</p>
          </div>
          <ContinentCards />
        </div>
      </section>

      {/* AT PAR */}
      <section className={`${s.sec} ${s.compact} ${s.white}`}>
        <div className={`${s.wrap} ${s.par}`}>
          <div data-reveal>
            <p className={s.eyebrow}>Same degree, new way</p>
            <h2>At par with DSU&apos;s on-campus degrees</h2>
            <p className={s.sub}>An online degree from DSU holds the same academic standing as its regular on-campus degree. The only difference is where you sit while you earn it.</p>
            <ul className={s.checks}>
              {parChecks.map((c) => (
                <li key={c}>
                  <span className={s.checkDot}>
                    <Ico name="check" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className={s.parImg} data-clip>
              <Image src={img('par')} alt="Learner studying online from home" fill sizes="(max-width: 1200px) 100vw, 40vw" />
            </div>
          </div>
          <table className={s.compare} data-reveal data-ticks>
            <caption className={s.sr}>DSU Online compared with on-campus study</caption>
            <thead>
              <tr>
                <th scope="col">What you get</th>
                <th scope="col">DSU Online</th>
                <th scope="col">On-Campus</th>
              </tr>
            </thead>
            <tbody>
              {compare.map(([label, both]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>
                    <span className={s.yes} data-tick>
                      <Ico name="check" />
                      <span className={s.sr}>Yes</span>
                    </span>
                  </td>
                  <td>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className={`${s.sec} ${s.soft}`} id="programs">
        <div className={s.wrap}>
          <div className={`${s.head} ${s.center}`} data-reveal>
            <p className={s.eyebrow}>Programs</p>
            <h2>Choose your path</h2>
            <p className={s.sub}>Undergraduate and postgraduate degrees with electives employers are looking for.</p>
          </div>
          <Rail className={s.progList} label="program" stagger>
            {intlPrograms.map((p) => (
              <li key={p.code} className={s.prog}>
                <Link href={p.href} className={s.progPhoto} aria-label={`${p.cta} - ${p.title} programme page`} tabIndex={-1}>
                  <Image src={img(p.code)} alt={p.alt} fill sizes="(max-width: 760px) 90vw, (max-width: 1200px) 50vw, 33vw" />
                </Link>
                <div className={s.progBody}>
                  <span className={s.lvl}>{p.level}</span>
                  <h3 className={s.progTitle}>{p.title}</h3>
                  <p className={s.progText}>{p.text}</p>
                  <ul className={s.chips}>
                    {p.chips.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <Link href={p.href} className={s.go}>
                    {p.cta} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </li>
            ))}
            <li className={`${s.prog} ${s.advisorCard}`}>
              <Image src={img('advisor')} alt="" fill sizes="(max-width: 760px) 90vw, 33vw" className={s.advisorImg} />
              <div className={s.progBody}>
                <span className={s.lvl}>Not sure where to start?</span>
                <h3 className={s.progTitle}>Talk to an advisor</h3>
                <p className={s.progText}>Get free counselling on the right program and elective for your goals and country.</p>
                <a href="#apply" className={s.go}>
                  Request a callback <span aria-hidden="true">→</span>
                </a>
              </div>
            </li>
          </Rail>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className={`${s.sec} ${s.compact} ${s.white}`} id="admissions">
        <div className={s.wrap}>
          <div className={`${s.head} ${s.center}`} data-reveal>
            <p className={s.eyebrow}>Admissions</p>
            <h2>Four steps, fully online</h2>
            <p className={s.sub}>Apply from your home country — no paperwork to post, no offices to visit.</p>
          </div>
          <Rail className={s.steps} label="step" stagger>
            {steps.map((st, i) => (
              <li key={st.title} className={s.step}>
                <span className={s.stepNo}>0{i + 1}</span>
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
          </Rail>
        </div>
      </section>

      {/* ALUMNI */}
      <section className={`${s.sec} ${s.compact} ${s.white} ${s.alumniSec}`}>
        <div className={s.wrap}>
          <div className={s.alumni} data-reveal>
            <Image src={img('alumni')} alt="" fill sizes="100vw" className={s.alumniImg} />
            <div className={s.alumniCopy}>
              <h2>Graduate with a name that opens doors</h2>
              <p>When you complete your online degree, you join the Dayananda Sagar University alumni family — recognised across India and connected to professionals worldwide.</p>
              <ArrowLink href="#apply" className={s.alumniBtn}>
                Join the DSU Community
              </ArrowLink>
            </div>
            <div className={s.seal} aria-hidden="true">
              <div>
                <b>DSU</b>
                <small>Alumni · Worldwide</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.sec} ${s.cta}`} id="apply">
        <Image src={img('hero')} alt="" fill sizes="100vw" className={s.bgImg} />
        <div className={s.bgShade} aria-hidden="true" />
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
