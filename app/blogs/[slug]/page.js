// app/blogs/[slug]/page.jsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import MainLayout from "@/app/MainLayout";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?limit=1000`, {
      cache: "no-store",
    });
    const json = await res.json();

    if (!json.success) return [];
    return json.data.map((post) => ({ slug: post.slug }));
  } catch (err) {
    console.error("Failed to generate static params:", err);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${params.slug}`, {
      cache: "no-store",
    });
    const json = await res.json();

    if (!json.success) return { title: "Blog not found" };

    const post = json.data;
    return {
      title: `${post.title} | Blogs`,
      description: post.metaDescription || post.excerpt,
      openGraph: {
        title: post.title,
        description: post.metaDescription || post.excerpt,
        type: "article",
        url: `/blogs/${post.slug}`,
      },
      alternates: { canonical: `/blogs/${post.slug}` },
    };
  } catch (err) {
    return { title: "Blog not found" };
  }
}

export default async function BlogPostPage({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${params.slug}`, {
    cache: "no-store",
  });

  const json = await res.json();
  if (!json.success || !json.data) return notFound();

  const post = json.data;

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
            {post.readTime || "5 min read"}
          </span>
          <time>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>

        {/* Cover Image */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}

        {/* Content */}
        <article className="prose prose-blue max-w-none">
          {/* If content is HTML from CMS or rich editor, dangerouslySetInnerHTML is needed */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
