import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalDetails } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Branding */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs">
              {personalDetails.initials}
            </div>
            <span className="font-semibold text-gray-900 dark:text-white text-sm">
              {personalDetails.name}
            </span>
          </div>

          {/* Center Copyright */}
          <div className="text-center sm:text-left">
            <p>
              Designed and Developed by <strong className="text-gray-900 dark:text-white">{personalDetails.name}</strong>
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              © 2026 All Rights Reserved • Inspired by Vercel & Linear Aesthetics
            </p>
          </div>

          {/* Right Socials & Top Scroll */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg hover:text-[#0A66C2] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg hover:text-[#0A66C2] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Email"
                className="p-2 rounded-lg hover:text-[#0A66C2] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
