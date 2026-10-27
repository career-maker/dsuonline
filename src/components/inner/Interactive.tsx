'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { ChevronRight } from '@/components/ui/icons';
import type { Faq } from './parse';
import s from './Kit.module.scss';

/** One question open at a time; height animates via a grid-row transition (no fixed heights). */
export function FaqList({ items: all, initial = 8 }: { items: Faq[]; initial?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const [more, setMore] = useState(false);
  const items = more ? all : all.slice(0, initial);
  const uid = useId();
  return (
    <>
    <ul className={s.faq}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className={isOpen ? s.faqOn : undefined}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`${uid}-${i}`} id={`${uid}-b${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span className={s.faqNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={s.faqQ}>{f.q.replace(/^\d+\s*\.\s*/, '')}</span>
                <ChevronRight className={s.faqChev} />
              </button>
            </h3>
            <div id={`${uid}-${i}`} role="region" aria-labelledby={`${uid}-b${i}`} className={s.faqBody}>
              <div>
                {f.a.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {f.list && (
                  <ul>
                    {f.list.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
      {all.length > initial && (
        <div className={s.revealRow}>
          <button type="button" className={s.revealBtn} aria-expanded={more} onClick={() => setMore((v) => !v)}>
            {more ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </>
  );
}

/** Tab strip with arrow-key navigation; panels are passed in and swapped client-side. */
export function Tabs({ groups }: { groups: { label?: string; tabs: { id: string; label: string; panel: ReactNode }[] }[] }) {
  const all = groups.flatMap((g) => g.tabs);
  const [active, setActive] = useState(all[0]?.id);
  const uid = useId();
  const cur = all.find((t) => t.id === active) ?? all[0];
  const onKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const n = all[(idx + (e.key === 'ArrowRight' ? 1 : -1) + all.length) % all.length];
    setActive(n.id);
    document.getElementById(`${uid}-${n.id}`)?.focus();
  };
  const offsets = groups.map((_, gi) => groups.slice(0, gi).reduce((n, g) => n + g.tabs.length, 0));
  return (
    <div className={s.tabs}>
      {groups.map((g, gi) => (
        <div key={g.label ?? 'g'} className={s.tabGroup}>
          {g.label && <span className={s.tabLabel}>{g.label}</span>}
          <div role="tablist" aria-label={g.label} className={s.tabList}>
            {g.tabs.map((t, ti) => {
              const i = offsets[gi] + ti;
              return (
                <button
                  key={t.id}
                  id={`${uid}-${t.id}`}
                  type="button"
                  role="tab"
                  aria-selected={t.id === cur?.id}
                  aria-controls={`${uid}-panel`}
                  tabIndex={t.id === cur?.id ? 0 : -1}
                  className={t.id === cur?.id ? s.tabOn : undefined}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => onKey(e, i)}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={cur ? `${uid}-${cur.id}` : undefined} className={s.tabPanel}>
        {cur?.panel}
      </div>
    </div>
  );
}

/** Shows the first `count` children and reveals the rest on demand. */
export function Reveal({ count, className, children, more = 'Show More', less = 'Show Less' }: { count: number; className?: string; children: ReactNode[]; more?: string; less?: string }) {
  const [all, setAll] = useState(false);
  const [cols, setCols] = useState(1);
  const list = useRef<HTMLUListElement>(null);

  // grid column count follows the viewport; the collapsed state always ends on a full row
  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const read = () => setCols(Math.max(1, getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean).length));
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const visible = Math.ceil(count / cols) * cols;
  const shown = all ? children : children.slice(0, visible);
  return (
    <>
      <ul ref={list} className={className}>
        {shown}
      </ul>
      {children.length > visible && (
        <div className={s.revealRow}>
          <button type="button" className={s.revealBtn} aria-expanded={all} onClick={() => setAll((v) => !v)}>
            {all ? less : more}
          </button>
        </div>
      )}
    </>
  );
}

/** Leadership cards side by side; each message is clamped and expands in place. */
export function LeaderGrid({ items }: { items: { name: string; role?: string; img: ReactNode; paras: string[] }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();
  const card = (l: (typeof items)[number], i: number) => {
    const on = open === i;
    return (
      <li key={l.name} className={on ? s.leadOn : undefined}>
        <div className={s.leadPhoto}>{l.img}</div>
        <h3>{l.name}</h3>
        {l.role && <p className={s.leadRole}>{l.role}</p>}
        <div id={`${uid}-${i}`} className={s.leadText}>
          {l.paras.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <button type="button" className={s.leadMore} aria-expanded={on} aria-controls={`${uid}-${i}`} onClick={() => setOpen(on ? null : i)}>
          {on ? 'Read Less' : 'Read More'}
        </button>
      </li>
    );
  };
  // the opened message gets its own full-width row on top; the other cards stay in one row below, equal height
  return (
    <div className={s.leadWrap}>
      {open !== null && <ul className={s.leadOpen}>{card(items[open], open)}</ul>}
      <ul className={s.leadGrid}>{items.map((l, i) => (i === open ? null : card(l, i)))}</ul>
    </div>
  );
}
