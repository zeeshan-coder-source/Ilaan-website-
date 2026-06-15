import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Menu, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavOverlay from './NavOverlay';

// Assets import
import bg1 from '../assets/bg.png';
import bg2 from '../assets/1.png';
import bg3 from '../assets/22.png';
import bg4 from '../assets/content.png';

// Mobile Assets import
import bg1Mobile from '../assets/bg_mobile.png';
import bg2Mobile from '../assets/1_mobile.png';
import bg3Mobile from '../assets/22_mobile.png';
import bg4Mobile from '../assets/content_mobile.png';

import logoImage from '../assets/logo.png';
import ilaanTextImage from '../assets/Ilaan.png';
import studioTextImage from '../assets/Studio.png';

const desktopSlides = [bg1, bg2, bg3, bg4];
const mobileSlides = [bg1Mobile, bg2Mobile, bg3Mobile, bg4Mobile];
const SLIDE_DURATION = 4000; // ms per slide

// const slideContents = [
//   {
//     brandType: 'image',
//     brandSrc: ilaanTextImage,
//     titleType: 'image',
//     titleSrc: studioTextImage,
//     subtitle: 'Creative & Branding Solutions'
//   },
//   {
//     brandType: 'text',
//     brandText: 'ILAAN',
//     titleType: 'text',
//     titleText: 'Media',
//     subtitle: 'Creative & Branding Solutions'
//   },
//   {
//     brandType: 'text',
//     brandText: 'ESL',
//     titleType: 'text',
//     titleText: 'Electronic',
//     subtitle: 'Shelf Label'
//   },
//   {
//     brandType: 'text',
//     brandText: 'ILAAN',
//     titleType: 'text',
//     titleText: 'Digital Signage',
//     subtitle: 'Smart Signage Solutions'
//   }
// ];

const slideContents = [
  {
    brandType: 'text',
    brandText: 'ILAAN',
    titleType: 'text',
    titleText: 'Studio',
    subtitle: 'Creative & Branding Solutions'
  },
  {
    brandType: 'text',
    brandText: 'ILAAN',
    titleType: 'text',
    titleText: 'Media',
    subtitle: 'Creative & Branding Solutions'
  },
  {
    brandType: 'text',
    brandText: 'ESL',
    titleType: 'text',
    titleText: 'Electronic',
    subtitle: 'Shelf Label'
  },
  {
    brandType: 'text',
    brandText: 'ILAAN',
    titleType: 'text',
    titleText: 'Digital Signage',
    subtitle: 'Smart Signage Solutions'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  // Check screen size for responsiveness
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  // Auto-advance slides
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [current, slides.length]);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 16);
    return () => clearInterval(tick);
  }, [current]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content fade and lift
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: true,
        },
      });

      // Initial entrance
      gsap.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full bg-black text-white font-sans p-4 md:p-6 lg:p-8 flex items-center justify-center overflow-hidden">

      {/* --- WRAPPER WITH VISIBLE BORDER --- */}
      <div className="relative h-full w-full border-2 border-[#D9FF00]/30 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_20px_rgba(217,255,0,0.1)]">

        {/* --- CAROUSEL BACKGROUND --- */}
        <div ref={bgRef} className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={current}
              src={slides[current]}
              alt="Hero Background"
              className="absolute inset-0 h-full w-full object-cover scale-125"
              // className="absolute inset-0 h-full w-full object-cover"

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* --- NAVIGATION --- */}
        <nav className="relative z-20 flex items-center justify-between px-8 py-8 md:px-12 lg:px-16">
          <div className="flex items-center gap-2">
            <img
              src={logoImage}
              alt="Ilaan Logo"
              className="h-12 md:h-18 w-auto object-contain reveal-text"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 transition-transform active:scale-90 hover:scale-105 cursor-pointer"
          >
            <Menu size={32} className="text-white" strokeWidth={3} />
          </button>
        </nav>

        {/* --- HERO CONTENT --- */}
        {/* <main ref={contentRef} className="relative z-10 flex flex-col justify-center flex-grow px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl mb-10 md:mb-30 reveal-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="py-2 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-start gap-1 md:gap-1.5 lg:gap-2 -ml-[4px]">
                
                  {slideContents[current].brandType === 'image' ? (
                    <img
                      alt="Brand"
                      className="block h-auto object-contain w-[180px] md:w-[200px] md:max-w-[320px] lg:max-w-[420px]"
                      src={slideContents[current].brandSrc}
                    />
                  ) : (
                    <span className="font-falcon text-white text-[42px] sm:text-[50px] md:text-[62px] lg:text-[84px] font-bold leading-none select-none tracking-tight">
                      {slideContents[current].brandText}
                    </span>
                  )}

                
                  {slideContents[current].titleType === 'image' ? (
                    <img
                      alt="Title"
                      className="block h-auto object-contain w-[160px] md:w-[180px] md:max-w-[280px] lg:max-w-[360px]"
                      src={slideContents[current].titleSrc}
                    />
                  ) : (
                    <span className="font-falcon text-[#D9FF00] text-[42px] sm:text-[50px] md:text-[62px] lg:text-[84px] font-bold leading-none select-none tracking-tight">
                      {slideContents[current].titleText}
                    </span>
                  )}
                </div>

                <p className="mt-4 md:mt-10 text-[16px] md:text-[25px] text-white font-poppins font-normal leading-[1.32] tracking-normal max-w-[200px] md:max-w-full">
                  {slideContents[current].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </main> */}

        {/* --- HERO CONTENT --- */}
        {/* <main ref={contentRef} className="relative z-10 flex flex-col justify-center flex-grow px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl mb-10 md:mb-30 reveal-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="py-2 md:py-6 flex flex-row items-center justify-start gap-3 md:gap-4 lg:gap-5 -ml-[4px]">


                  {slideContents[current].brandType === 'image' ? (
                    <img
                      alt="Brand"
                      className="block h-auto object-contain w-[180px] md:w-[220px] lg:w-[280px]"
                      src={slideContents[current].brandSrc}
                    />
                  ) : (
                    <span className="text-white text-[42px] sm:text-[52px] md:text-[68px] lg:text-[88px] font-bold leading-none tracking-tight whitespace-nowrap">
                      {slideContents[current].brandText}
                    </span>
                  )}


                  {slideContents[current].titleType === 'image' ? (
                    <img
                      alt="Title"
                      className="block h-auto object-contain w-[160px] md:w-[200px] lg:w-[260px]"
                      src={slideContents[current].titleSrc}
                    />
                  ) : (
                    <span className="text-[#D9FF00] text-[42px] sm:text-[52px] md:text-[68px] lg:text-[88px] font-bold leading-none tracking-tight whitespace-nowrap">
                      {slideContents[current].titleText}
                    </span>
                  )}

                </div>

                <p className="mt-4 md:mt-10 text-[16px] md:text-[25px] text-white font-poppins font-normal leading-[1.32] tracking-normal max-w-[200px] md:max-w-full">
                  {slideContents[current].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </main> */}

        <main ref={contentRef} className="relative z-10 flex flex-col justify-center flex-grow px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl mb-10 md:mb-30 reveal-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="py-2 md:py-4 flex flex-row items-center justify-start gap-3 md:gap-3 lg:gap-4 -ml-[4px]">

                  {/* Brand */}
                  <span className="font-falcon text-white text-[95px] font-bold leading-none tracking-tight whitespace-nowrap">
                    {slideContents[current].brandText}
                  </span>

                  {/* Title */}
                  <span className="font-falcon text-[#D9FF00] text-[95px] font-bold leading-none tracking-tight whitespace-nowrap">
                    {slideContents[current].titleText}
                  </span>

                </div>

                <p className="mt-4 md:mt-10 text-[16px] md:text-[25px] text-white font-poppins font-normal leading-[1.32] tracking-normal max-w-[200px] md:max-w-full">
                  {slideContents[current].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* --- SLIDER INDICATOR (bottom center) --- */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-2 md:gap-3 reveal-text">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative h-[4px] w-[60px] md:w-[120px] rounded-full overflow-hidden cursor-pointer focus:outline-none"
              style={{ background: 'rgba(255,255,255,0.3)' }}
            >
              {/* Animated progress fill for active slide */}
              {i === current && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

      </div>

      {/* Navigation Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;