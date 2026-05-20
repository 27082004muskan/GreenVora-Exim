const DomesticProduct = require('../models/DomesticProduct');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const domesticCache = createCache('domestic', 10 * 60 * 1000);

exports.getDomesticProducts = async (req, res) => {
  try {
    let products = domesticCache.get('ALL');

    if (!products) {
      products = await DomesticProduct.find().lean();
      domesticCache.set('ALL', products);
    }

    const { category } = req.query;
    const filtered =
      category && category !== 'All'
        ? products.filter((product) => product.category === category)
        : products;

    setPublicCacheHeaders(res);
    return res.json({ success: true, products: filtered });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
