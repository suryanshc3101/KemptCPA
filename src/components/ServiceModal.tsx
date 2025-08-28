import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

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
  "Assistance in audit, reviews and notice to reader engagements": {
    overview: "Comprehensive financial statement preparation and assurance services designed to meet regulatory requirements and provide stakeholders with confidence in your financial reporting. Our experienced team ensures accuracy, compliance, and professional presentation of your financial information.",
    detailedDescription: "We provide thorough assistance with compilation audit, review audit, and notice to reader services. Our approach combines technical expertise with practical business insight to deliver meaningful audit that serve your business needs and satisfy regulatory requirements.",
    features: [
      "Audit preparation and review",
      "Notice to reader engagements for banks and investors",
      "Compilation of financial statements",
      "Bank covenant compliance monitoring",
    ],
    benefits: [
      "Meet bank and investor requirements",
      "Professional presentation of financial information",
      "Enhanced credibility with stakeholders",
      "Improved internal controls and processes",
      "Risk mitigation and compliance assurance",
      "Streamlined audit preparation",
    ],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "T1, T2 & T3": {
    overview: "Expert personal (T1), corporate (T2) and T3 tax return preparation and strategic tax planning services. We ensure full compliance with Canada Revenue Agency requirements while maximizing available deductions and credits to minimize your tax liability.",
    detailedDescription: "Our tax services go beyond basic compliance. We provide proactive tax planning, identify opportunities for tax savings, and ensure your returns are prepared accurately and filed on time. With extensive knowledge of Canadian tax law, we help individuals and corporations navigate complex tax situations.",
    features: [
      "Personal tax return (T1) preparation and filing",
      "Corporate tax return (T2) preparation and filing",
      "T3 tax return filing and preparation",
      "Tax planning and optimization strategies",
      "CRA correspondence and representation",
      "Tax-efficient business structure advice",
    ],
    benefits: [
      "Maximize tax deductions and credits",
      "Ensure compliance with tax regulations",
      "Professional CRA representation",
      "Strategic tax planning for future years",
      "Reduced audit risk through accurate preparation",
      "Time savings and peace of mind",
      "Year-round tax support and advice"
    ],
    process: [
      "Gather tax documents and information",
      "Review previous years for missed opportunities",
      "Prepare and review tax returns",
      "Tax planning recommendations for next year",
      "File returns with CRA electronically",
      "Monitor refund status and deadlines",
      "Handle any CRA follow-up correspondence"
    ],
    image: "https://images.pexels.com/photos/8919544/pexels-photo-8919544.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "Book Keeping (QuickBooks, Xero, Sage 50)": {
    overview: "Professional bookkeeping services utilizing industry-leading software platforms including QuickBooks Online/Desktop, Xero, and Sage 50. We maintain accurate, up-to-date financial records while providing real-time insights into your business performance.",
    detailedDescription: "Our bookkeeping services are designed to give you complete visibility into your business finances. We handle everything from daily transaction recording to monthly financial statements, ensuring your books are always accurate, compliant, and ready for tax time or business decisions.",
    features: [
      "QuickBooks Online and Desktop setup and maintenance",
      "Xero cloud-based bookkeeping services",
      "Sage 50 accounting system management",
      "Monthly bank reconciliations",
      "Financial statement preparation",
      "Payroll processing and remittances",
    ],
    benefits: [
      "Real-time access to financial information",
      "Automated reporting and insights",
      "Improved cash flow management",
      "Time savings for business owners",
      "Reduced errors through automation",
      "Better business decision making",
      "Scalable systems that grow with your business"
    ],
    process: [
      "Software setup and chart of accounts configuration",
      "Data migration from existing systems",
      "Daily transaction recording and categorization",
      "Weekly cash flow monitoring",
      "Monthly reconciliations and reporting",
      "Quarterly reviews and adjustments",
      "Annual cleanup and optimization",
      "Year-end preparation and reporting"
    ],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "GST/HST": {
    overview: "Comprehensive GST/HST services covering registration, filing, compliance, and optimization across all Canadian provinces and territories. We ensure full compliance while maximizing input tax credit recoveries and minimizing your administrative burden.",
    detailedDescription: "Navigate the complexities of Canadian GST/HST with confidence. Our services cover everything from initial registration to ongoing compliance, helping businesses of all sizes meet their obligations while optimizing their tax position through strategic planning and accurate reporting.",
    features: [
      "GST/HST registration assistance",
      "Monthly, quarterly, and annual filing",
      "Input tax credit optimization",
      "Multi-provincial compliance management",
      "GST/HST audit support and representation",
      "New housing rebate applications",
    ],
    benefits: [
      "Ensure compliance with provincial requirements",
      "Maximize input tax credit recoveries",
      "Professional audit representation",
      "Timely filing to avoid penalties",
      "Reduced administrative burden",
      "Expert guidance on complex transactions",
      "Peace of mind with professional oversight"
    ],
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "Business Advisory": {
    overview: "Strategic business advisory services designed to accelerate growth, improve profitability, and build sustainable competitive advantages. We combine financial expertise with practical business experience to guide your decision-making and strategic planning.",
    detailedDescription: "Our business advisory services go beyond traditional accounting to provide strategic insights that drive business success. We work closely with business owners to understand their goals, identify opportunities, and implement strategies that deliver measurable results.",
    features: [
      "Financial planning and budgeting",
      "Cash flow forecasting and management",
      "Business performance analysis",
      "Growth strategy development",
      "Cost reduction and efficiency improvements",
      "Acquisition and merger support",
    ],
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  "CRA Representation": {
    overview: "Expert representation and advocacy with the Canada Revenue Agency for audits, disputes, objections, and complex compliance matters. We protect your interests while working toward favorable resolutions that minimize financial impact and stress.",
    detailedDescription: "When dealing with the CRA, having professional representation can make all the difference. Our experienced team understands CRA procedures, knows your rights as a taxpayer, and has the expertise to navigate complex situations while protecting your interests throughout the process.",
    image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
};

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  // Add ESC key functionality
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const details = serviceDetails[service.title as keyof typeof serviceDetails];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-2 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl my-2 sm:my-0">
        {/* Header */}
        <div className={`relative p-4 sm:p-6 lg:p-8 bg-gradient-to-r ${service.color} text-white rounded-t-2xl sm:rounded-t-3xl overflow-hidden`}>
          {/* Background image for financial services */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src={details.image} 
              alt="Financial services background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors group"
            title="Press ESC to close"
          >
            <X className="w-4 h-4 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform" />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">{service.title}</h2>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
            {details.overview}
          </p>
          
          {/* Add detailed description */}
          <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
              {details.detailedDescription}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
          {/* Service Image */}
          <div className="relative">
            <img 
              src={details.image} 
              alt={service.title}
              className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl sm:rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl sm:rounded-2xl"></div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-6">
              <p className="text-white font-bold text-sm sm:text-base lg:text-lg">{service.title}</p>
              <p className="text-white text-xs sm:text-sm font-medium">Professional CPA Services</p>
            </div>
          </div>

          {/* Features */}
          {details.features && details.features.length > 0 && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              What's Included
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {details.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Benefits */}
          {details.benefits && details.benefits.length > 0 && (
          <div>
            {service.title !== "Assistance in audit, reviews and notice to reader engagements" && (
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                Key Benefits
              </h3>
            )}
            {service.title === "Assistance in audit, reviews and notice to reader engagements" && (
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                Benefits
              </h3>
            )}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {details.benefits.map((benefit, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          )}


          {/* CTA */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Ready to Get Started?</h3>
            <p className="text-sm sm:text-base text-slate-600 mb-4">
              Contact us to discuss your specific needs for {service.title.toLowerCase()}.
            </p>
            <button 
              onClick={() => {
                onClose();
                // Scroll to contact section
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold hover:scale-105 transition-transform shadow-lg`}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              Get In Touch
            </button>
            <p className="text-xs text-slate-500 mt-2">Tap outside or press ESC to close</p>
          </div>
        </div>
      </div>
    </div>
  );
}