import React from 'react';
import { SiteConfig } from '@/core/entities/SiteConfig';

interface FooterProps {
  config: SiteConfig;
}

const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-[#080b13] border-t border-gray-200 dark:border-gray-800/80 text-center text-gray-500 dark:text-gray-500 text-xs font-mono transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>{config.footer.copyright}</p>
        <div className="flex items-center gap-6">
          {config.footer.socials.map((social) => (
            <a
              key={social.platform}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
