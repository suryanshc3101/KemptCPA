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
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-slate-100 via-white to-blue-100 shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-blue-500/10"></div>
            <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-white/95 to-slate-50/95 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-600 to-blue-600 flex items-center justify-center shadow-xl animate-pulse">
                  <Briefcase className="w-12 h-12 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Kuldeep, CPA
                </h3>
                <p className="text-slate-600">Professional Excellence</p>
                <div className="flex justify-center gap-2 mt-3">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <Award className="w-5 h-5 text-yellow-500" />
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute top-1/3 right-2 w-3 h-3 bg-gradient-to-br from-slate-400 to-blue-400 rounded-full animate-bounce delay-1500"></div>
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
            I'm <strong>Kuldeep, CPA</strong>, Principal at <strong>Kempt CPA Professional Corporation</strong>. We serve Canadian individuals and businesses with straightforward, tech‑enabled accounting and proactive advice.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <Award className="w-6 h-6 text-blue-500" />
              <span className="font-medium text-slate-700">CPA Ontario / CPA Canada</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <span className="font-medium text-slate-700">QuickBooks Online • Xero • Dext • Hubdoc</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <MapPin className="w-6 h-6 text-teal-500" />
              <span className="font-medium text-slate-700">Remote across Canada from Toronto, Ontario</span>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <h3 className="font-bold text-slate-800 mb-2">✨ Why Choose Kempt CPA?</h3>
            <p className="text-slate-700 leading-relaxed">
              We combine traditional CPA expertise with modern technology and a client-first approach. 
              Every engagement is tailored to help your business thrive in the Canadian market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}