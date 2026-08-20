export const fabricBentoData = [
  {
    id: 'origin',
    number: '01',
    title: 'Material Origin & Botany',
    subtitle: 'Loro Piana Cashmere & Como Mulberry Silk',
    category: 'PROVENANCE & FIBER PURITY',
    description: 'We source exclusively from historic family-owned mills in Biella and Lake Como. Our grade-A long-staple cashmere fibers measure 14.8 microns in diameter and are dyed using natural botanical pigment infusions.',
    metrics: [
      { label: 'Fiber Diameter', value: '14.8 µm', detail: 'Grade-A Fine Staple' },
      { label: 'Weave Weight', value: '620 GSM', detail: 'Double-Faced Twill' },
      { label: 'Botanical Origin', value: '100% Bio', detail: 'Natural Mineral Dye' },
      { label: 'Traceability', value: '100%', detail: 'Blockchain Serialized' }
    ],
    features: [
      'Zero synthetic filler fibers, heavy metals, or toxic chemical softeners',
      'Natural organic lanolin retention for organic water-repellence',
      'Direct farm-to-atelier single origin sourcing batch'
    ]
  },
  {
    id: 'silhouette',
    number: '02',
    title: 'Architectural Silhouette',
    subtitle: 'Sculpted Cinch-Waist & Pure Bias Drapery',
    category: 'COUTURE TAILORING',
    description: 'Rejecting rigid mass-market forms in favor of fluid, imposing feminine architecture. Each panel is mathematically mapped along natural body stress vectors to ensure the garment moves with statuesque grace.',
    metrics: [
      { label: 'Waist Cinch', value: '6.8 cm', detail: 'Architectural Contour' },
      { label: 'Dart Precision', value: '0.02 mm', detail: 'Laser Micro-Align' },
      { label: 'Bias Angle', value: '45.0°', detail: 'Liquid Silk Drape' },
      { label: 'Internal Canvas', value: 'Floating', detail: 'Horsehair Core' }
    ],
    features: [
      'Internal floating chest canvas that molds organically over 100 hours of wear',
      'True 45-degree bias cuts engineered for liquid motion and zero tension',
      'Weighted silk organza stay bands securing clean neckline geometry'
    ]
  },
  {
    id: 'sourcing',
    number: '03',
    title: 'Sustainable Sourcing',
    subtitle: 'Zero-Waste Pattern Cutting & Static Edge Supply Chain',
    category: 'CIRCULAR LUXURY',
    description: 'True luxury lies in absolute restraint. By employing algorithmic pattern nesting, our cutting waste is reduced to sub-3.8%. Excess raw silk and cashmere fibers are spun into bespoke pocket linings and dust covers.',
    metrics: [
      { label: 'Pattern Yield', value: '96.4%', detail: 'Algorithmic Nesting' },
      { label: 'Water Footprint', value: '-68%', detail: 'Closed-Loop Dyeing' },
      { label: 'Energy Source', value: '100%', detail: 'Hydroelectric Mill Power' },
      { label: 'Annual Limit', value: '250 Units', detail: 'Anti-Overproduction' }
    ],
    features: [
      'GOTS (Global Organic Textile Standard) Certified natural dyes',
      'Biodegradable organic cotton stitching threads and carved horn buttons',
      'Lifetime atelier repair and re-finishing privilege included with every serial number'
    ]
  }
];

export const cadBlueprintSpecs = {
  garmentName: 'THE SCULPTED HOURGLASS COAT // SPEC 04',
  blueprintCode: 'DWG-DAIZY-2026-W04-COAT',
  releaseDate: 'AUTUMN / WINTER 2026',
  scale: '1 : 10 SCALE ARCHITECTURAL DRAFT',
  nodes: {
    metric: [
      { id: 'shoulder', label: 'Shoulder Pitch Span', value: '42.5 cm', tolerance: '±0.1 mm', coord: { x: 50, y: 18 } },
      { id: 'lapel', label: 'Architectural Lapel Angle', value: '38.0°', tolerance: 'Fixed Peak', coord: { x: 38, y: 28 } },
      { id: 'bust', label: 'Bust Contour Apex', value: '94.0 cm', tolerance: 'Full Canvas', coord: { x: 50, y: 38 } },
      { id: 'waist', label: 'Cinch Waist Suppression', value: '72.0 cm', tolerance: 'Precision Dart', coord: { x: 50, y: 52 } },
      { id: 'sleeve', label: 'Sleeve Articulation Drop', value: '61.5 cm', tolerance: 'Curved Inseam', coord: { x: 80, y: 45 } },
      { id: 'hem', label: 'Floor-Length Sweep', value: '124.0 cm', tolerance: 'Floor Proximity', coord: { x: 50, y: 88 } }
    ],
    imperial: [
      { id: 'shoulder', label: 'Shoulder Pitch Span', value: '16.7 in', tolerance: '±0.004 in', coord: { x: 50, y: 18 } },
      { id: 'lapel', label: 'Architectural Lapel Angle', value: '38.0°', tolerance: 'Fixed Peak', coord: { x: 38, y: 28 } },
      { id: 'bust', label: 'Bust Contour Apex', value: '37.0 in', tolerance: 'Full Canvas', coord: { x: 50, y: 38 } },
      { id: 'waist', label: 'Cinch Waist Suppression', value: '28.3 in', tolerance: 'Precision Dart', coord: { x: 50, y: 52 } },
      { id: 'sleeve', label: 'Sleeve Articulation Drop', value: '24.2 in', tolerance: 'Curved Inseam', coord: { x: 80, y: 45 } },
      { id: 'hem', label: 'Floor-Length Sweep', value: '48.8 in', tolerance: 'Floor Proximity', coord: { x: 50, y: 88 } }
    ]
  },
  pillars: [
    {
      code: '01',
      title: 'Tension-Balanced Laser Darting',
      spec: '0.02mm Seam Caliber',
      status: 'VERIFIED',
      desc: 'Eliminates structural torque and uneven drape during active movement across all body archetypes.'
    },
    {
      code: '02',
      title: 'Double-Faced Cashmere Core',
      spec: 'Zero Heat Loss Core',
      status: 'VERIFIED',
      desc: 'Double-faced micro-air pocket insulation provides extreme warmth with featherweight cloud breathability.'
    },
    {
      code: '03',
      title: 'Full Floating Horsehair Canvas',
      spec: '100% Non-Fused Construction',
      status: 'VERIFIED',
      desc: 'Hand-stitched chest piece breathes and organically molds to the owner’s torso with each season.'
    }
  ]
};

export const bespokeConfiguratorData = {
  silhouettes: [
    {
      id: 'sil-gown',
      name: 'Architectural Column Evening Gown',
      basePrice: 14500,
      leadTime: '3-4 Weeks',
      category: 'Haute Runway Gowns',
      description: 'Sculptural heavy silk crepe column silhouette with geometric open back and floor sweep.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85'
    },
    {
      id: 'sil-blazer',
      name: 'The Sculpted Hourglass Blazer',
      basePrice: 9800,
      leadTime: '2-3 Weeks',
      category: 'Precision Tailoring',
      description: 'Cinched-waist architectural jacket with floating canvas construction and Milanese buttonholes.',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85'
    },
    {
      id: 'sil-overcoat',
      name: 'The Double-Faced Cashmere Trench',
      basePrice: 16500,
      leadTime: '4-5 Weeks',
      category: 'Full-Length Outerwear',
      description: 'Full-length double-faced cashmere coat with belted waist and hand-split seams.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85'
    },
    {
      id: 'sil-trousers',
      name: 'The Silk-Wool Palazzo Trouser',
      basePrice: 5900,
      leadTime: '2-3 Weeks',
      category: 'Atelier Suiting',
      description: 'High-waisted double-pleated trousers in Italian virgin wool-silk twill.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85'
    }
  ],
  fabrics: [
    {
      id: 'fab-black-cashmere',
      name: 'Loro Piana Double-Faced Cashmere',
      sub: '620 GSM Double-Faced Twill',
      priceModifier: 0,
      origin: 'Biella, Italy',
      colorCode: '#0D0D0D'
    },
    {
      id: 'fab-mulberry-silk',
      name: 'Como Heavyweight Silk Charmeuse (22mm)',
      sub: '95 GSM Liquid Drape',
      priceModifier: 1500,
      origin: 'Lake Como, Italy',
      colorCode: '#1A1A1A'
    },
    {
      id: 'fab-virgin-wool',
      name: 'Super 140s Sculptural Virgin Wool',
      sub: '360 GSM Fine Gabardine',
      priceModifier: -800,
      origin: 'Biella, Italy',
      colorCode: '#141414'
    },
    {
      id: 'fab-nappa-leather',
      name: 'Skived Italian Lamb Nappa Leather',
      sub: '0.7mm Featherweight Nappa',
      priceModifier: 3500,
      origin: 'Santa Croce, Florence',
      colorCode: '#080808'
    }
  ],
  hardware: [
    {
      id: 'hw-horn',
      name: 'Matte Obsidian Horn Buttons',
      priceModifier: 0,
      desc: 'Hand-carved water buffalo horn with matte anti-reflective finish.'
    },
    {
      id: 'hw-titanium',
      name: 'Concealed Titanium PVD Snaps',
      priceModifier: 950,
      desc: 'Aerospace Grade-5 titanium with stealth dark PVD vapor deposition.'
    },
    {
      id: 'hw-magnetic',
      name: 'Neodymium Seamless Magnet Placket',
      priceModifier: 1200,
      desc: 'Hermetically sealed 6-point magnetic closures for a completely clean facade.'
    }
  ],
  sizingAdjustments: [
    { id: 'standard', label: 'Standard Atelier Proportion (0 cm)', modifier: 0, price: 0 },
    { id: 'tall-sleeve', label: 'Extended Sleeve (+2.5 cm)', modifier: 2.5, price: 450 },
    { id: 'long-torso', label: 'Extended Body Length (+4.0 cm)', modifier: 4.0, price: 650 },
    { id: 'custom-bespoke', label: 'Full Bespoke In-Person Fitting', modifier: 0, price: 1500 }
  ]
};

export const atelierLocations = [
  {
    city: 'AMBALANGODA',
    name: 'Daizy Flagship Boutique & Salon',
    address: 'Main Street, Ambalangoda 80300, Southern Province, Sri Lanka',
    hours: 'Mon — Sun: 09:30 — 19:30 IST (Walk-ins & Private Fittings)',
    telemetry: 'LAT 6.2364° N, LON 80.0543° E',
    leadTailor: 'Master Tailor & Stylist'
  },
  {
    city: 'COLOMBO',
    name: 'Colombo Private Studio',
    address: 'No. 42 Ward Place, Colombo 07, Sri Lanka',
    hours: 'Mon — Sat: 10:00 — 19:00 IST',
    telemetry: 'LAT 6.9147° N, LON 79.8732° E',
    leadTailor: 'Directrice Francesca De Luca'
  },
  {
    city: 'GALLE',
    name: 'Galle Fort Heritage Atelier',
    address: '24 Church Street, Galle Fort 80000, Sri Lanka',
    hours: 'Wed — Sun: 10:30 — 19:30 IST',
    telemetry: 'LAT 6.0270° N, LON 80.2170° E',
    leadTailor: 'Master Emi Takahashi'
  },
  {
    city: 'MILANO',
    name: 'Milan International Archive',
    address: 'Via Montenapoleone 14, 20121 Milano MI, Italy',
    hours: 'Mon — Sat: 10:00 — 19:30 CET',
    telemetry: 'LAT 45.4697° N, LON 9.1970° E',
    leadTailor: 'Directrice Hélène Laurent'
  }
];
