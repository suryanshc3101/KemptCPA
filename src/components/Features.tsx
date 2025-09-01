import React from 'react';
import { Shield, TrendingUp, Monitor } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "CRA Compliant",
    expandedText: "We ensure all your filings meet Canada Revenue Agency standards with meticulous attention to detail and up-to-date knowledge of tax regulations."
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    expandedText: "Our advisory services are designed to help your business scale efficiently while optimizing your tax position and financial operations."
  },
  {
    icon: Monitor,
    title: "Tech Enabled",
    expandedText: "We leverage modern accounting software like QuickBooks and Xero to streamline your bookkeeping and provide real-time financial insights."
  }
];

export default function Features() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Why Choose Kempt CPA
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            Professional excellence meets modern efficiency for comprehensive business support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card professional-card text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <div className="expanded-content">
                <p className="text-professional">
                  {feature.expandedText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}