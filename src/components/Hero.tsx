import React from 'react';
import { Sparkles, TrendingUp, Shield, Building2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50/50 to-indigo-50/30 min-h-screen flex items-center">
      {/* Subtle magical background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none animate-magical-gradient bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Professional subtle patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.06),transparent_50%)]"></div>
        
        {/* Enhanced magical orbs with advanced animations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-indigo-400/12 rounded-full blur-3xl animate-magical-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/15 to-cyan-400/10 rounded-full blur-3xl animate-magical-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/12 to-teal-400/8 rounded-full blur-3xl animate-magical-float" style={{animationDelay: '4s'}}></div>
        
        {/* Advanced floating particles */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-400/80 rounded-full animate-sparkle opacity-70" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-teal-400/70 rounded-full animate-sparkle opacity-60" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-indigo-400/60 rounded-full animate-sparkle opacity-50" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-cyan-400/70 rounded-full animate-sparkle opacity-65" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 left-2/3 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-sparkle opacity-55" style={{animationDelay: '4.5s'}}></div>
        
        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.5) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 animate-text-shimmer text-shimmer">
            KemptCPA: 
            Expert Canadian CPA Services: Tax Preparation, Bookkeeping & Business Advisory
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Kempt CPA Professional Corporation provides expert T1/T2 tax preparation, QuickBooks/Xero/Sage 50 bookkeeping, GST/HST compliance, CRA representation, and strategic business advisory services. Serving Canadian individuals and businesses remotely with professional excellence.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="flex items-center gap-3 p-4 glass-effect rounded-xl shadow-lg border-2 border-blue-200/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                <Shield className="w-4 h-4 text-white" />
                <Star className="w-2 h-2 text-yellow-300 absolute -top-1 -right-1" />
              </div>
              <span className="text-sm font-bold text-slate-800">CRA Compliant</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-effect rounded-xl shadow-lg border-2 border-teal-200/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-md">
                <TrendingUp className="w-4 h-4 text-white" />
                <Star className="w-2 h-2 text-yellow-300 absolute -top-1 -right-1" />
              </div>
              <span className="text-sm font-bold text-slate-800">Growth Focused</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass-effect rounded-xl shadow-lg border-2 border-cyan-200/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-indigo-700 flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
                <Star className="w-2 h-2 text-yellow-300 absolute -top-1 -right-1" />
              </div>
              <span className="text-sm font-bold text-slate-800">Tech-Enabled</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            <a 
              href="#services" 
              className="group px-8 py-4 rounded-xl glass-effect font-semibold text-center text-slate-700 relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <span className="relative">
                ✨ View Services
              </span>
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <span className="px-4 py-2 glass-effect text-blue-700 rounded-full border border-blue-200">
              🏆 CPA Ontario
            </span>
            <span className="px-4 py-2 glass-effect text-slate-700 rounded-full border border-slate-200">
              💼 QuickBooks • Xero • Sage 50
            </span>
            <span className="px-4 py-2 glass-effect text-teal-700 rounded-full border border-teal-200">
              📍 Serving Canada Remotely
            </span>
          </div>
        </div>
        
        <div className="relative z-10 animate-fade-in-up magical-hover" style={{animationDelay: '0.4s'}}>
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl group animate-magical-glow">
            <img 
              src="https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional Canadian CPA working on tax returns and financial statements using QuickBooks and calculator - Kempt CPA Professional Corporation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/40 to-blue-900/20"></div>
            
            {/* Enhanced sparkle effects */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-sparkle opacity-80"></div>
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-300 rounded-full animate-sparkle opacity-70" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-teal-300 rounded-full animate-sparkle opacity-60" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-sparkle opacity-65" style={{animationDelay: '3s'}}></div>
            
            {/* Centered text with enhanced effects */}
            <div className="absolute inset-0 flex items-center justify-center animate-magical-float">
              <div className="text-center px-8 py-10 glass-effect-dark rounded-2xl border border-white/30 shadow-2xl animate-magical-pulse">
                {/* Decorative elements */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mr-4 animate-magical-gradient"></div>
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-sparkle shadow-lg shadow-blue-400/70"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent ml-4 animate-magical-gradient"></div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-text-shimmer">
                  ✨ Professional CPA Services
                </h3>
                
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="px-4 py-2 glass-effect text-blue-200 rounded-full text-sm font-medium border border-blue-400/40 animate-magical-pulse">
                    🏆 Tax
                  </span>
                  <span className="px-4 py-2 glass-effect text-teal-200 rounded-full text-sm font-medium border border-teal-400/40 animate-magical-pulse" style={{animationDelay: '0.5s'}}>
                    📊 Bookkeeping
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <span className="px-4 py-2 glass-effect text-cyan-200 rounded-full text-sm font-medium border border-cyan-400/40 animate-magical-pulse" style={{animationDelay: '1s'}}>
                    💡 Advisory
                  </span>
                  <span className="px-4 py-2 glass-effect text-emerald-200 rounded-full text-sm font-medium border border-emerald-400/40 animate-magical-pulse" style={{animationDelay: '1.5s'}}>
                    🛡️ CRA Rep
                  </span>
                </div>
                
                {/* Bottom decorative line */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 rounded-full animate-magical-gradient shadow-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Software Integration Partners */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-center gap-8 p-5 glass-effect-dark rounded-2xl border border-white/30 animate-magical-glow">
                <div className="flex items-center gap-3 magical-hover animate-magical-pulse">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">QB</span>
                  </div>
                  <span className="text-white text-sm font-medium">QuickBooks</span>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                <div className="flex items-center gap-3 magical-hover animate-magical-pulse" style={{animationDelay: '0.5s'}}>
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">X</span>
                  </div>
                  <span className="text-white text-sm font-medium">Xero</span>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                <div className="flex items-center gap-3 magical-hover animate-magical-pulse" style={{animationDelay: '1s'}}>
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
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