import React, { useState } from 'react';
import { Send, Calendar, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    business: '',
    software: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission - Replace with actual form service
    // Example: Formspree, Netlify Forms, or your own backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        business: '',
        software: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const countryCodes = [
    { code: '+1', country: 'Canada/US', flag: '🇨🇦' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
  ];

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
          
          {/* Form Service Integration Notice */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-sm text-green-800 font-medium">
                ✅ <strong>Message sent successfully!</strong> We'll reply within 1 business day.
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-800">
                ❌ <strong>Error sending message.</strong> Please try again or email us directly at info@kemptcpa.ca
              </p>
            </div>
          )}
        </div>

        <div className="relative mb-8">
          <img 
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Professional business consultation meeting with CPA discussing financial statements and tax planning"
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 rounded-2xl"></div>
          <div className="absolute bottom-4 left-6">
            <p className="text-white font-bold text-lg">Ready to discuss your accounting needs?</p>
            <p className="text-white text-sm font-medium">Schedule your free 30-minute consultation today</p>
          </div>
        </div>
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-teal-50/20 to-indigo-50/30 rounded-3xl pointer-events-none"></div>
          
        <form onSubmit={handleSubmit} className="relative grid gap-6 bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
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
          
          {/* Phone Number with Country Code */}
          <div>
            <label className="relative block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
            <div className="flex gap-2">
              <select 
                name="countryCode" 
                value={formData.countryCode}
                onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                className="relative rounded-xl border-2 border-slate-200 px-3 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 text-sm"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
              <input 
                name="phone" 
                type="tel" 
                placeholder="555-123-4567"
                value={formData.phone}
                onChange={handleChange}
                className="relative flex-1 rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300"
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
              Schedule your free consultation: 
              We're here to help your business succeed
            </p>
            
            {/* Production Note */}
            <div className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>📋 For Production:</strong> Connect this form with Formspree, Netlify Forms, or EmailJS to receive submissions directly.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}