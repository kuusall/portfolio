import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] transition-colors duration-300">
      {/* Navbar Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 dark:bg-[#0b0f19]/80 border-b border-gray-200 dark:border-gray-800/50 flex items-center justify-between px-6">
        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
        <div className="flex gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3 w-12 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          ))}
        </div>
      </div>

      {/* Hero Skeleton */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full space-y-6">
          <div className="h-3 w-48 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          <div className="space-y-4">
            <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
            <div className="h-12 w-1/2 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          </div>
          <div className="h-6 w-full max-w-2xl bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          <div className="flex gap-6">
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          </div>
        </div>
      </section>

      {/* Section Skeleton (Repeated for Work, About, etc.) */}
      {[1, 2].map((section) => (
        <section key={section} className="py-24 px-6 max-w-7xl mx-auto w-full space-y-12">
          <div className="h-3 w-40 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-48 bg-gray-100 dark:bg-gray-900 animate-pulse rounded-lg border border-gray-200 dark:border-gray-800" />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
