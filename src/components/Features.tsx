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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            Why Choose Kempt CPA
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional excellence meets modern efficiency for comprehensive business support.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.expandedText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}