import type { Author } from "./types";

const TAGLINES: Record<Author, string> = {
  doug: "By Doug Skinner",
  ai: "Co-Authored",
  "co-authored": "Co-Authored with Doug",
};

export function getTagline(author: Author): string {
  return TAGLINES[author];
}
