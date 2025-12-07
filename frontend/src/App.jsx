import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Landing/Navbar';
import Hero from './components/Landing/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

// HOME (landing) page – yahi tumhara current layout hai
const HomePage = () => {
  return (
    <>
      <Navbar /> {/* ab scrollToSection pass nahi karna */}
      <div className="pt-20">
        <Hero />     {/* yahan bhi prop hatado */}
        
        <Footer />
      </div>
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
  <>
    <Navbar />
    <div className="pt-20">
      <Services />
      <Footer />
    </div>
  </>
);

const ProductsPage = () => (
  <>
    <Navbar />
    <div className="pt-20">
      <Products />
      <Footer />
    </div>
  </>
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
