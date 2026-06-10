import React, { useState, useRef, useLayoutEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavOverlay from '../NavOverlay';
import { useNavigation } from '../../context/NavigationContext';

// Assets
import logoImage from '../../assets/logo.png';
import supermarketBg from '../../assets/supermarket_bg.png';
import tomatoImg from '../../assets/right (3).jpeg';

const SignageHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigateTo } = useNavigation();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll effect for background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Fade out content on scroll
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -40,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: true,
        },
      });

      // Staggered text entrance
      gsap.from('.reveal-text-signage', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full bg-black text-white font-sans p-4 md:p-6 lg:p-8 flex items-center justify-center overflow-hidden">
      
      {/* Outer Border Container */}
      <div className="relative h-full w-full border-2 border-[#D9FF00]/30 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_20px_rgba(217,255,0,0.1)]">
        
        {/* Background Parallax */}
        <div ref={bgRef} className="absolute inset-0 z-0">
          <img
            src={supermarketBg}
            alt="Supermarket Background"
            className="absolute inset-0 h-full w-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Top Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-8 py-8 md:px-12 lg:px-16">
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity"
          >
            <img
              src={logoImage}
              alt="Ilaan Logo"
              className="h-12 md:h-18 w-auto object-contain reveal-text-signage"
            />
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 transition-transform active:scale-90 hover:scale-105 cursor-pointer reveal-text-signage"
          >
            <Menu size={32} className="text-white" strokeWidth={3} />
          </button>
        </nav>

        {/* Hero split-screen layout content */}
        <main ref={contentRef} className="relative z-10 flex flex-col justify-center flex-grow px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full max-w-[1600px] mx-auto py-2">
            
            {/* Left side: Heading and copy */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
              <h1 className="reveal-text-signage text-[38px] sm:text-[54px] md:text-[72px] font-extrabold leading-[1.05] tracking-tight text-white m-0">
                Digital Advertising <br />
                in the <span className="text-[#D9FF00]">Real World</span>
              </h1>

              <div className="space-y-4 max-w-[600px]">
                <p className="reveal-text-signage text-[15px] sm:text-[18px] md:text-[20px] text-gray-200 font-poppins font-normal leading-relaxed">
                  Reach audiences beyond online channels and connect with customers at the point of decision.
                </p>
                <p className="reveal-text-signage text-[13px] sm:text-[14px] md:text-[16px] text-gray-400 font-poppins font-light leading-relaxed">
                  Digital signage and in-store media are transforming how brands engage, combining visibility, content, and timing in a way traditional advertising cannot match.
                </p>
              </div>

              <div className="reveal-text-signage pt-2">
                <button className="flex items-center justify-center px-10 py-3 md:px-12 md:py-4 bg-[#D9FF00] text-black font-bold rounded-full hover:bg-[#c4e600] transition-all duration-300 text-[14px] md:text-lg shadow-[0_10px_25px_-5px_rgba(217,255,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>

            {/* Right side: Glowing vertical tomato screen display */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                className="relative group cursor-pointer"
              >
                {/* Glow behind device */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D9FF00]/0 via-[#D9FF00]/40 to-[#D9FF00]/0 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Bezel frame */}
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/16] bg-[#0c0d0a] rounded-[2.2rem] p-3 md:p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.95)] border border-[#D9FF00]/25 flex flex-col overflow-hidden">
                  
                  {/* Glossy sheen */}
                  <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[35deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1800ms] ease-out pointer-events-none z-30" />
                  
                  {/* Highlighting border */}
                  <div className="absolute inset-[2px] rounded-[2.1rem] border-2 border-transparent group-hover:border-[#D9FF00]/25 transition-all duration-700 pointer-events-none z-20" />

                  {/* Screen Content */}
                  <div 
                    className="relative h-full w-full rounded-[1.5rem] md:rounded-[1.7rem] overflow-hidden flex flex-col justify-between p-5 md:p-6 bg-cover bg-center select-none"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.7) 100%), url(${tomatoImg})`
                    }}
                  >
                    {/* Header */}
                    <div className="text-left font-poppins">
                      <span className="block text-[#FF9E00] font-black tracking-wider text-[11px] sm:text-[13px] uppercase">
                        Fresh & Juicy
                      </span>
                      <span className="block text-white font-extrabold text-[24px] sm:text-[28px] tracking-wide leading-none uppercase mt-0.5">
                        Tomatoes
                      </span>
                      <span className="block text-gray-200 text-[8px] sm:text-[9px] font-medium tracking-normal mt-1 border-t border-white/20 pt-1">
                        Farm Fresh | Healthy | Juicy
                      </span>
                    </div>

                    {/* Price tag */}
                    <div className="flex items-end justify-end text-white font-poppins text-right leading-none drop-shadow-lg">
                      <span className="text-[52px] sm:text-[62px] font-black tracking-tighter">
                        1
                      </span>
                      <div className="flex flex-col items-start ml-0.5 pb-2 sm:pb-3">
                        <span className="text-[20px] sm:text-[24px] font-extrabold leading-none">
                          .90
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-bold text-gray-200 tracking-wider leading-none mt-0.5 uppercase">
                          / KG
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </main>

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

export default SignageHero;
