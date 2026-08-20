import React, { useState, useMemo, useRef, useEffect } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Eye, Plus, ArrowUpRight, Heart, SlidersHorizontal, Sparkles } from 'lucide-react';

const ScrollRevealProductCard = ({ product, idx, onSelectProduct, selectedSize, onSizeSelect, onQuickAdd, isSaved, onToggleWishlist }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        animationDelay: `${(idx % 4) * 120}ms`
      }}
      className={`editorial-card catalog-reveal-card group relative flex flex-col rounded-2xl bg-surface hairline overflow-hidden shadow-sm hover:shadow-2xl ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {/* Product Photographic Frame with Studio Background */}
      <div 
        onClick={() => onSelectProduct(product)}
        className="relative h-[360px] sm:h-[400px] w-full overflow-hidden bg-[#DEDCD6] dark:bg-[#1A1A1A] cursor-pointer"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top Round Wishlist Heart Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
          className={`absolute top-3.5 right-3.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all z-10 ${
            isSaved
              ? 'bg-black text-white border-black'
              : 'bg-white/80 dark:bg-black/60 text-neutral-800 dark:text-white border-white/60 hover:scale-110 shadow-sm'
          }`}
          title="Save to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Top Left Serial Badge */}
        <div className="absolute top-3.5 left-3.5 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white mono-telemetry text-[9px]">
            {product.editionNumber}
          </span>
        </div>

        {/* Hover Quick View Trigger */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-2xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </div>
        </div>

        {/* Bottom Quick-Add Size Pills HUD */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/85 backdrop-blur-md border border-white/20 rounded-xl p-2 flex items-center justify-between gap-1.5 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                onClick={(e) => onSizeSelect(product.id, sz, e)}
                className={`px-2 py-1 rounded text-[9px] font-bold font-mono transition-colors whitespace-nowrap ${
                  selectedSize === sz
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                }`}
              >
                {sz.replace('One Size (Adaptable)', 'OS').replace('One Size (45L Volume)', '45L').replace('One Size (90 x 90 cm)', '90x90')}
              </button>
            ))}
          </div>

          <button
            onClick={(e) => onQuickAdd(product, e)}
            className="px-3 py-1 rounded bg-white text-black text-[10px] font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-1 shrink-0 active:scale-95"
          >
            <Plus className="w-3 h-3 stroke-[3]" />
            <span>Add</span>
          </button>
        </div>

      </div>

      {/* Product Metadata Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-surface">
        <div>
          <div className="flex items-center justify-between text-[10px] text-text-muted mb-1 font-mono">
            <span>{product.drop}</span>
            <span className="uppercase">{product.material.split(' ')[0]}</span>
          </div>

          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-sm sm:text-base font-bold text-text-primary uppercase tracking-tight cursor-pointer hover:underline transition-all line-clamp-1 font-sans"
          >
            {product.name}
          </h3>

          <p className="text-xs text-text-secondary mt-1 font-light line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        <div className="flex items-baseline justify-between pt-4 mt-3 hairline-t">
          <span className="text-base sm:text-lg font-black font-mono text-text-primary">
            LKR {product.price.toLocaleString()}
          </span>
          
          <button
            onClick={() => onSelectProduct(product)}
            className="flex items-center gap-1 text-[11px] font-semibold text-text-muted hover:text-text-primary transition-colors"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

    </div>
  );
};

export const LookbookGrid = ({ activeCategory, setActiveCategory, onSelectProduct }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart, setQuickViewProduct, wishlist, toggleWishlist, searchQuery, setSearchQuery } = useCart();

  const handleProductClick = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      setQuickViewProduct(product);
    }
  };

  const categories = [
    { id: 'all', label: 'All Pieces', count: products.length },
    { id: 'silhouettes', label: 'Dresses & Gowns', count: products.filter(p => p.category === 'silhouettes').length },
    { id: 'outerwear', label: 'Coats & Outerwear', count: products.filter(p => p.category === 'outerwear').length },
    { id: 'tailoring', label: 'Tailoring & Suiting', count: products.filter(p => p.category === 'tailoring').length },
    { id: 'knitwear', label: 'Knitwear & Tops', count: products.filter(p => p.category === 'knitwear').length },
    { id: 'accessories', label: 'Leather & Accessories', count: products.filter(p => p.category === 'accessories').length },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...products];

    if (activeCategory && activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'edition') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  const handleSizeSelect = (productId, size, e) => {
    e.stopPropagation();
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    const size = selectedSizes[product.id] || product.sizes[0] || 'M';
    addToCart(product, size);
  };

  return (
    <section id="lookbook" className="py-16 sm:py-24 px-4 sm:px-8 max-w-editorial mx-auto">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 hairline-b gap-6">
        <div>
          <div className="mono-telemetry text-text-muted mb-2 flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            <span>WOMEN'S AUTUMN & WINTER 2026 • 20 PIECES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-text-primary font-sans">
            Curated Archive
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-2 max-w-md font-light">
            Architectural women's silhouettes cut from custom-milled Italian cashmere, mulberry silk charmeuse, virgin wool, and buttery Tuscan Nappa leather.
          </p>
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-surface hairline px-3.5 py-2 rounded-full text-xs font-mono">
            <SlidersHorizontal className="w-3.5 h-3.5 text-text-muted" />
            <span className="text-text-muted">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-text-primary font-bold focus:outline-none cursor-pointer"
            >
              <option value="featured" className="bg-surface text-text-primary">Featured Selection</option>
              <option value="price-asc" className="bg-surface text-text-primary">Price: Low to High</option>
              <option value="price-desc" className="bg-surface text-text-primary">Price: High to Low</option>
              <option value="edition" className="bg-surface text-text-primary">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-8 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-btn-primary-bg text-btn-primary-text font-bold shadow-md'
                  : 'bg-pill hover:bg-pill-hover text-text-secondary border border-border-default'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] ${isActive ? 'opacity-75' : 'text-text-muted'}`}>
                ({cat.count})
              </span>
            </button>
          );
        })}
      </div>

      {/* 20-Piece Catalog Grid with Scroll-Reveal Fade-In */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-text-muted mono-telemetry text-sm">NO PIECES MATCH YOUR CURRENT FILTER CRITERIA</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-6 py-2 rounded-full bg-btn-primary-bg text-btn-primary-text text-xs uppercase font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredAndSortedProducts.map((product, idx) => {
            const currentSize = selectedSizes[product.id] || (product.sizes.length === 1 ? product.sizes[0] : 'M');
            const isSaved = wishlist.includes(product.id);

            return (
              <ScrollRevealProductCard
                key={`${product.id}-${activeCategory}`}
                product={product}
                idx={idx}
                onSelectProduct={handleProductClick}
                selectedSize={currentSize}
                onSizeSelect={handleSizeSelect}
                onQuickAdd={handleQuickAdd}
                isSaved={isSaved}
                onToggleWishlist={toggleWishlist}
              />
            );
          })}
        </div>
      )}

    </section>
  );
};
