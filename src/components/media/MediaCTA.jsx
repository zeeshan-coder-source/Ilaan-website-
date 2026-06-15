import React from 'react';

const MediaCTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#04010a]">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-[#E000FF]/30 shadow-[0_0_40px_rgba(224,0,255,0.15)] p-8 md:p-16 lg:p-20 text-center flex flex-col items-center justify-center space-y-8 bg-black">
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E000FF]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold tracking-[0.25em] text-[#E000FF] uppercase block">
              STAY CONNECTED
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Get the latest updates delivered directly to you.
            </h2>
            <p className="text-gray-300 font-poppins font-light leading-relaxed">
              Subscribe to our newsletter for major showcase releases, tech breakdowns, and studio project drops.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative z-10">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E000FF] focus:ring-1 focus:ring-[#E000FF] font-poppins text-sm transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#E000FF] to-[#8B5CF6] text-white font-bold rounded-full hover:opacity-90 active:scale-95 transition-all duration-300 text-sm tracking-wider uppercase cursor-pointer shrink-0 shadow-[0_10px_25px_-5px_rgba(224,0,255,0.3)]"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default MediaCTA;
