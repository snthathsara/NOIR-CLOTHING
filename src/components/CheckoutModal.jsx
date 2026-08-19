import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';
import { X, Check, PhoneCall, Download, Printer, ShieldCheck, ArrowRight, Sparkles, Clock, MapPin, Award, Building, User, Mail, Phone } from 'lucide-react';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, rawSubtotal, discountAmount, shippingFee, total, clearCart } = useCart();
  
  const [step, setStep] = useState(1);
  const [showCallModal, setShowCallModal] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Julian Sterling',
    email: 'client.sterling@vault.com',
    phone: '+1 (415) 890-2194',
    company: 'Sterling Private Holdings',
    address: '14 Via Montenapoleone, Suite 4B',
    city: 'Milano',
    country: 'Italy',
    notes: 'Please arrange private fitting and signature gift packaging.'
  });
  const [quotationNumber, setQuotationNumber] = useState('');
  const [quotationDate, setQuotationDate] = useState('');

  if (!isCheckoutOpen) return null;

  const triggerLuxuryConfetti = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#000000', '#ffffff', '#888888', '#d0d0d0']
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleGenerateQuotation = (e) => {
    e.preventDefault();
    const token = `QT-NOIR-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuotationNumber(token);
    setQuotationDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    setStep(2);
    triggerLuxuryConfetti();
  };

  const handlePrintQuotation = () => {
    window.print();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep(1);
    setShowCallModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto no-scrollbar">
      <div 
        className="relative w-full max-w-3xl bg-surface text-text-primary rounded-3xl border border-border-default shadow-2xl overflow-hidden p-6 sm:p-10 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="no-print absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-pill hover:bg-pill-hover text-text-primary flex items-center justify-center transition-transform active:scale-90"
        >
          <X className="w-4 h-4" />
        </button>

        {/* STEP 1: Client Information & Order Verification */}
        {step === 1 && (
          <form onSubmit={handleGenerateQuotation} className="space-y-6">
            <div>
              <div className="mono-telemetry text-text-muted mb-1 text-[10px]">
                NOIR CLOTHING • CHECKOUT & QUOTATION
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-text-primary font-sans">
                Prepare Official Quotation
              </h3>
              <p className="text-xs text-text-secondary mt-1 font-light">
                Generate an official serialized proforma quotation invoice for your selected capsule pieces.
              </p>
            </div>

            {/* Client Details Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mono-telemetry text-[10px] text-text-muted block mb-1">CLIENT FULL NAME *</label>
                <div className="flex items-center bg-pill border border-border-default rounded-xl px-3 py-2.5">
                  <User className="w-3.5 h-3.5 text-text-muted mr-2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent text-xs text-text-primary focus:outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="mono-telemetry text-[10px] text-text-muted block mb-1">VIP CONCIERGE EMAIL *</label>
                <div className="flex items-center bg-pill border border-border-default rounded-xl px-3 py-2.5">
                  <Mail className="w-3.5 h-3.5 text-text-muted mr-2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent text-xs text-text-primary focus:outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="mono-telemetry text-[10px] text-text-muted block mb-1">TELEPHONE NUMBER *</label>
                <div className="flex items-center bg-pill border border-border-default rounded-xl px-3 py-2.5">
                  <Phone className="w-3.5 h-3.5 text-text-muted mr-2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent text-xs text-text-primary focus:outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="mono-telemetry text-[10px] text-text-muted block mb-1">COMPANY / PRIVATE OFFICE</label>
                <div className="flex items-center bg-pill border border-border-default rounded-xl px-3 py-2.5">
                  <Building className="w-3.5 h-3.5 text-text-muted mr-2" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent text-xs text-text-primary focus:outline-none font-sans"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="mono-telemetry text-[10px] text-text-muted block mb-1">DESTINATION RESIDENCE / SUITE</label>
                <div className="flex items-center bg-pill border border-border-default rounded-xl px-3 py-2.5">
                  <MapPin className="w-3.5 h-3.5 text-text-muted mr-2" />
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-transparent text-xs text-text-primary focus:outline-none font-sans"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="mono-telemetry text-[10px] text-text-muted block mb-1">SPECIAL FITTING OR CONCIERGE NOTES</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-pill border border-border-default rounded-xl p-3 text-xs text-text-primary focus:outline-none font-sans resize-none"
                />
              </div>
            </div>

            {/* Order Items Summary */}
            <div className="p-4 rounded-2xl bg-surface-subtle border border-border-default space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-text-muted pb-1 border-b border-border-default text-[10px]">
                <span>CAPSULE SELECTION ({cart.length} PIECES)</span>
                <span>SUBTOTAL</span>
              </div>
              {cart.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between py-1">
                  <span className="truncate pr-4 text-text-primary">
                    {item.name} <strong className="text-text-muted">[Size {item.size}]</strong> x{item.quantity}
                  </span>
                  <span className="font-bold text-text-primary shrink-0">${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            {/* Total Footer & Submission */}
            <div className="pt-4 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="mono-telemetry text-[10px] text-text-muted">TOTAL INVESTMENT</div>
                <div className="text-2xl font-black font-mono text-text-primary">${total.toLocaleString()}</div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95"
              >
                <span>Generate Official Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Official Quotation Invoice Display & Order Actions */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Header */}
            <div className="no-print text-center pb-2">
              <div className="w-12 h-12 rounded-full bg-btn-primary-bg text-btn-primary-text flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <span className="mono-telemetry text-text-muted text-[10px]">OFFICIAL PROFORMA QUOTATION READY</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-text-primary mt-1 font-sans">
                Quotation #{quotationNumber}
              </h3>
            </div>

            {/* Printable Formal Quotation Document Card */}
            <div id="quotation-print-area" className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-default shadow-xl font-mono text-xs space-y-6">
              
              {/* Quotation Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border-default gap-3">
                <div>
                  <div className="text-base font-bold text-text-primary uppercase font-sans tracking-tight">
                    NOIR CLOTHING™ ATELIER
                  </div>
                  <div className="text-[10px] text-text-muted">14 Via Montenapoleone, 20121 Milano, Italy</div>
                  <div className="text-[10px] text-text-muted">concierge@noirclothing.com • +1 (800) 555-0199</div>
                </div>

                <div className="sm:text-right">
                  <div className="text-[10px] text-text-muted uppercase">DATE OF ISSUE</div>
                  <div className="text-text-primary font-bold">{quotationDate}</div>
                  <div className="text-[10px] text-text-muted mt-1 uppercase">QUOTATION VALIDITY</div>
                  <div className="text-text-primary font-bold">14 Days from Issue</div>
                </div>
              </div>

              {/* Client & Destination Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3.5 rounded-xl bg-surface-subtle">
                <div>
                  <span className="text-[10px] text-text-muted uppercase block">PREPARED FOR:</span>
                  <span className="text-text-primary font-bold block">{formData.name}</span>
                  {formData.company && <span className="text-text-secondary block">{formData.company}</span>}
                  <span className="text-text-secondary block">{formData.email}</span>
                  <span className="text-text-secondary block">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-[10px] text-text-muted uppercase block">DELIVERY DESTINATION:</span>
                  <span className="text-text-secondary block">{formData.address}</span>
                  <span className="text-text-secondary block">{formData.city}, {formData.country}</span>
                  <span className="text-text-muted text-[10px] block mt-1">Priority Insured Global Courier</span>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-text-muted font-bold pb-1 border-b border-border-default uppercase">
                  <span>ITEM SPECIFICATION</span>
                  <span>QTY</span>
                  <span>UNIT PRICE</span>
                  <span>TOTAL</span>
                </div>

                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-border-subtle text-text-primary">
                    <span className="w-1/2 truncate font-sans text-xs">
                      {item.name} <strong className="font-mono text-text-muted text-[10px]">[Size {item.size}]</strong>
                    </span>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <span className="w-24 text-right">${item.price.toLocaleString()}</span>
                    <span className="w-24 text-right font-bold">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Totals Breakdown */}
              <div className="pt-2 flex flex-col items-end space-y-1.5 text-xs">
                <div className="flex justify-between w-64 text-text-secondary">
                  <span>Subtotal:</span>
                  <span className="font-bold text-text-primary">${rawSubtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between w-64 text-text-primary">
                    <span>Privilege Discount:</span>
                    <span>-${discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between w-64 text-text-secondary">
                  <span>Worldwide Courier:</span>
                  <span className="text-text-primary">{shippingFee === 0 ? 'Complimentary' : `$${shippingFee}`}</span>
                </div>
                <div className="flex justify-between w-64 text-sm font-bold pt-2 border-t border-border-default text-text-primary">
                  <span>Total Quotation Sum:</span>
                  <span className="text-base">${total.toLocaleString()} USD</span>
                </div>
              </div>

              {/* Notes */}
              {formData.notes && (
                <div className="text-[10px] text-text-secondary p-2.5 rounded-lg bg-surface-subtle">
                  <strong className="text-text-primary">Special Instructions:</strong> {formData.notes}
                </div>
              )}

            </div>

            {/* Primary Action Buttons */}
            <div className="no-print space-y-3 pt-2">
              
              {/* Big Call Us to Place Your Order Button (Primary Requirement) */}
              <button
                onClick={() => setShowCallModal(true)}
                className="w-full py-4 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2.5 shadow-2xl active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                <span>Call Us to Place Your Order</span>
              </button>

              {/* Secondary Actions: Download Quotation PDF & Edit */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handlePrintQuotation}
                  className="flex-1 py-3 rounded-full border border-border-default bg-surface hover:bg-pill text-text-primary text-xs font-mono font-bold uppercase flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Quotation (PDF)</span>
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-full border border-border-default bg-surface hover:bg-pill text-text-muted hover:text-text-primary text-xs font-mono uppercase"
                >
                  Edit Details
                </button>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* VIP Phone Concierge Direct Hotline Popup */}
      {showCallModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-scale-in">
          <div 
            className="relative w-full max-w-md bg-surface text-text-primary rounded-3xl border border-border-default shadow-2xl p-6 sm:p-8 space-y-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pill text-text-primary flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-14 h-14 rounded-full bg-btn-primary-bg text-btn-primary-text flex items-center justify-center mx-auto shadow-xl">
              <PhoneCall className="w-7 h-7" />
            </div>

            <div>
              <div className="mono-telemetry text-text-muted text-[10px] mb-1">NOIR CLOTHING • VIP CONCIERGE DESK</div>
              <h4 className="text-xl font-bold uppercase text-text-primary font-sans">
                Direct Client Hotline
              </h4>
              <p className="text-xs text-text-secondary mt-1 font-light">
                Please quote your reference <strong>#{quotationNumber}</strong> when connecting with our Senior Client Advisor.
              </p>
            </div>

            {/* Direct Dial Links */}
            <div className="space-y-2.5 text-xs font-mono text-left">
              <a
                href="tel:+18005550199"
                className="p-3.5 rounded-xl bg-surface-subtle border border-border-default flex items-center justify-between hover:bg-pill transition-colors text-text-primary block"
              >
                <div>
                  <span className="font-bold block">Milano & Global Toll-Free</span>
                  <span className="text-[11px] text-text-muted">+1 (800) 555-0199</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-btn-primary-bg text-btn-primary-text">CALL NOW</span>
              </a>

              <a
                href="https://wa.me/18005550199"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-surface-subtle border border-border-default flex items-center justify-between hover:bg-pill transition-colors text-text-primary block"
              >
                <div>
                  <span className="font-bold block">WhatsApp Private Concierge</span>
                  <span className="text-[11px] text-text-muted">Instant Order Dispatch</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-600 text-white">WHATSAPP</span>
              </a>
            </div>

            <button
              onClick={() => {
                setShowCallModal(false);
                setIsCheckoutOpen(false);
              }}
              className="w-full py-3 rounded-full bg-btn-primary-bg text-btn-primary-text text-xs font-bold uppercase tracking-wider"
            >
              Done & Return to Store
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
