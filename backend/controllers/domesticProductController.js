const DomesticProduct = require('../models/DomesticProduct');

exports.getDomesticProducts = async (req, res) => {
  try {
    let products = await DomesticProduct.find();
    
    if (products.length === 0) {
      products = await DomesticProduct.insertMany([{
        name: "Handmade Jute Shopping Bag", 
        category: "Jute Products", 
        image: "jute-bag.png",
        description: "Eco-friendly jute bag perfect for shopping"
      }]);
      console.log('✅ Domestic product seeded!');
    }

    const { category } = req.query;
    if (category && category !== 'All') {
      products = products.filter(product => product.category === category);
    }

    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
