import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-slate-900 antialiased">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;