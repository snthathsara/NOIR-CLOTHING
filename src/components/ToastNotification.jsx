import React from 'react';
import { useCart } from '../context/CartContext';
import { Check, ShieldCheck } from 'lucide-react';

export const ToastNotification = () => {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short pointer-events-none">
      <div className="bg-[#18181A] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3.5 backdrop-blur-md">
        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
        <div>
          <div className="mono-telemetry text-[11px] tracking-widest text-white">
            {notification.message}
          </div>
          {notification.detail && (
            <div className="text-[12px] text-[#9E9EA0] mt-0.5">
              {notification.detail}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
