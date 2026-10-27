'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { programs, specializationHref } from '@/data/programs';
import { mainNav, moreNav, site } from '@/data/site';
import { useEnquiry } from './EnquiryProvider';
import { CloseIcon, MenuIcon, UserIcon } from '@/components/ui/icons';
import s from './Header.module.scss';

type Hit = { label: string; href: string };

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [held, setHeld] = useState(false); // after a link click the hover/focus dropdowns stay shut until the pointer leaves
  const moreRef = useRef<HTMLLIElement>(null);
  const moreId = useId();
  const { open: openEnquiry } = useEnquiry();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const progRef = useRef<HTMLLIElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const progId = useId();
  const [hidden, setHidden] = useState(false);
  const [stuck, setStuck] = useState(false);
  const busy = useRef(false); // menu / dropdown / search open: never hide
  useEffect(() => {
    busy.current = menuOpen || progOpen || moreOpen || searchOpen;
    if (busy.current) setHidden(false);
  }, [menuOpen, progOpen, moreOpen, searchOpen]);

  useEffect(() => {
    document.documentElement.dataset.headerHidden = hidden ? 'true' : 'false';
    return () => {
      delete document.documentElement.dataset.headerHidden;
    };
  }, [hidden]);

  // sticky header: hides while scrolling down, returns on any scroll up
  useEffect(() => {
    let last = window.scrollY;
    let tick = false;
    const onScroll = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        const y = Math.max(0, window.scrollY);
        setStuck(y > 40);
        if (Math.abs(y - last) > 6) {
          setHidden(y > last && y > 160 && !busy.current);
          last = y;
        }
        tick = false;
      });
    };
    // a refresh mid-page restores the scroll position without a scroll event: sync once now and after load
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, []);

  const hits = useMemo<Hit[]>(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const all: Hit[] = [
      ...mainNav.map((n) => ({ label: n.label, href: n.href })),
      ...programs.flatMap((p) => [
        { label: `${p.name} - ${p.fullName}`, href: p.href },
        ...p.specializations.map((sp) => ({ label: `${p.name}: ${sp.name}`, href: specializationHref(p, sp) })),
      ]),
    ];
    return all.filter((h) => h.label.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (progRef.current && !progRef.current.contains(e.target as Node)) setProgOpen(false);
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSearchOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProgOpen(false);
        setMoreOpen(false);
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // the fixed bottom action bar would cover the open mobile menu: let CSS hide it
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen);
    return () => document.documentElement.classList.remove('menu-open');
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setProgOpen(false);
    setMoreOpen(false);
    setSearchOpen(false);
    setHeld(true);
    (document.activeElement as HTMLElement | null)?.blur?.();
  };

  return (
    <header className={`${s.header} ${stuck ? s.stuck : ''} ${hidden ? s.hide : ''}`} data-u>
      <div className={s.bar}>
        <Link href="/" className={s.logo} aria-label="Dayananda Sagar University Online - home" onClick={closeAll}>
          <Image src="/images/brand/logo-header.webp" alt="Dayananda Sagar University Online" width={385} height={75} priority />
        </Link>

        <nav className={`${s.nav} ${menuOpen ? s.navOpen : ''} ${held ? s.held : ''}`} data-lenis-prevent aria-label="Primary" onMouseLeave={() => setHeld(false)}>
          <ul>
            <li>
              <Link href="/" className={s.homeLink} aria-label="Home" onClick={closeAll}>
                <Image className={s.ico} src="/icons/hdr-home.png" alt="" width={18} height={19} />
              </Link>
            </li>
            <li ref={progRef} className={s.hasMenu}>
              <button
                type="button"
                className={s.navBtn}
                aria-expanded={progOpen}
                aria-controls={progId}
                onClick={() => setProgOpen((v) => !v)}
              >
                Programs <Image className={`${s.ico} ${progOpen ? s.flip : ''}`} src="/icons/hdr-chev.png" alt="" width={14} height={11} />
              </button>
              <ul id={progId} className={`${s.dropdown} ${progOpen ? s.dropdownOpen : ''}`}>
                {programs.map((p) => (
                  <li key={p.code}>
                    <Link href={p.href} onClick={closeAll}>
                      <span className={s.code}>{p.name}</span>
                      <span className={s.txt}>
                        <b>{p.fullName}</b>
                        <small>
                          {p.duration} · 1st sem INR {p.firstSemFee}
                        </small>
                      </span>
                      <span className={s.arr} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {mainNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={closeAll}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className={s.drawerOnly}>
              <a href={site.learnerLogin} target="_blank" rel="noopener noreferrer" onClick={closeAll}>
                <UserIcon /> Learner Login
              </a>
            </li>
            <li ref={moreRef} className={s.hasMenu}>
              <button type="button" className={s.navBtn} aria-expanded={moreOpen} aria-controls={moreId} onClick={() => setMoreOpen((v) => !v)}>
                More <Image className={`${s.ico} ${moreOpen ? s.flip : ''}`} src="/icons/hdr-chev.png" alt="" width={14} height={11} />
              </button>
              <ul id={moreId} className={`${s.dropdown} ${s.moreMenu} ${moreOpen ? s.dropdownOpen : ''}`}>
                {moreNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} onClick={closeAll}>
                      <span className={s.txt}>
                        <b>{n.label}</b>
                      </span>
                      <span className={s.arr} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
                <li className={s.moreCtas}>
                  <a href={site.apply} target="_blank" rel="noopener noreferrer" onClick={closeAll}>
                    Apply Now
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      closeAll();
                      openEnquiry();
                    }}
                  >
                    Enquire Now
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className={s.actions}>
          <div ref={searchRef} className={s.search}>
            <button
              type="button"
              className={s.searchBtn}
              aria-label="Search site"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Image className={s.ico} src="/icons/hdr-search.png" alt="" width={29} height={29} />
            </button>
            {searchOpen && (
              <div className={s.searchPanel}>
                <input
                  id="site-search-input"
                  name="search"
                  type="search"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search programmes and pages"
                  aria-label="Search programmes and pages"
                />
                {query.trim().length >= 2 && (
                  <ul>
                    {hits.length ? (
                      hits.map((h) => (
                        <li key={h.href + h.label}>
                          <Link href={h.href} onClick={closeAll}>
                            {h.label}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className={s.noHits}>No results</li>
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>
          <a href={`tel:${site.phone}`} className={s.phone}>
            <Image className={s.ico} src="/icons/hdr-phone.png" alt="" width={22} height={23} /> {site.phoneLabel}
          </a>
          <a href={site.learnerLogin} className={s.login} target="_blank" rel="noopener noreferrer">
            <Image className={s.ico} src="/icons/hdr-user.png" alt="" width={25} height={25} /> Learner Login
          </a>
          <button
            type="button"
            className={s.burger}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
