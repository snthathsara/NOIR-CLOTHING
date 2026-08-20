import React from 'react';
import { Sparkles } from 'lucide-react';

export const SampleWatermarkBanner = () => {
  return (
    <div className="w-full bg-[#0A0A0A] dark:bg-[#111111] text-[#E5E5E5] py-1.5 px-4 text-center border-b border-white/10 select-none z-30 relative font-mono text-[10px] sm:text-[11px] tracking-widest uppercase flex items-center justify-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
      <span className="font-semibold text-white/90">SAMPLE PREVIEW</span>
      <span className="text-white/30">•</span>
      <span className="text-white/70">UNDER CONSTRUCTION</span>
      <span className="text-white/30">•</span>
      <span className="text-emerald-400 font-bold">POWERED BY AXION SOLUTIONS</span>
    </div>
  );
};
