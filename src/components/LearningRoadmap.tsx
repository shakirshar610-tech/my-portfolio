import React from 'react';
import { Target, CheckCircle, ArrowRight, Lightbulb, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const LearningRoadmap: React.FC = () => {
  const { learningGoals } = PORTFOLIO_DATA;

  return (
    <section id="roadmap" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-3 mb-14" direction="up">
          <div className="text-xs font-semibold text-emerald-400">
            Growth & Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Current learning roadmap & engineering goals.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            True engineering excellence requires intentional, disciplined learning. Here are the 6 core tracks I am actively pursuing across my undergraduate coursework and hands-on laboratory experiments.
          </p>
        </Reveal>

        {/* 6 Structured Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningGoals.map((goal, idx) => (
            <Reveal 
              key={goal.id} 
              direction="up" 
              delay={(idx % 3) * 0.08}
            >
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    Goal 0{goal.id}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700">
                    {goal.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {goal.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {goal.description}
                </p>

                {/* Topics list unboxed */}
                <div className="space-y-1 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400">Focus Areas:</div>
                  <div className="text-xs text-slate-400 flex flex-wrap gap-x-2 gap-y-1">
                    {goal.topics.map((t, idx) => (
                      <React.Fragment key={t}>
                        <span className="text-slate-300">{t}</span>
                        {idx < goal.topics.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Practical Outcome */}
              <div className="pt-4 mt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-emerald-400">Practical Outcome:</div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {goal.practicalOutcome}
                </p>
              </div>
            </div>
          </Reveal>
          ))}
        </div>

        {/* Continuous Learning Pledge */}
        <Reveal direction="up" delay={0.15} className="mt-12">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-emerald-400" />
                <span>Commitment to Open-Source Collaboration</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                I actively seek opportunities to collaborate with experienced AI researchers, software engineers, and mentor networks. Every project is publicly documented on GitHub to encourage peer review and community contributions.
              </p>
            </div>
            <a
              href="https://github.com/shakirshar610-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors whitespace-nowrap shrink-0"
            >
              Follow on GitHub
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
