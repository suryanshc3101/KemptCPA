import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 min-h-[60px] sm:min-h-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 min-h-[60px] sm:min-h-[80px]">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/dLgjCDsV_XRM_LOGO_BG_png.png" 
              alt="Kempt CPA Logo" 
              className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 leading-tight">
                Kempt CPA
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 leading-tight hidden xs:block">
                Keeping your finances neat, precise and stress free
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <a href="tel:+15197717862" className="hover:text-blue-900">
                +1 519 771 7862
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@kemptcpa.ca" className="hover:text-blue-900">
                info@kemptcpa.ca
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0 ml-2">
            <a href="#contact" className="btn-primary text-sm px-3 py-2 min-h-[36px] flex items-center">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}