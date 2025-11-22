import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Welcome / About Us */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Welcome To Greenvora Exim
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            <span className="w-8 h-1 rounded bg-blue-600"></span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Greenvora Exim is a leading import & export company based in India, specializing in sustainable and high-quality products such as jute bags, textiles, and industrial equipment. With deep roots in reliable sourcing and customer satisfaction, our business demands high trust and long-term partnerships across the world.
          </p>
        </div>
        {/* Right: Vision */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Vision
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            <span className="w-8 h-1 rounded bg-blue-600"></span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Greenvora Exim, we aim to exceed our clients' trust and build relationships that go beyond sales and profit. Through quality assurance, diverse services, and a client-centric approach, we maintain a top position as one of South Asia's most prominent export partners, making an impact in the global sustainable products market.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
