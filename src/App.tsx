import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-slate-900 antialiased" itemScope itemType="https://schema.org/WebPage" data-business="Kempt CPA Professional Corporation" data-brand="KemptCPA">
      <meta itemProp="name" content="Kempt CPA Professional Corporation - Canadian CPA Services" />
      <meta itemProp="description" content="KemptCPA (Kempt CPA Professional Corporation) - Professional Canadian CPA services including T1/T2 tax preparation, QuickBooks/Xero bookkeeping, GST/HST filings, and business advisory." />
      <meta itemProp="url" content="https://kemptcpa.ca" />
      <meta itemProp="brand" content="KemptCPA" />
      <meta itemProp="organization" content="Kempt CPA Professional Corporation" />
      <Header />
      <main role="main">
        <Hero />
        <Services />
      </main>
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;