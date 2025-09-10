import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
           <h3 className="text-2xl font-bold mb-4">Kempt CPA</h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Professional Corporation providing comprehensive CPA services to individuals 
              and businesses in Canada. Services in Brant County and surrounding areas.
            </p>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-blue-800 text-blue-100 text-xs rounded-full">
                CPA Ontario
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Contact Information</h4>
              <div className="bg-white rounded-md p-1">
                <img 
                  src="/Chartered_Professional_Accountants_of_Ontario_CPA_Ontario_Announ (1).jpg" 
                  alt="CPA Ontario - Chartered Professional Accountants of Ontario" 
                  className="w-16 h-12 object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-300" />
                <a href="tel:+15197717862" className="text-blue-100 hover:text-white">
                  +1 519 771 7862
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-300" />
                <a href="mailto:info@kemptcpa.ca" className="text-blue-100 hover:text-white">
                  info@kemptcpa.ca
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-blue-100">
                  Brant County and surrounding areas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2025 Kempt CPA Professional Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}