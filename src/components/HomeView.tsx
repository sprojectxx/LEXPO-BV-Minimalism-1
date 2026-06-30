import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Shield, Globe2, Zap, Landmark, Smartphone,
  Tv, Gamepad2, PackageCheck, Ship, Box, Layers, HelpCircle, Eye
} from 'lucide-react';
import { ActiveView } from '../types';

interface HomeViewProps {
  setActiveView: (view: ActiveView) => void;
}

export default function HomeView({ setActiveView }: HomeViewProps) {
  const [hoveredTradeCard, setHoveredTradeCard] = useState<number | null>(null);

  const trustMetrics = [
    { value: 'Verified', label: 'Supply Sourcing', desc: 'Standard supply agreements' },
    { value: 'Netherlands', label: 'Coverage Area', desc: 'Standard Benelux transport network' },
    { value: 'Managed', label: 'Operational Flow', desc: 'Standard terminal presence' },
    { value: 'Scheduled', label: 'Handling Process', desc: 'Standard transit dispatch' }
  ];

  const tradeSectors = [
    {
      id: 1,
      title: 'Consumer Electronics',
      desc: 'Master distribution of gaming consoles, premium smart devices, high-end audio setups, and visual equipment directly from authorized manufacturing pipelines.',
      icon: Tv,
      img: '/src/assets/images/consumer_electronics_grid_1782840622146.jpg',
      specs: ['Standard Compliant', 'CE Audited', 'Serial Number Tracking']
    },
    {
      id: 2,
      title: 'Mobile & Accessories',
      desc: 'Rapid wholesale delivery of flagship smartphones, tablets, premium protective casings, charging grids, and genuine replacement displays.',
      icon: Smartphone,
      img: '/src/assets/images/mobile_accessories_grid_1782841053699.png',
      specs: ['Lithium-Safe Transit', 'OEM Sourced', 'Standard Transit']
    },
    {
      id: 3,
      title: 'Gaming & PC Hardware',
      desc: 'High-availability sourcing of advanced graphics cards, processors, storage units, cooling systems, and specialized esports components.',
      icon: Gamepad2,
      img: '/src/assets/images/gaming_hardware_grid.png',
      specs: ['Secured Warehouses', 'Direct-from-Brand', 'Anti-Scalper Control']
    },
    {
      id: 4,
      title: 'FMCG & Premium Beverages',
      desc: 'Supply chain management for Netherlands premium beers, specialty beverages, fine confectioneries, and high-demand shelf-stable consumer packaged goods.',
      icon: Ship,
      img: '/src/assets/images/beverages_grid.png',
      specs: ['Climate-Controlled', 'Import Compliant', 'Standard Inspected']
    }
  ];

  const operationSteps = [
    {
      step: '01',
      title: 'Netherlands Sourcing',
      desc: 'We source premium trade categories directly from approved manufacturers and partners. Every contract undergoes standard verification and compliance screening.'
    },
    {
      step: '02',
      title: 'Trusted Logistics',
      desc: 'We coordinate with trusted logistics partners to ensure secure warehousing, rigorous physical inspections, and seamless transport across all transit phases.'
    },
    {
      step: '03',
      title: 'Precision Delivery',
      desc: 'Leveraging intermodal freight solutions (sea, air, rail), we deliver fully cleared, insured consignments to regional distributors and retail channels on-time.'
    }
  ];

  const competitiveEdge = [
    {
      icon: Zap,
      title: 'Rapid SLA Response',
      desc: 'Full trading inquiries receive binding quotes and routing feasibility plans within 2 hours from our operations team.'
    },
    {
      icon: Globe2,
      title: 'Integrated Hub Network',
      desc: 'Major Netherlands-anchored terminal nodes coordinating continuous logistics, regulatory clearances, and localized compliance.'
    },
    {
      icon: Shield,
      title: 'Netherlands Compliance Assurance',
      desc: 'Every shipment meets rigorous Netherlands standards, quality certifications, and complete regulatory declarations.'
    },
    {
      icon: Landmark,
      title: 'Secure Capital Channels',
      desc: 'Strong institutional banking partnerships and letters of credit (L/C) handling for high-volume transactions.'
    }
  ];

  return (
    <div id="home-view-container" className="flex flex-col">
      {/* Hero Section */}
      <section
        id="home-hero"
        className="relative bg-[#0b0c10] text-white pt-24 pb-32 overflow-hidden border-b border-zinc-800"
      >
        {/* Background Shipping image with pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1600"
            alt="Maritime Port"
            className="w-full h-full object-cover filter contrast-125 brightness-75"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/40 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-zinc-300 mb-6 uppercase">
              <span className="flex h-1.5 w-1.5 rounded-full bg-zinc-400 animate-pulse" />
              Netherlands Terminal Hub // Compliance First
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl uppercase leading-none">
              Enterprise Precision.<br />
              <span className="text-zinc-400">Netherlands Trade.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-zinc-300 font-sans max-w-2xl">
              Lexpo B.V. is a premier Netherlands-based trading and distribution enterprise. We synchronize brand distribution, wholesale logistics, and regulatory compliance with clockwork accuracy across our entire partner network.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                id="hero-contact-sales"
                onClick={() => setActiveView('contact')}
                className="rounded-sm bg-brand-accent hover:bg-brand-accent-hover px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-colors shadow-md flex items-center gap-2 font-mono"
              >
                Contact Page
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>
              <button
                id="hero-explore-services"
                onClick={() => setActiveView('services')}
                className="rounded-sm border border-zinc-700 hover:border-brand-accent px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all bg-transparent hover:text-brand-accent font-mono"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <section id="trust-metrics" className="bg-white border-b border-brand-border py-12 relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {trustMetrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-accent uppercase">
                  {metric.value}
                </span>
                <span className="mt-1 font-semibold text-sm text-brand-primary font-display">{metric.label}</span>
                <span className="text-xs text-brand-muted mt-0.5">{metric.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Profile / Netherlands Reliability Section */}
      <section id="corporate-profile" className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

            {/* Left Col - text */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary sm:text-4xl uppercase">
                A Netherlands-Based Partner Built on Operational Excellence.
              </h2>
              <p className="text-brand-muted leading-relaxed font-sans text-base">
                Lexpo B.V. combines extensive experience in Netherlands trade coordination, supply chain logistics, and structured distribution networks to support enterprise partners.
              </p>
              <p className="text-brand-muted leading-relaxed font-sans text-base">
                Whether streamlining cargo routing for Netherlands distribution or securing continuous transport lanes for wholesale commodities, we act as an ironclad extension of your operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-sans">
                <div className="flex items-start gap-2">
                  <PackageCheck className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-brand-primary">Quality Assurance</h5>
                    <p className="text-xs text-brand-muted mt-0.5">Standardized monitoring and professional care across all transit phases.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Box className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-brand-primary">Structured Distribution</h5>
                    <p className="text-xs text-brand-muted mt-0.5">Efficient cargo dispatch and reliable routing across Netherlands.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col - Warehouse Image with Overlapping Coordinate Badge */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-xl aspect-16/10">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                  alt="Netherlands Warehouse Hub"
                  className="w-full h-full object-cover brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Absolute Coordinate Badge */}
              <div className="absolute -bottom-6 -right-2 md:right-6 bg-[#0a0a0a] text-white p-5 border border-zinc-800 shadow-2xl rounded max-w-xs font-mono">
                <div className="text-[9px] uppercase tracking-widest text-brand-accent font-bold">
                  Active Asset Node
                </div>
                <div className="text-sm font-bold tracking-tight text-white mt-1">
                  NETHERLANDS HUB
                </div>
                <div className="h-[1px] bg-zinc-800 my-2.5" />
                <div className="text-[10px] text-zinc-500 flex justify-between">
                  <span>Operational Status:</span>
                  <span className="text-white">Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bento Grid: What We Trade */}
      <section id="what-we-trade" className="py-24 bg-white border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary sm:text-4xl uppercase">
              What We Trade
            </h2>
            <p className="text-brand-muted text-sm font-sans">
              Discover our primary high-volume business divisions. Hover over any sector card to reveal distribution technical specs and source-pipeline information.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tradeSectors.map((sector, idx) => {
              const Icon = sector.icon;
              const isHovered = hoveredTradeCard === sector.id;

              return (
                <motion.div
                  id={`trade-sector-${sector.id}`}
                  key={sector.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-lg border border-zinc-800/80 h-[420px] cursor-pointer flex flex-col justify-between p-6 bg-zinc-950 shadow-xl group"
                  onMouseEnter={() => setHoveredTradeCard(sector.id)}
                  onMouseLeave={() => setHoveredTradeCard(null)}
                >
                  {/* Full color rich background image that zooms on card hover */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={sector.img}
                      alt={sector.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* High contrast custom gradient overlay to make text pop */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-black/30 transition-all duration-300 group-hover:from-black/100 group-hover:via-black/70" />

                  {/* Card Content */}
                  <div className="relative z-20 flex flex-col h-full justify-between text-white">
                    <div>
                      {/* Icon with custom glowing glass container */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="p-2.5 rounded bg-white/10 backdrop-blur-md text-white border border-white/20 transition-all duration-300 group-hover:bg-brand-accent/20 group-hover:text-brand-accent group-hover:border-brand-accent/40 shadow-inner">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Header */}
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white group-hover:text-brand-accent transition-colors duration-300">
                        {sector.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-xs leading-relaxed text-zinc-200 font-sans font-medium">
                        {sector.desc}
                      </p>
                    </div>

                    {/* Specs / Badges */}
                    <div className="mt-4">
                      <div className="h-[1px] bg-white/15 my-3" />
                      <div className="flex flex-wrap gap-1.5">
                        {sector.specs.map((spec, sidx) => (
                          <span
                            key={sidx}
                            className="font-mono text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-sm bg-white/10 backdrop-blur-sm text-white border border-white/10 transition-all duration-300 group-hover:border-brand-accent/20 group-hover:bg-brand-accent/10"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section id="how-we-operate" className="py-24 bg-zinc-50 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16 flex flex-col gap-3">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary uppercase">
              How We Operate
            </h2>
            <p className="text-brand-muted text-sm font-sans">
              We execute Netherlands-based wholesale trading in three strict stages to maximize safety, regulatory compliance, and delivery predictability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {operationSteps.map((step, i) => (
              <div
                id={`operate-step-${step.step}`}
                key={i}
                className="bg-white rounded-lg border border-brand-border p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-4xl font-extrabold tracking-tighter text-brand-accent/20 block mb-4">
                    {step.step}
                  </span>
                  <h4 className="font-display text-lg font-bold text-brand-primary uppercase">
                    {step.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-brand-muted font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="h-1 bg-zinc-100 rounded-full mt-6 overflow-hidden">
                  <div className="h-full bg-brand-accent w-1/3" style={{ width: `${(i + 1) * 33.3}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lexpo (Competitive Edge) */}
      <section id="why-choose-lexpo" className="py-24 bg-zinc-50 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary uppercase">
                The Competitive Edge
              </h2>
              <p className="text-brand-muted text-sm font-sans leading-relaxed">
                Our physical infrastructure, regulatory expertise, and financial liquidity ensure reliable bulk wholesale trading operations.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">
              {competitiveEdge.map((edge, index) => {
                const Icon = edge.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-2 bg-white rounded border border-brand-border text-brand-accent shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-brand-primary uppercase tracking-wide">
                        {edge.title}
                      </h4>
                      <p className="mt-1 text-xs text-brand-muted leading-relaxed">
                        {edge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
