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
    <section id="hero" className="w-full px-4 sm:px-8 py-2">
      <div className="max-w-editorial mx-auto">
        
        {/* Outer Rounded Frame: Pure White #FFFFFF in Light Mode, Deep Obsidian in Dark Mode */}
        <div 
          style={{ backgroundColor: 'var(--bg-surface)' }}
          className="relative w-full rounded-3xl border border-border-default bg-surface transition-colors duration-500 overflow-hidden min-h-[640px] sm:min-h-[720px] lg:min-h-[800px] flex items-center justify-center p-6 sm:p-12 shadow-sm animate-fade-in"
        >
          
          {/* Split Background Words: NOIR on Left, CLOTHING on Right (Strictly Contained with Zero Cut-off) */}
          <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20 pointer-events-none select-none z-0">
            {/* Left Word: NOIR */}
            <span 
              className="text-[#0A0A0A] dark:text-white font-black tracking-[-0.04em] uppercase font-sans leading-none opacity-95 transition-transform duration-700"
              style={{ fontSize: 'clamp(44px, 9vw, 130px)' }}
            >
              NOIR
            </span>

            {/* Right Word: CLOTHING */}
            <span 
              className="text-[#0A0A0A] dark:text-white font-black tracking-[-0.04em] uppercase font-sans leading-none opacity-95 transition-transform duration-700 text-right"
              style={{ fontSize: 'clamp(32px, 7vw, 105px)' }}
            >
              CLOTHING
            </span>
          </div>

          {/* Centered Masked Streetwear Cutout Model (Positioned in Center Gap with Zero Overlap) */}
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-[420px] h-[480px] sm:h-[600px] lg:h-[700px] flex items-end justify-center pointer-events-none animate-fade-in-up">
            {/* Soft Ground Floor Shadow */}
            <div className="absolute bottom-2 w-48 sm:w-64 md:w-72 h-6 bg-black/20 dark:bg-black/80 blur-xl rounded-full transform scale-y-50 pointer-events-none" />

            <img
              src="/cutouts/streetwear-model.png"
              alt="NOIR CLOTHING Streetwear Tracksuit Cutout Silhouette"
              className="h-full w-auto object-contain object-bottom drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02] pointer-events-auto"
              style={{
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.12))'
              }}
            />
          </div>

          {/* Bottom Left: Badge & Manifesto */}
          <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 z-20 max-w-xs sm:max-w-sm md:max-w-md text-left space-y-3 animate-fade-in">
            {/* Japanese Minimalist Icon Badge */}
            <div className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-text-primary text-text-primary text-xs font-bold shadow-sm">
              <span>ファ</span>
            </div>

            {/* Bold Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary leading-tight font-sans">
              Clothes without excess. Only style.
            </h2>

            {/* Editorial Subtext */}
            <p className="text-xs sm:text-sm text-text-secondary font-mono leading-relaxed max-w-xs sm:max-w-sm">
              Modern silhouettes, natural fabrics, and honest design. For those who choose simplicity and quality.
            </p>
          </div>

          {/* Bottom Right: Floating Garment Card & New Collection CTA */}
          <div className="absolute bottom-8 right-6 sm:bottom-12 sm:right-12 z-20 flex flex-col items-end gap-3 animate-fade-in">
            
            {/* Floating Product Preview Card */}
            <div 
              onClick={scrollToCollection}
              className="w-36 sm:w-44 p-3.5 rounded-2xl border border-border-default bg-surface/90 dark:bg-surface/60 backdrop-blur-md shadow-lg cursor-pointer group hover:scale-105 transition-all duration-300 flex flex-col items-center text-center animate-float"
            >
              <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden bg-transparent mb-2 flex items-center justify-center p-1">
                <img
                  src="/cutouts/puffer-preview.png"
                  alt="New Collection Preview"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                />
              </div>
              <span className="text-xs font-mono font-bold text-text-primary tracking-widest">
                2026
              </span>
            </div>

            {/* Rounded Pill CTA */}
            <button
              onClick={scrollToCollection}
              className="px-5 py-2 rounded-full border border-border-default bg-surface/90 dark:bg-surface/70 backdrop-blur-md hover:bg-btn-primary-bg hover:text-btn-primary-text text-text-primary text-xs font-mono lowercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
            >
              <span>new collection</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
