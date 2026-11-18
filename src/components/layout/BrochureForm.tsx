'use client';

import { useId, useState, type FormEvent } from 'react';
import { programs } from '@/data/programs';
import { ChevronDown, DownloadIcon } from '@/components/ui/icons';
import s from './Footer.module.scss';

/** Brochure file per programme code (public/docs). */
const BROCHURE: Record<string, string> = Object.fromEntries(['mba', 'mca', 'bba', 'bca', 'bcom'].map((c) => [c, `/docs/dsu-online-${c}-brochure.pdf`]));

export function BrochureForm() {
  const id = useId();
  const [choice, setChoice] = useState('');
  const [note, setNote] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!choice) {
      setNote('Please select a programme.');
      return;
    }
    const href = BROCHURE[choice] ?? '#';
    if (href === '#') {
      setNote('Brochure coming soon.');
      return;
    }
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setNote('Brochure opened in a new tab.');
  };

  return (
    <form className={s.brochure} onSubmit={submit}>
      <h2 id={id}>Download Brochures</h2>
      <div className={s.select}>
        <select id={`${id}-programme`} name="programme" aria-labelledby={id} value={choice} onChange={(e) => setChoice(e.target.value)}>
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
