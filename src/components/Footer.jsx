import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HoverLink = ({ text, className = "", defaultColor = "white", hoverColor = "#cdff00" }) => {
  const [hovered, setHovered] = useState(false);
  const cleanClassName = className.split(' ').filter(c => !['hover:text-[#cdff00]', 'hover:underline', 'transition'].includes(c)).join(' ');
  
  return (
    <a
      href="#"
      className={`inline-block relative overflow-hidden ${cleanClassName}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="block whitespace-nowrap text-center" style={{ color: defaultColor }}>
        {text.split('').map((char, i) => (
          <span
            key={`a-${i}`}
            className="inline-block"
            style={{
              transform: hovered ? 'translateY(-120%)' : 'translateY(0%)',
              opacity: hovered ? 0 : 1,
              transition: `transform 0.38s cubic-bezier(0.76,0,0.24,1), opacity 0.32s ease`,
              transitionDelay: `${i * 32}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 block whitespace-nowrap text-center" style={{ color: hoverColor }}>
        {text.split('').map((char, i) => (
          <span
            key={`b-${i}`}
            className="inline-block"
            style={{
              transform: hovered ? 'translateY(0%)' : 'translateY(110%)',
              opacity: hovered ? 1 : 0,
              transition: `transform 0.38s cubic-bezier(0.76,0,0.24,1), opacity 0.32s ease`,
              transitionDelay: `${i * 32}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </a>
  );
};
import logoIcon from '../assets/3d_Logo 1.png';
import grayPanel from '../assets/graypanel.png';
import grayPanelMobile from '../assets/graypanelmobile.png';
import moreAttentionImg from '../assets/More Attention.png';
import moreSalesImg from '../assets/More Sales.png';
import everyDayImg from '../assets/Every Day.png';
import digitalSignageImg from '../assets/DIGITAL SIGNAGE.png';
import ilanImg from '../assets/ilan.png';

const Footer = () => {
  return (
    <footer
      className="w-full font-sans overflow-hidden relative"
      style={{ background: 'linear-gradient(to bottom, #e6fba2 0%, #cdff00 100%)' }}
    >
      {/* Background Panel Container */}
      <div className="relative mx-auto w-[90%] md:w-[95%] min-h-[700px] md:min-h-[780px] flex flex-col items-center text-white px-6 pt-12 pb-24">
        {/* Mobile Background Panel */}
        <div 
          className="absolute inset-0 md:hidden z-0"
          style={{
            backgroundImage: `url(${grayPanelMobile})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        {/* Desktop Background Panel */}
        <div 
          className="absolute inset-0 hidden md:block z-0"
          style={{
            backgroundImage: `url(${grayPanel})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        {/* --- MOBILE LAYOUT (Only visible on small screens) --- */}
        <div className="flex md:hidden flex-col items-center w-full z-10 pt-10">

          {/* 1. Navigation: Pages & Follow On Side by Side */}
          <div className="flex justify-between w-full mb-14 px-4">
            {/* Pages Column */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] tracking-[0.4em] text-gray-500 font-bold uppercase mb-4 opacity-80">PAGES</span>
              <nav className="flex flex-col items-center font-bold text-[17px] leading-[1.3] tracking-normal space-y-1 text-center">
                <HoverLink text="STUDIO" />
                <HoverLink text="DIGITAL SIGNAGE" />
                <HoverLink text="LINK" />
                <HoverLink text="MEDIA" />
                <HoverLink text="STORE" className="font-bold text-[15px] mt-6 uppercase tracking-widest" defaultColor="#cdff00" hoverColor="white" />
              </nav>
            </div>

            {/* Follow On Column */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] tracking-[0.4em] text-gray-500 font-bold uppercase mb-4 opacity-80">FOLLOW ON</span>
              <nav className="flex flex-col items-center font-bold text-[17px] leading-[1.3] tracking-normal space-y-1 text-center">
                <HoverLink text="TIKTOK" />
                <HoverLink text="INSTAGRAM" className="uppercase" />
                <HoverLink text="YOUTUBE" className="uppercase" />
                <HoverLink text="FACEBOOK" className="uppercase" />
                <HoverLink text="LINKEDIN" className="uppercase" />
                <HoverLink text="X" className="uppercase" />
              </nav>
            </div>
          </div>

          {/* 2. Headline: Middle Section */}
          <div className="flex flex-col items-center text-center mb-14 space-y-1">
            <img src={moreAttentionImg} alt="More Attention" className="h-[32px] sm:h-[36px] w-auto object-contain" />
            <img src={moreSalesImg} alt="More Sales" className="h-[32px] sm:h-[36px] w-auto object-contain" />
            <img src={everyDayImg} alt="Every Day" className="h-[32px] sm:h-[36px] w-auto object-contain" />
          </div>

          {/* 3. Identity: Logo and Brand Name */}
          <div className="flex flex-col items-center -space-y-4">
            <img
              src={logoIcon}
              alt="Icon"
              className="w-48 h-auto object-contain z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
            <img
              src={ilanImg}
              alt="ILAAN"
              className="w-64 h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (Hidden on mobile, completely unchanged logic) --- */}
        <div className="hidden md:flex flex-col items-center w-full">
          {/* 1. Top Headline */}
          <div className="flex flex-col items-center text-center mb-6 md:mb-2 z-10 -space-y-1 md:-space-y-2">
            <img src={moreAttentionImg} alt="More Attention" className="h-6 md:h-10 lg:h-12 w-auto object-contain mt-12 md:mt-8 lg:mt-10" />
            <img src={moreSalesImg} alt="More Sales" className="h-6 md:h-10 lg:h-12 w-auto object-contain" />
            <img src={everyDayImg} alt="Every Day" className="h-6 md:h-10 lg:h-12 w-auto object-contain" />
          </div>

          {/* 2. Main Center Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_auto_1.2fr] items-center w-full max-w-[1600px] mx-auto z-10 gap-y-12 md:gap-y-0">
            {/* LEFT: Pages */}
            <div className="flex flex-col items-center md:pr-14 lg:pr-24">
              <span className="text-[10px] tracking-[0.4em] text-gray-500 font-bold uppercase mb-2 opacity-60">PAGES</span>
              <nav className="flex flex-col items-center font-extrabold text-[28px] md:text-[45px] leading-[1] tracking-tighter space-y-1 text-center">
                <motion.div whileHover={{ y: -8 }}><HoverLink text="STUDIO" /></motion.div>
                <motion.a whileHover={{ y: -8 }} href="#" className="hover:text-[#cdff00] transition flex items-center justify-center">
                  <img src={digitalSignageImg} alt="DIGITAL SIGNAGE" className="h-7 md:h-11 lg:h-12 w-auto object-contain" />
                </motion.a>
                <HoverLink text="LINK" />
                <HoverLink text="MEDIA" />
              </nav>
              <HoverLink text="STORE" className="font-bold text-[18px] mt-10 uppercase tracking-widest" defaultColor="#cdff00" hoverColor="white" />
            </div>

            {/* CENTER: Identity */}
            <div className="flex flex-col items-center justify-center -space-y-2 md:-space-y-4">
              <img
                src={logoIcon}
                alt="Icon"
                className="w-44 md:w-64 lg:w-72 h-auto object-contain z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
              />
              <img
                src={ilanImg}
                alt="ILAAN"
                className="w-56 md:w-[210px] lg:w-[339px] h-auto object-contain select-none"
              />
            </div>

            {/* RIGHT: Socials */}
            <div className="flex flex-col items-center md:pl-14 lg:pl-24">
              <span className="text-[10px] tracking-[0.4em] text-gray-500 font-bold uppercase mb-2 opacity-60">FOLLOW ON</span>
              <nav className="flex flex-col items-center font-extrabold text-[28px] md:text-[45px] leading-[1] tracking-tighter space-y-1 text-center">
                <HoverLink text="TIKTOK" />
                <HoverLink text="INSTAGRAM" className="uppercase" />
                <HoverLink text="YOUTUBE" className="uppercase" />
                <HoverLink text="FACEBOOK" className="uppercase" />
                <HoverLink text="LINKEDIN" className="uppercase" />
                <HoverLink text="X" className="uppercase" />
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar: Exact match with image gaps and positioning */}
      <div className="w-full flex flex-row md:flex-row-reverse justify-between items-center px-6 sm:px-10 md:px-16 pb-4 pt-8 text-[10px] md:text-[12px] font-bold md:font-black uppercase text-black tracking-normal md:tracking-tighter z-20 md:absolute md:bottom-[-5px] md:left-0">
        <div className="flex space-x-5 sm:space-x-6 md:space-x-12">
          <HoverLink text="PRIVACY POLICY" defaultColor="black" hoverColor="#cdff00" />
          <HoverLink text="TERMS" defaultColor="black" hoverColor="#cdff00" />
        </div>
        <div className="opacity-90 text-right">
          © 2026 Ilaan Limited. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

