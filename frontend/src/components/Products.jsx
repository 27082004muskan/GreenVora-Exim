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
  <section className="py-26 bg-emerald-50">
    <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent mb-6">
          Our Products
        </h1>
    
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((prod) => (
          <div
            key={prod.name}
            className="group bg-white rounded-2xl p-8 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:from-emerald-600 group-hover:to-emerald-800 transition-all">
              <Package className="h-16 w-16 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-800 transition-colors">
              {prod.name}
            </h3>
            <p className="text-emerald-800 leading-relaxed text-lg">
              {prod.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
