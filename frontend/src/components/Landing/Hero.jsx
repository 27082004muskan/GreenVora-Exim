import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiGet } from '../../apiClient';
import { resolveImage } from '../../utils/resolveImage';

import heroImage from '../../assets/heroimg.png';
import img1 from '../../assets/hero1.png';
import img2 from '../../assets/hero2.png';

const defaultHero = {
  title: 'One-Stop Sustainable Packaging Solutions',
  subtitle: 'Customized Jute Bags, Compostable Bags and Paper Bags for India and Global Markets.',
  description:
    'Greenvora Exim helps businesses transition to sustainable packaging through high-quality jute bags, compostable bags and paper bags. From custom branding and printing to bulk supply and export support, we provide end-to-end packaging solutions tailored to your business needs.',

  image: 'heroimg.png',

  cta1: {
    text: 'View Products',
    path: '/products',
  },

  cta2: {
    text: 'Request a Demo',
    path: '/contact',
  },

  features: [
    'Sustainable Packaging Solutions',
    'Custom Branding & Printing',
    'Bulk Supply Support',
    'India & Global Markets',
  ],

  whatWeDo: {
    title: 'What We Do',
    content:
      'We provide sustainable packaging solutions designed to help businesses reduce environmental impact while enhancing brand visibility. Whether you need jute bags, compostable bags and paper bags our team delivers customized packaging solutions backed by quality, reliability, and scalable supply capabilities.',
  },

  keyProducts: [
    {
      title: 'Jute Packaging',
      description:
        'Sustainable jute packaging for shopping, gifting, and promotional use.',
      image: 'hero1.png',
    },
    {
      title: 'Compostable Packaging',
      description:
        'Eco-friendly packaging solutions designed for a more sustainable future.',
      image: 'hero2.png',
    },
  ],

  whyChoose: {
    title: 'Why Choose Greenvora Exim',
    content:
      'We provide sustainable packaging solutions that help businesses strengthen their brand, reduce environmental impact, and meet their unique packaging requirements through quality products and customization options.',
  },
};

const Hero = () => {
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState(defaultHero);

  const imageMap = useMemo(
    () => ({
      'heroimg.png': heroImage,
      'hero1.png': img1,
      'hero2.png': img2,
    }),
    []
  );

  useEffect(() => {
    apiGet('/api/hero', { cacheKey: 'hero' })
      .then((data) => {
        setHeroData((prev) => ({
          ...prev,
          ...data,
          cta1: { ...prev.cta1, ...data.cta1 },
          cta2: { ...prev.cta2, ...data.cta2 },
          whatWeDo: { ...prev.whatWeDo, ...data.whatWeDo },
          whyChoose: { ...prev.whyChoose, ...data.whyChoose },
          features: data.features?.length
            ? data.features
            : prev.features,
          keyProducts: data.keyProducts?.length
            ? data.keyProducts
            : prev.keyProducts,
        }));
      })
      .catch((err) => console.error('Hero fetch error:', err));
  }, []);

  const {
    title,
    subtitle,
    description,
  
    image,
    cta1,
    cta2,
    features,
    whatWeDo,
    keyProducts,
    whyChoose,
  } = heroData;

  const mainImage = resolveImage(image, imageMap, heroImage);

  return (
    <>
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-700 text-white py-16 md:py-20 px-4 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="lg:w-1/2 text-center lg:text-left">
  <h1 className="text-3xl md:text-5xl font-bold pt-15 leading-tight mb-4">
    {title}
  </h1>

  <h2 className="text-xl md:text-3xl font-semibold mb-4 text-emerald-200">
    {subtitle}
  </h2>

  <p className="text-base md:text-lg text-emerald-100 mb-6 leading-relaxed">
    {description}
  </p>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
    <button
      onClick={() => navigate(cta1?.path || '/products')}
      className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition w-full sm:w-auto"
    >
      {cta1?.text || 'View Products'}
    </button>

    <button
      onClick={() => navigate(cta2?.path || '/contact')}
      className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition w-full sm:w-auto"
    >
      {cta2?.text || 'Request a Demo'}
    </button>
  </div>
</div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={mainImage}
              alt={title}
              className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md rotate-[-5deg] hover:rotate-0 transition duration-500"
            />
          </div>
        </div>

        <div className="relative md:absolute md:bottom-[-30px] mt-10 md:mt-0 left-1/2 transform -translate-x-1/2 w-full md:w-[90%] bg-white text-gray-800 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-around gap-3 py-4 text-sm md:text-lg font-medium px-4">
          {features?.map((feature) => (
            <span key={feature}>✔ {feature}</span>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 pt-16 md:pt-20 pb-10 text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {whatWeDo?.title}
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
          {whatWeDo?.content}
        </p>
      </section>

      <section className="bg-gray-100 py-10 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Our Key Products
        </h2>

        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Sustainable packaging products designed to support your branding and packaging needs.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyProducts?.map((product, index) => (
            <div
              key={product.title || index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={resolveImage(
                  product.image,
                  imageMap,
                  index === 0 ? img1 : img2
                )}
                alt={product.title}
                className="h-90 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-10 md:py-12 text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {whyChoose?.title}
        </h2>

        <div className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
          {whyChoose?.content}
        </div>
      </section>
    </>
  );
};

export default Hero;