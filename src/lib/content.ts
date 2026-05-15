import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostMeta, Author } from "./types";

const contentDir = path.join(process.cwd(), "content");

function normalizeDate(date: unknown): string {
  if (date instanceof Date) return date.toISOString().split("T")[0];
  return String(date);
}

export function getAllPosts(section: "blog" | "human"): PostMeta[] {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return {
        title: data.title,
        description: data.description,
        date: normalizeDate(data.date),
        author: data.author as Author,
        slug: file.replace(/\.mdx$/, ""),
        section,
        tags: data.tags,
        draft: data.draft,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(
  section: "blog" | "human",
  slug: string
): { meta: PostMeta; content: string } | null {
  const filePath = path.join(contentDir, section, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title,
      description: data.description,
      date: normalizeDate(data.date),
      author: data.author as Author,
      slug,
      section,
      tags: data.tags,
      draft: data.draft,
    },
    content,
  };
}

export function getLatestPosts(count: number): PostMeta[] {
  const blog = getAllPosts("blog");
  const human = getAllPosts("human");
  return [...blog, ...human]
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, count);
}
