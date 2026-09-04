import React from 'react';
import { SiteConfig } from '@/core/entities/SiteConfig';

interface ExperienceProps {
  config: SiteConfig;
}

const Experience: React.FC<ExperienceProps> = ({ config }) => {
  return (
    <section id="leadership" className="py-24 bg-gray-50 dark:bg-[#0e1322] border-t border-gray-200 dark:border-gray-800/40 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
            // LEADERSHIP & RESEARCH
          </span>
        </div>
        <div className="space-y-12 border-l border-gray-300 dark:border-gray-800 pl-6">
          {config.experience.map((item) => (
            <div key={item.id} className="relative">
              <div
                className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full ${
                  item.isHighlighted
                    ? 'bg-cyan-500'
                    : 'bg-gray-400 dark:bg-gray-700'
                }`}
              />
              <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                {item.period}
              </span>
              <h3 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-3">
                {item.company}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
