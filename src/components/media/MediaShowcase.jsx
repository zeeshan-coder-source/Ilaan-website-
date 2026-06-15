import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['ALL', 'VIDEOS', 'GALLERY', 'RELEASES'];

const MEDIA_ITEMS = [
  {
    id: 1,
    title: 'Modern Retail Displays Launch',
    category: 'RELEASES',
    date: 'June 12, 2026',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
    tag: 'Feature'
  },
  {
    id: 2,
    title: 'Showreel 2026 - Ilaan Studio',
    category: 'VIDEOS',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600',
    tag: 'Video'
  },
  {
    id: 3,
    title: 'Digital Signage Installation Event',
    category: 'GALLERY',
    date: 'May 15, 2026',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600',
    tag: 'Event'
  },
  {
    id: 4,
    title: 'Next-Gen Smart Panels Intro',
    category: 'VIDEOS',
    date: 'April 30, 2026',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600',
    tag: 'Tech'
  },
  {
    id: 5,
    title: 'Ilaan Creative Studio Behind The Scenes',
    category: 'GALLERY',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
    tag: 'Behind The Scenes'
  },
  {
    id: 6,
    title: 'Official Partnership Announcement',
    category: 'RELEASES',
    date: 'March 18, 2026',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600',
    tag: 'News'
  }
];

const MediaShowcase = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredItems = activeTab === 'ALL'
    ? MEDIA_ITEMS
    : MEDIA_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="media-showcase" className="py-20 px-6 md:px-12 lg:px-24 bg-[#04010a]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#E000FF] uppercase block mb-2">
              HIGHLIGHTS & SHOWCASE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-none">
              Explore Our Hub
            </h2>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 bg-black/40 p-1.5 rounded-full border border-white/5 w-fit">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-[#E000FF] to-[#8B5CF6] text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative bg-[#090514]/40 border border-white/5 rounded-3xl overflow-hidden hover:border-[#E000FF]/40 hover:shadow-[0_0_30px_rgba(224,0,255,0.1)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Wrap */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider text-white bg-gradient-to-r from-[#E000FF] to-[#8B5CF6] px-2.5 py-1 rounded-full uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-gray-500 font-medium block mb-2">
                      {item.date}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-snug group-hover:text-[#E000FF] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Bottom Link */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider group-hover:text-white transition-colors">
                      View details
                    </span>
                    <svg
                      className="w-4 h-4 text-[#E000FF] transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default MediaShowcase;
