import React from "react";
import { SiteConfig } from '@/core/entities/SiteConfig';

interface WorkProps {
  config: SiteConfig;
}

const Work: React.FC<WorkProps> = ({ config }) => {
  return (
    <section id="work" className="py-24 bg-white dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            // SELECTED WORK & INNOVATIONS
          </h2>
        </div>
        <div className="space-y-12">
          {config.projects.map((project, index) => (
            <div
              key={project.id}
              className="group border-b border-gray-200 dark:border-gray-800 pb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300"
            >
              <div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-2 block">
                  {String(index + 1).padStart(2, "0")} · {project.year} · {project.category}
                </span>
                <h3 className="text-3xl font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>
              <a
                className="font-mono text-sm text-cyan-600 dark:text-cyan-400 inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Demo <span className="text-base">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
