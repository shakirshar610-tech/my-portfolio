import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import profilePhoto from '../assets/images/shakir_profile.jpg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, skills, projects } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const plainTextResume = `
SHAKIR HUSSAIN
BS Artificial Intelligence Student | Aspiring AI/ML Engineer
Sukkur, Sindh, Pakistan
Phone: ${profile.phone}
Email: ${profile.email}
GitHub: ${profile.githubUrl}
LinkedIn: ${profile.linkedInUrl}

SUMMARY:
Artificial Intelligence undergraduate at Aror University of Art, Architecture, Design & Heritage, Sukkur. Passionate about machine learning, practical software engineering, and developing applications that solve real-world problems. Experienced in Python, C++, TypeScript, React, and building domain-specific tools like SmartKisan (AgriTech) and Digital Khata (Fintech).

EDUCATION:
Bachelor of Science in Artificial Intelligence (BS AI) | 2026 – 2030
Aror University of Art, Architecture, Design & Heritage — Sukkur, Sindh, Pakistan
Focus: Artificial Intelligence Fundamentals, Machine Learning Concepts, Data Science, Object-Oriented Programming in C++ & Python.

TECHNICAL SKILLS:
- Programming Languages: Python, C++, C, JavaScript, TypeScript
- AI & Data Science: Artificial Intelligence fundamentals, Machine Learning concepts, Data Science fundamentals, AI tools
- Web & Interface: React, TypeScript, HTML5, CSS3, Tailwind CSS, Vite, WordPress
- Tools & Platforms: Git, GitHub, VS Code, Supabase

FEATURED PROJECTS:
1. SmartKisan — Agriculture App
   Stack: React, TypeScript, Vite, Tailwind CSS, AI Advisory Logic
   - Engineered an agriculture application supporting Pakistani farmers with crop health advisory and disease identification.
   - Designed symptom-to-disease inference for Cotton, Wheat, Rice, Sugarcane, and Mango with organic and chemical remedies.

2. Digital Khata — Business Accounting App
   Stack: React, TypeScript, Tailwind CSS, LocalStorage
   - Developed a digital bookkeeping tool for small merchants to manage debit/credit transactions and customer balances.
   - Implemented real-time ledger balance calculations and offline persistence.

3. C/C++ Algorithmic Problem Solving & Foundations
   Stack: C++, C, Data Structures
   - Implemented core algorithms including binary search, pointer manipulation, and 2D matrix transformations.

4. Python Data Science & Mini Projects
   Stack: Python, Data Processing, Automation Scripts
   - Created data transformation pipelines, mathematical gradient updates, and automation tools.

PHILOSOPHY:
"Learning consistently. Building practically. Growing through technology."
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Action Toolbar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae</span>
            <span className="text-xs text-slate-500 font-mono">· Shakir Hussain</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
              title="Copy plain text CV for email or job applications"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Plain Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close CV dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200 print:bg-white print:text-black">
          
          {/* Header Block with Profile Photo */}
          <div className="border-b border-slate-800 pb-6 flex flex-col-reverse sm:flex-row items-start justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {profile.name}
              </h1>
              <div className="text-sm font-semibold text-emerald-400">
                BS Artificial Intelligence Student · Aspiring AI/ML Engineer
              </div>
              
              {/* Contact Row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 pt-1">
                <a href={`tel:${profile.phoneRaw}`} className="hover:text-emerald-400 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono">{profile.phone}</span>
                </a>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <a href={`mailto:${profile.email}`} className="hover:text-emerald-400 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{profile.email}</span>
                </a>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                  <Github className="w-3.5 h-3.5" />
                  <span className="font-mono">github.com/{profile.githubUsername}</span>
                </a>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sukkur, Sindh, Pakistan</span>
                </span>
              </div>
            </div>

            {/* Photo Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shrink-0 shadow-lg">
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
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-white">Bachelor of Science in Artificial Intelligence (BS AI)</span>
                <span className="font-mono text-slate-400 text-xs">2026 – 2030 (Undergraduate)</span>
              </div>
              <div className="text-xs text-emerald-400 font-medium">
                Aror University of Art, Architecture, Design & Heritage — Sukkur, Sindh, Pakistan
              </div>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                Core coursework: Artificial Intelligence Fundamentals, Machine Learning Concepts, Data Science, Object-Oriented Programming (C++ & Python), Data Structures, Algorithms.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-semibold text-white">Programming Languages: </span>
                <span className="text-slate-300">Python, C++, C, JavaScript, TypeScript</span>
              </div>
              <div>
                <span className="font-semibold text-white">AI & Data Science: </span>
                <span className="text-slate-300">Artificial Intelligence fundamentals, Machine Learning concepts, Data Science fundamentals, AI tools & Prompt Engineering</span>
              </div>
              <div>
                <span className="font-semibold text-white">Web & Frontend: </span>
                <span className="text-slate-300">React, TypeScript, HTML5, CSS3, Tailwind CSS, Vite, WordPress</span>
              </div>
              <div>
                <span className="font-semibold text-white">Tools & Workflow: </span>
                <span className="text-slate-300">Git, GitHub, VS Code, Supabase, Linux environments</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase">
              Key Projects
            </h2>

            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex flex-wrap items-center justify-between">
                  <span className="font-bold text-white text-sm">{proj.title}</span>
                  <span className="text-[11px] font-mono text-emerald-400">{proj.category}</span>
                </div>
                <div className="text-slate-400 text-[11px] font-mono">
                  Stack: {proj.technologies.join(', ')}
                </div>
                <p className="text-slate-300 leading-relaxed pt-0.5">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>

          {/* Learning Pledge */}
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 italic">
            "{profile.philosophy}"
          </div>

        </div>

      </div>
    </div>
  );
};
