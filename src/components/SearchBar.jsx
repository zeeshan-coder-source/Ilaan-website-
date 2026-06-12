import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full relative group">
      {/* Input container */}
      <div className="relative flex items-center bg-[#07090b]/80 border border-white/30 rounded-[16.3px] overflow-hidden focus-within:border-white/40 transition-all duration-300 shadow-xl">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Find your favorite products"
          className="w-full bg-transparent text-white placeholder-gray-500 text-sm md:text-base py-3.5 pl-8 pr-16 focus:outline-none font-poppins font-light tracking-wide"
        />

        {/* Search button / indicator */}
        <div className="absolute right-4 p-2.5 text-[#D9FF00] transition-colors rounded-full hover:bg-white/5 cursor-pointer">
          <Search size={22} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
