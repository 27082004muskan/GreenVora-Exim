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
  const [showMobileProducts, setShowMobileProducts] = useState(false);
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
    setShowMobileProducts(false);
  };

  const handleSubClick = (subLink) => {
    navigate(subLink.path);
    setIsMenuOpen(false);
    setShowProductsDropdown(false);
    setShowMobileProducts(false);
  };

  const toggleMobileProducts = () => {
    setShowMobileProducts(!showMobileProducts);
  };

  const handleMouseEnter = () => setShowProductsDropdown(true);
  const handleMouseLeave = () => setShowProductsDropdown(false);

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 bg-white border-b border-gray-200 px-6 py-2 rounded-4xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick(navLinks[0])}>
          <img src={logo} alt="GE Expo Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">Expo</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.id} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className={`px-4 py-2 text-base font-medium transition-colors ${
                    isActive(link.path) 
                      ? 'text-emerald-700 bg-emerald-50 font-semibold' 
                      : 'text-gray-700 hover:text-emerald-700'
                  }`}
                >
                  {link.label} 
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showProductsDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showProductsDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-md py-1 z-50">
                    {productsSubLinks.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubClick(sub)}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                          location.pathname === sub.path 
                            ? 'bg-emerald-50 text-emerald-700 font-medium' 
                            : 'text-gray-800'
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
                className={`px-4 py-2 text-base font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-emerald-700 bg-emerald-50 font-semibold' 
                    : 'text-gray-700 hover:text-emerald-700'
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
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 pb-4 border-b border-gray-200">
          <div className="space-y-1 px-2">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.id}>
                  <button
                    onClick={toggleMobileProducts}
                    className={`w-full text-left py-3 px-4 rounded-lg flex items-center justify-between font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-emerald-700 bg-emerald-50 font-semibold'
                        : 'text-gray-800 hover:bg-gray-100'
                    } ${showMobileProducts ? 'rounded-b-none' : ''}`}
                  >
                    {link.label} 
                    <ChevronDown className={`h-5 w-5 transition-transform ${showMobileProducts ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showMobileProducts && (
                    <div className="pl-6 space-y-1 mt-1">
                      {productsSubLinks.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleSubClick(sub)}
                          className={`block w-full text-left py-2 px-4 rounded-md text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${
                            location.pathname === sub.path 
                              ? 'bg-emerald-50 text-emerald-700 font-semibold' 
                              : 'text-gray-800'
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
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-emerald-700 bg-emerald-50 font-semibold'
                      : 'text-gray-800 hover:bg-gray-100'
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
