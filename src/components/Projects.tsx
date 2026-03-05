import {FaGithub, FaGitlab, FaExternalLinkAlt, FaRocket} from 'react-icons/fa';

const projects = [
  {
    name: 'Instalock Roulette',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    github: 'https://github.com/TakazenS/instalock-roulette',
    demoUrl: 'https://instalock-roulette.com',
    tags: ['React', 'TypeScript', 'Vite']
  },
  {
    name: 'Domain Portals',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    github: 'https://gitlab.esrf.fr/ui/domain-portals',
    demoUrl: 'https://paleo.esrf.fr',
    tags: ['React', 'TypeScript', 'Vite']
  },
  {
    name: `Aut'Occasion`,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    github: 'https://github.com/TakazenS/AutoOcasion',
    tags: ['PHP', 'JavaScript', 'Node.js', 'Express']
  },
  {
    name: 'VEM',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    github: 'https://github.com/TakazenS/VEM-Web',
    tags: ['Laravel', 'Tailwind', 'Vite']
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/50 dark:bg-black/10 backdrop-blur-sm px-8 md:px-0">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text flex items-center justify-start gap-4">
              <FaRocket size={42}/>
              Mes <span className="text-primary-500 underline decoration-primary-200">Projets</span>
            </h2>
            <p className="text-slate-500 max-w-lg italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <a
            href="https://github.com/TakazenS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-slate-900 dark:text-slate-100 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-500/10 hover:underline decoration-primary-500/30 underline-offset-4 font-bold transition-all transform hover:scale-105"
          >
            <FaGithub size={24} />
            <span>Tout voir sur GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isGitLab = project.github.includes('gitlab');
            const RepoIcon = isGitLab ? FaGitlab : FaGithub;

            return (
              <div
                key={index}
                className="group p-8 bg-light-card dark:bg-dark-card rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-primary-500/50 dark:hover:border-primary-500/30 hover:scale-[1.03] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-light-text dark:text-dark-text group-hover:text-primary-500 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-primary-500 transition-all transform hover:scale-125"
                          title="Voir le site en direct"
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all transform hover:scale-105 active:scale-95 border border-transparent hover:border-primary-400/20"
                        aria-label={isGitLab ? "GitLab Repository" : "GitHub Repository"}
                        title={isGitLab ? "Voir sur GitLab" : "Voir sur GitHub"}
                      >
                        <RepoIcon size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">Code</span>
                      </a>
                    </div>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
