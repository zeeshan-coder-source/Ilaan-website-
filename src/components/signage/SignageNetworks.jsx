import React, { useRef, useLayoutEffect } from 'react';
import { Network, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reuse avocado asset
import avocadoImg from '../../assets/right (3) (2).jpeg';

const SignageNetworks = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.network-enter', {
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
      className="bg-[#f5f6f2] text-black py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-[95vh] border-t border-neutral-200 relative overflow-hidden"
    >
      
      {/* Background visual detail */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(217,255,0,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Networks List */}
        <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8 text-left network-enter">
          <div className="flex flex-col space-y-3">
            <span className="text-xs md:text-sm font-bold text-neutral-500 tracking-[0.25em] uppercase">
              Scalable Systems
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-poppins text-black leading-tight m-0 uppercase">
              From Screens <br />
              To Media <span className="text-[#a0bf00]">Networks</span>
            </h2>
          </div>

          <p className="text-neutral-600 text-sm md:text-lg font-light leading-relaxed max-w-xl">
            Do not just manage monitors—build an active communication grid. Group displays by category, deploy targeted dynamic assets, and review traffic metrics from a unified terminal.
          </p>

          <div className="space-y-6 pt-2">
            {[
              { icon: Network, title: "Centralized Network Hub", desc: "Organize displays across regional retail chains, shopping malls, or public transit grids." },
              { icon: BarChart2, title: "Comprehensive Dashboard Reports", desc: "Monitor device uptime statistics, dynamic campaign run times, and target metrics." },
              { icon: ShieldCheck, title: "Enterprise Access Control", desc: "Grant custom editing roles and permissions to branch managers or brand creative agencies." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-[#D9FF00] shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-black font-poppins m-0">{item.title}</h4>
                  <p className="text-xs md:text-sm text-neutral-600 font-light mt-1 max-w-md leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Outdoor Billboard and Totem Mockup */}
        <div className="lg:col-span-7 flex justify-center items-center w-full relative h-[400px] md:h-[480px] network-enter">
          
          {/* Main Billboard on Stand */}
          <div className="absolute top-[5%] left-[5%] w-[260px] sm:w-[320px] md:w-[380px] aspect-[16/9] bg-neutral-950 rounded-2xl p-2.5 shadow-[0_25px_50px_rgba(0,0,0,0.2)] border border-neutral-200/50 flex flex-col justify-between overflow-hidden z-20 group cursor-pointer">
            <div 
              className="h-full w-full rounded-xl bg-cover bg-center p-4 flex flex-col justify-between text-left relative"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.85) 100%), url(${avocadoImg})`
              }}
            >
              <div className="max-w-[70%] text-white">
                <span className="block text-[8px] font-black text-[#D9FF00] tracking-widest uppercase">Outdoor Network</span>
                <span className="block text-xs sm:text-sm font-black uppercase leading-tight mt-0.5">High Brightness Totems</span>
              </div>
              <div className="flex items-center justify-between text-white border-t border-white/20 pt-1.5 mt-auto text-[8px]">
                <span>IP65 CERTIFIED</span>
                <span className="text-[#D9FF00] font-bold">4,000 NITS</span>
              </div>
            </div>
          </div>

          {/* Stand Support Column behind billboard */}
          <div className="absolute top-[40%] left-[30%] md:left-[35%] w-6 md:w-8 h-[55%] bg-neutral-800 rounded-b-xl border-l border-r border-neutral-700 pointer-events-none z-10" />

          {/* Small Vertical Totem (overlapping) */}
          <div className="absolute bottom-[5%] right-[5%] w-[100px] sm:w-[130px] md:w-[160px] aspect-[9/18] bg-neutral-950 rounded-[1.5rem] p-2 border border-neutral-200 shadow-2xl flex flex-col overflow-hidden z-30 group cursor-pointer">
            <div 
              className="h-full w-full rounded-xl bg-cover bg-center p-3 flex flex-col justify-between text-left"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url(${avocadoImg})`,
                filter: 'hue-rotate(90deg)' // Changes background slightly for visual variance
              }}
            >
              <div>
                <span className="block text-[7px] font-black text-[#D9FF00] tracking-widest uppercase">Aisle A</span>
                <span className="block text-[10px] sm:text-xs font-black text-white leading-none uppercase mt-0.5">In-Store</span>
              </div>
              <span className="text-[8px] text-gray-300">Live Campaign</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SignageNetworks;
