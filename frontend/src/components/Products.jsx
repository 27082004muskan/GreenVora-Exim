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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const products = [
     { id: 1, name: "Jute Bag", category: "Jute Products", image: bagImage },
    { id: 2, name: "Jute Basket", category: "Jute Products", image: basketImage },
    { id: 3, name: "Decorative Item", category: "Jute Products", image: decorativeItemImage },
    { id: 4, name: "Jute Gift Items", category: "Jute Products", image: giftImage },
    { id: 5, name: "Jute Items", category: "Jute Products", image: itemsImage },
    { id: 6, name: "Jute Map", category: "Jute Products", image: mapImage },
    { id: 7, name: "Jute Rope", category: "Jute Products", image: ropeImage },
    { id: 8, name: "Storage Bag", category: "Jute Products", image: storageBagImage }
  ];

  const categories = ["All", "Jute Products", "Textiles & Fabrics", "Industrial Equipment"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-27 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our Products
          </h1>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="bg-white border border-emerald-200 rounded-xl px-6 py-3 text-lg font-semibold text-emerald-900 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              {selectedCategory} ({filteredProducts.length})
              <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-emerald-200 rounded-2xl shadow-2xl z-10">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-emerald-900 hover:bg-emerald-50 font-medium rounded-xl transition-all block"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid - 2 columns mobile, 3 desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl p-3 sm:p-4 lg:p-6 border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Ultra-small images for mobile 2-col layout */}
              <div className="w-full h-20 sm:h-24 lg:h-32 xl:h-36 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg overflow-hidden mb-2 sm:mb-3 lg:mb-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => { 
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRTVFRkYxIi8+PHRleHQgeD0iNTAlIiB5PSI5MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI5IiBmaWxsPSIjRTJFMkUyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>
              
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-emerald-900 mb-1 sm:mb-2 group-hover:text-emerald-800 transition-colors line-clamp-2">
                {product.name}
              </h3>
              <p className="text-emerald-700 text-xs sm:text-sm font-medium mb-1">
                {product.category}
              </p>
              <p className="text-emerald-600 text-xs leading-tight line-clamp-2">
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
