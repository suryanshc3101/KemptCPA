import React, { useState } from 'react';
import { Shield, FileText, Calculator, TrendingUp, Users, Lightbulb, ClipboardCheck, Star, Zap } from 'lucide-react';
import ServiceModal from './ServiceModal';

const services = [
  {
    icon: ClipboardCheck,
    color: 'from-blue-600 to-indigo-600',
    title: "Assistance in audit, reviews and notice to reader engagements",
    description: "Professional assistance with audit, reviews, and notice to reader engagements to meet your compliance requirements."
  },
  {
    icon: Users,
    color: 'from-slate-600 to-blue-600',
    title: "T1, T2 & T3",
    description: "Complete tax return preparation and filing for individuals, corporations, and trusts, ensuring compliance with CRA requirements and maximizing deductions."
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
      <section id="services" className="py-16 bg-white">
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-sm font-bold text-blue-600 tracking-wide uppercase">
              Professional Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Services
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Professional CPA Services: Tax Preparation (T1/T2) • QuickBooks/Xero Bookkeeping • GST/HST Filings • CRA Representation • Business Advisory Services
          </p>
          
          {/* Software Partners */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-lg overflow-x-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold">QB</span>
                </div>
                <span className="text-sm font-bold text-slate-800">QuickBooks</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold">Xero</span>
                </div>
                <span className="text-sm font-bold text-slate-800">Xero</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold">S50</span>
                </div>
                <span className="text-sm font-bold text-slate-800">Sage 50</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleServiceClick(service)}
              className="relative bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg cursor-pointer transition-all duration-300 p-6 min-h-[280px]"
            >
              {/* Clickable indicator */}
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                  <span className="text-blue-600 text-sm">→</span>
                </div>
              </div>

              {/* Simple icon */}
              <div className={`mb-6 w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 leading-tight">
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-6 flex-grow">
                {service.description}
              </p>
              
              {/* Click indicator */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  <span>Click for details →</span>
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