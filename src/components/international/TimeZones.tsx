'use client';

import { useEffect, useState } from 'react';
import { zones } from './data';
import s from './International.module.scss';

type Now = { time: string; pct: number };

function read(tz: string): Now {
  const t = new Date().toLocaleTimeString('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false });
  const [h, m] = t.split(':').map(Number);
  return { time: t, pct: ((h * 60 + m) / 1440) * 100 };
}

/** Four cities, each a 24-hour ruler (shaded 18:00-06:00) with a marker at the city's local time right now. Shows "--:--" until the browser clock is read. */
export function TimeZones() {
  const [now, setNow] = useState<Now[] | null>(null);

  useEffect(() => {
    const tick = () => setNow(zones.map((z) => read(z.tz)));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 30000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return (
    <ul className={s.zones} data-stagger>
      {zones.map((z, i) => (
        <li key={z.tz} className={s.zone} style={{ '--p': `${now?.[i].pct.toFixed(1) ?? 50}%` } as React.CSSProperties}>
          <div className={s.zoneName}>
            <b>{z.city}</b>
            <span>{z.note}</span>
          </div>
          <time className={s.clock}>{now?.[i].time ?? '--:--'}</time>
          <div className={s.ruler} aria-hidden="true">
            <i />
            <em>
              <span>00</span>
              <span>06</span>
              <span>12</span>
              <span>18</span>
              <span>24</span>
            </em>
          </div>
        </li>
      ))}
    </ul>
  );
}
