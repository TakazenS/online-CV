import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { FaUser, FaCode, FaHistory, FaRocket } from 'react-icons/fa';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Qui suis-je ?', href: '#hero', icon: <FaUser size={14} /> },
  { name: 'Compétences', href: '#skills', icon: <FaCode size={14} /> },
  { name: 'Parcours', href: '#experience', icon: <FaHistory size={14} /> },
  { name: 'Projet', href: '#projects', icon: <FaRocket size={14} /> },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
      isScrolled ? "bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Title - Occupies space on the left */}
        <div className="w-1/4 md:w-1/5">
          <a href="#" className="text-primary-500 font-black text-xl md:text-2xl tracking-tighter whitespace-nowrap">
            My Portfolio
          </a>
        </div>
        
        {/* Centered Nav Links */}
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

        {/* Theme Toggle - Occupies space on the right */}
        <div className="w-1/4 md:w-1/5 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
