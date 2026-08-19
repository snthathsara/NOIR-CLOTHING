import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Check, ShieldCheck, Truck, Sparkles, ChevronRight, Layers, Heart } from 'lucide-react';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, setIsCartOpen, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!quickViewProduct) return null;

  const isSaved = wishlist.includes(quickViewProduct.id);

  const currentSize = quickViewProduct.sizes.includes(selectedSize)
    ? selectedSize
    : quickViewProduct.sizes[0];

  const handleAddAndOpenCart = () => {
    addToCart(quickViewProduct, currentSize, 1);
    setQuickViewProduct(null);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface rounded-2xl hairline shadow-2xl overflow-y-auto no-scrollbar flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Gallery */}
        <div className="md:w-1/2 bg-[#DEDCD6] dark:bg-[#181818] flex flex-col justify-between relative min-h-[380px] md:min-h-[540px]">
          <div className="relative w-full h-full flex-grow overflow-hidden">
            <img
              src={quickViewProduct.images[activeImageIdx] || quickViewProduct.images[0]}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/20 mono-telemetry text-[10px]">
                {quickViewProduct.editionNumber || 'CAPSULE 04'}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {quickViewProduct.images.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 z-10">
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-12 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIdx === idx ? 'border-white scale-105' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Specifications & Quick Purchase */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          
          <div>
            <div className="flex items-center justify-between text-xs text-text-muted mb-1 font-mono">
              <span>{quickViewProduct.drop}</span>
              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className="flex items-center gap-1 text-text-primary text-[10px] font-bold"
              >
                <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                <span>{isSaved ? 'SAVED' : 'SAVE'}</span>
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black uppercase text-text-primary tracking-tight font-sans">
              {quickViewProduct.name}
            </h2>
            <div className="text-2xl font-black font-mono text-text-primary mt-2">
              ${quickViewProduct.price.toLocaleString()}
            </div>

            <p className="text-xs sm:text-sm text-text-secondary mt-3 font-light leading-relaxed">
              {quickViewProduct.description}
            </p>

            {/* Material & Provenance */}
            <div className="mt-4 p-3.5 rounded-xl bg-surface-subtle hairline space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-text-muted">Material:</span>
                <span className="font-semibold text-text-primary">{quickViewProduct.material}</span>
              </div>
              {quickViewProduct.weight && (
                <div className="flex justify-between">
                  <span className="text-text-muted">Weight / Caliber:</span>
                  <span className="font-mono text-text-primary">{quickViewProduct.weight}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-text-muted">Colorway:</span>
                <span className="text-text-primary font-mono">{quickViewProduct.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Origin:</span>
                <span className="text-text-primary">{quickViewProduct.origin}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <span className="mono-telemetry text-[10px] text-text-primary">SELECT ARCHITECTURAL SIZE</span>
                <span className="mono-telemetry text-[9px] text-text-muted">MODEL IS 188CM WEARING M</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickViewProduct.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                      currentSize === sz
                        ? 'bg-btn-primary-bg text-btn-primary-text shadow-md'
                        : 'bg-pill text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Craft Notes */}
            {quickViewProduct.craftDetails && (
              <div className="mt-5 space-y-1.5">
                <span className="mono-telemetry text-[10px] text-text-muted block">KEY ATELIER HIGHLIGHTS</span>
                {quickViewProduct.craftDetails.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary font-light">
                    <span className="w-1 h-1 rounded-full bg-text-primary mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-border-default space-y-3">
            <button
              onClick={handleAddAndOpenCart}
              className="w-full py-4 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-[0.98] shadow-xl flex items-center justify-center gap-2"
            >
              <span>Acquire into Private Bag</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-text-muted mono-telemetry">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-text-primary" />
                Worldwide Priority Express
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-text-primary" />
                Lifetime Care
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
