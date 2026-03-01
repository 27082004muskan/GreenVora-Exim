import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'products', label: 'Products', path: '/products', hasDropdown: true },
  { id: 'contact', label: 'Contact Us', path: '/contact' },
];

const productsSubLinks = [
  { id: 'domestic', label: 'Domestic', path: '/products/domestic' },
  { id: 'international', label: 'International', path: '/products/international' },
];

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => 
    location.pathname === path || 
    (path === '/products' && location.pathname.startsWith('/products/'));

  const handleLinkClick = (link) => {
    if (link.id === 'home') {
      location.pathname === '/' && scrollToSection ? scrollToSection('home') : navigate('/');
    } else if (link.id === 'products') {
      navigate('/products/international');
    } else {
      navigate(link.path);
    }
    setIsMenuOpen(false);
    setShowProductsDropdown(false);
  };

  const handleSubClick = (subLink) => {
    navigate(subLink.path);
    setIsMenuOpen(false);
    setShowProductsDropdown(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border border-emerald-100 rounded-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick(navLinks[0])}>
  <img 
    src={logo} 
    alt="GE Expo Logo"
    className="h-11 w-10 object-cover shadow-sm flex items-center justify-center" 
  />
  <span className="ml-1 text-xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent tracking-wide select-none">Expo</span>
</div>


          {/* Desktop - HOVER DROPDOWN (NO DASH) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => setShowProductsDropdown(true)}
                  onMouseLeave={() => setShowProductsDropdown(false)}
                >
                  <button
                    onClick={() => handleLinkClick(link)}
                    className={`flex items-center gap-1 px-3 py-2 text-base font-medium transition-all rounded-lg hover:bg-emerald-50 ${
                      isActive(link.path) ? 'text-emerald-700 bg-emerald-50 font-semibold' : ''
                    }`}
                  >
                    {link.label} 
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showProductsDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showProductsDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-xl border border-emerald-100 shadow-xl rounded-3xl py-2 min-w-40 z-50">
                      {productsSubLinks.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleSubClick(sub)}
                          className={`block w-full text-left px-4 py-2 text-sm font-medium hover:bg-emerald-50 transition-colors rounded-lg ${
                            location.pathname === sub.path 
                              ? 'bg-emerald-100 text-emerald-700 font-semibold' 
                              : 'text-emerald-900'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link)}
                  className={`px-3 py-2 text-base font-medium transition-all rounded-lg hover:bg-emerald-50 ${
                    isActive(link.path) ? 'text-emerald-700 bg-emerald-50 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-full hover:bg-emerald-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-emerald-800" /> : <Menu className="h-6 w-6 text-emerald-800" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-3 md:hidden">
          <div className="bg-white/90 backdrop-blur-xl border border-emerald-100 shadow-xl rounded-3xl p-4 space-y-2">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.id}>
                  <button
                    className={`w-full text-left py-3 px-4 rounded-2xl flex items-center justify-between font-medium transition-all ${
                      isActive(link.path) 
                        ? 'text-emerald-700 bg-emerald-50 border-l-4 border-emerald-500' 
                        : 'text-emerald-900 hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400'
                    }`}
                  >
                    {link.label} <ChevronDown className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link)}
                  className={`block w-full text-left py-3 px-4 rounded-2xl font-medium transition-all ${
                    isActive(link.path) 
                      ? 'text-emerald-700 bg-emerald-50 border-l-4 border-emerald-500' 
                      : 'text-emerald-900 hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
