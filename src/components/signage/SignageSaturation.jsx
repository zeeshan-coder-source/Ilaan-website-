import React, { useRef, useLayoutEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reuse avocado asset
import avocadoImg from '../../assets/right (3) (2).jpeg';

const SignageSaturation = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.saturation-enter', {
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

      gsap.from('.saturation-mockup', {
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 1.2,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-[#D9FF00] text-black py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-screen relative overflow-hidden"
    >
      
      {/* Massive subtle background text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[15vw] md:text-[22vw] font-black text-black/5 tracking-tighter leading-none font-sans uppercase">
          Ilaan
        </span>
      </div>

      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Checklist & Context */}
        <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 text-left saturation-enter">
          <div className="flex flex-col space-y-3">
            <span className="text-xs md:text-sm font-bold text-black/60 tracking-[0.25em] uppercase">
              Physical Dominance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-65px font-black font-poppins text-black leading-[1.1] tracking-tight m-0 uppercase">
              Digital is Saturated. <br />
              Physical is Underused.
            </h2>
          </div>

          <p className="text-black/80 text-sm md:text-lg font-poppins font-normal leading-relaxed max-w-xl">
            Online advertising channels are overcrowded, expensive, and constantly blocked. Real-world digital screens deliver premium, unskippable visual experiences that capture genuine, active shopper attention.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-2">
            {[
              "95% of online digital ads are ignored or skipped immediately",
              "In-store screens command 4x more active gaze time than online ads",
              "Real-world media campaigns cannot be blocked by ad blockers",
              "Direct physical visual contact drives 2.5x higher memory recall"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-black/90">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-black shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm md:text-[15px] font-medium font-poppins leading-snug">{text}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <span className="inline-block border border-black/25 rounded-full px-5 py-2 text-xs md:text-sm font-bold tracking-widest uppercase">
              100% Viewable Impression
            </span>
          </div>
        </div>

        {/* Right Column: Comparative Mockups (Phone vs Screen) */}
        <div className="lg:col-span-6 flex justify-center items-center w-full saturation-mockup">
          <div className="relative flex items-center space-x-6 md:space-x-10">
            
            {/* Mockup 1: Smartphone (Represents Online Saturated Ads) */}
            <div className="w-[140px] sm:w-[170px] md:w-[210px] aspect-[9/18.5] bg-black rounded-[1.8rem] p-2 border-4 border-neutral-900 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              <div className="w-20 h-4 bg-black rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-20" />
              
              {/* Fake Social Feed with ad clutter overlay */}
              <div className="h-full w-full rounded-[1.2rem] bg-neutral-900 overflow-hidden p-3 flex flex-col justify-between text-left relative text-white">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full bg-neutral-700" />
                  <div className="w-12 h-2 bg-neutral-700 rounded" />
                </div>
                
                {/* Simulated Ad Popups */}
                <div className="space-y-2 py-4 flex-grow flex flex-col justify-center">
                  <div className="bg-red-500/90 text-[9px] font-bold rounded p-2 text-center shadow-lg border border-red-400">
                    AD SPAM! [SKIP]
                  </div>
                  <div className="bg-[#2563eb] text-[8px] rounded p-1.5 text-center shadow border border-blue-400">
                    Sponsored Banner Ad
                  </div>
                  <div className="bg-yellow-500/90 text-black text-[9px] font-bold rounded p-2 text-center shadow-lg">
                    AdBlock Blocked
                  </div>
                </div>

                <div className="w-full h-8 bg-neutral-800 rounded-lg flex items-center px-2">
                  <div className="w-full h-2 bg-neutral-700 rounded" />
                </div>
              </div>
            </div>

            {/* Mockup 2: Large Visual Display (Represents Real World Screen) */}
            <div className="w-[160px] sm:w-[190px] md:w-[240px] aspect-[9/16] bg-neutral-950 rounded-[1.8rem] p-2 md:p-3 border-4 border-neutral-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] z-20 pointer-events-none" />
              
              {/* Product Poster screen */}
              <div 
                className="h-full w-full rounded-[1.2rem] overflow-hidden bg-cover bg-center flex flex-col justify-between p-3.5 text-left relative text-white"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 100%), url(${avocadoImg})`
                }}
              >
                <div>
                  <span className="block text-[8px] md:text-[9px] font-bold tracking-widest text-[#D9FF00] uppercase">
                    Daily Fresh
                  </span>
                  <span className="block text-sm md:text-lg font-black leading-none uppercase mt-0.5">
                    Avocados
                  </span>
                </div>

                <div className="flex items-end justify-between w-full border-t border-white/20 pt-1.5 mt-auto">
                  <span className="text-[10px] md:text-xs text-gray-200">100% Natural</span>
                  <span className="text-[11px] md:text-sm font-bold text-[#D9FF00]">$2.99 / ea</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SignageSaturation;
