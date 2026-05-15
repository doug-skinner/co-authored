import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/content";
import { PostLayout } from "@/components/post-layout";

export function generateStaticParams() {
  return getAllPosts("human").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("human", slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function HumanPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("human", slug);
  if (!post) notFound();

  const { content } = await compileMDX({ source: post.content });

  return <PostLayout meta={post.meta}>{content}</PostLayout>;
}
