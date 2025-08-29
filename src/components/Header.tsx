import React from 'react';
import { Sparkles, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="flex items-center gap-2 min-w-0" itemScope itemType="https://schema.org/Organization">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col min-w-0">
              <span itemProp="name" className="text-xl sm:text-2xl font-bold text-blue-800 cursor-default" title="Kempt CPA Professional Corporation">
                KemptCPA
              </span>
              <span className="text-xs text-slate-600 font-medium italic hidden sm:block">
                Keeping your finances neat, precise and stress free
              </span>
            </div>
            <meta itemProp="url" content="https://kemptcpa.ca" />
            <meta itemProp="alternateName" content="Kempt CPA Professional Corporation" />
            <meta itemProp="logo" content="https://kemptcpa.ca/logo.png" />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="hidden xl:flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
            <span className="text-sm font-bold text-blue-600">
              Professional CPA Services
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-600 flex-shrink-0">
            <a href="tel:+15197717862" className="flex items-center gap-1 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-medium">519-771-7862</span>
            </a>
            <a href="mailto:info@kemptcpa.ca" className="hidden lg:flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-medium">info@kemptcpa.ca</span>
            </a>
          </div>
          <a 
            href="#contact" 
            className="rounded-lg bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg flex-shrink-0"
          >
            <span>
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}