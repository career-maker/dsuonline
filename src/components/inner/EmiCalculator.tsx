'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import s from './EmiCalculator.module.scss';

const inr = (n: number) => `₹ ${Math.round(n).toLocaleString('en-IN')}`;

/**
 * Client's EMI chart: every plan is a no-cost EMI (the fee split equally over the tenure, 0% interest).
 * PG: the full programme fee. UG (client 2026-11-24): finance either 1 year (INR 44,000) or the complete programme (INR 1,30,000).
 */
export const EMI_TENURES = [6, 8, 10, 12, 15, 18];
const PG = ['MBA', 'MCA'];
const UG_YEARLY = 44000;
const PROGRAMME_FEE = 130000;
type Plan = { label: string; fee: number; yearly: boolean };
const plansFor = (program: string, total: number): Plan[] =>
  PG.includes(program)
    ? [{ label: 'Complete programme', fee: PROGRAMME_FEE, yearly: false }]
    : [
        { label: '1 year', fee: UG_YEARLY, yearly: true },
        { label: 'Complete programme', fee: total > UG_YEARLY ? total : PROGRAMME_FEE, yearly: false },
      ];

/** Scratch card: the foil is scratched away with the pointer (or revealed with the button for keyboard users). Calls onReveal once. */
function ScratchCard({ revealed, onReveal }: { revealed: boolean; onReveal: () => void }) {
  const wrap = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const down = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const moves = useRef(0);

  // paint the foil (and repaint when the card is resized)
  useEffect(() => {
    const c = cv.current;
    const w = wrap.current;
    if (!c || !w || revealed) return;
    const paint = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const { width, height } = w.getBoundingClientRect();
      c.width = Math.round(width * dpr);
      c.height = Math.round(height * dpr);
      const g = c.getContext('2d');
      if (!g) return;
      g.scale(dpr, dpr);
      const f = g.createLinearGradient(0, 0, width, height);
      f.addColorStop(0, '#d9a400');
      f.addColorStop(0.35, '#ffe45c');
      f.addColorStop(0.55, '#fff6b0');
      f.addColorStop(0.75, '#f0c000');
      f.addColorStop(1, '#c99700');
      g.fillStyle = f;
      g.fillRect(0, 0, width, height);
      // brushed-foil grain
      g.globalAlpha = 0.16;
      for (let i = 0; i < 160; i++) {
        g.fillStyle = i % 2 ? '#ffffff' : '#8a6500';
        g.fillRect(Math.random() * width, Math.random() * height, 24 + Math.random() * 60, 1);
      }
      g.globalAlpha = 1;
      g.fillStyle = '#4b3600';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      // largest size (max 22px) that keeps the title inside the card on narrow phones
      const title = 'SCRATCH TO REVEAL YOUR OFFER';
      let size = Math.min(22, width / 16);
      g.font = `800 ${size}px "Plus Jakarta Sans", system-ui, sans-serif`;
      while (size > 10 && g.measureText(title).width > width * 0.88) {
        size -= 0.5;
        g.font = `800 ${size}px "Plus Jakarta Sans", system-ui, sans-serif`;
      }
      g.fillText(title, width / 2, height / 2 - 8);
      g.font = `600 ${Math.max(12, Math.min(15, width / 24))}px "Plus Jakarta Sans", system-ui, sans-serif`;
      g.fillText('a special offer is waiting for you', width / 2, height / 2 + 16);
    };
    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(w);
    return () => ro.disconnect();
  }, [revealed]);

  // how much foil is gone? (coarse sample of the alpha channel)
  const cleared = useCallback(() => {
    const c = cv.current;
    const g = c?.getContext('2d');
    if (!c || !g) return 0;
    const { data } = g.getImageData(0, 0, c.width, c.height);
    let gone = 0;
    let n = 0;
    for (let i = 3; i < data.length; i += 4 * 37) {
      n++;
      if (data[i] < 40) gone++;
    }
    return n ? gone / n : 0;
  }, []);

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const c = cv.current;
    const g = c?.getContext('2d');
    if (!c || !g || !down.current) return;
    const r = c.getBoundingClientRect();
    const p = { x: e.clientX - r.left, y: e.clientY - r.top };
    const dpr = c.width / r.width;
    g.save();
    g.scale(dpr, dpr);
    g.globalCompositeOperation = 'destination-out';
    g.lineCap = 'round';
    g.lineJoin = 'round';
    g.lineWidth = 46;
    g.beginPath();
    g.moveTo((last.current ?? p).x, (last.current ?? p).y);
    g.lineTo(p.x, p.y);
    g.stroke();
    g.restore();
    last.current = p;
    moves.current += 1;
    if (moves.current % 6 === 0 && cleared() > 0.4) onReveal();
  };

  return (
    <div className={`${s.scratch} ${revealed ? s.open : ''}`} ref={wrap}>
      <div className={s.prize}>
        <span className={s.badge}>No Cost EMI &middot; 0% interest</span>
        <small>Offer unlocked: pay only the fee, in equal monthly instalments.</small>
      </div>
      {!revealed && (
        <>
          <canvas
            ref={cv}
            className={s.foil}
            aria-hidden="true"
            onPointerDown={(e) => {
              down.current = true;
              last.current = null;
              e.currentTarget.setPointerCapture(e.pointerId);
              scratch(e);
            }}
            onPointerMove={scratch}
            onPointerUp={() => {
              down.current = false;
              last.current = null;
              if (cleared() > 0.4) onReveal();
            }}
            onPointerCancel={() => {
              down.current = false;
            }}
          />
          <button type="button" className={s.revealBtn} onClick={onReveal}>
            Reveal offer
          </button>
        </>
      )}
    </div>
  );
}

export function EmiCalculator({ total, program }: { total: number; program: string }) {
  const id = useId();
  const plans = plansFor(program, total);
  const [planIdx, setPlanIdx] = useState(0);
  const { fee, yearly } = plans[planIdx];
  const [amount, setAmount] = useState(fee);
  const pickPlan = (i: number) => {
    setPlanIdx(i);
    setAmount(plans[i].fee);
  };
  const [step, setStep] = useState(3); // index into EMI_TENURES: 12 months
  const [revealed, setRevealed] = useState(false);
  const [cheer, setCheer] = useState(false);
  const months = EMI_TENURES[step];
  const monthly = amount / months;
  const end = EMI_TENURES.length - 1;

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    setCheer(true);
  };

  useEffect(() => {
    if (!cheer) return;
    const t = setTimeout(() => setCheer(false), 4200);
    return () => clearTimeout(t);
  }, [cheer]);

  return (
    <div className={s.calc}>
      <div className={s.inputs}>
        <p className={s.lead}>Spread the {program} fee over monthly instalments. Move the sliders to see what suits your budget.</p>

        {plans.length > 1 && (
          <div className={s.plans} role="radiogroup" aria-label="What to finance">
            {plans.map((pl, i) => (
              <button key={pl.label} type="button" role="radio" aria-checked={planIdx === i} className={planIdx === i ? s.planOn : ''} onClick={() => pickPlan(i)}>
                <b>{pl.label}</b>
                <small>{inr(pl.fee)}</small>
              </button>
            ))}
          </div>
        )}

        <div className={s.field}>
          <label htmlFor={`${id}-amount`}>
            <span>{yearly ? 'Yearly fee to finance' : 'Fee to finance'}</span>
            <output htmlFor={`${id}-amount`}>{inr(amount)}</output>
          </label>
          <input
            id={`${id}-amount`}
            type="range"
            min={10000}
            max={fee}
            step={1000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            style={{ ['--p' as string]: `${((amount - 10000) / (fee - 10000)) * 100}%` }}
          />
          <div className={s.ends}>
            <span>{inr(10000)}</span>
            <span>{inr(fee)}</span>
          </div>
        </div>

        <div className={s.field}>
          <label htmlFor={`${id}-months`}>
            <span>Tenure</span>
            <output htmlFor={`${id}-months`}>{months} months</output>
          </label>
          <input
            id={`${id}-months`}
            type="range"
            min={0}
            max={end}
            step={1}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={{ ['--p' as string]: `${(step / end) * 100}%` }}
          />
          {/* milestones: every tenure the plan offers; tap one to jump to it */}
          <div className={s.marks} role="group" aria-label="Tenure options in months">
            {EMI_TENURES.map((m, i) => (
              <button key={m} type="button" className={i === step ? s.markOn : ''} style={{ left: `${(i / end) * 100}%` }} onClick={() => setStep(i)} aria-label={`${m} months`} aria-pressed={i === step}>
                <i aria-hidden="true" />
                <span>{m}</span>
              </button>
            ))}
          </div>
          <p className={s.unit}>months</p>
        </div>
      </div>

      <div className={s.result} aria-live="polite">
        <p className={s.k}>EMI per month to students</p>

        <div className={s.row}>
          <p key={`${amount}-${months}`} className={s.big}>
            {inr(monthly)}
          </p>
          <div key={`m${months}`} className={s.months}>
            <b>{months}</b>
            <span>months</span>
          </div>
        </div>

        <ScratchCard revealed={revealed} onReveal={reveal} />

        <dl className={s.sum}>
          <div>
            <dt>{yearly ? 'Yearly fee' : 'Fee amount'}</dt>
            <dd>{inr(amount)}</dd>
          </div>
          <div>
            <dt>Total interest</dt>
            <dd>{revealed ? inr(0) : 'Scratch to reveal'}</dd>
          </div>
          <div>
            <dt>Total payable</dt>
            <dd>{inr(amount)}</dd>
          </div>
        </dl>
        <p className={s.note}>Indicative figures only. The final plan depends on the lending partner&apos;s terms.</p>

        {cheer && (
          <div className={s.cheer} role="status">
            <span className={s.stars} aria-hidden="true" />
            <b>Congratulations!</b>
            <span>You&apos;ve unlocked a No Cost EMI offer at 0% interest.</span>
          </div>
        )}
      </div>
    </div>
  );
}
