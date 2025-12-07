import { Package } from 'lucide-react';
import React from 'react';

const products = [
  {
    name: "Jute Products",
    description:
      "Eco-friendly and durable jute items crafted from premium natural fibers. Our jute manufacturing combines traditional methods and modern weaving to offer high-quality fabrics, bags, carpets, industrial sacks, and custom packaging. All products are biodegradable, strong, and made for sustainable business needs."
  },
  {
    name: "Textiles & Fabrics",
    description:
      "Wide range of cotton, silk, synthetic fabrics, and garments made with a focus on quality and lasting value."
  },
  {
    name: "Industrial Equipment",
    description:
      "Heavy machinery and manufacturing components sourced from top manufacturers for reliable performance and industry compliance."
  }
];

const Products = () => (
  <section id="products" className="h-full pt-20 pb-8 bg-gradient-to-br from-emerald-50 to-emerald-100 flex flex-col">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center py-8">
      <div className="w-full grid md:grid-cols-3 gap-8">
        {products.map((prod, i) => (
          <div
            key={prod.name}
            className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100"
          >
            <div
              className={`h-48 flex items-center justify-center ${
                i % 2 === 0
                  ? "bg-gradient-to-br from-emerald-600 to-emerald-800"
                  : "bg-gradient-to-br from-emerald-500 to-emerald-700"
              }`}
            >
              <Package className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{prod.name}</h3>
              <p className="text-emerald-800">{prod.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
