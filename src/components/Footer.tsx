import React from 'react';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-900 text-slate-200 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional footer background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.04),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/8 to-teal-600/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/6 to-emerald-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" itemProp="name" itemScope itemType="https://schema.org/Organization">
              Kempt CPA Professional Corporation
            </h3>
            <meta itemProp="alternateName" content="KemptCPA" />
            <meta itemProp="url" content="https://kemptcpa.ca" />
          </div>
          <p className="text-slate-300 leading-relaxed">
            Helping individuals and businesses stay compliant and grow with clean books, smart tax planning, and reliable support.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-200 rounded-full border border-blue-500/30">
              CPA Ontario
            </span>
            <span className="px-3 py-1 text-xs bg-teal-500/20 text-teal-200 rounded-full border border-teal-500/30">Brantford, Ontario</span>
          </div>
        </div>
        
        <div className="relative">
          <h4 className="font-bold text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" />
            Contact Information
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-slate-400" />
              <span>+1 519 771 7862</span>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-slate-400" />
              <a href="mailto:info@kemptcpa.ca" className="hover:text-blue-300 transition-colors">
                info@kemptcpa.ca
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Services in Brantford, Ontario</span>
            </li>
          </ul>
        </div>
        
        <div className="relative">
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#services" className="hover:text-blue-300 transition-colors flex items-center gap-2" title="Professional CPA Services">
                <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-300 transition-colors flex items-center gap-2" title="About Kempt CPA">
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-300 transition-colors flex items-center gap-2" title="Contact Canadian CPA">
                <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-300 transition-colors text-xs">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-300 transition-colors text-xs">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-slate-700/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2025 Kempt CPA Professional Corporation. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>Professional Canadian CPA services nationwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}