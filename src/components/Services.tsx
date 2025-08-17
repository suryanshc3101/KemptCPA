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
          
          {/* Software Partners */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-8 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg" 
                  alt="QuickBooks"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-sm font-medium text-slate-700">QuickBooks</span>
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">xero</span>
                </div>
                <span className="text-sm font-medium text-slate-700">Xero</span>
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SAGE</span>
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
              className="group relative rounded-2xl bg-white p-8 shadow-xl border border-slate-200 hover:shadow-2xl hover:border-blue-300 hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full translate-y-8 -translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
              
              {/* Professional accents */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rotate-45 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:animate-pulse"></div>
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-300 group-hover:animate-bounce"></div>
              
              {/* Icon with enhanced animation */}
              <div className={`relative mb-6 w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              
              <h3 className="relative text-xl font-bold text-slate-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {service.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors line-clamp-3">
                {service.description}
              </p>
              
              {/* Enhanced click indicator */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <span className="text-blue-600 text-sm font-bold animate-bounce">→</span>
              </div>
              
              {/* Click instruction */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                <span className="text-xs text-slate-500 bg-white/80 px-2 py-1 rounded-full">Click for details</span>
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