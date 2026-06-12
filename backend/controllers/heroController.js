const Hero = require('../models/Hero');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const heroCache = createCache('hero', 10 * 60 * 1000);

const defaultHero = {
  title: 'One-Stop Sustainable Packaging Solutions',
  subtitle: 'Empowering Global Trade & Trusted Sourcing',
  description:
    'Helping businesses find comprehensive export and sourcing solutions worldwide with a focus on quality, reliability, and sustainable partnerships.',
  cta1: { text: 'View Products', path: '/products' },
  cta2: { text: 'Request a Demo', path: '/contact' },
};

exports.getHero = async (req, res) => {
  try {
    const cached = heroCache.get('main');
    if (cached) {
      setPublicCacheHeaders(res);
      return res.json(cached);
    }

    const hero = await Hero.findOne().lean();
    const payload = hero || defaultHero;
    heroCache.set('main', payload);
    setPublicCacheHeaders(res);
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};
