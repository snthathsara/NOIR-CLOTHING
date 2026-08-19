import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShieldCheck, Gift, ArrowRight, Tag, Lock, Sparkles, Heart } from 'lucide-react';

export const CartDrawer = () => {
  const {
    cart,
    itemCount,
    rawSubtotal,
    subtotal,
    discountAmount,
    appliedPromo,
    shippingFee,
    shippingThreshold,
    total,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    applyPromo,
    removePromo,
    isLuxuryGiftWrap,
    setIsLuxuryGiftWrap,
    setIsCheckoutOpen
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyPromo(promoInput);
    setPromoMessage(res);
    if (res.success) setPromoInput('');
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const progressPercent = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop blur */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface text-text-primary border-l border-border-default shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-border-default flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold uppercase tracking-tight text-sm font-sans">
                Private Archive Bag
              </span>
              <span className="w-5 h-5 rounded-full bg-pill text-text-primary text-[10px] font-mono flex items-center justify-center font-bold">
                {itemCount}
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-pill hover:bg-pill-hover flex items-center justify-center transition-transform active:scale-90"
            >
              <X className="w-4 h-4 text-text-primary" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-6 py-3 bg-surface-subtle border-b border-border-default">
            <div className="flex justify-between text-xs mb-1.5 font-mono">
              <span className="text-text-secondary">
                {subtotal >= shippingThreshold ? (
                  <span className="font-semibold text-text-primary flex items-center gap-1">
                    Complimentary VIP Express Unlocked
                  </span>
                ) : (
                  <span>Add <strong className="text-text-primary font-mono">${shippingThreshold - subtotal}</strong> for Free Courier</span>
                )}
              </span>
              <span className="text-text-muted text-[10px]">{progressPercent}%</span>
            </div>
            <div className="w-full h-1 bg-pill rounded-full overflow-hidden">
              <div
                className="h-full bg-text-primary transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-pill flex items-center justify-center text-text-muted mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-text-primary uppercase tracking-tight font-sans">
                  Your Archive is Empty
                </h4>
                <p className="text-xs text-text-secondary mt-1 font-light max-w-xs">
                  Select a tailored silhouette from the 20 Capsule 04 pieces or commission a bespoke piece.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-btn-primary-bg text-btn-primary-text text-xs font-bold uppercase tracking-wider shadow-lg"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="p-4 rounded-2xl bg-surface-subtle hairline flex gap-4 items-center justify-between"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-border-default">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-grow min-w-0 pr-2">
                    <div className="mono-telemetry text-[9px] text-text-muted">
                      SIZE {item.size}
                    </div>
                    <h4 className="text-xs font-bold text-text-primary uppercase truncate mt-0.5 font-sans">
                      {item.name}
                    </h4>
                    <div className="text-xs font-black font-mono text-text-primary mt-1">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2.5">
                      <div className="flex items-center bg-pill rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-text-primary hover:bg-pill-hover"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-bold text-text-primary">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-text-primary hover:bg-pill-hover"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-text-muted hover:text-red-500 transition-colors p-1"
                        title="Remove piece"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Controls & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-border-default bg-surface space-y-4">
              
              {/* Luxury Packaging Toggle */}
              <div 
                onClick={() => setIsLuxuryGiftWrap(!isLuxuryGiftWrap)}
                className="flex items-center justify-between p-3 rounded-xl bg-surface-subtle hairline cursor-pointer hover:bg-pill transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Gift className="w-4 h-4 text-text-primary" />
                  <div>
                    <span className="font-semibold text-text-primary block">Signature Archival Gift Box</span>
                    <span className="text-[10px] text-text-muted">Hand-tied black grosgrain ribbon</span>
                  </div>
                </div>
                <span className="mono-telemetry text-[10px] font-bold text-text-primary">
                  {isLuxuryGiftWrap ? 'INCLUDED' : 'OFF'}
                </span>
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="VOUCHER (TRY: ARCHITECT10)"
                  className="flex-grow bg-pill border border-border-default rounded-xl px-3 py-2 text-xs font-mono uppercase text-text-primary focus:outline-none focus:ring-1 focus:ring-text-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-surface hairline text-text-primary text-xs font-bold uppercase hover:bg-pill"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="flex items-center justify-between text-xs text-text-primary px-1 font-mono">
                  <span>{appliedPromo.label}</span>
                  <button onClick={removePromo} className="text-text-muted hover:text-text-primary text-[10px] underline">
                    Remove
                  </button>
                </div>
              )}

              {/* Subtotal & Totals */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-text-secondary">
                  <span>Archive Subtotal</span>
                  <span className="font-mono text-text-primary">${rawSubtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-text-primary font-mono">
                    <span>VIP Privilege Discount</span>
                    <span>-${discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-text-secondary">
                  <span>Worldwide Priority Express</span>
                  <span className="font-mono text-text-primary">
                    {shippingFee === 0 ? 'Complimentary' : `$${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black pt-2 border-t border-border-default text-text-primary">
                  <span>Total Investment</span>
                  <span className="font-mono text-xl">${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-[0.98] shadow-2xl flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>1-Click Express Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
