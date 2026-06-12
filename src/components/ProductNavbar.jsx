import React, { useState } from 'react';
import { Menu, X, HelpCircle, Settings, Grid, ChevronRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import logoImage from '../assets/logo.png';
import navbarBg from '../assets/navbarbg.png';
import gridMenuIcon from '../assets/Menu.png';

const ProductNavbar = () => {
  const { currentPage, navigateTo } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Company', id: 'company' },
    { name: 'Services', id: 'services' },
    { name: 'Products', id: 'products' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    if (id === 'home' || id === 'products') {
      navigateTo(id);
    } else {
      // For items not fully routed yet, default to home
      navigateTo('home');
    }
  };

  return (
    <header className="w-full relative z-40 px-4 md:px-8 pt-4 md:pt-6 max-w-7xl mx-auto">
      {/* Floating Glassmorphism Navbar container */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat border border-white/30 rounded-full py-3 px-6 md:px-8 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        style={{ backgroundImage: `url(${navbarBg})` }}
      >

        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all shrink-0"
        >
          <img
            src={logoImage}
            alt="Ilaan Logo"
            className="h-7 sm:h-9 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-normal tracking-wide transition-all relative py-1 hover:text-[#D9FF00] ${isActive ? 'text-[#D9FF00]' : 'text-gray-300'
                  }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Quick utility icons */}
          <div className="flex items-center space-x-2 text-gray-400">
            <button className="p-1.5 hover:text-[#D9FF00] transition-colors rounded-full hover:bg-white/5">
              <HelpCircle size={18} />
            </button>
            <button className="p-1.5 hover:text-[#D9FF00] transition-colors rounded-full hover:bg-white/5">
              <Settings size={18} />
            </button>
            <button className="p-1.5 hover:text-[#D9FF00] transition-colors rounded-full hover:bg-white/5">
              <img src={gridMenuIcon} alt="Menu" className="w-[18px] h-[18px] object-contain" />
            </button>
          </div>

          {/* Auth Actions */}
          <div className="flex items-center space-x-3">
            <button className="px-5 py-2 text-xs font-bold bg-[#D9FF00] text-black rounded-full hover:bg-[#c4e600] transition-all hover:scale-105 active:scale-95 shadow-[0_4px_12px_rgba(217,255,0,0.2)]">
              Sign Up
            </button>
            <button className="px-5 py-2 text-xs font-bold bg-black text-white rounded-full hover:bg-black/80 transition-all hover:scale-105 active:scale-95">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile menu and CTA button wrapper */}
        <div className="flex items-center space-x-3 md:space-x-4 lg:hidden">
          {/* Sign Up Quick Button for Mobile */}
          <button className="px-4 py-1.5 text-xs font-bold bg-[#D9FF00] text-black rounded-full hover:bg-[#c4e600] active:scale-95 transition-all">
            Sign Up
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-gray-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-[#0d0d0d]/95 backdrop-blur-lg border border-gray-800 rounded-3xl p-6 shadow-2xl z-50 flex flex-col space-y-4 md:hidden">
          {navItems.map((item, idx) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-bold py-2 border-b border-gray-900 transition-colors flex items-center justify-between ${isActive ? 'text-[#D9FF00]' : 'text-gray-300 hover:text-[#D9FF00]'
                  }`}
              >
                <span>{item.name}</span>
                <ChevronRight size={16} className={isActive ? 'text-[#D9FF00]' : 'text-gray-600'} />
              </button>
            );
          })}

          <div className="flex flex-col space-y-3 pt-4">
            <button className="w-full py-3 text-center text-sm font-bold bg-[#D9FF00] text-black rounded-full shadow-lg">
              Sign Up
            </button>
            <button className="w-full py-3 text-center text-sm font-bold bg-black text-white rounded-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default ProductNavbar;
