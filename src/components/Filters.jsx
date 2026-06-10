import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import { categories, ledTypes, priceRanges, popularCategories } from '../data/products';

const Filters = ({
  category,
  setCategory,
  ledType,
  setLedType,
  priceRange,
  setPriceRange,
  popularTag,
  setPopularTag,
  resetFilters
}) => {
  // Accordion open states
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isLedTypeOpen, setIsLedTypeOpen] = useState(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);

  // Local state to filter categories list inside categories search
  const [categoryQuery, setCategoryQuery] = useState("");

  const filteredCategories = categories.filter(cat => 
    cat.toLowerCase().includes(categoryQuery.toLowerCase())
  );

  const hasActiveFilters = 
    category !== "all" || 
    ledType !== "all" || 
    priceRange !== "all" || 
    popularTag !== "all";

  return (
    <div className="w-full flex flex-col space-y-6 text-white font-poppins pr-0 md:pr-4">
      {/* Header section with Clear option */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <span className="text-lg font-bold tracking-wide">Filter by</span>
        {hasActiveFilters && (
          <button 
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs text-[#D9FF00] hover:underline transition-all cursor-pointer font-semibold"
          >
            <X size={12} />
            Reset All
          </button>
        )}
      </div>

      {/* Accordion 1: Categories */}
      <div className="border-b border-gray-900 pb-4">
        <button
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="w-full py-2 bg-[#D9FF00] text-black font-bold px-4 rounded-xl flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-sm uppercase tracking-wider">Categories</span>
          {isCategoriesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isCategoriesOpen && (
          <div className="mt-3 space-y-2 px-1">
            {/* Search Input for categories */}
            <div className="relative mb-2">
              <input
                type="text"
                value={categoryQuery}
                onChange={(e) => setCategoryQuery(e.target.value)}
                placeholder="Search Category"
                className="w-full bg-black/40 border border-gray-800 text-xs py-2 pl-8 pr-3 rounded-lg focus:outline-none focus:border-[#D9FF00]/40 text-gray-200"
              />
              <Search size={12} className="absolute left-2.5 top-3 text-gray-500" />
            </div>

            {/* List options */}
            <div className="flex flex-col space-y-1.5 max-h-[180px] overflow-y-auto">
              <button
                onClick={() => setCategory("all")}
                className={`text-left text-xs py-1.5 px-2.5 rounded-lg transition-colors font-medium ${
                  category === "all" 
                    ? "bg-[#D9FF00]/10 text-[#D9FF00] border-l-2 border-[#D9FF00]" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                All Categories
              </button>
              
              {filteredCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-left text-xs py-1.5 px-2.5 rounded-lg transition-colors font-medium ${
                    category === cat 
                      ? "bg-[#D9FF00]/10 text-[#D9FF00] border-l-2 border-[#D9FF00]" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Accordion 2: LED Type */}
      <div className="border-b border-gray-900 pb-4">
        <button
          onClick={() => setIsLedTypeOpen(!isLedTypeOpen)}
          className="w-full py-2 bg-[#D9FF00] text-black font-bold px-4 rounded-xl flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-sm uppercase tracking-wider">LED Type</span>
          {isLedTypeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isLedTypeOpen && (
          <div className="mt-3 space-y-1.5 px-1">
            <button
              onClick={() => setLedType("all")}
              className={`text-left text-xs py-1.5 px-2.5 rounded-lg w-full transition-colors font-medium ${
                ledType === "all" 
                  ? "bg-[#D9FF00]/10 text-[#D9FF00] border-l-2 border-[#D9FF00]" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              All Types
            </button>
            {ledTypes.map((type) => (
              <button
                key={type}
                onClick={() => setLedType(type)}
                className={`text-left text-xs py-1.5 px-2.5 rounded-lg w-full transition-colors font-medium ${
                  ledType === type 
                    ? "bg-[#D9FF00]/10 text-[#D9FF00] border-l-2 border-[#D9FF00]" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Accordion 3: Price Range */}
      <div className="border-b border-gray-900 pb-4">
        <button
          onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}
          className="w-full py-2 bg-[#D9FF00] text-black font-bold px-4 rounded-xl flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-sm uppercase tracking-wider">Price Range</span>
          {isPriceRangeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isPriceRangeOpen && (
          <div className="mt-3 space-y-1.5 px-1">
            <button
              onClick={() => setPriceRange("all")}
              className={`text-left text-xs py-1.5 px-2.5 w-full rounded-lg transition-colors font-medium ${
                priceRange === "all" 
                  ? "bg-[#D9FF00]/10 text-[#D9FF00] border-l-2 border-[#D9FF00]" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              All Prices
            </button>
            
            <button
              onClick={() => setPriceRange("under50")}
              className={`text-left text-xs py-1.5 px-2.5 w-full rounded-lg transition-colors font-medium ${
                priceRange === "under50" 
                  ? "bg-[#D9FF00]/10 text-[#D9FF00] border-l-2 border-[#D9FF00]" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              &lt; $50.80
            </button>

            <button
              onClick={() => setPriceRange("50to120")}
              className={`text-left text-xs py-1.5 px-2.5 w-full rounded-lg transition-colors font-medium ${
                priceRange === "50to120" 
                  ? "bg-[#D9FF00]/10 text-[#D9FF00] border-l-2 border-[#D9FF00]" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              $50.00 - $120.00
            </button>

            <button
              onClick={() => setPriceRange("above130")}
              className={`text-left text-xs py-1.5 px-2.5 w-full rounded-lg transition-colors font-medium ${
                priceRange === "above130" 
                  ? "bg-[#D9FF00]/10 text-[#D9FF00] border-l-2 border-[#D9FF00]" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              &gt; $130.00
            </button>
          </div>
        )}
      </div>

      {/* Popular Categories tag buttons */}
      <div className="bg-[#121212] border border-gray-800 rounded-3xl p-5 shadow-lg select-none">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
          Browse by Popular Category
        </h4>
        <div className="flex flex-wrap gap-2">
          {popularCategories.map((tag) => {
            const isActive = popularTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setPopularTag(isActive ? "all" : tag)}
                className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-all active:scale-95 cursor-pointer ${
                  isActive 
                    ? "bg-[#D9FF00] text-black shadow-md shadow-[#D9FF00]/15" 
                    : "bg-[#1f1f1f] text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
