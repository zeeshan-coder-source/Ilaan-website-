import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Shield, Zap, Sparkles } from 'lucide-react';

const ProductDetailModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: `Interested in requesting a quote for the: ${product?.name}.`
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-md flex justify-center items-start p-4 md:p-6"
      onClick={onClose}
    >
      {/* Modal Card wrapper */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0c0d0a]/95 border border-[#D9FF00]/20 rounded-[2.5rem] overflow-hidden shadow-[0_0_60px_rgba(217,255,0,0.12)] flex flex-col md:flex-row my-4 md:my-auto"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-black/60 border border-white/10 text-gray-400 hover:text-black hover:bg-[#D9FF00] hover:border-[#D9FF00] hover:rotate-90 hover:scale-105 transition-all duration-300 focus:outline-none"
        >
          <X size={18} />
        </button>

        {/* Left Section: Product Visuals */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#11120e] border-b md:border-b-0 md:border-r border-white/5 min-h-[300px] relative">
          {/* Soft centered logo glow backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D9FF00]/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative w-full flex items-center justify-center p-6 bg-white/[0.02] border border-white/10 rounded-3xl aspect-square max-w-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[280px] max-w-[95%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Warranty / Trust Badges */}
          <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-[360px] relative z-10">
            <div className="flex items-center gap-2.5 text-[11px] text-gray-400 font-medium bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl">
              <Shield size={15} className="text-[#D9FF00]" />
              <span>3 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2.5 text-[11px] text-gray-400 font-medium bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl">
              <Zap size={15} className="text-[#D9FF00]" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Right Section: Specifications and Forms */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            {/* Category / Name */}
            <span className="text-[10px] font-bold text-[#D9FF00] tracking-widest uppercase mb-1 block">
              {product.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight font-inter">
              {product.name}
            </h2>
            <p className="mt-3 text-sm text-gray-400 font-poppins leading-relaxed font-light">
              {product.description}
            </p>

            {/* Spec Sheet Grid */}
            <div className="mt-6 bg-[#161713]/80 border border-[#D9FF00]/10 rounded-2xl p-5 md:p-6 shadow-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D9FF00] mb-4 flex items-center gap-1.5">
                <Sparkles size={14} />
                Key Specifications
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs">
                {Object.entries(product.specs || {}).map(([key, val]) => (
                  <li key={key} className="flex flex-col border-b border-white/5 pb-1.5">
                    <span className="text-gray-500 capitalize text-[10px]">{key}</span>
                    <span className="text-white font-medium mt-0.5">{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features List */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Product Features
              </h4>
              <ul className="space-y-2.5">
                {(product.features || []).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle size={14} className="text-[#D9FF00] shrink-0 mt-0.5" />
                    <span className="font-poppins font-light leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact / Quote Form Section */}
          <div className="mt-8 pt-6 border-t border-white/5">
            {submitted ? (
              <div className="bg-[#D9FF00]/10 border border-[#D9FF00]/20 rounded-2xl p-6 text-center select-none">
                <CheckCircle size={32} className="text-[#D9FF00] mx-auto mb-2" />
                <h4 className="text-[#D9FF00] font-bold text-sm">Quote Request Submitted</h4>
                <p className="text-gray-400 text-xs mt-1 font-light">
                  Our sales specialists will contact you shortly with custom pricing options.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-sm font-bold text-white mb-2 font-inter">Request Custom Pricing</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full bg-[#161713]/80 border border-white/5 hover:border-white/10 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all font-poppins"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full bg-[#161713]/80 border border-white/5 hover:border-white/10 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all font-poppins"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number (Optional)"
                    className="w-full bg-[#161713]/80 border border-white/5 hover:border-white/10 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all font-poppins"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full bg-[#161713]/80 border border-white/5 hover:border-white/10 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all font-poppins"
                  />
                </div>

                <textarea
                  rows="2"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Additional Message"
                  className="w-full bg-[#161713]/80 border border-white/5 hover:border-white/10 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all font-poppins resize-none"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D9FF00] hover:bg-black hover:text-[#D9FF00] border border-[#D9FF00] disabled:bg-gray-700 text-black font-bold text-xs rounded-xl shadow-lg shadow-[#D9FF00]/10 hover:shadow-[#D9FF00]/20 transition-all duration-300 active:scale-95 cursor-pointer uppercase tracking-wider"
                >
                  {submitting ? 'Submitting...' : 'Submit Request'}
                  <Send size={12} />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailModal;
