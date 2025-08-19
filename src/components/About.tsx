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
        
        {/* Information boxes positioned separately under the image */}
        <div className="order-3 md:order-2">
          <div className="flex justify-between gap-8 mt-6">
            {/* Why Choose Kempt CPA box */}
            <div className="w-96 h-96 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">✨ Why Choose Kempt CPA?</h3>
              <p className="text-slate-800 leading-relaxed font-medium text-base">
                We combine traditional CPA expertise with modern cloud-based technology and a client-first approach. 
                Every engagement is tailored to your specific needs, ensuring you receive strategic insights that drive growth, 
                maintain compliance, and optimize your financial position. Our proactive communication style means you'll always 
                know where you stand financially and what steps to take next.
              </p>
            </div>
            
            {/* Professional Excellence box */}
            <div className="w-96 h-96 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                <Award className="w-5 h-5 text-blue-600" />
                Professional Excellence
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Chartered Professional Accountant (CPA Ontario)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                  <span>Specialized in Canadian tax planning and compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                  <span>Expert in QuickBooks, Xero, and Sage 50 implementation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span>Proven track record in CRA representation and audit defense</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Text content */}
        <div className="order-1 md:order-3">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
            <Award className="w-4 h-4 text-blue-600" />
            About Our Principal
          </h2>
          <div className="space-y-4 text-slate-700">
            <p>
              I'm <strong>Kuldeep, CPA</strong>, Principal at <strong>Kempt CPA Professional Corporation</strong>. 
              We serve individuals and businesses with straightforward, tech‑enabled accounting and proactive advice.
            </p>
            <p>
              With extensive experience in Canadian tax law, financial reporting, and business advisory services, 
              I bring a strategic approach to every client engagement.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-slate-700">QuickBooks • Xero • Sage 50</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <MapPin className="w-5 h-5 text-teal-600" />
              <span className="font-medium text-slate-700">Services in Brantford, Ontario</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}