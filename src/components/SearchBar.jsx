import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full relative group">
      {/* Outer Neon Glow Layer */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D9FF00]/0 via-[#D9FF00]/15 to-[#D9FF00]/0 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Input container */}
      <div className="relative flex items-center bg-[#0d0d0d] border border-gray-800 rounded-2xl overflow-hidden focus-within:border-[#D9FF00]/40 transition-all duration-300 shadow-xl shadow-black/40">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Find your favorite products"
          className="w-full bg-transparent text-white placeholder-gray-500 text-sm md:text-base py-4 pl-6 pr-14 focus:outline-none font-poppins font-light tracking-wide"
        />
        
        {/* Search button / indicator */}
        <div className="absolute right-4 p-2 text-gray-500 group-focus-within:text-[#D9FF00] transition-colors rounded-xl bg-white/5 border border-white/5">
          <Search size={20} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
