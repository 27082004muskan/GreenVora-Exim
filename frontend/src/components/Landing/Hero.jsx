import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiGet } from '../../apiClient';
import heroImage from '../../assets/heroimg.png';
import img1 from '../../assets/hero1.png';
import img2 from '../../assets/hero2.png';


const Hero = () => {
  const navigate = useNavigate();

  const [heroData,setHeroData ] = useState({
    title: 'Reliable Export Solutions.',
    subtitle: 'Trusted Global Sourcing.',
    description:
      'We help global buyers source high-quality products from India with transparency, consistency, and dependable supply.',
    cta1: { text: 'View Products', path: '/products' },
    cta2: { text: 'Request a Demo', path: '/contact' },
  });

  useEffect(() => {
    apiGet('/api/hero', { cacheKey: 'hero' })
      .then((data) => {
        setHeroData((prev) => ({
          ...prev,
          ...data,
          cta1: prev.cta1,
          cta2: prev.cta2,
        }));
      })
      .catch((err) => console.error('Hero fetch error:', err));
  }, []);

  const { title, subtitle, description, cta1, cta2 } = heroData;

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-700 text-white py-16 md:py-20 px-4 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold  pt-15 leading-tight mb-4">
              {title}
            </h1>

            <h2 className="text-xl md:text-3xl font-semibold mb-4 text-emerald-200">
              {subtitle}
            </h2>

            <p className="text-base md:text-lg text-emerald-50 mb-4">
              {description}
            </p>

            <p className="text-sm text-emerald-100 mb-6">
              Specializing in eco-friendly jute products and customized sourcing solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate('/products')}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition w-full sm:w-auto"
              >
                {cta1.text}
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition w-full sm:w-auto"
              >
                {cta2.text}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="export"
              className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md rotate-[-5deg] hover:rotate-0 transition duration-500"
            />
          </div>
        </div>

        {/* FEATURE STRIP (FIXED FOR MOBILE) */}
        <div className="relative md:absolute md:bottom-[-30px] mt-10 md:mt-0 left-1/2 transform -translate-x-1/2 w-full md:w-[90%] bg-white text-gray-800 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-around gap-3 py-4 text-sm md:text-lg font-medium px-4">
          <span>✔ Sustainable Packaging Solutions</span>
          <span>✔ Custom Branding & Printing</span>
          <span>✔ Bulk Supply Support</span>
          <span>✔ India & Global Markets</span>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="bg-gray-50 pt-16 md:pt-20 pb-10 text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
          We provide sustainable packaging solutions designed to help businesses reduce environmental impact while enhancing brand visibility. Whether you need jute bags, compostable bags and paper bags our team delivers customized packaging solutions backed by quality, reliability, and scalable supply capabilities.
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-gray-100 py-10 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Our Key Products</h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Sustainable packaging products designed to support your branding and packaging needs.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PRODUCT 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={img1}
              alt="jute bags"
              className="h-90 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Jute Packaging 
              </h3>
              <p className="text-gray-600 text-sm">
                Sustainable jute packaging for shopping, gifting, and promotional 
              </p>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={img2}
              alt="jute sacks"
              className="h-90 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Compostable Packaging 
              </h3>
              <p className="text-gray-600 text-sm">
Eco-friendly packaging solutions designed for a more sustainable future
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-white py-10 md:py-12 text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose Greenvora Exim
        </h2>

       <div className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
      We provide sustainable packaging solutions that help businesses strengthen their brand, reduce environmental impact, and meet their unique packaging requirements through quality products and customization options.
        </div>
      </section>
    </>
  );
};

export default Hero;