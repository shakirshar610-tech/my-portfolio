import React from 'react';
import { GraduationCap, MapPin, Compass, Code, Brain, Cpu, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';
import profilePhoto from '../assets/images/shakir_profile.jpg';

export const About: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const focusPillars = [
    {
      index: '01',
      title: 'Academic Foundations in AI',
      description: 'Studying core algorithms, state spaces, data science, and mathematical foundations of Machine Learning at Aror University.',
    },
    {
      index: '02',
      title: 'Practical Real-World Solutions',
      description: 'Building tools that address everyday challenges in Pakistan, from digital farming assistance (SmartKisan) to small merchant financial ledgers (Digital Khata).',
    },
    {
      index: '03',
      title: 'Core Systems & Problem Solving',
      description: 'Strengthening programming logic, memory dynamics, and algorithmic efficiency through intensive practice in C++ and Python.',
    },
    {
      index: '04',
      title: 'Modern Engineering Workflow',
      description: 'Employing Git and GitHub for disciplined version control, clean modular architecture, and collaborative open-source workflows.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-3 mb-14" direction="up">
          <div className="text-xs font-semibold text-emerald-400">
            About Shakir
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Rooted in academic rigor, driven by practical technology.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            I am an Artificial Intelligence undergraduate at Aror University of Art, Architecture, Design & Heritage in Sukkur, Sindh, Pakistan. My journey centers on translating algorithmic concepts into software that delivers genuine utility.
          </p>
        </Reveal>

        {/* Narrative & Institution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Text (lg:col-span-7) */}
          <Reveal className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base" direction="up">
            <p>
              Growing up with curiosity about how intelligent systems transform society, I chose to specialize in <strong className="text-white font-semibold">Artificial Intelligence</strong>. Rather than treating AI as mere theoretical math or generic chatbot prompts, I focus on the intersection of <strong className="text-white font-semibold">data, software architecture, and real human needs</strong>.
            </p>
            <p>
              In our regional economy, sectors like agriculture and small-scale commerce are ripe for digitization. This inspired me to create <strong className="text-emerald-300 font-semibold">SmartKisan</strong>, an app designed to provide crop advisory and disease detection for farmers, and <strong className="text-emerald-300 font-semibold">Digital Khata</strong>, replacing vulnerable paper notebooks with a reliable digital ledger.
            </p>
            <p>
              Simultaneously, I invest heavily in mastering <strong className="text-white font-semibold">Python and C++</strong> to maintain strong algorithmic fluency, low-level memory awareness, and clean object-oriented design.
            </p>

            {/* Quote Block */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 space-y-1">
              <div className="text-xs font-medium text-emerald-400">Core Engineering Ethos</div>
              <p className="text-sm italic font-mono text-slate-200">
                "{profile.philosophy}"
              </p>
            </div>
          </Reveal>

          {/* Academic Profile & University Card (lg:col-span-5) */}
          <Reveal className="lg:col-span-5 space-y-4" direction="up" delay={0.15}>
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shrink-0 shadow-md">
                  <img
                    src={profilePhoto}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/images/shakir_profile.jpg') {
                        target.src = '/images/shakir_profile.jpg';
                      }
                    }}
                    alt="Shakir Hussain"
                    className="w-full h-full object-cover aspect-square"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Undergraduate Student</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    Aror University of Art, Architecture, Design & Heritage
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Sukkur, Sindh, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3 text-xs">
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Degree Program:</span>
                  <span className="font-semibold text-slate-200">BS Artificial Intelligence</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Program Span:</span>
                  <span className="font-mono text-slate-200">2026 – 2030 (Undergraduate)</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Primary Languages:</span>
                  <span className="font-mono text-emerald-400">Python · C++ · C</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Development Tools:</span>
                  <span className="text-slate-200">React, TypeScript, Git, Vite</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-xs text-slate-400 leading-normal">
                  Aror University is a premier public university established in historic Sukkur, cultivating innovation at the confluence of technology, heritage, and regional impact.
                </div>
              </div>

            </div>
          </Reveal>

        </div>

        {/* 4 Pillars of Focus */}
        <Reveal direction="up" delay={0.2} className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusPillars.map((pillar) => (
              <div 
                key={pillar.index}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 space-y-2.5 hover:border-slate-700 transition-colors"
              >
                <div className="text-xs font-mono font-semibold text-emerald-400">
                  {pillar.index}
                </div>
                <h4 className="text-sm font-bold text-white">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
