import { FaCode, FaLanguage, FaDatabase, FaLaravel, FaBrain } from 'react-icons/fa';
import { BiLogoReact, BiLogoTypescript, BiLogoJavascript, BiLogoGit } from 'react-icons/bi';

import skillsData from '../data/skills.json';
import { type JSX } from "react";

const skillIcons: Record<string, JSX.Element> = {
  BiLogoReact: <BiLogoReact className="text-blue-400" size={40} />,
  BiLogoTypescript: <BiLogoTypescript className="text-blue-600" size={40} />,
  BiLogoJavascript: <BiLogoJavascript className="text-yellow-400" size={40} />,
  BiLogoGit: <BiLogoGit className="text-orange-600" size={40} />,
  FaDatabase: <FaDatabase className="text-slate-400" />,
  FaLaravel: <FaLaravel className="text-red-500" />,
};

const skills = skillsData.skills.map(skill => ({
  ...skill,
  icon: skillIcons[skill.icon as keyof typeof skillIcons]
}));

const softSkills = skillsData.softSkills;

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white/50 dark:bg-black/10 backdrop-blur-sm px-8 md:px-0">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text flex items-center justify-center gap-4">
            <FaCode />
            Mes <span className="text-primary-500 underline decoration-primary-200 decoration">Compétences</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto italic px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 bg-light-card dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-white/10 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-sm transition-all duration-500 hover:shadow-md hover:scale-105 active:scale-[0.98]"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500 origin-left">
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
            <FaBrain className="text-primary-500" /> Soft-skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((soft) => (
              <div
                key={soft}
                className="px-6 py-3 bg-light-card dark:bg-dark-card rounded-xl border border-slate-200 dark:border-white/10 text-light-text dark:text-dark-text font-semibold shadow-sm hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:scale-105 active:scale-[0.98] transition-all duration-500 hover:shadow-md cursor-default"
              >
                {soft}
              </div>
            ))}
          </div>
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
                <div className="h-full bg-primary-500 rounded-full w-[60%] shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
