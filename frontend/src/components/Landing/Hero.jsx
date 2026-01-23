import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/heroimg.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('/api/hero')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setHeroData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Hero fetch error:', err);
        
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-800">
        <div className="text-white text-xl">Loading Hero...</div>
      </div>
    );
  }

  const { title, subtitle, description, cta1, cta2 } = heroData || {};

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-5rem)] overflow-hidden bg-[linear-gradient(135deg,#022c22_0%,#065f46_40%,#22c55e_100%)] pt-20"
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto gap-4 sm:gap-6 lg:gap-8">
        {/* Left Side: Dynamic Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-4 sm:pt-6 md:pt-8 lg:pt-0">
          <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-5 leading-tight">
              {title || 'GREENVORA EXIM'}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 mb-3 md:mb-4">
              {subtitle || 'Empowering Global Trade & Trusted Sourcing'}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-emerald-50 mb-6 md:mb-8 leading-relaxed">
              {description || 'Loading content...'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate(cta1?.path || '/learn-more')}
                className="px-6 sm:px-8 py-3 rounded-lg font-semibold bg-white text-emerald-900 border border-emerald-600 hover:bg-emerald-50 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
              >
                {cta1?.text || 'Learn More'}
              </button>
              <button 
                onClick={() => navigate(cta2?.path || '/contact')}
                className="px-6 sm:px-8 py-3 rounded-lg font-semibold bg-emerald-700 text-white hover:bg-emerald-600 border border-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base"
              >
                {cta2?.text || 'Contact Us'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image (Desktop) */}
        <div className="hidden lg:flex w-1/2 h-full items-center justify-end">
          <div className="relative w-full max-w-lg h-[320px]">
            <img
              src={heroImage}
              alt="GreenVora Exim - Global Trade & Sustainability"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/40 rotate-[-5deg] hover:rotate-0 transition-all duration-700"
            />
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/10 rounded-full"></div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden w-full pb-8 flex justify-center">
          <div className="relative w-64 sm:w-72 h-48 sm:h-56 max-w-full mx-auto">
            <img
              src={heroImage}
              alt="GreenVora Exim - Global Trade & Sustainability"
              className="w-full h-full object-contain rounded-2xl shadow-2xl border-2 border-white/40 -rotate-3 hover:rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
