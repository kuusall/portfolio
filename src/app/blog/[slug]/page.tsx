import React from 'react';
import { BlogService } from '@/services/blogService';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export const revalidate = 60; 
// Optimization: Pre-render all blog posts at build time for instant loading
export async function generateStaticParams() {
  const posts = await BlogService.getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await BlogService.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-[#0b0f19] transition-colors duration-300">
      {/* Navigation Header */}
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-12">
        <Link
          href="/#blog"
          className="font-mono text-xs text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 mb-8"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono uppercase px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded">
              {post.category}
            </span>
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
              {new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Markdown Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-p:text-gray-600 dark:prose-p:text-gray-400
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
          prose-code:text-cyan-600 dark:prose-code:text-cyan-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800
          prose-pre:bg-gray-900 dark:prose-pre:bg-black prose-pre:border prose-pre:border-gray-800
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
