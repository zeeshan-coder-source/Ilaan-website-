import React, { useRef, useLayoutEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reuse existing assets
import tomatoImg from '../../assets/right (3).jpeg';

const SignageRevenue = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.revenue-enter', {
        opacity: 0,
        y: 40,
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
      className="bg-[#080808] py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-[90vh] border-t border-white/5 relative overflow-hidden"
    >
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,255,0,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Onboarding info & button */}
        <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 text-left revenue-enter">
          <div className="flex flex-col space-y-3">
            <span className="text-xs md:text-sm font-bold text-[#D9FF00] tracking-[0.25em] uppercase">
              Passive Income
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-white leading-tight m-0 uppercase">
              Turn Screens <br />
              Into <span className="text-[#D9FF00]">Revenue</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-xl">
            Unlock additional cash flows from your physical brick-and-mortar storefronts. Connect your existing digital display monitors to the Ilaan ad network to display sponsored brand campaigns automatically.
          </p>

          <div className="space-y-4 pt-2">
            {[
              "Monetize unused real estate and display assets effortlessly",
              "Retain full controls over what ad campaigns appear inside your stores",
              "Receive high-margin programmatic payouts directly to your dashboard"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#D9FF00] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm md:text-base font-light font-poppins">{text}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button className="flex items-center justify-center gap-2 px-10 py-3.5 bg-[#D9FF00] text-black font-bold rounded-full hover:bg-[#c4e600] transition-all duration-300 text-[14px] md:text-base shadow-md hover:scale-105 active:scale-95 cursor-pointer">
              Become a Partner <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Overlapping Screen Displays */}
        <div className="lg:col-span-6 flex justify-center items-center w-full relative h-[400px] md:h-[480px] revenue-enter">
          
          {/* Back Screen (Fashion display 1) */}
          <div className="absolute top-[5%] left-[10%] w-[180px] sm:w-[220px] md:w-[250px] aspect-[9/14] bg-neutral-900 rounded-3xl p-2 border border-white/10 shadow-xl opacity-60 scale-90 translate-x-[-10px] flex flex-col overflow-hidden pointer-events-none">
            <div 
              className="h-full w-full rounded-2xl bg-cover bg-center p-4 flex flex-col justify-between text-left"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url(${tomatoImg})`
              }}
            >
              <div>
                <span className="block text-[8px] font-black text-gray-300 tracking-widest uppercase">Apparel</span>
                <span className="block text-xs font-extrabold text-white uppercase mt-0.5">Winter Style</span>
              </div>
              <span className="text-[10px] text-gray-400">Model 24</span>
            </div>
          </div>

          {/* Front Screen (Fashion display 2 - active screen) */}
          <div className="absolute top-[15%] right-[10%] w-[200px] sm:w-[240px] md:w-[280px] aspect-[9/14] bg-[#0c0d0a] rounded-[2rem] p-3 border-2 border-[#D9FF00]/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden z-25 group">
            
            {/* Glossy Reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] pointer-events-none z-30" />
            
            <div 
              className="h-full w-full rounded-[1.5rem] bg-cover bg-center p-5 flex flex-col justify-between text-left relative"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.85) 100%), url(${tomatoImg})`,
                filter: 'hue-rotate(60deg)' // Changes background slightly for visual variance
              }}
            >
              <div>
                <span className="block text-[8px] md:text-[9px] font-black text-[#D9FF00] tracking-widest uppercase">
                  Fashion Network
                </span>
                <span className="block text-sm md:text-lg font-black text-white leading-tight uppercase mt-0.5">
                  New <br /> Collection
                </span>
              </div>

              <div className="border-t border-white/20 pt-2 flex justify-between items-baseline text-white">
                <span className="text-[9px] md:text-[10px] text-gray-200">20% Off Promo</span>
                <span className="text-xs md:text-sm font-bold text-[#D9FF00] uppercase tracking-wider">
                  Active
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SignageRevenue;
