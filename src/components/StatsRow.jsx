import React from 'react';

export const StatsRow = () => {
  const stats = [
    {
      metric: '20',
      unit: 'PIECES',
      label: 'BOTANICAL CAPSULE',
      subtext: '5 distinct luxury categories'
    },
    {
      metric: '250',
      unit: 'UNITS',
      label: 'STRICT RUN PER PIECE',
      subtext: 'Serialized & individually registered'
    },
    {
      metric: '0.02',
      unit: 'MM',
      label: 'SEAM CALIBER',
      subtext: 'Laser-guided ultrasonic darting'
    },
    {
      metric: '100',
      unit: '%',
      label: 'ORGANIC BIO-DYES',
      subtext: 'Pure Biella pine & Como minerals'
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-editorial mx-auto">
      <div className="hairline rounded-[24px] bg-surface p-8 sm:p-12 shadow-sm border-emerald-500/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
          
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-primary font-mono">
                    {stat.metric}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    {stat.unit}
                  </span>
                </div>
                
                <div className="mono-telemetry text-[11px] text-text-primary mt-2">
                  {stat.label}
                </div>
                
                <p className="text-xs text-text-muted mt-1 font-light">
                  {stat.subtext}
                </p>
              </div>

              {/* Vertical 1px hairline divider on desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block w-[1px] h-14 bg-border-default self-center mx-auto" />
              )}
            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};
