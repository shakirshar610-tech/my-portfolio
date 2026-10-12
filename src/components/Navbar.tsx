import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Menu, X, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import profilePhoto from '../assets/images/shakir_profile.jpg';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Contract: Brand Wordmark | 4-5 Nav Links | 1 Primary Action */}
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Single Brand Wordmark */}
          <a 
            href="#" 
            className="flex items-center gap-3 text-slate-100 hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-emerald-500/30 flex items-center justify-center shrink-0 bg-slate-900 group-hover:border-emerald-400 transition-colors shadow-sm">
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
              <span className="text-base font-bold tracking-tight text-white block leading-tight">
                {profile.name}
              </span>
              <span className="text-[11px] text-slate-400 tracking-normal block">
                BS AI · Aror University
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Connect */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-slate-700/80 hover:text-white transition-colors whitespace-nowrap shrink-0"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-emerald-500/10"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs text-slate-300 bg-slate-800/80 rounded-lg border border-slate-700"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/60"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0B0F17]/98 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors"
            >
              Contact Shakir (+92 314-8354758)
            </button>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-4 text-xs font-medium text-slate-300 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>GitHub (shakirshar610-tech)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
