import React, { useRef, useLayoutEffect } from 'react';
import { ArrowUpRight, TrendingUp, Users, Percent } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GrowthCard = ({ icon: Icon, value, label, subtext }) => (
  <div className="growth-card bg-[#121310]/60 backdrop-blur-xl border border-white/5 hover:border-[#D9FF00]/40 rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_15px_30px_rgba(217,255,0,0.05)] hover:-translate-y-1 group cursor-pointer relative overflow-hidden h-[240px] md:h-[280px]">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,255,0,0.02)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <div className="flex items-center justify-between">
      <div className="p-3 bg-neutral-900 border border-white/5 rounded-xl text-[#D9FF00] group-hover:bg-[#D9FF00] group-hover:text-black transition-colors duration-500">
        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </div>
      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-[#D9FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
    </div>

    <div className="mt-6">
      <span className="block text-2xl md:text-3xl lg:text-4xl font-extrabold font-mono text-white group-hover:text-[#D9FF00] transition-colors duration-300">
        {value}
      </span>
      <span className="block text-sm md:text-base font-bold text-gray-300 font-poppins mt-2">
        {label}
      </span>
      <span className="block text-xs md:text-sm text-gray-500 font-poppins font-light mt-1">
        {subtext}
      </span>
    </div>
  </div>
);

const SignageGrowth = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.growth-enter', {
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
      className="bg-[#080808] py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-[90vh] border-t border-white/5"
    >
      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Heading and Bullets */}
        <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8 text-left growth-enter">
          <div className="flex flex-col space-y-4">
            <span className="text-xs md:text-sm font-bold text-[#D9FF00] tracking-[0.25em] uppercase">
              Growth Engine
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins text-white leading-tight m-0">
              A Channel <br />
              Built for <span className="text-[#D9FF00]">Growth</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed">
            In-store media represents the final frontier of advertising. It meets customers where they are already primed to purchase, transforming retail displays into active conversion channels.
          </p>

          <ul className="space-y-4 pl-0 list-none">
            {[
              "98% of viewers make immediate, in-store decisions based on interactive displays",
              "Dynamic scheduling increases average basket size by up to 33%",
              "Visual, high-clarity media reduces perceived check-out wait time by 35%"
            ].map((text, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm md:text-base text-gray-300 font-poppins font-light">
                <span className="w-2 h-2 rounded-full bg-[#D9FF00] mt-2 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Three Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full growth-enter">
          <GrowthCard 
            icon={TrendingUp}
            value="$20,742"
            label="Revenue Impact"
            subtext="Avg. growth per store location"
          />
          <GrowthCard 
            icon={Percent}
            value="65%+"
            label="Attention Rate"
            subtext="Increase in storefront gaze time"
          />
          <GrowthCard 
            icon={Users}
            value="11.8M+"
            label="Network Reach"
            subtext="Total monthly active store viewers"
          />
        </div>

      </div>
    </section>
  );
};

export default SignageGrowth;
