import React from 'react';

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-white via-blue-50/30 to-slate-50 border-b border-blue-200/50 shadow-lg backdrop-blur-sm relative overflow-hidden">
      {/* Subtle magical header effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/8 via-transparent to-teal-400/6 animate-pulse opacity-60" style={{animationDuration: '4s'}}></div>
      
      {/* Advanced magical particles */}
      <div className="absolute top-2 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-ping opacity-40" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
      <div className="absolute bottom-2 right-1/3 w-0.5 h-0.5 bg-teal-400/50 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
      <div className="absolute top-1 right-1/4 w-0.5 h-0.5 bg-indigo-400/40 rounded-full animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <span className="text-xl font-bold text-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent hover:scale-105 transition-all duration-300 cursor-default">KemptCPA</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase hover:animate-pulse hover:text-indigo-600 transition-colors cursor-default">Professional CPA Services</span>
          <div className="hidden md:flex items-center gap-2 text-slate-600">
            <span className="text-sm hover:text-blue-600 transition-colors">📞 +1 519 771 7862</span>
          </div>
          <a href="#contact" className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-all duration-300 hover:scale-105">
            info@kemptcpa.ca
          </a>
          <a 
            href="#contact" 
            className="group relative rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 text-white px-6 py-2 font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-400/30 transform hover:scale-105 hover:rotate-1 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 group-hover:animate-pulse transition-all duration-300 rounded-xl"></div>
            <span className="relative">
            ✨ Book 30 Minutes
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}