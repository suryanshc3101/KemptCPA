import React from 'react';
import { FileText, Calculator, ClipboardCheck, Shield, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Tax Preparation (T1/T2/T3)",
    description: "Expert personal (T1), corporate (T2) and T3 tax return preparation and strategic tax planning services. We ensure full compliance with Canada Revenue Agency requirements while maximizing available deductions and credits to minimize your tax liability.",
    detailedDescription: "Our tax services go beyond basic compliance. We provide proactive tax planning, identify opportunities for tax savings, and ensure your returns are prepared accurately and filed on time. With extensive knowledge of Canadian tax law, we help individuals and corporations navigate complex tax situations.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Personal tax return (T1) preparation and filing",
      "Corporate tax return (T2) preparation and filing", 
      "T3 tax return filing and preparation",
      "Tax planning and optimization strategies",
      "CRA correspondence and representation",
      "Tax-efficient business structure advice"
    ],
    benefits: [
      "Maximize tax deductions and credits",
      "Ensure compliance with tax regulations",
      "Professional CRA representation",
      "Strategic tax planning for future years",
      "Reduced audit risk through accurate preparation",
      "Time savings and peace of mind",
      "Year-round tax support and advice"
    ]
  },
  {
    icon: Calculator,
    title: "QuickBooks/Xero Bookkeeping",
    description: "Professional bookkeeping services utilizing industry-leading software platforms including QuickBooks Online/Desktop and Xero. We maintain accurate, up-to-date financial records while providing real-time insights into your business performance.",
    detailedDescription: "Our bookkeeping services are designed to give you complete visibility into your business finances. We handle everything from daily transaction recording to monthly financial statements, ensuring your books are always accurate, compliant, and ready for tax time or business decisions.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "QuickBooks Online and Desktop setup and maintenance",
      "Xero cloud-based bookkeeping services",
      "Monthly bank reconciliations",
      "Financial statement preparation",
      "Payroll processing and remittances",
      "Accounts payable and receivable management"
    ],
    benefits: [
      "Real-time access to financial information",
      "Automated reporting and insights",
      "Improved cash flow management",
      "Time savings for business owners",
      "Reduced errors through automation",
      "Better business decision making",
      "Scalable systems that grow with your business"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "GST/HST Filings",
    description: "Comprehensive GST/HST services covering registration, filing, compliance, and optimization across all Canadian provinces and territories. We ensure full compliance while maximizing input tax credit recoveries and minimizing your administrative burden.",
    detailedDescription: "Navigate the complexities of Canadian GST/HST with confidence. Our services cover everything from initial registration to ongoing compliance, helping businesses of all sizes meet their obligations while optimizing their tax position through strategic planning and accurate reporting.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "GST/HST registration assistance",
      "Monthly, quarterly, and annual filing",
      "Input tax credit optimization",
      "Multi-provincial compliance management",
      "GST/HST audit support and representation",
      "New housing rebate applications"
    ],
    benefits: [
      "Ensure compliance with provincial requirements",
      "Maximize input tax credit recoveries",
      "Professional audit representation",
      "Timely filing to avoid penalties",
      "Reduced administrative burden",
      "Expert guidance on complex transactions",
      "Peace of mind with professional oversight"
    ]
  },
  {
    icon: Shield,
    title: "CRA Representation",
    description: "Expert representation and advocacy with the Canada Revenue Agency for audits, disputes, objections, and complex compliance matters. We protect your interests while working toward favorable resolutions that minimize financial impact and stress.",
    detailedDescription: "When dealing with the CRA, having professional representation can make all the difference. Our experienced team understands CRA procedures, knows your rights as a taxpayer, and has the expertise to navigate complex situations while protecting your interests throughout the process.",
    image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Audit defense and representation",
      "Dispute resolution",
      "CRA correspondence management",
      "Voluntary disclosures",
      "Penalty and interest negotiations",
      "Appeals and objections"
    ],
    benefits: [
      "Professional advocacy with CRA",
      "Reduced stress and time commitment",
      "Expert knowledge of CRA procedures",
      "Protection of taxpayer rights",
      "Favorable resolution strategies",
      "Confidential professional representation"
    ]
  },
  {
    icon: TrendingUp,
    title: "Business Advisory Services",
    description: "Strategic business advisory services designed to accelerate growth, improve profitability, and build sustainable competitive advantages. We combine financial expertise with practical business experience to guide your decision-making and strategic planning.",
    detailedDescription: "Our business advisory services go beyond traditional accounting to provide strategic insights that drive business success. We work closely with business owners to understand their goals, identify opportunities, and implement strategies that deliver measurable results.",
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Financial planning and budgeting",
      "Cash flow forecasting and management",
      "Business performance analysis",
      "Growth strategy development",
      "Cost reduction and efficiency improvements",
      "Acquisition and merger support"
    ],
    benefits: [
      "Strategic business planning",
      "Improved financial performance",
      "Data-driven decision making",
      "Risk management strategies",
      "Growth acceleration",
      "Competitive advantage development"
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

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {/* Service Image */}
              <img 
                src={service.image} 
                alt={service.title}
                className="service-image"
              />
              
              {/* Service Content */}
              <div className="service-content">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center mr-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                
                {/* Overview */}
                <p className="service-description">
                  {service.description}
                </p>
                
                {/* Detailed Description */}
                <p className="service-description">
                  {service.detailedDescription}
                </p>

                {/* Features */}
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="service-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary text-lg px-8 py-4">
            Request Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}