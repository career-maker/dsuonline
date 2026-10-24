'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { programs, specializationHref } from '@/data/programs';
import { mainNav, site } from '@/data/site';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';
import s from './Header.module.scss';

type Hit = { label: string; href: string };

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const progRef = useRef<HTMLLIElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const progId = useId();

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
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSearchOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProgOpen(false);
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

  const closeAll = () => {
    setMenuOpen(false);
    setProgOpen(false);
    setSearchOpen(false);
  };

  return (
    <header className={s.header} data-u>
      <div className={s.bar}>
        <Link href="/" className={s.logo} aria-label="Dayananda Sagar University Online - home" onClick={closeAll}>
          <Image src="/images/brand/logo-header.png" alt="Dayananda Sagar University Online" width={385} height={75} priority />
        </Link>

        <nav className={`${s.nav} ${menuOpen ? s.navOpen : ''}`} aria-label="Primary">
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
                      <strong>{p.name}</strong>
                      <span>{p.fullName}</span>
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
