import React from 'react';

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-white via-blue-50/30 to-slate-50 border-b border-blue-200/50 shadow-lg backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div></div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Professional CPA Services</span>
          <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
            info@kemptcpa.ca
          </a>
          <a 
            href="#contact" 
            className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 text-white px-6 py-2 font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ✨ Book 30 Minutes
          </a>
        </div>
      </div>
    </div>
  );
}