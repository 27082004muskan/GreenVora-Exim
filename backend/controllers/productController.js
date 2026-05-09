const mongoose = require('mongoose');
const Product = require('../models/Product');

// Small in-memory cache to reduce repeated DB reads for same filter.
const CACHE_TTL_MS = 60 * 1000;
const productsCache = new Map();
const clearProductsCache = () => productsCache.clear();

exports.getProducts = async (req, res) => {
  try {
    // If Mongo isn't connected, avoid throwing and let the UI render gracefully.
    // Frontend expects an array here.
    if (mongoose.connection.readyState !== 1) {
      return res.json([]);
    }

    const { category } = req.query;
    const normalizedCategory = category && category !== 'All' ? category : '';
    const cacheKey = normalizedCategory || 'ALL';
    const cached = productsCache.get(cacheKey);

    if (cached && cached.expiresAt > Date.now()) {
      return res.json(cached.data);
    }

    const query = normalizedCategory ? { category: normalizedCategory } : {};

    const products = await Product.find(query)
      .select('name category image description createdAt')
      .sort({ createdAt: -1 })
      .lean();

    productsCache.set(cacheKey, {
      data: products,
      expiresAt: Date.now() + CACHE_TTL_MS,
    });

    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' });
    }

    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    clearProductsCache();
    return res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
