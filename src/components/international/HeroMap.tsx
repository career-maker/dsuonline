'use client';

import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react';
import { continents } from './data';
import { blr, indiaStates, indiaView } from './india-data';
import s from './International.module.scss';

/** map -> other widgets: the continent now lit. other widgets -> map: a learner picked one. */
export const EVT_ACTIVE = 'intl:active';
export const EVT_PICK = 'intl:pick';

/** where each continent's badge sits around India (same order as `continents`) */
const spots = [
  { x: 640, y: 300 },
  { x: -95, y: 480 },
  { x: -95, y: 110 },
  { x: 330, y: -10 },
  { x: -95, y: 295 },
];

/** flight path: a curve from Bengaluru to the continent badge */
const routes = spots.map((c) => {
  const mx = (blr.x + c.x) / 2;
  const my = (blr.y + c.y) / 2;
  return `M${blr.x} ${blr.y} Q${mx - (c.y - blr.y) * 0.28} ${my + (c.x - blr.x) * 0.28} ${c.x} ${c.y}`;
});

const istTime = () => new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' });

/** Map of India with a route from Bengaluru to each continent, and chips that select them. */
export function HeroMap() {
  const root = useRef<HTMLDivElement>(null);
  const routeEls = useRef<(SVGPathElement | null)[]>([]);
  const plane = useRef<SVGCircleElement>(null);
  const t0 = useRef(0);
  const auto = useRef(true);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [ist, setIst] = useState('');
  const [small, setSmall] = useState(false);
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

  // on a narrow screen the Bengaluru label sits under the map instead of off its left edge
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 759.98px)');
    const on = () => setSmall(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

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
    }, 2800);
    const fly = (t: number) => {
      const r = routeEls.current[activeRef.current];
      const dot = plane.current;
      if (r && dot && visible) {
        const L = r.getTotalLength();
        const p = r.getPointAtLength((L * ((t - t0.current) % 1800)) / 1800);
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

  const onState = (e: MouseEvent<SVGSVGElement>) => {
    const n = (e.target as SVGElement).dataset?.n;
    const r = root.current?.getBoundingClientRect();
    if (!n || !r) return setTip(null);
    setTip({ text: n === 'Karnataka' ? 'Karnataka · Bengaluru' : n, x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div id="hero-map" ref={root} className={s.map}>
      <svg
        className={s.world}
        viewBox={indiaView}
        role="img"
        aria-label="Map of India with Bengaluru, Karnataka highlighted, and routes to Asia, Africa, Europe, North America and South America"
        onMouseMove={onState}
        onMouseLeave={() => setTip(null)}
      >
        <defs>
          <radialGradient id="intlGlow">
            <stop offset="0" stopColor="#22c3e6" stopOpacity=".6" />
            <stop offset="1" stopColor="#22c3e6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="intlKa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4fa3ff" />
            <stop offset="1" stopColor="#22c3e6" />
          </linearGradient>
        </defs>
        <g>
          {indiaStates.map(([n, d, ka]) => (
            <path key={n} data-n={n} d={d} className={ka ? `${s.st} ${s.home}` : s.st} />
          ))}
        </g>
        <g>
          {spots.map((c, i) => (
            <path key={continents[i].n} ref={(el) => void (routeEls.current[i] = el)} d={routes[i]} className={`${s.route} ${i === active ? s.on : ''}`} />
          ))}
          <circle ref={plane} r="6" className={s.plane} cx={blr.x} cy={blr.y} />
        </g>
        <g>
          {spots.map((c, i) => {
            const n = continents[i].n;
            const w = n.length * 9.6 + 26;
            return (
              <g key={n} className={`${s.av} ${i === active ? s.on : ''}`} transform={`translate(${c.x},${c.y})`} aria-hidden="true" onMouseEnter={() => pick(i)} onClick={() => pick(i)}>
                <circle className={s.avBg} r="26" />
                <text y="6" className={s.avEmoji}>
                  {continents[i].e}
                </text>
                <circle className={s.avBd} r="26" />
                <g className={s.avLb}>
                  <rect x={-w / 2} y="32" width={w} height="28" rx="14" />
                  <text y="51">{n}</text>
                </g>
              </g>
            );
          })}
        </g>
        <circle cx={blr.x} cy={blr.y} r="90" fill="url(#intlGlow)" />
        <circle className={s.ring} cx={blr.x} cy={blr.y} r="10" />
        <circle className={`${s.ring} ${s.r2}`} cx={blr.x} cy={blr.y} r="10" />
        <circle cx={blr.x} cy={blr.y} r="8" className={s.blrDot} />
        <g className={s.blrLabel} transform={small ? 'translate(-55,650)' : 'translate(-205,600)'}>
          <rect width="250" height="70" rx="16" />
          <text x="18" y="29" className={s.blr1}>
            Bengaluru
          </text>
          <text x="18" y="52" className={s.blr2}>
            {ist ? `Home of DSU · ${ist} IST` : 'Home of DSU · Karnataka'}
          </text>
        </g>
        <path className={s.blrTick} d={small ? 'M70 650 L192 572' : 'M45 610 L190 568'} />
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
              <span aria-hidden="true">{c.e}</span> {c.n}
            </button>
          </li>
        ))}
      </ul>
      <p className={s.credit}>
        Map data: svg-maps/india by Victor Cazanave, CC BY 4.0
      </p>
    </div>
  );
}
