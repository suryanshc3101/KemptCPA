import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Calendar } from 'lucide-react';

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
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            Ready to discuss your accounting needs? Fill the form.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="professional-card text-center">
              <Phone className="w-8 h-8 text-blue-900 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+15197717862" className="text-blue-900 hover:text-blue-700 font-medium">
                +1 519 771 7862
              </a>
            </div>

            <div className="professional-card text-center">
              <Mail className="w-8 h-8 text-blue-900 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@kemptcpa.ca" className="text-blue-900 hover:text-blue-700 font-medium">
                info@kemptcpa.ca
              </a>
            </div>

            <div className="professional-card text-center">
              <MapPin className="w-8 h-8 text-blue-900 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-professional">Brant County and surrounding areas</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="professional-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Thank You!</h4>
                  <p className="text-green-700 text-sm">
                    Your message has been successfully submitted. We'll reply within 1 business day.
                  </p>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Submission Error</h4>
                  <p className="text-red-700 text-sm mb-2">
                    There was an issue submitting your form. Please contact us directly:
                  </p>
                  <p className="text-red-600 text-sm">
                    Email: <a href="mailto:info@kemptcpa.ca" className="underline">info@kemptcpa.ca</a> | 
                    Phone: <a href="tel:+15197717862" className="underline">+1 519 771 7862</a>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      id="firstName"
                      name="firstName" 
                      type="text"
                      required 
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      id="lastName"
                      name="lastName" 
                      type="text"
                      required 
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    id="email"
                    name="email" 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
                
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-3">
                    <select 
                      name="countryCode" 
                      value={formData.countryCode}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    >
                      <option value="+1">🇨🇦 +1</option>
                    </select>
                    <input 
                      id="phone"
                      name="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                      placeholder=""
                    />
                  </div>
                </div>
                
                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input 
                    id="company"
                    name="company" 
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    placeholder="Your company name"
                  />
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none disabled:opacity-50"
                    placeholder="Tell us about your accounting needs, current software, or any questions you have..."
                  />
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}