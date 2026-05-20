const Service = require('../models/Services');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const servicesCache = createCache('services', 10 * 60 * 1000);

exports.getServices = async (req, res) => {
  try {
    const cached = servicesCache.get('all');
    if (cached) {
      setPublicCacheHeaders(res);
      return res.json(cached);
    }

    const services = await Service.find().lean();
    servicesCache.set('all', services);
    setPublicCacheHeaders(res);
    return res.json(services);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
