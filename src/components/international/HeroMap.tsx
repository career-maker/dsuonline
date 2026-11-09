'use client';

import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { continents } from './data';
import { blr, countryDots, stops, worldView } from './world-data';
import s from './International.module.scss';

/** map -> other widgets: the continent now lit. other widgets -> map: a learner picked one. */
export const EVT_ACTIVE = 'intl:active';
export const EVT_PICK = 'intl:pick';

/** flight path: a gentle arc bulging north between Bengaluru and the continent */
const routes = stops.map((c) => {
  const mx = (blr.x + c.x) / 2;
  const my = (blr.y + c.y) / 2 - Math.hypot(c.x - blr.x, c.y - blr.y) * 0.28;
  return `M${blr.x} ${blr.y} Q${mx} ${my} ${c.x} ${c.y}`;
});

const istTime = () => new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' });

/** World map with a route from Bengaluru to each continent, and a ruled list that selects them. `children` = the country outlines (rendered on the server). */
export function HeroMap({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const routeEls = useRef<(SVGPathElement | null)[]>([]);
  const plane = useRef<SVGCircleElement>(null);
  const t0 = useRef(0);
  const auto = useRef(true);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [ist, setIst] = useState('');
  const [tip, setTip] = useState<{ text: string; x: number; y: number } | null>(null);

  const pick = useCallback((i: number) => {
    auto.current = false;
    setActive(i);
  }, []);

  // announce the lit continent to the photo row; restart the travelling dot
  useEffect(() => {
    t0.current = performance.now();
    activeRef.current = active;
    window.dispatchEvent(new CustomEvent(EVT_ACTIVE, { detail: active }));
  }, [active]);

  useEffect(() => {
    const on = (e: Event) => pick((e as CustomEvent<number>).detail);
    window.addEventListener(EVT_PICK, on);
    return () => window.removeEventListener(EVT_PICK, on);
  }, [pick]);

  // live Bengaluru time
  useEffect(() => {
    const tick = () => setIst(istTime());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 30000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  // auto-cycle + travelling dot: only while on screen, never for reduced-motion users
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let visible = true;
    let hover = false;
    let raf = 0;
    const cycle = setInterval(() => {
      if (auto.current && visible && !hover && !document.hidden) setActive((a) => (a + 1) % continents.length);
    }, 3200);
    const fly = (t: number) => {
      const r = routeEls.current[activeRef.current];
      const dot = plane.current;
      if (r && dot && visible) {
        const L = r.getTotalLength();
        const p = r.getPointAtLength((L * ((t - t0.current) % 2000)) / 2000);
        dot.setAttribute('cx', String(p.x));
        dot.setAttribute('cy', String(p.y));
      }
      raf = requestAnimationFrame(fly);
    };
    raf = requestAnimationFrame(fly);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);
    const enter = () => (hover = true);
    const leave = () => (hover = false);
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointerleave', leave);
    return () => {
      clearInterval(cycle);
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointerleave', leave);
    };
  }, []);

  const onCountry = (e: MouseEvent<SVGSVGElement>) => {
    const n = (e.target as SVGElement).dataset?.n;
    const r = root.current?.getBoundingClientRect();
    if (!n || !r) return setTip(null);
    setTip({ text: n, x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div id="hero-map" ref={root} className={s.map}>
      <svg
        className={s.world}
        data-active={active}
        viewBox={worldView}
        role="img"
        aria-label="World map: routes from Bengaluru, India to Asia, Africa, Europe, North America, South America and Oceania"
        onMouseMove={onCountry}
        onMouseLeave={() => setTip(null)}
      >
        <g>{children}</g>
        <g>
          {stops.map((c, i) => (
            <path key={c.n} ref={(el) => void (routeEls.current[i] = el)} d={routes[i]} className={`${s.route} ${i === active ? s.on : ''}`} />
          ))}
          <circle ref={plane} r="3.5" className={s.plane} cx={blr.x} cy={blr.y} />
        </g>
        {/* the learner countries, marked where they really are */}
        <g aria-hidden="true">
          {countryDots.map((d) => (
            <circle key={d.n} cx={d.x} cy={d.y} r={d.c === active ? 4.4 : 2.8} className={`${s.cdot} ${d.c === active ? s.on : ''}`} />
          ))}
        </g>
        <g>
          {stops.map((c, i) => (
            <g key={c.n} className={`${s.stop} ${i === active ? s.on : ''}`} aria-hidden="true" onMouseEnter={() => pick(i)} onClick={() => pick(i)}>
              <circle cx={c.x} cy={c.y} r="14" className={s.hit} />
              <text x={c.x + c.dx} y={c.y + c.dy} textAnchor={c.a === 's' ? 'start' : c.a === 'e' ? 'end' : 'middle'}>
                {c.n}
              </text>
            </g>
          ))}
        </g>
        <circle className={s.ring} cx={blr.x} cy={blr.y} r="5" />
        <circle cx={blr.x} cy={blr.y} r="4.5" className={s.blrDot} />
        <text className={s.blr1} x={blr.x} y={blr.y + 30} textAnchor="middle">
          Bengaluru
        </text>
        <text className={s.blr2} x={blr.x} y={blr.y + 45} textAnchor="middle">
          {ist ? `Home of DSU · ${ist} IST` : 'Home of DSU'}
        </text>
      </svg>

      {tip && (
        <div className={s.tip} style={{ left: tip.x, top: tip.y }} role="presentation">
          {tip.text}
        </div>
      )}

      <ul className={s.legend} aria-label="Choose a continent to trace its route from Bengaluru">
        {continents.map((c, i) => (
          <li key={c.n}>
            <button type="button" aria-pressed={i === active} className={i === active ? s.on : ''} onClick={() => pick(i)}>
              <b>{c.n}</b>
              <span>{c.ex}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className={s.credit}>Map data: Natural Earth (public domain)</p>
    </div>
  );
}
