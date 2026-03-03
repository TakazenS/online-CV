import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-2xl bg-slate-100 dark:bg-dark-card text-primary-600 dark:text-primary-400 overflow-hidden shadow-inner border border-slate-200 dark:border-slate-800 transition-transform active:scale-95 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {theme === 'light' ? (
            <motion.div
              key="sun"
              initial={{ x: 30, y: 30, opacity: 0, rotate: 45 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              exit={{ x: 30, y: 30, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute"
            >
              <FaSun size={20} className="group-hover:rotate-45 transition-transform duration-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ x: -30, y: 30, opacity: 0, rotate: -45 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              exit={{ x: -30, y: 30, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute"
            >
              <FaMoon size={20} className="group-hover:-rotate-12 transition-transform duration-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};
