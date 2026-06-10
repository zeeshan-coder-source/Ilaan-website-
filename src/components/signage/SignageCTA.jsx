import React, { useRef, useLayoutEffect } from 'react';
import { ArrowRight, HelpCircle, Mail, PhoneCall } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assets
import logo3D from '../../assets/Circle.mp4';

const SignageCTA = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-enter', {
        opacity: 0,
        y: 40,
        duration: 1.0,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-[#D9FF00] p-4 sm:p-6 md:p-12 lg:p-16 flex items-center justify-center border-t border-[#D9FF00]"
    >
      {/* Black Rounded Box inside the yellow frame */}
      <div className="w-full max-w-[1600px] bg-black text-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl cta-enter">
        
        {/* Glow backdrop detail */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#D9FF00]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Left Side: Contact details & CTA */}
        <div className="flex flex-col space-y-6 md:space-y-8 text-left max-w-2xl z-10">
          <div className="flex flex-col space-y-3">
            <span className="text-xs md:text-sm font-bold text-[#D9FF00] tracking-[0.25em] uppercase">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-poppins text-white leading-none m-0 uppercase">
              Start Reaching <br />
              Customers in the <br />
              <span className="text-[#D9FF00]">Real World</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-lg">
            Deploy dynamic real-world campaigns, manage screen setups, and drive conversions at the shelf. Connect with an expert today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="flex items-center justify-center gap-2 px-10 py-4 bg-[#D9FF00] text-black font-bold rounded-full hover:bg-[#c4e600] transition-all duration-300 text-[14px] md:text-base shadow-[0_10px_25px_-5px_rgba(217,255,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer">
              Get Started <ArrowRight className="w-4 h-4 md:w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 text-[14px] md:text-base hover:scale-105 active:scale-95 cursor-pointer">
              Talk to an Expert
            </button>
          </div>

          {/* Quick Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full text-xs text-gray-500 uppercase tracking-wider font-semibold">
            <div className="flex items-center space-x-2">
              <PhoneCall className="w-4 h-4 text-[#D9FF00]" />
              <span>+1 (800) ILAAN-AD</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#D9FF00]" />
              <span>partner@ilaan.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-[#D9FF00]" />
              <span>Support Portal</span>
            </div>
          </div>
        </div>

        {/* Right Side: Animated 3D Glowing Video Logo */}
        <div className="flex justify-center items-center z-10 shrink-0">
          <div className="relative w-[220px] sm:w-[280px] md:w-[350px] aspect-square rounded-full border border-white/5 bg-gradient-to-b from-[#121310] to-[#080808] flex items-center justify-center shadow-inner overflow-hidden group">
            
            {/* Spinning ring highlight */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#D9FF00]/10 animate-spin [animation-duration:60s]" />
            <div className="absolute inset-6 rounded-full border border-dashed border-[#D9FF00]/5 animate-spin [animation-duration:30s] [animation-direction:reverse]" />

            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.06)_0%,transparent_70%)] pointer-events-none" />
            
            <video 
              src={logo3D}
              autoPlay
              loop
              muted
              playsInline
              className="w-[75%] h-[75%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignageCTA;
