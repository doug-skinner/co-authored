import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { PostList } from "@/components/post-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts written by humans, AI, or both.",
};

export default function BlogIndex() {
  const posts = getAllPosts("blog");

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Blog
        </h1>
        <p className="mt-2 text-neutral-600">
          Posts written by humans, AI, or both.
        </p>
      </header>
      <PostList posts={posts} />
    </div>
  );
}
