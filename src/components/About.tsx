import React from 'react';
import { Award, MapPin, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-blue-50/60 via-slate-50/40 to-teal-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.12),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.08),transparent_50%)]"></div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-indigo-400/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/15 to-emerald-400/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Additional magical elements */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-teal-400/20 rounded-full animate-bounce shadow-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-emerald-400/40 to-teal-400/30 rounded-full animate-bounce shadow-md" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="relative group order-2 md:order-1">
          <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img 
              src="https://images.pexels.com/photos/6863194/pexels-photo-6863194.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional CPA Kuldeep working on tax returns and financial statements"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Kuldeep, CPA
              </h3>
              <p className="text-white text-sm font-medium mb-3">Professional Excellence in Accounting</p>
              <div className="flex gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <Award className="w-5 h-5 text-yellow-400" />
                <Award className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative order-1 md:order-2">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">About Our Principal</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6">
            About
          </h2>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm <strong>Kuldeep, CPA</strong>, Principal at <strong>Kempt CPA Professional Corporation</strong>. We serve individuals and businesses with straightforward, tech‑enabled accounting and proactive advice.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <span className="font-medium text-slate-700">QuickBooks • Xero • Sage 50</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <MapPin className="w-6 h-6 text-teal-500" />
              <span className="font-medium text-slate-700">Services in Brantford, Ontario</span>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <h3 className="font-bold text-slate-900 mb-2">✨ Why Choose Kempt CPA?</h3>
            <p className="text-slate-800 leading-relaxed font-medium">
              We combine traditional CPA expertise with modern technology and a client-first approach. 
              Every engagement is tailored to help your business thrive with personalized service and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}