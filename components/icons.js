export function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.75" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.2c0-1.55 1-2.3 2.15-2.3 1.25 0 2.1.85 2.1 2.35V17" />
      <line x1="11.5" y1="10" x2="11.5" y2="17" />
    </svg>
  );
}

export function BookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4H11.5V19.5H5.5C4.67 19.5 4 18.83 4 18V5.5Z" />
      <path d="M20 5.5C20 4.67 19.33 4 18.5 4H12.5V19.5H18.5C19.33 19.5 20 18.83 20 18V5.5Z" />
      <path d="M11.5 4C11.5 4 12 5 12 6.5C12 5 12.5 4 12.5 4" />
    </svg>
  );
}

export function ChevronIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M3 6.5q4-1 9 0t9 0" />
      <path d="M3 12q4.5 1 9 0t9 0" />
      <path d="M3 17.5q4-1 9 0t9 0" />
    </svg>
  );
}

export function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M5 5q7 7 14 14" />
      <path d="M19 5q-7 7-14 14" />
    </svg>
  );
}
