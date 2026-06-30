import { GlobalHub, CargoItem, TradeInsight } from './types';

export const GLOBAL_HUBS: Record<string, GlobalHub> = {
  rotterdam: {
    id: 'rotterdam',
    name: 'Netherlands Hub',
    role: 'Netherlands Headquarters & National Gateway',
    coordinates: '50.1109° N, 8.6821° E',
    lat: 50.1109,
    lng: 8.6821,
    description: 'Serving as Lexpo’s primary headquarters, our Netherlands facility is strategically integrated into premier transport networks. Here, we manage master cargo transit, sea-to-rail intermodal transfers, and high-security storage for consumer electronics and premium FMCG cargoes.',
    stats: {
      warehouseCap: '124,000 m²',
      weeklyRoutes: 140,
      activePartners: 320,
      processingTime: '< 4 hours'
    },
    keyContacts: ['Daniel de Jong (Operations Director)', 'Sarah van Dijk (Sourcing & Compliance)']
  },
  singapore: {
    id: 'singapore',
    name: 'Singapore Gateway',
    role: 'Asia-Pacific Distribution Hub',
    coordinates: '1.3521° N, 103.8198° E',
    lat: 1.3521,
    lng: 103.8198,
    description: 'Positioned at the crossroads of major trade lanes, our Singapore hub processes rapid electronics consolidation and sub-distribution throughout the ASEAN region. Leveraging highly automated sorting systems, we ensure sub-24-hour turnaround for high-value tech devices.',
    stats: {
      warehouseCap: '85,000 m²',
      weeklyRoutes: 95,
      activePartners: 180,
      processingTime: '< 2 hours'
    },
    keyContacts: ['Chao Min (Logistics Specialist)', 'Marcus Lim (APAC Trade Lead)']
  },
  dubai: {
    id: 'dubai',
    name: 'Dubai Corridor',
    role: 'MENA Transshipment Node',
    coordinates: '25.2048° N, 55.2708° E',
    lat: 25.2048,
    lng: 55.2708,
    description: 'Connecting the Netherlands, Asia, and Africa, our Dubai hub in Jebel Ali Free Zone serves as a vital cross-docking terminal. We specialize in temperature-controlled FMCG distribution, beverages, and regional trade advisory services for Middle Eastern markets.',
    stats: {
      warehouseCap: '92,000 m²',
      weeklyRoutes: 110,
      activePartners: 210,
      processingTime: '< 6 hours'
    },
    keyContacts: ['Amir Al-Mansoori (MENA Regional Manager)', 'Layla Bashar (Compliance Counsel)']
  },
  new_york: {
    id: 'new_york',
    name: 'New York Network',
    role: 'Americas Consolidation Center',
    coordinates: '40.7128° N, -74.0060° E',
    lat: 40.7128,
    lng: -74.0060,
    description: 'Operating closely with major eastern ports and airports, the New York hub coordinates trans-Atlantic import-export clearances, heavy machinery hardware logistics, and fast fulfillment services across North America.',
    stats: {
      warehouseCap: '78,000 m²',
      weeklyRoutes: 75,
      activePartners: 140,
      processingTime: '< 8 hours'
    },
    keyContacts: ['Thomas Wright (Americas Operations)', 'Sarah Jenkins (Sourcing Coordinator)']
  }
};

export const CARGO_SHIPMENTS: CargoItem[] = [
  {
    id: 'LXP-90812',
    trackerCode: 'LX-NLD-SIN-908',
    description: 'Premium Gaming Console Consignment (Batch #41)',
    category: 'Electronics',
    origin: 'Netherlands Hub',
    destination: 'Singapore Gateway (Singapore)',
    status: 'in_transit',
    weight: '14,200 kg',
    volume: '88 m³',
    departureDate: '2026-06-20',
    arrivalDate: '2026-07-08',
    temperatureControlled: false
  },
  {
    id: 'LXP-41032',
    trackerCode: 'LX-SIN-DXB-410',
    description: 'High-Density Semiconductor Components',
    category: 'Hardware',
    origin: 'Singapore Gateway (Singapore)',
    destination: 'Dubai Corridor (UAE)',
    status: 'cargo_processing',
    weight: '3,800 kg',
    volume: '15 m³',
    departureDate: '2026-06-25',
    arrivalDate: '2026-06-30',
    temperatureControlled: true
  },
  {
    id: 'LXP-77121',
    trackerCode: 'LX-NLD-NYC-771',
    description: 'Artisanal Beverages & Specialty FMCG Box',
    category: 'Beverages',
    origin: 'Netherlands Hub',
    destination: 'New York Network (USA)',
    status: 'ready_for_pickup',
    weight: '18,500 kg',
    volume: '110 m³',
    departureDate: '2026-06-12',
    arrivalDate: '2026-06-28',
    temperatureControlled: true
  },
  {
    id: 'LXP-20412',
    trackerCode: 'LX-NYC-NLD-204',
    description: 'Smartphone & Communication Accessories',
    category: 'Electronics',
    origin: 'New York Network (USA)',
    destination: 'Netherlands Hub',
    status: 'delivered',
    weight: '5,600 kg',
    volume: '28 m³',
    departureDate: '2026-06-05',
    arrivalDate: '2026-06-18',
    temperatureControlled: false
  },
  {
    id: 'LXP-88511',
    trackerCode: 'LX-DXB-NLD-885',
    description: 'Specialty Roasted Coffee Beans & Spices',
    category: 'FMCG',
    origin: 'Dubai Corridor (UAE)',
    destination: 'Netherlands Hub',
    status: 'in_transit',
    weight: '22,000 kg',
    volume: '140 m³',
    departureDate: '2026-06-22',
    arrivalDate: '2026-07-04',
    temperatureControlled: true
  }
];

export const TRADE_INSIGHTS: TradeInsight[] = [
  {
    id: 'insight-1',
    title: 'Navigating New Netherlands Customs & Import Rules for Consumer Electronics',
    category: 'Compliance',
    readTime: '6 min read',
    date: 'June 22, 2026',
    summary: 'A detailed breakdown of the upcoming customs certification standard shifts and electronic waste disposal guidelines starting Q3 2026. Learn how Lexpo B.V. ensures complete adherence.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    author: 'Sarah van Dijk (Compliance Lead)'
  },
  {
    id: 'insight-2',
    title: 'Intermodal Maritime Strategy: Optimizing Netherlands to Asia Routes',
    category: 'Logistics',
    readTime: '4 min read',
    date: 'May 18, 2026',
    summary: 'How maritime blockages and fuel sulfur caps are reshaping route optimization. Introducing Lexpo’s multi-port transshipment contingencies via Southern Corridors.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600',
    author: 'Daniel de Jong (Operations Director)'
  },
  {
    id: 'insight-3',
    title: 'FMCG Cross-Border Logistics: Keeping Cold Chains Unbroken',
    category: 'FMCG Sourcing',
    readTime: '5 min read',
    date: 'April 05, 2026',
    summary: 'How smart multi-sensor telemetry inside shipping containers prevents product spoilage. Exploring our refrigerated warehouse advancements in our Jebel Ali Hub.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    author: 'Amir Al-Mansoori (MENA Manager)'
  }
];
