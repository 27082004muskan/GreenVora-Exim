// src/components/Domestic_Products.jsx
import React, { useState, useEffect } from "react";
import { API_BASE } from "../api";

const DomesticProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const categories = ["All", "Jute Products", "Textiles & Fabrics", "Industrial Equipment"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const params =
          selectedCategory && selectedCategory !== "All"
            ? `?category=${encodeURIComponent(selectedCategory)}`
            : "";

        // ✅ CONNECTED TO DOMESTIC BACKEND
        const res = await fetch(`${API_BASE}/api/domestic-products${params}`);
        if (!res.ok) {
          throw new Error("Failed to fetch domestic products");
        }

        const data = await res.json();
        setProducts(data.products || data);
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
          {/* Fixed gradient class */}
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
            Domestic Products
          </h1>
        </div>

        {/* Filter Dropdown - EXACT SAME */}
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
        {loading && <p className="text-center text-emerald-700 mb-4">Loading domestic products...</p>}
        {error && <p className="text-center text-red-600 mb-4">{error}</p>}

        {/* Products Grid - EXACT SAME STYLING */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id || product.id}
              className="group bg-white rounded-2xl p-3 sm:p-4 lg:p-6 border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Image - Simplified for domestic (no local assets needed) */}
              <div className="w-full h-20 sm:h-24 lg:h-32 xl:h-36 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg overflow-hidden mb-2 sm:mb-3 lg:mb-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">
                {product.image && product.image.startsWith("http") ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={() => console.log("Broken URL:", product.image)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-emerald-700 bg-emerald-200/50">
                    {product.category?.charAt(0) || 'D'}
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
                {product.description || 'Premium domestic product'}
              </p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && !loading && (
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-emerald-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-2">No Domestic Products</h3>
            <p className="text-emerald-600">Your first domestic product will appear here automatically</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DomesticProducts;
