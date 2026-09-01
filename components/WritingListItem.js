"use client";

import InfoPopover from "./InfoPopover";
import { ChevronIcon } from "./icons";

export default function WritingListItem({ piece }) {
  return (
    <li className="flex items-center gap-2 font-serif">
      <a
        href={piece.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 hover:underline"
      >
        {piece.title}
      </a>
      <InfoPopover
        title={piece.title}
        trigger={(triggerProps) => (
          <button
            type="button"
            {...triggerProps}
            aria-label={`More about ${piece.title}`}
            className="text-foreground/50 hover:text-foreground"
          >
            <ChevronIcon className="h-4 w-4" />
          </button>
        )}
      >
        {piece.description}
      </InfoPopover>
    </li>
  );
}
