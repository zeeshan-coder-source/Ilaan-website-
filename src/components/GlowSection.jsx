import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import glowImage from '../assets/Section 3.png';
// import logo3D from '../assets/Section 3.gif';
import logo3D from '../assets/Circle.mp4';



const GlowSection = () => {


  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const imageRef = useRef(null);
  const headerRef = useRef(null);
  const mobileTextRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // Ultra-smooth
        }
      });

      // Continuous Marquee Loop: Mathematically Seamless
      gsap.fromTo('.headline-top',
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 40,
          ease: 'none',
          force3D: true,
        }
      );

      gsap.to('.headline-bottom', {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: 'none',
        force3D: true,
      });

      if (!isMobile) {
        tl.to(imageRef.current, {
          scale: 0.35,
          filter: 'grayscale(100%)',
          ease: 'none',
          force3D: true,
        }, 0);

        // Add Scroll-Linked Offset for Interactivity
        tl.to('.headline-top', {
          x: 300,
          ease: 'none',
          force3D: true,
        }, 0)
          .to('.headline-bottom', {
            x: -300,
            ease: 'none',
            force3D: true,
          }, 0)
          // Reveal Header Branding as image shrinks
          .fromTo(headerRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, ease: 'power2.out', force3D: true }, 0.3
          );

      } else {
        // Mobile Animations
        tl.to(imageRef.current, {
          width: '85vw',
          height: '85vw',
          filter: 'grayscale(100%)',
          ease: 'none',
          force3D: true,
        }, 0)
          // Scroll-linked offset for mobile text
          .to('.headline-top', {
            x: 150,
            ease: 'none',
            force3D: true,
          }, 0)
          .to('.headline-bottom', {
            x: -150,
            ease: 'none',
            force3D: true,
          }, 0)
          .fromTo(headerRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, ease: 'power2.out', force3D: true }, 0.2
          );
      }

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-[#282C20] overflow-visible"
    >
      {/* Sticky container */}
      <div ref={stickyRef} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Header Logo and Text (ILAAN STUDIO style) */}
        <div ref={headerRef} className="absolute top-20 left-0 right-0 z-30 flex flex-col items-center pointer-events-none opacity-0">
          <div className="w-12 h-12 mb-2">
            <video
              src={logo3D}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>

          <span
            className="text-[14px] font-falcon font-bold text-[#D9FF00] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Falcon, sans-serif' }}
          >
            ILAAN
          </span>
        </div>





        {/* Layer 1: BACKGROUND TEXT SLIDER (Responsive) */}
        {/* <div className="absolute bottom-16 md:bottom-auto md:inset-0 z-10 w-full md:h-full flex flex-col items-center md:justify-center pointer-events-none overflow-hidden">
          
          <div className="headline-top whitespace-nowrap flex items-center will-change-transform">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={`top-${i}`}
                  className="text-[42px] md:text-[135px] font-falcon font-semibold text-[#D9FF00] tracking-tighter uppercase leading-[1.1] mr-6 md:mr-10"
                  style={{ fontFamily: 'Falcon, sans-serif' }}
                >
                  DATA CLARITY WITHOUT COMPLEXITY AND
                </span>
              ))}
            </div>
            
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={`top-dup-${i}`}
                  className="text-[42px] md:text-[135px] font-falcon font-semibold text-[#D9FF00] tracking-tighter uppercase leading-[1.1] mr-6 md:mr-10"
                  style={{ fontFamily: 'Falcon, sans-serif' }}
                >
                  DATA CLARITY WITHOUT COMPLEXITY AND
                </span>
              ))}
            </div>
          </div>

         
          <div className="headline-bottom whitespace-nowrap flex items-center mt-0 md:mt-[-10px] will-change-transform">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <span key={`bottom-${i}`} className="text-[36px] md:text-[100px] font-poppins font-semibold text-white tracking-tighter uppercase leading-[1.1] mr-6 md:mr-10">
                  EVERY ILAAN PLATFORM IS DESIGNED TO GIVE YOU EVERY
                </span>
              ))}
            </div>
           
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <span key={`bottom-dup-${i}`} className="text-[36px] md:text-[100px] font-poppins font-semibold text-white tracking-tighter uppercase leading-[1.1] mr-6 md:mr-10">
                  EVERY ILAAN PLATFORM IS DESIGNED TO GIVE YOU EVERY
                </span>
              ))}
            </div>
          </div>
        </div> */}

        {/* Layer 1: BACKGROUND TEXT SLIDER (Responsive) */}
        <div className="absolute bottom-16 md:bottom-auto md:inset-0 z-10 w-full md:h-full flex flex-col items-center md:justify-center pointer-events-none overflow-hidden">

          {/* Top Green Line */}
          <div className="w-full overflow-hidden">
            <div
              className="flex whitespace-nowrap will-change-transform"
              // style={{ animation: 'scrollLeft 40s linear infinite', width: 'max-content' }}
              style={{ animation: 'scrollRight 70s linear infinite', width: 'max-content' }}
            >
              {[...Array(8)].map((_, i) => (
                <span
                  key={`top-${i}`}
                  className="text-[42px] md:text-[135px] font-semibold text-[#D9FF00] tracking-tighter uppercase leading-[1.1] mr-6 md:mr-10"
                  style={{ fontFamily: 'Falcon, sans-serif' }}
                >
                  DATA CLARITY WITHOUT COMPLEXITY AND
                </span>
              ))}
            </div>
          </div>

          {/* Bottom White Line */}
          <div className="w-full overflow-hidden mt-0 md:mt-[-10px]">
            <div
              className="flex whitespace-nowrap will-change-transform"
              // style={{ animation: 'scrollRight 50s linear infinite', width: 'max-content' }}
              style={{ animation: 'scrollLeft 85s linear infinite', width: 'max-content' }}
            >
              {[...Array(8)].map((_, i) => (
                <span
                  key={`bottom-${i}`}
                  className="text-[36px] md:text-[100px] font-semibold text-white tracking-tighter uppercase leading-[1.1] mr-6 md:mr-10"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  EVERY ILAAN PLATFORM IS DESIGNED TO GIVE YOU EVERY
                </span>
              ))}
            </div>
          </div>

        </div>





        {/* Layer 2: FOREGROUND IMAGE */}
        <div
          ref={imageRef}
          className="relative z-20 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex items-center justify-center mx-auto w-full h-full will-change-transform [will-change:transform,filter]"
        >
          <video
            src={logo3D}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GlowSection;


