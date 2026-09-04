import React from 'react';
import { SiteConfig } from '@/core/entities/SiteConfig';

interface AboutProps {
  config: SiteConfig;
}

const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#0e1322] border-t border-gray-200 dark:border-gray-800/40 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="inline-block font-mono text-xs text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
          // ABOUT
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          {config.about.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-12">
          {config.about.bio}
        </p>

        <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-gray-800/60">
          <div className="font-mono text-xs text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-4">
            // TECHNICAL SKILLS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.about.skills.map((cat) => (
              <div key={cat.name} className="p-4 rounded-lg bg-white dark:bg-[#0b0f19]/60 border border-gray-200 dark:border-gray-800/60 transition-colors duration-300">
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
