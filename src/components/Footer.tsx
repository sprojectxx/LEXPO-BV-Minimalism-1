import React, { useState } from 'react';
import { Anchor, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { ActiveView } from '../types';

interface FooterProps {
  setActiveView: (view: ActiveView) => void;
}

export default function Footer({ setActiveView }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="lexpo-footer" className="bg-[#0e0e11] text-zinc-300 border-t border-zinc-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Column */}
          <div id="footer-brand-col" className="lg:col-span-2 flex flex-col gap-5">
            <div 
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => {
                setActiveView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded bg-zinc-800 text-white font-bold font-mono">
                <Anchor className="h-4.5 w-4.5 text-brand-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-wider text-white">LEXPO B.V.</span>
                <span className="font-mono text-[8px] font-semibold tracking-widest text-brand-accent">NETHERLANDS LOGISTICS</span>
              </div>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
              Operational excellence in sourcing, logistics, and Netherlands wholesale distribution. Connecting leading consumer tech and FMCG brands with robust, secure, and compliant supply chains.
            </p>

          </div>

          {/* Bulletin Subscription Column */}
          <div id="footer-newsletter-col" className="flex flex-col gap-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">Netherlands Markets Bulletin</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Receive quarterly trade flow updates, compliance bulletins, and major hub notifications.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                id="footer-email-input"
                type="email"
                placeholder="trade@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded bg-zinc-900 border border-zinc-800 p-3 pr-10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-brand-accent font-mono transition-all"
              />
              <button
                id="footer-email-submit"
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-2.5 rounded bg-zinc-800 text-brand-accent hover:bg-brand-accent hover:text-white transition-all flex items-center justify-center"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
            {subscribed && (
              <div className="flex items-center gap-1.5 text-xs text-white font-mono mt-1">
                <CheckCircle className="h-3.5 w-3.5 shrink-0 text-zinc-300" />
                <span>Subscription active. Thank you.</span>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-zinc-900 my-12" />

        {/* Footer Bottom */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between font-mono text-[11px] text-zinc-500">
          <div className="flex flex-col gap-1">
            <span>© {new Date().getFullYear()} Lexpo B.V. All rights reserved. Registered in the Netherlands.</span>
          </div>
          <div className="flex gap-6">
            <button className="hover:text-brand-accent transition-colors">Terms of Trade</button>
            <button className="hover:text-brand-accent transition-colors">Privacy Policy</button>
            <button className="hover:text-brand-accent transition-colors">KYC Protocol</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
