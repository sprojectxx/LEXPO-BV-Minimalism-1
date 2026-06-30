import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, Search, Filter, Ship, Box, Calendar, 
  Thermometer, HelpCircle, Eye, Info, CheckCircle2, MapPin, 
  ChevronRight, Compass, Newspaper, ArrowRight, ArrowUpRight, X
} from 'lucide-react';
import { CargoItem, TradeInsight } from '../types';
import { CARGO_SHIPMENTS, TRADE_INSIGHTS } from '../data';

export default function PortfolioView() {
  // Articles Modal States
  const [activeArticle, setActiveArticle] = useState<TradeInsight | null>(null);

  return (
    <div id="portfolio-view-container" className="flex flex-col">
      
      {/* Portfolio Hero Section */}
      <section id="portfolio-hero" className="relative bg-[#0d0e12] text-white pt-24 pb-28 border-b border-zinc-800">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600" 
            alt="Port Cranes" 
            className="w-full h-full object-cover filter contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-brand-accent uppercase">
                // Netherlands Footprint &amp; Trade Matrix
              </span>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl uppercase leading-none mt-4">
                Our Trade Network &amp; Market Expertise
              </h1>
              <p className="mt-6 text-sm leading-relaxed text-zinc-300 font-sans max-w-xl">
                Lexpo B.V. commands established trade corridors linking the Netherlands, Asia, and the Americas. Explore our operational footprint, check real-time vessel and container logistics, and browse our trade advisory logs.
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Trade Partnerships</span>
                <div className="text-3xl font-extrabold text-white mt-1">120+</div>
                <p className="text-[10px] text-zinc-400 mt-1">Strategic trade relationships managed directly.</p>
              </div>
              <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Throughput Volume</span>
                <div className="text-3xl font-extrabold text-white mt-1">14M+</div>
                <p className="text-[10px] text-zinc-400 mt-1">Wholesale electronic and FMCG units cleared.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Sectors */}
      <section id="portfolio-sectors" className="py-24 bg-white border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16 flex flex-col gap-3">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary uppercase">
              Core Sourcing Sectors
            </h2>
            <p className="text-brand-muted text-sm font-sans">
              We manage continuous supplier contracts and secure shipping corridors across five key industry categories.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 font-sans">
            {[
              { id: 'sec-1', title: 'Consumer Electronics', desc: 'Authorized wholesale pipelines for next-gen gaming consoles and high-value tech devices.' },
              { id: 'sec-2', title: 'FMCG & Beverages', desc: 'Secure temperature-sensitive transport for premium Netherlands spirits and fast-moving foods.' },
              { id: 'sec-3', title: 'Retail Distribution', desc: 'Consolidated freight lanes for regional commercial department stores and online merchants.' },
              { id: 'sec-4', title: 'Wholesale Networks', desc: 'Bulk supply matching and credit lanes for multi-regional logistics partners and warehouses.' },
              { id: 'sec-5', title: 'Import/Export Escrow', desc: 'Comprehensive trade compliance, duty calculation, excise payment, and physical compliance representation.' }
            ].map((sector, i) => (
              <div key={sector.id} className="border-t-2 border-brand-primary pt-6 flex flex-col justify-between h-[200px]">
                <div>
                  <span className="font-mono text-xs text-brand-accent font-bold">0{i+1} //</span>
                  <h4 className="font-display font-bold text-sm text-brand-primary uppercase mt-2">{sector.title}</h4>
                  <p className="mt-2 text-xs text-brand-muted leading-relaxed">{sector.desc}</p>
                </div>
                <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">Active Division</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Capabilities */}
      <section id="capabilities" className="py-24 bg-white border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            
            <div className="lg:col-span-4 flex flex-col gap-3">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary uppercase">
                Business Capabilities
              </h2>
              <p className="text-brand-muted text-xs leading-relaxed font-sans">
                Our infrastructure is built for continuous enterprise transshipping operations.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {/* Black Card Cap */}
              <div className="bg-[#0b0c10] text-white p-6 rounded border border-zinc-800 flex flex-col justify-between h-[180px]">
                <div>
                  <span className="text-brand-accent font-bold">// SECURE ESCROW</span>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white mt-1.5">Authorized Sourcing</h4>
                  <p className="mt-1.5 text-zinc-400 leading-relaxed text-[11px]">Strict KYC, factory anti-diversion vetting, and direct banking letters of credit handling.</p>
                </div>
                <span className="text-zinc-500 text-[10px] uppercase">Netherlands Desk Approved</span>
              </div>

              {[
                { title: 'Inventory Management', desc: 'Secure custom inventory structures with constant physical serial scans and temperature monitoring logs.' },
                { title: 'Logistical Integrity', desc: 'Guaranteed shipping containers with tamper-evident tracking seals and custom maritime routing.' },
                { title: 'Tax & Excise Deferrals', desc: 'Specialized Netherlands fiscal representation. Suspend and defer VAT payments during regional transit.' }
              ].map((cap, i) => (
                <div key={i} className="bg-zinc-50 border border-brand-border p-6 rounded flex flex-col justify-between h-[180px] text-brand-primary">
                  <div>
                    <span className="text-brand-accent font-bold">// CAPABILITY 0{i+2}</span>
                    <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-primary mt-1.5">{cap.title}</h4>
                    <p className="mt-1.5 text-brand-muted leading-relaxed text-[11px] font-sans">{cap.desc}</p>
                  </div>
                  <span className="text-zinc-400 text-[10px] uppercase font-sans">SLA Standard Compliance</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Operational Highlights */}
      <section id="operational-highlights" className="bg-[#0b0c10] text-white py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 font-mono text-center">
            <div>
              <div className="text-3xl font-extrabold text-brand-accent">45+</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">2,400+</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">Trade Routes Mapping</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">150+</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">Brands Managed</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-brand-accent">900+</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">Partner Wholesalers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Insights (Blog/Compliance bulletins) */}
      <section id="trade-insights" className="py-24 bg-white border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 max-w-2xl mb-16">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary uppercase">
              Lexpo Trade Insights
            </h2>
            <p className="text-brand-muted text-sm font-sans">
              Stay updated with essential regulatory updates, Dutch and European semiconductor freight statistics, and custom compliance briefs written by our desk leads.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TRADE_INSIGHTS.map((insight) => (
              <article 
                id={`insight-card-${insight.id}`}
                key={insight.id} 
                className="flex flex-col justify-between border border-brand-border rounded-lg overflow-hidden bg-zinc-50/20 shadow-sm"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-zinc-100">
                    <img 
                      src={insight.image} 
                      alt={insight.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 font-sans">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase font-semibold">
                      <span>{insight.category}</span>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-brand-primary uppercase mt-3 leading-snug">
                      {insight.title}
                    </h3>
                    <p className="mt-2 text-xs text-brand-muted leading-relaxed line-clamp-3">
                      {insight.summary}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 font-mono flex justify-between items-center border-t border-zinc-100">
                  <span className="text-[9px] text-zinc-500">By: {insight.author.split(' ')[0]}</span>
                  <button
                    onClick={() => setActiveArticle(insight)}
                    className="text-[10px] font-bold text-brand-accent uppercase hover:text-brand-accent-hover tracking-wider flex items-center gap-1"
                  >
                    Read Article
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>



      {/* Article Detail Modal */}
      {activeArticle && (
        <div id="article-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg border border-brand-border w-full max-w-xl overflow-hidden shadow-2xl font-sans text-xs"
          >
            {/* Image banner */}
            <div className="relative h-48 bg-zinc-200 overflow-hidden">
              <img 
                src={activeArticle.image} 
                alt={activeArticle.title} 
                className="w-full h-full object-cover filter contrast-110"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setActiveArticle(null)}
                className="absolute right-4 top-4 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-400 uppercase font-semibold">
                <span>{activeArticle.category}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h3 className="font-display text-lg font-bold text-brand-primary uppercase mt-1 leading-snug">
                {activeArticle.title}
              </h3>

              <div className="text-zinc-600 leading-relaxed font-sans space-y-3">
                <p className="font-semibold text-brand-primary">{activeArticle.summary}</p>
                <p>
                  As cross-border supply lines experience continuous regulatory shift, trading entities must establish strict physical and fiscal representation. Within the Netherlands customs framework, Lexpo B.V. acts as an authorized custom clearance advisor, ensuring that electronic hardware, gaming accessories, and retail goods are screened, cataloged, and cleared at speed.
                </p>
                <p>
                  Our research highlights that intermodal cargo routing, coordinated with synchronized transshipment nodes (Singapore, Dubai, New York), reduces aggregate holding tariffs by up to 14.5% annually.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-brand-light flex items-center justify-center font-display font-bold text-xs text-brand-primary">
                    {activeArticle.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-primary text-xs">{activeArticle.author}</div>
                    <div className="text-[10px] text-zinc-400 font-mono">Logistics Desk Lead</div>
                  </div>
                </div>
                <span className="font-mono text-[9px] bg-brand-light text-brand-primary font-bold px-2 py-0.5 rounded uppercase">
                  Lexpo Verified
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-zinc-50 px-6 py-4 border-t border-zinc-200 text-right">
              <button 
                onClick={() => setActiveArticle(null)}
                className="rounded bg-brand-primary text-white hover:bg-zinc-800 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider"
              >
                Close Article
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
