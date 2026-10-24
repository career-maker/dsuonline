'use client';

import { useId, useState, useSyncExternalStore, type ReactNode } from 'react';
import s from './Footer.module.scss';

const query = '(max-width: 599.98px)';
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(query);
  m.addEventListener('change', cb);
  return () => m.removeEventListener('change', cb);
};

/** Footer link group: plain heading + list on larger screens, an expandable section on phones. */
export function FooterGroup({ title, className, tag: Tag = 'div', children }: { title: string; className?: string; tag?: 'div' | 'section'; children: ReactNode }) {
  const phone = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <Tag className={className}>
      <h2>
        {phone ? (
          <button type="button" className={s.toggle} aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
            {title}
          </button>
        ) : (
          title
        )}
      </h2>
      <div id={id} className={`${s.panel} ${open ? s.panelOpen : ''}`}>
        {children}
      </div>
    </Tag>
  );
}
