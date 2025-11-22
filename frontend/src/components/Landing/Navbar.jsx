import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo_gv.png'; // update this path if needed

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'contact', label: 'Contact Us' },
];

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      {/* Top accent bar */}
      <div className="w-full h-1 bg-blue-900" />
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Name */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="GREENVORA EXIM Logo" className="h-10 w-auto" />
            <span className="ml-2 text-2xl font-bold text-blue-900 tracking-wide select-none">GREENVORA EXIM</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-3 py-2 font-medium text-blue-900 bg-white hover:text-blue-600 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6 text-blue-900" /> : <Menu className="h-6 w-6 text-blue-900" />}
          </button>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => { scrollToSection(link.id); setIsMenuOpen(false); }}
                className="block w-full text-left text-blue-900 font-medium py-2 hover:bg-blue-50 transition rounded"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
