import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Heart, ShoppingBag, Check, ShieldCheck, Truck, Sparkles, RefreshCw, PhoneCall, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export const ProductDetailPage = ({ product, onBack, onSelectProduct }) => {
  const { addToCart, setIsCartOpen, setIsCheckoutOpen, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedSize(product.sizes[0] || 'M');
    setActiveImageIdx(0);
  }, [product]);

  const isSaved = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    setIsCheckoutOpen(true);
  };

  // Related products from same or different categories
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.featured))
    .slice(0, 4);

  return (
    <div className="w-full min-h-screen bg-page text-text-primary px-4 sm:px-8 py-8 animate-fade-in">
      <div className="max-w-editorial mx-auto space-y-12">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex items-center justify-between pb-4 border-b border-border-default">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Collection</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="cursor-pointer hover:underline" onClick={onBack}>Shop</span>
            <span>/</span>
            <span className="capitalize">{product.categoryLabel || product.category}</span>
            <span>/</span>
            <span className="text-text-primary font-bold">{product.name}</span>
          </div>
        </div>

        {/* Main Product Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Multi-Angle High-Resolution Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative w-full h-[480px] sm:h-[620px] rounded-3xl overflow-hidden bg-[#ECEAE5] dark:bg-[#141414] border border-border-default shadow-md group">
              <img
                src={product.images[activeImageIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Top Left Serial Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-mono text-[10px] tracking-widest">
                  {product.editionNumber}
                </span>
              </div>

              {/* Top Right Wishlist Toggle */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
                  isSaved
                    ? 'bg-black text-white border-black'
                    : 'bg-white/80 dark:bg-black/60 text-text-primary border-white/60 hover:scale-110 shadow-sm'
                }`}
                title="Save to Wishlist"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-24 h-28 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-[#ECEAE5] dark:bg-[#141414] ${
                      activeImageIdx === idx
                        ? 'border-text-primary scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Right Column: Product Detail & Purchase Suite */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header & Title */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>{product.drop}</span>
                <span className="uppercase">{product.origin}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-primary font-sans leading-tight">
                {product.name}
              </h1>

              <div className="text-3xl font-black font-mono text-text-primary pt-1">
                ${product.price.toLocaleString()}
              </div>

              <p className="text-sm text-text-secondary leading-relaxed font-light pt-2">
                {product.description}
              </p>
            </div>

            {/* Material & Specification Pills */}
            <div className="p-5 rounded-2xl bg-surface-subtle border border-border-default space-y-2.5 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-text-muted">Fiber / Material:</span>
                <span className="text-text-primary font-bold">{product.material}</span>
              </div>
              {product.weight && (
                <div className="flex justify-between">
                  <span className="text-text-muted">Textile Weight:</span>
                  <span className="text-text-primary">{product.weight}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-text-muted">Colorway:</span>
                <span className="text-text-primary font-bold">{product.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Atelier Studio:</span>
                <span className="text-text-primary">{product.origin}</span>
              </div>
            </div>

            {/* Size Selector Suite */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-text-primary uppercase tracking-wider">Select Size</span>
                <span className="text-text-muted text-[11px]">Model is 178cm wearing S</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-3 rounded-xl text-xs font-mono font-bold transition-all ${
                      selectedSize === sz
                        ? 'bg-btn-primary-bg text-btn-primary-text shadow-md ring-2 ring-text-primary'
                        : 'bg-surface hover:bg-pill border border-border-default text-text-secondary'
                    }`}
                  >
                    {sz.replace('One Size (Adaptable)', 'OS').replace('One Size (45L Volume)', '45L')}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold text-text-primary uppercase">Quantity:</span>
              <div className="flex items-center bg-surface border border-border-default rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-primary hover:bg-pill font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center text-xs font-mono font-bold text-text-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-primary hover:bg-pill font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons: Add to Cart & Proceed to Checkout */}
            <div className="space-y-3 pt-2">
              
              {/* Primary Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Added to Archive Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag — ${(product.price * quantity).toLocaleString()}</span>
                  </>
                )}
              </button>

              {/* Direct Proceed to Checkout (Quotation Ready) */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 rounded-full border border-border-default bg-surface hover:bg-pill text-text-primary font-bold text-xs uppercase tracking-widest transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Proceed to Checkout & Quotation</span>
              </button>

            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border-default text-[11px] font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-text-primary shrink-0" />
                <span>Free Insured Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-text-primary shrink-0" />
                <span>100% Certified Italian Craft</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-text-primary shrink-0" />
                <span>30-Day Complimentary Return</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-text-primary shrink-0" />
                <span>Private VIP Concierge</span>
              </div>
            </div>

            {/* Key Craftsmanship Bullet Points */}
            {product.craftDetails && (
              <div className="space-y-2 pt-4 border-t border-border-default">
                <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider block mb-2">
                  Atelier Craftsmanship Highlights
                </span>
                {product.craftDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-primary mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

        {/* Related Pieces Recommendation Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-border-default space-y-8">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-text-primary font-sans">
                You May Also Consider
              </h3>
              <button
                onClick={onBack}
                className="text-xs font-mono uppercase tracking-widest text-text-primary underline underline-offset-4 hover:text-text-muted"
              >
                View All Pieces
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="editorial-card group rounded-2xl bg-surface border border-border-default overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="h-64 w-full overflow-hidden bg-[#ECEAE5] dark:bg-[#141414]">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="text-xs font-bold uppercase truncate text-text-primary font-sans">
                      {item.name}
                    </h4>
                    <div className="text-xs font-black font-mono text-text-primary">
                      ${item.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
