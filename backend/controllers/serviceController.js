const Service = require('../models/Services');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const servicesCache = createCache('services', 10 * 60 * 1000);

const clearServicesCache = () => servicesCache.clear();

exports.getServices = async (req, res) => {
  try {
    const isDev = process.env.NODE_ENV !== 'production';

    if (!isDev) {
      const cached = servicesCache.get('all');
      if (cached) {
        setPublicCacheHeaders(res);
        return res.json(cached);
      }
    } else {
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    }

    const services = await Service.find().lean();
    if (!isDev) {
      servicesCache.set('all', services);
      setPublicCacheHeaders(res);
    }

    return res.json(services);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.clearServicesCache = clearServicesCache;
