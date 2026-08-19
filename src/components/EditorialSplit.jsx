import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Sparkles, Eye, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export const EditorialSplit = () => {
  const [activeAngle, setActiveAngle] = useState(0);
  const { setQuickViewProduct, setIsConciergeOpen } = useCart();
  const heroProduct = products[0]; // The Monolith Emerald Overcoat

  const angles = [
    {
      label: 'Runway Drape',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      badge: 'Drop-Shoulder Pitch: 48.5cm'
    },
    {
      label: 'Botanical Weave',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
      badge: '660 GSM Pine-Infused Cashmere'
    }
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-editorial mx-auto">
      
      {/* Section Sub-Eyebrow */}
      <div className="flex items-center justify-between pb-4 mb-12 hairline-b">
        <div className="mono-telemetry text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>ARCHITECTURAL MANIFESTO // 01</span>
        </div>
        <div className="mono-telemetry text-text-muted">
          BOTANICAL TECTONICS & MONOLITHIC EDGES
        </div>
      </div>

      {/* 2-Column Asymmetrical Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Manifesto & Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pill text-text-primary mono-telemetry text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            ATELIER PHILOSOPHY // 01
          </div>

          <h2 className="section-heading text-text-primary">
            Sculpted <span className="serif-italic font-normal text-emerald-600 dark:text-emerald-400">silhouettes</span> engineered in deep <span className="serif-italic font-normal">forest obsidian.</span>
          </h2>

          <div className="space-y-4 text-text-secondary text-[15.5px] leading-relaxed font-light">
            <p>
              We reject the ephemeral noise of fast luxury in favor of pure architectural weight, tectonic permanence, and botanical dye restraint. Every garment is treated as a habitable spatial envelope.
            </p>
            <p>
              Hand-finished in our Milanese atelier utilizing 660 GSM double-faced cashmere and Como raw silk-velvets, each piece embodies structural authority through floating internal horsehair canvas and laser-guided micro-darting.
            </p>
          </div>

          {/* Telemetry Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4 pb-2">
            <div className="p-4 rounded-xl bg-surface hairline border-emerald-500/10">
              <div className="mono-telemetry text-[10px] text-emerald-600 dark:text-emerald-400">CONSTRUCTION</div>
              <div className="text-sm font-bold text-text-primary mt-1">Full Floating Canvas</div>
              <div className="text-xs text-text-muted mt-0.5">Zero synthetic fusion glue</div>
            </div>
            <div className="p-4 rounded-xl bg-surface hairline border-emerald-500/10">
              <div className="mono-telemetry text-[10px] text-emerald-600 dark:text-emerald-400">ORIGIN & BOTANY</div>
              <div className="text-sm font-bold text-text-primary mt-1">Biella Pine Extracts</div>
              <div className="text-xs text-text-muted mt-0.5">Family mills since 1924</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setIsConciergeOpen(true)}
              className="px-6 py-3 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all active:scale-95 shadow-md flex items-center gap-2"
            >
              <span>Book Private Salon Fitting</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setQuickViewProduct(heroProduct)}
              className="px-6 py-3 rounded-full bg-surface hover:bg-pill text-text-primary hairline font-bold text-xs uppercase tracking-wider transition-all active:scale-95 flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-emerald-500" />
              <span>Inspect Lookbook Piece</span>
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Visual Frame with Bottom Spec Badge */}
        <div className="lg:col-span-6">
          <div className="relative rounded-[24px] overflow-hidden bg-[#050E09] hairline shadow-2xl group border-emerald-500/20">
            
            <div className="relative h-[500px] sm:h-[580px] w-full overflow-hidden">
              <img
                src={angles[activeAngle].image}
                alt="Editorial Silhouette"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 brightness-95 contrast-110"
              />
              
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E09] via-transparent to-transparent pointer-events-none" />

              {/* Top Angle Switcher */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 bg-[#081710]/80 backdrop-blur-md p-1 rounded-full border border-emerald-500/20">
                  {angles.map((ang, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveAngle(idx)}
                      className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all ${
                        activeAngle === idx
                          ? 'bg-white text-[#050E09] font-bold'
                          : 'text-emerald-300/80 hover:text-white'
                      }`}
                    >
                      {ang.label}
                    </button>
                  ))}
                </div>

                <div className="bg-[#081710]/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/20 text-emerald-200 mono-telemetry text-[10px]">
                  MODEL: 188CM / SIZE M
                </div>
              </div>

              {/* Bottom Architectural Spec Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#081710]/85 backdrop-blur-md border border-emerald-500/25 rounded-xl p-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="mono-telemetry text-[11px] tracking-wider text-emerald-200">
                    {angles[activeAngle].badge}
                  </span>
                </div>
                <span className="mono-telemetry text-[9px] text-emerald-400">
                  MILAN BESPOKE
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
