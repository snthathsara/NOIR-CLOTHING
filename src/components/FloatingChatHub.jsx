import React, { useState, useRef, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const FloatingChatHub = () => {
  const { activeBrand, activeBrandKey } = useBrand();
  const [isOpen, setIsOpen] = useState(false);
  const hubRef = useRef(null);

  const { whatsappUrl, whatsappText, whatsappSub, instagramUrl, instagramHandle, facebookUrl, facebookName } = activeBrand.social;

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (hubRef.current && !hubRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={hubRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover Hub */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-surface text-text-primary border border-border-default shadow-2xl p-4 space-y-3 animate-fade-in backdrop-blur-xl">
          <div className="flex items-center justify-between pb-2 border-b border-border-default">
            <div>
              <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                {activeBrand.shortName} DIRECT CHAT
              </div>
              <h4 className="text-xs font-black uppercase text-text-primary font-sans mt-0.5">
                Connect with our team
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-pill hover:bg-pill-hover flex items-center justify-center text-text-muted hover:text-text-primary transition-all"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-text-primary transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold font-sans">{whatsappText}</div>
                  <div className="text-[10px] text-text-muted">{whatsappSub}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            {/* Instagram DM */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-text-primary transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <InstagramIcon className="w-4 h-4 stroke-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold font-sans">Instagram DM</div>
                  <div className="text-[10px] text-text-muted">{instagramHandle}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-pink-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            {/* Facebook Chat */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/30 text-text-primary transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md shrink-0">
                  <FacebookIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold font-sans">Facebook Message</div>
                  <div className="text-[10px] text-text-muted">{facebookName}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#1877F2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>

          <div className="text-[10px] text-text-muted text-center font-mono pt-1">
            Usually replies within a few minutes
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] shadow-2xl border border-border-default hover:scale-105 active:scale-95 transition-all duration-300 group font-sans"
        title={`Chat with ${activeBrand.name} on WhatsApp, Instagram or Facebook`}
      >
        <div className="flex items-center -space-x-1.5">
          <span className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center ring-2 ring-page">
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
          </span>
          <span className="w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center ring-2 ring-page">
            <InstagramIcon className="w-3 h-3 stroke-white" />
          </span>
          <span className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center ring-2 ring-page">
            <FacebookIcon className="w-3 h-3" />
          </span>
        </div>
        <span className="text-xs font-bold tracking-wide uppercase font-mono pl-1">
          {activeBrandKey === 'daizy' ? 'Join WhatsApp Group & Chat' : 'Chat on WhatsApp & Socials'}
        </span>
      </button>

    </div>
  );
};
