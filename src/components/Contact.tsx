import React, { useState, useEffect } from 'react';
import { Send, Calendar, Mail, MapPin, Sparkles, Phone } from 'lucide-react';

// Declare HubSpot types
declare global {
  interface Window {
    hbspt: any;
  }
}

export default function Contact() {
  const [isHubSpotLoaded, setIsHubSpotLoaded] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(true);

  // Fallback form state for when HubSpot fails
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    business: '',
    software: '',
    message: ''
  });

  useEffect(() => {
    // Load HubSpot script from your specific region
    const script = document.createElement('script');
    script.src = '//js-na3.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      setIsHubSpotLoaded(true);
      // Initialize HubSpot form once script is loaded
      if (window.hbspt) {
        try {
          window.hbspt.forms.create({
            region: "na3",
            portalId: "342359030",
            formId: "6c4d0711-4a4c-4bcc-8336-c314e195b12f",
            target: '#hubspot-form-container',
            css: '', // We'll style it with Tailwind
            onFormReady: function(form: any) {
              console.log('HubSpot form is ready');
              setShowCustomForm(false); // Hide custom form when HubSpot loads
              
              // Style the HubSpot form to match your design
              const formElement = form[0];
              if (formElement) {
                // Hide HubSpot form initially and show it with your styling
                formElement.style.maxWidth = '100%';
                
                // Style form groups
                const fieldGroups = formElement.querySelectorAll('.hs-form-field, .hs_firstname, .hs_lastname, .hs_email, .hs_phone, .hs_company, .hs_message');
                fieldGroups.forEach((group: HTMLElement, index: number) => {
                  group.style.marginBottom = '1.5rem';
                  group.style.width = '100%';
                  
                  // Animate form fields
                  group.style.opacity = '0';
                  group.style.transform = 'translateY(20px)';
                  setTimeout(() => {
                    group.style.transition = 'all 0.5s ease';
                    group.style.opacity = '1';
                    group.style.transform = 'translateY(0)';
                  }, index * 100);
                });
                
                // Style labels
                const labels = formElement.querySelectorAll('label');
                labels.forEach((label: HTMLElement) => {
                  label.className = 'block text-sm font-semibold text-slate-700 mb-2';
                });
                
                // Style inputs, textareas, and selects
                const inputs = formElement.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea, select');
                inputs.forEach((input: HTMLElement) => {
                  input.className = 'w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 text-slate-900';
                  (input as HTMLInputElement).style.fontSize = '16px'; // Prevent zoom on mobile
                });
                
                // Style the submit button to match your design exactly
                const submitButton = formElement.querySelector('input[type="submit"]');
                if (submitButton) {
                  submitButton.className = 'w-full rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer mt-4';
                  (submitButton as HTMLInputElement).value = '✨ Send Message';
                }
                
                // Style error messages
                const errorMessages = formElement.querySelectorAll('.hs-error-msg');
                errorMessages.forEach((error: HTMLElement) => {
                  error.style.color = '#dc2626';
                  error.style.fontSize = '14px';
                  error.style.marginTop = '4px';
                });

                // Create a two-column layout for name fields if they exist
                const firstNameField = formElement.querySelector('.hs_firstname');
                const lastNameField = formElement.querySelector('.hs_lastname');
                if (firstNameField && lastNameField) {
                  const nameContainer = document.createElement('div');
                  nameContainer.className = 'grid md:grid-cols-2 gap-4 mb-6';
                  
                  firstNameField.parentNode?.insertBefore(nameContainer, firstNameField);
                  nameContainer.appendChild(firstNameField);
                  nameContainer.appendChild(lastNameField);
                }
              }
            },
            onFormSubmit: function() {
              console.log('Form is being submitted to HubSpot');
              // Show loading state
              const submitButton = document.querySelector('#hubspot-form-container input[type="submit"]') as HTMLInputElement;
              if (submitButton) {
                submitButton.value = 'Sending...';
                submitButton.disabled = true;
              }
            },
            onFormSubmitted: function() {
              console.log('Form successfully submitted to HubSpot');
              setIsFormSubmitted(true);
              // Show success message
              const successDiv = document.getElementById('hubspot-success-message');
              if (successDiv) {
                successDiv.style.display = 'block';
                successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              // Hide the form
              const formContainer = document.getElementById('hubspot-form-container');
              if (formContainer) {
                formContainer.style.display = 'none';
              }
            },
            onFormError: function(error: any) {
              console.error('Form submission error:', error);
              // Reset submit button
              const submitButton = document.querySelector('#hubspot-form-container input[type="submit"]') as HTMLInputElement;
              if (submitButton) {
                submitButton.value = '✨ Send Message';
                submitButton.disabled = false;
              }
            }
          });
        } catch (error) {
          console.error('HubSpot form creation error:', error);
          setShowCustomForm(true); // Show fallback form if HubSpot fails
        }
      }
    };
    
    script.onerror = () => {
      console.error('Failed to load HubSpot script');
      setShowCustomForm(true); // Show fallback form if script fails to load
    };
    
    // Add script only if it doesn't already exist
    const existingScript = document.querySelector('script[src="//js-na3.hsforms.net/forms/embed/v2.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
    } else {
      setIsHubSpotLoaded(true);
      if (window.hbspt) {
        // Initialize form if script already exists
        setShowCustomForm(false);
      }
    }

    // Cleanup
    return () => {
      // Don't remove script on cleanup to avoid issues with navigation
    };
  }, []);

  // Fallback email submission for when HubSpot doesn't work
  const handleFallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with all form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phone}
Business: ${formData.business}
Current Software: ${formData.software}

Message:
${formData.message}

---
Sent from KemptCPA website contact form
    `.trim();
    
    const mailtoLink = `mailto:info@kemptcpa.ca?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you! Your email client will open with the message. Please send it to complete your inquiry.');
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

        {/* Form Container */}
        <div className="relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-teal-50/20 to-indigo-50/30 rounded-3xl pointer-events-none"></div>
          
          {/* Loading state */}
          {!isHubSpotLoaded && showCustomForm && (
            <div className="relative text-center py-12">
              <div className="w-8 h-8 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-600 font-medium">Loading contact form...</p>
            </div>
          )}
          
          {/* HubSpot Form */}
          <div id="hubspot-form-container" className="relative" style={{ minHeight: isHubSpotLoaded && !showCustomForm ? 'auto' : '0px', display: showCustomForm ? 'none' : 'block' }}></div>
          
          {/* Fallback Custom Form */}
          {showCustomForm && (
            <form onSubmit={handleFallbackSubmit} className="relative grid gap-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="relative block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                  <input 
                    required 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300"
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
                    className="relative w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all duration-300 bg-white hover:border-slate-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="relative block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select 
                    name="countryCode" 
                    value={formData.countryCode}
                    onChange={handleChange}
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
                    placeholder="519-771-7862"
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
                  placeholder="Tell us about your accounting needs..."
                />
              </div>
              <button 
                type="submit" 
                className="relative group rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  📧 Send via Email
                </span>
              </button>
              
              <div className="relative text-center">
                <p className="text-xs text-slate-500">
                  📧 This will open your email client to send the message
                </p>
              </div>
            </form>
          )}
          
          {/* Success Message */}
          <div id="hubspot-success-message" style={{display: 'none'}} className="relative text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You! 🎉</h3>
            <p className="text-lg text-slate-600 mb-4">
              Your message has been sent successfully to HubSpot.
            </p>
            <p className="text-sm text-slate-500">
              We'll reply within 1 business day.
            </p>
            <div className="mt-6">
              <a 
                href="https://calendly.com/kemptcpa/30min" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Your 30-Minute Call
              </a>
            </div>
          </div>
        </div>

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
