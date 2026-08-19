import React from 'react';
import { ArrowRight } from 'lucide-react';

export const SeasonEditorialBanner = () => {
  const scrollToCollection = () => {
    const el = document.getElementById('lookbook');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#DFDDD8] dark:bg-[#141414] py-12 sm:py-16 px-4 sm:px-8 border-b border-border-default transition-colors">
      <div className="max-w-editorial mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-[20px] overflow-hidden bg-[#D3D1CB] dark:bg-[#1A1A1A] p-6 sm:p-12 shadow-sm">
        
        {/* Left Column: Bold Typography & Action Button */}
        <div className="lg:col-span-6 space-y-5 text-left">
          <div className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] dark:text-neutral-400 uppercase">
            NEW SEASON — CAPSULE 04
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.05em] uppercase font-sans text-[#0A0A0A] dark:text-white leading-[0.92]">
            NEW<br />
            VIBES
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-light max-w-sm">
            Discover everything new and now. Tailored precision designed for modern monolithic living.
          </p>

          <div className="pt-2">
            <button
              onClick={scrollToCollection}
              className="px-8 py-3.5 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] text-xs font-black tracking-widest uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-lg active:scale-95"
            >
              EXPLORE COLLECTION
            </button>
          </div>
        </div>

        {/* Right Column: Close-up High-Fashion Model Portrait */}
        <div className="lg:col-span-6 h-[320px] sm:h-[420px] lg:h-[460px] rounded-xl overflow-hidden bg-neutral-900 shadow-xl relative">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85"
            alt="DAIZY CLOTHING New Season Editorial Model"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

      </div>
    </section>
  );
};
