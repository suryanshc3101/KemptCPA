import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Kempt CPA</h3>
            <p className="text-blue-100 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Professional Corporation providing comprehensive CPA services to individuals 
              and businesses in Canada. Services in Brant County and surrounding areas.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="px-2 sm:px-3 py-1 bg-blue-800 text-blue-100 text-xs sm:text-sm rounded-full">
                CPA Ontario
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] inline-flex items-center">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] inline-flex items-center">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] inline-flex items-center">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] inline-flex items-center">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Information</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 text-blue-300" />
                <a href="tel:+15197717862" className="text-blue-100 hover:text-white text-sm sm:text-base min-h-[44px] flex items-center">
                  +1 519 771 7862
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 text-blue-300" />
                <a href="mailto:info@kemptcpa.ca" className="text-blue-100 hover:text-white text-sm sm:text-base min-h-[44px] flex items-center">
                  info@kemptcpa.ca
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-blue-100 text-sm sm:text-base">
                  Brant County and surrounding areas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-blue-100 text-xs sm:text-sm">
            © 2025 Kempt CPA Professional Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}