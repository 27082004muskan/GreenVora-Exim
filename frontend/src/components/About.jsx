import React from 'react';

const About = () => (
  <section className="py-20 bg-emerald-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
          Welcome To Greenvora Exim
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Company Info - Exact original text */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-emerald-800 leading-relaxed">
            Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service.
            We believe in building long-term partnerships through transparent communication, consistent quality, and a customer-first approach. Our commitment to timely deliveries, ethical operations, and dependable support ensures a seamless and trustworthy experience for clients across global markets.
          </p>
        </div>

        {/* Vision - Exact original text */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-emerald-800 leading-relaxed">
            Our vision is to build Greenvora Exim into a trusted global partner known for delivering reliable, sustainable, and high-quality export solutions. We are committed to ethical sourcing, consistent product quality, and a customer-first approach that ensures long-term business success.
            By expanding our international network, strengthening supply capabilities, and offering value-driven services, we aim to support businesses worldwide with dependable products and seamless import–export experiences. Our focus is on creating meaningful, long-lasting partnerships that contribute to transparent, responsible, and sustainable global trade.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
