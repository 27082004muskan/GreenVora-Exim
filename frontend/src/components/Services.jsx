import { TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Services = () => (
  <section className="py-25 bg-white"> {/* py-25 → py-20 for consistency */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* px-6 → px-4 mobile */}
      <div className="text-center mb-16 sm:mb-20"> {/* Responsive mb */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-4 sm:mb-6">
          Our Services
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"> {/* Smaller mobile gap */}
        {/* Service 1 */}
        <div className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-l-4 sm:border-l-8 border-emerald-500 hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl">
          <TrendingUp className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-emerald-700 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-emerald-900 mb-4 sm:mb-6">
            Exporter Services
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-emerald-800 leading-relaxed line-clamp-4 sm:line-clamp-none">
            We help businesses access global markets with reliable, end-to-end export solutions. Along with a strong focus on eco-friendly jute products—such as jute products, home décor items, handicrafts, etc. From product sourcing and quality inspections to documentation, logistics, and timely delivery, we ensure your shipments are handled with complete professionalism and compliance. With us, exporting becomes smooth, efficient, and worry-free.
          </p>
        </div>

        {/* Service 2 */}
        <div className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-l-4 sm:border-l-8 border-emerald-500 hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl">
          <Users className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-emerald-700 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-emerald-900 mb-4 sm:mb-6">
            Sourcing Agent Services 
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-emerald-800 leading-relaxed line-clamp-4 sm:line-clamp-none">
            We act as your on-ground sourcing partner in India—finding the right manufacturers, negotiating the best prices, and ensuring strict quality standards. With transparent communication and supplier verification, we help you source the perfect products without risk, delays, or hidden costs. Your global procurement becomes easier, faster, and more efficient.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
