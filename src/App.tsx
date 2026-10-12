/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { LearningRoadmap } from './components/LearningRoadmap';
import { GitHubShowcase } from './components/GitHubShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CodeViewerModal } from './components/CodeViewerModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCodeViewerOpen, setIsCodeViewerOpen] = useState(false);
  const [codeViewerLang, setCodeViewerLang] = useState<'C++' | 'Python'>('C++');

  const handleOpenCodeViewer = (lang: 'C++' | 'Python') => {
    setCodeViewerLang(lang);
    setIsCodeViewerOpen(true);
  };

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleScrollToContact}
        />

        {/* About Section */}
        <About />

        {/* Featured Projects with Interactive Live Simulators */}
        <Projects 
          onOpenCodeViewer={handleOpenCodeViewer}
        />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Learning Goals Roadmap */}
        <LearningRoadmap />

        {/* GitHub Activity & Open Source Journey */}
        <GitHubShowcase />

        {/* Contact & Recruiter Connect Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter-Ready Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Code Viewer Modal */}
      <CodeViewerModal 
        isOpen={isCodeViewerOpen}
        onClose={() => setIsCodeViewerOpen(false)}
        initialLanguage={codeViewerLang}
      />
    </div>
  );
}
