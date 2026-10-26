'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { EnquiryModal } from './EnquiryModal';

const EnquiryContext = createContext<{ open: (programCode?: string | unknown) => void } | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used inside <EnquiryProvider>');
  return ctx;
}

const AUTO_DELAY_MS = 30000;
const SEEN_KEY = 'dsu-enquiry-seen';

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = isOpen;
  }, [isOpen]);

  const open = useCallback((programCode?: string | unknown) => {
    setSelectedProgram(typeof programCode === 'string' ? programCode : undefined);
    setOpen(true);
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* storage blocked: the popup may reappear on the next page load, which is acceptable */
    }
  }, []);

  // Auto-open once per browser session, 5 s after the page has finished loading.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      /* ignore */
    }
    let timer: ReturnType<typeof setTimeout>;
    const arm = () => {
      timer = setTimeout(() => {
        // never stack on top of another dialog (hero popups, the manual enquiry button ...)
        if (openRef.current || document.querySelector('[role="dialog"][aria-modal="true"]')) return;
        open();
      }, AUTO_DELAY_MS);
    };
    if (document.readyState === 'complete') arm();
    else window.addEventListener('load', arm, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', arm);
    };
  }, [open]);

  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <EnquiryModal
          initialProgramme={selectedProgram}
          onClose={() => {
            setOpen(false);
            setSelectedProgram(undefined);
          }}
        />
      )}
    </EnquiryContext.Provider>
  );
}
