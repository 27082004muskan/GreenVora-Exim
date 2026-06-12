import React, { useMemo, useState, useEffect } from 'react';
import aimImage from '../assets/aim.png';
import visionImage from '../assets/vision.png';
import { apiGet } from '../apiClient';
import { resolveImage } from '../utils/resolveImage';

const defaultAbout = {
  heading: 'Welcome To Greenvora Exim',
  aboutUs: {
    title: 'About Us',
    content:
      'Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service.',
    image: 'aim.png',
  },
  vision: {
    title: 'Our Vision',
    content:
      'To become a trusted partner for sustainable packaging solutions, empowering businesses across India and global markets with innovative, customizable, and eco-friendly packaging.',
    image: 'vision.png',
  },
};

const About = () => {
  const [aboutData, setAboutData] = useState(defaultAbout);

  const imageMap = useMemo(
    () => ({
      'aim.png': aimImage,
      'vision.png': visionImage,
    }),
    []
  );

  useEffect(() => {
    apiGet('/api/about/', { cacheKey: 'about' })
      .then((data) => {
        setAboutData((prev) => ({
          ...prev,
          ...data,
          aboutUs: { ...prev.aboutUs, ...data.aboutUs },
          vision: { ...prev.vision, ...data.vision },
        }));
      })
      .catch((err) => {
        console.error('About fetch error:', err);
      });
  }, []);

  const { heading, aboutUs, vision } = aboutData || {};
  const aboutImage = resolveImage(aboutUs?.image, imageMap, aimImage);
  const visionImg = resolveImage(vision?.image, imageMap, visionImage);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 border-b border-gray-200 pb-8 py-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-900">
            {heading || 'Welcome To Greenvora Exim'}
          </h1>
          <p className="mt-4 max-w-3xl text-gray-600 leading-8">
            Delivering quality products worldwide through trust, sustainability, and long-term
            partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">
          <div className="overflow-hidden rounded-lg">
            <img
              src={aboutImage}
              alt={aboutUs?.title || 'About Us'}
              className="w-full h-[450px] object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div>
            <div className="w-16 h-1 bg-emerald-600 mb-6" />
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              {aboutUs?.title || 'About Us'}
            </h2>
            <p className="text-gray-600 leading-8 text-lg">{aboutUs?.content}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-16 h-1 bg-emerald-600 mb-6" />
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              {vision?.title || 'Our Vision'}
            </h2>
            <p className="text-gray-600 leading-8 text-lg">{vision?.content}</p>
          </div>

          <div className="overflow-hidden rounded-lg order-1 lg:order-2">
            <img
              src={visionImg}
              alt={vision?.title || 'Vision'}
              className="w-full h-[450px] object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
