import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useBrand } from '../context/BrandContext';
import { X, MapPin, Calendar, Clock, Check, Sparkles, User, Mail, Compass } from 'lucide-react';

export const ConciergeModal = () => {
  const { isConciergeOpen, setIsConciergeOpen } = useCart();
  const { activeBrand } = useBrand();
  const [selectedCity, setSelectedCity] = useState(activeBrand.locations[0]);
  const [isBooked, setIsBooked] = useState(false);
  const [name, setName] = useState('Client Guest');
  const [date, setDate] = useState('2026-09-15');

  useEffect(() => {
    if (activeBrand.locations && activeBrand.locations.length > 0) {
      setSelectedCity(activeBrand.locations[0]);
    }
  }, [activeBrand]);

  if (!isConciergeOpen) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleClose = () => {
    setIsConciergeOpen(false);
    setIsBooked(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-surface text-text-primary rounded-[24px] hairline shadow-2xl overflow-hidden p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-pill hover:bg-pill-hover text-text-primary flex items-center justify-center transition-transform active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div className="space-y-6">
            <div>
              <div className="mono-telemetry text-text-muted mb-1">{activeBrand.name} • CLIENT CONCIERGE</div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-text-primary">
                Book Boutique Fitting Consultation
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 font-light">
                Experience tailored fitting, material review, and personalized style curation at our boutiques.
              </p>
            </div>

            {/* City Selection Pills */}
            <div>
              <span className="mono-telemetry text-[10px] text-text-muted block mb-2">SELECT STORE LOCATION</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {activeBrand.locations.map((loc) => (
                  <button
                    key={loc.city}
                    onClick={() => setSelectedCity(loc)}
                    className={`p-3 rounded-xl text-left transition-all ${
                      selectedCity.city === loc.city
                        ? 'bg-surface hairline ring-1 ring-text-primary shadow-sm'
                        : 'bg-surface-subtle hairline hover:bg-surface'
                    }`}
                  >
                    <div className="mono-telemetry text-xs font-bold text-text-primary">{loc.city}</div>
                    <div className="text-[10px] text-text-muted mt-0.5 truncate">{loc.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Atelier Details Card */}
            <div className="p-4 rounded-xl bg-surface-subtle hairline space-y-2 text-xs">
              <div className="flex items-center gap-2 text-text-primary font-bold">
                <MapPin className="w-3.5 h-3.5 text-text-muted" />
                <span>{selectedCity.name} — {selectedCity.address}</span>
              </div>
              <div className="mono-telemetry text-[10px] text-text-muted flex items-center justify-between">
                <span>{selectedCity.telemetry}</span>
                <span>LEAD TAILOR: {selectedCity.leadTailor}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mono-telemetry text-[10px] text-text-muted block mb-1">CLIENT NAME</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-pill border border-border-default rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mono-telemetry text-[10px] text-text-muted block mb-1">PREFERRED DATE</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-pill border border-border-default rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Private Salon Invitation</span>
                </button>

                <a
                  href={activeBrand.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  <span>{activeBrand.social.whatsappText}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <div>
              <span className="mono-telemetry text-text-muted text-[10px]">INVITATION DISPATCHED</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-text-primary mt-1">
                PRIVATE ATELIER RESERVED
              </h3>
              <p className="text-xs text-text-secondary mt-2 font-light max-w-md mx-auto">
                We have registered your private appointment with {selectedCity.leadTailor} at our {selectedCity.city} Atelier on {date}. Your VIP concierge coordinator will contact you directly.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full bg-btn-primary-bg text-btn-primary-text text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
