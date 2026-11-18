'use client';

import { useId, useState } from 'react';
import s from './EmiCalculator.module.scss';

const inr = (n: number) => `₹ ${Math.round(n).toLocaleString('en-IN')}`;

/** Client's EMI chart: fee split equally over the tenure, no interest. PG = full programme fee, UG = yearly fee. */
export const EMI_TENURES = [6, 8, 10, 12, 15, 18];
const PG = ['MBA', 'MCA'];
const feeFor = (program: string) => (PG.includes(program) ? 130000 : 44000);

export function EmiCalculator({ total, program }: { total: number; program: string }) {
  const id = useId();
  const [months, setMonths] = useState(12);
  const fee = ['MBA', 'MCA', 'BBA', 'BCA', 'B.Com'].includes(program) ? feeFor(program) : total;
  const monthly = fee / months;
  const yearly = !PG.includes(program) && fee === 44000;

  return (
    <div className={s.calc}>
      <div className={s.inputs}>
        <p className={s.lead}>Spread the {program} fee over monthly instalments. Pick a tenure to see what suits your budget.</p>
        <div className={s.field}>
          <label>
            <span>{yearly ? 'Yearly fee' : 'Programme fee'}</span>
            <output>{inr(fee)}</output>
          </label>
        </div>
        <fieldset className={s.tenure}>
          <legend id={`${id}-t`}>Tenure</legend>
          <div role="radiogroup" aria-labelledby={`${id}-t`}>
            {EMI_TENURES.map((m) => (
              <label key={m} className={m === months ? s.on : ''}>
                <input type="radio" name={`${id}-tenure`} checked={m === months} onChange={() => setMonths(m)} />
                {m} months
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className={s.result} aria-live="polite">
        <p className={s.k}>EMI per month to students</p>
        <p className={s.big}>{inr(monthly)}</p>
        <p className={s.per}>for {months} months</p>

        <dl className={s.sum}>
          <div>
            <dt>{yearly ? 'Yearly fee' : 'Fee amount'}</dt>
            <dd>{inr(fee)}</dd>
          </div>
          <div>
            <dt>Tenure</dt>
            <dd>{months} months</dd>
          </div>
        </dl>
        <p className={s.note}>Indicative figures only. The final plan depends on the lending partner&apos;s terms.</p>
      </div>
    </div>
  );
}
