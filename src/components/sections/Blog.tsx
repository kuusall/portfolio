import React from 'react';
import { SiteConfig } from '@/core/entities/SiteConfig';
import Link from 'next/link';

interface BlogProps {
  config: SiteConfig;
}

const Blog: React.FC<BlogProps> = ({ config }) => {
  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            // LATEST THOUGHTS & INSIGHTS
          </h2>
 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.blogPosts.map((post) => (
            <div
              key={post.id}
              className="group p-6 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-400 transition-all duration-300 flex flex-col h-full"
           >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono uppercase px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded">
                  {post.category}
                </span>
                <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="font-mono text-xs text-cyan-600 dark:text-cyan-400 inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Read Article <span className="text-base">↗</span>
              </Link>
 
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
