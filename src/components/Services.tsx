@tailwind base;
@tailwind components;
@tailwind utilities;

/* Professional Typography - Inter Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Base Styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background-color: #ffffff;
}

/* Professional Color Scheme */
:root {
  --primary-navy: #1e3a8a;
  --secondary-navy: #1e40af;
  --light-gray: #f8fafc;
  --medium-gray: #64748b;
  --dark-gray: #334155;
}

/* Remove all animations - Professional static design */
*, *::before, *::after {
  animation: none !important;
  transition: none !important;
}

/* Add back only professional hover transitions */
.professional-hover {
  transition: all 0.2s ease !important;
}

.professional-hover:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.1);
}

/* Feature Card Hover Expansion */
.feature-card {
  transition: all 0.3s ease !important;
  overflow: hidden;
}

.feature-card .expanded-content {
  max-height: 0;
  opacity: 0;
  transition: all 0.3s ease !important;
  overflow: hidden;
}

.feature-card:hover .expanded-content {
  max-height: 200px;
  opacity: 1;
  margin-top: 1rem;
}

.feature-card:hover {
  background-color: #f8fafc;
  border-color: #1e40af;
}

/* Professional Button Styles */
.btn-primary {
  background-color: var(--primary-navy);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 600;
  border: none;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: background-color 0.2s ease !important;
}

.btn-primary:hover {
  background-color: var(--secondary-navy);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-navy);
  padding: 0.75rem 2rem;
  border: 2px solid var(--primary-navy);
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.2s ease !important;
}

.btn-secondary:hover {
  background: var(--primary-navy);
  color: white;
}

/* Professional Card Styles */
.professional-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.professional-card:hover {
  border-color: var(--secondary-navy);
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.1);
}

/* Navigation Styles */
.nav-link {
  color: var(--dark-gray);
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease !important;
}

.nav-link:hover {
  color: var(--primary-navy);
  background-color: var(--light-gray);
}

/* Section Spacing */
.section-padding {
  padding: 4rem 1rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding: 6rem 2rem;
  }
}

/* Professional Typography Classes */
.heading-primary {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1e293b;
}

.heading-secondary {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
  color: #1e293b;
}

.text-professional {
  color: var(--medium-gray);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .heading-primary {
    font-size: 2rem;
  }
  
  .heading-secondary {
    font-size: 1.75rem;
  }
}

/* Professional Hero Background */
.hero-background {
  background-image: linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 64, 175, 0.9)), url('/file-20240619-22-k6efwb copy copy.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .hero-background {
    background-attachment: scroll;
  }
}

.service-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--primary-navy);
  margin-bottom: 1rem;
}

.service-description {
  color: var(--medium-gray);
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1.1rem;
}

.service-features {
  margin-bottom: 2rem;
}

.service-features h4 {
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.service-features ul {
  list-style: none;
  padding: 0;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
}

.service-features li::before {
  content: "•";
  color: var(--secondary-navy);
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0.1rem;
}

.service-benefits {
  background-color: var(--light-gray);
  padding: 2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
}

.service-benefits h4 {
  font-weight: 600;
  color: var(--primary-navy);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.service-benefits ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
}

@media (min-width: 768px) {
  .service-benefits ul {
    grid-template-columns: 1fr 1fr;
  }
}

.service-benefits li {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background: white;
  border-radius: 0.375rem;
  border-left: 4px solid var(--secondary-navy);
}

.service-benefits li::before {
  content: "✓";
  color: var(--secondary-navy);
  font-weight: bold;
  margin-right: 0.75rem;
  margin-top: 0.1rem;
}

/* Professional About Background */
.about-background {
  background-image: linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/Wordpress-Promesses-de-baisses-dimpot-des-particuliers copy copy.jpg');
  background-size: cover;
  background-position: center;
}

/* Mobile Responsiveness Enhancements */
@media (max-width: 640px) {
  /* Typography adjustments for mobile */
  .heading-primary {
    font-size: 1.875rem;
    line-height: 1.3;
  }
  
  .heading-secondary {
    font-size: 1.5rem;
    line-height: 1.3;
  }
  
  /* Mobile padding adjustments */
  .section-padding {
    padding: 3rem 1rem;
  }
  
  /* Service card mobile optimization */
  .service-card {
    margin-bottom: 2rem;
  }
  
  .service-content {
    padding: 1.5rem;
  }
  
  .service-title {
    font-size: 1.5rem;
  }
  
  .service-description {
    font-size: 1rem;
  }
  
  /* Professional card mobile optimization */
  .professional-card {
    padding: 1.5rem;
  }
  
  /* Button mobile optimization */
  .btn-primary, .btn-secondary {
    min-height: 44px;
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
  
  /* Navigation mobile optimization */
  .nav-link {
    padding: 0.75rem;
    min-height: 44px;
    display: flex;
    align-items: center;
  }
  
  /* Form input mobile optimization */
  input[type="text"],
  input[type="email"], 
  input[type="tel"],
  textarea,
  select {
    min-height: 44px;
    font-size: 16px; /* Prevents zoom on iOS */
  }
  
  /* Grid adjustments for mobile */
  .service-benefits ul {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  /* Extra small mobile devices */
  .heading-primary {
    font-size: 1.75rem;
  }
  
  .heading-secondary {
    font-size: 1.375rem;
  }
  
  .section-padding {
    padding: 2.5rem 0.75rem;
  }
  
  .professional-card {
    padding: 1rem;
  }
  
  .service-content {
    padding: 1rem;
  }
}

/* iOS Safari specific fixes */
@supports (-webkit-touch-callout: none) {
  /* Fix viewport height issues on iOS Safari */
  .hero-background {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
  
  /* Prevent zoom on form inputs */
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    font-size: 16px !important;
  }
}

/* Android Chrome specific optimizations */
@media screen and (-webkit-min-device-pixel-ratio: 1) {
  /* Ensure proper rendering on Android devices */
  body {
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }
  
  /* Fix potential rendering issues */
  .professional-card,
  .service-card {
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
}
/* Service Card Layout */
.service-card {
  display: grid;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  border: 1px solid #e2e8f0;
}

/* Desktop Layout - Image and Content Side by Side */
@media (min-width: 1024px) {
  .service-card {
    grid-template-columns: 400px 1fr;
    align-items: stretch;
  }
  
  .service-card:nth-child(even) {
    grid-template-columns: 1fr 400px;
  }
  
  .service-card:nth-child(even) .service-image {
    order: 2;
  }
  
  .service-card:nth-child(even) .service-content {
    order: 1;
  }
}

/* Service Image Styling */
.service-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center;
}

@media (min-width: 1024px) {
  .service-image {
    height: 100%;
    min-height: 500px;
  }
}

/* Service Content Styling */
.service-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .service-content {
    padding: 3rem;
  }
}

@media (min-width: 1024px) {
  .service-content {
    padding: 4rem;
  }
}

/* Enhanced Mobile Optimizations */
@media (max-width: 640px) {
  /* Comprehensive mobile fixes */
  * {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  /* Prevent horizontal overflow */
  body, html {
    overflow-x: hidden;
    width: 100%;
  }
  
  /* Service card mobile optimization */
  .service-card {
    margin-bottom: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .service-content {
    padding: 1.5rem;
  }
  
  .service-title {
    font-size: 1.375rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  .service-description {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }
  
  /* Professional card mobile optimization */
  .professional-card {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }
  
  /* Typography mobile adjustments */
  .heading-primary {
    font-size: 1.75rem;
    line-height: 1.2;
    padding: 0 0.5rem;
    text-align: center;
  }
  
  .heading-secondary {
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  /* Button mobile optimization */
  .btn-primary, .btn-secondary {
    min-height: 48px;
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    touch-action: manipulation;
  }
  
  /* Navigation mobile optimization */
  .nav-link {
    padding: 0.75rem;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Form optimization for mobile */
  input[type="text"],
  input[type="email"], 
  input[type="tel"],
  textarea,
  select {
    min-height: 48px;
    font-size: 16px;
    padding: 0.875rem;
    border-radius: 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  /* Grid mobile adjustments */
  .service-benefits ul {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  /* Section padding mobile */
  .section-padding {
    padding: 2.5rem 1rem;
  }
  
  /* Hero mobile optimization */
  .hero-background {
    text-align: center;
    padding: 3rem 1rem;
  }
  
  /* Features grid mobile */
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* iPhone specific optimizations */
@media (max-width: 428px) and (-webkit-min-device-pixel-ratio: 2) {
  /* iPhone 14 Pro Max, iPhone 14 Plus optimization */
  .heading-primary {
    font-size: 1.625rem;
    padding: 0 0.75rem;
  }
  
  .service-content {
    padding: 1.25rem;
  }
  
  .professional-card {
    padding: 1.25rem;
  }
}

@media (max-width: 414px) and (-webkit-min-device-pixel-ratio: 2) {
  /* iPhone 11 Pro Max, iPhone XS Max optimization */
  .heading-primary {
    font-size: 1.5rem;
  }
}

@media (max-width: 390px) and (-webkit-min-device-pixel-ratio: 3) {
  /* iPhone 14, iPhone 13 Pro optimization */
  .service-features,
  .service-benefits {
    font-size: 0.9rem;
  }
}

@media (max-width: 375px) {
  /* iPhone SE, iPhone 8, smaller Android devices */
  .heading-primary {
    font-size: 1.375rem;
    line-height: 1.15;
  }
  
  .heading-secondary {
    font-size: 1.25rem;
  }
  
  .service-content {
    padding: 1rem;
  }
  
  .professional-card {
    padding: 1rem;
  }
  
  .section-padding {
    padding: 2rem 0.75rem;
  }
}

/* Android specific optimizations */
@media (max-width: 412px) and (-webkit-min-device-pixel-ratio: 2) {
  /* Android devices like Pixel, Samsung Galaxy */
  .service-image {
    height: 240px;
  }
  
  .btn-primary, .btn-secondary {
    font-weight: 600;
    letter-spacing: 0.025em;
  }
}

@media (max-width: 393px) {
  /* Pixel 5, newer Android devices */
  .hero-background {
    padding: 2.5rem 1rem;
  }
}

@media (max-width: 360px) {
  /* Smaller Android devices */
  .service-content {
    padding: 0.875rem;
  }
  
  .professional-card {
    padding: 0.875rem;
  }
  
  .heading-primary {
    font-size: 1.25rem;
  }
  
  .section-padding {
    padding: 1.75rem 0.5rem;
  }
}

/* Touch optimization for all mobile devices */
@media (max-width: 768px) {
  /* Ensure all interactive elements are touch-friendly */
  a, button, input, textarea, select {
    min-height: 48px;
    touch-action: manipulation;
  }
  
  /* Prevent text selection on buttons and nav */
  .btn-primary, .btn-secondary, .nav-link {
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  
  /* Enhanced spacing for touch interaction */
  .nav-link {