import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowUpRight, Check, Mail, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export const Footer = () => {
  const { setIsConciergeOpen } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer id="archive" className="border-t border-border-default bg-surface text-text-primary mt-20">
      
      {/* Pre-Footer Newsletter & VIP Drop Invitation */}
      <div className="max-w-editorial mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="rounded-2xl bg-surface-subtle border border-border-default p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-xl text-center lg:text-left">
            <div className="mono-telemetry text-text-muted mb-2">
              PRIVATE COLLECTOR DISPATCH • CAPSULE 05
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-text-primary font-sans">
              Access the private <span className="serif-italic font-normal">archive</span> early.
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-2 font-light">
              Receive confidential lookbooks, private salon invitations, and limited serial allocations before global unveilings.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER CLIENT EMAIL..."
                  className="bg-surface border border-border-default rounded-full px-5 py-3 text-xs font-mono uppercase text-text-primary focus:outline-none focus:ring-1 focus:ring-text-primary flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-btn-primary-bg text-btn-primary-text font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-1 shrink-0 active:scale-95 shadow-md"
                >
                  <span>Join Archive</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-surface border border-border-default text-text-primary text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>CONFIRMED: VIP Capsule Access Granted for {email}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3-Part Swiss Editorial Footer */}
      <div className="max-w-editorial mx-auto px-4 sm:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-default text-xs">
          
          {/* Part 1: Brand Philosophy & Monogram */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-black text-xl uppercase tracking-tight flex items-center gap-2 font-sans">
              <span>DAIZY CLOTHING</span>
              <span className="text-text-muted font-normal text-xs">™</span>
            </div>
            <p className="text-text-secondary font-light max-w-sm leading-relaxed">
              Modern women’s boutique specializing in export-quality, eco-conscious styles. Timeless, architectural fashion curated for the contemporary woman.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/daizy_clothing/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-surface-subtle hover:bg-pill border border-border-default text-text-primary text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://www.facebook.com/p/Daizy-Clothing-61587159035933/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-surface-subtle hover:bg-pill border border-border-default text-text-primary text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://chat.whatsapp.com/GQv2J7psMR1Gvt5mfWW9Zq?mode=gi_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <span>WhatsApp VIP</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-1">
              <button
                onClick={() => setIsConciergeOpen(true)}
                className="mono-telemetry text-[10px] text-text-primary hover:underline flex items-center gap-1.5"
              >
                <MapPin className="w-3 h-3 text-text-muted" />
                <span>AMBALANGODA • COLOMBO • SRI LANKA</span>
              </button>
            </div>
          </div>

          {/* Part 2: Client Services & Atelier */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="mono-telemetry text-text-muted pb-1">CLIENT SERVICES</div>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#lookbook" className="hover:text-text-primary transition-colors">Seasonal Lookbook (20)</a></li>
              <li><a href="https://share.google/nVvyg95wPf7E5xkEv" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1"><span>Catalog Drive Archive</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://chat.whatsapp.com/GQv2J7psMR1Gvt5mfWW9Zq?mode=gi_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1"><span>WhatsApp Community</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#lookbook" className="hover:text-text-primary transition-colors">Islandwide Courier & Delivery</a></li>
              <li><span className="text-text-muted">30-Day Exchange Guarantee</span></li>
            </ul>
          </div>

          {/* Part 3: Boutique Standards */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="mono-telemetry text-text-muted pb-1">BOUTIQUE PHILOSOPHY</div>
            <p className="text-text-secondary font-light leading-relaxed">
              Export-grade craftsmanship engineered with botanical dyes, long-staple natural fibers, and sustainable zero-waste cutting algorithms.
            </p>
            <div className="pt-2 text-text-muted mono-telemetry text-[10px]">
              DAIZY CLOTHING SRI LANKA • BOUTIQUE AT AMBALANGODA
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="mono-telemetry text-[10px]">
            © 2026 DAIZY CLOTHING. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6 mono-telemetry text-[10px]">
            <a href="#lookbook" className="hover:text-text-primary transition-colors">LEGAL NOTICE</a>
            <a href="#lookbook" className="hover:text-text-primary transition-colors">PRIVACY PROTOCOL</a>
            <a href="#craftsmanship" className="hover:text-text-primary transition-colors">SWISS MINIMALISM</a>
          </div>
        </div>

      </div>

    </footer>
  );
};
