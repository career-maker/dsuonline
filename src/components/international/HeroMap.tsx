'use client';

import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { continents } from './data';
import s from './International.module.scss';

const BX = 197;
const BY = 563;
/** map -> other widgets: the continent now lit. other widgets -> map: a learner picked one. */
export const EVT_ACTIVE = 'intl:active';
export const EVT_PICK = 'intl:pick';

const routes = continents.map((c) => {
  const mx = (BX + c.x) / 2;
  const my = (BY + c.y) / 2;
  return `M${BX} ${BY} Q${mx - (c.y - BY) * 0.28} ${my + (c.x - BX) * 0.28} ${c.x} ${c.y}`;
});

/** where a destination's name sits relative to its dot */
const label = (c: { x: number; y: number }) => {
  if (c.x < 100) return { x: c.x + 14, y: c.y + 5, a: 'start' as const };
  if (c.x > 450) return { x: c.x - 14, y: c.y + 5, a: 'end' as const };
  return { x: c.x, y: c.y + 28, a: 'middle' as const };
};

const istTime = () => new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' });

/** India map with a route from Bengaluru to each continent, and a ruled list that selects them. `children` = the 36 state outlines (rendered on the server). */
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

  const onState = (e: MouseEvent<SVGSVGElement>) => {
    const n = (e.target as SVGElement).dataset?.n;
    const r = root.current?.getBoundingClientRect();
    if (!n || !r) return setTip(null);
    setTip({ text: n, x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div id="hero-map" ref={root} className={s.map}>
      <svg className={s.india} viewBox="-60 -40 732 776" role="img" aria-label="Map of India with Bengaluru, Karnataka highlighted, and routes from Bengaluru to six continents" onMouseMove={onState} onMouseLeave={() => setTip(null)}>
        <defs>
          <radialGradient id="intl-glow">
            <stop offset="0" stopColor="#ffd700" stopOpacity=".5" />
            <stop offset="1" stopColor="#ffd700" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className={s.states}>{children}</g>
        <g>
          {continents.map((c, i) => (
            <path key={c.n} ref={(el) => void (routeEls.current[i] = el)} d={routes[i]} className={`${s.route} ${i === active ? s.on : ''}`} />
          ))}
          <circle ref={plane} r="5" className={s.plane} cx={BX} cy={BY} />
          {continents.map((c, i) => {
            const l = label(c);
            return (
              <g key={c.n} className={`${s.stop} ${i === active ? s.on : ''}`} aria-hidden="true" onMouseEnter={() => pick(i)} onClick={() => pick(i)}>
                <circle cx={c.x} cy={c.y} r="16" className={s.hit} />
                <circle cx={c.x} cy={c.y} r="6" className={s.dot} />
                <text x={l.x} y={l.y} textAnchor={l.a}>
                  {c.n}
                </text>
              </g>
            );
          })}
        </g>
        <circle cx={BX} cy={BY} r="80" fill="url(#intl-glow)" />
        <circle className={s.ring} cx={BX} cy={BY} r="10" />
        <circle cx={BX} cy={BY} r="7" fill="#fff" stroke="#e2b500" strokeWidth="4" />
        <path className={s.tick} d="M-6 612 L186 570" />
        <text className={s.blr1} x="-6" y="602">
          Bengaluru
        </text>
        <text className={s.blr2} x="-6" y="632">
          {ist ? `Home of DSU · ${ist} IST` : 'Home of DSU · Karnataka'}
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
      <p className={s.credit}>
        Map data:{' '}
        <a href="https://github.com/VictorCazanave/svg-maps" target="_blank" rel="noopener noreferrer">
          svg-maps/india
        </a>{' '}
        by Victor Cazanave, CC BY 4.0
      </p>
    </div>
  );
}
