export default function Squiggle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 8"
      className={`mb-8 h-2 w-16 text-foreground/40 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M0,4 Q8,-2 16,4 T32,4 T48,4 T64,4" strokeLinecap="round" />
    </svg>
  );
}
