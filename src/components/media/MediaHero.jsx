import React, { useState, useRef, useLayoutEffect } from 'react';
import { Menu, MapPin, Search, Navigation, Bell, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavOverlay from '../NavOverlay';
import { useNavigation } from '../../context/NavigationContext';

// Absolute assets matching the targeted path declarations
import mapImage from '../../assets/map.png';
import mediaLogoImage from '../../assets/medialogo.png';
import mediaBgImage from '../../assets/MediaBG.png';
import notigIcon from '../../assets/notigicon.png';
import yellowMicon from '../../assets/yellowmicon.png';
import blackMicon from '../../assets/blackmicon.png';
import blueMicon from '../../assets/bluemicon.png';
import purpleMicon from '../../assets/purplemicon.png';
import orangeMicon from '../../assets/orangemicon.png';
import greenMicon from '../../assets/greenmicon.png';
import pinkMicon from '../../assets/pinkmicon.png';
import redMicon from '../../assets/redmicon.png';

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  { name: 'Glasgow', screens: 15, color: '#D9FF00', coords: { x: '62%', y: '52%' }, icon: yellowMicon },
  { name: 'Edinburgh', screens: 12, color: '#FF3B30', coords: { x: '69%', y: '56%' }, icon: redMicon },
  { name: 'Paisley', screens: 6, color: '#007AFF', coords: { x: '37%', y: '42%' }, icon: blueMicon },
  { name: 'East Kilbride', screens: 5, color: '#AF52DE', coords: { x: '44%', y: '52%' }, icon: purpleMicon },
  { name: 'Livingston', screens: 4, color: '#FFCC00', coords: { x: '68%', y: '52%' }, icon: yellowMicon },
  { name: 'Stirling', screens: 3, color: '#4CD964', coords: { x: '56%', y: '22%' }, icon: greenMicon },
  { name: 'Dumbarton', screens: 3, color: '#FF9500', coords: { x: '50%', y: '30%' }, icon: orangeMicon },
  { name: 'Kilmarnock', screens: 2, color: '#FF2D55', coords: { x: '39%', y: '18%' }, icon: pinkMicon },
];

const MediaHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Glasgow');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [activeMobileTab, setActiveMobileTab] = useState('list');
  const { navigateTo } = useNavigation();

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const mapCardRef = useRef(null);

  const filteredCities = CITIES.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Content fade out on tracking scroll interactions
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: true,
        },
      });

      // Slide and scale dynamic dashboard panel setup
      gsap.from(mapCardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.3,
      });

      // Text stagger reveal rules
      gsap.from('.reveal-text-media', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#04010a] text-white font-sans flex flex-col items-center justify-start overflow-hidden pt-6 pb-20 px-4 md:px-8"
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Background Graphic Context — Structured to balance scale properties evenly */}
      <div className="absolute inset-0 z-0">
        <img
          src={mediaBgImage}
          alt="Media Background Layer"
          className="w-full h-[102%] object-fit object-center"
        />
        <div className="absolute inset-0 bg-[#04010a]/15 pointer-events-none" />
      </div>

      {/* Top Navbar Section Container */}
      <header className="relative z-30 flex items-center justify-between w-full py-1 px-6 md:px-2 bg-transparent">
        {/* Dynamic Vector Brand Logo Anchor */}
        <div
          onClick={() => navigateTo('home')}
          className="flex items-center cursor-pointer hover:opacity-85 transition-opacity shrink-0"
        >
          <img
            src={mediaLogoImage}
            alt="Ilaan Media Logo"
            className="h-10 md:h-[44px] w-auto object-contain"
          />
        </div>

        {/* Global Desktop Platform Navigation Bar */}
        <nav className="hidden xl:flex items-center space-x-11 text-white/85 font-medium">
          {['Solutions', 'Locations', 'Industries', 'Resources', 'About Us', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="hover:text-[#FF00D6] transition-colors duration-300 text-[14px] tracking-normal capitalize"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Action Controls Grouping */}
        <div className="hidden xl:flex items-center space-x-[18px]">
          {/* LOG IN Button */}
          <button className="border border-white/10 hover:border-white/30 text-white rounded-lg px-[26px] py-[13px] text-xs font-bold tracking-wider transition-all hover:scale-[1.02] active:scale-95 bg-transparent min-w-[100px]">
            LOG IN
          </button>

          {/* MAKE AN ENQUIRY Button */}
          <button className="px-7 py-3.5 text-xs font-bold tracking-wider text-white rounded-lg bg-gradient-to-r from-[#FF00D6] via-[#A855F7] to-[#3B82F6] hover:opacity-95 transition-all flex items-center gap-[10px] shadow-[0_4px_20px_rgba(255,0,214,0.25)] hover:scale-[1.02] active:scale-95 whitespace-nowrap">
            MAKE AN ENQUIRY <span className="text-base font-normal leading-none -mt-[1px]">→</span>
          </button>
        </div>

        {/* Mobile Flyout Menu Interactive Handle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 transition-transform active:scale-90 hover:scale-105 cursor-pointer text-white hover:text-[#E000FF] xl:hidden bg-transparent border-none outline-none"
        >
          <Menu size={28} strokeWidth={2.5} />
        </button>
      </header>
      <main ref={contentRef} className="relative z-20 flex flex-col items-center justify-center text-center mt-14 md:mt-16 px-4 max-w-5xl mx-auto w-full">
        <h1 className="reveal-text-media text-[44px] sm:text-[60px] md:text-[76px] font-extrabold leading-[1.1] tracking-tight text-white m-0 font-sans">
          Reach Customers <br />
          Where It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D6] via-[#9F00FF] to-[#2B44FF]">Matters Most</span>
        </h1>

        <p className="reveal-text-media mt-7 text-[15px] sm:text-[17px] md:text-[19px] text-gray-300 font-normal leading-relaxed max-w-3xl opacity-90">
          Plan and run advertising campaigns across real-world <br className="hidden sm:inline" />
          screens in high-footfall environments.
        </p>

        {/* Direct Action Handles Navigation triggers — EXACT BUTTON SHAPES & BORDERS */}
        <div className="reveal-text-media mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          {/* Make an enquiry button */}
          <button className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#FF00D6] via-[#9F00FF] to-[#2B44FF] text-white text-[13px] font-bold tracking-wider rounded-lg hover:opacity-95 transition-all duration-300 shadow-[0_8px_30px_rgba(255,0,214,0.25)] flex items-center justify-center gap-3">
            MAKE AN ENQUIRY <span className="text-base font-light">→</span>
          </button>

          {/* View locations button */}
          <button className="w-full sm:w-auto px-9 py-4 bg-[#050112]/40 border border-[#FF00D6]/30 hover:border-[#FF00D6] text-white text-[13px] font-bold tracking-wider rounded-lg hover:bg-[#050112]/80 transition-all duration-300 flex items-center justify-center gap-3">
            VIEW LOCATIONS <MapPin size={16} className="text-[#FF00D6]" strokeWidth={2} />
          </button>
        </div>
      </main>

      {/* Dashboard Map Application Interface Container Panel */}
      {/* <div ref={mapCardRef} className="relative mt-20 md:mt-28 w-full lg:w-[80%] md:w-[90%] sm:w-[95%] mx-auto z-20">
        <div className="w-full bg-[#070311]/85 backdrop-blur-xl border border-[#FF00D6]/30 rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(255,0,214,0.15)] flex flex-col">

          <div className="w-full px-6 py-4 bg-[#0a0518]/90 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 border-[2.5px] border-[#D9FF00] rotate-45 shrink-0" />
              <span className="text-sm font-bold tracking-widest text-white">
                ILAAN
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
                <img src={notigIcon} alt="Notifications" className="h-[22px] w-auto object-contain" />
              </div>

              <div className="flex items-center gap-2 border-l border-white/10 pl-4 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-[#AF52DE] flex items-center justify-center text-xs font-bold text-white">
                  JR
                </div>
                <div className="hidden sm:block text-left text-xs leading-none">
                  <span className="block font-bold text-white">John Roy</span>
                  <span className="block text-[10px] text-gray-500 mt-0.5">Admin</span>
                </div>
                <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center shrink-0 ml-1">
                  <ChevronDown size={10} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px]">

            <div className="lg:hidden flex border-b border-white/5">
              <button
                onClick={() => setActiveMobileTab('list')}
                className={`flex-1 py-3 text-sm font-semibold transition-all ${activeMobileTab === 'list' ? 'text-[#FF00D6] border-b-2 border-[#FF00D6]' : 'text-gray-400'}`}
              >
                List View
              </button>
              <button
                onClick={() => setActiveMobileTab('map')}
                className={`flex-1 py-3 text-sm font-semibold transition-all ${activeMobileTab === 'map' ? 'text-[#FF00D6] border-b-2 border-[#FF00D6]' : 'text-gray-400'}`}
              >
                Map View
              </button>
            </div>

            <div className={`col-span-1 lg:col-span-4 bg-[#0a0518]/50 border-r border-white/5 flex flex-col justify-between p-4 ${activeMobileTab === 'list' ? 'block' : 'hidden lg:flex'}`}>
              <div className="space-y-4">

                <div className="flex gap-3">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Locations..."
                      className="w-full pl-4 pr-9 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF00D6] focus:ring-1 focus:ring-[#FF00D6] transition-all"
                    />
                    <Search size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  </div>
                  <button className="w-[38px] h-[38px] rounded-xl bg-white text-black hover:bg-white/95 active:scale-95 transition-all flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
                    <MapPin size={16} fill="black" className="text-black" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-[#D9FF00] shadow-[0_0_8px_rgba(217,255,0,0.6)] animate-pulse" />
                  <span>Showing {searchQuery ? filteredCities.length : 68} locations</span>
                </div>

                <div className="space-y-2 select-none no-scrollbar overflow-y-auto pr-1">
                  {filteredCities.map((city) => {
                    const isSelected = city.name === selectedCity;
                    return (
                      <div
                        key={city.name}
                        onClick={() => {
                          setSelectedCity(city.name);
                          setActiveMobileTab('map');
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl flex items-center justify-between cursor-pointer border transition-all ${isSelected
                          ? 'bg-[#0f0926]/80 border-[#FF00D6] shadow-[0_0_15px_rgba(255,0,214,0.15)]'
                          : 'bg-[#0f0926]/30 border-white/5 hover:bg-[#0c071d] hover:border-white/10'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <img src={city.icon} alt={city.name} className="w-[14px] h-[18px] object-contain shrink-0" />
                          <div className="text-left">
                            <span className="block text-xs font-bold text-white leading-tight">
                              {city.name}
                            </span>
                            <span className="block text-[10px] text-gray-500 mt-0.5">
                              {city.screens} Screens
                            </span>
                          </div>
                        </div>
                        <ChevronRight size={14} className={`transition-transform duration-300 shrink-0 ${isSelected ? 'text-[#FF00D6] translate-x-0.5' : 'text-gray-600'}`} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-semibold mt-4">
                <button
                  disabled={currentPageNum === 1}
                  onClick={() => setCurrentPageNum(p => Math.max(1, p - 1))}
                  className="p-1.5 rounded-lg hover:bg-white/5 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, '...', 9].map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof p === 'number' && setCurrentPageNum(p)}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${p === currentPageNum
                        ? 'bg-[#FF00D6] text-white font-bold'
                        : 'hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <button
                  disabled={currentPageNum === 9}
                  onClick={() => setCurrentPageNum(p => Math.min(9, p + 1))}
                  className="p-1.5 rounded-lg hover:bg-white/5 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className={`col-span-1 lg:col-span-8 p-4 md:p-6 lg:p-7 flex flex-col justify-stretch min-h-[420px] lg:min-h-0 ${activeMobileTab === 'map' ? 'block' : 'hidden lg:block'}`}>
              <div className="relative flex-grow w-full h-full rounded-[28px] overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.6)] bg-[#0c071d]">
                <img
                  src={mapImage}
                  alt="Interactive Location Map Viewport Backdrop"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[1.02] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-[#0a0518]/5 pointer-events-none" />

                {CITIES.map((city) => {
                  const isSelected = city.name === selectedCity;
                  return (
                    <div
                      key={city.name}
                      style={{ left: city.coords.x, top: city.coords.y }}
                      onClick={() => setSelectedCity(city.name)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer z-20 flex items-center justify-center group"
                    >
                      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0c071d] border border-[#FF00D6]/40 text-white rounded-lg py-1 px-3 text-[10px] font-bold tracking-wide whitespace-nowrap shadow-2xl flex items-center gap-2 pointer-events-none transition-all duration-300 ${isSelected
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
                        }`}>
                        <MapPin size={10} style={{ color: city.color }} fill={city.color} />
                        <span>{city.name}</span>
                        <span className="text-[#FF00D6] border-l border-white/15 pl-2 ml-1">{city.screens} Screens</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#0c071d]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div> */}
      <div className="relative mt-22 md:mt-22 w-full lg:w-[88%] md:w-[92%] mx-auto z-20">
        <div className="w-full flex flex-row gap-5 items-stretch">

          {/* ── LEFT PANEL ── */}
          <div className="w-[380px] shrink-0 flex flex-col gap-4">

            {/* Search Row */}
            <div className="flex gap-3 items-center">
              <div className="relative flex-grow">
                <input
                  placeholder="Search Locations...."
                  className="w-full pl-5 pr-10 py-[11px] rounded-2xl bg-[#0f0926]/70 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF00D6] transition-all"
                  type="text"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />
                </svg>
              </div>
              <button className="w-[46px] h-[46px] rounded-2xl bg-white flex items-center justify-center shrink-0 hover:bg-white/90 active:scale-95 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </button>
            </div>

            {/* Showing count */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 px-1">
              <span className="w-2 h-2 rounded-full bg-[#D9FF00] shadow-[0_0_8px_rgba(217,255,0,0.7)] animate-pulse shrink-0" />
              <span>Showing 68 locations</span>
            </div>

            {/* Location List */}
            <div className="flex flex-col gap-2 select-none flex-grow">
              {[
                { name: 'Glasgow', screens: 15, img: 'yellowmicon' },
                { name: 'Edinburgh', screens: 12, img: 'redmicon' },
                { name: 'Paisley', screens: 6, img: 'bluemicon' },
                { name: 'East Kilbride', screens: 5, img: 'purplemicon' },
                { name: 'Livingston', screens: 4, img: 'yellowmicon' },
                { name: 'Stirling', screens: 3, img: 'greenmicon' },
                { name: 'Dumbarton', screens: 3, img: 'orangemicon' },
                { name: 'Kilmarnock', screens: 2, img: 'pinkmicon' },
              ].map((loc) => (
                <div
                  key={loc.name}
                  className="w-full px-5 py-[14px] rounded-2xl flex items-center justify-between cursor-pointer border transition-all bg-[#0f0926]/60 border-white/[0.08] hover:bg-[#130a2a] hover:border-white/15 group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      alt={loc.name}
                      className="w-[20px] h-[26px] object-contain shrink-0"
                      src={`/Ilaan/src/assets/${loc.img}.png`}
                    />
                    <div className="text-left">
                      <span className="block text-[15px] font-bold text-white leading-tight">{loc.name}</span>
                      <span className="block text-[11px] text-gray-500 mt-0.5">{loc.screens} Screens</span>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 shrink-0 group-hover:text-gray-400 transition-colors">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-1">
              <button disabled className="p-2 rounded-xl text-gray-500 disabled:opacity-30 disabled:pointer-events-none hover:bg-white/5 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, '...', 9].map((p, i) => (
                  <button
                    key={i}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-semibold transition-all ${p === 1
                      ? 'bg-[#FF00D6] text-white shadow-[0_0_14px_rgba(255,0,214,0.45)]'
                      : 'text-gray-500 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button className="p-2 rounded-xl text-gray-500 hover:bg-white/5 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

          </div>

          {/* ── RIGHT PANEL - MAP ── */}
          <div className="flex-1 min-w-0">
            <div
              className="relative w-full rounded-[22px] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.6)]"
              style={{ height: '100%', minHeight: '680px' }}
            >
              <img
                alt="Map"
                className="absolute inset-0 w-full h-full object-cover brightness-[1.02] contrast-[1.02]"
                src="/Ilaan/src/assets/map.png"
              />
              <div className="absolute inset-0 bg-[#0a0518]/5 pointer-events-none" />

              {/* ── your existing map pin elements go here unchanged ── */}

            </div>
          </div>

        </div>
      </div>









      {/* Floating Canvas Dynamic Dropdowns Control Anchor */}
      <AnimatePresence>
        {isMenuOpen && (
          <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaHero;


//////////////////////