import React, { useMemo, useState } from 'react';
import { ChevronRight, Check, ChevronDown, X } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductNavbar from '../components/ProductNavbar';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import Footer from '../components/Footer';


// Assets
import heroDisplayImg from '../assets/02 1.png';
import productBgImg from '../assets/productbg.png';
import herosectionbg from '../assets/Rectangle 12348.png';
import checkMarkIcon from '../assets/check-mark 1.png';
import buttonBgImg from '../assets/Rectangle 12352.png';
import productherobg from '../assets/productherobg.png';

const ProductsPage = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const {
    products, allProducts, loading, search, setSearch, category, setCategory,
    ledType, setLedType, priceRange, setPriceRange, popularTag, setPopularTag,
    sort, setSort, resetFilters
  } = useProducts();

  const { productSlug } = useParams();
  const navigate = useNavigate();

  // Helper to generate slug from product name
  const getSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Find the selected product based on productSlug in the URL
  const selectedProduct = useMemo(() => {
    if (!productSlug || allProducts.length === 0) return null;
    return allProducts.find(p => getSlug(p.name) === productSlug) || null;
  }, [productSlug, allProducts]);

  const handleOpenModal = (product) => {
    navigate(`/products/${getSlug(product.name)}`);
  };

  const handleCloseModal = () => {
    navigate('/products');
  };

  const heroSpecs = [
    "Ultra HD (3840x2160) Resolution",
    "24/7 Commercial Use",
    "Remote Content Management",
    "WiFi & LAN Mounting Options",
    "Multiple Mounting Options",
    "High Brightness & Visibility"
  ];

  const featuredCollections = useMemo(() => {
    return allProducts.filter(p => p.featured).slice(0, 4);
  }, [allProducts]);

  const handleHeroQuote = () => {
    const heroProduct = allProducts.find(p => p.id === 2) || allProducts[0];
    if (heroProduct) handleOpenModal(heroProduct);
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden font-poppins selection:bg-[#D9FF00]/30 selection:text-white bg-[#4B4B4B]">

      {/* Top Section: Galaxy Background (Navbar + Hero + Search) */}
      <style>{`
        .products-hero-bg {
          background-image: url(${productBgImg});
        }
        @media (max-w: 1023px) {
          .products-hero-bg {
            background-image: url(${productherobg});
          }
        }
      `}</style>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative border-b border-white/5 flex flex-col justify-between products-hero-bg"
        style={{ backgroundColor: '#030508' }}
      >
        <ProductNavbar />

        <main className="flex-grow w-full mx-auto px-4 md:px-22 pt-2 pb-10 flex flex-col justify-between">

          {/* Hero Section */}
          <section className="w-full flex-grow flex items-center py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

              <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm font-light text-gray-400 tracking-wide">
                  <span className="cursor-pointer hover:text-white transition-colors">Products</span>
                  <span className="text-gray-600">/</span>
                  <span className="text-gray-200">4K Digital Signage Display</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-[56px] font-[100] tracking-tight leading-[1.15] text-white text-center lg:text-left">
                    4K Digital <br />
                    Signage Display
                  </h1>

                  {/* Mobile Hero Spacer (shows background image monitor without overlap) */}
                  <div className="lg:hidden h-[280px] sm:h-[340px] w-full"></div>

                  <div className="flex flex-wrap gap-2 pt-2 max-w-sm justify-center lg:justify-start mx-auto lg:mx-0">
                    {["Ultra HD Display", "24/7 Operation", "Remote", "Remote Content Management"].map((tag, idx) => (
                      <span key={idx} className="px-3.5 py-2 bg-[#12161a]/60 border border-white/10 rounded-lg text-xs font-light text-gray-300 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-center lg:justify-start">
                  <button
                    onClick={handleHeroQuote}
                    className="w-[193px] h-[58px] flex items-center justify-center text-white font-light text-sm tracking-wider rounded-full transition-all duration-300 active:scale-95 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(#030508, #030508) padding-box, linear-gradient(to right, #22458E, #2F7F5A) border-box',
                      border: '2.5px solid transparent',
                      boxShadow: '0 0 20px rgba(34, 69, 142, 0.35), 0 0 20px rgba(47, 127, 90, 0.35)'
                    }}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>


              {/* Desktop Hero Image (visible only on desktop) */}
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center min-h-[300px]">
                {/* <div className="w-full max-w-lg drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] hover:scale-[1.01] transition-transform duration-700">
                  <img src={heroDisplayImg} alt="Display" className="w-full h-auto object-contain" />
                </div> */}
              </div>


              <div
                className="lg:col-span-3 w-full max-w-[389px] h-auto lg:h-[496px] p-6 lg:p-7 flex flex-col justify-between bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-2xl shrink-0 mx-auto lg:mx-0 gap-8 lg:gap-0"
                style={{ backgroundImage: `url(${herosectionbg})` }}
              >
                <div className="space-y-5">
                  <h3 className="text-lg font-medium text-white tracking-wide">Key Specifications</h3>
                  <ul className="space-y-3.5">
                    {heroSpecs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs md:text-[13px] text-gray-300 font-light leading-relaxed">
                        <img
                          src={checkMarkIcon}
                          alt="Check"
                          className="w-4 h-4 shrink-0 object-contain"
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-2.5 pt-2 w-full">
                  <button
                    onClick={handleHeroQuote}
                    className="w-[135px] h-[49px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={handleHeroQuote}
                    className="w-[159px] h-[53px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
                  >
                    Request info
                  </button>
                  <button
                    onClick={resetFilters}
                    className="w-[201px] h-[53px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
                  >
                    View All Products
                  </button>
                </div>
              </div>



            </div>
          </section>

          {/* Search Bar */}
          <div className="w-full">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </main>
      </div>

      {/* Bottom Section: Solid Dark Background (Collections + Catalog) */}
      <div className="w-full bg-[#2b2b2b] py-14">
        <main className="w-full mx-auto px-4 md:px-22 space-y-14">

          {/* Featured Collections */}
          {featuredCollections.length > 0 && (
            <section className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/10 pb-4 gap-4">
                <div className="text-left flex-grow">
                  <span className="block text-sm sm:text-[24.05px] text-white uppercase tracking-widest font-light">
                    Top Seller
                  </span>

                  <span className="block mt-2 sm:mt-8 text-2xl sm:text-[45px] font-light text-white leading-tight">
                    Explore Our Best Collections
                  </span>
                </div>
                <button 
                  onClick={resetFilters} 
                  className="px-5 py-2 text-xs border border-[#D9FF00] rounded-full hover:bg-[#D9FF00]/10 transition-colors text-[#D9FF00] font-medium tracking-wide whitespace-nowrap shrink-0"
                >
                  View All
                </button>
              </div>
              <div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pt-4 pb-6 lg:pb-0 snap-x snap-mandatory w-full -mt-4 no-scrollbar">
                {featuredCollections.map((prod) => (
                  <div key={prod.id} className="w-[300px] sm:w-[350px] lg:w-full shrink-0 snap-start">
                    <ProductCard
                      product={prod}
                      isCollection={true}
                      onOpenDetails={handleOpenModal}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Catalog Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">

            {/* Sidebar filter column (hidden on mobile, visible on desktop) */}
            <aside className="hidden lg:block lg:col-span-3 bg-[#4B4B4B] rounded-[20.04px] p-7 shadow-2xl">
              <Filters
                category={category}
                setCategory={setCategory}
                ledType={ledType}
                setLedType={setLedType}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                popularTag={popularTag}
                setPopularTag={setPopularTag}
                resetFilters={resetFilters}
              />
            </aside>

            {/* Grid display column */}
            <div className="lg:col-span-9 space-y-6">
              <div className="flex flex-row items-center justify-between gap-4 pb-2">
                {/* On desktop: Results count */}
                <span className="hidden sm:inline text-[16.03px] text-white font-semibold font-inter">
                  Showing all {products.length} results
                </span>

                {/* On mobile: Filter by Button (bright green) */}
                <button
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className="sm:hidden flex items-center gap-1.5 bg-[#D9FF00] text-black px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer shadow-md transition-all active:scale-95 hover:opacity-90"
                >
                  <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18m-15 5h12m-9 5h6" />
                  </svg>
                  Filter by
                </button>

                {/* Sort dropdown */}
                <div className="flex items-center gap-3">
                  <span className="text-[16.03px] text-white font-medium font-inter">Sort by</span>
                  <div className="relative flex items-center">
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="bg-black border border-[#D9FF00] text-[16.03px] text-white pl-4 pr-10 py-2.5 rounded-xl focus:outline-none cursor-pointer appearance-none font-medium font-inter"
                    >
                      <option value="recommended" className="bg-[#1e1e1e] text-white">Recommendation</option>
                      <option value="price-low" className="bg-[#1e1e1e] text-white">Price: Low to High</option>
                      <option value="price-high" className="bg-[#1e1e1e] text-white">Price: High to Low</option>
                      <option value="name-asc" className="bg-[#1e1e1e] text-white">Name: A to Z</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#D9FF00]">
                      <ChevronDown size={14} className="stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center space-y-3">
                  <div className="w-6 h-6 border-2 border-t-transparent border-[#D9FF00] rounded-full animate-spin" />
                  <span className="text-xs text-gray-500">Loading catalog...</span>
                </div>
              ) : products.length === 0 ? (
                <div className="py-20 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center px-4">
                  <h4 className="text-sm font-medium text-gray-400">No Products Found</h4>
                  <button
                    onClick={resetFilters}
                    className="mt-4 px-4 py-2 bg-[#D9FF00] text-black text-xs font-semibold rounded-lg"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 -mt-4">
                  {products.map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onOpenDetails={handleOpenModal}
                    />
                  ))}
                </div>
              )}
            </div>

          </section>

        </main>
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setIsMobileFiltersOpen(false)} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300"
          />

          {/* Drawer content */}
          <div className="relative w-[85%] max-w-[360px] bg-[#4B4B4B] h-full p-6 shadow-2xl flex flex-col z-10 overflow-y-auto">
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all cursor-pointer flex items-center justify-center"
            >
              <X size={20} />
            </button>
            <div className="mt-8 flex-grow">
              <Filters
                category={category}
                setCategory={setCategory}
                ledType={ledType}
                setLedType={setLedType}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                popularTag={popularTag}
                setPopularTag={setPopularTag}
                resetFilters={() => {
                  resetFilters();
                  setIsMobileFiltersOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer bgGradient="#D0FF00" isDark={true} />
    </div>
  );
};

export default ProductsPage;