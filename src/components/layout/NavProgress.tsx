'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import s from './NavProgress.module.scss';

/**
 * Feedback + safety net for page changes. A click on an internal link shows a thin progress bar until the new page arrives.
 * If the client-side navigation stalls (slow or failed fetch, stale build after a deploy) the browser is sent to the page the
 * normal way after 6 s, so a link never silently does nothing.
 */
export function NavProgress() {
  const pathname = usePathname();
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // the new page has arrived
  useEffect(() => {
    clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reacting to the route change itself
    setBusy(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return; // external, or same page / #anchor
      setBusy(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (location.pathname !== url.pathname) location.assign(url.href);
      }, 6000);
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      clearTimeout(timer.current);
    };
  }, []);

  return <div className={`${s.bar} ${busy ? s.on : ''}`} role="presentation" aria-hidden="true" />;
}
