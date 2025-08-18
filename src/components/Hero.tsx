import React from 'react';
import { Sparkles, TrendingUp, Shield, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50/50 to-indigo-50/30 min-h-screen flex items-center">
      {/* Subtle magical background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce opacity-60" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-teal-400/25 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-400/30 rounded-full animate-bounce opacity-40" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        
        {/* Gentle gradient waves */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-50/10 to-transparent transform rotate-12 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-teal-50/10 to-transparent transform -rotate-12 animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
            Stress-free Canadian accounting, tax, and assurance — by a CPA you can trust.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Kempt CPA Professional Corporation helps individuals and businesses stay compliant, keep clean books, and plan ahead with QuickBooks, Xero, and Sage 50.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="group flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg border-2 border-blue-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all duration-300">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-800">CRA Compliant</span>
            </div>
            <div className="group flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl shadow-lg border-2 border-teal-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-md group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-teal-400/30 transition-all duration-300">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-800">Growth Focused</span>
            </div>
            <div className="group flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl shadow-lg border-2 border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center shadow-md group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-slate-400/30 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
              </div>
              <span className="text-sm font-bold text-slate-800">Tech-Enabled</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a 
              href="#services" 
              className="group px-8 py-4 rounded-xl border-2 border-blue-300 font-semibold hover:border-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 text-center text-slate-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-200/50 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative">
              View Services
              </span>
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-slate-100 text-blue-700 rounded-full border border-blue-200">CPA Ontario</span>
            <span className="px-3 py-1 bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 rounded-full border border-slate-200">QuickBooks • Xero • Sage 50</span>
            <span className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full border border-teal-200">Brantford, Ontario</span>
          </div>
        </div>
        
        <div className="relative z-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl hover:scale-105 hover:rotate-1 transition-all duration-500">
            <img 
              src="https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional CPA working on tax returns and financial statements at desk with calculator"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30"></div>
            
            {/* Subtle sparkle effects */}
            <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-teal-300 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
            
            {/* Centered text with enhanced effects */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="text-center px-6 py-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                {/* Decorative elements */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mr-3 animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50 group-hover:shadow-blue-400/70 transition-shadow duration-300"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent ml-3 animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text group-hover:animate-pulse">
                Professional CPA Services
                </h3>
                
                <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in" style={{animationDelay: '1s'}}>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/30 hover:scale-110 transition-all duration-300">Tax</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-200 rounded-full text-sm font-medium border border-teal-400/30 backdrop-blur-sm hover:bg-teal-500/30 hover:scale-110 transition-all duration-300">Bookkeeping</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 animate-fade-in" style={{animationDelay: '1.2s'}}>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-full text-sm font-medium border border-indigo-400/30 backdrop-blur-sm hover:bg-indigo-500/30 hover:scale-110 transition-all duration-300">Advisory</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 rounded-full text-sm font-medium border border-emerald-400/30 backdrop-blur-sm hover:bg-emerald-500/30 hover:scale-110 transition-all duration-300">CRA Rep</span>
                </div>
                
                {/* Bottom decorative line */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-pulse group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Software Integration Partners */}
            <div className="absolute bottom-4 left-4 right-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center justify-center gap-6 p-4 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-md rounded-xl border border-white/20 group-hover:bg-gradient-to-r group-hover:from-black/90 group-hover:to-black/70 transition-all duration-300">
                <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">QB</span>
                  </div>
                  <span className="text-white text-sm font-medium">QuickBooks</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">X</span>
                  </div>
                  <span className="text-white text-sm font-medium">Xero</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S50</span>
                  </div>
                  <span className="text-white text-sm font-medium">Sage 50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}