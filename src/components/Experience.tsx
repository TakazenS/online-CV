import { useState } from 'react';
import { FaGraduationCap as FaGrad, FaBriefcase as FaWork, FaLayerGroup as FaMix } from 'react-icons/fa';

const experiences = [
  {
    title: 'CDD 1 mois - Archiviste',
    company: 'Cabinet Villard et Woinet, Renage',
    date: 'Juillet 2022',
    description: "Classement des archives du cabinet d'expert-comptable, relation avec le personnel des différents services, travail en autonomie dans le respect des consignes.",
    icon: <FaWork />,
    type: 'work'
  },
  {
    title: 'Mannequinat',
    company: 'Success Models, Paris',
    date: `Aout 2022 - ${new Date().getFullYear()}`,
    description: 'Mon relationnel est apprécié par les membres de mon agence de mannequinat et les directeurs de casting.',
    icon: <FaWork />,
    type: 'work'
  },
  {
    title: 'Bac STI2D option ITEC',
    company: 'Lycée LPO Ferdinant Buisson, Voiron',
    date: 'Septembre 2023 - Juin 2024',
    description: 'Formation axée sur la conception et la modélisation de produits techniques. Acquisition de compétences en analyse de systèmes, modélisation 3D et démarche de projet.',
    icon: <FaGrad />,
    type: 'edu'
  },
  {
    title: 'BTS SIO option SLAM',
    company: 'Lycée Algoud Laffemas, Valence',
    date: 'Septembre 2024 - Juin 2026',
    description: 'Formation orientée développement d’applications et programmation. Acquisition de compétences en conception de bases de données, développement web et logiciel, ainsi qu’en gestion de projets informatiques.',
    icon: <FaGrad />,
    type: 'edu'
  },
  {
    title: 'Stage de 1ère année',
    company: 'Widip Cloud, Seyssinet-Pariset',
    date: 'Mai 2025 - Juin 2025',
    description: 'Stage de 5 semaines en entreprise dans le cadre de ma formation en BTS SIO. Support technique aux demandes des clients à l’aide de l’outil GLPI.',
    icon: <FaWork />,
    type: 'work'
  },
  {
    title: 'Stage de 2ème année',
    company: 'ESRF, Grenoble',
    date: 'Janvier 2026 - Février 2026',
    description: (
      <>
        Stage de 6 semaines en entreprise. Participation au développement du portail web <a href="https://paleo.esrf.fr" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">Paleo</a>. Travail sur l’intégration et l’amélioration d’un viewer 3D ainsi que sur différentes fonctionnalités du site. Collaboration dans un environnement de projet réel.
      </>
    ),
    icon: <FaWork />,
    type: 'work'
  }
];

type TabType = 'work' | 'edu' | 'all';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const filteredExperiences = experiences.filter(exp => 
    activeTab === 'all' ? true : exp.type === activeTab
  );

  const tabs = [
    { id: 'work', label: 'Professionnel', icon: <FaWork className="text-sm" /> },
    { id: 'edu', label: 'Scolaire', icon: <FaGrad className="text-sm" /> },
    { id: 'all', label: 'Mixte', icon: <FaMix className="text-sm" /> },
  ];

  return (
    <section id="experience" className="py-24 px-8 md:px-0">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text">
            Mon <span className="text-primary-500 underline decoration-primary-200 decoration">Parcours</span>
          </h2>
          
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-[1.02]'
                    : 'text-slate-500 hover:text-light-text dark:hover:text-dark-text hover:bg-white/100 dark:hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative timeline-line">
          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => {
              // For 'work' or 'edu' tabs: Header is on the left.
              // For 'Mixte' (all) tab: Edu on the left (header), Pro (work) on the right (header).
              const isHeaderLeft = activeTab !== 'all' || exp.type === 'work';
              
              return (
                <div
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal group"
                >
                  {/* Left Column (Desktop) */}
                  <div className="hidden md:block w-1/2 pr-12 text-right">
                    {isHeaderLeft ? (
                      <div className="space-y-2">
                        <span className="text-primary-500 font-bold">{exp.date}</span>
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{exp.title}</h3>
                        <p className="text-slate-500 text-sm italic">{exp.company}</p>
                      </div>
                    ) : (
                      <div className="p-6 bg-light-card dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:shadow-md hover:border-primary-500/30 dark:hover:border-primary-500/30 text-left">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-500/50 z-10 transform -translate-x-1/2 transition-transform group-hover:scale-125 group-hover:rotate-12">
                    {exp.icon}
                  </div>

                  {/* Right Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-16">
                    {/* Header on right for desktop */}
                    {!isHeaderLeft ? (
                      <div className="hidden md:block space-y-2 mb-4">
                        <span className="text-primary-500 font-bold">{exp.date}</span>
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{exp.title}</h3>
                        <p className="text-slate-500 text-sm italic">{exp.company}</p>
                      </div>
                    ) : null}
                    
                    {/* Always show header on top for mobile */}
                    <div className="md:hidden space-y-1 mb-3">
                      <span className="text-primary-500 font-bold text-sm">{exp.date}</span>
                      <h3 className="text-lg font-bold text-light-text dark:text-dark-text leading-tight">{exp.title}</h3>
                      <p className="text-slate-500 text-xs italic">{exp.company}</p>
                    </div>

                    {/* Show card on right if header is on left, OR always on mobile */}
                    {isHeaderLeft || typeof window !== 'undefined' && window.innerWidth < 768 ? (
                      <div className="p-6 bg-light-card dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:shadow-md hover:border-primary-500/30 dark:hover:border-primary-500/30">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
