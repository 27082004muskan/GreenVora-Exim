import React, { useState, useEffect } from 'react';
import aimImage from '../assets/aim.png';
import visionImage from '../assets/vision.png';
import { apiGet } from '../apiClient';

const About = () => {
  // Show meaningful content immediately; API just enhances it when ready
  const [aboutData, setAboutData] = useState({
    heading: 'Welcome To Greenvora Exim',
    aboutUs: {
      title: 'About Us',
      content:
        'Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service. We believe in building long-term partnerships through transparent communication, consistent quality, and a customer-first approach. Our commitment to timely deliveries, ethical operations, and dependable support ensures a seamless and trustworthy experience for clients across global markets.',
    },
    vision: {
      title: 'Our Vision',
      content:
        'Our vision is to build Greenvora Exim into a trusted global partner known for delivering reliable, sustainable, and high-quality export solutions. We are committed to ethical sourcing, consistent product quality, and a customer-first approach that ensures long-term business success. By expanding our international network, strengthening supply capabilities, and offering value-driven services, we aim to support businesses worldwide with dependable products and seamless import–export experiences. Our focus is on creating meaningful, long-lasting partnerships that contribute to transparent, responsible, and sustainable global trade.',
    },
  });

  useEffect(() => {
    apiGet('/api/about/', { cacheKey: 'about' })
      .then((data) => {
        setAboutData((prev) => ({ ...prev, ...data }));
      })
      .catch((err) => {
        console.error('About fetch error:', err);
      });
  }, []);

  const { heading, aboutUs, vision } = aboutData || {};

  return (
    <section className="py-28 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
            {heading}
          </h1>
        </div>

        {/* About Us */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-6">{aboutUs?.title}</h2>
            <p className="text-base sm:text-lg text-emerald-800 leading-relaxed">{aboutUs?.content}</p>
          </div>
          <div className="hidden lg:flex lg:w-1/2 justify-end">
            <img src={aimImage} alt="About Us" className="w-full max-w-md h-80 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12 mt-12 lg:mt-16">
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-6">{vision?.title}</h2>
            <p className="text-base sm:text-lg text-emerald-800 leading-relaxed">{vision?.content}</p>
          </div>
          <div className="hidden lg:flex lg:w-1/2 justify-start">
            <img src={visionImage} alt="Vision" className="w-full max-w-md h-80 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
