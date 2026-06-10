import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reuse avocadoImg as base, or we can use another backdrop representation
import tomatoImg from '../../assets/right (3).jpeg';

const SignageReach = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reach-enter', {
        opacity: 0,
        x: -40,
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
      className="bg-[#080808] py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-screen border-t border-white/5 relative overflow-hidden"
    >
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(217,255,0,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Numbered List */}
        <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 text-left reach-enter">
          <div className="flex flex-col space-y-3">
            <span className="text-xs md:text-sm font-bold text-[#D9FF00] tracking-[0.25em] uppercase">
              Perfect Timing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-white leading-tight m-0 uppercase">
              Reach Customers <br />
              When It <span className="text-[#D9FF00]">Matters Most</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-xl">
            Context is everything. By delivering targeted promotions right before the customer checks out or as they walk through high-intent store sections, you convert attention into buying actions.
          </p>

          <div className="space-y-6 pt-2">
            {[
              { num: "01", title: "Traffic Triggered Dispatch", desc: "Push premium food ads during lunch hours or clothing promos during evening mall rushes." },
              { num: "02", title: "Contextual Campaigns", desc: "Change product offerings dynamically based on real-time inventory levels or outdoor weather changes." },
              { num: "03", title: "Shelf Price Integration", desc: "Seamlessly synchronize screen displays with Electronic Shelf Labels to prevent pricing mismatches." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D9FF00]/30 flex items-center justify-center text-[#D9FF00] text-sm md:text-base font-bold font-mono shrink-0">
                  {item.num}
                </span>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white font-poppins m-0">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-400 font-light mt-1 max-w-md leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Column Signage Screen Mockup */}
        <div className="lg:col-span-6 flex justify-center items-center w-full reach-enter">
          <div className="relative w-full max-w-[420px] aspect-[9/16] bg-[#121310] rounded-[2.5rem] p-4 border border-white/10 shadow-2xl overflow-hidden group">
            
            {/* Ambient Shop column background representation */}
            <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.2]" style={{ backgroundImage: `url(${tomatoImg})` }} />
            
            {/* Main vertical layout column */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10">
              
              {/* Pillar structure */}
              <div className="w-[180px] sm:w-[220px] h-full bg-[#1e201a] border-l-4 border-r-4 border-neutral-900 shadow-inner flex items-center justify-center p-4 relative">
                
                {/* Glow border around embedded signage screen */}
                <div className="absolute inset-x-3 inset-y-12 border border-[#D9FF00]/40 rounded-xl shadow-[0_0_20px_rgba(217,255,0,0.15)] overflow-hidden flex flex-col">
                  
                  {/* Screen Content - Coffee Ad */}
                  <div 
                    className="h-full w-full bg-cover bg-center flex flex-col justify-between p-4 text-left relative"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%), url(${tomatoImg})`
                    }}
                  >
                    <div>
                      <span className="block text-[8px] font-black text-[#D9FF00] tracking-widest uppercase">Café Special</span>
                      <span className="block text-xs sm:text-sm font-black text-white leading-none uppercase mt-0.5">All Day Fresh</span>
                      <span className="block text-sm sm:text-base font-extrabold text-white leading-none uppercase">Coffee</span>
                    </div>

                    <div className="border-t border-white/20 pt-2 flex justify-between items-baseline text-white">
                      <span className="text-[8px] text-gray-300">Aisle 2 Bistro</span>
                      <span className="text-xs font-bold text-[#D9FF00]">$1.99</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SignageReach;
