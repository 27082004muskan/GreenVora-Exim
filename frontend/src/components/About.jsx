import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute top-10 -left-20 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -top-10 -right-20 w-52 h-52 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Welcome / About Us */}
        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-emerald-100 shadow-2xl hover:shadow-emerald/20 hover:shadow-2xl transition-all duration-500">
            {/* <div className="flex items-center gap-3 mb-6">
          
            </div> */}
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
              Welcome To<br className="sm:hidden" /> Greenvora Exim
            </h2>
            <p className="text-lg text-emerald-800 leading-relaxed tracking-wide">
              Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service.
We believe in building long-term partnerships through transparent communication, consistent quality, and a customer-first approach. Our commitment to timely deliveries, ethical operations, and dependable support ensures a seamless and trustworthy experience for clients across global markets.
            </p>
         
          </div>
        </div>
        
        {/* Right: Vision */}
        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-emerald-300/30 to-emerald-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-emerald-100 shadow-2xl hover:shadow-emerald/20 hover:shadow-2xl transition-all duration-500">
         
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
              Our Vision
            </h2>
            <p className="text-lg text-emerald-800 leading-relaxed tracking-wide">
               Our vision is to build Greenvora Exim into a trusted global partner known for delivering reliable, sustainable, and high-quality export solutions. We are committed to ethical sourcing, consistent product quality, and a customer-first approach that ensures long-term business success.
By expanding our international network, strengthening supply capabilities, and offering value-driven services, we aim to support businesses worldwide with dependable products and seamless import–export experiences. Our focus is on creating meaningful, long-lasting partnerships that contribute to transparent, responsible, and sustainable global trade.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
