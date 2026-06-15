import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const MediaVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#04010a] border-t border-b border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#E000FF] uppercase block">
              FEATURED VIDEO
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Pushing the Boundaries of Visual Design
            </h2>
            <p className="text-gray-300 font-poppins font-light leading-relaxed">
              Watch our 2026 Showreel to see how Ilaan Studio blends bleeding-edge digital signage with creative storytelling, helping global brands stand out in physical spaces.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-6 text-sm">
              <div>
                <span className="block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D6] to-[#8B5CF6]">4K+</span>
                <span className="text-gray-500 font-medium">Production Spec</span>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <span className="block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D6] to-[#8B5CF6]">100%</span>
                <span className="text-gray-500 font-medium">Custom Creative</span>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <span className="block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D6] to-[#8B5CF6]">30M+</span>
                <span className="text-gray-500 font-medium">Monthly Views</span>
              </div>
            </div>
          </div>

          {/* Right Video Banner */}
          <div className="lg:col-span-7">
            <div className="relative group cursor-pointer aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Cover Image */}
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200"
                alt="Showreel Cover"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-20 h-20 bg-gradient-to-r from-[#E000FF] to-[#8B5CF6] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(224,0,255,0.4)] group-hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <Play size={32} fill="white" className="ml-1 text-white" />
                </button>
              </div>

              {/* Pulsing ring around button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full border border-[#E000FF] animate-ping opacity-20" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
          >
            <X size={24} />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            {/* Embedded video player (vimeo/youtube placeholder) */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Ilaan Showreel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaVideo;
