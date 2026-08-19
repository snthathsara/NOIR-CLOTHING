import React from 'react';
import { Truck, RotateCcw, Award, Lock } from 'lucide-react';

export const TrustBar = () => {
  const assurances = [
    {
      icon: Truck,
      title: 'FAST DELIVERY',
      sub: 'Quick & insured priority delivery'
    },
    {
      icon: RotateCcw,
      title: 'EASY RETURNS',
      sub: 'Within 30 days global guarantee'
    },
    {
      icon: Award,
      title: 'QUALITY ASSURED',
      sub: '100% Certified Italian luxury fibers'
    },
    {
      icon: Lock,
      title: 'SECURE PAYMENT',
      sub: '100% Vault encrypted checkout'
    }
  ];

  return (
    <section className="w-full bg-surface-subtle py-8 sm:py-10 px-4 sm:px-8 border-b border-border-default">
      <div className="max-w-editorial mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {assurances.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pill flex items-center justify-center shrink-0 text-text-primary">
              <item.icon className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-black tracking-widest text-text-primary uppercase font-sans">
                {item.title}
              </div>
              <div className="text-[11px] text-text-muted mt-0.5 font-light">
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
