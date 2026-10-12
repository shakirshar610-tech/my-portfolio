import React from 'react';
import { Terminal, Database, Globe, Wrench, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-3 mb-14" direction="up">
          <div className="text-xs font-semibold text-emerald-400">
            Technical Arsenal
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Practical skills forged through coursework & hands-on development.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            My skill set bridges low-level systems programming, modern web application architecture, and machine learning foundations. Every technology is practiced through real code rather than isolated theory.
          </p>
        </Reveal>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Category 1: Programming Languages */}
          <Reveal direction="up" delay={0.05}>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 h-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Core Programming</h3>
                  <p className="text-xs text-slate-400">Languages of algorithmic logic & systems</p>
                </div>
              </div>

            <div className="divide-y divide-slate-800/80">
              {skills.programming.map((skill) => (
                <div key={skill.name} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white text-sm">{skill.name}</span>
                    <span className="text-emerald-400 font-mono text-[11px]">{skill.level}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

          {/* Category 2: AI & Data Science */}
          <Reveal direction="up" delay={0.15}>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 h-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">AI & Data Science</h3>
                  <p className="text-xs text-slate-400">Foundational intelligence & model concepts</p>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {skills.aiAndData.map((skill) => (
                  <div key={skill.name} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white text-sm">{skill.name}</span>
                      <span className="text-blue-400 font-mono text-[11px]">{skill.level}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Category 3: Web & Frontend Development */}
          <Reveal direction="up" delay={0.05}>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 h-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Web & Interface Engineering</h3>
                  <p className="text-xs text-slate-400">Responsive web apps, interfaces & components</p>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {skills.webDevelopment.map((skill) => (
                  <div key={skill.name} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white text-sm">{skill.name}</span>
                      <span className="text-cyan-400 font-mono text-[11px]">{skill.level}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Category 4: Tools & Platforms */}
          <Reveal direction="up" delay={0.15}>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 h-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Tools & Developer Platforms</h3>
                  <p className="text-xs text-slate-400">Version control, environments & databases</p>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {skills.toolsAndPlatforms.map((skill) => (
                  <div key={skill.name} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white text-sm">{skill.name}</span>
                      <span className="text-amber-400 font-mono text-[11px]">{skill.level}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
