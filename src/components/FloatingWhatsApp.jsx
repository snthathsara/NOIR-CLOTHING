import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const whatsappUrl = 'https://chat.whatsapp.com/GQv2J7psMR1Gvt5mfWW9Zq?mode=gi_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group font-sans"
      title="Join Daizy Clothing WhatsApp VIP Community"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute top-2 right-2" />
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="text-xs font-bold tracking-wide uppercase font-mono hidden sm:inline-block">
        WhatsApp VIP Lounge
      </span>
    </a>
  );
};
