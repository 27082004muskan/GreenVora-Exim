import React from 'react';
import aimImage from '../assets/aim.png';  // Adjust path based on your folder structure
import visionImage from '../assets/vision.png';

const About = () => (
  <section className="py-20 bg-emerald-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
          Welcome To Greenvora Exim
        </h1>
      </div>

      <div className="space-y-12 lg:space-y-16">
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-emerald-800 leading-relaxed">
              Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service.
              We believe in building long-term partnerships through transparent communication, consistent quality, and a customer-first approach. Our commitment to timely deliveries, ethical operations, and dependable support ensures a seamless and trustworthy experience for clients across global markets.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src={aimImage} 
              alt="Our Aim" 
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-emerald-800 leading-relaxed">
              Our vision is to build Greenvora Exim into a trusted global partner known for delivering reliable, sustainable, and high-quality export solutions. We are committed to ethical sourcing, consistent product quality, and a customer-first approach that ensures long-term business success.
              By expanding our international network, strengthening supply capabilities, and offering value-driven services, we aim to support businesses worldwide with dependable products and seamless import–export experiences. Our focus is on creating meaningful, long-lasting partnerships that contribute to transparent, responsible, and sustainable global trade.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src={visionImage} 
              alt="Our Vision" 
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
