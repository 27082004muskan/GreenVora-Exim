// src/components/Products.jsx
import React, { useState, useEffect, useMemo } from "react";
import bagImage from "../assets/products/bag.png";
import basketImage from "../assets/products/basket.png";
import decorativeItemImage from "../assets/products/decorative_item.png";
import giftImage from "../assets/products/gift.png";
import itemsImage from "../assets/products/items.png";
import mapImage from "../assets/products/map.png";
import ropeImage from "../assets/products/rope.png";
import storageBagImage from "../assets/products/storagebag.png";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const categories = ["All", "Jute Products", "Textiles & Fabrics", "Industrial Equipment"];

  // Optional: keep this if some products still use local filenames like "bag.png"
  const imageMap = useMemo(
    () => ({
      "bag.png": bagImage,
      "basket.png": basketImage,
      "decorative_item.png": decorativeItemImage,
      "gift.png": giftImage,
      "items.png": itemsImage,
      "map.png": mapImage,
      "rope.png": ropeImage,
      "storagebag.png": storageBagImage,
    }),
    []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const params =
          selectedCategory && selectedCategory !== "All"
            ? `?category=${encodeURIComponent(selectedCategory)}`
            : "";

        // Make sure this port matches your backend (3000 as per your setup)
        const res = await fetch(`http://localhost:3000/api/products${params}`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  // Backend already filters, so just use products
  const filteredProducts = products;

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
              <svg
                className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-emerald-200 rounded-2xl shadow-2xl z-10">
                {categories.map((category) => (
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

        {/* Loading & Error */}
        {loading && <p className="text-center text-emerald-700 mb-4">Loading products...</p>}
        {error && <p className="text-center text-red-600 mb-4">{error}</p>}

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            // If image is a full URL (Cloudinary), use it directly; otherwise fall back to local map
            const imgSrc =
              product.image && product.image.startsWith("http")
                ? product.image
                : imageMap[product.image] || null;

            return (
              <div
                key={product._id || product.id}
                className="group bg-white rounded-2xl p-3 sm:p-4 lg:p-6 border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Image */}
                <div className="w-full h-20 sm:h-24 lg:h-32 xl:h-36 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg overflow-hidden mb-2 sm:mb-3 lg:mb-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={() => console.log("Broken URL:", imgSrc)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-emerald-700">
                      No Image
                    </div>
                  )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
