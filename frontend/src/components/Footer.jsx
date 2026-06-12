import React from 'react';

const Footer = () => (
  <footer className="bg-emerald-950 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-emerald-100">
        © {new Date().getFullYear()} GREENVORA EXIM. All rights reserved.
      </p>
      <p className="text-emerald-200 mt-2">
        Sustainable Packaging Solutions for India & Global Markets
      </p>
    </div>
  </footer>
);

export default Footer;
