import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'products', label: 'Products', path: '/products' },
  { id: 'contact', label: 'Contact Us', path: '/contact' },
];

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleClick = (link) => {
    if (link.id === 'home') {
      if (location.pathname === '/' && scrollToSection) {
        scrollToSection('home');
      } else {
        navigate('/');
      }
    } else {
      navigate(link.path);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      {/* Outer wrapper to give curved card effect */}
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border border-emerald-100 rounded-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo text badge */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleClick(navLinks[0])}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white text-lg font-bold shadow-sm">
              GE
            </div>
            <span className="ml-1 text-xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent tracking-wide select-none">
              Expo
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link)}
                className={`relative px-3 py-2 text-sm lg:text-base font-medium text-emerald-900 transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-emerald-700 after:scale-x-100'
                    : 'hover:text-emerald-700 after:scale-x-0 hover:after:scale-x-100'
                } after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-[3px] after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-400 after:transition-transform after:origin-center after:rounded-full`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full hover:bg-emerald-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-emerald-800" />
            ) : (
              <Menu className="h-6 w-6 text-emerald-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown with rounded card shape */}
      {isMenuOpen && (
        <div className="mt-3 md:hidden">
          <div className="bg-white/90 backdrop-blur-xl border border-emerald-100 shadow-xl rounded-3xl overflow-hidden">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleClick(link)}
                  className={`block w-full text-left font-medium py-3 px-4 transition-all duration-300 rounded-2xl ${
                    isActive(link.path)
                      ? 'text-emerald-700 bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-500'
                      : 'text-emerald-900 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 hover:border-l-4 hover:border-emerald-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
