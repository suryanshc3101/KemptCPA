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
          {/* Enhanced Breadcrumb for SEO */}
          <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </span>
            <span> / </span>
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-blue-600 font-medium">Professional CPA Services</span>
              <meta itemProp="position" content="2" />
            </span>
          </nav>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-6 h-6 text-blue-500 animate-sparkle" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent tracking-wide uppercase animate-text-shimmer">
              ✨ Professional Services
            </span>
            <Star className="w-6 h-6 text-cyan-500 animate-sparkle" style={{animationDelay: '1s'}} />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 animate-text-shimmer">
            Services
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Professional CPA Services: Tax Preparation (T1/T2) • QuickBooks/Xero Bookkeeping • GST/HST Filings • CRA Representation • Business Advisory Services
          </p>
          
          {/* Software Partners */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-10 p-6 glass-effect rounded-3xl shadow-2xl border border-white/30 animate-magical-glow">
              <div className="flex items-center gap-4 magical-hover animate-magical-pulse">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">QB</span>
                  <Zap className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" />
                </div>
                <span className="text-base font-bold text-slate-800">QuickBooks</span>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
              <div className="flex items-center gap-4 magical-hover animate-magical-pulse" style={{animationDelay: '0.5s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">Xero</span>
                  <Zap className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" style={{animationDelay: '0.3s'}} />
                </div>
                <span className="text-base font-bold text-slate-800">Xero</span>
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
              <div className="flex items-center gap-4 magical-hover animate-magical-pulse" style={{animationDelay: '1s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">S50</span>
                  <Zap className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-sparkle" style={{animationDelay: '0.6s'}} />
                </div>
                <span className="text-base font-bold text-slate-800">Sage 50</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleServiceClick(service)}
              className="group relative rounded-3xl glass-effect p-10 shadow-2xl border-2 border-blue-200/40 hover:border-blue-400/60 magical-hover cursor-pointer transform-gpu animate-magical-glow overflow-hidden transition-all duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Clear clickable indicator */}
              <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <span className="text-blue-600 text-sm">→</span>
                </div>
              </div>

              {/* Enhanced hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-cyan-50/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none animate-magical-gradient"></div>
              
              {/* Advanced animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/15 rounded-full -translate-y-16 translate-x-16 group-hover:translate-y-4 group-hover:translate-x-4 group-hover:rotate-45 transition-all duration-700 animate-magical-float"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-br from-teal-400/18 to-emerald-400/12 rounded-full translate-y-14 -translate-x-14 group-hover:translate-y-4 group-hover:translate-x-4 group-hover:-rotate-45 transition-all duration-700 animate-magical-pulse"></div>
              
              {/* Magical particles */}
              <div className="absolute top-6 left-6 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-sparkle transition-all duration-300"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-sparkle transition-all duration-300" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-75 group-hover:animate-sparkle transition-all duration-300" style={{animationDelay: '1s'}}></div>
              
              {/* Professional accents */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rotate-45 opacity-0 group-hover:opacity-80 transition-all duration-300 animate-sparkle group-hover:rotate-180"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-90 transition-all duration-300 animate-sparkle group-hover:scale-150"></div>
              
              {/* Icon with enhanced animation */}
              <div className={`relative mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl magical-hover animate-magical-pulse`}>
                <service.icon className="w-10 h-10 text-white animate-magical-float" />
                <Star className="w-4 h-4 text-yellow-300 absolute -top-2 -right-2 animate-sparkle" />
                <div className="absolute inset-0 bg-white/30 rounded-2xl opacity-0 group-hover:opacity-50 animate-magical-pulse transition-all duration-500"></div>
              </div>
              
              <h3 className="relative text-2xl font-bold text-slate-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight">
                {service.title}
              </h3>
              <p className="relative text-base text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors font-medium mb-4">
                {service.description}
              </p>
              
              {/* Clear "Click for details" indicator */}
              <div className="relative">
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  <span>Click for details</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
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