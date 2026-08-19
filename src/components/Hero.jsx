import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero = () => {
  const scrollToCollection = () => {
    const el = document.getElementById('lookbook');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="w-full px-3 sm:px-8 py-2">
      <div className="max-w-editorial mx-auto">
        
        {/* Outer Rounded Frame: Pure White #FFFFFF in Light Mode, Deep Obsidian in Dark Mode */}
        <div 
          style={{ backgroundColor: 'var(--bg-surface)' }}
          className="relative w-full rounded-3xl border border-border-default bg-surface transition-colors duration-500 overflow-hidden min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] flex flex-col justify-between p-4 sm:p-10 lg:p-12 shadow-sm animate-fade-in"
        >
          
          {/* Top Section: Split Background Words (DAIZY on Left, CLOTHING on Right) */}
          <div className="absolute inset-x-0 top-[22%] sm:top-[28%] lg:top-[34%] flex items-center justify-between px-3 sm:px-10 md:px-14 lg:px-20 pointer-events-none select-none z-0">
            {/* Left Word: DAIZY */}
            <span 
              className="text-[#0A0A0A] dark:text-white font-black tracking-[-0.04em] uppercase font-sans leading-none opacity-95 transition-transform duration-700"
              style={{ fontSize: 'clamp(32px, 8vw, 130px)' }}
            >
              DAIZY
            </span>

            {/* Right Word: CLOTHING */}
            <span 
              className="text-[#0A0A0A] dark:text-white font-black tracking-[-0.04em] uppercase font-sans leading-none opacity-95 transition-transform duration-700 text-right"
              style={{ fontSize: 'clamp(24px, 6.5vw, 105px)' }}
            >
              CLOTHING
            </span>
          </div>

          {/* Centered Masked Streetwear Cutout Model (Positioned cleanly more UPWARDS with ample bottom spacing) */}
          <div className="relative z-10 w-full max-w-[210px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] h-[380px] sm:h-[480px] md:h-[580px] lg:h-[680px] flex items-end justify-center pointer-events-none animate-fade-in-up mx-auto pt-2 sm:pt-4">
            {/* Soft Ground Floor Shadow */}
            <div className="absolute bottom-2 w-40 sm:w-60 md:w-72 h-5 sm:h-6 bg-black/20 dark:bg-black/80 blur-xl rounded-full transform scale-y-50 pointer-events-none" />

            <img
              src="/cutouts/streetwear-model.png"
              alt="DAIZY CLOTHING Streetwear Tracksuit Cutout Silhouette"
              className="h-full w-auto object-contain object-bottom drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02] pointer-events-auto"
              style={{
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.12))'
              }}
            />
          </div>

          {/* Bottom Row Layout: Manifesto on Left, Preview Card on Right (Zero Collision on Mobile) */}
          <div className="w-full flex flex-row items-end justify-between gap-3 sm:gap-6 z-20 pt-2 sm:pt-4">
            
            {/* Bottom Left: Badge & Manifesto */}
            <div className="max-w-[170px] sm:max-w-xs md:max-w-md text-left space-y-1.5 sm:space-y-3 animate-fade-in">
              {/* Japanese Minimalist Icon Badge */}
              <div className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-text-primary text-text-primary text-[10px] sm:text-xs font-bold shadow-sm">
                <span>ファ</span>
              </div>

              {/* Bold Headline */}
              <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary leading-tight font-sans">
                Clothes without excess. Only style.
              </h2>

              {/* Editorial Subtext (Hidden on ultra-small mobile, visible on tablet/desktop) */}
              <p className="hidden sm:block text-xs sm:text-sm text-text-secondary font-mono leading-relaxed max-w-xs sm:max-w-sm">
                Modern silhouettes, natural fabrics, and honest design. For those who choose simplicity and quality.
              </p>
            </div>

            {/* Bottom Right: Floating Garment Card & New Collection CTA */}
            <div className="flex flex-col items-end gap-2 sm:gap-3 animate-fade-in shrink-0">
              
              {/* Floating Product Preview Card */}
              <div 
                onClick={scrollToCollection}
                className="w-24 sm:w-36 md:w-44 p-2 sm:p-3.5 rounded-2xl border border-border-default bg-surface/90 dark:bg-surface/60 backdrop-blur-md shadow-lg cursor-pointer group hover:scale-105 transition-all duration-300 flex flex-col items-center text-center animate-float"
              >
                <div className="w-full h-16 sm:h-24 md:h-32 rounded-xl overflow-hidden bg-transparent mb-1 sm:mb-2 flex items-center justify-center p-0.5 sm:p-1">
                  <img
                    src="/cutouts/puffer-preview.png"
                    alt="New Collection Preview"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-text-primary tracking-widest">
                  2026
                </span>
              </div>

              {/* Rounded Pill CTA */}
              <button
                onClick={scrollToCollection}
                className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-border-default bg-surface/90 dark:bg-surface/70 backdrop-blur-md hover:bg-btn-primary-bg hover:text-btn-primary-text text-text-primary text-[10px] sm:text-xs font-mono lowercase tracking-wider transition-all shadow-sm flex items-center gap-1 active:scale-95 whitespace-nowrap"
              >
                <span>new collection</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
