import { FaUserCircle } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 px-8 md:px-0">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3 text-primary-500 font-semibold tracking-widest uppercase">
            <FaUserCircle size={20} />
            <span>Qui suis-je ?</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-light-text dark:text-dark-text leading-tight">
            Loris Moine
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="pt-4">
            <a
              href="#projects"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-primary-500/30 transition-all hover:scale-105 active:scale-95"
            >
              Voir mes projets
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-500/20 rounded-3xl blur-2xl transition-all group-hover:bg-primary-500/30" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-200 dark:bg-dark-card rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white dark:border-slate-800 transition-transform group-hover:scale-105">
            <img className="rounded-full h-64 w-auto" src="/pp.png" alt="ProfilePicture"/>
          </div>
        </div>
      </div>
    </section>
  );
};
