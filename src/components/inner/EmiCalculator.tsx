'use client';

import { useId, useState } from 'react';
import s from './EmiCalculator.module.scss';

const inr = (n: number) => `₹ ${Math.round(n).toLocaleString('en-IN')}`;

/** Client's EMI chart: every plan is a no-cost EMI (the fee split equally over the tenure, 0% interest). PG = full programme fee, UG = yearly fee. */
export const EMI_TENURES = [6, 8, 10, 12, 15, 18];
const PG = ['MBA', 'MCA'];
const feeFor = (program: string) => (PG.includes(program) ? 130000 : 44000);

export function EmiCalculator({ total, program }: { total: number; program: string }) {
  const id = useId();
  const fee = ['MBA', 'MCA', 'BBA', 'BCA', 'B.Com'].includes(program) ? feeFor(program) : total;
  const yearly = !PG.includes(program) && fee === 44000;
  const [amount, setAmount] = useState(fee);
  const [step, setStep] = useState(3); // index into EMI_TENURES: 12 months
  const months = EMI_TENURES[step];
  const monthly = amount / months;

  const slider = (key: string, label: string, value: string, min: number, max: number, stp: number, val: number, set: (n: number) => void, ends: [string, string]) => (
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
        step={stp}
        value={val}
        onChange={(e) => set(Number(e.target.value))}
        style={{ ['--p' as string]: `${((val - min) / (max - min)) * 100}%` }}
      />
      <div className={s.ends}>
        <span>{ends[0]}</span>
        <span>{ends[1]}</span>
      </div>
    </div>
  );

  return (
    <div className={s.calc}>
      <div className={s.inputs}>
        <p className={s.lead}>Spread the {program} fee over monthly instalments. Move the sliders to see what suits your budget.</p>
        <p className={s.nocost}>
          <b>No Cost EMI</b>
          <span>Every plan is interest-free: you pay only the fee, split into equal instalments.</span>
        </p>
        {slider('amount', yearly ? 'Yearly fee to finance' : 'Fee to finance', inr(amount), 10000, fee, 1000, amount, setAmount, [inr(10000), inr(fee)])}
        {slider('months', 'Tenure', `${months} months`, 0, EMI_TENURES.length - 1, 1, step, setStep, [`${EMI_TENURES[0]} mo`, `${EMI_TENURES[EMI_TENURES.length - 1]} mo`])}
      </div>

      <div className={s.result} aria-live="polite">
        <p className={s.k}>EMI per month to students</p>
        <p key={`${amount}-${months}`} className={s.big}>
          {inr(monthly)}
        </p>
        <p className={s.per}>for {months} months</p>
        <span className={s.badge}>No Cost EMI &middot; 0% interest</span>

        <dl className={s.sum}>
          <div>
            <dt>{yearly ? 'Yearly fee' : 'Fee amount'}</dt>
            <dd>{inr(amount)}</dd>
          </div>
          <div>
            <dt>Total interest</dt>
            <dd>{inr(0)}</dd>
          </div>
          <div>
            <dt>Total payable</dt>
            <dd>{inr(amount)}</dd>
          </div>
        </dl>
        <p className={s.note}>Indicative figures only. The final plan depends on the lending partner&apos;s terms.</p>
      </div>
    </div>
  );
}
