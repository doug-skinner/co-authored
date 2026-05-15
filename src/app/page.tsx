import { getLatestPosts } from "@/lib/content";
import { PostList } from "@/components/post-list";

export default function Home() {
  const posts = getLatestPosts(10);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
          co-authored
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          A personal website built and written entirely through human-AI
          collaboration. Some pieces are written by Doug, some by AI, and some
          together.
        </p>
      </header>
      <section>
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-neutral-400">
          Latest
        </h2>
        <PostList posts={posts} />
      </section>
    </div>
  );
}
