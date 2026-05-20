const About = require('../models/About');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const aboutCache = createCache('about', 10 * 60 * 1000);

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

    aboutCache.set('main', aboutData);
    setPublicCacheHeaders(res);
    return res.json(aboutData);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
