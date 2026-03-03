import { FaCode, FaLanguage, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'HTML/CSS', icon: <div className="flex gap-1"><FaHtml5 className="text-orange-500"/><FaCss3Alt className="text-blue-500"/></div> },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-white/50 dark:bg-black/10 backdrop-blur-sm px-8 md:px-0">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text flex items-center justify-center gap-4">
            <FaCode className="text-primary-500" />
            Compétences <span className="text-primary-500">&</span> langues
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto italic px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 bg-light-card dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="text-4xl mb-4 group-hover:scale-105 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">{skill.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-8 px-4 md:px-0">
          <h3 className="text-2xl font-bold text-light-text dark:text-dark-text flex items-center gap-3">
            <FaLanguage className="text-primary-500" /> Langues
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex justify-between font-bold">
                <span className="text-light-text dark:text-dark-text">Français</span>
                <span className="text-primary-500">Natif</span>
              </div>
              <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full w-[100%] shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-bold">
                <span className="text-light-text dark:text-dark-text">Anglais</span>
                <span className="text-primary-500">LV2</span>
              </div>
              <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full w-[65%] shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
