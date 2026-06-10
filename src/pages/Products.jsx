import React, { useState, useMemo } from 'react';
import { ChevronRight, Check, Play, FileText, ArrowRight, ShieldCheck, Layers, HelpCircle } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductNavbar from '../components/ProductNavbar';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import Footer from '../components/Footer';

// Assets
import heroDisplayImg from '../assets/02 1.png'; // High resolution display for hero

const ProductsPage = () => {
  const {
    products,
    allProducts,
    loading,
    search,
    setSearch,
    category,
    setCategory,
    ledType,
    setLedType,
    priceRange,
    setPriceRange,
    popularTag,
    setPopularTag,
    sort,
    setSort,
    resetFilters
  } = useProducts();

  // State for opening details modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Specifications list for the 4K Digital Signage Display Hero
  const heroSpecs = [
    "3840 x 2160 Resolution",
    "24/7 Run Operation",
    "Remote Content management",
    "WiFi & LAN connectivity options",
    "Multiple mounting options",
    "High Brightness visibility"
  ];

  // Featured collections are the first 4 products in products list
  const featuredCollections = useMemo(() => {
    return allProducts.filter(p => p.featured).slice(0, 4);
  }, [allProducts]);

  // Handler to open quote modal for a specific product
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  // Handler for Hero "Get a Quote" (using the first product or All-in-One LED TV)
  const handleHeroQuote = () => {
    const heroProduct = allProducts.find(p => p.id === 2) || allProducts[0];
    if (heroProduct) {
      setSelectedProduct(heroProduct);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden font-poppins selection:bg-[#D9FF00]/30 selection:text-white">
      
      {/* 1. Header Navigation */}
      <ProductNavbar />

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12 md:space-y-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-widest">
          <span className="cursor-pointer hover:text-white transition-colors">Products</span>
          <ChevronRight size={10} className="text-gray-700" />
          <span className="text-gray-300">4K Digital Signage Displays</span>
        </div>

        {/* 2. Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0d0d0d] border border-gray-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Decorative subtle glows */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#D9FF00]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute left-10 bottom-0 w-60 h-60 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Left Column: Heading and Specifications */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
              4K Digital <br />
              <span className="text-[#D9FF00]">Signage Display</span>
            </h1>

            {/* Specifications Box */}
            <div className="bg-[#121212] border border-gray-800 rounded-3xl p-6 shadow-inner relative group">
              <span className="absolute -top-3 left-6 bg-[#D9FF00] text-black font-extrabold text-[9px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Key Specifications
              </span>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {heroSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-light">
                    <Check size={14} className="text-[#D9FF00] shrink-0" strokeWidth={3} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick buttons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <button 
                onClick={handleHeroQuote}
                className="flex items-center gap-1.5 px-4 py-2 border border-gray-800 hover:border-[#D9FF00]/40 rounded-full text-xs font-semibold text-gray-300 hover:text-white transition-all bg-white/5 active:scale-95"
              >
                <Layers size={14} className="text-[#D9FF00]" />
                Subscribe
              </button>
              <button 
                onClick={handleHeroQuote}
                className="flex items-center gap-1.5 px-4 py-2 border border-gray-800 hover:border-[#D9FF00]/40 rounded-full text-xs font-semibold text-gray-300 hover:text-white transition-all bg-white/5 active:scale-95"
              >
                <FileText size={14} className="text-[#D9FF00]" />
                Request Info
              </button>
              <button 
                onClick={handleHeroQuote}
                className="flex items-center gap-1.5 px-4 py-2 border border-gray-800 hover:border-[#D9FF00]/40 rounded-full text-xs font-semibold text-gray-300 hover:text-white transition-all bg-white/5 active:scale-95"
              >
                <Play size={14} className="text-[#D9FF00]" />
                View Video Info
              </button>
            </div>

            {/* Main Quote Call to action */}
            <div className="pt-4">
              <button
                onClick={handleHeroQuote}
                className="px-10 py-4 bg-[#D9FF00] hover:bg-[#c4e600] text-black font-extrabold text-sm rounded-full shadow-[0_10px_30px_rgba(217,255,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-wider cursor-pointer"
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Mockup Image */}
          <div className="lg:col-span-6 flex items-center justify-center relative select-none">
            {/* Outer display glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-[#D9FF00]/15 to-purple-500/0 rounded-[2.5rem] blur-2xl pointer-events-none" />

            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-800 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              <img
                src={heroDisplayImg}
                alt="4K Digital Signage Display Spotlight"
                className="w-full h-full object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-[2000ms]"
              />
              {/* Glossy Overlay Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* 3. Search Bar Area */}
        <section className="max-w-4xl mx-auto w-full">
          <SearchBar value={search} onChange={setSearch} />
        </section>

        {/* 4. Best Collections (Featured Products) */}
        {featuredCollections.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-end justify-between border-b border-gray-900 pb-4">
              <div className="text-left">
                <span className="text-[10px] font-bold text-[#D9FF00] tracking-widest uppercase block mb-1">
                  Top Seller
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white font-inter">
                  Explore Our Best Collections
                </h2>
              </div>
              <button 
                onClick={resetFilters}
                className="px-5 py-2 text-xs font-bold border border-gray-800 text-gray-400 hover:text-[#D9FF00] hover:border-[#D9FF00] rounded-full transition-all active:scale-95 uppercase tracking-wider cursor-pointer"
              >
                View All
              </button>
            </div>

            {/* Responsive Row Grid for Featured Collections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCollections.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  isCollection={true}
                  onOpenDetails={handleOpenModal}
                />
              ))}
            </div>
          </section>
        )}

        {/* 5. Main Catalog Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left: Filters Sidebar */}
          <aside className="lg:col-span-3 bg-[#0d0d0d] border border-gray-900 rounded-[2rem] p-6 shadow-xl sticky top-6">
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

          {/* Right: Products Grid */}
          <div className="lg:col-span-9 space-y-6">
            {/* Grid Header Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-900 pb-4">
              <span className="text-sm font-medium text-gray-400 text-left select-none">
                Showing all <strong className="text-white font-semibold">{products.length}</strong> results
              </span>

              {/* Sorting Selection Dropdown */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-[#0d0d0d] border border-gray-800 text-xs text-gray-200 px-4 py-2.5 rounded-xl focus:outline-none focus:border-[#D9FF00]/40 font-semibold cursor-pointer shadow-md"
                >
                  <option value="recommended">Recommendation</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Grid Loading/Empty States & Cards list */}
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-3">
                <div className="w-8 h-8 border-2 border-t-transparent border-[#D9FF00] rounded-full animate-spin" />
                <span className="text-xs text-gray-400">Loading catalog...</span>
              </div>
            ) : products.length === 0 ? (
              <div className="py-20 border border-dashed border-gray-900 rounded-[2rem] flex flex-col items-center justify-center text-center px-4">
                <HelpCircle size={40} className="text-gray-600 mb-2" />
                <h4 className="text-sm font-bold text-gray-300">No Products Found</h4>
                <p className="text-xs text-gray-500 mt-1 font-light max-w-sm">
                  We couldn't find any products matching your current search queries or filters. Try clearing some selections.
                </p>
                <button 
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-[#D9FF00] hover:bg-[#c4e600] text-black text-xs font-bold rounded-lg transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* 6. Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* 7. Footer banner */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
