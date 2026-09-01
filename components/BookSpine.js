"use client";

import InfoPopover from "./InfoPopover";

export default function BookSpine({ book }) {
  return (
    <InfoPopover
      title={book.title}
      trigger={(triggerProps) => (
        <button
          type="button"
          {...triggerProps}
          style={{ backgroundColor: book.color, height: book.height, width: book.width }}
          className="flex items-end justify-center overflow-hidden rounded-t-sm border border-black/20 pb-2 shadow-sm transition-transform hover:-translate-y-1"
        >
          <span
            className="whitespace-nowrap font-heading text-[10px] font-bold text-background"
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
