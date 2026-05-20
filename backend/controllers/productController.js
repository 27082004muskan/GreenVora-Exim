const Product = require('../models/Product');
const { createCache, setPublicCacheHeaders } = require('../utils/cache');

const productsCache = createCache('products', 10 * 60 * 1000);

async function loadAllProducts() {
  const cached = productsCache.get('ALL');
  if (cached) return cached;

  const products = await Product.find()
    .select('name category image description createdAt')
    .sort({ createdAt: -1 })
    .lean();

  productsCache.set('ALL', products);
  return products;
}

exports.getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const normalizedCategory = category && category !== 'All' ? category : '';
    const allProducts = await loadAllProducts();

    const data = normalizedCategory
      ? allProducts.filter((p) => p.category === normalizedCategory)
      : allProducts;

    setPublicCacheHeaders(res);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.warmProductsCache = loadAllProducts;

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    productsCache.clear();
    return res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
