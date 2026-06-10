import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reuse existing assets
import p2 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 3.png';
import p4 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1 (1).png';
import p5 from '../assets/ChatGPT Image Apr 30, 2026, 05_41_10 PM 1 (2).png';
import p6 from '../assets/02 1.png'; // LED screen format

const formats = [
  {
    id: 'window',
    number: '01',
    name: 'Window Displays',
    image: p2,
    brightness: '3,500 Nits',
    resolution: '4K Ultra HD',
    description: 'Double-sided high-brightness screens engineered to cut through direct sunlight glare while keeping the indoor-facing screen calm and heat-optimized.',
  },
  {
    id: 'outdoor',
    number: '02',
    name: 'Outdoor Kiosks',
    image: p4,
    brightness: '4,000 Nits',
    resolution: '4K Ultra HD',
    description: 'IP65 weather-proof, impact-resistant protective enclosures with integrated heating/cooling air conditioning for year-round absolute stability.',
  },
  {
    id: 'interactive',
    number: '03',
    name: 'Interactive Touch',
    image: p5,
    brightness: '500 Nits',
    resolution: 'Full HD / 4K',
    description: 'PCAP multi-touch glass overlays built to support in-store product catalogs, digital directories, and self-ordering kiosk workflows.',
  },
  {
    id: 'led',
    number: '04',
    name: 'LED & Large Format',
    image: p6,
    brightness: '1,200 Nits',
    resolution: 'Custom Pixel Pitch',
    description: 'Seamless bezel-free LED tiles custom-tailored for branding video walls, supermarket columns, and architectural ambient installations.',
  },
];

const SignageShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const infoContainerRef = useRef(null);

  const handleTabChange = (index) => {
    if (index === activeTab) return;

    // Trigger gsap transition for the image and text on change
    gsap.to(imageContainerRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 10,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setActiveTab(index);
        gsap.to(imageContainerRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        });
      },
    });

    gsap.to(infoContainerRef.current, {
      opacity: 0,
      x: -15,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(infoContainerRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power3.out',
        });
      },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // General entrance animation
      gsap.from('.showcase-enter', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#0f100d] py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center min-h-screen border-t border-white/5"
    >
      <div className="w-full max-w-[1600px] flex flex-col space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 showcase-enter">
          <div className="flex flex-col space-y-4 text-left">
            <span className="text-xs md:text-sm font-bold text-[#D9FF00] tracking-[0.25em] uppercase">
              Product Catalog
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white leading-tight m-0">
              Hardware Tailored <br />
              For Spatial Impact
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-md m-0">
            From high-brightness storefronts to architectural branding walls, discover screens engineered to elevate spatial environments.
          </p>
        </div>

        {/* Layout: Main Interactive area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Left Column: Interactive Tab Menu */}
          <div className="lg:col-span-5 flex flex-col space-y-3 w-full showcase-enter">
            {formats.map((format, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={format.id}
                  onClick={() => handleTabChange(idx)}
                  onMouseEnter={() => handleTabChange(idx)}
                  className={`w-full flex items-center justify-between text-left py-6 px-6 rounded-2xl border transition-all duration-300 group focus:outline-none cursor-pointer ${
                    isActive
                      ? 'bg-[#1a1c17] border-[#D9FF00]/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
                      : 'bg-transparent border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <span
                      className={`text-sm md:text-base font-bold font-mono transition-colors duration-300 ${
                        isActive ? 'text-[#D9FF00]' : 'text-gray-600 group-hover:text-gray-400'
                      }`}
                    >
                      {format.number}
                    </span>
                    <span
                      className={`text-lg md:text-2xl font-bold font-poppins transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                      }`}
                    >
                      {format.name}
                    </span>
                  </div>
                  
                  {/* Neon Dot indicator */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[#D9FF00] scale-100 shadow-[0_0_10px_#D9FF00]' : 'bg-transparent scale-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Area */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#121310]/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 items-center min-h-[460px] showcase-enter">
            
            {/* Left part: Specs & Description */}
            <div ref={infoContainerRef} className="md:col-span-6 flex flex-col space-y-6 text-left">
              <div>
                <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">
                  Format Details
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white font-poppins m-0">
                  {formats[activeTab].name}
                </h3>
              </div>

              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed font-poppins">
                {formats[activeTab].description}
              </p>

              {/* Specifications pills */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-0.5">
                    Brightness rating
                  </span>
                  <span className="text-sm md:text-base font-bold text-[#D9FF00] font-mono">
                    {formats[activeTab].brightness}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-0.5">
                    Panel Resolution
                  </span>
                  <span className="text-sm md:text-base font-bold text-white font-mono">
                    {formats[activeTab].resolution}
                  </span>
                </div>
              </div>
            </div>

            {/* Right part: Visual Product display */}
            <div
              ref={imageContainerRef}
              className="md:col-span-6 flex items-center justify-center bg-black/40 rounded-3xl p-6 h-[280px] md:h-[350px] border border-white/5 relative overflow-hidden group/img"
            >
              {/* Radial glow background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.06)_0%,transparent_70%)] pointer-events-none" />

              <img
                src={formats[activeTab].image}
                alt={formats[activeTab].name}
                className="max-h-full max-w-[85%] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-transform duration-700 group-hover/img:scale-105"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SignageShowcase;
