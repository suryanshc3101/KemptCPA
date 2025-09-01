import React from 'react';
import { FileText, Calculator, Shield, TrendingUp, Users, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Tax Preparation (T1/T2/T3)",
    description: "Complete tax return preparation and filing for individuals, corporations, and trusts. Ensure compliance with CRA requirements while maximizing deductions and credits.",
    features: [
      "Personal tax returns (T1)",
      "Corporate tax returns (T2)", 
      "Trust tax returns (T3)",
      "Tax planning strategies",
      "CRA correspondence handling"
    ]
  },
  {
    icon: Calculator,
    title: "QuickBooks/Xero Bookkeeping",
    description: "Professional bookkeeping services using industry-leading software. Monthly reconciliations, financial reporting, and real-time access to your financial information.",
    features: [
      "QuickBooks Online & Desktop setup",
      "Xero cloud bookkeeping",
      "Monthly bank reconciliations",
      "Financial statement preparation",
      "Payroll processing"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "GST/HST Filings",
    description: "Complete GST/HST registration, filing, and compliance management across all provinces. Optimize input tax credits and ensure timely submissions.",
    features: [
      "GST/HST registration assistance",
      "Monthly, quarterly, annual filing",
      "Input tax credit optimization",
      "Multi-provincial compliance",
      "Audit support and representation"
    ]
  },
  {
    icon: Shield,
    title: "CRA Representation",
    description: "Professional representation for audits, disputes, and compliance matters. Expert communication with Canada Revenue Agency on your behalf.",
    features: [
      "Audit defense and representation",
      "Dispute resolution",
      "CRA correspondence management",
      "Voluntary disclosures",
      "Penalty and interest negotiations"
    ]
  },
  {
    icon: TrendingUp,
    title: "Business Advisory Services",
    description: "Strategic business advice, financial planning, and growth strategies. Cash flow management, budgeting, and performance analysis to drive success.",
    features: [
      "Financial planning and budgeting",
      "Cash flow forecasting",
      "Business performance analysis",
      "Growth strategy development",
      "Cost reduction recommendations"
    ]
  },
  {
    icon: Users,
    title: "Financial Statement Preparation",
    description: "Professional compilation, review, and audit services. Notice to reader engagements for banks and investors with full compliance assurance.",
    features: [
      "Compilation engagements",
      "Review engagements", 
      "Notice to reader services",
      "Bank covenant compliance",
      "Investor reporting"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Professional CPA Services
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            Comprehensive accounting services designed to keep your business compliant, 
            profitable, and positioned for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="professional-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-professional mb-6">
                {service.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-professional">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Request Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}