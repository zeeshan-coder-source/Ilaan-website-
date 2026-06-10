import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, isCollection = false, onOpenDetails }) => {
  return (
    <div
      onClick={() => onOpenDetails && onOpenDetails(product)}
      className={`group relative flex flex-col justify-between rounded-[2.2rem] overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(217,255,0,0.15)] shadow-md border border-gray-100 w-full`}
    >
      {/* Product Image Panel (White Background) */}
      <div className="flex-grow flex items-center justify-center p-6 sm:p-8 bg-white min-h-[160px] sm:min-h-[200px] md:min-h-[220px] relative">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[140px] sm:max-h-[160px] md:max-h-[180px] max-w-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Floating Category Badge */}
        <span className="absolute top-4 left-4 bg-gray-900/10 text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </span>
      </div>

      {/* Info Panel (Solid Yellow-Green/Neon Background) */}
      <div className="bg-[#D9FF00] p-5 md:p-6 flex flex-col justify-between select-none">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold text-gray-950 font-inter leading-tight">
              {product.name}
            </h3>
            
            {isCollection && (
              <span className="bg-black text-[#D9FF00] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                Top Seller
              </span>
            )}
          </div>
          
          <p className="mt-1 text-xs text-gray-900/80 font-poppins leading-snug line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Read More / View Details action */}
        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3">
          <span className="text-sm font-black text-gray-950">
            ${product.price}
          </span>
          
          {isCollection ? (
            <button className="flex items-center gap-1 bg-black text-white hover:bg-gray-900 transition-colors text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full">
              Read More
              <ArrowRight size={10} />
            </button>
          ) : (
            <button className="flex items-center gap-1 text-black font-extrabold text-[10px] hover:translate-x-1 transition-transform uppercase">
              View Details
              <ArrowRight size={10} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
