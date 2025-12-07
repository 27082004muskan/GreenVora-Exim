import React from 'react';
import heroImage from '../../assets/heroimg.jpg'; // your sustainability/export image

const Hero = ({ scrollToSection }) => (
  <section
    id="home"
    className="relative h-screen overflow-hidden bg-[linear-gradient(135deg,#022c22_0%,#065f46_40%,#22c55e_100%)]"
  >
    {/* Dark overlay for text clarity */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
      {/* Left Side: Text Content */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center py-12 lg:py-0">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            GREENVORA EXIM
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 mb-6">
            Empowering Global Trade & Trusted Sourcing
          </p>

          <p className="text-lg text-emerald-50 mb-10 leading-relaxed">
            Helping businesses find comprehensive export and sourcing solutions worldwide
            with a focus on quality, reliability, and sustainable partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA: white + green outline */}
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 rounded-lg font-semibold bg-white text-emerald-900 border border-emerald-600 hover:bg-emerald-50 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Learn More
            </button>

            {/* Secondary CTA: solid dark green */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-lg font-semibold bg-emerald-700 text-white hover:bg-emerald-600 border border-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="hidden lg:block w-1/2 h-full flex items-center justify-end">
        <div className="relative w-full h-4/5 max-w-md">
          <img 
            src={heroImage} 
            alt="GreenVora Exim - Global Trade & Sustainability" 
            className="w-full h-full object-contain rounded-2xl shadow-2xl border-8 border-white/20 rotate-[-5deg] hover:rotate-0 transition-all duration-700"
          />
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full"></div>
        </div>
      </div>

      {/* Mobile Image (bottom centered) */}
      <div className="lg:hidden w-full pt-8 pb-12 flex justify-center">
        <div className="relative w-80 h-64 max-w-full mx-auto">
          <img 
            src={heroImage} 
            alt="GreenVora Exim - Global Trade & Sustainability" 
            className="w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-white/30 -rotate-3 hover:rotate-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
