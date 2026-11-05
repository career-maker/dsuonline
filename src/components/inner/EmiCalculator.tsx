'use client';

import { useId, useState } from 'react';
import s from './EmiCalculator.module.scss';

const inr = (n: number) => `₹ ${Math.round(n).toLocaleString('en-IN')}`;

export function emi(principal: number, annualRate: number, months: number) {
  const r = annualRate / 12 / 100;
  if (!r) return principal / months;
  const f = Math.pow(1 + r, months);
  return (principal * r * f) / (f - 1);
}

/** Fee EMI planner: sliders for amount / rate / tenure, result panel in the specialization-banner navy. Indicative only. */
export function EmiCalculator({ total, program }: { total: number; program: string }) {
  const id = useId();
  const [amount, setAmount] = useState(total);
  const [rate, setRate] = useState(10);
  const [months, setMonths] = useState(24);
  const [zero, setZero] = useState(false);

  const effRate = zero ? 0 : rate;
  const monthly = emi(amount, effRate, months);
  const payable = monthly * months;
  const interest = Math.max(0, payable - amount);
  const principalPct = payable ? Math.round((amount / payable) * 100) : 100;

  const field = (key: string, label: string, value: string, min: number, max: number, step: number, val: number, set: (n: number) => void, disabled = false) => (
    <div className={s.field}>
      <label htmlFor={`${id}-${key}`}>
        <span>{label}</span>
        <output htmlFor={`${id}-${key}`}>{value}</output>
      </label>
      <input
        id={`${id}-${key}`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        disabled={disabled}
        onChange={(e) => set(Number(e.target.value))}
        style={{ ['--p' as string]: `${((val - min) / (max - min)) * 100}%` }}
      />
      <div className={s.ends}>
        <span>{key === 'rate' ? `${min}%` : key === 'months' ? `${min} mo` : inr(min)}</span>
        <span>{key === 'rate' ? `${max}%` : key === 'months' ? `${max} mo` : inr(max)}</span>
      </div>
    </div>
  );

  return (
    <div className={s.calc}>
      <div className={s.inputs}>
        <p className={s.lead}>Spread the {program} fee over monthly instalments. Move the sliders to see what suits your budget.</p>
        {field('amount', 'Fee to finance', inr(amount), 10000, total, 1000, amount, setAmount)}
        {field('rate', 'Interest rate (p.a.)', `${effRate}%`, 0, 18, 0.5, effRate, setRate, zero)}
        {field('months', 'Tenure', `${months} months`, 6, 48, 1, months, setMonths)}
        <label className={s.zero}>
          <input type="checkbox" checked={zero} onChange={(e) => setZero(e.target.checked)} />
          <span>
            <b>Zero-cost EMI</b>
            <small>Show the plan at 0% interest</small>
          </span>
        </label>
      </div>

      <div className={s.result} aria-live="polite">
        <p className={s.k}>Your monthly EMI</p>
        <p className={s.big}>{inr(monthly)}</p>
        <p className={s.per}>for {months} months</p>

        <div className={s.bar} aria-hidden="true">
          <i style={{ width: `${principalPct}%` }} />
        </div>
        <div className={s.legend}>
          <span>
            <em className={s.dotP} /> Fee
          </span>
          <span>
            <em className={s.dotI} /> Interest
          </span>
        </div>

        <dl className={s.sum}>
          <div>
            <dt>Fee amount</dt>
            <dd>{inr(amount)}</dd>
          </div>
          <div>
            <dt>Total interest</dt>
            <dd>{inr(interest)}</dd>
          </div>
          <div>
            <dt>Total payable</dt>
            <dd>{inr(payable)}</dd>
          </div>
        </dl>
        <p className={s.note}>Indicative figures only. The final plan depends on the lending partner&apos;s terms.</p>
      </div>
    </div>
  );
}
