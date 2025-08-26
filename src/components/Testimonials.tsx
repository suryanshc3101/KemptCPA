import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Johnson Consulting Services",
    location: "Toronto, ON",
    text: "Kuldeep transformed our bookkeeping from chaos to clarity. The QuickBooks setup was seamless, and now we have real-time visibility into our finances. The monthly reports are exactly what we needed for better decision making.",
    rating: 5,
    service: "Bookkeeping & QuickBooks Setup"
  },
  {
    name: "Michael Chen",
    business: "Chen Manufacturing Ltd.",
    location: "Vancouver, BC",
    text: "Outstanding tax planning and CRA representation. When we faced an audit, Kuldeep handled everything professionally and achieved a favorable outcome. His knowledge of Canadian tax law is exceptional.",
    rating: 5,
    service: "Tax Planning & CRA Representation"
  },
  {
    name: "Amanda Rodriguez",
    business: "Rodriguez Design Studio",
    location: "Calgary, AB",
    text: "The GST/HST filing service is a game-changer for our multi-provincial business. Everything is handled efficiently, and we never miss deadlines. The input tax credit optimization saved us thousands.",
    rating: 5,
    service: "GST/HST Filing & Compliance"
  },
  {
    name: "David Thompson",
    business: "Thompson Family Business",
    location: "Ottawa, ON",
    text: "Kempt CPA's business advisory services helped us restructure our operations for better profitability. The financial forecasting and strategic advice were instrumental in our growth from $500K to $2M in revenue.",
    rating: 5,
    service: "Business Advisory & Financial Planning"
  },
  {
    name: "Lisa Park",
    business: "Park Medical Clinic",
    location: "Halifax, NS",
    text: "Professional, responsive, and knowledgeable. The Xero migration was handled perfectly, and the ongoing support gives us confidence in our financial reporting. Highly recommend their services.",
    rating: 5,
    service: "Accounting Software Migration & Support"
  },
  {
    name: "Robert Wilson",
    business: "Wilson Construction Inc.",
    location: "Winnipeg, MB",
    text: "The financial statement preparation service exceeded our expectations. Bank approval was smooth thanks to the professional presentation and accuracy of our statements. Great communication throughout the process.",
    rating: 5,
    service: "Financial Statement Preparation"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50/40 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.04),transparent_50%)]"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/8 to-cyan-400/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-400/6 to-emerald-400/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real feedback from Canadian businesses we've helped succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-cyan-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Quote icon */}
              <div className="relative mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="relative flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="relative text-slate-700 leading-relaxed mb-6 text-base font-medium">
                "{testimonial.text}"
              </blockquote>

              {/* Client info */}
              <div className="relative border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.business}</p>
                    <p className="text-xs text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-slate-600">CRA Compliant</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">5+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}