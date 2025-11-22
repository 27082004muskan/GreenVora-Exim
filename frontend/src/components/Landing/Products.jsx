import React from 'react';
import { Package } from 'lucide-react';

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
  <section id="products" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Products</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Quality products sourced from trusted suppliers worldwide
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((prod, i) => (
          <div key={prod.name} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className={`h-48 flex items-center justify-center ${i % 2 === 0 ? "bg-gradient-to-br from-blue-600 to-blue-800" : "bg-gradient-to-br from-blue-700 to-blue-900"}`}>
              <Package className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">{prod.name}</h3>
              <p className="text-gray-700">{prod.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Products;
