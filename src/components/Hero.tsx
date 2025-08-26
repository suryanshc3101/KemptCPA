import React from 'react';
import { Sparkles, TrendingUp, Shield, Building2, Star, Award, CheckCircle, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50/50 to-indigo-50/30 min-h-screen flex items-center">
      {/* Subtle magical background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced animated background */}
        <div className="absolute inset-0 animate-magical-gradient bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-80"></div>
        <div className="absolute inset-0 animate-magical-gradient bg-gradient-to-tr from-cyan-50/60 via-blue-50/40 to-indigo-50/60" style={{animationDelay: '2s'}}></div>
        
        {/* Professional subtle patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.12),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.10),transparent_50%),radial-gradient(circle_at_50%_10%,rgba(139,92,246,0.08),transparent_40%)]"></div>
        
        {/* Enhanced magical orbs with advanced animations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-indigo-400/15 rounded-full blur-3xl animate-magical-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/18 to-cyan-400/12 rounded-full blur-3xl animate-magical-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/15 to-teal-400/10 rounded-full blur-3xl animate-magical-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-400/12 to-pink-400/8 rounded-full blur-3xl animate-magical-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Advanced floating particles */}
        {Array.from({length: 15}).map((_, i) => (
          <div 
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-sparkle`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.4 + Math.random() * 0.4
            }}
          />
        ))}
        
        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.5) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 animate-fade-in-up">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-200/50 mb-6 animate-magical-glow">
            <Award className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-blue-700">Designated CPA • Serving Canada</span>
            <Sparkles className="w-4 h-4 text-blue-600 animate-sparkle" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 animate-text-shimmer text-shimmer">
            Expert Canadian CPA Services: Tax Preparation, Bookkeeping & Business Advisory
          </h1>
          
          {/* Professional description */}
          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Transform your business with professional accounting expertise. From tax optimization to strategic growth planning.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="flex items-center gap-3 p-5 glass-effect rounded-2xl shadow-xl border-2 border-blue-200/50 magical-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg animate-magical-pulse">
                <Shield className="w-4 h-4 text-white" />
                <Star className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" />
              </div>
              <div>
                <span className="text-base font-bold text-slate-800">CRA Compliant</span>
                <p className="text-xs text-slate-600">100% Accuracy</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-5 glass-effect rounded-2xl shadow-xl border-2 border-teal-200/50 magical-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg animate-magical-pulse" style={{animationDelay: '0.5s'}}>
                <TrendingUp className="w-4 h-4 text-white" />
                <Zap className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" />
              </div>
              <div>
                <span className="text-base font-bold text-slate-800">Growth Focused</span>
                <p className="text-xs text-slate-600">Strategic Advice</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-5 glass-effect rounded-2xl shadow-xl border-2 border-cyan-200/50 magical-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-indigo-700 flex items-center justify-center shadow-lg animate-magical-pulse" style={{animationDelay: '1s'}}>
                <Sparkles className="w-4 h-4 text-white" />
                <CheckCircle className="w-3 h-3 text-green-300 absolute -top-1 -right-1 animate-sparkle" />
              </div>
              <div>
                <span className="text-base font-bold text-slate-800">Tech-Enabled</span>
                <p className="text-xs text-slate-600">Modern Tools</p>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center gap-8 mb-10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-slate-600 font-medium">CRA Compliant</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5+</div>
              <div className="text-sm text-slate-600 font-medium">Years Experience</div>
            </div>
          </div>
          
          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            <a 
              href="#services" 
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg text-center overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 animate-magical-glow"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-40 transition-all duration-500 rounded-2xl"></div>
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 animate-sparkle" />
                View Our Services
                <Star className="w-4 h-4 animate-pulse" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg text-center border-3 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl magical-hover glass-effect"
            >
              <span className="relative flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                Free Consultation
                <CheckCircle className="w-4 h-4" />
              </div>
            </a>
          </div>
          
          {/* Software partners with enhanced design */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <p className="text-sm text-slate-600 mb-4 font-medium">Trusted Software Partners:</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3 p-3 glass-effect rounded-xl border border-blue-200/50 magical-hover">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">QB</span>
                  <Zap className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" />
                </div>
                <span className="text-sm font-bold text-blue-700">QuickBooks</span>
              </div>
              <div className="flex items-center gap-3 p-3 glass-effect rounded-xl border border-indigo-200/50 magical-hover">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">X</span>
                  <Star className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" style={{animationDelay: '0.5s'}} />
                </div>
                <span className="text-sm font-bold text-indigo-700">Xero</span>
              </div>
              <div className="flex items-center gap-3 p-3 glass-effect rounded-xl border border-emerald-200/50 magical-hover">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">S50</span>
                  <CheckCircle className="w-3 h-3 text-green-300 absolute -top-1 -right-1 animate-sparkle" style={{animationDelay: '1s'}} />
                </div>
                <span className="text-sm font-bold text-emerald-700">Sage 50</span>
              </div>
            </div>
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