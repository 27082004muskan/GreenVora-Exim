import { TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Services = () => (
  <section className="py-25 bg-white">
    <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
          Our Services
        </h1>
        {/* <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Reliable export and sourcing solutions for global businesses
        </p> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service 1 */}
        <div className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-10 border-l-8 border-emerald-500 hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl">
          <TrendingUp className="h-16 w-16 text-emerald-700 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-bold text-emerald-900 mb-6">
            Exporter Service to Export Services
          </h3>
          <p className="text-lg text-emerald-800 leading-relaxed">
            We help businesses access global markets with reliable, end-to-end export solutions. Along with a strong focus on eco-friendly jute products—such as jute products, home décor items, handicrafts, etc. From product sourcing and quality inspections to documentation, logistics, and timely delivery, we ensure your shipments are handled with complete professionalism and compliance. With us, exporting becomes smooth, efficient, and worry-free.
          </p>
        </div>

        {/* Service 2 */}
        <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 border-l-8 border-emerald-500 hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl">
          <Users className="h-16 w-16 text-emerald-700 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-bold text-emerald-900 mb-6">
            Sourcing Agent Services to Sourcing Agent
          </h3>
          <p className="text-lg text-emerald-800 leading-relaxed">
            We act as your on-ground sourcing partner in India—finding the right manufacturers, negotiating the best prices, and ensuring strict quality standards. With transparent communication and supplier verification, we help you source the perfect products without risk, delays, or hidden costs. Your global procurement becomes easier, faster, and more efficient.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
