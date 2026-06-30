import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe2, CheckCircle2, Quote, Scale, 
  ShieldAlert, FileSpreadsheet, Anchor, FileText
} from 'lucide-react';
import { ActiveView } from '../types';

interface ServicesViewProps {
  setActiveView: (view: ActiveView) => void;
}

export default function ServicesView({ setActiveView }: ServicesViewProps) {

  return (
    <div id="services-view-container" className="flex flex-col">
      {/* Services Hero Section */}
      <section id="services-hero" className="relative bg-[#0d0e12] text-white pt-24 pb-28 border-b border-zinc-800">
        {/* Dotted Grid blueprint pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 z-0" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase">
              // Professional Solutions Catalog
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl uppercase leading-none mt-4">
              Netherlands Trade &amp; Distribution Services
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300 font-sans">
              Lexpo B.V. provides an integrated suite of commercial wholesale trading services. From strategic manufacturing agreements to secure trade compliance and temperature-regulated logistics, we secure every stage of your transshipment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Index // 01-06 Bento Grid */}
      <section id="services-grid" className="py-24 bg-white border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Card 1: Global Sourcing */}
            <div id="service-card-01" className="border border-brand-border rounded-lg p-8 flex flex-col justify-between bg-zinc-50/50 min-h-[300px]">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2 bg-white rounded border border-zinc-200 text-brand-accent">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-bold">// SERVICE 01</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-primary uppercase">Strategic Sourcing</h3>
                <p className="mt-3 text-xs leading-relaxed text-brand-muted font-sans">
                  Direct purchasing representation with hardware and tech OEMs. We manage master allocations, secure corporate pricing, and bypass third-party brokers to procure authentic goods safely into the Netherlands.
                </p>
              </div>
              <div className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 border-t border-zinc-200 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                Direct OEM Sourcing Agreements
              </div>
            </div>

            {/* Card 2: Wholesale Distribution (Black theme) */}
            <div id="service-card-02" className="bg-[#0e0e11] text-white rounded-lg p-8 flex flex-col justify-between min-h-[300px] border border-zinc-800 shadow-lg">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2 bg-zinc-800 rounded text-zinc-100">
                    <Anchor className="h-5 w-5 animate-pulse-slow" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500 font-bold">// SERVICE 02</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase">Wholesale Distribution</h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400 font-sans">
                  High-capacity trade supply networks across the Netherlands, MENA, and APAC. We sustain robust rolling inventory structures to fulfill high-volume orders for regional retailers and distributors with zero lead-times.
                </p>
              </div>
              <div className="mt-4 text-[10px] font-mono text-zinc-300 uppercase tracking-widest flex items-center gap-1.5 border-t border-zinc-800 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Inter-Hub Rolling Inventory
              </div>
            </div>

            {/* Card 3: Consumer Electronics Logistics */}
            <div id="service-card-03" className="border border-brand-border rounded-lg p-8 flex flex-col justify-between bg-zinc-50/50 min-h-[300px]">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2 bg-white rounded border border-zinc-200 text-brand-accent">
                    <Scale className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-bold">// SERVICE 03</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-primary uppercase">Consumer Electronics</h3>
                <p className="mt-3 text-xs leading-relaxed text-brand-muted font-sans">
                  Specialized logistics protocols for premium devices, OLED monitors, and chip components. Features anti-theft tracking, itemized serial-registry logging, and direct climate-safe container sealing.
                </p>
              </div>
              <div className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 border-t border-zinc-200 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                Strict Serial-Registry Escrow
              </div>
            </div>

            {/* Card 4: FMCG Logistics with background container look */}
            <div id="service-card-04" className="border border-brand-border rounded-lg p-8 flex flex-col justify-between min-h-[300px] bg-zinc-100/40 relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400" 
                  alt="Warehouse grid" 
                  className="w-full h-full object-cover filter"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2 bg-white rounded border border-zinc-200 text-brand-accent">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-bold">// SERVICE 04</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-primary uppercase">FMCG Distribution</h3>
                <p className="mt-3 text-xs leading-relaxed text-brand-muted font-sans">
                  Efficient clearance and cold-chain supply coordination for beverages, confectioneries, and packaged food products. We secure specialized Netherlands excise permits, custom health certificates, and phytosanitary filings.
                </p>
              </div>
              <div className="relative z-10 mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 border-t border-zinc-200 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                Excise &amp; Food-Safety Clearance
              </div>
            </div>

            {/* Card 5: Supply Chain Integrity Checklist */}
            <div id="service-card-05" className="border border-brand-border rounded-lg p-8 flex flex-col justify-between bg-zinc-50/50 min-h-[300px]">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-2 bg-white rounded border border-zinc-200 text-brand-accent">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-bold">// SERVICE 05</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-primary uppercase">Supply Chain Integrity</h3>
                <p className="mt-3 text-xs leading-relaxed text-brand-muted font-sans">
                  Comprehensive risk mitigation protocol to maintain brand equity and prevent unauthorized leaks.
                </p>
                <ul className="mt-4 space-y-1.5 text-[11px] text-brand-muted font-sans">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-brand-accent" /> Anti-diversion routing locks
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-brand-accent" /> Serial-registry batch verification
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-brand-accent" /> Tamper-evident secure storage seals
                  </li>
                </ul>
              </div>
              <div className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 border-t border-zinc-200 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                Anti-Counterfeiting Verified
              </div>
            </div>

            {/* Card 6: Trade Advisory / Quote */}
            <div id="service-card-06" className="border border-brand-border rounded-lg p-8 flex flex-col justify-between bg-zinc-50/50 min-h-[300px]">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2 bg-white rounded border border-zinc-200 text-brand-accent">
                    <Quote className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-bold">// SERVICE 06</span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-primary uppercase">Trade Advisory</h3>
                <p className="text-xs leading-relaxed text-zinc-600 font-serif italic mt-3">
                  "Netherlands fiscal representation is the cornerstone of seamless entry into the Netherlands. Lexpo acts not just as our transport agent, but as our registered tax representative, deferring immediate VAT liabilities while expediting cargo clearing."
                </p>
              </div>
              <div className="mt-4 text-[10px] font-mono text-zinc-400 tracking-tight flex justify-between border-t border-zinc-200 pt-3">
                <span>— Sourcing Advisory Bulletin</span>
                <span className="text-brand-accent font-bold">Netherlands Desk</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Lexpo Advantage Section */}
      <section id="lexpo-advantage-section" className="py-24 bg-zinc-50 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary uppercase sm:text-4xl leading-none">
                The Lexpo Advantage
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed font-sans mt-2">
                We combine regional knowledge with international transport logistics to construct resilient trading channels.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">
              <div className="bg-white p-6 rounded border border-brand-border shadow-sm">
                <h4 className="font-display font-semibold text-sm text-brand-primary uppercase tracking-wider">
                  01. Worldwide Logistics Reach
                </h4>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  Consolidated shipping pipelines connecting North America, Middle East, and Asia back directly into the heart of our Netherlands gateway.
                </p>
              </div>
              <div className="bg-white p-6 rounded border border-brand-border shadow-sm">
                <h4 className="font-display font-semibold text-sm text-brand-primary uppercase tracking-wider">
                  02. Rapid Duty Clearances
                </h4>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  Our optimized logistics hub status speeds up cargo processing down to less than four hours.
                </p>
              </div>
              <div className="bg-white p-6 rounded border border-brand-border shadow-sm">
                <h4 className="font-display font-semibold text-sm text-brand-primary uppercase tracking-wider">
                  03. Clear Communications
                </h4>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  A designated multilingual trading officer managing your account with 2-hour SLA response protocols.
                </p>
              </div>
              <div className="bg-white p-6 rounded border border-brand-border shadow-sm">
                <h4 className="font-display font-semibold text-sm text-brand-primary uppercase tracking-wider">
                  04. Enduring Partnerships
                </h4>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  Multi-year brand and wholesaling arrangements built entirely on transparency and absolute compliance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
