import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigation } from '../context/NavigationContext';
import logoImage from '../assets/logo.png';

const NavOverlay = ({ isOpen, onClose }) => {
  const { currentPage, navigateTo } = useNavigation();

  if (!isOpen) return null;

  const links = [
    { name: 'STUDIO', id: 'home' },
    { name: 'DIGITAL SIGNAGE', id: 'digital-signage' },
    { name: 'PRODUCTS', id: 'products' },
    { name: 'LINK', id: 'link' },
    { name: 'MEDIA', id: 'media' },
  ];

  const handleLinkClick = (id) => {
    onClose();
    if (id === 'home' || id === 'digital-signage' || id === 'products') {
      navigateTo(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 md:p-6 lg:p-8"
    >
      {/* Outer border to match design theme */}
      <div className="relative h-full w-full border-2 border-[#D9FF00]/30 rounded-[2.5rem] flex flex-col justify-between p-8 md:p-16 shadow-[0_0_30px_rgba(217,255,0,0.15)]">
        
        {/* Top Header inside overlay */}
        <div className="flex items-center justify-between w-full">
          <img 
            onClick={() => handleLinkClick('home')} 
            src={logoImage} 
            alt="Ilaan Logo" 
            className="h-10 md:h-12 w-auto object-contain cursor-pointer hover:opacity-85 transition-opacity" 
          />
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-[#D9FF00] hover:scale-110 active:scale-95 transition-all focus:outline-none"
          >
            <X size={32} strokeWidth={3} />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex flex-col space-y-6 md:space-y-8 items-center justify-center flex-grow">
          {links.map((link, index) => {
            const isActive = currentPage === link.id;
            return (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5, ease: 'easeOut' }}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[28px] md:text-[50px] font-bold font-falcon tracking-widest relative group uppercase select-none transition-colors duration-300 ${
                  isActive ? 'text-[#D9FF00]' : 'text-white hover:text-[#D9FF00]'
                }`}
                style={{ fontFamily: 'Falcon, sans-serif' }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D9FF00] transition-all duration-300 group-hover:w-full" />
              </motion.button>
            );
          })}
        </nav>

        {/* Footer info inside overlay */}
        <div className="text-center text-[10px] md:text-xs text-gray-500 font-medium tracking-widest uppercase">
          © 2026 Ilaan Limited. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
};

export default NavOverlay;
