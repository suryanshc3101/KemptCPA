import React from 'react';
import { Award, MapPin, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-blue-50/60 via-slate-50/40 to-teal-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional subtle background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.04),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/8 to-indigo-400/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-400/6 to-emerald-400/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="relative group order-2 md:order-1">
          <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional male CPA in business attire reviewing financial documents and tax forms"
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
          
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            With extensive experience in Canadian tax law, financial reporting, and business advisory services, I bring a strategic approach to every client engagement. My practice focuses on helping businesses navigate complex financial challenges while maintaining compliance with CRA requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">✨ Why Choose Kempt CPA?</h3>
              <p className="text-slate-800 leading-relaxed font-medium">
                We combine traditional CPA expertise with modern cloud-based technology and a client-first approach. 
                Every engagement is tailored to your specific needs, ensuring you receive strategic insights that drive growth, 
                maintain compliance, and optimize your financial position. Our proactive communication style means you'll always 
                know where you stand financially and what steps to take next.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Professional Excellence
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Chartered Professional Accountant (CPA Ontario)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Specialized in Canadian tax planning and compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Expert in QuickBooks, Xero, and Sage 50 implementation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Proven track record in CRA representation and audit defense</span>
                </li>
              </ul>
            </div>
          </div>
          
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
        </div>
      </div>
    </section>
  );
}