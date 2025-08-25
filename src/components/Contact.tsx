import React, { useState } from 'react';
import { Send, Mail, MapPin, Sparkles, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Use HubSpot's form submission endpoint (no CORS issues)
    const hubspotFormEndpoint = `https://forms.hsforms.com/submissions/v3/integration/submit/342359030/6c4d0711-4a4c-4bcc-8336-c314e195b12f`;
    
    // Get current page info for tracking
    const pageUri = window.location.href;
    const pageName = document.title;
    
    // Get HubSpot tracking cookie if it exists
    const getHubspotCookie = () => {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'hubspotutk') {
          return value;
        }
      }
      return null;
    };

    // Prepare the data exactly as HubSpot expects
    const submissionData = {
      fields: [
        {
          name: "firstname",
          value: formData.firstName
        },
        {
          name: "lastname", 
          value: formData.lastName
        },
        {
          name: "email",
          value: formData.email
        },
        {
          name: "phone",
          value: `${formData.countryCode} ${formData.phone}`.trim()
        },
        {
          name: "company",
          value: formData.company
        },
        {
          name: "message",
          value: formData.message
        }
      ],
      context: {
        pageUri: pageUri,
        pageName: pageName,
        hutk: getHubspotCookie()
      }
    };

    try {
      const response = await fetch(hubspotFormEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        console.log('HubSpot form submitted successfully');
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          countryCode: '+1',
          company: '',
          message: ''
        });
        
        // Hide success message after 10 seconds
        setTimeout(() => setSubmitStatus('idle'), 10000);
        
      } else {
        const errorData = await response.text();
        console.error('HubSpot submission failed:', errorData);
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 8000);
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.04),transparent_50%),radial-gradient(circle_at_60%_60%,rgba(16,185,129,0.03),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/6 to-cyan-400/4 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-indigo-400/5 to-emerald-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600">
            We'll reply within 1 business day.
          </p>
          
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-2xl shadow-lg animate-fade-in">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Thank You! 🎉</h3>
              <p className="text-green-700 font-medium mb-3">
                Your message has been successfully submitted to HubSpot!
              </p>
              <p className="text-sm text-green-600">
                We'll reply within 1 business day.
              </p>
            </div>
          )}
          
          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl animate-fade-in">
              <h3 className="text-lg font-bold text-red-800 mb-2">Submission Error</h3>
              <p className="text-red-700 mb-2">
                There was an issue submitting your form. Please contact us directly:
              </p>
              <div className="text-sm text-red-600">
                <p>📧 <strong>Email:</strong> <a href="mailto:info@kemptcpa.ca" className="underline">info@kemptcpa.ca</a></p>
                <p>📞 <strong>Phone:</strong> <a href="tel:+15197717862" className="underline">+1 519 771 7862</a></p>
              </div>
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
          
        {/* Contact Form - Matching HubSpot Fields */}
        <form onSubmit={handleSubmit} className="relative grid gap-6 bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-teal-50/20 to-indigo-50/30 rounded-3xl pointer-events-none"></div>
          
          {/* Name Fields - Split to match HubSpot */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="relative block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
              <input 
                required 
                name="firstName" 
                value={formData.firstName}
                onChange={handleChange}
                disabled={isSubmitting}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="relative block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
              <input 
                required 
                name="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                disabled={isSubmitting}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50"
                placeholder="Last name"
              />
            </div>
          </div>
          
          {/* Email */}
          <div>
            <label className="relative block text-sm font-semibold text-slate-700 mb-2">Email *</label>
            <input 
              required 
              name="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>
          
          {/* Phone Number with Country Code */}
          <div>
            <label className="relative block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
            <div className="flex gap-2">
              <select 
                name="countryCode" 
                value={formData.countryCode}
                onChange={handleChange}
                disabled={isSubmitting}
                className="relative rounded-xl border-2 border-slate-200 px-3 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 text-sm disabled:opacity-50"
              >
                <option value="+1">🇨🇦 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+86">🇨🇳 +86</option>
                <option value="+81">🇯🇵 +81</option>
              </select>
              <input 
                name="phone" 
                type="tel" 
                placeholder="519-771-7862"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="relative flex-1 rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50"
              />
            </div>
          </div>
          
          {/* Company */}
          <div>
            <label className="relative block text-sm font-semibold text-slate-700 mb-2">Company</label>
            <input 
              name="company" 
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
              className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50"
              placeholder="Your company name"
            />
          </div>
          
          {/* Message */}
          <div>
            <label className="relative block text-sm font-semibold text-slate-700 mb-2">Message</label>
            <textarea 
              name="message" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 resize-none disabled:opacity-50"
              placeholder="Tell us about your accounting needs, current software (QBO/Xero/Sage 50), or any questions you have..."
            />
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="relative group rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting to HubSpot...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  ✨ Send Message
                </>
              )}
            </span>
          </button>
          
          {/* HubSpot Integration Notice */}
          <div className="relative text-center">
            <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
              🔒 Secure direct submission to HubSpot • 
              <span className="text-blue-600 font-medium">Portal: 342359030</span>
            </p>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-12 grid md:grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-dashed border-orange-200 hover:border-orange-300 transition-colors">
            <Mail className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="font-bold text-slate-800 mb-2">Direct Contact</h3>
            <p className="text-slate-600 mb-3">
              Have a quick question? Reach out directly:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-600" />
                <a href="tel:+15197717862" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">+1 519 771 7862</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-600" />
                <a href="mailto:info@kemptcpa.ca" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  info@kemptcpa.ca
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span className="text-slate-600">Brantford, Canada</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-slate-500">
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Professional CPA services for your business success
          </p>
        </div>
      </div>
    </section>
  );
}
