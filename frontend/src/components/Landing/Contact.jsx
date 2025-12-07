import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Enquiry = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with us to discuss your international trade needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button onClick={handleSubmit} className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition transform hover:scale-105 shadow-lg">
                Send Message
              </button>
            </div>
          </div>
          <div className="text-white space-y-8">
            <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 backdrop-blur">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Our Office</h3>
                  <p className="text-gray-200">C-308, Lohia Nagar,</p>
                  {/* <p className="text-gray-200">International Business District</p> */}
                  <p className="text-gray-200">Ghaziabad, Uttar Pradesh(201001)</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 backdrop-blur">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Phone</h3>
                  <p className="text-gray-200">+91 9319936559</p>
                  {/* <p className="text-gray-200">+91 98765 43210</p> */}
                </div>
              </div>
            </div>
            <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 backdrop-blur">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <p className="text-gray-200">info@greenvoraexim.com</p>
                  {/* <p className="text-gray-200">sales@greenvoraexim.com</p> */}
                </div>
              </div>
            </div>
            <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 backdrop-blur">
              <h3 className="font-bold text-xl mb-4">Business Hours</h3>
              <p className="text-gray-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-200">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-200">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
