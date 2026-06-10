import React, { useRef, useLayoutEffect } from 'react';
import { Eye, TrendingUp, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reuse tomato and other assets
import tomatoImg from '../../assets/right (3).jpeg';

const SignageDecision = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.decision-enter', {
        opacity: 0,
        y: 50,
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
      className="bg-[#0c0d0a] py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-screen border-t border-white/5 relative overflow-hidden"
    >
      
      {/* Background visual texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,255,0,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Metrics & Charts */}
        <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 text-left decision-enter">
          <div className="flex flex-col space-y-3">
            <span className="text-xs md:text-sm font-bold text-[#D9FF00] tracking-[0.25em] uppercase">
              Purchase Triggers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-white leading-tight m-0 uppercase">
              Influence Customers <br />
              At The <span className="text-[#D9FF00]">Point of Decision</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-xl">
            Over 70% of purchasing decisions are made directly at the retail shelf. Capturing attention during this critical micro-moment is the single most effective way to swing brand preferences.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-6">
            <div className="text-left">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#D9FF00] font-mono">18x</span>
              <span className="block text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Gaze Duration</span>
            </div>
            <div className="text-left">
              <span className="block text-2xl md:text-3xl font-extrabold text-white font-mono">2.5x</span>
              <span className="block text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Gaze Frequency</span>
            </div>
            <div className="text-left">
              <span className="block text-2xl md:text-3xl font-extrabold text-white font-mono">+15%</span>
              <span className="block text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Uplift Spike</span>
            </div>
          </div>

          {/* Sales Uplift Chart Mockup */}
          <div className="bg-[#121310]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-[160px] relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Performance Report</span>
                <span className="text-xl font-bold text-[#D9FF00] font-poppins">+18% Sales Uplift</span>
              </div>
              <TrendingUp className="w-5 h-5 text-[#D9FF00]" />
            </div>

            {/* Glowing SVG Chart Curve */}
            <div className="absolute bottom-0 left-0 right-0 h-16 w-full opacity-70">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D9FF00" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#D9FF00" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,90 Q15,80 30,50 T60,40 T90,20 L100,20 L100,100 L0,100 Z" fill="url(#chartGlow)" />
                <path d="M0,90 Q15,80 30,50 T60,40 T90,20 L100,20" fill="none" stroke="#D9FF00" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Mockup of Store Display */}
        <div className="lg:col-span-6 flex justify-center items-center w-full decision-enter">
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
            
            {/* Ambient background store texture */}
            <div className="absolute inset-0 bg-cover bg-center select-none" style={{ backgroundImage: `url(${tomatoImg})`, filter: 'brightness(0.3) blur(2px)' }} />

            {/* Glowing in-store screen display mockup */}
            <div className="absolute top-[10%] right-[10%] w-[180px] sm:w-[220px] aspect-[9/16] bg-black rounded-3xl p-2 border border-[#D9FF00]/30 shadow-[0_0_40px_rgba(217,255,0,0.15)] flex flex-col justify-between overflow-hidden">
              <div 
                className="h-full w-full rounded-2xl bg-cover bg-center p-3 flex flex-col justify-between text-left relative"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.9) 100%), url(${tomatoImg})`
                }}
              >
                <div>
                  <span className="block text-[8px] font-black text-[#D9FF00] tracking-widest uppercase">Special Ad</span>
                  <span className="block text-xs sm:text-sm font-black text-white leading-none mt-1 uppercase">Fresh Produce</span>
                </div>

                <div className="flex items-center justify-between border-t border-white/20 pt-1 text-[8px] text-gray-200">
                  <span>AISLE 4 SPECIALS</span>
                  <span className="text-[#D9FF00] font-bold">SAVE 20%</span>
                </div>
              </div>
            </div>

            {/* Shopper gaze indicator overlay */}
            <div className="absolute bottom-[20%] left-[10%] bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center space-x-3 text-left">
              <div className="p-2 bg-[#D9FF00]/10 border border-[#D9FF00]/20 rounded-lg text-[#D9FF00]">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-gray-400">Shopper Focus Detected</span>
                <span className="block text-sm font-bold text-white font-poppins">Gaze Duration: 4.8s</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SignageDecision;
