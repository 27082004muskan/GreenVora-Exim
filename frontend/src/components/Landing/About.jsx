import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Welcome / About Us */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Welcome To Greenvora Exim
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            <span className="w-8 h-1 rounded bg-blue-600"></span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
           Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service.
We believe in building long-term partnerships through transparent communication, consistent quality, and a customer-first approach. Our commitment to timely deliveries, ethical operations, and dependable support ensures a seamless and trustworthy experience for clients across global markets.
          </p>
        </div>
        {/* Right: Vision */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Vision
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            <span className="w-8 h-1 rounded bg-blue-600"></span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our vision is to build Greenvora Exim into a trusted global partner known for delivering reliable, sustainable, and high-quality export solutions. We are committed to ethical sourcing, consistent product quality, and a customer-first approach that ensures long-term business success.
By expanding our international network, strengthening supply capabilities, and offering value-driven services, we aim to support businesses worldwide with dependable products and seamless import–export experiences. Our focus is on creating meaningful, long-lasting partnerships that contribute to transparent, responsible, and sustainable global trade.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
