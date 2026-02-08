import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { API_BASE } from '../api';

const Enquiry = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message || 'Submission failed');
      }
  }catch(error){
    console.error('Submit error:', error);
    toast.error('Network error—try again');
}

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen -mt-[80px] pt-[150px] pb-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 relative"
    >
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
        </div>

        {/* Side-by-side layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/95 rounded-xl shadow-2xl p-6 sm:p-7 w-full backdrop-blur-xl space-y-4">
            <div>
              <label className="block text-emerald-900 font-semibold mb-1.5">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-emerald-900 font-semibold mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-emerald-900 font-semibold mb-1.5">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className="w-full px-3 py-2.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                placeholder="Tell us about your requirements..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-700 text-white py-3 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Info cards */}
          <div className="text-white space-y-5">
            <div className="bg-emerald-800/50 rounded-xl p-5 backdrop-blur">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-emerald-300" />
                <div>
                  <h3 className="font-bold text-lg mb-1.5">Our Office</h3>
                  <p className="text-emerald-100 text-sm">C-308, Lohia Nagar,</p>
                  <p className="text-emerald-100 text-sm">Ghaziabad, Uttar Pradesh (201001)</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800/50 rounded-xl p-5 backdrop-blur">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0 text-emerald-300" />
                <div>
                  <h3 className="font-bold text-lg mb-1.5">Phone</h3>
                  <p className="text-emerald-100 text-sm">+91 9319936559</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800/50 rounded-xl p-5 backdrop-blur">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0 text-emerald-300" />
                <div>
                  <h3 className="font-bold text-lg mb-1.5">Email</h3>
                  <p className="text-emerald-100 text-sm">greenvoraexim@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
