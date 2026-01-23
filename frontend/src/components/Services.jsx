import React, { useState, useEffect } from 'react';
import { TrendingUp, Users } from 'lucide-react';

const IconMap = {
  TrendingUp: TrendingUp,
  Users: Users
  // Add more icons as needed
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Services fetch error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="text-center">Loading Services...</div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Our Services
          </h1>
        </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">


          {services.map((service, index) => {
            const Icon = IconMap[service.icon] || TrendingUp;
            return (
              <div key={service._id || index} className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-l-4 sm:border-l-8 border-emerald-500 hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl">
                <Icon className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-emerald-700 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-emerald-900 mb-4 sm:mb-6">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg-2xl text-emerald-800 leading-relaxed line-clamp-4 sm:line-clamp-none">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
