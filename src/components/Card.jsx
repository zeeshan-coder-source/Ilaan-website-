import React, { useRef, useLayoutEffect } from 'react';
import { User, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images Import from assets
import card1 from '../assets/c1.png';
import card2 from '../assets/c2.png';
import card3 from '../assets/c3.png';
import card4 from '../assets/c4.png';
import head1 from '../assets/Untitled-7 1.png';
import head3 from '../assets/Untitled-8 1.png';
import head4 from '../assets/Untitled-9 1.png';
import head2 from '../assets/Group 124.png';

const Card = ({ titleImg, description, image, bgColor, textColor, showLogin, btnColor, btnTextColor }) => {
  return (
    <div
      // className={`service-card relative group w-full h-[360px] sm:h-[480px] md:h-[620px] lg:h-[600px] xl:h-[805px] rounded-[2.5rem] md:rounded-[4rem] rounded-tl-none md:rounded-tl-none pt-5 p-5 md:pt-14 md:p-16 flex flex-col justify-start overflow-hidden shadow-2xl ${bgColor} ${textColor} cursor-pointer origin-center will-change-transform`}
      className={`service-card relative group w-full h-[260px] sm:h-[480px] md:h-[620px] lg:h-[600px] xl:h-[660px] rounded-[2.5rem] md:rounded-[4rem] rounded-tl-none md:rounded-tl-none pt-5 p-5 md:pt-14 md:p-16 flex flex-col justify-start overflow-hidden shadow-2xl ${bgColor} ${textColor} cursor-pointer origin-center will-change-transform`}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10 w-full">
        <div className="mb-3 md:mb-6 h-6 sm:h-8 md:h-12 lg:h-14 xl:h-16 w-auto flex items-center justify-start">
          <img src={titleImg} alt="Heading" className="h-full w-auto object-contain" />
        </div>

        <div className="rounded-[1.5rem] overflow-hidden mt-1 md:mt-2 mb-2 md:mb-4">
          <img src={image} alt="Card visual" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" />
        </div>

        <p className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[22px] font-poppins font-normal leading-[1.5] md:leading-[1.7] tracking-normal mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-12 opacity-90 max-w-[700px] text-left">
          {description}
        </p>


      </div>

      {/* <div className={`relative z-10 mt-auto flex flex-wrap gap-2 md:gap-4 items-center ${showLogin ? 'justify-center md:justify-end' : 'justify-end'} w-full pb-1 md:pb-2`}>
        {showLogin && (
          <button className="flex items-center justify-center gap-1 w-[125px] h-[30px] md:w-auto md:h-auto md:px-8 md:py-3.5 border border-black rounded-full font-bold hover:bg-black/5 transition-all text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg whitespace-nowrap">
            <User size={22} className="w-3 h-3 md:w-[22px] md:h-[22px]" /> Login <ChevronRight size={20} className="w-3 h-3 md:w-5 md:h-5" />
          </button>
        )}
        <button
          className={`flex items-center justify-center gap-1 w-[125px] h-[30px] md:w-auto md:h-auto md:px-10 md:py-3.5 rounded-full font-bold hover:opacity-90 transition-all text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg whitespace-nowrap ${btnColor || 'bg-black'} ${btnTextColor || 'text-white'}`}
        >
          Learn more <ChevronRight size={20} className="w-3 h-3 md:w-5 md:h-5" />
        </button>
      </div> */}

    </div>
  );
};

const ServiceSection = () => {
  const containerRef = useRef(null);

  const services = [
    { titleImg: head1, description: "Control every screen from one place. Keep content consistent, visible and across your entire network.", image: card1, bgColor: "bg-[#D9FF00]", textColor: "text-black", showLogin: true, btnColor: "bg-black", btnTextColor: "text-white" },
    { titleImg: head2, description: "Displays built for commercial use. Reliable, high-performance screens designed for retail, QSR and high-traffic environments.", image: card2, bgColor: "bg-[#404040]", textColor: "text-[#D9FF00]", showLogin: false, btnColor: "bg-[#D9FF00]", btnTextColor: "text-black" },
    { titleImg: head3, description: "Reduce manual work across your store. Update pricing instantly and eliminate repetitive tasks.", image: card3, bgColor: "bg-[#FFFF00]", textColor: "text-black", showLogin: true, btnColor: "bg-black", btnTextColor: "text-white" },
    { titleImg: head4, description: "Access retail media in the real world. Run campaigns across a growing network of in-store screens.", image: card4, bgColor: "bg-[#FF33FF]", textColor: "text-white", showLogin: false, btnColor: "bg-black", btnTextColor: "text-white" }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state to prevent flash of content
      gsap.set('.service-card', {
        y: 150,
        z: -500,
        opacity: 0,
        scale: 0.8,
        rotationX: -15,
        transformPerspective: 2000
      });

      gsap.to('.service-card', {
        y: 0,
        z: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        stagger: {
          amount: 0.4,
          from: "start"
        },
        duration: 1.0,
        ease: 'power4.out',
        force3D: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none none', // Replay every time it enters view
        }




      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div
      ref={containerRef}
      className="bg-black py-8 px-4 md:px-8 overflow-hidden min-h-screen flex flex-col items-center justify-center perspective-2000"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8 w-full max-w-[1828px]">
        {services.map((service, index) => (
          <Card
            key={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};


export default ServiceSection;


