import { Award, Globe, Leaf, Shield, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const LearnMore = () => (
  <section id="learn-more" className="pt-20 pb-12 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-900 mb-6">
          About GreenVora Exim
        </h1>
        <p className="text-lg sm:text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
          Your trusted partner in global trade, specializing in sustainable sourcing and export solutions 
          that connect businesses worldwide with quality products and reliable services.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100">
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-emerald-800" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Global Reach</h3>
          <p className="text-emerald-800 leading-relaxed">
            We facilitate international trade across multiple continents, helping businesses expand their 
            market presence and access new opportunities worldwide.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100">
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-emerald-800" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Trusted Quality</h3>
          <p className="text-emerald-800 leading-relaxed">
            Our rigorous quality control processes ensure that every product meets international standards 
            and exceeds customer expectations.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100">
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Leaf className="h-8 w-8 text-emerald-800" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Sustainable Practices</h3>
          <p className="text-emerald-800 leading-relaxed">
            We are committed to eco-friendly solutions, with a special focus on sustainable jute products 
            and environmentally conscious business practices.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100">
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-emerald-800" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Growth Focused</h3>
          <p className="text-emerald-800 leading-relaxed">
            Our export services are designed to help your business scale efficiently, with streamlined 
            processes and expert guidance at every step.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100">
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-emerald-800" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Expert Team</h3>
          <p className="text-emerald-800 leading-relaxed">
            Our experienced sourcing agents work as your on-ground partners, providing local expertise 
            and transparent communication throughout the process.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-emerald-100">
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-emerald-800" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Proven Track Record</h3>
          <p className="text-emerald-800 leading-relaxed">
            With years of experience in international trade, we have built a reputation for reliability, 
            timely delivery, and exceptional customer service.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl shadow-2xl p-8 sm:p-12 text-white mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Why Choose GreenVora Exim?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Comprehensive Export Solutions</h4>
                <p className="text-emerald-100">
                  From documentation to logistics, we handle every aspect of your export needs with 
                  complete professionalism and compliance.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Quality Assurance</h4>
                <p className="text-emerald-100">
                  Strict quality inspections and supplier verification ensure you receive products that 
                  meet your exact specifications.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Transparent Pricing</h4>
                <p className="text-emerald-100">
                  No hidden costs or surprises. We provide clear, competitive pricing with full 
                  transparency throughout the process.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 rounded-full p-2 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Eco-Friendly Focus</h4>
                <p className="text-emerald-100">
                  Specializing in sustainable jute products and environmentally responsible sourcing 
                  practices for a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
          Ready to Start Your Global Trade Journey?
        </h3>
        <p className="text-lg text-emerald-700 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help your business expand internationally with our comprehensive 
          export and sourcing services.
        </p>
      </div>
    </div>
  </section>
);

export default LearnMore;

