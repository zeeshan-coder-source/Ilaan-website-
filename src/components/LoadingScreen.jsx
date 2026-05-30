import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import loadibg from '../assets/Loading 1.svg';

const PathAnimatedLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Clock-like ticking rotation using steps ease
    gsap.to(logoRef.current, {
      rotation: 360,
      duration: 6, // Increased duration to slow it down and make the pause longer
      repeat: -1,
      ease: "steps(12)", // 12 distinct steps for that "tich tich" pause effect
      transformOrigin: "center center"
    });

  }, []);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Main Logo animating IN PLACE */}
      <img
        ref={logoRef}
        src={loadibg}
        alt="Loading Logo"
        className="absolute w-100 h-100 md:w-150 md:h-150 object-contain drop-shadow-xl"
        style={{ filter: 'brightness(0)' }}
      />
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#D9FF00] overflow-hidden"
    >
      <div className="flex-grow flex items-center justify-center">
        {/* GSAP Path Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.95, 1.05],
            opacity: 1
          }}
          exit={{
            scale: 25,
            opacity: [1, 1, 0],
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              times: [0, 0.7, 1]
            }
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            },
            opacity: { duration: 0.8 }
          }}
        >
          <PathAnimatedLogo />
        </motion.div>
      </div>


      {/* Minimalist Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 50,
          scale: 0.8,
          transition: { duration: 0.5, ease: "easeIn" }
        }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="pb-12"
      >
        <span className="text-[12px] md:text-[14px] tracking-[0.4em] font-bold text-black uppercase opacity-60">
          ILAAN
        </span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
