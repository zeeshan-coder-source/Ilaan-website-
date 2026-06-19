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
import zeeshanImage from '../../assets/zeeshan.png';
import groupBorderImage from '../../assets/Group 1261156739.png';

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  // Page 1
  { name: 'Glasgow', screens: 15, color: '#D9FF00', coords: { x: '62%', y: '52%' }, icon: yellowMicon },
  { name: 'Edinburgh', screens: 12, color: '#FF3B30', coords: { x: '69%', y: '56%' }, icon: redMicon },
  { name: 'Paisley', screens: 6, color: '#007AFF', coords: { x: '37%', y: '42%' }, icon: blueMicon },
  { name: 'East Kilbride', screens: 5, color: '#AF52DE', coords: { x: '44%', y: '52%' }, icon: purpleMicon },
  { name: 'Livingston', screens: 4, color: '#FFCC00', coords: { x: '68%', y: '52%' }, icon: yellowMicon },
  { name: 'Stirling', screens: 3, color: '#4CD964', coords: { x: '56%', y: '22%' }, icon: greenMicon },
  { name: 'Dumbarton', screens: 3, color: '#FF9500', coords: { x: '50%', y: '30%' }, icon: orangeMicon },
  { name: 'Kilmarnock', screens: 2, color: '#FF2D55', coords: { x: '39%', y: '18%' }, icon: pinkMicon },

  // Page 2
  { name: 'Aberdeen', screens: 11, color: '#007AFF', coords: { x: '75%', y: '15%' }, icon: blueMicon },
  { name: 'Dundee', screens: 9, color: '#4CD964', coords: { x: '70%', y: '32%' }, icon: greenMicon },
  { name: 'Inverness', screens: 7, color: '#FF9500', coords: { x: '45%', y: '10%' }, icon: orangeMicon },
  { name: 'Perth', screens: 6, color: '#AF52DE', coords: { x: '60%', y: '35%' }, icon: purpleMicon },
  { name: 'Ayr', screens: 5, color: '#FF2D55', coords: { x: '32%', y: '72%' }, icon: pinkMicon },
  { name: 'Hamilton', screens: 5, color: '#FFCC00', coords: { x: '48%', y: '60%' }, icon: yellowMicon },
  { name: 'Cumbernauld', screens: 4, color: '#007AFF', coords: { x: '52%', y: '48%' }, icon: blueMicon },
  { name: 'Greenock', screens: 4, color: '#FF3B30', coords: { x: '28%', y: '40%' }, icon: redMicon },

  // Page 3
  { name: 'Kirkcaldy', screens: 4, color: '#4CD964', coords: { x: '67%', y: '43%' }, icon: greenMicon },
  { name: 'Coatbridge', screens: 3, color: '#FF9500', coords: { x: '49%', y: '51%' }, icon: orangeMicon },
  { name: 'Glenrothes', screens: 3, color: '#AF52DE', coords: { x: '69%', y: '39%' }, icon: purpleMicon },
  { name: 'Airdrie', screens: 3, color: '#FFCC00', coords: { x: '51%', y: '50%' }, icon: yellowMicon },
  { name: 'Falkirk', screens: 3, color: '#FF3B30', coords: { x: '57%', y: '44%' }, icon: redMicon },
  { name: 'Irvine', screens: 3, color: '#007AFF', coords: { x: '30%', y: '68%' }, icon: blueMicon },
  { name: 'Dumfries', screens: 2, color: '#FF2D55', coords: { x: '52%', y: '85%' }, icon: pinkMicon },
  { name: 'Motherwell', screens: 2, color: '#4CD964', coords: { x: '50%', y: '58%' }, icon: greenMicon },

  // Page 4
  { name: 'Rutherglen', screens: 2, color: '#FF9500', coords: { x: '45%', y: '54%' }, icon: orangeMicon },
  { name: 'Wishaw', screens: 2, color: '#AF52DE', coords: { x: '52%', y: '60%' }, icon: purpleMicon },
  { name: 'Cambuslang', screens: 2, color: '#FFCC00', coords: { x: '46%', y: '55%' }, icon: yellowMicon },
  { name: 'Newton Mearns', screens: 2, color: '#007AFF', coords: { x: '40%', y: '58%' }, icon: blueMicon },
  { name: 'Clydebank', screens: 2, color: '#FF3B30', coords: { x: '38%', y: '45%' }, icon: redMicon },
  { name: 'Bishopbriggs', screens: 2, color: '#4CD964', coords: { x: '44%', y: '46%' }, icon: greenMicon },
  { name: 'Musselburgh', screens: 2, color: '#FF9500', coords: { x: '73%', y: '55%' }, icon: orangeMicon },
  { name: 'Arbroath', screens: 2, color: '#AF52DE', coords: { x: '78%', y: '28%' }, icon: purpleMicon },

  // Page 5
  { name: 'Elgin', screens: 2, color: '#FFCC00', coords: { x: '62%', y: '8%' }, icon: yellowMicon },
  { name: 'Renfrew', screens: 2, color: '#007AFF', coords: { x: '38%', y: '48%' }, icon: blueMicon },
  { name: 'Bathgate', screens: 2, color: '#FF3B30', coords: { x: '58%', y: '51%' }, icon: redMicon },
  { name: 'Alloa', screens: 2, color: '#4CD964', coords: { x: '55%', y: '38%' }, icon: greenMicon },
  { name: 'Bellshill', screens: 2, color: '#FF9500', coords: { x: '48%', y: '56%' }, icon: orangeMicon },
  { name: 'Kirkintilloch', screens: 1, color: '#AF52DE', coords: { x: '47%', y: '44%' }, icon: purpleMicon },
  { name: 'Peterhead', screens: 1, color: '#FFCC00', coords: { x: '85%', y: '12%' }, icon: yellowMicon },
  { name: 'Barrhead', screens: 1, color: '#007AFF', coords: { x: '36%', y: '54%' }, icon: blueMicon },

  // Page 6
  { name: 'Grangemouth', screens: 1, color: '#FF3B30', coords: { x: '59%', y: '43%' }, icon: redMicon },
  { name: 'St Andrews', screens: 1, color: '#4CD964', coords: { x: '75%', y: '38%' }, icon: greenMicon },
  { name: 'Kilwinning', screens: 1, color: '#FF9500', coords: { x: '31%', y: '65%' }, icon: orangeMicon },
  { name: 'Johnstone', screens: 1, color: '#AF52DE', coords: { x: '34%', y: '50%' }, icon: purpleMicon },
  { name: 'Penicuik', screens: 1, color: '#FFCC00', coords: { x: '68%', y: '62%' }, icon: yellowMicon },
  { name: 'Erskine', screens: 1, color: '#007AFF', coords: { x: '33%', y: '44%' }, icon: blueMicon },
  { name: 'Broxburn', screens: 1, color: '#FF3B30', coords: { x: '62%', y: '52%' }, icon: redMicon },
  { name: 'Port Glasgow', screens: 1, color: '#4CD964', coords: { x: '25%', y: '42%' }, icon: greenMicon },

  // Page 7
  { name: 'Larkhall', screens: 1, color: '#FF9500', coords: { x: '50%', y: '64%' }, icon: orangeMicon },
  { name: 'Shotts', screens: 1, color: '#AF52DE', coords: { x: '55%', y: '56%' }, icon: purpleMicon },
  { name: 'Girvan', screens: 1, color: '#FFCC00', coords: { x: '25%', y: '82%' }, icon: yellowMicon },
  { name: 'Oban', screens: 1, color: '#007AFF', coords: { x: '15%', y: '35%' }, icon: blueMicon },
  { name: 'Brechin', screens: 1, color: '#FF3B30', coords: { x: '74%', y: '24%' }, icon: redMicon },
  { name: 'Stonehaven', screens: 1, color: '#4CD964', coords: { x: '82%', y: '18%' }, icon: greenMicon },
  { name: 'Forfar', screens: 1, color: '#FF9500', coords: { x: '72%', y: '26%' }, icon: orangeMicon },
  { name: 'Montrose', screens: 1, color: '#AF52DE', coords: { x: '79%', y: '24%' }, icon: purpleMicon },

  // Page 8
  { name: 'Nairn', screens: 1, color: '#FFCC00', coords: { x: '52%', y: '8%' }, icon: yellowMicon },
  { name: 'Fraserburgh', screens: 1, color: '#007AFF', coords: { x: '82%', y: '6%' }, icon: blueMicon },
  { name: 'Hawick', screens: 1, color: '#FF3B30', coords: { x: '68%', y: '78%' }, icon: redMicon },
  { name: 'Galashiels', screens: 1, color: '#4CD964', coords: { x: '66%', y: '72%' }, icon: greenMicon },
  { name: 'Selkirk', screens: 1, color: '#FF9500', coords: { x: '65%', y: '74%' }, icon: orangeMicon },
  { name: 'Kelso', screens: 1, color: '#AF52DE', coords: { x: '72%', y: '74%' }, icon: purpleMicon },
  { name: 'Peebles', screens: 1, color: '#FFCC00', coords: { x: '61%', y: '70%' }, icon: yellowMicon },
  { name: 'Jedburgh', screens: 1, color: '#007AFF', coords: { x: '71%', y: '77%' }, icon: blueMicon },

  // Page 9 (4 items to make exactly 68)
  { name: 'Melrose', screens: 1, color: '#FF3B30', coords: { x: '68%', y: '73%' }, icon: redMicon },
  { name: 'Duns', screens: 1, color: '#4CD964', coords: { x: '76%', y: '71%' }, icon: greenMicon },
  { name: 'Eyemouth', screens: 1, color: '#FF9500', coords: { x: '80%', y: '68%' }, icon: orangeMicon },
  { name: 'Dunbar', screens: 1, color: '#AF52DE', coords: { x: '76%', y: '58%' }, icon: purpleMicon },
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
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#04010a]/15 pointer-events-none" />
      </div>

      {/* Top Right Slanted Stripes */}
      <div className="absolute right-[4%] xl:right-[8%] top-[14%] md:top-[16%] xl:top-[18%] z-10 hidden md:flex gap-1.5 opacity-85 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-6 bg-gradient-to-b from-[#FF00D6] to-[#A855F7] transform -skew-x-[25deg]"
          />
        ))}
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
      <div ref={mapCardRef} className="relative mt-20 md:mt-24 w-full max-w-[1633px] mx-auto z-20 lg:h-[1018px] flex flex-col justify-stretch">
        <div className="w-full h-full bg-[#070311]/90 backdrop-blur-xl rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(255,0,214,0.15)] flex flex-col relative">
          
          {/* Border & Logo Image Overlay */}
          <img 
            src={groupBorderImage} 
            alt="Dashboard Frame Border" 
            className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30" 
          />

          {/* Dashboard Header Bar */}
          <div className="w-full px-6 py-4 md:px-8 bg-[#0a0518]/90 border-b border-white/[0.08] flex items-center justify-between relative z-20">
            {/* Logo left (Hidden/transparent to allow image logo to show in top-left) */}
            <div className="flex items-center gap-2.5 opacity-0 pointer-events-none">
              <div className="w-4 h-4 border-[2.5px] border-[#D9FF00] rotate-45 shrink-0" />
              <span className="text-sm font-bold tracking-[0.15em] text-white">
                ILAAN
              </span>
            </div>

            {/* Notifications and Profile right */}
            <div className="flex items-center space-x-5">
              {/* Notification bell with red circle badge 6 */}
              <div className="relative cursor-pointer hover:opacity-85 transition-opacity">
                <img src={notigIcon} alt="Notifications" className="h-[22px] w-auto object-contain" />
                <span className="absolute -top-[5px] -right-[6px] w-[15px] h-[15px] bg-[#FF2D55] text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-[#070311]">
                  6
                </span>
              </div>

              {/* Vertical divider */}
              <div className="h-6 w-[1px] bg-white/10" />

              {/* User profile */}
              <div className="flex items-center gap-2.5 cursor-pointer group">
                <img 
                  src={zeeshanImage} 
                  alt="John Roy" 
                  className="w-8 h-8 rounded-full object-cover border border-white/10"
                />
                <div className="hidden sm:block text-left text-xs leading-none">
                  <span className="block font-bold text-white group-hover:text-white/90 transition-colors">John Roy</span>
                  <span className="block text-[10px] text-gray-500 mt-0.5 font-medium">Admin</span>
                </div>
                <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center shrink-0 ml-0.5 group-hover:border-white/20 transition-colors">
                  <ChevronDown size={10} className="text-gray-400 group-hover:text-gray-300 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Columns Section */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch flex-grow lg:h-[946px]">

            {/* Mobile View Tabs */}
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

            {/* Left Panel */}
            <div className={`col-span-1 lg:col-span-4 bg-[#0a0518]/50 border-r border-white/[0.08] flex flex-col justify-between p-6 ${activeMobileTab === 'list' ? 'block' : 'hidden lg:flex'} lg:h-full`}>
              <div className="flex-grow flex flex-col justify-start space-y-4">
                {/* Search Row */}
                <div className="flex gap-3 items-center">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPageNum(1);
                      }}
                      placeholder="Search Locations..."
                      className="w-full pl-4 pr-10 py-[11px] rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF00D6] focus:ring-1 focus:ring-[#FF00D6] transition-all"
                    />
                    <Search size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  </div>
                  <button className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 hover:bg-white/90 active:scale-95 transition-all shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
                    <MapPin size={18} fill="black" className="text-black" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Showing Count */}
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 px-1">
                  <span className="w-2 h-2 rounded-full bg-[#4CD964] shadow-[0_0_8px_rgba(76,217,100,0.7)] animate-pulse shrink-0" />
                  <span>Showing {filteredCities.length} Locations</span>
                </div>
                
                {(() => {
                  const itemsPerPage = 8;
                  const paginatedCities = filteredCities.slice((currentPageNum - 1) * itemsPerPage, currentPageNum * itemsPerPage);
                  return (
                    <div className="space-y-2 select-none no-scrollbar overflow-y-auto max-h-[460px] lg:max-h-[700px] pr-1 flex-grow">
                      {paginatedCities.map((city) => {
                        const isSelected = city.name === selectedCity;
                        return (
                          <div
                            key={city.name}
                            onClick={() => {
                              setSelectedCity(city.name);
                              setActiveMobileTab('map');
                            }}
                            className={`w-full px-5 py-[14px] rounded-xl flex items-center justify-between cursor-pointer border transition-all ${
                              isSelected
                                ? 'bg-[#0f0926]/80 border-[#FF00D6] shadow-[0_0_15px_rgba(255,0,214,0.15)]'
                                : 'bg-[#0f0926]/30 border-white/[0.04] hover:bg-[#130a2a] hover:border-white/15 group'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <img
                                alt={city.name}
                                className="w-[20px] h-[26px] object-contain shrink-0"
                                src={city.icon}
                              />
                              <div className="text-left">
                                <span className="block text-[15px] font-bold text-white leading-tight">{city.name}</span>
                                <span className="block text-[11px] text-gray-500 mt-0.5">{city.screens} Screens</span>
                              </div>
                            </div>
                            <ChevronRight 
                              size={16} 
                              className={`shrink-0 transition-transform duration-300 ${
                                isSelected 
                                  ? 'text-[#FF00D6] translate-x-0.5' 
                                  : 'text-gray-600 group-hover:text-gray-400'
                              }`} 
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>

              {/* Pagination Controls */}
              {(() => {
                const itemsPerPage = 8;
                const totalPages = Math.max(1, Math.ceil(filteredCities.length / itemsPerPage));
                const getPaginationRange = () => {
                  const range = [];
                  if (totalPages <= 5) {
                    for (let i = 1; i <= totalPages; i++) range.push(i);
                  } else {
                    if (currentPageNum <= 2) {
                      range.push(1, 2, 3, '...', totalPages);
                    } else if (currentPageNum >= totalPages - 1) {
                      range.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
                    } else {
                      range.push(1, '...', currentPageNum, '...', totalPages);
                    }
                  }
                  return range;
                };

                return (
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 w-full">
                    <button
                      disabled={currentPageNum === 1}
                      onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                      className="p-1.5 rounded-lg hover:bg-white/5 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all text-gray-500"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <div className="flex items-center gap-1">
                      {getPaginationRange().map((p, idx) => {
                        if (p === '...') {
                          return <span key={`dots-${idx}`} className="text-gray-500 px-1.5 select-none">...</span>;
                        }
                        return (
                          <button
                            key={p}
                            disabled={p === currentPageNum}
                            onClick={() => setCurrentPageNum(p)}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold transition-all ${
                              p === currentPageNum
                                ? 'bg-[#FF00D6] text-white shadow-[0_0_14px_rgba(255,0,214,0.45)]'
                                : 'text-gray-500 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            {p}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      disabled={currentPageNum === totalPages}
                      onClick={() => setCurrentPageNum((p) => Math.min(totalPages, p + 1))}
                      className="p-1.5 rounded-lg hover:bg-white/5 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all text-gray-500"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                );
              })()}
            </div>

            {/* Right Map Panel */}
            <div className={`col-span-1 lg:col-span-8 p-6 flex flex-col justify-stretch ${activeMobileTab === 'map' ? 'block' : 'hidden lg:block'} lg:h-full`}>
              <div className="relative flex-grow w-full rounded-[24px] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.6)] bg-[#0c071d] min-h-[520px] lg:min-h-0 lg:h-full">
                <img
                  src={mapImage}
                  alt="Interactive Location Map Viewport Backdrop"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[1.02] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-[#0a0518]/5 pointer-events-none" />

                {(() => {
                  const mapCities = CITIES.slice(0, 8);
                  if (!mapCities.some(c => c.name === selectedCity)) {
                    const selectedCityData = CITIES.find(c => c.name === selectedCity);
                    if (selectedCityData) {
                      mapCities.push(selectedCityData);
                    }
                  }
                  return mapCities.map((city) => {
                    const isSelected = city.name === selectedCity;
                    return (
                      <div
                        key={city.name}
                        style={{ left: city.coords.x, top: city.coords.y }}
                        onClick={() => setSelectedCity(city.name)}
                        className="absolute -translate-x-1/2 -translate-y-[85%] cursor-pointer z-20 flex flex-col items-center group"
                      >
                        {/* Tooltip */}
                        <div className={`absolute bottom-[110%] left-1/2 -translate-x-1/2 mb-1.5 bg-[#0c071d]/95 border border-[#FF00D6]/40 text-white rounded-lg py-1.5 px-3 text-[10px] font-bold tracking-wide whitespace-nowrap shadow-2xl flex items-center gap-2 pointer-events-none transition-all duration-300 ${
                          isSelected
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: city.color }} />
                          <span>{city.name}</span>
                          <span className="text-[#FF00D6] border-l border-white/15 pl-2 ml-1">{city.screens} Screens</span>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#0c071d]" />
                        </div>

                        {/* Pin Icon Image */}
                        <img
                          src={city.icon}
                          alt={city.name}
                          className={`w-[22px] h-[28px] object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transition-transform duration-300 ${
                            isSelected ? 'scale-125' : 'group-hover:scale-110'
                          }`}
                        />
                      </div>
                    );
                  });
                })()}
              </div>
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
