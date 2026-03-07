import { type JSX, useState} from 'react';
import { FaGraduationCap as FaGrad, FaBriefcase as FaWork, FaLayerGroup as FaMix, FaHistory } from 'react-icons/fa';

import experiencesData from '../data/experiences.json';

const experienceIcons: Record<string, JSX.Element> = {
  FaWork: <FaWork />,
  FaGrad: <FaGrad />,
};

const experiences = experiencesData.map(exp => ({
  ...exp,
  icon: experienceIcons[exp.icon as keyof typeof experienceIcons],
  description: exp.description.includes('<a') ? (
    <span dangerouslySetInnerHTML={{ __html: exp.description }} />
  ) : exp.description,
  date: exp.date.includes('NOWDATE') ? (
    <span>{`Aout 2024 - ${new Date().getFullYear()}`}</span>
  ) : exp.date,
}));

type TabType = 'work' | 'edu' | 'all';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const filteredExperiences = experiences.filter(exp => 
    activeTab === 'all' ? true : exp.type === activeTab
  );

  const tabs = [
    { id: 'all', label: 'Mixte', icon: <FaMix className="text-sm" /> },
    { id: 'work', label: 'Professionnel', icon: <FaWork className="text-sm" /> },
    { id: 'edu', label: 'Scolaire', icon: <FaGrad className="text-sm" /> },
  ];

  return (
    <section id="experience" className="py-24 px-8 md:px-0">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text flex items-center justify-center gap-4">
            <FaHistory size={42} />
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
