import React from 'react';
import { Sparkles, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full glass-effect border-b border-blue-200/50 shadow-2xl backdrop-blur-lg relative overflow-hidden animate-magical-gradient bg-gradient-to-r from-white via-blue-50/40 to-indigo-50/30">
      {/* Subtle magical header effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-cyan-400/5 to-teal-400/8 animate-magical-gradient opacity-70"></div>
      
      {/* Advanced magical particles */}
      <div className="absolute top-2 left-1/4 w-1.5 h-1.5 bg-blue-400/80 rounded-full animate-sparkle opacity-60"></div>
      <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-teal-400/70 rounded-full animate-sparkle opacity-70" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1 right-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-sparkle opacity-50" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600 animate-sparkle" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-cyan-800 to-indigo-800 bg-clip-text text-transparent animate-text-shimmer cursor-default">
              KemptCPA
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 glass-effect px-4 py-2 rounded-full animate-magical-pulse">
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ✨ Professional CPA Services
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-600">
            <a href="tel:+15197717862" className="flex items-center gap-2 glass-effect px-3 py-2 rounded-lg magical-hover">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">+1 519 771 7862</span>
            </a>
            <a href="mailto:info@kemptcpa.ca" className="flex items-center gap-2 glass-effect px-3 py-2 rounded-lg magical-hover">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">info@kemptcpa.ca</span>
            </a>
          </div>
          <a 
            href="#contact" 
            className="group relative rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-8 py-3 font-bold magical-hover animate-magical-glow shadow-2xl overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-40 group-hover:animate-magical-pulse transition-all duration-500 rounded-2xl"></div>
            <span className="relative">
              ✨ Book 30 Minutes
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}