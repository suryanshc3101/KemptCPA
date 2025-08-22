import React from 'react';
import { Phone, BookOpen, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: Phone,
    color: 'from-cyan-500 to-blue-500',
    title: "Book a call",
    description: "Share your financial needs and goals with us."
  },
  {
    number: "2",
    icon: BookOpen,
    color: 'from-orange-500 to-amber-500',
    title: "Assessment & Planning",
    description: "We analyze your situation and create a tailored approach."
  },
  {
    number: "3",
    icon: HeartHandshake,
    color: 'from-emerald-500 to-teal-500',
    title: "Ongoing Partnership",
    description: "Regular support, clear communication, and proactive advice."
  }
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/10 to-indigo-100/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-100/8 to-blue-100/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-cyan-800 bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, transparent process to get your business on track
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl p-8 border-2 border-slate-200 hover:border-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 text-center"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Step number with icon overlay - Fixed alignment */}
              <div className={`relative mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {step.number}
                <div className="absolute inset-0 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white/80" />
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                {step.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                {step.description}
              </p>
              
              {/* Connection arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}