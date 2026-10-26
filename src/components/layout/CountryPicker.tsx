'use client';

import Image from 'next/image';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { countries, type Country } from '@/data/countries';
import s from './EnquiryModal.module.scss';

const Flag = ({ iso }: { iso: string }) => <Image className={s.flag} src={`/flags/${iso}.svg`} alt="" width={22} height={15} unoptimized />;

/** Searchable country-code dropdown (combobox + listbox): arrows / Enter / Escape / type-to-filter. */
export function CountryPicker({ value, onChange }: { value: Country; onChange: (c: Country) => void }) {
  const uid = useId();
  const root = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);

  const list = useMemo(() => {
    const t = q.trim().toLowerCase().replace(/^\+/, '');
    return t ? countries.filter((c) => c.name.toLowerCase().includes(t) || c.dial.replace('+', '').startsWith(t) || c.iso === t) : countries;
  }, [q]);

  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', away);
    search.current?.focus();
    return () => document.removeEventListener('mousedown', away);
  }, [open]);

  useEffect(() => {
    if (open) document.getElementById(`${uid}-o${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active, open, uid]);

  const focusButton = () => (root.current?.querySelector('button') as HTMLElement | null)?.focus();

  const pick = (c: Country) => {
    onChange(c);
    setOpen(false);
    setQ('');
    focusButton();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, list.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && list[active]) {
      e.preventDefault();
      pick(list[active]);
    } else if (e.key === 'Escape') {
      e.stopPropagation(); // closes the list, not the whole dialog
      e.preventDefault();
      setOpen(false);
      focusButton();
    }
  };

  return (
    <div ref={root} className={s.picker} onKeyDown={onKey}>
      <button
        type="button"
        className={s.pickBtn}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${uid}-list`}
        aria-label={`Country code: ${value.name} ${value.dial}`}
        onClick={() => {
          setOpen((o) => !o);
          setActive(Math.max(0, list.findIndex((c) => c.iso === value.iso)));
        }}
      >
        <Flag iso={value.iso} />
        <span>{value.dial}</span>
        <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4.2l4 4 4-4" />
        </svg>
      </button>
      {open && (
        <div className={s.pickPanel}>
          <input
            id={`${uid}-search`}
            name="country_search"
            ref={search}
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            placeholder="Search country or code"
            aria-label="Search country or code"
            role="combobox"
            aria-expanded="true"
            aria-controls={`${uid}-list`}
            aria-activedescendant={list[active] ? `${uid}-o${active}` : undefined}
            autoComplete="off"
          />
          <ul id={`${uid}-list`} role="listbox" aria-label="Countries">
            {list.length === 0 && <li className={s.pickNone}>No match</li>}
            {list.map((c, i) => (
              <li
                key={c.iso}
                id={`${uid}-o${i}`}
                role="option"
                aria-selected={c.iso === value.iso}
                className={i === active ? s.pickOn : undefined}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => pick(c)}
                onMouseEnter={() => setActive(i)}
              >
                <Flag iso={c.iso} />
                <span>{c.name}</span>
                <em>{c.dial}</em>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
