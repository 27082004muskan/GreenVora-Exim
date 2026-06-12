const About = require('../models/About');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const aboutCache = createCache('about', 10 * 60 * 1000);
const clearAboutCache = () => aboutCache.clear();

const defaultAbout = {
  heading: 'Welcome To Greenvora Exim',
  aboutUs: {
    title: 'About Us',
    content:
      'Greenvora Exim is a growing import and export company from India, dedicated to delivering high-quality products with a strong focus on reliability, sustainability, and smooth end-to-end service. We believe in building long-term partnerships through transparent communication, consistent quality, and a customer-first approach.',
    image: 'aim.png',
  },
  vision: {
    title: 'Our Vision',
    content:
      'To become a trusted partner for sustainable packaging solutions, empowering businesses across India and global markets with innovative, customizable, and eco-friendly packaging that creates a positive impact on both brands and the environment.',
    image: 'vision.png',
  },
};

function normalizeAbout(doc) {
  if (!doc) return { ...defaultAbout };
  return {
    ...defaultAbout,
    ...doc,
    aboutUs: { ...defaultAbout.aboutUs, ...doc.aboutUs },
    vision: { ...defaultAbout.vision, ...doc.vision },
  };
}

exports.getAbout = async (req, res) => {
  try {
    const cached = aboutCache.get('main');
    if (cached) {
      setPublicCacheHeaders(res);
      return res.json(cached);
    }

    const aboutData = await About.findOne().lean();
    if (!aboutData) {
      return res.status(503).json({ error: 'About content is loading', retry: true });
    }

    const payload = normalizeAbout(aboutData);
    aboutCache.set('main', payload);
    setPublicCacheHeaders(res);
    return res.json(payload);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateAbout = async (req, res) => {
  try {
    const update = req.body;
    let about = await About.findOne();

    if (!about) {
      about = await About.create({ ...defaultAbout, ...update });
    } else {
      if (update.heading) about.heading = update.heading;
      if (update.aboutUs) about.aboutUs = { ...about.aboutUs.toObject(), ...update.aboutUs };
      if (update.vision) about.vision = { ...about.vision.toObject(), ...update.vision };
      await about.save();
    }

    const payload = normalizeAbout(about.toObject());
    clearAboutCache();
    return res.json({ success: true, about: payload });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.defaultAbout = defaultAbout;
exports.clearAboutCache = clearAboutCache;
