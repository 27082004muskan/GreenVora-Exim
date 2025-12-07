import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo_gv.png';

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

  const handleClick = (link) => {
    if (link.id === 'home') {
      // agar already home par ho to scroll, warna route change
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
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-200">
      <div className="w-full h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-700" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleClick(navLinks[0])}
          >
            <img src={logo} alt="GREENVORA EXIM Logo" className="h-10 w-auto drop-shadow-md" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent tracking-wide select-none">
              GREENVORA EXIM
            </span>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link)}
                className="relative px-3 py-2 font-medium text-emerald-900 hover:text-emerald-700 transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:rounded-full"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-emerald-800" />
            ) : (
              <Menu className="h-6 w-6 text-emerald-800" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-200 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link)}
                className="block w-full text-left text-emerald-900 font-medium py-3 px-4 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 transition-all duration-300 rounded-xl border-l-4 border-transparent hover:border-emerald-500"
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
