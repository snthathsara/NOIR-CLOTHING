import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CategoryFeatureBar = ({ onSelectCategory }) => {
  const features = [
    {
      title: 'MEN',
      sub: 'Elevated architectural essentials.',
      cta: 'SHOP MEN →',
      category: 'outerwear',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=85'
    },
    {
      title: 'WOMEN',
      sub: 'Sculptural silhouettes for every form.',
      cta: 'SHOP WOMEN →',
      category: 'silhouettes',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=85'
    },
    {
      title: 'ATELIER',
      sub: 'Master-tailored bespoke commissions.',
      cta: 'COMMISSION PIECE →',
      category: 'all',
      targetId: 'configurator',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=400&q=85'
    }
  ];

  const handleClick = (item) => {
    if (item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (onSelectCategory) onSelectCategory(item.category);
      const el = document.getElementById('lookbook');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-8 sm:py-12 px-4 sm:px-8 border-b border-neutral-800">
      <div className="max-w-editorial mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        {features.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(item)}
            className="flex items-center gap-5 group cursor-pointer p-3 rounded-xl hover:bg-neutral-900 transition-colors duration-300"
          >
            {/* Square/Portrait Visual Thumbnail */}
            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Typography & CTA */}
            <div className="space-y-1.5 flex-grow">
              <h3 className="text-base sm:text-lg font-black tracking-widest uppercase font-sans text-white group-hover:text-neutral-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {item.sub}
              </p>
              <div className="pt-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-white underline underline-offset-4 group-hover:text-neutral-300">
                  {item.cta}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
