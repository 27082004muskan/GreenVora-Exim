import React from 'react';
import { TrendingUp, Users, ChevronRight } from 'lucide-react';

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions tailored to your international trade needs
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-blue-900" />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Merchant Exporter to Export Services </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We help businesses access global markets with reliable, end-to-end export solutions. Along with a strong focus on eco-friendly jute products—such as jute products, home décor items, handicrafts, etc. From product sourcing and quality inspections to documentation, logistics, and timely delivery, we ensure your shipments are handled with complete professionalism and compliance. With us, exporting becomes smooth, efficient, and worry-free.
          </p>
          {/* <ul className="space-y-3">
            {['Complete export documentation', 'Customs clearance assistance', 'Market research and analysis'].map((txt, i) => (
              <li key={i} className="flex items-start">
                <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 ml-2">{txt}</span>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-blue-900" />
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Sourcing Agent Services to Sourcing Agent </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We act as your on-ground sourcing partner in India—finding the right manufacturers, negotiating the best prices, and ensuring strict quality standards. With transparent communication and supplier verification, we help you source the perfect products without risk, delays, or hidden costs. Your global procurement becomes easier, faster, and more efficient.
          </p>
          {/* <ul className="space-y-3">
            {['Supplier identification and verification', 'Quality control and inspections', 'Negotiation and contract management'].map((txt, i) => (
              <li key={i} className="flex items-start">
                <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 ml-2">{txt}</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  </section>
);
export default Services;
