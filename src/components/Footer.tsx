import React from 'react';
import { Mail, Linkedin, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Sidhant Narula. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
             Virginia, USA
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:[REPLACE_WITH_EMAIL]"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sidhant-narula/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              <span className="text-sm">
                {theme === 'light' ? 'Dark' : 'Light'} Mode
              </span>
            </button>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;