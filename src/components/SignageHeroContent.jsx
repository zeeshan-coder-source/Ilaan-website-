import React from 'react';
import { motion } from 'framer-motion';
import tomatoImg from '../assets/right (3).jpeg';

const SignageHeroContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-[1600px] mx-auto py-4">
      
      {/* Left Column: Text Content */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-left z-10">
        <h1 className="reveal-text text-[38px] sm:text-[54px] md:text-[72px] font-extrabold leading-[1.05] tracking-tight text-white m-0">
          Digital Advertising <br />
          in the <span className="text-[#D9FF00]">Real World</span>
        </h1>

        <div className="space-y-4 md:space-y-6 max-w-[620px]">
          <p className="reveal-text text-[15px] sm:text-[18px] md:text-[21px] text-gray-200 font-poppins font-normal leading-relaxed">
            Reach audiences beyond online channels and connect with customers at the point of decision.
          </p>
          <p className="reveal-text text-[13px] sm:text-[15px] md:text-[17px] text-gray-400 font-poppins font-light leading-relaxed">
            Digital signage and in-store media are transforming how brands engage, combining visibility, content, and timing in a way traditional advertising cannot match.
          </p>
        </div>

        <div className="reveal-text pt-2">
          <button className="flex items-center justify-center px-10 py-3 md:px-12 md:py-4 bg-[#D9FF00] text-black font-bold rounded-full hover:bg-[#c4e600] transition-all duration-300 text-[14px] md:text-lg shadow-[0_10px_25px_-5px_rgba(217,255,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer">
            Learn more
          </button>
        </div>
      </div>

      {/* Right Column: Premium Vertical Signage Mockup */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end items-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          className="relative group cursor-pointer"
        >
          {/* Neon Green Glow Effect under the screen */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#D9FF00]/0 via-[#D9FF00]/40 to-[#D9FF00]/0 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Physical Bezel Container */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[9/16] bg-[#0c0d0a] rounded-[2.2rem] p-3 md:p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.95)] border border-[#D9FF00]/25 flex flex-col overflow-hidden">
            
            {/* Glossy Reflection Line Overlay */}
            <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[35deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1800ms] ease-out pointer-events-none z-30" />
            
            {/* Glowing Border Line Highlight */}
            <div className="absolute inset-[2px] rounded-[2.1rem] border-2 border-transparent group-hover:border-[#D9FF00]/20 transition-all duration-700 pointer-events-none z-20" />

            {/* Inner Screen Component */}
            <div 
              className="relative h-full w-full rounded-[1.5rem] md:rounded-[1.7rem] overflow-hidden flex flex-col justify-between p-5 md:p-7 bg-cover bg-center select-none"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.7) 100%), url(${tomatoImg})`
              }}
            >
              
              {/* TOP CONTENT: Brand and Ad Header */}
              <div className="text-left font-poppins drop-shadow-md">
                <span className="block text-[#FF9E00] font-black tracking-wider text-[11px] sm:text-[13px] md:text-[15px] uppercase">
                  Fresh & Juicy
                </span>
                <span className="block text-white font-extrabold text-[24px] sm:text-[28px] md:text-[34px] tracking-wide leading-none uppercase mt-0.5">
                  Tomatoes
                </span>
                <span className="block text-gray-200 text-[8px] sm:text-[10px] md:text-[11px] font-medium tracking-normal mt-1 border-t border-white/20 pt-1">
                  Farm Fresh | Healthy | Juicy
                </span>
              </div>

              {/* BOTTOM CONTENT: Custom styled price tag */}
              <div className="flex items-end justify-end text-white font-poppins text-right leading-none drop-shadow-lg">
                <span className="text-[52px] sm:text-[62px] md:text-[76px] font-black tracking-tighter">
                  1
                </span>
                <div className="flex flex-col items-start ml-0.5 pb-2 sm:pb-3 md:pb-4">
                  <span className="text-[20px] sm:text-[24px] md:text-[28px] font-extrabold leading-none">
                    .90
                  </span>
                  <span className="text-[10px] sm:text-[11px] md:text-[13px] font-bold text-gray-200 tracking-wider leading-none mt-0.5 uppercase">
                    / KG
                  </span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default SignageHeroContent;
