import React from 'react';
import { motion } from 'framer-motion';

// Import the new logo assets
import logo1 from '../assets/Logos_1.webp';
import logo2 from '../assets/Logos_2.webp';
import logo3 from '../assets/Logos_3.webp';
import logo4 from '../assets/Logos_4.webp';
import logo5 from '../assets/Logos_5.webp';

const PartnersGrid = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-bold text-green-600 uppercase tracking-[0.3em] mb-4 block">Our Partners</span>
          <h2 className="text-3xl md:text-5xl font-black text-black">TRUSTED BY GLOBAL BRANDS</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-20 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="w-full max-w-[200px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                className="w-full h-auto object-contain max-h-16" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersGrid;
