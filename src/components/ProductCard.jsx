import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, isCollection = false, onOpenDetails }) => {
  const isMockup =
    product.image?.includes('cart3') ||
    product.image?.includes('cart4') ||
    (product.name &&
      (product.name.toLowerCase().includes('tv') ||
        product.name.toLowerCase().includes('poster')) &&
      !product.name.toLowerCase().includes('outdoor') &&
      !product.name.toLowerCase().includes('invisible') &&
      !product.name.toLowerCase().includes('mesh'));

  const isPhoto = !isMockup;
  const needsScale = product.image?.includes('cart1') || product.image?.includes('cart2');

  return (
    <div
      onClick={() => onOpenDetails && onOpenDetails(product)}
      className="group relative flex flex-col justify-between rounded-[2.2rem] overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(217,255,0,0.15)] shadow-md w-full lg:h-[579.4px] min-h-[520px] mx-auto"
    >
      {/* Product Image Panel (White Background) */}
      <div className="flex-grow flex items-center justify-center bg-white min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[370px] relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`${isPhoto
            ? `absolute inset-0 w-full h-full object-cover ${needsScale ? 'scale-[1.15]' : ''}`
            : 'max-h-[90%] max-w-[90%] object-contain'
            } transition-transform duration-500 ${isPhoto
              ? `group-hover:${needsScale ? 'scale-[1.22]' : 'scale-105'}`
              : 'group-hover:scale-105'
            }`}
        />
      </div>

      {/* Info Panel (Solid Yellow-Green/Neon Background) */}
      <div className="bg-[#D9FF00] p-5 sm:p-6 flex flex-col justify-start select-none h-[215px] sm:h-[185px] shrink-0">
        {isCollection ? (
          <div className="flex items-center justify-between gap-2 w-full">
            <h3 className="text-[21.38px] font-bold text-black font-inter leading-tight text-left">
              {product.name}
            </h3>

            <button className="bg-black text-white hover:bg-gray-900 transition-colors text-[16.03px] font-semibold px-3 py-1.5 rounded-[6.68px] shrink-0">
              Read More
            </button>
          </div>
        ) : (
          <h3 className="text-[21.38px] font-bold text-black font-inter leading-tight text-left w-full">
            {product.name}
          </h3>
        )}

        <p
          className="text-[16.03px] text-black/85 font-poppins leading-snug text-left line-clamp-3 shrink-0"
          style={{ marginTop: '25px' }}
        >
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
