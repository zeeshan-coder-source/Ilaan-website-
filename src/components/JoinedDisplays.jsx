import React from 'react';
import { motion } from 'framer-motion';
import joinedImg from '../assets/right (3).png';

const JoinedDisplays = () => {
  return (
    <section className="w-full bg-white py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full px-4 flex flex-col items-center">
        {/* Joined Display Image - Center Aligned */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <img 
            src={joinedImg} 
            alt="Joined Displays" 
            className="w-full max-w-[1000px] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
        
      </div>
    </section>
  );
};

export default JoinedDisplays;
