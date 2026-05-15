import type { PostMeta } from "@/lib/types";
import { Byline } from "./byline";

export function PostLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          {meta.title}
        </h1>
        <div className="mt-3">
          <Byline author={meta.author} date={meta.date} />
        </div>
      </header>
      <div className="prose prose-neutral max-w-none">{children}</div>
    </article>
  );
}
