'use client';

import { useId, useState } from 'react';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { useEnquiry } from '@/components/layout/EnquiryProvider';
import type { FaqItem } from '@/data/programme-faq';
import s from './ProgramFaq.module.scss';

function Item({ it, open, toggle, id }: { it: FaqItem; open: boolean; toggle: () => void; id: string }) {
  return (
    <li className={`${s.item} ${open ? s.open : ''}`}>
      <h3>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={toggle}>
          <span>{it.q}</span>
          <i aria-hidden="true" />
        </button>
      </h3>
      {/* grid-rows trick: the answer animates its own height, so only this item moves */}
      <div id={id} role="region" className={s.answer}>
        <div>
          <p>{it.a}</p>
        </div>
      </div>
    </li>
  );
}

/**
 * Programme FAQ: heading, lead and a counsellor button on top, the questions in two independent columns below
 * (items alternate left / right). Opening an answer only grows its own column, so adding or opening items never leaves a hole.
 */
export function ProgramFaq({ title, lead, items, code }: { title: string; lead: string; items: FaqItem[]; code: string }) {
  const { open: enquire } = useEnquiry();
  const [openKey, setOpenKey] = useState<string | null>(items[0]?.q ?? null);
  const uid = useId();
  const cols = [items.filter((_, i) => i % 2 === 0), items.filter((_, i) => i % 2 === 1)];

  return (
    <div className={s.wrap}>
      <header className={s.head}>
        <div>
          <p className={s.eyebrow}>Frequently asked questions</p>
          <h2>{title}</h2>
          <p className={s.lead}>{lead}</p>
        </div>
        <ArrowLink onClick={() => enquire(code)}>Ask a counsellor</ArrowLink>
      </header>
      <div className={s.cols}>
        {cols.map((col, c) => (
          <ul key={c} className={s.col}>
            {col.map((it, j) => (
              <Item key={it.q} it={it} id={`${uid}-${c}-${j}`} open={openKey === it.q} toggle={() => setOpenKey(openKey === it.q ? null : it.q)} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
