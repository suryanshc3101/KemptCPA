import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    color: string;
  } | null;
}

const serviceDetails = {
  "Assistance in Finance audit reviews and Notice to reader engagements": {
    overview: "Professional assistance with financial statement preparation and assurance services to meet your compliance and stakeholder requirements.",
    features: [
      "Financial statement preparation and review",
      "Notice to reader engagements for banks and investors",
      "Compilation of financial statements",
      "Management letter recommendations",
      "Internal control assessments",
      "Regulatory compliance support"
    ],
    benefits: [
      "Meet bank and investor requirements",
      "Professional presentation of financial information",
      "Enhanced credibility with stakeholders",
      "Improved internal controls and processes"
    ],
    process: [
      "Initial consultation to understand requirements",
      "Review of accounting records and supporting documentation",
      "Preparation of financial statements",
      "Management review and recommendations",
      "Final reporting and delivery"
    ]
  },
  "T1 & T2": {
    overview: "Complete personal (T1) and corporate (T2) tax return preparation and filing services, ensuring compliance and maximizing deductions.",
    features: [
      "Personal tax return (T1) preparation and filing",
      "Corporate tax return (T2) preparation and filing",
      "Tax planning and optimization strategies",
      "CRA correspondence and representation",
      "Installment payment planning",
      "Multi-year tax planning"
    ],
    benefits: [
      "Maximize tax deductions and credits",
      "Ensure compliance with tax regulations",
      "Professional CRA representation",
      "Strategic tax planning for future years"
    ],
    process: [
      "Gather tax documents and information",
      "Prepare and review tax returns",
      "File returns with CRA electronically",
      "Provide tax planning recommendations",
      "Handle any CRA follow-up correspondence"
    ]
  },
  "Book Keeping (QuickBooks, Xero, Sage 50)": {
    overview: "Comprehensive bookkeeping services using leading accounting software to maintain accurate financial records and provide timely reporting.",
    features: [
      "QuickBooks Online and Desktop setup and maintenance",
      "Xero cloud-based bookkeeping services",
      "Sage 50 accounting system management",
      "Monthly bank reconciliations",
      "Accounts payable and receivable management",
      "Financial statement preparation"
    ],
    benefits: [
      "Real-time access to financial information",
      "Automated reporting and insights",
      "Improved cash flow management",
      "Time savings for business owners"
    ],
    process: [
      "Software setup and chart of accounts configuration",
      "Daily transaction recording and categorization",
      "Monthly reconciliations and reporting",
      "Quarterly reviews and adjustments",
      "Year-end preparation and reporting"
    ]
  },
  "GST/HST": {
    overview: "Complete GST/HST registration, filing, and compliance management across all provinces and territories in Canada.",
    features: [
      "GST/HST registration assistance",
      "Monthly, quarterly, and annual filing",
      "Input tax credit optimization",
      "Multi-provincial compliance management",
      "GST/HST audit support and representation",
      "Voluntary disclosure services"
    ],
    benefits: [
      "Ensure compliance with provincial requirements",
      "Maximize input tax credit recoveries",
      "Professional audit representation",
      "Timely filing to avoid penalties"
    ],
    process: [
      "Assess registration requirements",
      "Set up filing schedules and reminders",
      "Prepare and file returns electronically",
      "Monitor compliance and deadlines",
      "Handle any CRA inquiries or audits"
    ]
  },
  "Business Advisory": {
    overview: "Strategic business advice and financial planning services to help your business grow, improve profitability, and achieve long-term success.",
    features: [
      "Financial planning and budgeting",
      "Cash flow forecasting and management",
      "Business performance analysis",
      "Growth strategy development",
      "Cost reduction and efficiency improvements",
      "Acquisition and merger support"
    ],
    benefits: [
      "Make informed business decisions",
      "Improve profitability and cash flow",
      "Identify growth opportunities",
      "Optimize business operations"
    ],
    process: [
      "Business assessment and analysis",
      "Identify opportunities and challenges",
      "Develop strategic recommendations",
      "Implement solutions and monitor progress",
      "Ongoing support and adjustments"
    ]
  },
  "CRA Representation": {
    overview: "Professional representation and communication with the Canada Revenue Agency for audits, disputes, objections, and compliance matters.",
    features: [
      "CRA audit representation and support",
      "Notice of objection preparation and filing",
      "Voluntary disclosure applications",
      "Penalty and interest relief requests",
      "Tax dispute resolution",
      "Compliance agreement negotiations"
    ],
    benefits: [
      "Professional advocacy with CRA",
      "Reduced stress and time commitment",
      "Better outcomes in disputes",
      "Protection of your rights and interests"
    ],
    process: [
      "Review CRA correspondence and requirements",
      "Prepare response strategy and documentation",
      "Communicate directly with CRA on your behalf",
      "Negotiate settlements and agreements",
      "Provide ongoing support and monitoring"
    ]
  }
};

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  const details = serviceDetails[service.title as keyof typeof serviceDetails];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        {/* Header */}
        <div className={`relative p-8 bg-gradient-to-r ${service.color} text-white rounded-t-3xl`}>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold">{service.title}</h2>
          </div>
          
          <p className="text-xl text-white/90 leading-relaxed">
            {details.overview}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              What's Included
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {details.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-blue-500" />
              Key Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {details.benefits.map((benefit, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Process</h3>
            <div className="space-y-4">
              {details.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                    {index + 1}
                  </div>
                  <span className="text-slate-700 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-4">
              Book a free 30-minute consultation to discuss your {service.title.toLowerCase()} needs.
            </p>
            <button 
              onClick={onClose}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold hover:scale-105 transition-transform shadow-lg`}
            >
              <ArrowRight className="w-5 h-5" />
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}