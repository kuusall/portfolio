import React from 'react';
import { SiteConfig } from '@/core/entities/SiteConfig';

interface ContactProps {
  config: SiteConfig;
}

const Contact: React.FC<ContactProps> = ({ config }) => {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0e1322] border-t border-gray-200 dark:border-gray-800/40 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
          // CONTACT
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">
          {config.contact.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base mb-8">
          {config.contact.subtitle}
        </p>
        <div className="space-y-3 font-mono">
          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            Direct Email
          </p>
          <a
            className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-400 hover:underline block text-gray-900 dark:text-white transition-colors"
            href={`mailto:${config.contact.email}`}
          >
            {config.contact.email}
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 pt-2">
            Phone: <span className="text-gray-600 dark:text-gray-300">{config.contact.phone}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
