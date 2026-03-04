import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'Lorem Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    github: 'https://github.com',
    tags: ['React', 'Tailwind']
  },
  {
    name: 'Lorem Project 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    github: 'https://github.com',
    tags: ['TypeScript', 'Vite']
  },
  {
    name: 'Lorem Project 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    github: 'https://github.com',
    tags: ['Node.js', 'Express']
  },
  {
    name: 'Lorem Project 4',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    github: 'https://github.com',
    tags: ['Bun', 'PostgreSQL']
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8 md:px-0 bg-white/50 dark:bg-black/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text">
              Mes <span className="text-primary-500 underline decoration-primary-200">Projets</span>
            </h2>
            <p className="text-slate-500 max-w-lg italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 font-bold transition-colors"
          >
            <FaGithub size={24} />
            <span>Tout voir sur GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 bg-light-card dark:bg-dark-card rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:shadow-2xl hover:border-primary-500/50 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-light-text dark:text-dark-text group-hover:text-primary-500 transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-primary-500 hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-bold text-primary-500">Lorem Ipsum Dolor</span>
                <FaExternalLinkAlt size={14} className="text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
