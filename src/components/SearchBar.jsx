import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full relative group">
      {/* Outer Neon Glow Layer */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D9FF00]/0 via-[#D9FF00]/10 to-[#D9FF00]/0 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Input container */}
      <div className="relative flex items-center bg-[#07090b]/80 border border-white/10 rounded-full overflow-hidden focus-within:border-[#D9FF00]/40 transition-all duration-300 shadow-xl">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Find your favorite products"
          className="w-full bg-transparent text-white placeholder-gray-500 text-sm md:text-base py-3.5 pl-8 pr-16 focus:outline-none font-poppins font-light tracking-wide"
        />
        
        {/* Search button / indicator */}
        <div className="absolute right-4 p-2.5 text-[#D9FF00] transition-colors rounded-full hover:bg-white/5 cursor-pointer">
          <Search size={22} className="drop-shadow-[0_0_8px_rgba(217,255,0,0.5)]" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
