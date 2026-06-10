import React, { useState } from 'react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6 overflow-y-auto">
      {/* Modal Card wrapper */}
      <div className="relative w-full max-w-5xl bg-[#0c0d0a]/95 border border-[#D9FF00]/25 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(217,255,0,0.15)] flex flex-col md:flex-row my-8 select-none">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/40 border border-gray-800 text-gray-400 hover:text-[#D9FF00] hover:scale-105 transition-all focus:outline-none"
        >
          <X size={20} />
        </button>

        {/* Left Section: Product Visuals */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#11120e] border-b md:border-b-0 md:border-r border-gray-950 min-h-[300px]">
          {/* Subtle logo glow backdrop */}
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[#D9FF00]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative w-full flex items-center justify-center p-4 bg-white/5 border border-white/5 rounded-3xl aspect-square max-w-[360px] shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[280px] max-w-[90%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
          
          {/* Warranty / Trust Badges */}
          <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-[360px]">
            <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
              <Shield size={16} className="text-[#D9FF00]" />
              <span>3 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
              <Zap size={16} className="text-[#D9FF00]" />
              <span>24/7 Dedicated Support</span>
            </div>
          </div>
        </div>

        {/* Right Section: Specifications and Forms */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
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
            <div className="mt-6 bg-[#161713] border border-gray-900 rounded-3xl p-5 md:p-6 shadow-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D9FF00] mb-4 flex items-center gap-1.5">
                <Sparkles size={14} />
                Key Specifications
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(product.specs || {}).map(([key, val]) => (
                  <li key={key} className="flex flex-col border-b border-gray-800/40 pb-1.5">
                    <span className="text-gray-500 capitalize">{key}</span>
                    <span className="text-white font-medium mt-0.5">{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features List */}
            <div className="mt-6 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Product Features
              </h4>
              <ul className="space-y-2">
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
          <div className="mt-8 pt-6 border-t border-gray-900">
            {submitted ? (
              <div className="bg-[#D9FF00]/10 border border-[#D9FF00]/30 rounded-2xl p-6 text-center select-none">
                <CheckCircle size={32} className="text-[#D9FF00] mx-auto mb-2" />
                <h4 className="text-[#D9FF00] font-bold text-sm">Quote Request Submitted</h4>
                <p className="text-gray-400 text-xs mt-1 font-light">
                  Our sales specialists will contact you shortly with custom pricing options.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-sm font-bold text-white mb-2">Request Custom Pricing</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full bg-[#161713] border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D9FF00]/40 font-poppins"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full bg-[#161713] border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D9FF00]/40 font-poppins"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number (Optional)"
                    className="w-full bg-[#161713] border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D9FF00]/40 font-poppins"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full bg-[#161713] border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D9FF00]/40 font-poppins"
                  />
                </div>

                <textarea
                  rows="2"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Additional Message"
                  className="w-full bg-[#161713] border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D9FF00]/40 font-poppins resize-none"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#D9FF00] hover:bg-[#c4e600] disabled:bg-gray-700 text-black font-bold text-xs rounded-xl shadow-lg shadow-[#D9FF00]/10 hover:shadow-[#D9FF00]/20 transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer uppercase tracking-wider"
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
