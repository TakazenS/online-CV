import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      
      <footer className="py-12 text-center border-t border-slate-200 dark:border-slate-800 mt-24">
        <p className="text-slate-500 font-medium">
          © {new Date().getFullYear()} — Online CV — <span className="text-primary-500">Built with Bun & Vite</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
