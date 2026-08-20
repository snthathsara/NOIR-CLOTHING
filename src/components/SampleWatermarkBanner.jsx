import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Sparkles, Layers } from 'lucide-react';

export const SampleWatermarkBanner = () => {
  const { activeBrandKey, switchBrand } = useBrand();

  return (
    <div className="w-full bg-[#0A0A0A] dark:bg-[#111111] text-[#E5E5E5] py-2 px-4 border-b border-white/10 select-none z-40 relative font-mono text-[10px] sm:text-[11px] tracking-wider">
      <div className="max-w-editorial mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Watermark Notice */}
        <div className="flex items-center gap-2 uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block shrink-0" />
          <span className="font-bold text-white tracking-widest">SAMPLE PREVIEW</span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-white/70 hidden sm:inline">UNDER CONSTRUCTION</span>
          <span className="text-white/30">•</span>
          <span className="text-emerald-400 font-extrabold tracking-widest">POWERED BY AXION SOLUTIONS</span>
        </div>

        {/* Right: Client Brand Pitch Switcher */}
        <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-full border border-white/15">
          <span className="text-[9px] text-white/50 px-2 font-mono uppercase tracking-widest hidden md:inline">
            PREVIEW VARIANT:
          </span>
          <button
            onClick={() => switchBrand('daizy')}
            className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 ${
              activeBrandKey === 'daizy'
                ? 'bg-white text-black shadow-md'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            ✦ Daizy Clothing
          </button>
          <button
            onClick={() => switchBrand('kanlook')}
            className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 ${
              activeBrandKey === 'kanlook'
                ? 'bg-white text-black shadow-md'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            ★ KanLook Fashion
          </button>
        </div>

      </div>
    </div>
  );
};
