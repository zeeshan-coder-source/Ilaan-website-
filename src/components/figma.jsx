import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the main webp display image
import displayImg from "../assets/3.webp";

gsap.registerPlugin(ScrollTrigger);

// Group images into columns according to their Figma layout
// Offsets correspond to: Column 1=0, Col 2=52px, Col 3=101px, Col 4=135px, Col 5=101px, Col 6=52px, Col 7=0
const columnsData = [
  {
    images: [
      { src: displayImg, alt: "Smart display gallery 1" },
      { src: displayImg, alt: "Smart display gallery 8" },
      { src: displayImg, alt: "Smart display gallery 15" }
    ],
    offsetDesktop: 0,
    speed: 0.15 // Parallax speed factor
  },
  {
    images: [
      { src: displayImg, alt: "Smart display gallery 2" },
      { src: displayImg, alt: "Smart display gallery 9" },
      { src: displayImg, alt: "Smart display gallery 16" }
    ],
    offsetDesktop: 52,
    speed: 0.25
  },
  {
    images: [
      { src: displayImg, alt: "Smart display gallery 3" },
      { src: displayImg, alt: "Smart display gallery 10" },
      { src: displayImg, alt: "Smart display gallery 17" }
    ],
    offsetDesktop: 101,
    speed: 0.35
  },
  {
    images: [
      { src: displayImg, alt: "Smart display gallery 4" },
      { src: displayImg, alt: "Smart display gallery 11" },
      { src: displayImg, alt: "Smart display gallery 18" }
    ],
    offsetDesktop: 135,
    speed: 0.45
  },
  {
    images: [
      { src: displayImg, alt: "Smart display gallery 5" },
      { src: displayImg, alt: "Smart display gallery 12" },
      { src: displayImg, alt: "Smart display gallery 19" }
    ],
    offsetDesktop: 101,
    speed: 0.35
  },
  {
    images: [
      { src: displayImg, alt: "Smart display gallery 6" },
      { src: displayImg, alt: "Smart display gallery 13" },
      { src: displayImg, alt: "Smart display gallery 20" }
    ],
    offsetDesktop: 52,
    speed: 0.25
  },
  {
    images: [
      { src: displayImg, alt: "Smart display gallery 7" },
      { src: displayImg, alt: "Smart display gallery 14" },
      { src: displayImg, alt: "Smart display gallery 21" }
    ],
    offsetDesktop: 0,
    speed: 0.15
  }
];

export const Box = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridContainerRef = useRef(null);
  const columnRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered fade and slide up for header elements
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Parallax scroll effect for the columns on desktop
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        columnRefs.current.forEach((col, idx) => {
          if (!col) return;
          const speed = columnsData[idx].speed;
          gsap.fromTo(col,
            { y: columnsData[idx].offsetDesktop },
            {
              y: columnsData[idx].offsetDesktop - (300 * speed),
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          );
        });
      });

      // 3. Staggered fade-in on mobile/tablet screens when scrolling
      mm.add("(max-width: 1023px)", () => {
        columnRefs.current.forEach((col, idx) => {
          if (!col) return;
          gsap.fromTo(col,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: col,
                start: 'top 90%',
                toggleActions: 'play none none none'
              }
            }
          );
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-black py-20 md:py-32 overflow-hidden flex flex-col items-center"
      aria-labelledby="smart-displays-title"
    >
      {/* Premium responsive Header */}
      <header
        ref={headerRef}
        className="relative z-10 max-w-4xl text-center px-6 mb-16 md:mb-24 flex flex-col items-center"
      >
        <span className="text-sm font-bold uppercase tracking-widest text-[#97C92B] mb-3">
          Innovation & Impact
        </span>
        <h2
          id="smart-displays-title"
          className="font-poppins text-4xl md:text-7xl font-light leading-tight tracking-tight text-black"
        >
          Smart displays
        </h2>
        <p className="font-poppins text-4xl md:text-7xl font-bold leading-tight tracking-tight text-[#97C92B] mt-1">
          Stronger impact.
        </p>
        <p className="text-gray-600 text-base md:text-xl font-poppins font-light leading-relaxed max-w-2xl mt-6">
          Deliver your message with clarity and style.
          <br className="hidden md:inline" /> Engage audiences anywhere, anytime.
        </p>
      </header>

      {/* Main Grid Wrapper */}
      <div 
        ref={gridContainerRef}
        className="w-full max-w-[1600px] px-6 md:px-12 z-10"
        aria-label="Smart display gallery"
      >
        {/* Desktop wave-shaped columns (>=1024px) / Staggered responsive grid (<1024px) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6 lg:gap-3 items-start justify-center">
          {columnsData.map((column, colIdx) => (
            <div
              key={colIdx}
              ref={(el) => (columnRefs.current[colIdx] = el)}
              className="flex flex-col gap-4 md:gap-6 lg:gap-3 will-change-transform"
              style={{
                // Set the exact Figma offsets as initial desktop values
                transform: `translateY(${column.offsetDesktop}px)`
              }}
            >
              {column.images.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out bg-gray-100 aspect-[239/368]"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    alt={img.alt}
                    src={img.src}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background glow for that ultra-premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[#ccff00]/10 blur-[120px] pointer-events-none z-0" />
    </section>
  );
};

export default Box;