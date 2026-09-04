import React from 'react';
import { SiteConfig } from '@/core/entities/SiteConfig';

interface AwardsProps {
  config: SiteConfig;
}

const Awards: React.FC<AwardsProps> = ({ config }) => {
  return (
    <section id="awards" className="py-24 bg-white dark:bg-[#0b0f19] border-t border-gray-200 dark:border-gray-800/40 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
            // HONORS & ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Recognitions & Awards
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {config.awards.map((award) => (
            <div
              key={award.id}
              className="p-5 rounded-lg bg-gray-50 dark:bg-[#0e1322] border border-gray-200 dark:border-gray-800/80 hover:border-cyan-500 transition-colors duration-300 group"
            >
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block mb-1">
                {award.year}
              </span>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {award.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {award.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
