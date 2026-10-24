import Image from 'next/image';
import Link from 'next/link';
import { programs, specializationHref } from '@/data/programs';
import { footerColumns, site } from '@/data/site';
import { BrochureForm } from './BrochureForm';
import { FooterGroup } from './FooterGroup';
import s from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={s.footer} data-u>
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.brand}>
            <Link href="/" aria-label="Dayananda Sagar University Online - home">
              <Image src="/images/brand/logo-dark.png" alt="Dayananda Sagar University Online" width={401} height={80} />
            </Link>
            <address>Kudlu Gate, Hosur Road, Bengaluru - 560 114</address>
            <ul className={s.social}>
              {site.social.map((x) => (
                <li key={x.name}>
                  <a href={x.href} target="_blank" rel="noopener noreferrer" aria-label={x.name}>
                    <Image src={`/icons/social-${x.icon === 'x' ? 'twitter' : x.icon}.png`} alt="" width={45} height={45} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={s.cols} aria-label="Footer">
            {[footerColumns[0], footerColumns[1]].map((c) => (
              <FooterGroup key={c.title} title={c.title}>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </FooterGroup>
            ))}
            <FooterGroup title="Programs">
              <ul>
                {programs.map((p) => (
                  <li key={p.code}>
                    <Link href={p.href}>{p.name}</Link>
                  </li>
                ))}
              </ul>
            </FooterGroup>
            <FooterGroup title={footerColumns[2].title}>
              <ul>
                {footerColumns[2].links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </FooterGroup>
            <div className={s.contact}>
              <h2>Helpdesk</h2>
              <p>
                Call Us : <a href={`tel:${site.helpdeskPhone.replace(/\s/g, '')}`}>{site.helpdeskPhone}</a>
              </p>
              <p>
                Email Us : <a href={`mailto:${site.helpdeskEmail}`}>{site.helpdeskEmail}</a>
              </p>
              <h2 className={s.adm}>Admissions</h2>
              <p>
                Call Us : <a href={`tel:${site.admissionsPhone.replace(/\s/g, '')}`}>{site.admissionsPhone}</a>
              </p>
              <p>
                Email Us : <a href={`mailto:${site.admissionsEmail}`}>{site.admissionsEmail}</a>
              </p>
            </div>
          </nav>
        </div>

        <div className={s.specs}>
          {programs.map((p) => (
            <FooterGroup key={p.code} tag="section" className={`${s.spec} ${s[p.code]}`} title={`${p.name} Specializations`}>
              <ul>
                {p.specializations.map((sp) => (
                  <li key={sp.slug}>
                    <Link href={specializationHref(p, sp)}>{sp.name}</Link>
                  </li>
                ))}
              </ul>
            </FooterGroup>
          ))}
          <BrochureForm />
        </div>
      </div>

      <div className={s.bar}>
        <div className={s.barInner}>
          <p>Copyright © 2026 DSU. All Rights Reserved</p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </p>
          <p className={s.credit}>
            Designed &amp; Developed&nbsp; By:
            <a href={site.designer.href} target="_blank" rel="noopener noreferrer" aria-label={site.designer.name}>
              <Image src="/images/brand/intersmart-footer.png" alt={site.designer.name} width={110} height={18} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
