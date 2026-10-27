'use client';

import { useEffect, useId, useState, useSyncExternalStore, type ReactNode } from 'react';
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

  // only one footer group stays open: opening another collapses this one
  useEffect(() => {
    const onOpen = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) setOpen(false);
    };
    window.addEventListener('footer-group-open', onOpen);
    return () => window.removeEventListener('footer-group-open', onOpen);
  }, [id]);

  const toggle = () => {
    if (!open) window.dispatchEvent(new CustomEvent('footer-group-open', { detail: id }));
    setOpen((o) => !o);
  };
  return (
    <Tag className={className}>
      <h2>
        {phone ? (
          <button type="button" className={s.toggle} aria-expanded={open} aria-controls={id} onClick={toggle}>
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
