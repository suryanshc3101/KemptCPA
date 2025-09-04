import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="/dLgjCDsV_XRM_LOGO_BG_png.png" 
              alt="Kempt CPA Logo" 
             className="w-36 h-36 object-contain"
            />
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-blue-900">
                Kempt CPA
              </div>
              <div className="text-sm text-gray-600 mt-1">
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
          <div className="hidden lg:flex items-center space-x-6">
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
          <div className="md:hidden">
            <a href="#contact" className="btn-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}