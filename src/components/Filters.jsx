import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { categories, ledTypes, popularCategories } from '../data/products';

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

  const hasActiveFilters = 
    category !== "all" || 
    ledType !== "all" || 
    priceRange !== "all" || 
    popularTag !== "all";

  return (
    <div className="w-full flex flex-col space-y-6 text-white font-poppins pr-0 md:pr-4">
      {/* Header section with Clear option */}
      <div className="flex items-center justify-between pb-3">
        <span className="text-xl font-bold tracking-wide text-white">Filter by</span>
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
      <div className="pb-2">
        <button
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="w-full py-3 bg-[#D9FF00] text-black font-bold px-4 rounded-xl flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-sm font-bold tracking-wide">Categories</span>
          {isCategoriesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isCategoriesOpen && (
          <div className="mt-4 space-y-3 px-1">
            {categories.map((cat) => {
              const isSelected = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(isSelected ? "all" : cat)}
                  className={`text-left text-xs sm:text-sm py-2.5 px-4 rounded-lg transition-all w-full cursor-pointer ${
                    isSelected 
                      ? "bg-white text-black font-bold shadow-md" 
                      : "text-gray-300 hover:text-[#D9FF00] font-medium"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Accordion 2: LED Type */}
      <div className="pb-2">
        <button
          onClick={() => setIsLedTypeOpen(!isLedTypeOpen)}
          className="w-full py-3 bg-[#D9FF00] text-black font-bold px-4 rounded-xl flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-sm font-bold tracking-wide">LED Type</span>
          {isLedTypeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isLedTypeOpen && (
          <div className="mt-4 space-y-3 px-1">
            {ledTypes.map((type) => {
              const isSelected = ledType === type;
              return (
                <button
                  key={type}
                  onClick={() => setLedType(isSelected ? "all" : type)}
                  className={`text-left text-xs sm:text-sm py-2.5 px-4 rounded-lg w-full transition-all cursor-pointer ${
                    isSelected 
                      ? "bg-white text-black font-bold shadow-md" 
                      : "text-gray-300 hover:text-[#D9FF00] font-medium"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Accordion 3: Price Range */}
      <div className="pb-2">
        <button
          onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}
          className="w-full py-3 bg-[#D9FF00] text-black font-bold px-4 rounded-xl flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-sm font-bold tracking-wide">Price Range</span>
          {isPriceRangeOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isPriceRangeOpen && (
          <div className="mt-4 space-y-3 px-1">
            <button
              onClick={() => setPriceRange(priceRange === "under50" ? "all" : "under50")}
              className={`text-left text-xs sm:text-sm py-2.5 px-4 w-full rounded-lg transition-all cursor-pointer ${
                priceRange === "under50" 
                  ? "bg-white text-black font-bold shadow-md" 
                  : "text-gray-300 hover:text-[#D9FF00] font-medium"
              }`}
            >
              &lt; $50.00
            </button>

            <button
              onClick={() => setPriceRange(priceRange === "50to100" ? "all" : "50to100")}
              className={`text-left text-xs sm:text-sm py-2.5 px-4 w-full rounded-lg transition-all cursor-pointer ${
                priceRange === "50to100" 
                  ? "bg-white text-black font-bold shadow-md" 
                  : "text-gray-300 hover:text-[#D9FF00] font-medium"
              }`}
            >
              $50.00 - $100.00
            </button>

            <button
              onClick={() => setPriceRange(priceRange === "above100" ? "all" : "above100")}
              className={`text-left text-xs sm:text-sm py-2.5 px-4 w-full rounded-lg transition-all cursor-pointer ${
                priceRange === "above100" 
                  ? "bg-white text-black font-bold shadow-md" 
                  : "text-gray-300 hover:text-[#D9FF00] font-medium"
              }`}
            >
              &gt; $100.00
            </button>
          </div>
        )}
      </div>

      {/* Popular Categories tag buttons */}
      <div className="bg-white rounded-[2rem] p-5 shadow-lg select-none">
        <h4 className="text-sm font-bold text-gray-950 mb-3 text-left">
          Browse by Popular Category
        </h4>
        <div className="flex flex-wrap gap-2">
          {popularCategories.map((tag) => {
            const isActive = popularTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setPopularTag(isActive ? "all" : tag)}
                className={`text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg transition-all active:scale-95 cursor-pointer ${
                  isActive 
                    ? "bg-black text-[#D9FF00]" 
                    : "bg-[#D9FF00] text-black hover:bg-black hover:text-[#D9FF00]"
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
