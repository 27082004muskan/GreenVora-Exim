const Hero = require('../models/Hero');
const About = require('../models/About');
const Service = require('../models/Services');
const Product = require('../models/Product');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const bootstrapCache = createCache('bootstrap', 5 * 60 * 1000);

const defaultHero = {
  title: 'GREENVORA EXIM',
  subtitle: 'Empowering Global Trade & Trusted Sourcing',
  description:
    'Helping businesses find comprehensive export and sourcing solutions worldwide with a focus on quality, reliability, and sustainable partnerships.',
  cta1: { text: 'View Products', path: '/products' },
  cta2: { text: 'Request a Demo', path: '/contact' },
};

exports.getBootstrap = async (req, res) => {
  try {
    const cached = bootstrapCache.get('main');
    if (cached) {
      setPublicCacheHeaders(res);
      return res.json(cached);
    }

    const [hero, about, services, products] = await Promise.all([
      Hero.findOne().lean(),
      About.findOne().lean(),
      Service.find().lean(),
      Product.find()
        .select('name category image description createdAt')
        .sort({ createdAt: -1 })
        .lean(),
    ]);

    const payload = {
      hero: hero || defaultHero,
      about,
      services: services || [],
      products: products || [],
    };

    bootstrapCache.set('main', payload);
    setPublicCacheHeaders(res);
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
