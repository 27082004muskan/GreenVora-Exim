import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Shield, Leaf, Globe, Award, Package, Sparkles, RefreshCw } from 'lucide-react';
import { apiGet, clearServicesCache } from '../apiClient';

const ICON_MAP = {
  TrendingUp,
  Users,
  Shield,
  Leaf,
  Globe,
  Award,
  Package,
  Sparkles,
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    if (retryCount > 0) {
      clearServicesCache();
    }

    apiGet('/api/services', { cacheKey: 'services', useCache: retryCount === 0 })
      .then((data) => {
        if (!active) return;
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
      })
      .catch((err) => {
        if (!active) return;
        console.error('Services fetch error:', err);
        setError(err.message || 'Failed to load services');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [retryCount]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-emerald-700 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive export and sourcing solutions tailored for global business success.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        )}

        {error && !loading && (
          <div className="max-w-md mx-auto text-center p-6 bg-red-50 rounded-2xl border border-red-200 shadow-sm mb-10">
            <p className="text-red-600 font-medium mb-4">{error}</p>
            <button
              onClick={() => {
                clearServicesCache();
                setRetryCount((c) => c + 1);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow-md"
            >
              <RefreshCw className="w-4 h-4" /> Retry Loading
            </button>
          </div>
        )}

        {!loading && !error && services.length === 0 && (
          <div className="text-center py-12 text-emerald-800 font-medium">
            No services currently available.
          </div>
        )}

        {!loading && !error && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComp = ICON_MAP[service.icon] || Sparkles;

              return (
                <div
                  key={service._id || index}
                  className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-l-4 sm:border-l-8 border-emerald-500 hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="p-3.5 bg-emerald-600 text-white rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-emerald-800 leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
