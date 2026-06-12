import React, { useMemo } from 'react';
import { ChevronRight, Check, ChevronDown } from 'lucide-react';
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

const ProductsPage = () => {
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
    <div className="min-h-screen text-white overflow-x-hidden font-poppins selection:bg-[#D9FF00]/30 selection:text-white bg-[#232323]">

      {/* Top Section: Galaxy Background (Navbar + Hero + Search) */}
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative border-b border-white/5 flex flex-col justify-between"
        style={{ backgroundImage: `url(${productBgImg})`, backgroundColor: '#030508' }}
      >
        <ProductNavbar />

        <main className="flex-grow w-full mx-auto px-4 md:px-22 pt-2 pb-10 flex flex-col justify-between">

          {/* Hero Section */}
          <section className="w-full flex-grow flex items-center py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

              <div className="lg:col-span-4 space-y-8 text-left">
                {/* Breadcrumb */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-light text-gray-400 tracking-wide">
                  <span className="cursor-pointer hover:text-white transition-colors">Products</span>
                  <span className="text-gray-600">/</span>
                  <span className="text-gray-200">4K Digital Signage Display</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-[56px] font-[100] tracking-tight leading-[1.15] text-white">
                    4K Digital <br />
                    Signage Display
                  </h1>
                  <div className="flex flex-wrap gap-2 pt-2 max-w-sm">
                    {["Ultra HD Display", "24/7 Operation", "Remote", "Remote Content Management"].map((tag, idx) => (
                      <span key={idx} className="px-3.5 py-2 bg-[#12161a]/60 border border-white/10 rounded-lg text-xs font-light text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
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


              <div className="lg:col-span-5 flex justify-center items-center min-h-[300px]">
                {/* <div className="w-full max-w-lg drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] hover:scale-[1.01] transition-transform duration-700">
                  <img src={heroDisplayImg} alt="Display" className="w-full h-auto object-contain" />
                </div> */}
              </div>


              {/* <div className="lg:col-span-3 bg-[#0c0f12]/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-7 shadow-2xl flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <h3 className="text-lg font-medium text-white tracking-wide">Key Specifications</h3>
                  <ul className="space-y-3.5">
                    {heroSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs md:text-[13px] text-gray-300 font-light leading-relaxed">
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20 text-[#D9FF00] shrink-0 mt-0.5">
                          <Check size={10} strokeWidth={3.5} />
                        </span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2.5 pt-2 w-full">
                  <button
                    onClick={handleHeroQuote}
                    className="w-full py-2.5 bg-[#12161a]/40 border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-lg text-xs font-light text-gray-300 transition-all text-center tracking-wide"
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={handleHeroQuote}
                    className="w-full py-2.5 bg-[#12161a]/40 border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-lg text-xs font-light text-gray-300 transition-all text-center tracking-wide"
                  >
                    Request info
                  </button>
                  <button
                    onClick={resetFilters}
                    className="w-full py-2.5 bg-[#12161a]/40 border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-lg text-xs font-light text-gray-300 transition-all text-center tracking-wide"
                  >
                    View All Products
                  </button>
                </div>
              </div> */}

              <div
                className="lg:col-span-3 w-full max-w-[389px] h-[496px] p-6 lg:p-7 flex flex-col justify-between bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-2xl shrink-0"
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
      <div className="w-full bg-[#232323] py-14">
        <main className="w-full mx-auto px-4 md:px-22 space-y-14">

          {/* Featured Collections */}
          {featuredCollections.length > 0 && (
            <section className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div className="text-left">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Top Seller</span>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">Explore Our Best Collections</h2>
                </div>
                <button onClick={resetFilters} className="px-5 py-2 text-xs border border-white/10 rounded-full hover:bg-white/5 transition-colors uppercase tracking-wider text-gray-300">View All</button>
              </div>
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

          {/* Catalog Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">

            {/* Sidebar filter column */}
            <aside className="lg:col-span-3 bg-[#1e1e1e]/60 border border-white/5 rounded-3xl p-6 shadow-xl">
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2">
                <span className="text-sm text-gray-400">
                  Showing all <strong className="text-white font-medium">{products.length}</strong> results
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-300 font-semibold">Sort by</span>
                  <div className="relative flex items-center">
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="bg-black border border-[#D9FF00] text-xs text-white pl-4 pr-10 py-2 rounded-xl focus:outline-none cursor-pointer appearance-none"
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
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default ProductsPage;