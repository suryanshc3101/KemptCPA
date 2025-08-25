import React, { useState } from 'react';
import { Send, Calendar, Mail, MapPin, Sparkles, Phone } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // HubSpot Forms API configuration
    const hubspotPortalId = '342359030';
    const hubspotFormId = '6c4d0711-4a4c-4bcc-8336-c314e195b12f';
    const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`;
    
    // Helper function to get HubSpot tracking cookie
    const getHubSpotCookie = (): string | null => {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'hubspotutk') {
          return value;
        }
      }
      return null;
    };

    // Split name into first and last name
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || firstName; // Use first name as last name if only one name provided

    // Prepare form data for HubSpot - matching your form fields
    const hubspotData = {
      fields: [
        {
          name: "firstname",
          value: firstName
        },
        {
          name: "lastname", 
          value: lastName
        },
        {
          name: "email",
          value: formData.email
        },
        {
          name: "phone",
          value: `${formData.countryCode}${formData.phone}`.replace(/\s+/g, '') // Remove spaces
        },
        {
          name: "company",
          value: formData.business || 'Not specified'
        },
        {
          name: "message", // Make sure this field exists in your HubSpot form
          value: `Current Software: ${formData.software || 'Not specified'}\n\nMessage: ${formData.message}`
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
        hutk: getHubSpotCookie(), // HubSpot user token for tracking
        ipAddress: '', // HubSpot will auto-detect
        timestamp: Date.now()
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow KemptCPA to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999, // Default subscription
              text: "I agree to receive marketing communications from KemptCPA."
            }
          ]
        }
      }
    };

    try {
      const response = await fetch(hubspotEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hubspotData)
      });

      const result = await response.json();

      if (response.ok) {
        console.log('HubSpot submission successful:', result);
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
        
        // Reset success message after 10 seconds
        setTimeout(() => setSubmitStatus('idle'), 10000);
      } else {
        console.error('HubSpot submission failed:', result);
        throw new Error(`HubSpot API Error: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 8 seconds
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
            Contact / Book 30 Minutes
          </h2>
          <p className="text-xl text-slate-600">
            We'll reply within 1 business day.
          </p>
          
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Thank You! 🎉</h3>
              <p className="text-green-700 font-medium mb-3">
                Your message has been sent successfully to our HubSpot system.
              </p>
              <p className="text-sm text-green-600">
                We'll reply within 1 business day. Want to talk sooner? Book a call below!
              </p>
            </div>
          )}
          
          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
              <h3 className="text-lg font-bold text-red-800 mb-2">Oops! Something went wrong 😔</h3>
              <p className="text-red-700 mb-2">
                There was an issue submitting your form. Please try again or contact us directly.
              </p>
              <div className="text-sm text-red-600">
                <p>📧 <strong>Email:</strong> info@kemptcpa.ca</p>
                <p>📞 <strong>Phone:</strong> +1 519 771 7862</p>
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
          
        {/* Your Original Form Design - Now Connected to HubSpot */}
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
                disabled={isSubmitting}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your full name"
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
                disabled={isSubmitting}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your@email.com"
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
                onChange={handleChange}
                disabled={isSubmitting}
                className="relative rounded-xl border-2 border-slate-200 px-3 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 text-sm disabled:opacity-50"
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
                placeholder="519-771-7862"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="relative flex-1 rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50"
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
                disabled={isSubmitting}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="relative block text-sm font-semibold text-slate-700 mb-2">Current Software</label>
              <input 
                name="software" 
                placeholder="QBO / Xero / Sage 50 / Other" 
                value={formData.software}
                onChange={handleChange}
                disabled={isSubmitting}
                className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 disabled:opacity-50"
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
              disabled={isSubmitting}
              className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 resize-none disabled:opacity-50"
              placeholder="Tell us about your accounting needs..."
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
                  Sending to HubSpot...
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
              🔒 Secure submission via HubSpot • 
              <span className="text-blue-600 font-medium">Protected & Encrypted</span>
            </p>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 hover:border-blue-300 transition-colors">
            <Calendar className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-slate-800 mb-2">30-Minute Discovery Call</h3>
            <p className="text-slate-600 mb-3">
              Schedule your complimentary discovery call to discuss your needs:
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
                <Phone className="w-4 h-4 text-orange-600" />
                <span className="text-orange-600 font-semibold">+1 519 771 7862</span>
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
            Schedule your free consultation: 
            We're here to help your business succeed
          </p>
        </div>
      </div>
    </section>
  );
}
