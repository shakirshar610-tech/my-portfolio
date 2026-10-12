import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-1">
            <div className="text-base font-bold text-white tracking-tight">
              {profile.name}
            </div>
            <div className="text-xs text-slate-400">
              BS Artificial Intelligence Student · Aror University Sukkur, Pakistan
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#roadmap" className="hover:text-emerald-400 transition-colors">Roadmap</a>
            <a href="#github" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Shakir Hussain. All rights reserved. Built for professional LinkedIn portfolio.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a 
              href={`tel:${profile.phoneRaw}`} 
              className="hover:text-emerald-400 font-mono transition-colors"
            >
              {profile.phone}
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a 
              href={`mailto:${profile.email}`} 
              className="hover:text-emerald-400 transition-colors"
            >
              {profile.email}
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a 
              href={profile.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 font-mono transition-colors"
            >
              github.com/{profile.githubUsername}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
