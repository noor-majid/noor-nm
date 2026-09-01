"use client";

import InfoPopover from "./InfoPopover";

export default function BookSpine({ book }) {
  return (
    <InfoPopover
      title={book.title}
      placement="right"
      trigger={(triggerProps) => (
        <button
          type="button"
          {...triggerProps}
          style={{ height: book.height, width: book.width }}
          className="relative block overflow-hidden rounded-t-sm shadow-sm transition-transform hover:-translate-y-1"
        >
          <svg viewBox={`0 0 ${book.width} ${book.height}`} className="h-full w-full">
            <rect
              x="1"
              y="1"
              width={book.width - 2}
              height={book.height - 2}
              rx="2"
              fill={book.color}
              stroke="rgba(0,0,0,0.35)"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
            <line x1="4" y1="5" x2={book.width - 4} y2="5" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="4" y1="8" x2={book.width - 4} y2="8" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          </svg>
          <span
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-heading text-sm font-bold text-background"
            style={{ writingMode: "vertical-rl" }}
          >
            {book.title}
          </span>
        </button>
      )}
    >
      {book.author && <p>{book.author}</p>}
      {book.note && <p className="mt-1">{book.note}</p>}
    </InfoPopover>
  );
}
