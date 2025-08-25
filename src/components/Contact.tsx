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

  useEffect(() => {
    // Load HubSpot script from your specific region
    const script = document.createElement('script');
    script.src = '//js-na3.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      setIsHubSpotLoaded(true);
      // Initialize HubSpot form once script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na3", // Your HubSpot region
          portalId: "342359030", // Your HubSpot Portal ID
          formId: "6c4d0711-4a4c-4bcc-8336-c314e195b12f", // Your HubSpot Form ID
          target: '#hubspot-form-container',
          css: '', // We'll style it with Tailwind
          onFormReady: function(form: any) {
            console.log('HubSpot form is ready');
            // Customize form styling after it loads
            const formElement = form[0];
            if (formElement) {
              // Style the form container
              formElement.style.maxWidth = '100%';
              
              // Add Tailwind classes to HubSpot form elements
              const fieldsets = formElement.querySelectorAll('.hs_firstname, .hs_lastname, .hs_email, .hs_phone, .hs_company, .hs_message');
              fieldsets.forEach((fieldset: HTMLElement) => {
                fieldset.style.marginBottom = '1rem';
                fieldset.style.width = '100%';
              });
              
              const inputs = formElement.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea, select');
              inputs.forEach((input: HTMLElement) => {
                input.className = 'w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white hover:border-slate-300 text-slate-900';
                input.style.fontSize = '16px'; // Prevent zoom on mobile
              });
              
              const labels = formElement.querySelectorAll('label');
              labels.forEach((label: HTMLElement) => {
                label.className = 'block text-sm font-semibold text-slate-700 mb-2';
              });
              
              // Style the submit button with your design
              const submitButton = formElement.querySelector('input[type="submit"]');
              if (submitButton) {
                submitButton.className = 'group relative rounded-xl bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer w-full';
                submitButton.value = '✨ Send Message';
              }
              
              // Hide HubSpot branding if needed (optional)
              const branding = formElement.querySelector('.hs-form-booleancheckbox-display');
              if (branding) {
                branding.style.display = 'none';
              }
              
              // Style error messages
              const errorMessages = formElement.querySelectorAll('.hs-error-msg');
              errorMessages.forEach((error: HTMLElement) => {
                error.style.color = '#dc2626';
                error.style.fontSize = '14px';
                error.style.marginTop = '4px';
              });
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
            }
            // Hide the form
            const formContainer = document.getElementById('hubspot-form-container');
            if (formContainer) {
              formContainer.style.display = 'none';
            }
          },
          onFormError: function() {
            console.error('Form submission error');
            // Reset submit button
            const submitButton = document.querySelector('#hubspot-form-container input[type="submit"]') as HTMLInputElement;
            if (submitButton) {
              submitButton.value = '✨ Send Message';
              submitButton.disabled = false;
            }
          }
        });
      }
    };
    
    // Add script only if it doesn't already exist
    const existingScript = document.querySelector('script[src="//js-na3.hsforms.net/forms/embed/v2.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
    } else {
      // If script already exists, initialize form directly
      setIsHubSpotLoaded(true);
      if (window.hbspt) {
        // Form initialization code here (same as above)
      }
    }

    // Cleanup
    return () => {
      // Don't remove script on cleanup to avoid issues with navigation
    };
  }, []);

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

        {/* HubSpot Form Container */}
        <div className="relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-teal-50/20 to-indigo-50/30 rounded-3xl pointer-events-none"></div>
          
          {/* Loading state */}
          {!isHubSpotLoaded && (
            <div className="relative text-center py-12">
              <div className="w-8 h-8 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-600 font-medium">Loading contact form...</p>
            </div>
          )}
          
          {/* HubSpot Form */}
          <div id="hubspot-form-container" className="relative" style={{ minHeight: isHubSpotLoaded ? 'auto' : '400px' }}></div>
          
          {/* Success Message */}
          <div id="hubspot-success-message" style={{display: 'none'}} className="relative text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
            <p className="text-lg text-slate-600 mb-4">
              Your message has been sent successfully.
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
