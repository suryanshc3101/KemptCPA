import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional CPA Services for Your Business Success
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Trusted Canadian Chartered Professional Accountant providing comprehensive tax preparation, bookkeeping, and business advisory services to help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary bg-white text-blue-900 hover:bg-gray-100">
                  Get Free Consultation
                </a>
                <a href="#services" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                  View Services
                </a>
              </div>
              
              {/* Professional Credentials */}
              <div className="mt-8 flex items-center space-x-6">
                <div className="text-sm">
                  <div className="font-semibold">CPA Ontario</div>
                  <div className="text-blue-200">Licensed Professional</div>
                </div>
                <div className="h-8 w-px bg-blue-300"></div>
                <div className="text-sm">
                  <div className="font-semibold">Serving Canada</div>
                  <div className="text-blue-200">Remote Services Available</div>
                </div>
              </div>
            </div>

            {/* Professional Image */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional CPA working with financial documents and calculator"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <div className="font-semibold text-lg mb-1">Professional CPA Services</div>
                    <div className="text-sm text-gray-200">Tax • Bookkeeping • Advisory</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Software Partners Banner */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-700">
              Certified in Leading Accounting Software
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-8 items-center justify-center">
            <div className="text-center">
              <div className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded mx-auto w-fit">
                QuickBooks
              </div>
              <div className="text-sm text-gray-600 mt-2">Online & Desktop</div>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white font-bold text-sm px-4 py-2 rounded mx-auto w-fit">
                Xero
              </div>
              <div className="text-sm text-gray-600 mt-2">Cloud Accounting</div>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 text-white font-bold text-sm px-4 py-2 rounded mx-auto w-fit">
                Sage 50
              </div>
              <div className="text-sm text-gray-600 mt-2">Enterprise Solution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}