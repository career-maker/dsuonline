'use client';

import { useEffect, useState } from 'react';
import { Ico } from './Ico';
import { Rail } from './Rail';
import { zones } from './data';
import s from './International.module.scss';

type Now = { time: string; pct: number; day: boolean };

function read(tz: string): Now {
  const t = new Date().toLocaleTimeString('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false });
  const [h, m] = t.split(':').map(Number);
  return { time: t, pct: ((h * 60 + m) / 1440) * 100, day: h >= 6 && h < 18 };
}

/** Four cities with their local time right now; the bar along the bottom is how far through the day it is. Shows "--:--" until the browser clock is read. */
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
    <Rail className={s.zones} label="city" stagger>
      {zones.map((z, i) => (
        <li key={z.tz} className={s.zone} style={{ '--p': `${now?.[i].pct.toFixed(1) ?? 50}%` } as React.CSSProperties}>
          <div className={s.zoneCity}>
            {z.city}
            <Ico name={now?.[i].day === false ? 'moon' : 'sun'} />
          </div>
          <time className={s.clock}>{now?.[i].time ?? '--:--'}</time>
          <div className={s.zoneNote}>{z.note}</div>
        </li>
      ))}
    </Rail>
  );
}
