'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { CurData, CurRow } from './curriculumData';
import s from './ProgramCurriculum.module.scss';

type View = { kind: 'sem'; i: number } | { kind: 'el'; i: number };

/**
 * Curriculum browser. Left: semester menu + total credits. Right: an "Electives" dropdown on top and the table below.
 * Semesters and electives are two separate views: choosing one clears the other.
 */
export function ProgramCurriculum({ sems, electives, totalCredits }: CurData) {
  const [view, setView] = useState<View>({ kind: 'sem', i: 0 });
  const [open, setOpen] = useState(false);
  const [hot, setHot] = useState(0);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', away);
    return () => document.removeEventListener('mousedown', away);
  }, [open]);

  const pickSem = (i: number) => setView({ kind: 'sem', i });
  const pickEl = (i: number) => {
    setView({ kind: 'el', i });
    setOpen(false);
    btn.current?.focus();
  };

  const key = (e: React.KeyboardEvent) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      setHot(view.kind === 'el' ? view.i : 0);
      setOpen(true);
    } else if (open) {
      if (e.key === 'ArrowDown') (e.preventDefault(), setHot((h) => (h + 1) % electives.length));
      else if (e.key === 'ArrowUp') (e.preventDefault(), setHot((h) => (h - 1 + electives.length) % electives.length));
      else if (e.key === 'Enter') (e.preventDefault(), pickEl(hot));
      else if (e.key === 'Escape' || e.key === 'Tab') setOpen(false);
    }
  };

  const sem = view.kind === 'sem' ? sems[view.i] : undefined;
  const el = view.kind === 'el' ? electives[view.i] : undefined;
  const rows: CurRow[] = sem?.rows ?? el?.rows ?? [];
  const showSem = !!el && rows.some((r) => r.sem);
  const showCredits = rows.some((r) => r.credits);

  return (
    <div className={s.wrap}>
      <aside className={s.side}>
        <div className={s.menu} role="tablist" aria-label="Semesters" aria-orientation="vertical">
          {sems.map((x, i) => (
            <button key={x.label} type="button" role="tab" aria-selected={view.kind === 'sem' && view.i === i} className={view.kind === 'sem' && view.i === i ? s.on : ''} onClick={() => pickSem(i)}>
              {x.label}
            </button>
          ))}
        </div>
        {totalCredits && (
          <div className={s.credits}>
            <span>Total credits</span>
            <b>{totalCredits}</b>
            <small>across {sems.length} semesters</small>
          </div>
        )}
      </aside>

      <div className={s.main}>
        <div className={s.bar}>
          <h3 aria-live="polite">{sem ? sem.label : el ? el.name : ''}</h3>
          {electives.length > 0 && (
            <div className={s.drop} ref={box}>
              <button
                ref={btn}
                type="button"
                className={`${s.trigger} ${view.kind === 'el' ? s.active : ''}`}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={`${id}-list`}
                onClick={() => {
                  setHot(view.kind === 'el' ? view.i : 0);
                  setOpen((o) => !o);
                }}
                onKeyDown={key}
              >
                <span>{el ? el.name : 'Select elective'}</span>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 6l5 5 5-5" />
                </svg>
              </button>
              {open && (
                <ul id={`${id}-list`} role="listbox" aria-label="Electives" className={s.list}>
                  {electives.map((x, i) => (
                    <li key={x.name} role="option" aria-selected={view.kind === 'el' && view.i === i} className={`${hot === i ? s.hot : ''} ${view.kind === 'el' && view.i === i ? s.sel : ''}`} onMouseEnter={() => setHot(i)} onClick={() => pickEl(i)}>
                      {x.name}
                      {x.note && <small>{x.note}</small>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <div className={s.card}>
          <table>
            <thead>
              <tr>
                {showSem && <th>Semester</th>}
                <th>Course code</th>
                <th>Course title</th>
                {showCredits && <th className={s.num}>Credits</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={`${r.code}-${r.title}`}>
                  {showSem && <td>{r.sem}</td>}
                  <td className={s.code}>{r.code}</td>
                  <td>{r.title}</td>
                  {showCredits && <td className={s.num}>{r.credits}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          {sem?.total && (
            <div className={s.total}>
              <span>Total Credits</span>
              <b>{sem.total}</b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
