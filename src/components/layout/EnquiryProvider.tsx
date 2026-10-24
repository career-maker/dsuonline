'use client';

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { programs } from '@/data/programs';
import { CloseIcon } from '@/components/ui/icons';
import s from './EnquiryModal.module.scss';

const EnquiryContext = createContext<{ open: () => void } | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used inside <EnquiryProvider>');
  return ctx;
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}
      {isOpen && <EnquiryModal onClose={() => setOpen(false)} />}
    </EnquiryContext.Provider>
  );
}

function EnquiryModal({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLElement>('input')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('button, input, select, a[href]');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, [onClose]);

  // Prototype behaviour: no backend yet (Strapi/CRM phase), so the form only confirms locally.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className={s.backdrop} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={dialogRef} data-lenis-prevent className={s.dialog} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button type="button" className={s.close} onClick={onClose} aria-label="Close enquiry form">
          <CloseIcon />
        </button>
        <h2 id={titleId} className={s.title}>
          Enquire Now
        </h2>
        {sent ? (
          <p className={s.done} role="status">
            Thank you. This is a prototype form: your details were not sent anywhere yet.
          </p>
        ) : (
          <form onSubmit={onSubmit} className={s.form}>
            <label>
              Full name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Mobile number
              <input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+\s-]{10,15}" required />
            </label>
            <label>
              Programme
              <select name="program" required defaultValue="">
                <option value="" disabled>
                  Select programme
                </option>
                {programs.map((p) => (
                  <option key={p.code} value={p.code}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className={s.submit}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
