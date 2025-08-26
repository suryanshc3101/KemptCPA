import React, { useState } from 'react';
import { Shield, FileText, Calculator, TrendingUp, Users, Lightbulb, ClipboardCheck, Star, Zap } from 'lucide-react';
import ServiceModal from './ServiceModal';

const services = [
  {
    icon: ClipboardCheck,
    color: 'from-blue-600 to-indigo-600',
    title: "Assistance in finance audit, reviews and notice to reader engagements",
    description: "Professional assistance with financial statement audits, reviews, and notice to reader engagements to meet your compliance requirements."
  },
  {
    icon: Users,
    color: 'from-slate-600 to-blue-600',
    title: "T1 & T2",
    description: "Personal and corporate tax return preparation and filing, ensuring compliance with CRA requirements and maximizing deductions."
  },
  {
    icon: Calculator,
    color: 'from-slate-600 to-slate-700',
    title: "Book Keeping (QuickBooks, Xero, Sage 50)",
    description: "Complete bookkeeping services using QuickBooks, Xero, and Sage 50 with monthly reconciliations and financial reporting."
  },
  {
    icon: FileText,
    color: 'from-teal-600 to-emerald-600',
    title: "GST/HST",
    description: "GST/HST registration, filing, and compliance management across all provinces and territories."
  },
  {
    icon: Lightbulb,
    color: 'from-teal-600 to-blue-600',
    title: "Business Advisory",
    description: "Strategic business advice, financial planning, cash flow management, and growth strategies to help your business succeed."
  },
  {
    icon: Shield,
    color: 'from-emerald-600 to-teal-600',
    title: "CRA Representation",
    description: "Professional representation and communication with the Canada Revenue Agency for audits, disputes, and compliance matters."
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="relative py-24 bg-gradient-to-b from-white via-blue-50/40 to-indigo-50/30 overflow-hidden animate-magical-gradient">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional subtle patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.05),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.04),transparent_60%)]"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-teal-400/6 rounded-full blur-3xl animate-magical-float"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/7 to-indigo-400/5 rounded-full blur-3xl animate-magical-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/6 to-cyan-400/4 rounded-full blur-3xl animate-magical-float" style={{animationDelay: '6s'}}></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/70 rounded-full animate-sparkle" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-sparkle" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-teal-400/65 rounded-full animate-sparkle" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-6 h-6 text-blue-500 animate-sparkle" />
            <span className="text-base font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent tracking-wide uppercase animate-text-shimmer">
              ✨ Professional Services
            </span>
            <Star className="w-6 h-6 text-cyan-500 animate-sparkle" style={{animationDelay: '1s'}} />
          </div>
          <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 animate-text-shimmer">
            Services
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 max-w-5xl mx-auto font-medium leading-relaxed mb-8">
            Professional CPA Services: Tax Preparation (T1/T2) • QuickBooks/Xero Bookkeeping • GST/HST Filings • CRA Representation • Business Advisory Services
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-500 leading-relaxed">
              Transform your business with comprehensive accounting solutions designed for Canadian businesses of all sizes.
            </p>
          </div>
        
          {/* Software Partners */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-12 p-8 glass-effect rounded-3xl shadow-2xl border-2 border-blue-200/30 animate-magical-glow">
              <div className="flex items-center gap-4 magical-hover animate-magical-pulse group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-white text-xs font-bold">QB</span>
                  <Zap className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" />
                </div>
                <span className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">QuickBooks</span>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
              <div className="flex items-center gap-4 magical-hover animate-magical-pulse group" style={{animationDelay: '0.5s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-white text-xs font-bold">Xero</span>
                  <Star className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" style={{animationDelay: '0.3s'}} />
                </div>
                <span className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">Xero</span>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
              <div className="flex items-center gap-4 magical-hover animate-magical-pulse group" style={{animationDelay: '1s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-white text-xs font-bold">S50</span>
                  <CheckCircle className="w-4 h-4 text-green-300 absolute -top-1 -right-1 animate-sparkle" style={{animationDelay: '0.6s'}} />
                </div>
                <span className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">Sage 50</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleServiceClick(service)}
              className="group relative rounded-3xl glass-effect p-12 shadow-2xl border-2 border-blue-200/40 hover:border-blue-400/80 magical-hover cursor-pointer transform-gpu animate-magical-glow overflow-hidden transition-all duration-500"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Clear clickable indicator */}
              <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30 animate-magical-pulse">
                  <span className="text-blue-600 text-base font-bold">→</span>
                </div>
              </div>

              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-cyan-50/60 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none animate-magical-gradient"></div>
              
              {/* Advanced animated background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/25 to-cyan-400/20 rounded-full -translate-y-20 translate-x-20 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-700 animate-magical-float"></div>
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-br from-teal-400/22 to-emerald-400/18 rounded-full translate-y-18 -translate-x-18 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-700 animate-magical-pulse"></div>
              
              {/* Magical particles */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-sparkle transition-all duration-300"></div>
              <div className="absolute bottom-8 right-8 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-sparkle transition-all duration-300" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 right-8 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-75 group-hover:animate-sparkle transition-all duration-300" style={{animationDelay: '1s'}}></div>
              
              {/* Professional accents */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rotate-45 opacity-0 group-hover:opacity-80 transition-all duration-300 animate-sparkle group-hover:rotate-180"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-90 transition-all duration-300 animate-sparkle group-hover:scale-150"></div>
              
              {/* Icon with enhanced animation */}
              <div className={`relative mb-10 w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl magical-hover animate-magical-pulse group-hover:scale-110 transition-all duration-300`}>
                <service.icon className="w-12 h-12 text-white animate-magical-float" />
                <Star className="w-5 h-5 text-yellow-300 absolute -top-2 -right-2 animate-sparkle" />
                <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-60 animate-magical-pulse transition-all duration-500"></div>
              </div>
              
              <h3 className="relative text-2xl font-bold text-slate-900 mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight">
                {service.title}
              </h3>
              <p className="relative text-lg text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors font-medium mb-6">
                {service.description}
              </p>
              
              {/* Clear "Click for details" indicator */}
              <div className="relative">
                <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl text-blue-600 font-bold text-base group-hover:text-blue-700 group-hover:bg-blue-100/70 transition-all duration-300">
                  <span>Click for details</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </>
  );
}