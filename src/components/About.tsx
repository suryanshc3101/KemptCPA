import React from 'react';
import { Shield, TrendingUp, Sparkles, Users, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            About Kempt CPA Professional Corporation
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Your trusted partner for comprehensive accounting and tax services across Canada. 
            We combine traditional CPA expertise with modern technology to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Kempt CPA?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">CRA Compliant</h4>
                  <p className="text-slate-600">Fully licensed CPA Ontario ensuring all work meets regulatory standards.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Growth Focused</h4>
                  <p className="text-slate-600">Strategic advisory services to help your business thrive and expand.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Tech-Enabled</h4>
                  <p className="text-slate-600">Modern tools and software integration for efficient service delivery.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-xl">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Professional Credentials</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700">Chartered Professional Accountant (CPA)</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-teal-600" />
                <span className="text-slate-700">Member of CPA Ontario</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-600" />
                <span className="text-slate-700">15+ Years Experience</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h5 className="font-semibold text-slate-900 mb-3">Software Expertise</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">
                  QuickBooks
                </span>
                <span className="px-3 py-1 bg-gray-100 text-slate-700 rounded-lg text-sm">
                  Xero
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-lg text-sm">
                  Sage 50
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}