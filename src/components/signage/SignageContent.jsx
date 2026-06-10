import React, { useRef, useLayoutEffect } from 'react';
import { Play, Sparkles, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reuse avocado asset
import avocadoImg from '../../assets/right (3) (2).jpeg';

const SignageContent = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.content-sec-enter', {
        opacity: 0,
        x: -45,
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
      
      {/* Background radial gradient light source */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,255,0,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Descriptions and Icon Points */}
        <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8 text-left content-sec-enter">
          <div className="flex flex-col space-y-3">
            <span className="text-xs md:text-sm font-bold text-[#D9FF00] tracking-[0.25em] uppercase">
              Creative Assets
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-white leading-tight m-0 uppercase">
              Content Built <br />
              For <span className="text-[#D9FF00]">Digital Screens</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-xl">
            Static images fail to attract engagement. Our design suite provides stunning 3D animation, reactive layouts, and dynamic updates tailored specifically to capture store traffic.
          </p>

          <div className="space-y-6 pt-2">
            {[
              { icon: Play, title: "High-Definition 3D Motion", desc: "Craft bespoke visual loops that command immediate shopper focus as they pass by." },
              { icon: Sparkles, title: "Reactive Dynamic Layouts", desc: "Re-arrange design elements on-screen to align with different seasonal offers or promos." },
              { icon: RefreshCw, title: "Automated Synchronization", desc: "Instantly deploy fresh updates across your screen arrays from a single central portal." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-900 border border-white/10 rounded-xl text-[#D9FF00] shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white font-poppins m-0">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-400 font-light mt-1 max-w-md leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Billboard Mockup (Juicy Burger Display) */}
        <div className="lg:col-span-7 flex justify-center items-center w-full content-sec-enter">
          <div className="relative w-full max-w-[580px] aspect-[16/9] bg-[#121310] rounded-[2rem] p-3 border-2 border-white/5 shadow-2xl overflow-hidden group">
            
            {/* Ambient specular highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-[1500ms] pointer-events-none z-30" />

            {/* Simulated billboard display area */}
            <div 
              className="h-full w-full rounded-[1.5rem] bg-cover bg-center p-6 flex flex-col justify-between text-left relative"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%), url(${avocadoImg})`
              }}
            >
              
              {/* Ad Content */}
              <div className="max-w-[60%] flex flex-col justify-center h-full space-y-2 text-white">
                <span className="text-[10px] md:text-xs font-black text-[#D9FF00] tracking-widest uppercase">
                  Bistro Gourmet
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-poppins uppercase leading-none tracking-tight">
                  The Perfect <br />
                  Burger
                </h3>
                <p className="text-[9px] md:text-xs text-gray-200 font-light leading-relaxed max-w-[200px]">
                  Flame-grilled premium beef with organic vegetables and artisan cheese.
                </p>
                
                <div className="pt-2 flex items-center space-x-2">
                  <span className="text-xs font-bold bg-[#D9FF00] text-black rounded px-2 py-0.5">SAVE 15%</span>
                  <span className="text-xs text-gray-300">Aisle 3 Bistro</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignageContent;
