import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';

export const Preloader = ({ onFinish }) => {
  const { activeBrand } = useBrand();
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onFinish, 700);
          }, 250);
          return 100;
        }
        const diff = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + diff, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      style={{ backgroundColor: 'var(--bg-surface)' }}
      className={`fixed inset-0 z-[999999] bg-white dark:bg-[#0A0A0A] text-text-primary flex flex-col justify-between p-8 sm:p-14 transition-all duration-700 ${
        isDone ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 pointer-events-auto scale-100'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs font-mono text-text-muted uppercase tracking-widest">
        <span>{activeBrand.name}</span>
        <span>COLLECTION 2026</span>
      </div>

      {/* Center Monogram Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-[-0.05em] uppercase font-sans text-text-primary">
          {activeBrand.name}
        </h1>
        <p className="text-xs sm:text-sm font-mono text-text-muted tracking-widest uppercase">
          {activeBrand.tagline}
        </p>
      </div>

      {/* Bottom Progress Bar */}
      <div className="space-y-3 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between text-xs font-mono text-text-muted">
          <span>INITIALIZING VAULT ARCHIVE</span>
          <span className="font-bold text-text-primary">{progress}%</span>
        </div>
        <div className="w-full h-[2px] bg-border-default rounded-full overflow-hidden">
          <div
            className="h-full bg-btn-primary-bg transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
