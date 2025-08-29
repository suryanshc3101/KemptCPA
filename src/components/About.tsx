import React from 'react';
import { Sparkles, TrendingUp, Shield, Building2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-blue-50 min-h-screen flex items-center">
      
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-slate-900 mb-6">
            Expert Canadian CPA Services: Tax Preparation, Bookkeeping & Business Advisory
          </h1>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md border border-blue-200">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">CRA Compliant</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md border border-teal-200">
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center shadow-md">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">Growth Focused</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md border border-cyan-200">
              <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">Tech-Enabled</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#services" 
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold text-center bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Services
            </a>
            <a 
              href="#contact" 
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200">
              CPA Ontario
            </span>
            <span className="px-3 sm:px-4 py-2 bg-gray-100 text-slate-700 rounded-lg border border-gray-200">
              QuickBooks • Xero • Sage 50
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg border border-teal-200">
              Serving Canada Remotely
            </span>
          </div>
        </div>
        
        <div className="animate-fade-in-up">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional Canadian CPA working on tax returns and financial statements using QuickBooks and calculator - Kempt CPA Professional Corporation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Centered text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 py-8 bg-black/60 rounded-xl border border-white/30 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Professional CPA Services
                </h3>
                
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/80 text-white rounded-lg text-sm font-medium">
                    Tax
                  </span>
                  <span className="px-3 py-1 bg-teal-600/80 text-white rounded-lg text-sm font-medium">
                    Bookkeeping
                  </span>
                  <span className="px-3 py-1 bg-cyan-600/80 text-white rounded-lg text-sm font-medium">
                    Advisory
                  </span>
                  <span className="px-3 py-1 bg-emerald-600/80 text-white rounded-lg text-sm font-medium">
                    CRA Rep
                  </span>
                </div>
                
                {/* Bottom decorative line */}
                <div className="mt-8 flex items-center justify-center">
            {/* Software Integration Partners */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-3 sm:p-5 glass-effect-dark rounded-2xl border border-white/30 animate-magical-glow">
                <div className="flex items-center gap-3 magical-hover animate-magical-pulse">
              <div className="flex items-center justify-center gap-3 sm:gap-4 p-3 bg-black/80 rounded-xl border border-white/30 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">QB</span>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium hidden sm:inline">QuickBooks</span>
                </div>
                <div className="w-px h-8 bg-white/40"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">X</span>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium hidden sm:inline">Xero</span>
                </div>
                <div className="w-px h-8 bg-white/40"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">S50</span>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium hidden sm:inline">Sage 50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}