"use client";

import InfoPopover from "./InfoPopover";

function StackedBook({ book }) {
  return (
    <InfoPopover
      title={book.title}
      placement="right"
      trigger={(triggerProps) => (
        <button
          type="button"
          {...triggerProps}
          className="relative block h-11 w-48 transition-transform hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 192 44" className="h-full w-full">
            <rect
              x="1"
              y="1"
              width="190"
              height="42"
              rx="3"
              fill={book.color}
              stroke="rgba(0,0,0,0.35)"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
            <line x1="166" y1="6" x2="166" y2="38" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
            <line x1="172" y1="6" x2="172" y2="38" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
            <line x1="178" y1="6" x2="178" y2="38" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
          </svg>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 truncate font-heading text-xs font-bold text-background">
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

export default function BookStack({ books }) {
  return (
    <div className="flex flex-col gap-1">
      {books.map((book) => (
        <StackedBook key={book.id} book={book} />
      ))}
    </div>
  );
}
