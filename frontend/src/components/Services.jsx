import { TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Services = () => (
  <section id="services" className="h-full pt-20 pb-8 bg-gradient-to-br from-emerald-50 to-emerald-100 flex flex-col">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center py-8">
      <div className="w-full grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white/80 rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100">
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-emerald-800" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            Merchant Exporter to Export Services
          </h3>
          <p className="text-emerald-800 mb-6 leading-relaxed">
            We help businesses access global markets with reliable, end-to-end export solutions. Along with a strong focus on eco-friendly jute products—such as jute products, home décor items, handicrafts, etc. From product sourcing and quality inspections to documentation, logistics, and timely delivery, we ensure your shipments are handled with complete professionalism and compliance. With us, exporting becomes smooth, efficient, and worry-free.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/80 rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100">
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-emerald-800" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            Sourcing Agent Services to Sourcing Agent
          </h3>
          <p className="text-emerald-800 mb-6 leading-relaxed">
            We act as your on-ground sourcing partner in India—finding the right manufacturers, negotiating the best prices, and ensuring strict quality standards. With transparent communication and supplier verification, we help you source the perfect products without risk, delays, or hidden costs. Your global procurement becomes easier, faster, and more efficient.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
