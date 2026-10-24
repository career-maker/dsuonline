'use client';

import { useId, useState, type FormEvent } from 'react';
import { programs } from '@/data/programs';
import { ChevronDown, DownloadIcon } from '@/components/ui/icons';
import s from './Footer.module.scss';

/** Prototype: brochure PDFs are not supplied yet, so submit only confirms selection. */
export function BrochureForm() {
  const id = useId();
  const [choice, setChoice] = useState('');
  const [note, setNote] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setNote(choice ? 'Brochure download will be available soon.' : 'Please select a programme.');
  };

  return (
    <form className={s.brochure} onSubmit={submit}>
      <h2 id={id}>Download Brochures</h2>
      <div className={s.select}>
        <select aria-labelledby={id} value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option value="">Select Program</option>
          {programs.map((p) => (
            <option key={p.code} value={p.code}>
              {p.name}
            </option>
          ))}
        </select>
        <ChevronDown />
      </div>
      <button type="submit">
        <DownloadIcon /> Download PDF
      </button>
      <p role="status" className={s.note}>
        {note}
      </p>
    </form>
  );
}
