import React from 'react';
import heroImage from '../../assets/heroimg.jpg'; // use your image, e.g. banner.jpg

const Hero = ({ scrollToSection }) => (
<section
  id="home"
  className="relative h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* ...your overlay, text, and buttons go here... */}


    {/* Overlay for text clarity */}
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
        GREENVORA EXIM
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8">
        Empowering Global Trade & Trusted Sourcing
      </p>
      <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
        Helping businesses find comprehensive export and sourcing solutions worldwide
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => scrollToSection('about')}
          className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
        >
          Learn More
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
        >
          Contact Us
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
