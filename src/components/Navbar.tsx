import { type JSX, useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { FaUser, FaCode, FaHistory, FaRocket, FaBars, FaTimes } from 'react-icons/fa';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import navItemsData from '../data/navItems.json';

const navIcons: Record<string, JSX.Element> = {
  FaUser: <FaUser size={14} />,
  FaCode: <FaCode size={14} />,
  FaHistory: <FaHistory size={14} />,
  FaRocket: <FaRocket size={14} />,
};

const navItems = navItemsData.map(item => ({
  ...item,
  icon: navIcons[item.icon as keyof typeof navIcons]
}));

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
        isScrolled ? "bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent"
      )}>
        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
          {/* Burger Menu Button - Left on mobile */}
          <div className="md:hidden w-1/4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-light-text dark:text-dark-text hover:text-primary-500 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <FaBars size={28} />
            </button>
          </div>

          {/* Title - Centered on mobile, left on desktop */}
          <div className="flex-1 md:flex-initial text-center md:text-left md:w-1/5">
            <a href="#" className="text-primary-500 font-black text-xl md:text-2xl tracking-tighter whitespace-nowrap">
              Mon Portfolio
            </a>
          </div>
          
          {/* Centered Nav Links - Desktop only */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-1 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-xl text-light-text dark:text-dark-text hover:bg-primary-500/10 hover:text-primary-500 dark:hover:text-primary-400 transition-all font-semibold flex items-center gap-2 group"
              >
                <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-sm tracking-wide">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Theme Toggle - Right on both mobile and desktop */}
          <div className="w-1/4 md:w-1/5 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer - Slide from left to right */}
        <div className={cn(
          "absolute top-0 left-0 bottom-0 w-[280px] bg-light-bg dark:bg-dark-bg shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="p-6 flex items-center justify-between border-b border-slate-200 dark:border-white/10">
            <span className="text-primary-500 font-black text-xl tracking-tighter">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-light-text dark:text-dark-text hover:text-primary-500 transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 p-4 rounded-2xl text-light-text dark:text-dark-text hover:bg-primary-500/10 hover:text-primary-500 transition-all font-bold group"
              >
                <span className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          <div className="p-6 border-t border-slate-200 dark:border-white/10 text-center">
            <p className="text-sm text-slate-500 font-medium italic">© Loris Moine {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
};
