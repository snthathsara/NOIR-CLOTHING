import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFeatureBar } from './components/CategoryFeatureBar';
import { SeasonEditorialBanner } from './components/SeasonEditorialBanner';
import { TrustBar } from './components/TrustBar';
import { LookbookGrid } from './components/LookbookGrid';
import { ProductDetailPage } from './components/ProductDetailPage';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ConciergeModal } from './components/ConciergeModal';
import { ToastNotification } from './components/ToastNotification';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export const MainContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectCategory = (cat) => {
    setSelectedProduct(null);
    setActiveCategory(cat);
  };

  const handleNavigateHome = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-page text-text-primary flex flex-col justify-between selection:bg-text-primary selection:text-page relative font-sans">
      
      {/* Subtle Film Grain Paper Texture */}
      <div className="grain-overlay" />

      {/* Editorial Intro Loading Screen */}
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {/* Pinned Glassmorphic Navbar */}
      <Navbar 
        onSelectCategory={handleSelectCategory}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Page Routing & Content Flow */}
      <main className="flex-grow animate-fade-in">
        {selectedProduct ? (
          /* Dedicated Product Description & Purchase Screen */
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        ) : (
          /* Main Clothing Store Lookbook Flow */
          <>
            {/* 1. Aura Store Inspired Split Typographic Hero */}
            <Hero />

            {/* 2. 3-Column Black Category Feature Bar */}
            <CategoryFeatureBar onSelectCategory={handleSelectCategory} />

            {/* 3. "NEW SEASON / NEW VIBES" Editorial Split Banner */}
            <SeasonEditorialBanner />

            {/* 4. 4-Column Service Assurance / Trust Markers */}
            <TrustBar />

            {/* 5. "BEST OF NOIRE" 20-Piece Luxury Clothing Catalog Grid */}
            <LookbookGrid 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          </>
        )}
      </main>

      {/* Minimalist 3-Part Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <QuickViewModal />
      <CartDrawer />
      <CheckoutModal />
      <ConciergeModal />
      <ToastNotification />
      <FloatingWhatsApp />

    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </ThemeProvider>
  );
}
