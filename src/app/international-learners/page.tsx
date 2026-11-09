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
import { TimeZones } from '@/components/international/TimeZones';
import { worldCountries } from '@/components/international/world-data';
import { site } from '@/data/site';
import s from '@/components/international/International.module.scss';

export const metadata: Metadata = {
  title: 'International Learners',
  description: 'Earn a UGC-entitled degree from Dayananda Sagar University, 100% online, from anywhere in the world.',
};

const img = (n: string) => `/images/international/${n}.webp`;
const [lead, ...rest] = usps;

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
            <div className={s.badges}>
              <Image src="/images/brand/naac-light.webp" alt="NAAC A+ grade accredited" width={147} height={50} />
              <i aria-hidden="true" />
              <Image src="/images/brand/ugc.webp" alt="UGC Entitled" width={101} height={51} />
              <i aria-hidden="true" />
              <Image src="/images/brand/legacy-light.webp" alt="Legacy since the 1960s" width={58} height={51} />
            </div>
          </div>
          <HeroMap>
            {worldCountries.map(([n, d, c, home]) => (
              <path key={n} data-n={n} data-c={c >= 0 ? c : undefined} d={d} className={home ? `${s.st} ${s.home}` : c >= 0 ? `${s.st} ${s.listed}` : s.st} />
            ))}
          </HeroMap>
        </div>
      </section>

      {/* WHY */}
      <section className={`${s.sec} ${s.white}`} id="why">
        <div className={`${s.wrap} ${s.why}`}>
          <div className={s.whyAside}>
            <div data-reveal>
              <p className={s.eyebrow}>Why DSU Online</p>
              <h2>Why learners worldwide choose DSU Online</h2>
              <p className={s.sub}>Everything you need to earn a respected degree — without putting your career, family or country on hold.</p>
            </div>
            <div className={s.whyPhoto} data-clip>
              <Image src={img('usp-degree')} alt="Graduates celebrating their degree" fill sizes="(max-width: 1200px) 100vw, 36vw" />
            </div>
          </div>
          <div className={s.whyMain}>
            <div className={s.whyLead} data-reveal>
              <h3>{lead.title}</h3>
              <p>{lead.text}</p>
            </div>
            <dl className={s.facts} data-stagger>
              {rest.map((u) => (
                <div key={u.title}>
                  <dt>{u.title}</dt>
                  <dd>{u.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* LEARN ANYWHERE */}
      <section className={`${s.sec} ${s.anywhere}`} id="learn">
        <div className={s.wrap}>
          <div className={s.split} data-reveal>
            <div>
              <p className={s.eyebrow}>Built for every time zone</p>
              <h2>Your classroom opens wherever you are</h2>
            </div>
            <p className={s.sub}>Live lectures run on weekends; everything else is self-paced and open 24/7. Your learning fits your life — not the other way round.</p>
          </div>
          <TimeZones />
          <div className={s.modes} data-stagger>
            {modes.map((m) => (
              <div key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENGALURU TO THE WORLD */}
      <section className={`${s.sec} ${s.sky}`} id="world">
        <div className={s.wrap}>
          <div className={s.split} data-reveal>
            <div>
              <p className={s.eyebrow}>Rooted in Bengaluru · Open to every continent</p>
              <h2>From Bengaluru to learners worldwide</h2>
            </div>
            <p className={s.sub}>Dayananda Sagar University is based in Bengaluru, Karnataka. With DSU Online, your classroom reaches you on any continent. Select a continent to trace its route on the map above.</p>
          </div>
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
      <section className={`${s.sec} ${s.grey}`} id="programs">
        <div className={s.wrap}>
          <div className={s.split} data-reveal>
            <div>
              <p className={s.eyebrow}>Programs</p>
              <h2>Choose your path</h2>
            </div>
            <p className={s.sub}>Undergraduate and postgraduate degrees with electives employers are looking for.</p>
          </div>
          <ul className={s.progList} data-stagger>
            {intlPrograms.map((p) => (
              <li key={p.code}>
                <article className={s.prog}>
                  <Link href={p.href} className={s.progPhoto} aria-label={`${p.cta} - ${p.title} programme page`} tabIndex={-1}>
                    <Image src={img(p.code)} alt={p.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 20vw" />
                  </Link>
                  <span className={s.lvl}>{p.level}</span>
                  <h3 className={s.progTitle}>{p.title}</h3>
                  <p className={s.progText}>{p.text}</p>
                  <p className={s.progElectives}>{p.chips.join(' · ')}</p>
                  <div className={s.progAct}>
                    <ArrowLink href={p.href}>{p.cta}</ArrowLink>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <div className={s.advisor} data-reveal>
            <div>
              <h3>Not sure where to start?</h3>
              <p>Get free counselling on the right program and elective for your goals and country.</p>
            </div>
            <ArrowLink href="#apply">Request a callback</ArrowLink>
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className={`${s.sec} ${s.compact} ${s.white}`} id="admissions">
        <div className={s.wrap}>
          <div className={s.split} data-reveal>
            <div>
              <p className={s.eyebrow}>Admissions</p>
              <h2>Four steps, fully online</h2>
            </div>
            <p className={s.sub}>Apply from your home country — no paperwork to post, no offices to visit.</p>
          </div>
          <ol className={s.steps} data-stagger>
            {steps.map((st, i) => (
              <li key={st.title}>
                <span className={s.stepNo}>{i + 1}</span>
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
      </section>

      {/* ALUMNI */}
      <section className={s.alumni}>
        <Image src={img('alumni')} alt="" fill sizes="100vw" />
        <div className={s.alumniShade} aria-hidden="true" />
        <div className={`${s.wrap} ${s.alumniCopy}`} data-reveal>
          <h2>Graduate with a name that opens doors</h2>
          <p>When you complete your online degree, you join the Dayananda Sagar University alumni family — recognised across India and connected to professionals worldwide.</p>
          <ArrowLink href="#apply" className={s.alumniBtn}>
            Join the DSU Community
          </ArrowLink>
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.sec} ${s.cta}`} id="apply">
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
