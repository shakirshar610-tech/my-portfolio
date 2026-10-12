import React, { useState } from 'react';
import { 
  Sprout, 
  BookOpen, 
  Code2, 
  FileCode, 
  ExternalLink, 
  Github, 
  Play, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { SmartKisanSimulator } from './SmartKisanSimulator';
import { DigitalKhataSimulator } from './DigitalKhataSimulator';
import { Reveal } from './Reveal';

interface ProjectsProps {
  onOpenCodeViewer: (lang: 'C++' | 'Python') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCodeViewer }) => {
  const { projects } = PORTFOLIO_DATA;
  const [activeInteractiveTab, setActiveInteractiveTab] = useState<'smartkisan' | 'digitalkhata'>('smartkisan');

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-3 mb-14" direction="up">
          <div className="text-xs font-semibold text-emerald-400">
            Featured Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Practical projects solving real community & business needs.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            From digital crop assistance for Pakistani farmers to business ledgers and algorithmic problem-solving in C++ and Python, each project demonstrates practical engineering and real code.
          </p>
        </Reveal>

        {/* Project Cards (Bento-inspired Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Project 1: SmartKisan */}
          <Reveal direction="up" delay={0.05}>
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all h-full">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={projects[0]?.demoUrl || 'https://smartkisan-farming-a-qeu0.bolt.host'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                      title="Launch Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={projects[0]?.githubUrl || 'https://github.com/shakirshar610-tech/Smartkisan-Agriculture-App'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-emerald-400">
                    AI & Agriculture Technology · Pakistan
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    SmartKisan — Agriculture App
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Designed to support farmers in Pakistan through digital farming assistance and AI-oriented agricultural advisory.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Addresses vital information bottlenecks faced by smallholders across Sindh and Punjab. Features crop health advisory, regional irrigation guidance, and symptom-based pest identification.
                </p>

                {/* Technologies unboxed list */}
                <div className="pt-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Stack: </span>
                  <span>React · TypeScript · Vite · Tailwind CSS · AI Advisory Logic</span>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-300">Core Highlights:</div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">›</span>
                      <span>Advisor for Cotton, Wheat, Rice, Sugarcane, and Mango</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">›</span>
                      <span>Diagnostic treatment with organic and approved chemical actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">›</span>
                      <span>Optimized for rural mobile web access with lightweight bundle size</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveInteractiveTab('smartkisan');
                    document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Launch Live Simulator</span>
                  <Play className="w-3.5 h-3.5 fill-emerald-400" />
                </button>
                <a
                  href={projects[0]?.githubUrl || 'https://github.com/shakirshar610-tech/Smartkisan-Agriculture-App'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1"
                >
                  <span>GitHub Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Project 2: Digital Khata */}
          <Reveal direction="up" delay={0.15}>
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all h-full">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={projects[1]?.githubUrl || 'https://github.com/shakirshar610-tech?tab=repositories'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-blue-400">
                    Fintech & Small Merchant Accounting · Pakistan
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Digital Khata — Business Accounting App
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Helping businesses and shopkeepers manage everyday financial records, debit/credit, and cashflow.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Replaces error-prone manual paper diaries with an offline-capable, instant ledger. Calculates customer balances, generates running transaction totals, and organizes credit recovery.
                </p>

                {/* Technologies unboxed list */}
                <div className="pt-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Stack: </span>
                  <span>React · TypeScript · Tailwind CSS · Local Storage · Calculation Engine</span>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-300">Core Highlights:</div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">›</span>
                      <span>Udhaar (Credit) and Wasooli (Debit) tracking per customer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">›</span>
                      <span>Automatic net receivable calculations with zero math lag</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">›</span>
                      <span>Instant customer search and categorized date logs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveInteractiveTab('digitalkhata');
                    document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Launch Live Ledger Demo</span>
                  <Play className="w-3.5 h-3.5 fill-blue-400" />
                </button>
                <a
                  href={projects[1]?.githubUrl || 'https://github.com/shakirshar610-tech?tab=repositories'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1"
                >
                  <span>GitHub Repositories</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Project 3: C/C++ Programming */}
          <Reveal direction="up" delay={0.05}>
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all h-full">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={projects[2]?.githubUrl || 'https://github.com/shakirshar610-tech/C-programs'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View C/C++ Code</span>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-purple-400">
                    Systems & Core Computer Science
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    C/C++ Programming & Algorithmic Foundations
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Beginner-to-intermediate collection of programming exercises, memory management, and data structures.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Hands-on practice exploring dynamic memory, pointers, search algorithms, recursion, and object-oriented abstractions. Built as foundational training for high-performance computing.
                </p>

                <div className="pt-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Concepts: </span>
                  <span>Pointers · Dynamic Arrays · Matrix Algebra · Binary Search · Structs & OOP</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onOpenCodeViewer('C++')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300"
                >
                  <span>Inspect C++ Code in Runner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={projects[2]?.githubUrl || 'https://github.com/shakirshar610-tech/C-programs'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1"
                >
                  <span>GitHub Repositories</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Project 4: Python Projects */}
          <Reveal direction="up" delay={0.15}>
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all h-full">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <FileCode className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={projects[3]?.githubUrl || 'https://github.com/shakirshar610-tech/python-mini-projects'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Python Code</span>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-amber-400">
                    Python Programming & Data Science
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Python Projects & Machine Learning Workflows
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Collection of projects for practicing Python syntax, data processing logic, and practical automation scripts.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Practical mini-projects and utilities demonstrating data wrangling, normalization, file automation, and mathematical implementations of foundational machine learning algorithms.
                </p>

                <div className="pt-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Concepts: </span>
                  <span>Gradient Descent · Data Imputation · Z-Score Scaling · Script Automation</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onOpenCodeViewer('Python')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>Inspect Python Code in Runner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={projects[3]?.githubUrl || 'https://github.com/shakirshar610-tech/python-mini-projects'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1"
                >
                  <span>GitHub Repositories</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Embedded Interactive Live Showcase Pane */}
        <Reveal direction="up" delay={0.1} className="space-y-6 pt-6">
          <div id="interactive-demo">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="text-xs font-semibold text-emerald-400">
                  Live Interactive Showcase
                </div>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  Test Shakir's Application Logic Live
                </h3>
              </div>

              {/* Segmented Controller Tab */}
              <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveInteractiveTab('smartkisan')}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeInteractiveTab === 'smartkisan'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sprout className="w-3.5 h-3.5" />
                  <span>SmartKisan (AgriTech)</span>
                </button>
                <button
                  onClick={() => setActiveInteractiveTab('digitalkhata')}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeInteractiveTab === 'digitalkhata'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Digital Khata (Ledger)</span>
                </button>
              </div>
            </div>

            {/* Active Simulator Render */}
            <div className="pt-6">
              {activeInteractiveTab === 'smartkisan' ? (
                <SmartKisanSimulator />
              ) : (
                <DigitalKhataSimulator />
              )}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
