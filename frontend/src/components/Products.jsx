// src/components/Products.jsx
import React, { useState, useEffect, useMemo } from "react";
import { clearProductsCache, getProducts, getProductsFromCache } from "../apiClient";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const categories = ["All", "Jute Packaging", "Compostable Packaging","Paper Packaging", "Others"];

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
    let cancelled = false;

    const load = async () => {
      const cached = getProductsFromCache(selectedCategory);
      if (cached) {
        setProducts(cached);
        setLoading(false);
        setError("");
        return;
      }

      setLoading(true);
      setError("");
      try {
        const data = await getProducts(selectedCategory);
        if (!cancelled) {
          setProducts(data);
        }
      } catch {
        if (!cancelled) {
          setProducts([]);
          setError("Server is waking up. Please wait and tap Retry.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [selectedCategory, refreshKey]);

  const filteredProducts = products;

  return (
    <section className="py-27 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our Products
          </h1>
        </div>

        {/* Filters */}
        <div className="mb-10">
          {/* Mobile: pill chips row (no scrollbar) */}
          <div className="flex md:hidden flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-emerald-900 border-emerald-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Desktop: centered dropdown */}
          <div className="hidden md:flex justify-center mt-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white border border-emerald-200 rounded-xl px-6 py-3 text-lg font-semibold text-emerald-900 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 min-w-[220px] justify-between"
              >
               <span>
  {selectedCategory}
</span>
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
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-emerald-200 rounded-2xl shadow-2xl z-10">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-6 py-3 text-emerald-900 hover:bg-emerald-50 font-medium transition-all"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Loading & Error */}
        {loading && <p className="text-center text-emerald-700 mb-4">Loading products...</p>}
        {error && <p className="text-center text-red-600 mb-4">{error}</p>}

        {/* Products Grid / Empty State */}
        {!loading && filteredProducts.length === 0 ? (
          <div className="max-w-xl mx-auto bg-white border border-emerald-200 rounded-2xl shadow-md px-6 py-8 text-center">
            <div className="text-4xl mb-3">🛍️</div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">No products found</h3>
            <p className="text-emerald-700 mb-5">
              {selectedCategory === "All"
                ? "There are no products to display right now."
                : `No products are available in "${selectedCategory}".`}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {selectedCategory !== "All" && (
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
                >
                  Show All Products
                </button>
              )}
              <button
                onClick={() => {
                  clearProductsCache();
                  setRefreshKey((k) => k + 1);
                }}
                className="px-4 py-2 rounded-lg border border-emerald-300 text-emerald-800 font-medium hover:bg-emerald-50 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
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
                  <div className="w-50 h-60 bg-linear-to-br from-emerald-100 to-emerald-200 rounded-lg overflow-hidden mb-2 sm:mb-3 lg:mb-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-emerald-700">
                        No Image
                      </div>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-md font-bold text-emerald-900 mb-1 sm:mb-2 group-hover:text-emerald-800 transition-colors line-clamp-2">
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
        )}
      </div>
    </section>
  );
};

export default Products;
