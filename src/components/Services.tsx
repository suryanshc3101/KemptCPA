import React, { useState } from 'react';
import { Shield, FileText, Calculator, TrendingUp, Users, Lightbulb, ClipboardCheck } from 'lucide-react';
import ServiceModal from './ServiceModal';

const services = [
  {
    icon: ClipboardCheck,
    color: 'from-blue-600 to-indigo-600',
    title: "Assistance in Finance audit reviews and Notice to reader engagements",
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
      <section id="services" className="relative py-20 bg-gradient-to-b from-white via-blue-50/40 to-slate-50/60 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional subtle patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.04),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.03),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-blue-400/6 to-teal-400/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-indigo-400/5 to-emerald-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
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
          
          {/* Software Partners */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-8 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">QB</span>
                </div>
                <span className="text-sm font-medium text-slate-700">QuickBooks</span>
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Xero</span>
                </div>
                <span className="text-sm font-medium text-slate-700">Xero</span>
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S50</span>
                </div>
                <span className="text-sm font-medium text-slate-700">Sage 50</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleServiceClick(service)}
              className="group relative rounded-2xl bg-white p-8 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-blue-300 hover:scale-105 hover:rotate-1 transition-all duration-500 overflow-hidden cursor-pointer transform-gpu"
            >
              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none group-hover:animate-pulse"></div>
              
              {/* Advanced animated background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-indigo-400/10 rounded-full -translate-y-12 translate-x-12 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-700 group-hover:animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-teal-400/12 to-emerald-400/8 rounded-full translate-y-10 -translate-x-10 group-hover:translate-y-2 group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-700 group-hover:animate-pulse"></div>
              
              {/* Magical particles */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-300"></div>
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.2s'}}></div>
              
              {/* Professional accents */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rotate-45 opacity-0 group-hover:opacity-70 transition-all duration-300 group-hover:animate-pulse group-hover:rotate-90"></div>
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:animate-bounce group-hover:scale-150"></div>
              
              {/* Icon with enhanced animation */}
              <div className={`relative mb-6 w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl transition-all duration-300 group-hover:shadow-blue-400/30`}>
                <service.icon className="w-8 h-8 text-white group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-all duration-300"></div>
              </div>
              
              <h3 className="relative text-xl font-bold text-slate-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {service.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors line-clamp-3">
                {service.description}
              </p>
              
              {/* Enhanced click indicator */}
              <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-blue-600 text-lg font-bold animate-bounce group-hover:animate-pulse">→</span>
              </div>
              
              {/* Click instruction */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-80 transition-all duration-300 group-hover:scale-105">
                <span className="text-xs text-slate-500 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 shadow-sm">Click for details</span>
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