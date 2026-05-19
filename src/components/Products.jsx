import React, { useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgImage from '../assets/zeeshan.png';
import titleImage from '../assets/Ilaan_Digital_Signage 1.png';
import newImg from '../assets/New.png';
import productsImg from '../assets/Products.png';
import p1 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1.png';
import p2 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 3.png';
import p3 from '../assets/02 1.png';
import p4 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1 (1).png';
import p5 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1 (2).png';
import p6 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1.png';
import cardBg from '../assets/card-background.webp';

const ProductCard = ({ title, image }) => (
  <div
    className="product-card group relative flex flex-col justify-between p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] w-[74vw] max-w-[370px] md:w-full md:max-w-[508.58px] h-[298px] md:h-[393.12px] cursor-pointer overflow-hidden mx-auto will-change-transform"
    style={{
      backgroundImage: `url(${cardBg})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Product Image */}
    <div className="flex-grow flex items-center justify-center p-2 md:p-4">
      <img
        src={image}
        alt={title}
        className="max-h-[130px] md:max-h-[210px] max-w-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Text Content */}
    <div className="mt-auto px-2">
      <h3 className="text-base md:text-[22px] font-semibold text-black mb-1 md:mb-2 font-inter leading-tight">
        {title}
      </h3>

      <button className="flex items-center gap-2 text-[#2563eb] font-semibold text-xs md:text-sm transition-all group-hover:gap-3">
        View Detail <ArrowRight size={16} className="translate-y-[1px]" />
      </button>

    </div>
  </div>
);

const Products = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const productList = [
    { title: "In-Store Displays", image: p1 },
    { title: "Window Displays", image: p2 },
    { title: "LED & Large Format", image: p3 },
    { title: "Outdoor Displays", image: p4 },
    { title: "Interactive Displays", image: p5 },
    { title: "Electronic Shelf Labels", image: p6 },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

      // Title & Subtitle Sliding Effect
      gsap.fromTo(titleRef.current, 
        { x: -50 },
        { 
          x: 50, 
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        }
      );

      gsap.fromTo(subtitleRef.current, 
        { x: 50 },
        { 
          x: -50, 
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        }
      );

      // Cards reveal - tied to scroll for maximum smoothness
      gsap.from('.product-card', {
        opacity: 0,
        y: 100,
        scale: 0.9,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1.5,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-10 md:py-14 px-2 md:px-8 flex flex-col items-center overflow-hidden bg-[#eefc7e] mx-auto min-h-0 md:min-h-screen">

      {/* Background Image Overlay */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none scale-110">
        <img src={bgImage} alt="bg" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1600px] w-full flex flex-col items-center">

        {/* Badge */}
        <div className="mb-4 py-2 px-6 md:px-8 bg-white/50 rounded-full backdrop-blur-md border border-white/30">
          <span className="text-[10px] md:text-[18px] font-semibold text-green-700 font-inter">
            Explore Our Latest
          </span>
        </div>

        {/* Title Image or Text / Figma Images on Mobile */}
        <div ref={titleRef} className="mb-4 w-full max-w-[747px] px-4 flex justify-center">
          <img
            src={titleImage}
            alt="ILAAN Digital Signage"
            className="hidden md:block w-full h-auto object-contain mx-auto"
          />
          <div className="flex md:hidden items-center justify-center gap-2" style={{ height: '26px' }}>
            <img
              src={newImg}
              alt="New"
              style={{ height: '26px', width: 'auto' }}
              className="object-contain"
            />
            <img
              src={productsImg}
              alt="Products"
              style={{ height: '26px', width: 'auto' }}
              className="object-contain"
            />
          </div>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef}>
          <p className="text-center w-full mb-5 md:mb-[60px] text-[9px] md:text-[19.5px] font-medium text-[#424242] font-poppins max-w-2xl px-4">
            Discover innovative displays built for impact, clarity and performance.
          </p>
        </div><br />

        {/* Grid / Carousel */}
        <div 
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full px-[13vw] md:px-2 pb-8 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {productList.map((product, i) => (
            <div key={i} className="w-[74vw] max-w-[370px] md:w-auto md:max-w-none md:min-w-0 snap-center shrink-0 flex justify-center">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="w-[150px] md:w-[260px] h-[36px] md:h-[50px] bg-gradient-to-r from-[#498625] to-[#9CBE34] text-white font-medium md:font-bold rounded-full flex items-center justify-center gap-1.5 md:gap-2 transition-all hover:scale-105 shadow-lg active:scale-95 text-[10px] md:text-base">
            See More Products <ArrowRight className="w-[12px] h-[12px] md:w-[20px] md:h-[20px]" />
          </button>
        </div>


      </div>
    </section>
  );
};

export default Products;


