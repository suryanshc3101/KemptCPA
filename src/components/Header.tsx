import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 lg:py-6">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/dLgjCDsV_XRM_LOGO_BG_png.png" 
              alt="Kempt CPA Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
            />
            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">
                Kempt CPA
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-0 sm:mt-1 hidden sm:block">
                Keeping your finances neat, precise and stress free
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4 lg:space-x-6">
            <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <a href="tel:+15197717862" className="hover:text-blue-900 min-h-[44px] flex items-center">
                +1 519 771 7862
              </a>
            </div>
            <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@kemptcpa.ca" className="hover:text-blue-900 min-h-[44px] flex items-center">
                info@kemptcpa.ca
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <a href="#contact" className="bg-blue-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors text-xs sm:text-sm min-h-[44px] flex items-center">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}