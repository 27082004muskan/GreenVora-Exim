import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import DomesticProducts from './components/Domestic_Products';
import Footer from './components/Footer';
import Hero from './components/Landing/Hero';
import Navbar from './components/Landing/Navbar';
import LearnMore from './components/LearnMore';
import Products from './components/Products';
import Services from './components/Services';

// Fixed Layout - added min-h-screen and flex-col
const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-linear-to-br from-emerald-50 to-emerald-100">
    <Navbar />
    <div className="flex-1 pt-20">{children}</div>
    <Footer />
  </div>
);

// HOME page
const HomePage = () => (
  <Layout>
    <Hero />
  </Layout>
);

// Simple pages
const AboutPage = () => (
  <Layout>
    <About />
  </Layout>
);

const ServicesPage = () => (
  <Layout>
    <Services />
  </Layout>  
);

const ContactPage = () => (
  <Layout>
    <Contact />
  </Layout>
);

const LearnMorePage = () => (
  <Layout>
    <LearnMore />
  </Layout>
);

// Products Layout
const ProductsLayout = () => (
  <div className="min-h-screen flex flex-col bg-linear-to-br from-emerald-50 to-emerald-100">
    <Navbar />
    <div className="flex-1 pt-20">
      <Outlet />
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      
      {/* Fixed Products routes - Products shows on BOTH index AND international */}
      <Route path="/products" element={<ProductsLayout />}>
        <Route index element={<Products />} />                    {/* /products */}
        <Route path="domestic" element={<DomesticProducts />} />  {/* /products/domestic */}
        <Route path="international" element={<Products />} />    {/* /products/international - SAME Products */}
      </Route>
      
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
    </Routes>
  );
}

export default App;
