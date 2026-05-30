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
    className="product-card group relative flex flex-col justify-between p-4 sm:p-5 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] w-[74vw] max-w-[370px] md:w-full md:max-w-[508.58px] aspect-[370/298] md:aspect-[508/393] cursor-pointer overflow-hidden mx-auto will-change-transform"
    style={{
      backgroundImage: `url(${cardBg})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Product Image */}
    <div className="flex-grow flex items-center justify-center p-2 md:p-4 min-h-0">
      <img
        src={image}
        alt={title}
        className="max-h-[110px] sm:max-h-[140px] md:max-h-[180px] lg:max-h-[210px] max-w-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div><br />

    {/* Text Content */}
    <div className="mt-auto px-2 shrink-0">
      <h3 className="text-[10px] sm:text-[11px] md:text-[16px] lg:text-[19px] font-semibold text-black mb-1 md:mb-2 font-inter leading-tight">
        {title}
      </h3>

      <button className="flex items-center gap-1.5 text-[#2563eb] font-semibold text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] transition-all group-hover:gap-2">
        View Detail <ArrowRight className="translate-y-[0.5px] w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]" />
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
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

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
          <button className="w-[150px] md:w-[260px] h-[36px] md:h-[50px] bg-black text-white font-medium md:font-bold rounded-full flex items-center justify-center gap-1.5 md:gap-2 transition-all hover:scale-105 shadow-lg active:scale-95 text-[10px] md:text-base">
            See More Products <ArrowRight className="w-[12px] h-[12px] md:w-[20px] md:h-[20px]" />
          </button>
        </div>


      </div>
    </section>
  );
};

export default Products;


