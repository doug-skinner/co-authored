import Link from "next/link";
import type { PostMeta } from "@/lib/types";
import { Byline } from "./byline";

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-neutral-500">No posts yet. Check back soon.</p>
    );
  }

  return (
    <ul className="space-y-10">
      {posts.map((post) => (
        <li key={`${post.section}-${post.slug}`}>
          <Link
            href={`/${post.section}/${post.slug}`}
            className="group block"
          >
            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
              {post.title}
            </h3>
            <p className="mt-1 text-neutral-600 line-clamp-2">
              {post.description}
            </p>
            <div className="mt-2">
              <Byline author={post.author} date={post.date} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
