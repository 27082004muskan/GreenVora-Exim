import React, { useState, useEffect } from 'react';
import aimImage from '../assets/aim.png';
import visionImage from '../assets/vision.png';
const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/about/')
      .then(res => res.json())
      .then(data => {
        setAboutData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="py-20 text-center">Loading About...</div>;

  const { heading, aboutUs, vision } = aboutData || {};

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
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
