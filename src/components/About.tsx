import React from 'react';
import { Award, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding about-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary mb-6">
              About Kempt CPA Professional Corporation
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-professional leading-relaxed">
                I'm <strong className="text-blue-900">Kuldeep, CPA</strong>, Principal at 
                <strong className="text-blue-900"> Kempt CPA Professional Corporation</strong>. 
                We serve individuals and businesses with straightforward, tech-enabled accounting 
                and proactive advice.
              </p>
              
              <p className="text-professional leading-relaxed">
                With extensive experience in Canadian tax law, financial reporting, and business 
                advisory services, I bring a strategic approach to every client engagement with 
                cutting-edge technology and personalized service.
              </p>

              {/* Professional Highlights */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Designated CPA</h4>
                    <p className="text-sm text-professional">Chartered Professional Accountant, Ontario</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Serving Brantford and nearby areas</h4>
                    <p className="text-sm text-professional">Local expertise with personalized service</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="#contact" className="btn-primary">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Professional Business Background Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/Wordpress-Promesses-de-baisses-dimpot-des-particuliers copy copy.jpg" 
                alt="Professional Canadian tax preparation with TAX wooden blocks, Canadian currency, and calculator representing expert CPA services"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Professional Excellence</h3>
                  <p className="text-gray-200">Dedicated to your business success</p>
                  
                  {/* Professional Credentials */}
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-200">CPA Ontario</span>
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