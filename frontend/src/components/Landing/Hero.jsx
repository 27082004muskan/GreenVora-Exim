import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from '../../api';
import heroImage from '../../assets/heroimg.jpg';
import img1 from '../../assets/hero1.png';

const Hero = () => {
  const navigate = useNavigate();

  const [heroData, setHeroData] = useState({
    title: 'Reliable Export Solutions.',
    subtitle: 'Trusted Global Sourcing.',
    description:
      'We help global buyers source high-quality products from India with transparency, consistency, and dependable supply.',
    cta1: { text: 'View Products', path: '/products' },
    cta2: { text: 'Request a Demo', path: '/contact' },
  });

  useEffect(() => {
    fetch(`${API_BASE}/api/hero`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setHeroData((prev) => ({ ...prev, ...data }));
      })
      .catch((err) => console.error('Hero fetch error:', err));
  }, []);

  const { title, subtitle, description, cta1, cta2 } = heroData;

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-700 text-white py-28 px-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {title}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-emerald-200">
              {subtitle}
            </h2>

            <p className="text-lg text-emerald-50 mb-6">
              {description}
            </p>

            <p className="text-sm text-emerald-100 mb-6">
              Specializing in eco-friendly jute products and customized sourcing solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/products')}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
              >
                {cta1.text}
              </button>

              <button
                onClick={() => navigate('/contact')} // Request Demo → Contact
                className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
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
              className="rounded-2xl shadow-2xl w-full max-w-md rotate-[-5deg] hover:rotate-0 transition duration-500"
            />
          </div>
        </div>

        {/* FEATURE STRIP */}
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white text-gray-800 rounded-xl shadow-xl flex justify-around py-6 text-lg font-medium">
          <span>✔ Verified Supplier Network</span>
          <span>✔ Quality Inspection</span>
          <span>✔ Competitive Pricing</span>
          <span>⏱ Timely Delivery</span>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="bg-gray-50 pt-20 pb-10 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          At Greenvora Exim, we simplify global sourcing from India. From product
          selection to final delivery, we ensure a smooth, transparent, and reliable export experience.
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Our Key Products</h2>
        <p className="text-center text-gray-600 mb-8">
          Focused on sustainable and high-demand export categories.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {/* PRODUCT 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={img1}
              alt="jute bags"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Jute Bags & Carry Bags
              </h3>
              <p className="text-gray-600 text-sm">
                Eco-friendly, durable, and customizable for retail and promotional use.
              </p>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://www.treehugger.com/thmb/pWcEwAXqDYhQofpdkmcGrPpm_0U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/handmade-natural-jute-knitted-items-for-home-decoration--scandinavian-style--beige-tones-no-people--sustainable-decor-and-interior-details-1275780819-96127afbe21a4453bb240606b3644f53.jpg"
              alt="jute sacks"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Jute Sacks & Packaging
              </h3>
              <p className="text-gray-600 text-sm">
                Strong and reliable packaging solutions for agriculture and bulk goods.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-white py-12 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose Greenvora Exim
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-gray-700">
          <p>✔ Trusted supplier network</p>
          <p>✔ Strict quality checks</p>
          <p>✔ Transparent communication & pricing</p>
          <p>✔ Reliable logistics & timely delivery</p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      {/* <section className="bg-gradient-to-r from-emerald-900 to-green-600 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Looking for a reliable export partner from India?
        </h2>

        <p className="mb-6 text-emerald-100">
          We are open for bulk orders and long-term international partnerships.
        </p>

        <button
          onClick={() => navigate('/contact')}
          className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100"
        >
          Contact Us Today
        </button>
      </section> */}
    </>
  );
};

export default Hero;