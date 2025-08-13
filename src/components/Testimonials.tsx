import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    quote: "Clear, fast, and reliable—my taxes were painless.",
    source: "Google Review",
    author: "Sarah M."
  },
  {
    rating: 5,
    quote: "Set up our books and filings right. Huge time saver.",
    source: "Google Review", 
    author: "Mike T."
  },
  {
    rating: 5,
    quote: "Proactive advice that helped us manage cash flow.",
    source: "Google Review",
    author: "Jennifer L."
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50/40 to-blue-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.20)_1px,transparent_0),radial-gradient(circle_at_20px_20px,rgba(16,185,129,0.15)_1px,transparent_0)] bg-[size:40px_40px,60px_60px]"></div>
        
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-r from-teal-400/15 to-emerald-400/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-indigo-400/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            What clients say
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by Canadian individuals and businesses across the country
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote 
              key={index}
              className="group relative rounded-3xl p-8 bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-500" />
              </div>
              
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="relative text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                "{testimonial.quote}"
              </p>
              
              <footer className="relative">
                <p className="font-semibold text-slate-800 mb-1">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.source}</p>
              </footer>
              
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}