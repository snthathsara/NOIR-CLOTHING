import React, { createContext, useContext, useState, useEffect } from 'react';
import { brands } from '../data/brandsData';

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [activeBrandKey, setActiveBrandKey] = useState(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlBrand = urlParams.get('brand');
      if (urlBrand && brands[urlBrand.toLowerCase()]) {
        return urlBrand.toLowerCase();
      }
      const saved = localStorage.getItem('daizy_kanlook_brand');
      if (saved && brands[saved]) {
        return saved;
      }
      return 'daizy';
    } catch {
      return 'daizy';
    }
  });

  const activeBrand = brands[activeBrandKey] || brands.daizy;

  const switchBrand = (brandKey) => {
    if (!brands[brandKey]) return;
    setActiveBrandKey(brandKey);
    try {
      localStorage.setItem('daizy_kanlook_brand', brandKey);
      const url = new URL(window.location);
      url.searchParams.set('brand', brandKey);
      window.history.replaceState({}, '', url);
      document.title = `${brands[brandKey].name} — ${brands[brandKey].tagline}`;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    document.title = `${activeBrand.name} — ${activeBrand.tagline}`;
  }, [activeBrand]);

  return (
    <BrandContext.Provider value={{ activeBrandKey, activeBrand, switchBrand, brands }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => useContext(BrandContext);
