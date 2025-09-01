import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-background text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Expert Canadian CPA Services: Tax Preparation, Bookkeeping & Business Advisory
          </h1>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Trusted Canadian Chartered Professional Accountant providing comprehensive tax preparation, bookkeeping, and business advisory services to help your business thrive in Brantford and nearby areas.
          </p>
          
          {/* Single Call to Action */}
          <div className="flex justify-center">
            <a href="#contact" className="btn-primary bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Consultation
            </a>
          </div>
          
          {/* Service Area */}
          <div className="mt-12 flex justify-center">
            <div className="text-center">
              <div className="font-semibold text-lg">Services in Brantford and nearby areas</div>
              <div className="text-blue-200 mt-2">Professional CPA expertise for your business success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Software Partners Banner */}
      <div className="bg-white/10 backdrop-blur-sm py-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white">
              Certified in Leading Accounting Software
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-8 items-center justify-center">
            <div className="text-center">
              <div className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded mx-auto w-fit">
                QuickBooks
              </div>
              <div className="text-sm text-blue-100 mt-2">Online & Desktop</div>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white font-bold text-sm px-4 py-2 rounded mx-auto w-fit">
                Xero
              </div>
              <div className="text-sm text-blue-100 mt-2">Cloud Accounting</div>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 text-white font-bold text-sm px-4 py-2 rounded mx-auto w-fit">
                Sage 50
              </div>
              <div className="text-sm text-blue-100 mt-2">Enterprise Solution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}