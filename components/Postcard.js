const ICONS = {
  violin: (
    <g strokeWidth={1.2}>
      <path d="M32 10c-4 0-6 4-6 8 0 6 4 8 4 14 0 4-3 5-3 9 0 4 2.5 6 5 6s5-2 5-6c0-4-3-5-3-9 0-6 4-8 4-14 0-4-2-8-6-8Z" />
      <path d="M27 20c-1.5 1-1.5 3 0 4M37 20c1.5 1 1.5 3 0 4" />
      <circle cx="32" cy="12" r="2" />
    </g>
  ),
  cat: (
    <g strokeWidth={1.2}>
      <path d="M20 30c0-8 5-14 12-14s12 6 12 14-5 12-12 12-12-4-12-12Z" />
      <path d="M22 20l-3-8 8 5M42 20l3-8-8 5" />
      <circle cx="27" cy="28" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="37" cy="28" r="1.2" fill="currentColor" stroke="none" />
      <path d="M28 33q4 3 8 0" />
    </g>
  ),
  book: (
    <g strokeWidth={1.2}>
      <path d="M18 16c4-2 10-2 14 1v20c-4-3-10-3-14-1V16Z" />
      <path d="M46 16c-4-2-10-2-14 1v20c4-3 10-3 14-1V16Z" />
    </g>
  ),
  yarn: (
    <g strokeWidth={1.2}>
      <circle cx="32" cy="24" r="12" />
      <path d="M22 18q10 4 20 12M22 30q10-4 20-12M20 24q12 0 24 0" />
    </g>
  ),
};

export default function Postcard({ variant, filled, color, delay = 0, style, className = "" }) {
  return (
    <div
      style={style}
      className={`pointer-events-none absolute h-24 w-32 rounded-sm border border-foreground/30 bg-background/95 p-2 shadow-lg ${className}`}
    >
      <svg viewBox="0 0 64 48" className="h-full w-full text-foreground/70" fill="none" stroke="currentColor">
        <rect x="1" y="1" width="62" height="46" rx="2" strokeDasharray="3 2" strokeWidth={1} />
        <rect x="46" y="4" width="12" height="14" strokeWidth={1} />
        <g
          transform="translate(-2, 4) scale(0.55)"
          style={{
            fill: filled ? color : "transparent",
            transition: `fill 700ms ease ${delay}ms`,
          }}
        >
          {ICONS[variant]}
        </g>
        <path d="M8 38h20M8 42h14" strokeWidth={1} strokeLinecap="round" opacity={0.5} />
      </svg>
    </div>
  );
}
