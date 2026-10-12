import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  GraduationCap, 
  MapPin, 
  Code2, 
  Terminal,
  FileText,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';
import profilePhoto from '../assets/images/shakir_profile.jpg';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const { profile, metrics } = PORTFOLIO_DATA;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-800/80 overflow-hidden">
      {/* Subtle ambient gradient mesh for depth */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-blue-500/5 blur-3xl pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen Hero (Left: Typographic hierarchy, Right: Visual & interactive profile terminal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column (lg:col-span-7) */}
          <Reveal className="lg:col-span-7 space-y-6" direction="up">
            
            {/* Editorial Kicker with clean text separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Aror University of Art, Architecture, Design & Heritage</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Sukkur, Pakistan</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">BS Artificial Intelligence</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.15]">
              Building intelligent systems & practical software for real-world impact.
            </h1>

            {/* Integrated Profile Photo & Introduction Narrative */}
            <div className="flex flex-col sm:flex-row items-start gap-5 pt-1">
              {/* Profile Photo */}
              <div className="relative shrink-0 group">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-xl shadow-slate-950/80 ring-1 ring-emerald-500/20 transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10">
                  <img
                    src={profilePhoto}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/images/shakir_profile.jpg') {
                        target.src = '/images/shakir_profile.jpg';
                      } else {
                        target.src = 'https://avatars.githubusercontent.com/u/252011097?v=4';
                      }
                    }}
                    alt="Shakir Hussain - BS Artificial Intelligence Student and Aspiring AI/ML Engineer"
                    className="w-full h-full object-cover aspect-square"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Availability Badge */}
                <div className="absolute -bottom-2 -right-1 bg-slate-950/95 border border-slate-700/90 rounded-full px-2.5 py-0.5 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[10px] font-mono font-medium text-emerald-300">Open to Work</span>
                </div>
              </div>

              {/* Sub-headline / Narrative */}
              <div className="space-y-3 min-w-0 flex-1">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Hi, I'm <strong className="font-semibold text-white">Shakir Hussain</strong>. I am an Artificial Intelligence student passionate about programming, AI-driven applications, and engineering reliable solutions. Currently developing projects combining modern software development, data science, and intelligent automation like <strong className="text-emerald-300 font-semibold">SmartKisan</strong> and <strong className="text-emerald-300 font-semibold">Digital Khata</strong>.
                </p>

                {/* Philosophy quote */}
                <div className="py-2 px-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <p className="text-xs sm:text-sm text-slate-400 font-mono italic">
                    "{profile.philosophy}"
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors shadow-sm shadow-emerald-500/10 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore Featured Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-medium text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>Connect on LinkedIn</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Full CV</span>
              </button>
            </div>

            {/* Verified Quick Contact & Links Strip */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs font-semibold text-slate-400">
                Direct Contact & Verified Profiles
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                
                {/* Phone */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                  <a 
                    href={`tel:${profile.phoneRaw}`} 
                    className="flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-400 transition-colors min-w-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate font-mono">{profile.phone}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(profile.phone, 'phone')}
                    className="p-1 text-slate-500 hover:text-white transition-colors"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedItem === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                  <a 
                    href={`mailto:${profile.email}`} 
                    className="flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-400 transition-colors min-w-0"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate font-mono">{profile.email}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(profile.email, 'email')}
                    className="p-1 text-slate-500 hover:text-white transition-colors"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedItem === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* GitHub */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                  <a 
                    href={profile.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-400 transition-colors min-w-0"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-200 shrink-0" />
                    <span className="truncate font-mono">{profile.githubUsername}</span>
                  </a>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-slate-500 hover:text-white transition-colors"
                    title="Open GitHub profile"
                    aria-label="Open GitHub profile"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </Reveal>

          {/* Right Column: High-fidelity interactive profile terminal (lg:col-span-5) */}
          <Reveal className="lg:col-span-5" direction="up" delay={0.15}>
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-sm">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-slate-400 text-[11px]">shakir@aror-ai:~$</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">profile.json</span>
              </div>

              {/* Terminal Body Content */}
              <div className="p-5 font-mono text-xs space-y-3.5 text-slate-300">
                
                <div className="flex items-center gap-3.5 pb-1">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shrink-0">
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
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-slate-500 text-[11px]">// candidate_overview</div>
                    <div className="text-emerald-400 font-semibold text-sm truncate">
                      Shakir Hussain
                    </div>
                    <div className="text-slate-400 text-xs truncate">
                      BS in Artificial Intelligence (2026–2030)
                    </div>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-800/80">
                  <div className="text-slate-500 text-[11px]">// academic_institution</div>
                  <div className="text-slate-200">
                    Aror University of Art, Architecture, Design & Heritage
                  </div>
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>Sukkur, Sindh, Pakistan</span>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-800/80">
                  <div className="text-slate-500 text-[11px]">// primary_stack</div>
                  <div className="text-slate-300 flex flex-wrap gap-x-2 gap-y-1 text-[11px]">
                    <span className="text-amber-300">Python</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-blue-300">C++</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-cyan-300">TypeScript</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-emerald-300">React</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-purple-300">Git/GitHub</span>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-800/80">
                  <div className="text-slate-500 text-[11px]">// active_focus</div>
                  <div className="text-slate-300 text-[11px] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">›</span>
                      <span>SmartKisan (AI AgriTech for Pakistan)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">›</span>
                      <span>Digital Khata (Business Accounting)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">›</span>
                      <span>Algorithmic foundations in C++ & Python</span>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Terminal CTA */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">status: open to internships & collabs</span>
                  <button
                    onClick={onOpenContact}
                    className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1"
                  >
                    <span>initiate contact</span>
                    <span>→</span>
                  </button>
                </div>

              </div>

            </div>
          </Reveal>

        </div>

        {/* 4-Metric Proof Strip below Hero split (Full-width row) */}
        <Reveal direction="up" delay={0.2} className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xs font-medium text-slate-500">
                  {m.label}
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
