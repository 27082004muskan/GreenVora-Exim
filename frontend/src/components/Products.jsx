import React, { useState } from 'react';
import bagImage from '../assets/products/bag.png';
import basketImage from '../assets/products/basket.png';
import decorativeItemImage from '../assets/products/decorative_item.png';
import giftImage from '../assets/products/gift.png';
import itemsImage from '../assets/products/items.png';
import mapImage from '../assets/products/map.png';
import ropeImage from '../assets/products/rope.png';
import storageBagImage from '../assets/products/storagebag.png';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Jute Products");
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    {
      id: 1, name: "Jute Bag", category: "Jute Products", 
      description: "Eco-friendly jute shopping bag, durable and biodegradable.", image: bagImage
    },
    {
      id: 2, name: "Jute Basket", category: "Jute Products", 
      description: "Handcrafted storage basket made from premium natural jute fibers.", image: basketImage
    },
    {
      id: 3, name: "Decorative Item", category: "Jute Products", 
      description: "Beautiful jute decorative piece for home and office decoration.", image: decorativeItemImage
    },
    {
      id: 4, name: "Jute Gift Items", category: "Jute Products", 
      description: "Premium jute gift packaging and accessories for special occasions.", image: giftImage
    },
    {
      id: 5, name: "Jute Items", category: "Jute Products", 
      description: "Assorted jute utility items for everyday sustainable use.", image: itemsImage
    },
    {
      id: 6, name: "Jute Mat", category: "Jute Products", 
      description: "Unique jute wall map or decorative geographical art piece.", image: mapImage
    },
    {
      id: 7, name: "Jute Rope", category: "Jute Products", 
      description: "Strong, natural jute rope for industrial and decorative applications.", image: ropeImage
    },
    {
      id: 8, name: "Storage Bag", category: "Jute Products", 
      description: "Large capacity jute storage bag for home organization.", image: storageBagImage
    },
    {
      id: 9, name: "Cotton Fabrics", category: "Textiles & Fabrics", 
      description: "High-quality cotton fabrics for apparel and home textiles.", image: bagImage
    },
    {
      id: 10, name: "Silk Garments", category: "Textiles & Fabrics", 
      description: "Premium silk garments and fabric rolls sourced globally.", image: basketImage
    },
    {
      id: 11, name: "Heavy Machinery", category: "Industrial Equipment", 
      description: "Reliable industrial machinery components for manufacturing.", image: ropeImage
    }
  ];

  const categories = ["All", "Jute Products", "Textiles & Fabrics", "Industrial Equipment"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-25 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our Products
          </h1>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white border border-emerald-200 rounded-xl px-6 py-3 text-lg font-semibold text-emerald-900 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              {selectedCategory}
              <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-emerald-200 rounded-2xl shadow-2xl z-10 opacity-0 translate-y-2 transition-all duration-200">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-emerald-900 hover:bg-emerald-50 hover:text-emerald-800 font-medium rounded-xl transition-all duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl p-6 lg:p-8 border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl overflow-hidden mb-6 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-800 transition-colors">
                {product.name}
              </h3>
              <p className="text-emerald-800 leading-relaxed text-base lg:text-lg mb-2">
                {product.category}
              </p>
              <p className="text-emerald-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
