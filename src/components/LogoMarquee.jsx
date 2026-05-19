import React from 'react';
import { motion } from 'framer-motion';
import logoStrip from '../assets/Section 9.png';

const LogoMarquee = () => {
  return (
    <div className="w-full bg-white py-14 overflow-hidden select-none">
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex gap-24 md:gap-32 items-center"
          animate={{ x: [0, -1200] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Loop many times to ensure no gaps */}
          {[...Array(6)].map((_, i) => (
            <img key={i} src={logoStrip} alt="Partner Logos" className="h-10 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee;
