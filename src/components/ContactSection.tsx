import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Send,
  MapPin,
  Sparkles,
  Share2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Quick message form state
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [subject, setSubject] = useState('Recruiter / Opportunity Inquiry');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoBody = encodeURIComponent(
      `Hello Shakir,\n\nMy name is ${senderName} from ${senderOrg || 'my organization'}.\n\n${message}\n\nLooking forward to speaking with you.`
    );
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 5000);
  };

  const linkedInPitch = `Hi Shakir, I came across your portfolio and was impressed by your AI & Software engineering work on SmartKisan and Digital Khata at Aror University. Would love to connect!`;

  return (
    <section id="contact" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl space-y-3 mb-14" direction="up">
          <div className="text-xs font-semibold text-emerald-400">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Let's connect for opportunities, projects, or collaborations.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            I am actively open to internship opportunities, software development roles, AI/ML research collaborations, and open-source projects. Feel free to reach out directly via phone, email, or LinkedIn.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Verified Contact Channels (lg:col-span-5) */}
          <Reveal className="lg:col-span-5 space-y-4" direction="up" delay={0.05}>
            
            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone & WhatsApp</div>
                    <div className="text-sm font-bold text-white font-mono">{profile.phone}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(profile.phone, 'phone')}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs">
                <a
                  href={`tel:${profile.phoneRaw}`}
                  className="flex-1 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-center font-medium transition-colors"
                >
                  Call Directly
                </a>
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-center font-medium border border-emerald-500/30 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="text-sm font-bold text-white font-mono truncate">{profile.email}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(profile.email, 'email')}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="block w-full py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-center font-medium text-xs transition-colors"
                >
                  Open Email Client
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub Profile</div>
                    <div className="text-sm font-bold text-white font-mono">@{profile.githubUsername}</div>
                  </div>
                </div>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Open GitHub"
                  aria-label="Open GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-center font-medium text-xs transition-colors"
                >
                  github.com/{profile.githubUsername}
                </a>
              </div>
            </div>

            {/* LinkedIn Connect Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-white">{profile.linkedInName}</div>
                  </div>
                </div>

                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Open LinkedIn"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs">
                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white text-center font-semibold transition-colors"
                >
                  Connect on LinkedIn
                </a>
                <button
                  onClick={() => copyToClipboard(linkedInPitch, 'pitch')}
                  className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-center font-medium transition-colors"
                  title="Copy ready-to-send LinkedIn connection note"
                >
                  {copiedField === 'pitch' ? 'Copied Note' : 'Copy Connection Note'}
                </button>
              </div>
            </div>

          </Reveal>

          {/* Interactive Direct Message Composer (lg:col-span-7) */}
          <Reveal className="lg:col-span-7" direction="up" delay={0.15}>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 h-full">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Send Direct Inquiry to Shakir</span>
                  <span className="text-xs font-normal text-emerald-400 font-mono">({profile.email})</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill this brief note to send via your preferred email client or copy formatted message directly.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Company / University</label>
                    <input
                      type="text"
                      placeholder="e.g. Tech Innovators / Institute"
                      value={senderOrg}
                      onChange={(e) => setSenderOrg(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Shakir, we'd like to discuss an opportunity / project collaboration regarding..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const fullNote = `From: ${senderName || 'Recruiter'} (${senderOrg || 'N/A'})\nSubject: ${subject}\n\n${message || 'Hi Shakir, I would love to connect regarding your AI & Software development work.'}`;
                      copyToClipboard(fullNote, 'draft');
                    }}
                    className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    {copiedField === 'draft' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedField === 'draft' ? 'Copied Message Draft' : 'Copy Message Draft'}</span>
                  </button>
                </div>

                {sentNotice && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Email client opened. If it didn't launch automatically, please email {profile.email} directly!</span>
                  </div>
                )}
              </form>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
