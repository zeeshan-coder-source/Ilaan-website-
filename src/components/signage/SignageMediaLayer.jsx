import React, { useRef, useLayoutEffect } from 'react';
import { Layers, Monitor, Paintbrush, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MediaCard = ({ icon: Icon, title, description, features = [], label }) => (
  <div className="media-layer-card bg-[#0e0f0c] text-white rounded-[2.2rem] p-8 flex flex-col justify-between border border-white/5 hover:border-[#D9FF00]/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] group h-[380px] md:h-[420px]">
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-neutral-900 border border-white/10 rounded-2xl text-[#D9FF00]">
          <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
        </div>
        <span className="text-[10px] md:text-xs font-mono text-[#D9FF00] font-bold uppercase tracking-widest bg-[#D9FF00]/10 rounded-full px-3 py-1">
          {label}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold font-poppins mb-3 tracking-tight group-hover:text-[#D9FF00] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed font-poppins mb-6">
        {description}
      </p>

      <ul className="space-y-2 pl-0 list-none">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-2 text-xs md:text-sm text-gray-300 font-poppins">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF00]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-6">
      <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
        Explore Product
      </span>
      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#D9FF00] group-hover:translate-x-1 transition-all duration-300" />
    </div>
  </div>
);

const SignageMediaLayer = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.layer-enter', {
        opacity: 0,
        y: 60,
        duration: 1.0,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-[#f5f6f2] text-black py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-screen border-t border-neutral-200"
    >
      <div className="w-full max-w-[1600px] flex flex-col space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-4 text-left max-w-2xl layer-enter">
          <span className="text-xs md:text-sm font-bold text-neutral-500 tracking-[0.25em] uppercase">
            Ecosystem Structure
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-poppins text-black leading-tight m-0">
            A New Layer Of <br />
            Physical Media
          </h2>
          <p className="text-neutral-600 text-sm md:text-lg font-light leading-relaxed max-w-xl">
            We bridge the gap between digital media networks and brick-and-mortar storefronts, combining hardware, advertising campaigns, and studio creative services.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full layer-enter">
          <MediaCard 
            icon={Layers}
            title="ILAAN Media"
            label="Campaigns"
            description="Programmatic ad execution networks that run digital display campaigns across a rapidly expanding footprints of retail screens."
            features={[
              "Programmatic ad bidding",
              "Omnichannel campaign reach",
              "Verified viewer reporting"
            ]}
          />
          <MediaCard 
            icon={Monitor}
            title="Digital Signage"
            label="Hardware"
            description="Enterprise-grade screen setups, custom touch totems, and ultra-high brightness window displays engineered for performance."
            features={[
              "3,500+ nits sunlight screens",
              "IP65 weather enclosures",
              "Continuous 24/7 run-time"
            ]}
          />
          <MediaCard 
            icon={Paintbrush}
            title="ILAAN Studio"
            label="Creative"
            description="Full-service creative design and production services specialized in crafting highly visual commercial ads for real-world storefront displays."
            features={[
              "3D product animations",
              "Dynamic template design",
              "High-impact visual strategy"
            ]}
          />
        </div>

      </div>
    </section>
  );
};

export default SignageMediaLayer;
