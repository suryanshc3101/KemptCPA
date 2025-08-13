import React from 'react';
import { Shield, FileText, Calculator, TrendingUp, Users, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Shield,
    color: 'from-blue-600 to-indigo-600',
    title: "CRA Representation",
    description: "We communicate with the Canada Revenue Agency on your behalf to resolve notices, questions, and compliance issues."
  },
  {
    icon: FileText,
    color: 'from-slate-600 to-blue-600',
    title: "GST/HST Filings",
    description: "Accurate, on‑time filings across provinces/territories, with guidance on registration and remittances."
  },
  {
    icon: Calculator,
    color: 'from-slate-600 to-slate-700',
    title: "Bookkeeping",
    description: "Monthly reconciliations, financial statements, and year‑end ready records in QBO or Xero."
  },
  {
    icon: TrendingUp,
    color: 'from-teal-600 to-emerald-600',
    title: "Corporate Tax (T2)",
    description: "Planning, preparation & filing, including CRA correspondence."
  },
  {
    icon: Users,
    color: 'from-teal-600 to-blue-600',
    title: "Personal Tax (T1)",
    description: "Employment, self‑employed, investment, rental, and foreign income disclosures."
  },
  {
    icon: Lightbulb,
    color: 'from-emerald-600 to-teal-600',
    title: "Business Advisory",
    description: "Cash flow, budgeting, KPIs, incorporation/structure, and growth planning."
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white via-blue-50/40 to-slate-50/60 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional diagonal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_47%,rgba(59,130,246,0.08)_49%,rgba(16,185,129,0.06)_51%,transparent_53%)] bg-[size:40px_40px]"></div>
        
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-teal-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Professional geometric patterns */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-blue-500/60 to-teal-500/40 rotate-45 animate-pulse shadow-lg rounded-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-br from-emerald-500/70 to-teal-500/50 rounded-full animate-pulse shadow-md" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide uppercase">Professional Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
          CRA Representation • GST/HST Filings • Accounting • Taxes • Business Advisory
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl bg-white p-8 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-blue-300 hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              
              {/* Professional accents */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rotate-45 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className={`relative mb-6 w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="relative text-xl font-bold text-slate-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {service.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}