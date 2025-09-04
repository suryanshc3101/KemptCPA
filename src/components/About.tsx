import React from 'react';
import { Award, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding about-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 lg:px-0">
              About Kempt CPA Professional Corporation
            </h2>
            
            <div className="space-y-4 sm:space-y-6 px-4 lg:px-0">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I'm <strong className="text-blue-900">Kuldeep, CPA</strong>, Principal at 
                <strong className="text-blue-900"> Kempt CPA Professional Corporation</strong>. 
                We serve individuals and businesses with straightforward, tech-enabled accounting 
                and proactive advice.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With extensive experience in Canadian tax law, financial reporting, and business 
                advisory services, I bring a strategic approach to every client engagement with 
                cutting-edge technology and personalized service.
              </p>

              {/* Professional Highlights */}
              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Designated CPA</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Chartered Professional Accountant, Ontario</p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Brant County and surrounding areas</h4>
                    <p className="text-xs sm:text-sm text-gray-600">KEMPTCPA : Keeping your finances neat, precise and stress-free</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <a href="#contact" className="btn-primary min-h-[44px] px-6 py-3 text-base">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Professional Business Background Image */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mx-4 lg:mx-0">
              <div className="h-64 sm:h-80 lg:h-96 w-full">
                <img 
                src="/Wordpress-Promesses-de-baisses-dimpot-des-particuliers copy copy.jpg" 
                alt="Professional Canadian tax preparation with TAX wooden blocks, Canadian currency, and calculator representing expert CPA services"
                  className="w-full h-full object-cover"
              />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6">
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Professional Excellence</h3>
                  <p className="text-gray-200 text-sm sm:text-base">Dedicated to your business success</p>
                  
                  {/* Professional Credentials */}
                  <div className="flex items-center space-x-4 mt-2 sm:mt-4">
                    <div className="flex items-center space-x-1">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                      <span className="text-xs sm:text-sm text-yellow-200">CPA Ontario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}