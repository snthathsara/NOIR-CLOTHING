export const fabricBentoData = [
  {
    id: 'origin',
    number: '01',
    title: 'Material Origin & Botany',
    subtitle: 'Loro Piana Cashmere & Como Malachite Silk',
    category: 'PROVENANCE & FIBER PURITY',
    description: 'We source exclusively from historic family-owned mills in Biella and Lake Como. Our grade-A long-staple cashmere fibers measure 14.8 microns in diameter and are dyed using natural botanical forest pine extracts and mineral malachite infusions.',
    metrics: [
      { label: 'Fiber Diameter', value: '14.8 µm', detail: 'Grade-A Fine Staple' },
      { label: 'Weave Weight', value: '660 GSM', detail: 'Double-Faced Twill' },
      { label: 'Botanical Origin', value: '100% Bio', detail: 'Pine & Mineral Dye' },
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
    subtitle: 'Unstructured Drop-Shoulder & Precision Darting',
    category: 'TECTONIC TAILORING',
    description: 'Rejecting rigid corporate shoulder pads in favor of a natural, imposing monolithic stance. Each panel is mathematically mapped along natural body stress vectors to ensure the garment moves with architectural authority.',
    metrics: [
      { label: 'Shoulder Drop', value: '4.2 cm', detail: 'Natural Slope Geometry' },
      { label: 'Dart Precision', value: '0.02 mm', detail: 'Laser Micro-Align' },
      { label: 'Lapel Peak', value: '11.0 cm', detail: 'Como Silk-Lined' },
      { label: 'Internal Canvas', value: 'Floating', detail: 'Horsehair Core' }
    ],
    features: [
      'Internal floating chest canvas that molds organically over 100 hours of wear',
      'Inverted geometric box pleats engineered for fluid stride extension',
      'Bias-cut facing to eliminate puckering and collar collapse'
    ]
  },
  {
    id: 'sourcing',
    number: '03',
    title: 'Sustainable Sourcing',
    subtitle: 'Zero-Waste Pattern Cutting & Static Edge Supply Chain',
    category: 'CIRCULAR LUXURY',
    description: 'True luxury lies in absolute restraint. By employing algorithmic pattern nesting, our cutting waste is reduced to sub-3.8%. Excess raw fibers are collected and spun into our bespoke internal pocket linings and garment travel dust covers.',
    metrics: [
      { label: 'Pattern Yield', value: '96.2%', detail: 'Algorithmic Nesting' },
      { label: 'Water Footprint', value: '-68%', detail: 'Closed-Loop Dyeing' },
      { label: 'Energy Source', value: '100%', detail: 'Hydroelectric Mill Power' },
      { label: 'Annual Limit', value: '250 Units', detail: 'Anti-Overproduction' }
    ],
    features: [
      'GOTS (Global Organic Textile Standard) Certified natural forest dyes',
      'Biodegradable organic cotton stitching threads and horn buttons',
      'Lifetime atelier repair and re-finishing privilege included with every serial number'
    ]
  }
];

export const cadBlueprintSpecs = {
  garmentName: 'THE MONOLITH OVERCOAT // FOREST CAD SPEC 04',
  blueprintCode: 'DWG-NOIR-2026-MNT04-EMR',
  releaseDate: 'AUTUMN / WINTER 2026',
  scale: '1 : 10 SCALE ARCHITECTURAL DRAFT',
  nodes: {
    metric: [
      { id: 'shoulder', label: 'Shoulder Pitch Span', value: '48.5 cm', tolerance: '±0.1 mm', coord: { x: 50, y: 18 } },
      { id: 'lapel', label: 'Architectural Lapel Angle', value: '42.0°', tolerance: 'Fixed Peak', coord: { x: 38, y: 28 } },
      { id: 'chest', label: 'Chest Circumference Drop', value: '116.0 cm', tolerance: 'Full Canvas', coord: { x: 50, y: 40 } },
      { id: 'waist', label: 'Waist Taper Tension', value: '112.0 cm', tolerance: 'Unstructured', coord: { x: 50, y: 55 } },
      { id: 'sleeve', label: 'Sleeve Articulation Drop', value: '64.5 cm', tolerance: 'Curved Inseam', coord: { x: 80, y: 45 } },
      { id: 'hem', label: 'Full Monolithic Length', value: '128.0 cm', tolerance: 'Floor Proximity', coord: { x: 50, y: 88 } }
    ],
    imperial: [
      { id: 'shoulder', label: 'Shoulder Pitch Span', value: '19.1 in', tolerance: '±0.004 in', coord: { x: 50, y: 18 } },
      { id: 'lapel', label: 'Architectural Lapel Angle', value: '42.0°', tolerance: 'Fixed Peak', coord: { x: 38, y: 28 } },
      { id: 'chest', label: 'Chest Circumference Drop', value: '45.7 in', tolerance: 'Full Canvas', coord: { x: 50, y: 40 } },
      { id: 'waist', label: 'Waist Taper Tension', value: '44.1 in', tolerance: 'Unstructured', coord: { x: 50, y: 55 } },
      { id: 'sleeve', label: 'Sleeve Articulation Drop', value: '25.4 in', tolerance: 'Curved Inseam', coord: { x: 80, y: 45 } },
      { id: 'hem', label: 'Full Monolithic Length', value: '50.4 in', tolerance: 'Floor Proximity', coord: { x: 50, y: 88 } }
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
      title: 'R-42 Continuous Thermal Cavity',
      spec: 'Zero Heat Loss Core',
      status: 'VERIFIED',
      desc: 'Double-faced micro-air pocket insulation provides extreme sub-zero warmth with featherweight breathability.'
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
      id: 'sil-overcoat',
      name: 'The Monolith Emerald Overcoat',
      basePrice: 1650,
      leadTime: '3-4 Weeks',
      category: 'Full-Length Outerwear',
      description: 'Full-length architectural drop-shoulder silhouette in heavy double-faced cashmere.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85'
    },
    {
      id: 'sil-blazer',
      name: 'Atelier Structured Velvet Blazer',
      basePrice: 1380,
      leadTime: '2-3 Weeks',
      category: 'Precision Tailoring',
      description: 'Single-breasted jacket with razor peak lapels and floating horsehair chest canvas.',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=85'
    },
    {
      id: 'sil-trench',
      name: 'Tectonic Leather Storm Trench',
      basePrice: 2250,
      leadTime: '4-5 Weeks',
      category: 'Artisanal Leather',
      description: 'Brutalist full-grain calfskin duster with laser-engraved serialized titanium badge.',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85'
    },
    {
      id: 'sil-gown',
      name: 'Architectural Column Gown',
      basePrice: 1850,
      leadTime: '3-4 Weeks',
      category: 'Haute Runway Gown',
      description: 'Sculptural heavy silk crepe column silhouette with geometric open back.',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85'
    }
  ],
  fabrics: [
    {
      id: 'fab-forest-cashmere',
      name: 'Loro Piana Forest Pine Cashmere',
      sub: '660 GSM Double-Faced Twill',
      priceModifier: 0,
      origin: 'Biella, Italy',
      colorCode: '#081A11'
    },
    {
      id: 'fab-malachite-velvet',
      name: 'Royal Malachite Silk-Velvet',
      sub: '480 GSM Sculptural Sheen',
      priceModifier: 180,
      origin: 'Lake Como, Italy',
      colorCode: '#0E2B1E'
    },
    {
      id: 'fab-virgin-wool',
      name: 'High-Twist Structured Virgin Wool',
      sub: '390 GSM Tectonic Weave',
      priceModifier: -140,
      origin: 'Piedmont Mills, Italy',
      colorCode: '#0D1E16'
    },
    {
      id: 'fab-nappa-leather',
      name: 'Italian Full-Grain Nappa Leather',
      sub: '1.2mm Precision Skived',
      priceModifier: 600,
      origin: 'Santa Croce, Florence',
      colorCode: '#0A1710'
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
      priceModifier: 95,
      desc: 'Aerospace Grade-5 titanium with stealth dark green/black PVD vapor deposition.'
    },
    {
      id: 'hw-magnetic',
      name: 'Neodymium Seamless Magnet Placket',
      priceModifier: 140,
      desc: 'Hermetically sealed 6-point magnetic closures for a completely clean facade.'
    }
  ],
  sizingAdjustments: [
    { id: 'standard', label: 'Standard Atelier Proportion (0 cm)', modifier: 0, price: 0 },
    { id: 'tall-sleeve', label: 'Extended Sleeve (+2.5 cm)', modifier: 2.5, price: 50 },
    { id: 'long-torso', label: 'Extended Body Length (+4.0 cm)', modifier: 4.0, price: 80 },
    { id: 'custom-bespoke', label: 'Full Bespoke In-Person Fitting', modifier: 0, price: 250 }
  ]
};

export const atelierLocations = [
  {
    city: 'MILANO',
    name: 'Flagship Atelier & Vault',
    address: 'Via Montenapoleone 14, 20121 Milano MI, Italy',
    hours: 'Mon — Sat: 10:00 — 19:30 CET (Private Appointment Only)',
    telemetry: 'LAT 45.4697° N, LON 9.1970° E',
    leadTailor: 'Maestro Vincenzo De Luca'
  },
  {
    city: 'PARIS',
    name: 'Place Vendôme Private Salon',
    address: '8 Place Vendôme, 75001 Paris, France',
    hours: 'Tue — Sat: 11:00 — 19:00 CET',
    telemetry: 'LAT 48.8675° N, LON 2.3294° E',
    leadTailor: 'Directrice Hélène Laurent'
  },
  {
    city: 'TOKYO',
    name: 'Ginza Tectonic Archive',
    address: '6-10-1 Ginza, Chuo City, Tokyo 104-0061, Japan',
    hours: 'Wed — Sun: 11:00 — 20:00 JST',
    telemetry: 'LAT 35.6719° N, LON 139.7640° E',
    leadTailor: 'Master Kenji Takahashi'
  },
  {
    city: 'NEW YORK',
    name: 'SoHo Cast Iron Studio',
    address: '92 Mercer Street, New York, NY 10012, USA',
    hours: 'Mon — Sat: 11:00 — 19:00 EST',
    telemetry: 'LAT 40.7225° N, LON 73.9982° W',
    leadTailor: 'Artisan Julian Sterling'
  }
];
