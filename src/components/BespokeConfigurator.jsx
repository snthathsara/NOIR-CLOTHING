import React, { useState, useEffect } from 'react';
import { bespokeConfiguratorData } from '../data/atelierData';
import { useCart } from '../context/CartContext';
import { Sparkles, Check, ShoppingBag, ArrowRight, ShieldCheck, Clock, Scissors } from 'lucide-react';

export const BespokeConfigurator = () => {
  const { addToCart, setIsCartOpen } = useCart();

  const [selectedSilhouette, setSelectedSilhouette] = useState(bespokeConfiguratorData.silhouettes[0]);
  const [selectedFabric, setSelectedFabric] = useState(bespokeConfiguratorData.fabrics[0]);
  const [selectedHardware, setSelectedHardware] = useState(bespokeConfiguratorData.hardware[0]);
  const [selectedAdjustment, setSelectedAdjustment] = useState(bespokeConfiguratorData.sizingAdjustments[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [monogram, setMonogram] = useState('EN');

  // Dynamic Animated Price Count-up
  const totalPrice = selectedSilhouette.basePrice + 
    selectedFabric.priceModifier + 
    selectedHardware.priceModifier + 
    selectedAdjustment.price;

  const [displayPrice, setDisplayPrice] = useState(totalPrice);

  useEffect(() => {
    let start = displayPrice;
    const end = totalPrice;
    if (start === end) return;
    
    const duration = 400;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeProgress);
      setDisplayPrice(current);
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [totalPrice]);

  const handleCommissionPiece = () => {
    const bespokeProduct = {
      id: `bespoke-${Date.now()}`,
      name: `Bespoke ${selectedSilhouette.name}`,
      subtitle: `${selectedFabric.name} • ${selectedHardware.name} • Monogram [${monogram || 'NONE'}]`,
      price: totalPrice,
      size: selectedSize,
      color: selectedFabric.name,
      image: selectedSilhouette.image,
      drop: 'Bespoke Private Order',
      material: selectedFabric.name,
      sku: `BESPOKE-NOIR-${monogram || 'XX'}`
    };

    addToCart(bespokeProduct, selectedSize, 1);
    setIsCartOpen(true);
  };

  return (
    <section id="configurator" className="py-20 sm:py-28 px-4 sm:px-8 max-w-editorial mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b border-border-default">
        <div>
          <div className="mono-telemetry text-text-muted mb-2">
            ATELIER CONFIGURATOR • BESPOKE MATRIX
          </div>
          <h2 className="section-heading text-text-primary">
            Commission your <span className="serif-italic font-normal">bespoke</span> piece.
          </h2>
        </div>
        <p className="text-sm text-text-secondary max-w-md font-light">
          Configure individual silhouette specifications, rare fabric weaves, aerospace hardware, and personalized monogramming.
        </p>
      </div>

      {/* Split Interactive Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        
        {/* Left Column: Interactive Selectors */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Step 1: Silhouette */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="mono-telemetry text-xs text-text-primary">01. SELECT SILHOUETTE ARCHITECTURE</span>
              <span className="mono-telemetry text-[10px] text-text-muted">{selectedSilhouette.category}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bespokeConfiguratorData.silhouettes.map(sil => (
                <button
                  key={sil.id}
                  onClick={() => setSelectedSilhouette(sil)}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedSilhouette.id === sil.id
                      ? 'bg-surface hairline ring-1 ring-text-primary shadow-md'
                      : 'bg-surface-subtle hairline hover:bg-surface'
                  }`}
                >
                  <div className="text-xs font-bold text-text-primary uppercase font-sans">{sil.name}</div>
                  <div className="mono-telemetry text-[10px] text-text-muted mt-1">LKR {sil.basePrice.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Fabric & Fiber Composition */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="mono-telemetry text-xs text-text-primary">02. TEXTILE GRADE & WEAVE</span>
              <span className="mono-telemetry text-[10px] text-text-muted">{selectedFabric.origin}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bespokeConfiguratorData.fabrics.map(fab => (
                <button
                  key={fab.id}
                  onClick={() => setSelectedFabric(fab)}
                  className={`p-4 rounded-xl text-left flex items-start justify-between gap-3 transition-all ${
                    selectedFabric.id === fab.id
                      ? 'bg-surface hairline ring-1 ring-text-primary shadow-md'
                      : 'bg-surface-subtle hairline hover:bg-surface'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-text-primary">{fab.name}</div>
                    <div className="mono-telemetry text-[10px] text-text-muted mt-0.5">{fab.sub}</div>
                  </div>
                  <span className="mono-telemetry text-[10px] font-bold text-text-primary shrink-0">
                    {fab.priceModifier >= 0 ? `+LKR ${fab.priceModifier.toLocaleString()}` : `-LKR ${Math.abs(fab.priceModifier).toLocaleString()}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Hardware & Fasteners */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="mono-telemetry text-xs text-text-primary">03. HARDWARE & FASTENER SUITE</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {bespokeConfiguratorData.hardware.map(hw => (
                <button
                  key={hw.id}
                  onClick={() => setSelectedHardware(hw)}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedHardware.id === hw.id
                      ? 'bg-surface hairline ring-1 ring-text-primary shadow-md'
                      : 'bg-surface-subtle hairline hover:bg-surface'
                  }`}
                >
                  <div className="text-xs font-bold text-text-primary">{hw.name}</div>
                  <div className="mono-telemetry text-[10px] text-text-muted mt-1">
                    {hw.priceModifier > 0 ? `+LKR ${hw.priceModifier.toLocaleString()}` : 'Standard'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Sizing & Monogram Telemetry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Size Selector */}
            <div className="p-4 rounded-xl bg-surface-subtle hairline">
              <span className="mono-telemetry text-[10px] text-text-primary block mb-2">SIZE SPECIFICATION</span>
              <div className="flex items-center gap-2">
                {['S', 'M', 'L', 'XL'].map(sz => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold font-mono transition-all ${
                      selectedSize === sz
                        ? 'bg-btn-primary-bg text-btn-primary-text shadow-sm'
                        : 'bg-pill text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Monogram */}
            <div className="p-4 rounded-xl bg-surface-subtle hairline">
              <div className="flex items-center justify-between mb-2">
                <span className="mono-telemetry text-[10px] text-text-primary">EMBROIDERED INITIALS</span>
                <span className="mono-telemetry text-[9px] text-text-muted">SILK TONE-ON-TONE</span>
              </div>
              <input
                type="text"
                maxLength={3}
                value={monogram}
                onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                placeholder="EN"
                className="w-full bg-pill border border-border-default rounded-lg px-3 py-1.5 text-xs font-mono font-bold tracking-widest uppercase text-text-primary focus:outline-none focus:ring-1 focus:ring-text-primary text-center"
              />
            </div>

          </div>

          {/* Step 5: Sizing Modifiers */}
          <div>
            <span className="mono-telemetry text-[10px] text-text-primary block mb-2">ARCHITECTURAL FIT MODIFIERS</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {bespokeConfiguratorData.sizingAdjustments.map(adj => (
                <button
                  key={adj.id}
                  onClick={() => setSelectedAdjustment(adj)}
                  className={`p-3 rounded-lg text-left text-xs font-medium flex items-center justify-between transition-all ${
                    selectedAdjustment.id === adj.id
                      ? 'bg-surface hairline ring-1 ring-text-primary text-text-primary'
                      : 'bg-surface-subtle hairline text-text-secondary hover:bg-surface'
                  }`}
                >
                  <span>{adj.label}</span>
                  <span className="mono-telemetry text-[10px] font-bold">
                    {adj.price > 0 ? `+LKR ${adj.price.toLocaleString()}` : 'Complimentary'}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Live Summary Card & Dynamic Price Count-up */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 rounded-2xl bg-surface hairline p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Visual Garment Mockup Frame */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-neutral-900 hairline">
              <img
                src={selectedSilhouette.image}
                alt={selectedSilhouette.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Monogram Badge */}
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white font-mono text-xs font-bold tracking-widest">
                MONOGRAM: {monogram || '—'}
              </div>

              {/* Bottom Lead Time Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-1.5 mono-telemetry text-[10px] text-neutral-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>LEAD TIME: {selectedSilhouette.leadTime}</span>
                </div>
                <span className="mono-telemetry text-[9px] text-neutral-400">COLOMBO ATELIER</span>
              </div>
            </div>

            {/* Spec Line Items */}
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="mono-telemetry text-[10px] text-text-muted pb-1 border-b border-border-default flex items-center justify-between">
                <span>COMMISSION BREAKDOWN</span>
                <span>ATELIER COLOMBO</span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Base Silhouette: {selectedSilhouette.name}</span>
                <span className="font-mono text-text-primary">LKR {selectedSilhouette.basePrice.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Textile: {selectedFabric.name}</span>
                <span className="font-mono text-text-primary">
                  {selectedFabric.priceModifier >= 0 ? `+LKR ${selectedFabric.priceModifier.toLocaleString()}` : `-LKR ${Math.abs(selectedFabric.priceModifier).toLocaleString()}`}
                </span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Hardware: {selectedHardware.name}</span>
                <span className="font-mono text-text-primary">
                  {selectedHardware.priceModifier > 0 ? `+LKR ${selectedHardware.priceModifier.toLocaleString()}` : 'LKR 0'}
                </span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Fit Modifier: {selectedAdjustment.label}</span>
                <span className="font-mono text-text-primary">
                  {selectedAdjustment.price > 0 ? `+LKR ${selectedAdjustment.price.toLocaleString()}` : 'LKR 0'}
                </span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Silk Monogram Embroidery [{monogram || 'NONE'}]</span>
                <span className="font-mono font-bold text-text-primary">Complimentary</span>
              </div>
            </div>

            {/* Live Total Price */}
            <div className="pt-4 border-t border-border-default flex items-baseline justify-between">
              <div>
                <span className="mono-telemetry text-[10px] text-text-muted block">COMMISSION TOTAL</span>
                <span className="text-xs text-text-secondary font-light">Free Islandwide Delivery Included</span>
              </div>
              <div className="text-3xl font-black font-mono text-text-primary">
                LKR {displayPrice.toLocaleString()}
              </div>
            </div>

            {/* Commission CTA Button */}
            <button
              onClick={handleCommissionPiece}
              className="w-full py-4 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
            >
              <Scissors className="w-4 h-4" />
              <span>Commission Bespoke Piece</span>
            </button>

          </div>
        </div>

      </div>

    </section>
  );
};
