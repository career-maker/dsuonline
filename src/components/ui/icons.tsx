import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

export const ChevronRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
export const ChevronLeft = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...p}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);
export const ChevronDown = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const SearchIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const HomeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} strokeWidth={1.8} {...p}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v10h12V10" />
  </svg>
);
export const PhoneIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} strokeWidth={1.8} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const UserIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} strokeWidth={1.8} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.5 18.5a6.5 6.5 0 0 1 11 0" />
  </svg>
);
export const DownloadIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...p}>
    <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const PlayIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" fill="currentColor" {...p}>
    <path d="M8 5.5v13l11-6.5z" />
  </svg>
);
export const MegaphoneIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} strokeWidth={1.6} {...p}>
    <path d="M4 5h12a2 2 0 0 1 2 2v9H8l-4 3z" />
    <path d="M8 9h6M8 12h4" />
  </svg>
);

/** 3x3 dotted glyph shown on the design's primary buttons */
export const DotsIcon = (p: P) => (
  <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" fill="currentColor" {...p}>
    <circle cx="7" cy="1.5" r="1.35" />
    <circle cx="7" cy="12.5" r="1.35" />
    <circle cx="1.5" cy="7" r="1.35" />
    <circle cx="12.5" cy="7" r="1.35" />
    <circle cx="7" cy="7" r="1.35" />
  </svg>
);

export const SocialIcon = ({ name, ...p }: P & { name: string }) => {
  const common = { viewBox: '0 0 24 24', width: '1em', height: '1em', 'aria-hidden': true, fill: 'currentColor', ...p } as P;
  switch (name) {
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4A21 21 0 0 0 14.3 4c-2.3 0-3.8 1.4-3.8 3.9v2.6H8v3h2.5V21z" />
        </svg>
      );
    case 'x':
      return (
        <svg {...common}>
          <path d="M21 6.6c-.6.3-1.3.5-2 .6a3.4 3.4 0 0 0 1.5-1.9c-.7.4-1.4.7-2.2.8a3.5 3.5 0 0 0-6 3.2A10 10 0 0 1 4.9 5.600a3.500 3.500 0 0 0 1.100 4.700c-.6 0-1.100-.2-1.600-.4 0 1.700 1.200 3.100 2.800 3.500-.5.100-1 .2-1.600.1.400 1.400 1.700 2.400 3.200 2.400A7 7 0 0 1 3 17.400 10 10 0 0 0 8.400 19c6.500 0 10.100-5.400 10.100-10.100v-.5c.7-.5 1.200-1.100 1.700-1.800z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.8}>
          <rect x="4" y="4" width="16" height="16" rx="4.5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="16.8" cy="7.2" r=".6" fill="currentColor" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M5.2 9h2.9v9.5H5.2zM6.6 4.6a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4M10 9h2.8v1.3c.5-.9 1.6-1.6 3.1-1.6 3 0 3.5 2 3.5 4.5v5.3h-2.9v-4.7c0-1.2 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.8H10z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8M10 15V9l5.2 3z" />
        </svg>
      );
  }
};
