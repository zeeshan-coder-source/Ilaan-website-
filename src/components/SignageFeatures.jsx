import React, { useRef, useLayoutEffect } from 'react';
import { Clock, RefreshCw, Eye, ShieldCheck, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FeatureCard = ({ icon: Icon, title, description, badge }) => (
  <div className="signage-feature-card bg-[#121310]/50 backdrop-blur-xl border border-white/5 hover:border-[#D9FF00]/45 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_15px_40px_rgba(217,255,0,0.06)] hover:scale-[1.02] cursor-pointer group relative overflow-hidden h-[300px] md:h-[350px]">
    
    {/* Subtle inner radial gradient on hover */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,255,0,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <div>
      {/* Badge & Icon Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="p-3.5 bg-neutral-900 border border-white/10 rounded-2xl text-[#D9FF00] group-hover:bg-[#D9FF00] group-hover:text-black transition-colors duration-500">
          <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
        </div>
        {badge && (
          <span className="text-[10px] md:text-xs font-semibold text-[#D9FF00] bg-[#D9FF00]/10 border border-[#D9FF00]/20 rounded-full px-3 py-1 uppercase tracking-widest">
            {badge}
          </span>
        )}
      </div>

      {/* Header */}
      <h3 className="text-xl md:text-2xl font-bold font-poppins text-white mb-3 tracking-tight group-hover:text-[#D9FF00] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-400 font-poppins font-light leading-relaxed max-w-[90%]">
        {description}
      </p>
    </div>

    {/* Detail link trigger */}
    <div className="flex justify-end mt-4">
      <span className="w-10 h-10 bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-[#D9FF00] group-hover:text-black group-hover:border-transparent transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </div>

  </div>
);

const SignageFeatures = () => {
  const containerRef = useRef(null);

  const features = [
    {
      icon: Clock,
      title: "Smart Content Scheduling",
      description: "Automate your campaigns based on daily customer patterns, peak hours, seasonality, or live weather data integrations.",
      badge: "Automation"
    },
    {
      icon: RefreshCw,
      title: "Instant Cloud Synchrony",
      description: "Manage pricing, update product detail lists, and dispatch new graphic campaigns to any display anywhere in seconds.",
      badge: "Real-time"
    },
    {
      icon: Eye,
      title: "Audience Intelligence",
      description: "Leverage anonymous sensor insights to tailor visual content dynamically to viewer demographics and engagement rates.",
      badge: "Analytics"
    },
    {
      icon: ShieldCheck,
      title: "Commercial-Grade Durability",
      description: "Engineered with dust protection, sunlight readability, and efficient cooling systems built for 24/7 continuous operations.",
      badge: "Enterprise"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Grid items staggered reveal
      gsap.from('.signage-feature-card', {
        opacity: 0,
        y: 80,
        scale: 0.95,
        stagger: 0.15,
        duration: 1.0,
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
      className="bg-black py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-[1600px] flex flex-col space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-4 text-left max-w-2xl">
          <span className="text-xs md:text-sm font-bold text-[#D9FF00] tracking-[0.25em] uppercase">
            Platform Benefits
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-white leading-tight m-0">
            Why Brands Choose <br />
            Ilaan Signage Solutions
          </h2>
          <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed max-w-xl">
            A secure, automated screen management ecosystem built to maximize retail visibility, drive customer engagement, and lower ownership overhead.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignageFeatures;
