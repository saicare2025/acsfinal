import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPostBySlug } from "../page";
import { Clock } from "lucide-react";
import MainLayout from "@/app/MainLayout";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: `${post.title} | Blogs`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blogs/${post.slug}`,
    },
    alternates: { canonical: `/blogs/${post.slug}` },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <MainLayout>
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-gray-500">
          <Link href="/blogs" className="hover:text-blue-600">
            Blogs
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{post.title}</h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
          <time>{post.date}</time>
          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <article className="prose prose-blue max-w-none">
          {post.content}
        </article>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blogs"
            className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 shadow"
          >
            ← Back to all articles
          </Link>
        </div>
      </main>
    </MainLayout>
  );
}
