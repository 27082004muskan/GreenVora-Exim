const Hero = require('../models/Hero');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const heroCache = createCache('hero', 10 * 60 * 1000);
const clearHeroCache = () => heroCache.clear();

const defaultHero = {
  title: 'Reliable Export Solutions.',
  subtitle: 'Trusted Global Sourcing.',
  description:
    'We help global buyers source high-quality products from India with transparency, consistency, and dependable supply.',

  cta1: { text: 'View Products', path: '/products' },
  cta2: { text: 'Request a Demo', path: '/contact' },
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
    const cached = heroCache.get('main');
    if (cached) {
      setPublicCacheHeaders(res);
      return res.json(cached);
    }

    const hero = await Hero.findOne().lean();
    const payload = normalizeHero(hero);
    heroCache.set('main', payload);
    setPublicCacheHeaders(res);
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
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
