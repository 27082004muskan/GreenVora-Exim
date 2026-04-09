// controllers/productController.js (UPDATE getProducts)
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const query =
      category && category !== "All" ? { category } : {};

    let products = await Product.find(query).lean();
    
    // ✅ SEED YOUR EXACT CURRENT PRODUCTS (runs once)
    if (products.length === 0) {
      products = await Product.insertMany([
        { name: "Jute Bag", category: "Jute Products", image: "bag.png" },
        { name: "Jute Basket", category: "Jute Products", image: "basket.png" },
       
      ]);
      console.log('✅ All your current products created in MongoDB!');
    }

    // Category filtering
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
