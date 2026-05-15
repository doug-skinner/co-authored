export type Author = "doug" | "ai" | "co-authored";

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  author: Author;
  slug: string;
  section: "blog" | "human";
  tags?: string[];
  draft?: boolean;
}

export interface ExperimentMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  draft?: boolean;
}
