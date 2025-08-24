import React from 'react';
import { Award, MapPin, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950/90 to-indigo-950/80 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Magical professional background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.12),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.08),transparent_60%)]"></div>
        
        {/* Enhanced magical orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/15 rounded-full blur-3xl animate-pulse hover:animate-ping transition-all duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/18 to-emerald-400/12 rounded-full blur-3xl animate-pulse hover:scale-110 transition-all duration-1000" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/12 to-blue-400/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating magical particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/80 rounded-full animate-bounce opacity-70" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-teal-400/70 rounded-full animate-bounce opacity-60" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping opacity-50" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-indigo-400/70 rounded-full animate-pulse opacity-60" style={{animationDelay: '3.5s'}}></div>
        
        {/* Advanced grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.8) 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="relative group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-3xl hover:scale-105 hover:rotate-1 transition-all duration-700 backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional male CPA in business attire reviewing financial documents and tax forms"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30"></div>
            
            {/* Magical sparkle effects */}
            <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-teal-300 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
                Kuldeep, CPA
              </h3>
              <p className="text-white/90 text-base font-medium mb-4 leading-relaxed">Professional Excellence in Canadian Accounting</p>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-yellow-400 animate-pulse" />
                <Award className="w-5 h-5 text-yellow-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                <Award className="w-5 h-5 text-yellow-400 animate-pulse" style={{animationDelay: '1s'}} />
                <span className="ml-2 text-yellow-200 text-sm font-medium">CPA Ontario Certified</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Us Text content - Right of Image */}
        <div className="animate-fade-in-up">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/20 via-blue-50/15 to-indigo-50/10 backdrop-blur-lg border-2 border-white/20 shadow-2xl">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            
            <div className="space-y-6 text-white/90">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="leading-relaxed text-base">
                  I'm <strong className="text-blue-300">Kuldeep, CPA</strong>, Principal at <strong className="text-indigo-300">Kempt CPA Professional Corporation</strong>. 
                  We serve individuals and businesses with straightforward, tech‑enabled accounting and proactive advice.
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl border border-blue-300/20">
                <p className="leading-relaxed text-base">
                  With extensive experience in Canadian tax law, financial reporting, and business advisory services, 
                  I bring a strategic approach to every client engagement with cutting-edge technology and personalized service.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-blue-200 text-sm">Software Integration Expert</span>
                    <p className="text-white/80 text-sm">QuickBooks • Xero • Sage 50</p>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-teal-500/10 to-emerald-500/10 backdrop-blur-sm border border-teal-300/20 hover:bg-teal-500/15 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-teal-200 text-sm">Serving Ontario Businesses</span>
                    <p className="text-white/80 text-sm">Based in Brantford, Ontario</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Professional Information Boxes - Below Main Content */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {/* Enhanced Why Choose Kempt CPA box */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-50/85 border-2 border-white/30 shadow-2xl hover:shadow-3xl hover:scale-105 hover:rotate-1 transition-all duration-500 backdrop-blur-lg min-h-[400px]">
            {/* Magical background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-indigo-400/3 to-cyan-400/2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-indigo-400/8 rounded-full -translate-y-10 translate-x-10 group-hover:translate-y-2 group-hover:translate-x-2 transition-all duration-700"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  ✨ Why Choose Kempt CPA?
                </h3>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-200/50">
                  <p className="text-slate-800 text-base font-semibold leading-relaxed font-serif">
                    <strong className="text-blue-600">Expert CPA Services:</strong> Traditional expertise meets modern cloud technology
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/60 rounded-xl border border-indigo-200/50">
                  <p className="text-slate-800 text-base font-semibold leading-relaxed font-serif">
                    <strong className="text-indigo-600">Tailored Solutions:</strong> Every engagement customized to your specific needs
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-indigo-50/80 to-cyan-50/60 rounded-xl border border-cyan-200/50">
                  <p className="text-slate-800 text-base font-semibold leading-relaxed font-serif">
                    <strong className="text-cyan-600">Proactive Communication:</strong> Always know your financial position
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-cyan-50/80 to-teal-50/60 rounded-xl border border-teal-200/50">
                  <p className="text-slate-800 text-base font-semibold leading-relaxed font-serif">
                    <strong className="text-teal-600">Strategic Growth:</strong> Insights that drive business success
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Professional Excellence box */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/95 via-indigo-50/90 to-blue-50/85 border-2 border-white/30 shadow-2xl hover:shadow-3xl hover:scale-105 hover:-rotate-1 transition-all duration-500 backdrop-blur-lg min-h-[400px]">
            {/* Magical background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 via-blue-400/3 to-teal-400/2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-teal-400/10 to-emerald-400/8 rounded-full translate-y-10 -translate-x-10 group-hover:translate-y-2 group-hover:translate-x-2 transition-all duration-700"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Professional Excellence
                </h3>
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-200/30 group-hover:bg-blue-50/80 transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-700 text-sm font-semibold font-serif">CPA Ontario Certified Professional</span>
                <span className="text-slate-700 text-sm font-semibold font-serif">Designated CPA</span>
                
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-teal-50/80 to-blue-50/60 rounded-lg border border-teal-200/30 group-hover:bg-teal-50/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-slate-700 text-sm font-semibold font-serif">Canadian Tax Planning Expert</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50/80 to-cyan-50/60 rounded-lg border border-indigo-200/30 group-hover:bg-indigo-50/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-slate-700 text-sm font-semibold font-serif">QuickBooks • Xero • Sage 50 Specialist</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50/80 to-teal-50/60 rounded-lg border border-emerald-200/30 group-hover:bg-emerald-50/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <span className="text-slate-700 text-sm font-semibold font-serif">CRA Audit Defense & Representation</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50/80 to-indigo-50/60 rounded-lg border border-cyan-200/30 group-hover:bg-cyan-50/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                  <span className="text-slate-700 text-sm font-semibold font-serif">Financial Reporting & Advisory</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50/80 to-cyan-50/60 rounded-lg border border-blue-200/30 group-hover:bg-blue-50/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
                  <span className="text-slate-700 text-sm font-semibold font-serif">GST/HST Compliance Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
}
  )
}
  )
}