import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { Search, Heart, ShoppingBag, Sun, Moon, Sparkles, X } from 'lucide-react';

export const Navbar = ({ onSelectCategory, onNavigateHome }) => {
  const { theme, toggleTheme } = useTheme();
  const { itemCount, wishlistCount, setIsCartOpen, setIsConciergeOpen, searchQuery, setSearchQuery } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'main', category: 'all', targetId: 'hero' },
    { label: 'collection', category: 'all', targetId: 'lookbook' },
    { label: 'dresses', category: 'silhouettes', targetId: 'lookbook' },
    { label: 'outerwear', category: 'outerwear', targetId: 'lookbook' },
    { label: 'tailoring', category: 'tailoring', targetId: 'lookbook' },
    { label: 'knitwear', category: 'knitwear', targetId: 'lookbook' },
  ];

  const handleNavClick = (link) => {
    if (onNavigateHome) onNavigateHome();
    if (onSelectCategory && link.category) {
      onSelectCategory(link.category);
    }
    setTimeout(() => {
      const el = document.getElementById(link.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 px-4 sm:px-8">
      <div className={`max-w-editorial mx-auto transition-all duration-300 ${isScrolled ? 'pt-2 pb-1' : 'pt-4 pb-2'}`}>
        
        {/* Pinned Glassmorphic Navigation Bar: Guaranteed Pure White in Light Mode */}
        <div 
          style={{ backgroundColor: 'var(--bg-surface)' }}
          className={`flex items-center justify-between px-6 sm:px-8 rounded-full border border-border-default transition-all duration-300 ${
            isScrolled 
              ? 'py-2.5 backdrop-blur-2xl shadow-lg scale-[0.99]'
              : 'py-3.5 backdrop-blur-md shadow-sm'
          }`}
        >
          
          {/* Left: Brand Monogram + Star Cluster */}
          <a
            href="#"
            onClick={(e) => { 
              e.preventDefault(); 
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex flex-col text-left leading-none font-sans">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-extrabold tracking-tight text-text-primary group-hover:text-text-muted transition-colors">
                  Daizy
                </span>
                <span className="text-[10px] text-text-primary">✦</span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest lowercase text-text-muted group-hover:text-text-primary transition-colors pt-0.5">
                clothing
              </span>
            </div>
          </a>

          {/* Center: Minimal Lowercase Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest lowercase">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-text-secondary hover:text-text-primary transition-colors relative py-1 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-text-primary transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right: Search, Saved & Cart Tools (Clean, No Account ID) */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono">
            
            {/* Live Search */}
            {isSearchOpen ? (
              <div className="flex items-center bg-pill border border-border-default rounded-full px-3 py-1 animate-scale-in">
                <Search className="w-3 h-3 text-text-muted mr-1.5" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="search pieces..."
                  className="bg-transparent text-xs text-text-primary placeholder-text-muted focus:outline-none w-24 sm:w-32 font-mono"
                />
                <button
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="text-text-muted hover:text-text-primary ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  setIsSearchOpen(true);
                  setTimeout(() => {
                    const el = document.getElementById('lookbook');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-text-primary hover:text-text-muted transition-colors p-1"
                title="Search collection"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Saved Wishlist */}
            <button
              onClick={() => {
                if (onNavigateHome) onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('lookbook');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="text-text-primary hover:text-text-muted transition-colors relative p-1"
              title="Saved items"
            >
              <Heart className="w-3.5 h-3.5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-text-primary text-page text-[8px] font-mono font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Pill */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-btn-primary-bg text-btn-primary-text text-[11px] font-mono font-bold flex items-center gap-1.5 hover:opacity-90 transition-all active:scale-95 shadow-sm"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>cart ({itemCount})</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-7 h-7 rounded-full bg-pill hover:bg-pill-hover flex items-center justify-center text-text-primary transition-all active:scale-90"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

          </div>

        </div>

      </div>
    </header>
  );
};
