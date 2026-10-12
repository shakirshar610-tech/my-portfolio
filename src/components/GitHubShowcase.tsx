import React from 'react';
import { Github, ExternalLink, GitBranch, Star, GitCommit, Code, Terminal, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const GitHubShowcase: React.FC = () => {
  const { profile, githubStats, projects } = PORTFOLIO_DATA;

  return (
    <section id="github" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-emerald-400">
              Open Source Footprint
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Documenting progress & repositories on GitHub.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              I use GitHub to track daily commits, maintain production-ready repositories, practice code review hygiene, and collaborate openly with developers worldwide.
            </p>
          </div>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit @{profile.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </Reveal>

        {/* GitHub Metrics & Language Distribution Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Language Breakdown (lg:col-span-7) */}
          <Reveal className="lg:col-span-7" direction="up" delay={0.05}>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6 h-full">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Language Breakdown</h3>
                  <p className="text-xs text-slate-400">Primary programming languages across repositories</p>
                </div>
                <span className="text-xs font-mono text-emerald-400">@{profile.githubUsername}</span>
              </div>

            {/* Language Progress Bar */}
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-950">
              {githubStats.languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percent}%`}
                  className="h-full transition-all"
                />
              ))}
            </div>

            {/* Language Legends */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {githubStats.languages.map((lang) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-xs font-semibold text-white">{lang.name}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 pl-4.5">
                    {lang.percent}%
                  </div>
                </div>
              ))}
            </div>

            {/* Developer Discipline */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="text-xs font-semibold text-slate-300">Commit Habits & Code Quality:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                {githubStats.strengths.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

          {/* Activity Synopsis Box (lg:col-span-5) */}
          <Reveal className="lg:col-span-5" direction="up" delay={0.15}>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                    <GitBranch className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Version Control Workflow</h3>
                    <p className="text-xs text-slate-400">Git branch & commit standards</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  <p>
                    Every project adheres to structured commit conventions: descriptive messages, isolated feature branches, and clear documentation.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-slate-400 space-y-1 border border-slate-800">
                    <div className="text-slate-500">// Example commit message standard</div>
                    <div><span className="text-emerald-400">feat(agri-engine):</span> add yellow rust severity rules</div>
                    <div><span className="text-blue-400">fix(ledger):</span> prevent negative balance rounding</div>
                    <div><span className="text-purple-400">docs(readme):</span> update installation and test guide</div>
                  </div>
                </div>
              </div>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Explore All Repositories on GitHub</span>
              </a>
            </div>
          </Reveal>

        </div>

        {/* Featured Repository Cards */}
        <Reveal direction="up" delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((proj) => (
            <a
              key={proj.id}
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                  {proj.title.split('—')[0]}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {proj.tagline}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-900 text-[11px] font-mono text-emerald-400">
                {proj.technologies[0]} · {proj.technologies[1]}
              </div>
            </a>
          ))}
        </Reveal>

      </div>
    </section>
  );
};
