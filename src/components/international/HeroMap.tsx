'use client';

import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent, type ReactNode } from 'react';
import { continents } from './data';
import { Ico } from './Ico';
import s from './International.module.scss';

const BX = 197;
const BY = 563;
/** map -> cards: the continent now lit. cards -> map: a learner picked one. */
export const EVT_ACTIVE = 'intl:active';
export const EVT_PICK = 'intl:pick';

const routes = continents.map((c) => {
  const mx = (BX + c.x) / 2;
  const my = (BY + c.y) / 2;
  return `M${BX} ${BY} Q${mx - (c.y - BY) * 0.28} ${my + (c.x - BX) * 0.28} ${c.x} ${c.y}`;
});

const pins = [
  { icon: 'globe', t: 'Learn from anywhere', sub: 'Any country, any time zone' },
  { icon: 'cap', t: 'UGC-Entitled', sub: 'Online degree' },
  { icon: 'video', t: 'Live + Recorded', sub: 'Never miss a class' },
];

const istTime = () => new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' });

/** India map with a route from Bengaluru to each continent. `children` = the 36 state outlines (rendered on the server). */
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
  const [small, setSmall] = useState(false);

  const pick = useCallback((i: number) => {
    auto.current = false;
    setActive(i);
  }, []);

  // announce the lit continent to the cards below; restart the travelling dot
  useEffect(() => {
    t0.current = performance.now();
    activeRef.current = active;
    window.dispatchEvent(new CustomEvent(EVT_ACTIVE, { detail: active }));
  }, [active]);

  // cards -> map
  useEffect(() => {
    const on = (e: Event) => pick((e as CustomEvent<number>).detail);
    window.addEventListener(EVT_PICK, on);
    return () => window.removeEventListener(EVT_PICK, on);
  }, [pick]);

  // live Bengaluru time + label placement on narrow maps
  useEffect(() => {
    const tick = () => setIst(istTime());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 30000);
    const ro = new ResizeObserver(([e]) => setSmall(e.contentRect.width < 480 || innerWidth < 700));
    if (root.current) ro.observe(root.current);
    return () => {
      clearTimeout(first);
      clearInterval(id);
      ro.disconnect();
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

  // 3D tilt + floating pins follow the pointer through CSS variables
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = root.current;
    if (!el || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--mx', x.toFixed(3));
    el.style.setProperty('--my', y.toFixed(3));
  };
  const onLeave = () => {
    root.current?.style.setProperty('--mx', '0');
    root.current?.style.setProperty('--my', '0');
    setTip(null);
  };
  const onState = (e: MouseEvent<SVGSVGElement>) => {
    const t = e.target as SVGElement;
    const n = t.dataset?.n;
    const r = root.current?.getBoundingClientRect();
    if (!n || !r) return setTip(null);
    setTip({ text: n + (n === 'Karnataka' ? ' · Bengaluru' : ''), x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div id="hero-map" ref={root} className={s.map} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className={s.mapTilt}>
        <svg className={s.india} viewBox="-60 -40 732 776" role="img" aria-label="Map of India with Bengaluru, Karnataka highlighted, and routes to six continents" onMouseMove={onState} onMouseLeave={() => setTip(null)}>
          <defs>
            <radialGradient id="intl-glow">
              <stop offset="0" stopColor="#ffd700" stopOpacity=".55" />
              <stop offset="1" stopColor="#ffd700" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="intl-ka" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffe45c" />
              <stop offset="1" stopColor="#e2b500" />
            </linearGradient>
            <clipPath id="intl-av">
              <circle r="26" />
            </clipPath>
            <pattern id="intl-dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="11" cy="11" r="1.3" />
            </pattern>
          </defs>
          <rect className={s.gridDots} x="-60" y="-40" width="732" height="776" fill="url(#intl-dots)" />
          <g className={s.states}>{children}</g>
          <g>
            {continents.map((c, i) => (
              <path key={c.n} ref={(el) => void (routeEls.current[i] = el)} d={routes[i]} className={`${s.route} ${i === active ? s.on : ''}`} />
            ))}
            <circle ref={plane} r="6" className={s.plane} cx={BX} cy={BY} />
            {continents.map((c, i) => {
              const w = c.n.length * 9.6 + 26;
              return (
                <g key={c.n} className={`${s.av} ${i === active ? s.on : ''}`} transform={`translate(${c.x},${c.y})`} aria-hidden="true" onMouseEnter={() => pick(i)} onClick={() => pick(i)}>
                  <circle className={s.avBg} r="26" />
                  <image href={`/images/international/${c.img}.webp`} x="-26" y="-26" width="52" height="52" clipPath="url(#intl-av)" preserveAspectRatio="xMidYMid slice" />
                  <circle className={s.avBd} r="26" />
                  <g className={s.avLb}>
                    <rect x={-w / 2} y="32" width={w} height="28" rx="14" />
                    <text y="51">{c.n}</text>
                  </g>
                </g>
              );
            })}
          </g>
          <circle cx={BX} cy={BY} r="90" fill="url(#intl-glow)" />
          <circle className={s.ring} cx={BX} cy={BY} r="10" />
          <circle className={`${s.ring} ${s.ring2}`} cx={BX} cy={BY} r="10" />
          <circle cx={BX} cy={BY} r="8" fill="#fff" stroke="#e2b500" strokeWidth="4" />
          <path className={s.tick} d={small ? 'M70 650 L192 572' : 'M45 610 L190 568'} />
          <g className={s.blr} transform={small ? 'translate(-55,650)' : 'translate(-205,600)'}>
            <rect width="250" height="70" rx="12" />
            <text x="18" y="29" className={s.t1}>
              Bengaluru
            </text>
            <text x="18" y="52" className={s.t2}>
              {ist ? `Home of DSU · ${ist} IST` : 'Home of DSU · Karnataka'}
            </text>
          </g>
        </svg>
      </div>

      {pins.map((p, i) => (
        <div key={p.t} className={`${s.pin} ${s[`pin${i + 1}`]}`} style={{ '--i': i } as React.CSSProperties}>
          <span>
            <Ico name={p.icon} />
          </span>
          <div>
            {p.t}
            <small>{p.sub}</small>
          </div>
        </div>
      ))}

      {tip && (
        <div className={s.tip} style={{ left: tip.x, top: tip.y }} role="presentation">
          {tip.text}
        </div>
      )}

      <div className={s.chips} role="group" aria-label="Choose a continent to trace its route from Bengaluru">
        {continents.map((c, i) => (
          <button key={c.n} type="button" aria-pressed={i === active} className={i === active ? s.on : ''} onClick={() => pick(i)}>
            {c.n}
          </button>
        ))}
      </div>
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
