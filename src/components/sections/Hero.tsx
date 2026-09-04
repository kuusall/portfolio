import React from 'react';
import { SiteConfig } from '@/core/entities/SiteConfig';

interface HeroProps {
  config: SiteConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-gray-50 dark:bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-6">
          // AI/ML ENGINEER & PRODUCT BUILDER
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter uppercase mb-8 text-gray-900 dark:text-white">
          {config.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
          {config.description}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            className="inline-flex items-center gap-2 font-mono text-sm text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            href={config.ctaLink}
          >
            {config.ctaText} <span className="text-lg">↗</span>
          </a>
          <a
            className="inline-flex items-center gap-2 font-mono text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            href={config.secondaryCtaLink}
          >
            {config.secondaryCtaText} <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
