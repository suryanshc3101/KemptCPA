import React from 'react';
import { Calculator, FileText, TrendingUp, Users, Shield, Clock, Award, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Personal & Corporate Tax Returns",
      description: "Comprehensive tax preparation services for individuals and businesses. We ensure maximum deductions and credits while maintaining full compliance with CRA requirements.",
      image: "/GettyImages-1368094662-scaled.jpg",
      features: [
        "Personal Income Tax Returns",
        "Corporate Tax Returns", 
        "Tax Planning & Optimization",
        "CRA Representation"
      ],
      benefits: [
        "Maximum Tax Savings",
        "CRA Compliance",
        "Expert Tax Advice",
        "Year-Round Support"
      ],
      icon: Calculator
    },
    {
      title: "QuickBooks/Xero Bookkeeping",
      description: "Professional bookkeeping services using industry-leading software. Keep your financial records organized and up-to-date with our expert bookkeeping solutions.",
      image: "/workplace-team-cooperation-businesswoman-laptop-office-2048x1365.png",
      features: [
        "Monthly Financial Statements",
        "Accounts Payable/Receivable",
        "Bank Reconciliation",
        "Payroll Processing"
      ],
      benefits: [
        "Real-Time Financial Insights",
        "Improved Cash Flow",
        "Automated Processes",
        "Peace of Mind"
      ],
      icon: FileText
    },
    {
      title: "GST/HST Filings",
      description: "Accurate and timely GST/HST filing services. We handle all aspects of sales tax compliance to keep your business in good standing with the CRA.",
      image: "/GST-HST_istock-1024x683-1.jpg.jpg",
      features: [
        "Monthly/Quarterly Filings",
        "GST/HST Registration",
        "Input Tax Credit Optimization",
        "Compliance Monitoring"
      ],
      benefits: [
        "Avoid CRA Penalties",
        "Maximize ITC Claims",
        "Timely Submissions",
        "Expert Guidance"
      ],
      icon: TrendingUp
    },
    {
      title: "Business Advisory Services",
      description: "Strategic business consulting to help your company grow and thrive. From financial planning to operational efficiency, we provide the insights you need.",
      image: "/pexels-fauxels-3182834.jpg",
      features: [
        "Financial Planning",
        "Business Strategy",
        "Performance Analysis",
        "Growth Consulting"
      ],
      benefits: [
        "Strategic Growth",
        "Improved Profitability",
        "Risk Management",
        "Expert Guidance"
      ],
      icon: Users
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-secondary mb-4 lg:mb-6">Our Services</h2>
          <p className="text-professional text-lg lg:text-xl max-w-3xl mx-auto">
            Comprehensive accounting and tax services designed to support your financial success. 
            From personal tax returns to complex business advisory services, we have you covered.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className={`grid gap-0 ${index % 2 === 0 ? 'lg:grid-cols-[400px_1fr]' : 'lg:grid-cols-[1fr_400px]'}`}>
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 sm:h-72 lg:h-full lg:min-h-[500px] object-cover"
                  />
                </div>
                
                <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center mb-4 lg:mb-6">
                    <service.icon className="w-8 h-8 lg:w-10 lg:h-10 text-blue-800 mr-3 lg:mr-4" />
                    <h3 className="service-title text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="service-description text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
                    <div className="service-features">
                      <h4 className="flex items-center font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-benefits bg-gray-50 rounded-lg p-4 lg:p-6">
                      <h4 className="flex items-center font-semibold text-gray-900 mb-4 text-base sm:text-lg">
                        <Award className="w-5 h-5 text-blue-600 mr-2" />
                        Benefits
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <p className="text-gray-600 mb-6 lg:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to get started? Contact us today for a free consultation and discover how our services can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="btn-primary w-full sm:w-auto text-center"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+1-555-0123" 
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;