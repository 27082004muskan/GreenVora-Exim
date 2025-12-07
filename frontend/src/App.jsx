import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Landing/Hero';
import Navbar from './components/Landing/Navbar';
import LearnMore from './components/LearnMore';
import Products from './components/Products';
import Services from './components/Services';

// HOME (landing) page – yahi tumhara current layout hai
const HomePage = () => {
  return (
    <>
      <Navbar /> {/* ab scrollToSection pass nahi karna */}
      <Hero />     {/* yahan bhi prop hatado */}
      <Footer />
    </>
  );
};


// Simple wrapper pages – existing components reuse
const AboutPage = () => (
  <>
    <Navbar />
    <div className="pt-20">
      <About />
      <Footer />
    </div>
  </>
);

const ServicesPage = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 to-emerald-100">
    <Navbar />
    <div className="flex-1">
      <Services />
    </div>
    <Footer />
  </div>
);

const ProductsPage = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 to-emerald-100">
    <Navbar />
    <div className="flex-1">
      <Products />
    </div>
    <Footer />
  </div>
);

const ContactPage = () => (
  <>
    <Navbar />
    <div className="pt-20">
      <Contact />
      <Footer />
    </div>
  </>
);

const LearnMorePage = () => (
  <>
    <Navbar />
    <LearnMore />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
    </Routes>
  );
}

export default App;
