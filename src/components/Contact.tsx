import React, { useState } from 'react';
import { Send, Calendar, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    software: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your backend or form service
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Professional background texture */}
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.08),transparent_60deg,rgba(16,185,129,0.06),transparent_120deg,rgba(59,130,246,0.08),transparent)] bg-[size:150px_150px]"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/12 to-teal-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-emerald-400/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Contact / Book 30 Minutes
          </h2>
          <p className="text-xl text-slate-600">
            We'll reply within 1 business day.
          </p>
        </div>

        <div className="relative mb-8">
          <img 
            src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Professional consultation meeting"
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-6">
            <p className="text-white font-semibold">Ready to discuss your accounting needs?</p>
            <p className="text-white/80 text-sm">Schedule your free 30-minute consultation today</p>
          </div>
        </div>
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-teal-50/20 to-indigo-50/30 rounded-3xl pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="relative block text-sm font-semibold text-slate-700 mb-2">Name *</label>
              <input 
                required 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300"
              />
            </div>
            <div>
              <label className="relative block text-sm font-semibold text-slate-700 mb-2">Email *</label>
              <input 
                required 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="relative block text-sm font-semibold text-slate-700 mb-2">Business Name</label>
              <input 
                name="business" 
                value={formData.business}
                onChange={handleChange}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300"
              />
            </div>
            <div>
              <label className="relative block text-sm font-semibold text-slate-700 mb-2">Current Software</label>
              <input 
                name="software" 
                placeholder="QBO / Xero / Other" 
                value={formData.software}
                onChange={handleChange}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300"
              />
            </div>
          </div>
          <div>
            <label className="relative block text-sm font-semibold text-slate-700 mb-2">Message</label>
            <textarea 
              name="message" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 resize-none"
            />
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="relative group rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </span>
          </button>
        </form>

        <form onSubmit={handleSubmit} className="relative grid gap-6 bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 hover:border-blue-300 transition-colors">
            <Calendar className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-slate-800 mb-2">Book Direct</h3>
            <p className="text-slate-600 mb-3">
              Skip the form and schedule your free consultation:
            </p>
            <a 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group" 
              href="https://calendly.com/kemptcpa/30min" 
              target="_blank" 
              rel="noreferrer"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              calendly.com/kemptcpa/30min
            </a>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-dashed border-orange-200 hover:border-orange-300 transition-colors">
            <Mail className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="font-bold text-slate-800 mb-2">Direct Contact</h3>
            <p className="text-slate-600 mb-3">
              Have a quick question? Reach out directly:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-600" />
                <a href="mailto:info@kemptcpa.ca" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  info@kemptcpa.ca
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span className="text-slate-600">Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-slate-500">
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Schedule your free consultation: {' '}
            We're here to help your business succeed
          </p>
        </div>
      </div>
    </section>
  );
}