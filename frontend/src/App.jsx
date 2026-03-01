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

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-transparent">
    <Navbar />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);

const ProductsLayout = () => (
  <div className="min-h-screen flex flex-col bg-transparent">
    <Navbar />
    <div className="flex-1">
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
      
      <Route path="/products" element={<ProductsLayout />}>
        <Route index element={<Products />} />
        <Route path="domestic" element={<DomesticProducts />} />
        <Route path="international" element={<Products />} />
      </Route>
      
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
    </Routes>
  );
}

const HomePage = () => (
  <Layout>
    <Hero />
  </Layout>
);

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

export default App;
