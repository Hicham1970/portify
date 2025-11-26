import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase, FaShip, FaCalculator, FaClipboardList, FaScroll, FaBoxes, FaAnchor } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiDjango, SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

// Données pour les compétences Full Stack
const fullStackSkills = [
    { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <TbBrandNextjs /> },
  { name: 'Python & Django', icon: <SiDjango /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Node.js & Express', icon: <FaNodeJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'SQL (PostgreSQL)', icon: <FaDatabase /> },
  { name: 'NoSQL (MongoDB)', icon: <SiMongodb /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git & GitHub', icon: <FaGitAlt /> },
];

// Données pour les compétences en Draft Survey
const draftSurveySkills = [
  { name: 'Calculs de Stabilité', icon: <FaCalculator /> },
  { name: 'Inspection de Navires', icon: <FaShip /> },
  { name: 'Rapports de Jauge', icon: <FaClipboardList /> },
  { name: 'Conventions Maritimes', icon: <FaScroll /> },
  { name: 'Gestion de Cargaison', icon: <FaBoxes /> },
  { name: 'Sécurité Portuaire', icon: <FaAnchor /> },
];

const SkillBadge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-2 rounded-full">
    {icon}
    {name}
  </span>
);

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 sm:p-24 overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-6xl text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">Mes Compétences</h1>
        <p className="text-lg text-content/80 mb-16">
          Une fusion unique d expertise maritime et de développement logiciel moderne.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section Développeur Full Stack */}
          <div className="bg-white/5 p-8 rounded-lg shadow-lg border border-white/10 text-left">
            <h2 className="text-3xl font-semibold text-content mb-6">Développeur Full Stack</h2>
            <div className="flex flex-wrap gap-3">
              {fullStackSkills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Section Draft Survey */}
          <div className="bg-white/5 p-8 rounded-lg shadow-lg border border-white/10 text-left">
            <h2 className="text-3xl font-semibold text-content mb-6">Expertise en Draft Survey</h2>
            <div className="flex flex-wrap gap-3">
              {draftSurveySkills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}