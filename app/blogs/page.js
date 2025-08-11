import React from "react";
import Link from "next/link";
import { Clock, FileText, ChartLine, ShieldCheck } from "lucide-react";
import MainLayout from "../MainLayout";

// --- Data ---
export const POSTS = [
  {
    id: 1,
    slug: "remove-defaults-from-credit-report",
    title: "How to Remove Defaults from Your Credit Report",
    excerpt:
      "Learn the step-by-step process to dispute and remove incorrect defaults that are damaging your credit score.",
    category: "Credit Repair",
    readTime: "5 min read",
    date: "May 15, 2023",
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <p className="mb-4">
          Incorrect defaults can drag down your score. In this guide we’ll cover
          how to get a copy of your credit file, identify errors, and lodge
          effective disputes with the credit provider and bureau.
        </p>
        <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">Steps</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>Obtain your latest credit report from a major bureau.</li>
          <li>
            Match each default to evidence (contracts, emails, payment history).
          </li>
          <li>Write a concise dispute outlining what’s wrong and why.</li>
          <li>
            Send to the credit provider first; escalate to the bureau if needed.
          </li>
          <li>Track timelines and keep written records of all contact.</li>
        </ol>
      </>
    ),
  },
  {
    id: 2,
    slug: "understanding-your-credit-score",
    title: "Understanding Your Credit Score: A Complete Guide",
    excerpt:
      "Discover what factors influence your credit score and how to improve each component effectively.",
    category: "Credit Education",
    readTime: "7 min read",
    date: "June 2, 2023",
    icon: <ChartLine className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <p className="mb-4">
          Credit scores consider repayment history, credit limits, credit mix,
          and enquiries. Small, consistent improvements compound over time.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Pay on time—set reminders or direct debits.</li>
          <li>Keep utilisation low (ideally &lt; 30%).</li>
          <li>Limit unnecessary hard enquiries.</li>
          <li>Dispute inaccuracies promptly.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    slug: "impact-of-credit-inquiries",
    title: "The Impact of Credit Inquiries on Your Score",
    excerpt:
      "Hard vs soft inquiries — what's the difference and how they affect your creditworthiness.",
    category: "Credit Basics",
    readTime: "4 min read",
    date: "April 28, 2023",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <p className="mb-4">
          Hard enquiries appear on your file and may reduce your score
          temporarily; soft enquiries don’t impact your score.
        </p>
        <p>
          Rate-shopping within a short window is often treated as a single
          enquiry.
        </p>
      </>
    ),
  },
  {
    id: 4,
    slug: "rebuilding-credit-after-hardship",
    title: "Rebuilding Credit After Financial Hardship",
    excerpt:
      "Proven strategies to rebuild your credit score after bankruptcy, defaults or other financial challenges.",
    category: "Credit Repair",
    readTime: "6 min read",
    date: "July 10, 2023",
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <p className="mb-4">
          Recovery is possible: stabilise income/expenses, negotiate payment
          plans, and rebuild a positive history with small, manageable credit
          limits.
        </p>
      </>
    ),
  },
  {
    id: 5,
    slug: "how-long-negative-items-stay",
    title: "How Long Do Negative Items Stay on Your Report?",
    excerpt:
      "The complete timeline for different types of negative marks and when they should automatically disappear.",
    category: "Credit Education",
    readTime: "5 min read",
    date: "March 22, 2023",
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    content: (
      <>
        <p className="mb-4">
          Most negative items expire after a set period. Knowing the timelines
          helps you plan realistic improvements.
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Late payments: typically 2 years (varies by bureau/region).</li>
          <li>Defaults: often 5 years.</li>
          <li>Bankruptcy: commonly 5–7 years depending on circumstances.</li>
        </ul>
      </>
    ),
  },
];

export const getPostBySlug = (slug) => POSTS.find((p) => p.slug === slug);

// --- Page ---
export default function BlogsPage() {
  return (
    <MainLayout>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Credit Insights
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Educational resources to help you understand and improve your
              credit
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col"
              >
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-md">
                    {post.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mt-2 flex-grow">{post.excerpt}</p>

                {/* Meta */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <time>{post.date}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
