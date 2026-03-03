import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Lorem Ipsum Title 1',
    company: 'Company Name 1',
    date: '2023 - Présent',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <FaBriefcase />,
    type: 'work'
  },
  {
    title: 'Lorem Ipsum Title 2',
    company: 'University Name',
    date: '2021 - 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: <FaGraduationCap />,
    type: 'edu'
  },
  {
    title: 'Lorem Ipsum Title 3',
    company: 'Company Name 2',
    date: '2019 - 2021',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    icon: <FaBriefcase />,
    type: 'work'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-8 md:px-0">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text">
            Mon <span className="text-primary-500 underline decoration-primary-200 decoration-wavy">Parcours</span>
          </h2>
        </div>

        <div className="relative timeline-line">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between md:justify-normal group`}
              >
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  {index % 2 === 0 ? (
                    <div className="space-y-2">
                      <span className="text-primary-500 font-bold">{exp.date}</span>
                      <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{exp.title}</h3>
                      <p className="text-slate-500 text-sm italic">{exp.company}</p>
                    </div>
                  ) : null}
                </div>

                <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-500/50 z-10 transform -translate-x-1/2 transition-transform group-hover:scale-125 group-hover:rotate-12">
                  {exp.icon}
                </div>

                <div className="w-full md:w-1/2 pl-12 md:pl-16">
                  {index % 2 !== 0 ? (
                    <div className="hidden md:block space-y-2 mb-4">
                      <span className="text-primary-500 font-bold">{exp.date}</span>
                      <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{exp.title}</h3>
                      <p className="text-slate-500 text-sm italic">{exp.company}</p>
                    </div>
                  ) : null}
                  
                  <div className="md:hidden space-y-1 mb-3">
                    <span className="text-primary-500 font-bold text-sm">{exp.date}</span>
                    <h3 className="text-lg font-bold text-light-text dark:text-dark-text leading-tight">{exp.title}</h3>
                    <p className="text-slate-500 text-xs italic">{exp.company}</p>
                  </div>

                  <div className="p-6 bg-light-card dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md hover:border-primary-500/30">
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
