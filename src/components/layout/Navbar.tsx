"use client";

import React, { useState } from 'react';
import { SiteConfig } from '@/core/entities/SiteConfig';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface NavbarProps {
  config: SiteConfig;
}

const Navbar: React.FC<NavbarProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0b0f19]/80 border-b border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          className="font-mono text-sm font-bold tracking-wider text-gray-900 dark:text-white"
          href="#home"
        >
          {config.name}
        </a>

        <nav className="hidden sm:flex items-center gap-6 sm:gap-8 font-mono text-xs text-gray-500 dark:text-gray-400">
          {config.navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="sm:hidden text-gray-900 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-20 left-0 right-0 bg-white dark:bg-[#0b0f19] border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <nav className="flex flex-col items-center gap-6 font-mono text-sm text-gray-500 dark:text-gray-400 px-6">
          {config.navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-2"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
