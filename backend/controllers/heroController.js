const Hero = require('../models/Hero');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const heroCache = createCache('hero', 10 * 60 * 1000);
const clearHeroCache = () => heroCache.clear();

const defaultHero = {
  title: 'One-Stop Sustainable Packaging Solutions',
  subtitle:
    'Customized Jute Bags, Compostable Bags and Paper Bags for India and Global Markets',
  description:
    'Greenvora Exim helps businesses transition to sustainable packaging through high-quality jute bags, compostable bags and paper bags. From custom branding and printing to bulk supply and export support, we provide end-to-end packaging solutions tailored to your business needs.',

  image: 'https://res.cloudinary.com/dijfpjm2s/image/upload/v1781271915/hero_pztlfl.png',

  cta1: { text: 'Learn More', path: '/learn-more' },
  cta2: { text: 'Contact Us', path: '/contact' },
  features: [
    'Sustainable Packaging Solutions',
    'Custom Branding & Printing',
    'Bulk Supply Support',
    'India & Global Markets',
  ],
  whatWeDo: {
    title: 'What We Do',
    content:
      'We provide sustainable packaging solutions designed to help businesses reduce environmental impact while enhancing brand visibility. Whether you need jute bags, compostable bags and paper bags our team delivers customized packaging solutions backed by quality, reliability, and scalable supply capabilities.',
  },
  keyProducts: [
    {
      title: 'Jute Packaging',
      description: 'Sustainable jute packaging for shopping, gifting, and promotional use.',
      image: 'hero1.png',
    },
    {
      title: 'Compostable Packaging',
      description: 'Eco-friendly packaging solutions designed for a more sustainable future.',
      image: 'hero2.png',
    },
  ],
  whyChoose: {
    title: 'Why Choose Greenvora Exim',
    content:
      'We provide sustainable packaging solutions that help businesses strengthen their brand, reduce environmental impact, and meet their unique packaging requirements through quality products and customization options.',
  },
};

function normalizeHero(doc) {
  if (!doc) return { ...defaultHero };
  return {
    ...defaultHero,
    ...doc,
    cta1: { ...defaultHero.cta1, ...doc.cta1 },
    cta2: { ...defaultHero.cta2, ...doc.cta2 },
    whatWeDo: { ...defaultHero.whatWeDo, ...doc.whatWeDo },
    whyChoose: { ...defaultHero.whyChoose, ...doc.whyChoose },
    features: doc.features?.length ? doc.features : defaultHero.features,
    keyProducts: doc.keyProducts?.length ? doc.keyProducts : defaultHero.keyProducts,
  };
}

exports.getHero = async (req, res) => {
  try {
    const isDev = process.env.NODE_ENV !== 'production';
    if (!isDev) {
      const cached = heroCache.get('main');
      if (cached) {
        setPublicCacheHeaders(res);
        return res.json(cached);
      }
    } else {
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    }

    let hero = await Hero.findOne().lean();
    if (!hero) {
      const created = await Hero.create(defaultHero);
      hero = created.toObject();
    }

    const payload = normalizeHero(hero);
    if (!isDev) {
      heroCache.set('main', payload);
      setPublicCacheHeaders(res);
    }
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ error: 'Server error: ' + error.message });
  }
};

exports.updateHero = async (req, res) => {
  try {
    const update = req.body;
    let hero = await Hero.findOne();

    if (!hero) {
      hero = await Hero.create({ ...defaultHero, ...update });
    } else {
      Object.assign(hero, update);
      await hero.save();
    }

    const payload = normalizeHero(hero.toObject());
    clearHeroCache();
    return res.json({ success: true, hero: payload });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.defaultHero = defaultHero;
exports.clearHeroCache = clearHeroCache;
