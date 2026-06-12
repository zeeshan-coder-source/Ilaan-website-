import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, isCollection = false, onOpenDetails }) => {
  if (isCollection) {
    return (
      <div
        onClick={() => onOpenDetails && onOpenDetails(product)}
        className="group relative flex flex-col justify-between rounded-[2.2rem] overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(217,255,0,0.15)] shadow-md border border-gray-100 w-full lg:w-[407.55px] lg:h-[579.4px] min-h-[520px] mx-auto"
      >
        {/* Product Image Panel (White Background) */}
        <div className="flex-grow flex items-center justify-center p-6 bg-white min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[370px] relative">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[200px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px] max-w-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info Panel (Solid Yellow-Green/Neon Background) */}
        <div className="bg-[#D9FF00] p-6 sm:p-7 md:p-8 flex flex-col justify-between select-none h-[180px] sm:h-[190px] lg:h-[209px] shrink-0">
          <div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-950 font-inter leading-tight text-left">
                {product.name}
              </h3>
              
              <button className="flex items-center gap-1.5 bg-black text-white hover:bg-gray-900 transition-colors text-[10px] lg:text-[11px] font-bold px-3.5 py-1.5 rounded-full shrink-0">
                Read More
                <ArrowRight size={10} />
              </button>
            </div>
            
            <p className="mt-3 text-xs lg:text-sm text-gray-900/80 font-poppins leading-snug text-left line-clamp-3">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Standard Catalog Card (isCollection = false)
  return (
    <div
      onClick={() => onOpenDetails && onOpenDetails(product)}
      className="group relative flex flex-col justify-between rounded-[2.2rem] overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(217,255,0,0.15)] shadow-md border border-gray-100 w-full min-h-[380px] mx-auto"
    >
      {/* Product Image Panel (White Background) */}
      <div className="flex-grow flex items-center justify-center p-6 bg-white min-h-[200px] sm:min-h-[240px] md:min-h-[260px] relative">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[160px] sm:max-h-[200px] md:max-h-[220px] max-w-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info Panel (Solid Yellow-Green/Neon Background) */}
      <div className="bg-[#D9FF00] p-6 sm:p-7 md:p-8 flex flex-col justify-between select-none h-[140px] sm:h-[150px] shrink-0">
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-950 font-inter leading-tight text-left">
            {product.name}
          </h3>
          
          <p className="mt-2 text-xs lg:text-sm text-gray-900/80 font-poppins leading-snug text-left line-clamp-3">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
