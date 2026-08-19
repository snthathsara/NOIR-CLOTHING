import React, { useState } from 'react';
import { fabricBentoData } from '../data/atelierData';
import { ShieldCheck, Cpu, Leaf, Sparkles, Layers } from 'lucide-react';

export const FabricBento = () => {
  const [activeCard, setActiveCard] = useState(0);

  const getIcon = (id) => {
    switch (id) {
      case 'origin':
        return <Layers className="w-5 h-5 text-text-primary" />;
      case 'silhouette':
        return <Cpu className="w-5 h-5 text-text-primary" />;
      case 'sourcing':
        return <Leaf className="w-5 h-5 text-text-primary" />;
      default:
        return <Sparkles className="w-5 h-5 text-text-primary" />;
    }
  };

  return (
    <section id="craftsmanship" className="py-20 sm:py-28 px-4 sm:px-8 max-w-editorial mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-border-default">
        <div>
          <div className="mono-telemetry text-text-muted mb-2">
            TECTONIC METROLOGY & FIBER PURITY
          </div>
          <h2 className="section-heading text-text-primary">
            Engineering <span className="serif-italic font-normal">substance</span> into form.
          </h2>
        </div>
        <p className="text-sm text-text-secondary max-w-md font-light">
          Three pillars of Swiss architectural minimalism applied to bespoke Italian tailoring.
        </p>
      </div>

      {/* 3-Card Interactive Telemetry Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {fabricBentoData.map((item, idx) => {
          const isSelected = activeCard === idx;

          return (
            <div
              key={item.id}
              onClick={() => setActiveCard(idx)}
              className={`editorial-card relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                isSelected
                  ? 'bg-surface hairline shadow-xl ring-1 ring-text-primary'
                  : 'bg-surface-subtle hairline hover:bg-surface'
              }`}
            >
              <div>
                {/* Card Top: Number & Category */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-pill flex items-center justify-center font-mono font-bold text-xs text-text-primary">
                      {item.number}
                    </span>
                    <span className="mono-telemetry text-[10px] text-text-muted">
                      {item.category}
                    </span>
                  </div>
                  <div>{getIcon(item.id)}</div>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight font-sans">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted mt-1 font-mono">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-text-secondary mt-4 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="mt-8 pt-6 border-t border-border-subtle space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-pill p-3 rounded-xl">
                      <div className="mono-telemetry text-[9px] text-text-muted">{m.label}</div>
                      <div className="text-base font-black font-mono text-text-primary mt-0.5">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-text-secondary mt-0.5 truncate font-mono">
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Bullet Features */}
                <div className="space-y-2 pt-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-text-secondary font-light">
                      <span className="w-1 h-1 rounded-full bg-text-primary mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
