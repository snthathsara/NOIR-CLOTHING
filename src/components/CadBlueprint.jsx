import React, { useState } from 'react';
import { cadBlueprintSpecs } from '../data/atelierData';
import { CheckCircle2, ShieldCheck, Crosshair, ZoomIn, Sliders, Maximize2 } from 'lucide-react';

export const CadBlueprint = () => {
  const [unit, setUnit] = useState('metric');
  const [activeNode, setActiveNode] = useState('shoulder');
  const nodes = cadBlueprintSpecs.nodes[unit];
  const currentNode = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <section id="cad-blueprint" className="py-20 sm:py-28 px-4 sm:px-8 max-w-editorial mx-auto">
      
      {/* Section Sub-Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-border-default">
        <div>
          <div className="mono-telemetry text-text-muted mb-2">
            METROLOGY & ARCHITECTURAL CAD DRAFTING
          </div>
          <h2 className="section-heading text-text-primary">
            Laser <span className="serif-italic font-normal">precision</span> blueprint.
          </h2>
        </div>

        {/* Unit Toggle Pill */}
        <div className="flex items-center gap-2 bg-surface p-1 rounded-full border border-border-default">
          <span className="mono-telemetry text-[10px] text-text-muted px-3">UNIT METRIC:</span>
          <button
            onClick={() => setUnit('metric')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
              unit === 'metric'
                ? 'bg-btn-primary-bg text-btn-primary-text'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            METRIC [CM]
          </button>
          <button
            onClick={() => setUnit('imperial')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
              unit === 'imperial'
                ? 'bg-btn-primary-bg text-btn-primary-text'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            IMPERIAL [IN]
          </button>
        </div>
      </div>

      {/* Main CAD Blueprint Box */}
      <div className="rounded-2xl bg-[#0F0F0F] text-white p-6 sm:p-10 border border-neutral-800 shadow-2xl relative overflow-hidden">
        
        {/* Subtle CAD Background Grid Lines */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '30px 30px, 60px 60px, 60px 60px'
          }}
        />

        {/* Top Blueprint Title Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-800">
          <div>
            <div className="mono-telemetry text-[10px] text-neutral-400">
              {cadBlueprintSpecs.blueprintCode} • {cadBlueprintSpecs.releaseDate}
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1 uppercase font-mono">
              {cadBlueprintSpecs.garmentName}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 mono-telemetry text-[10px] text-neutral-300">
              {cadBlueprintSpecs.scale}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white mono-telemetry text-[10px] font-bold">
              CAD LOCKED
            </span>
          </div>
        </div>

        {/* 2-Column Blueprint Interactive Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Vector CAD Garment Draft with Interactive Dimension Pins */}
          <div className="lg:col-span-7 relative bg-black/60 rounded-xl border border-neutral-800 p-6 flex flex-col items-center justify-center min-h-[460px]">
            
            {/* Architectural Vector Garment Outline */}
            <svg 
              viewBox="0 0 400 500" 
              className="w-full max-w-[340px] h-auto stroke-neutral-400 stroke-[1.2] fill-none drop-shadow-md"
            >
              {/* Collar & Lapels */}
              <path d="M 160 50 L 200 80 L 240 50 L 215 140 L 200 150 L 185 140 Z" strokeDasharray="3 3" className="stroke-neutral-600" />
              <path d="M 185 140 L 150 180 L 200 240 L 250 180 L 215 140" className="stroke-white" />
              
              {/* Shoulders & Arms */}
              <path d="M 160 50 L 80 100 L 60 280 L 100 290 L 115 180" className="stroke-white" />
              <path d="M 240 50 L 320 100 L 340 280 L 300 290 L 285 180" className="stroke-white" />

              {/* Main Body Torso & Monolith Drop Hem */}
              <path d="M 115 180 L 125 320 L 110 470 L 290 470 L 275 320 L 285 180" className="stroke-white stroke-[1.8]" />

              {/* Center Placket Line */}
              <line x1="200" y1="240" x2="200" y2="470" className="stroke-neutral-600 stroke-[1]" strokeDasharray="4 4" />

              {/* Box Pleat & Dart Indicators */}
              <line x1="150" y1="280" x2="150" y2="380" className="stroke-neutral-700 stroke-[1]" />
              <line x1="250" y1="280" x2="250" y2="380" className="stroke-neutral-700 stroke-[1]" />

              {/* Tension Dart Crosshairs */}
              <circle cx="200" cy="150" r="3" className="fill-white stroke-none" />
              <circle cx="80" cy="100" r="3" className="fill-white stroke-none" />
              <circle cx="320" cy="100" r="3" className="fill-white stroke-none" />
              <circle cx="200" cy="470" r="3" className="fill-white stroke-none" />

              {/* Laser Measurement Annotation Lines */}
              <line x1="80" y1="35" x2="320" y2="35" className="stroke-neutral-500 stroke-[0.8]" strokeDasharray="2 2" />
              <text x="200" y="28" fill="#E0E0E0" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">48.5 CM SPAN</text>

              <line x1="40" y1="100" x2="40" y2="470" className="stroke-neutral-500 stroke-[0.8]" strokeDasharray="2 2" />
              <text x="28" y="290" fill="#E0E0E0" fontSize="10" fontFamily="JetBrains Mono" transform="rotate(-90 28 290)" textAnchor="middle">128.0 CM FULL DROP</text>
            </svg>

            {/* Interactive Dimension Quick Nodes Bar */}
            <div className="w-full mt-4 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-center gap-2">
              {nodes.map(n => (
                <button
                  key={n.id}
                  onClick={() => setActiveNode(n.id)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                    activeNode === n.id
                      ? 'bg-white text-black font-bold shadow-md'
                      : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {n.label.split(' ')[0]}: {n.value}
                </button>
              ))}
            </div>

          </div>

          {/* Right: Technical Inspector & Structural Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Node Spec Display */}
            <div className="p-5 rounded-xl bg-white/5 border border-neutral-800 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-neutral-400 mono-telemetry">
                <span>INSPECTED CALIBER</span>
                <span className="text-white">TOLERANCE: {currentNode.tolerance}</span>
              </div>
              <div className="text-2xl font-black font-mono text-white mt-1">
                {currentNode.value}
              </div>
              <div className="text-xs text-neutral-300 mt-1 font-mono uppercase">
                {currentNode.label}
              </div>
            </div>

            {/* 3 Structural Atelier Pillars with Verified Checkmarks */}
            <div className="space-y-3">
              <div className="mono-telemetry text-[11px] text-neutral-400 mb-2">
                THREE STRUCTURAL ATELIER PILLARS
              </div>

              {cadBlueprintSpecs.pillars.map((pillar) => (
                <div 
                  key={pillar.code}
                  className="p-4 rounded-xl bg-white/[0.03] border border-neutral-800 flex items-start gap-3.5 hover:bg-white/[0.06] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="mono-telemetry text-[10px] text-neutral-400">PILLAR {pillar.code}</span>
                      <span className="text-xs font-bold text-white uppercase font-mono">{pillar.title}</span>
                    </div>
                    <div className="mono-telemetry text-[10px] text-neutral-300 mt-0.5">{pillar.spec}</div>
                    <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
