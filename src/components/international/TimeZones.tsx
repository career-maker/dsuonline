'use client';

import { useEffect, useState } from 'react';
import { zones } from './data';
import { Ico } from './Ico';
import s from './International.module.scss';

type Now = { time: string; day: boolean; pct: number };

function read(tz: string): Now {
  const t = new Date().toLocaleTimeString('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false });
  const [h, m] = t.split(':').map(Number);
  return { time: t, day: h >= 6 && h < 18, pct: ((h * 60 + m) / 1440) * 100 };
}

/** Live local time in four cities, with day/night and a day-progress bar. Renders "--:--" until the browser clock is read. */
export function TimeZones() {
  const [now, setNow] = useState<Now[] | null>(null);

  useEffect(() => {
    const tick = () => setNow(zones.map((z) => read(z.tz)));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={s.zones} data-stagger>
      {zones.map((z, i) => (
        <div key={z.tz} className={s.zone} style={{ '--p': `${now?.[i].pct.toFixed(1) ?? 0}%` } as React.CSSProperties}>
          <div className={s.city}>
            {z.city}
            {now && <Ico name={now[i].day ? 'sun' : 'moon'} />}
          </div>
          <time className={s.clock}>{now?.[i].time ?? '--:--'}</time>
          <p className={s.note}>{z.note}</p>
        </div>
      ))}
    </div>
  );
}
