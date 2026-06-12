import React, { useState } from 'react';
import { X } from 'lucide-react';
import { categories, ledTypes } from '../data/products';
import arrowIcon from '../assets/Vector 4.png';

const ArrowIcon = ({ isOpen }) => (
  <img 
    src={arrowIcon} 
    alt="arrow icon" 
    className={`w-3.5 h-auto object-contain transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
  />
);

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

  // Rows of popular tags to match Figma layout exactly
  const popularTagRows = [
    ["LED", "Outdoor", "Indoor"],
    ["Display", "Seammless"],
    ["Poster", "Foldable LED"]
  ];

  return (
    <div className="w-full flex flex-col space-y-5 text-white font-poppins">
      {/* Header section with Clear option */}
      <div className="flex items-center justify-between pb-2">
        <span className="text-[24.05px] font-bold tracking-wide text-white">Filter by</span>
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
          className="w-full py-3.5 bg-[#D9FF00] text-black font-bold px-5 rounded-[12px] flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-[21.38px] font-bold tracking-wide">Categories</span>
          <ArrowIcon isOpen={isCategoriesOpen} />
        </button>

        {isCategoriesOpen && (
          <div className="mt-3.5 space-y-2">
            {categories.map((cat) => {
              const isSelected = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(isSelected ? "all" : cat)}
                  className={`text-left text-[21.38px] py-3 px-5 rounded-[10px] transition-all w-full cursor-pointer ${
                    isSelected 
                      ? "bg-white text-black font-semibold shadow-md" 
                      : "text-white hover:text-[#D9FF00] font-medium"
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
          className="w-full py-3.5 bg-[#D9FF00] text-black font-bold px-5 rounded-[12px] flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-[21.38px] font-bold tracking-wide">LED Type</span>
          <ArrowIcon isOpen={isLedTypeOpen} />
        </button>

        {isLedTypeOpen && (
          <div className="mt-3.5 space-y-2">
            {ledTypes.map((type) => {
              const isSelected = ledType === type;
              return (
                <button
                  key={type}
                  onClick={() => setLedType(isSelected ? "all" : type)}
                  className={`text-left text-[21.38px] py-3 px-5 rounded-[10px] w-full transition-all cursor-pointer ${
                    isSelected 
                      ? "bg-white text-black font-semibold shadow-md" 
                      : "text-white hover:text-[#D9FF00] font-medium"
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
          className="w-full py-3.5 bg-[#D9FF00] text-black font-bold px-5 rounded-[12px] flex items-center justify-between transition-all hover:opacity-90 cursor-pointer"
        >
          <span className="text-[21.38px] font-bold tracking-wide">Price Range</span>
          <ArrowIcon isOpen={isPriceRangeOpen} />
        </button>

        {isPriceRangeOpen && (
          <div className="mt-3.5 space-y-2">
            <button
              onClick={() => setPriceRange(priceRange === "under50" ? "all" : "under50")}
              className={`text-left text-[21.38px] py-3 px-5 w-full rounded-[10px] transition-all cursor-pointer ${
                priceRange === "under50" 
                  ? "bg-white text-black font-semibold shadow-md" 
                  : "text-white hover:text-[#D9FF00] font-medium"
              }`}
            >
              &lt; $50.00
            </button>

            <button
              onClick={() => setPriceRange(priceRange === "50to100" ? "all" : "50to100")}
              className={`text-left text-[21.38px] py-3 px-5 w-full rounded-[10px] transition-all cursor-pointer ${
                priceRange === "50to100" 
                  ? "bg-white text-black font-semibold shadow-md" 
                  : "text-white hover:text-[#D9FF00] font-medium"
              }`}
            >
              $50.00 - $100.00
            </button>

            <button
              onClick={() => setPriceRange(priceRange === "above100" ? "all" : "above100")}
              className={`text-left text-[21.38px] py-3 px-5 w-full rounded-[10px] transition-all cursor-pointer ${
                priceRange === "above100" 
                  ? "bg-white text-black font-semibold shadow-md" 
                  : "text-white hover:text-[#D9FF00] font-medium"
              }`}
            >
              &gt; $100
            </button>
          </div>
        )}
      </div>

      {/* Popular Categories tag buttons */}
      <div className="bg-white rounded-[13.36px] p-6 shadow-xl select-none w-[354.1px] h-[314.07px] flex flex-col justify-between">
        <h4 className="text-[24.05px] font-bold text-black text-left leading-tight">
          Browse by Popular Category
        </h4>
        <div className="flex flex-col gap-2.5">
          {popularTagRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-2">
              {row.map((tag) => {
                const isActive = popularTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setPopularTag(isActive ? "all" : tag)}
                    className={`h-[49.72px] px-[18px] w-auto whitespace-nowrap rounded-[6.68px] text-[18.71px] font-semibold transition-all active:scale-95 cursor-pointer flex items-center justify-center text-center leading-tight ${
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
