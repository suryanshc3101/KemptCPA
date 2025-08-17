import React from 'react';
import { Sparkles, TrendingUp, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50/50 to-indigo-50/30 min-h-screen flex items-center">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(59,130,246,0.08)_50%,transparent_51%),linear-gradient(0deg,transparent_49%,rgba(16,185,129,0.05)_50%,transparent_51%)] bg-[size:80px_80px]"></div>
        
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/25 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-slate-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-emerald-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Professional geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-blue-500/40 to-teal-500/30 rotate-45 animate-pulse shadow-xl rounded-sm" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-br from-emerald-500/50 to-teal-500/40 rounded-full animate-pulse shadow-lg" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gradient-to-br from-indigo-500/60 to-blue-500/40 rounded-full animate-pulse shadow-md" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide uppercase mb-4 block flex items-center gap-2">
            Professional CPA Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
            Stress‑free Canadian accounting, tax, and assurance — by a CPA you can trust.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Kempt CPA Professional Corporation helps individuals and businesses stay compliant, keep clean books, and plan ahead with QuickBooks, Xero, and Sage 50.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="group flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg border-2 border-blue-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-800">CRA Compliant</span>
            </div>
            <div className="group flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl shadow-lg border-2 border-teal-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-800">Growth Focused</span>
            </div>
            <div className="group flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl shadow-lg border-2 border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
              </div>
              <span className="text-sm font-bold text-slate-800">Tech-Enabled</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 text-white font-semibold hover:from-blue-700 hover:to-slate-800 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book a Free 30‑Minute Consult
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 rounded-xl border-2 border-blue-300 font-semibold hover:border-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 text-center text-slate-700 hover:scale-105"
            >
              View Services
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-slate-100 text-blue-700 rounded-full border border-blue-200">CPA Ontario</span>
            <span className="px-3 py-1 bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 rounded-full border border-slate-200">QuickBooks • Xero • Sage 50</span>
            <span className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full border border-teal-200">Brantford, Ontario</span>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl hover:scale-105 transition-all duration-500">
            <img 
              src="https://images.pexels.com/photos/6863525/pexels-photo-6863525.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional CPA working with financial documents and calculator"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Professional CPA Services
              </h3>
              <p className="text-white text-sm font-medium">Tax • Bookkeeping • Advisory • CRA Representation</p>
            </div>
          </div>
          
          {/* Software Logos Section */}
          <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200">
            <p className="text-sm font-semibold text-slate-700 text-center mb-4">Trusted Software Partners</p>
            <div className="grid grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-blue-50 rounded-xl flex items-center justify-center shadow-sm">
                  <img 
                    src="https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg" 
                    alt="QuickBooks"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-slate-600">QuickBooks</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-sm font-bold">xero</span>
                </div>
                <span className="text-xs font-medium text-slate-600">Xero</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-sm font-bold">SAGE</span>
                </div>
                <span className="text-xs font-medium text-slate-600">Sage 50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}