import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CursorGlow } from './components/CursorGlow';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 relative overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <footer className="py-12 text-center border-t border-slate-200 dark:border-white/10 mt-24">
        <p className="text-slate-500 font-medium flex items-center justify-center gap-2">
          © Loris Moine {new Date().getFullYear()} — Mon Portfolio —
          <a 
            href="https://github.com/TakazenS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary-500 transition-colors"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
