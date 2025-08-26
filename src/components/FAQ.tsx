import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "What accounting software do you work with?",
    answer: "We specialize in QuickBooks Online and Desktop, Xero, and Sage 50. We can help with setup, training, data migration, and ongoing maintenance of these platforms. Our expertise ensures you get the most out of your accounting software while maintaining accurate financial records."
  },
  {
    question: "Do you provide services to clients outside of Brantford?",
    answer: "Yes! While we're based in Brantford, Ontario, we serve clients across Canada remotely. Our cloud-based approach using modern technology allows us to provide the same high-quality CPA services regardless of your location. We use secure portals for document sharing and video conferencing for meetings."
  },
  {
    question: "What's included in your bookkeeping services?",
    answer: "Our bookkeeping services include daily transaction recording, bank reconciliations, accounts payable/receivable management, financial statement preparation, payroll processing, and monthly reporting. We also provide cleanup services for businesses with backlogged books and can help implement better financial processes."
  },
  {
    question: "How do you handle CRA audits and disputes?",
    answer: "As your CPA, we provide professional representation throughout the entire CRA audit process. This includes responding to initial notices, gathering required documentation, communicating with CRA auditors on your behalf, negotiating settlements, and filing objections when necessary. We protect your interests while working toward favorable resolutions."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We work with sole proprietors, partnerships, corporations, and non-profit organizations across various industries including retail, professional services, construction, technology, healthcare, and more. Our services are scalable from startup companies to established businesses with complex financial needs."
  },
  {
    question: "What are your fees for tax preparation?",
    answer: "Our fees vary based on the complexity of your situation. Personal tax returns (T1) start at competitive rates, while corporate returns (T2) are priced based on the size and complexity of your business. We provide transparent quotes upfront with no hidden fees. Contact us for a personalized quote."
  },
  {
    question: "How long does it take to get my tax return completed?",
    answer: "For personal tax returns, we typically complete them within 3-5 business days during regular season and 1-2 weeks during peak tax season (March-April). Corporate returns usually take 1-2 weeks depending on complexity. Rush services are available when needed."
  },
  {
    question: "Can you help with GST/HST registration and filing?",
    answer: "Absolutely! We handle GST/HST registration, determine the best filing frequency for your business (monthly, quarterly, or annually), prepare and file returns, optimize input tax credits, and ensure compliance across all provinces where you operate. We also assist with voluntary disclosures if needed."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-indigo-50/30 via-blue-50/20 to-slate-50/40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.04),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.03),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/8 to-cyan-400/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-400/6 to-indigo-400/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Common questions about our Canadian CPA services, pricing, and processes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-blue-500" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <div className="px-6">
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <Sparkles className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Still have questions?</h3>
            <p className="text-slate-600 mb-4">
              Contact us for personalized answers about your specific accounting needs.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}