import { getTagline } from "@/lib/authors";
import type { Author } from "@/lib/types";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function Byline({ author, date }: { author: Author; date: string }) {
  return (
    <div className="flex items-baseline gap-3 text-sm text-neutral-500">
      <span>{getTagline(author)}</span>
      <span aria-hidden="true">&middot;</span>
      <time dateTime={date}>{formatDate(date)}</time>
    </div>
  );
}
