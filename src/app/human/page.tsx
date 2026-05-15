import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { PostList } from "@/components/post-list";

export const metadata: Metadata = {
  title: "Human",
  description: "Written by Doug, and only Doug.",
};

export default function HumanIndex() {
  const posts = getAllPosts("human");

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Human
        </h1>
        <p className="mt-2 text-neutral-600">
          Written by Doug, and only Doug.
        </p>
      </header>
      <PostList posts={posts} />
    </div>
  );
}
