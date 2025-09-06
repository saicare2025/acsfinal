import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import MainLayout from '../../MainLayout';
import HeroSection from '../../../components/homepage/HeroSection4';
import Link from 'next/link';
import BlogStructuredDataClient from '../../../components/BlogStructuredDataClient';

// ✅ This is now a server component by default
export default async function BlogPostPage({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), 'data', 'blogs_data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogData = JSON.parse(jsonData);

  const post = blogData.find((blog) => blog.slug === slug);

  if (!post) {
    return (
      <MainLayout>
        <div className="text-center py-20 text-red-500">Blog not found</div>
      </MainLayout>
    );
  }

  // ✅ Process HTML content: remove first h2
  let processedContent = post.content;
  if (typeof processedContent === 'string') {
    const tempDiv = new JSDOM(`<div>${processedContent}</div>`).window.document.querySelector('div');
    const firstH2 = tempDiv.querySelector('h2');
    if (firstH2) firstH2.remove();
    processedContent = tempDiv.innerHTML;
  }


  return (
    <MainLayout>
      <BlogStructuredDataClient 
        blogData={{
          datePublished: '2024-01-01', // You can extract this from post data if available
          dateModified: new Date().toISOString().split('T')[0]
        }}
      />
      <HeroSection />
      <div className="max-w-5xl mx-auto px-4 py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <main>
            <nav className="flex items-center text-base mb-4 lg:mb-6 space-x-2" aria-label="Breadcrumb">
              <Link href="/" className="text-blue-500 hover:underline">Home</Link>
              <span className="text-blue-300">/</span>
              <Link href="/blogs" className="text-blue-500 hover:underline">Blogs</Link>
              <span className="text-blue-300">/</span>
              <span className="text-blue-700 font-medium truncate max-w-[60%]">{post.title}</span>
            </nav>

            <h1 className="text-3xl lg:text-4xl font-bold text-[#035071] mb-6 leading-tight">
              {post.title || 'Untitled'}
            </h1>

            <article className="blog max-w-none">
              {processedContent ? (
                <div dangerouslySetInnerHTML={{ __html: processedContent }} />
              ) : (
                <p>No content available</p>
              )}
            </article>

            <div className="mt-12">
              <Link
                href="/blogs"
                className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 shadow"
              >
                ← Back to all articles
              </Link>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
}
