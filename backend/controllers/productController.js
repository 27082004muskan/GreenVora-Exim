// controllers/productController.js (UPDATE getProducts)
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    
    // ✅ SEED YOUR EXACT CURRENT PRODUCTS (runs once)
    if (products.length === 0) {
      products = await Product.insertMany([
        { name: "Jute Bag", category: "Jute Products", image: "bag.png" },
        { name: "Jute Basket", category: "Jute Products", image: "basket.png" },
        { name: "Decorative Item", category: "Jute Products", image: "decorative_item.png" },
        { name: "Jute Gift Items", category: "Jute Products", image: "gift.png" },
        { name: "Jute Items", category: "Jute Products", image: "items.png" },
        { name: "Jute Map", category: "Jute Products", image: "map.png" },
        { name: "Jute Rope", category: "Jute Products", image: "rope.png" },
        { name: "Storage Bag", category: "Jute Products", image: "storagebag.png" }
      ]);
      console.log('✅ All your current products created in MongoDB!');
    }

    // Category filtering
    const { category } = req.query;
    if (category && category !== 'All') {
      products = products.filter(product => product.category === category);
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
