import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Anchor, Menu, X, ArrowUpRight, HelpCircle } from 'lucide-react';
import { ActiveView } from '../types';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

export default function Navbar({ activeView, setActiveView }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  return (
    <header id="lexpo-header" className="sticky top-0 z-50 w-full border-b border-brand-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo / Branding */}
        <div 
          id="lexpo-logo-container" 
          className="flex cursor-pointer items-center gap-2.5"
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-primary text-white font-bold font-mono text-xl tracking-tighter">
            <Anchor className="h-5 w-5 text-brand-accent animate-pulse-slow" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-wider text-brand-primary leading-none">LEXPO B.V.</span>
            <span className="font-mono text-[9px] font-semibold tracking-widest text-brand-accent mt-0.5">GLOBAL SECTOR</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              id={`nav-item-${item.id}`}
              key={item.id}
              onClick={() => {
                setActiveView(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative py-2 text-[11px] font-mono font-bold tracking-widest uppercase transition-colors hover:text-brand-accent text-brand-primary"
            >
              {item.label}
              {activeView === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 h-[3px] w-full bg-brand-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div id="desktop-actions" className="hidden md:flex items-center gap-3">
          <button
            id="btn-nav-contact"
            onClick={() => {
              setActiveView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 rounded-sm bg-brand-accent hover:bg-brand-accent-hover px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-black transition-colors font-mono shadow-sm"
          >
            Contact
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded p-2 text-brand-primary hover:bg-brand-light md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-nav-panel"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 top-20 w-full border-b border-brand-border bg-white px-6 py-6 md:hidden shadow-lg z-40"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left py-2 text-lg font-medium tracking-wide ${
                  activeView === item.id ? 'text-brand-accent pl-2 border-l-2 border-brand-accent' : 'text-brand-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] bg-brand-border my-2" />
            <div className="flex flex-col gap-2">
              <button
                id="mobile-btn-contact"
                onClick={() => {
                  setActiveView('contact');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-center rounded bg-brand-accent py-3 text-xs font-mono font-bold uppercase tracking-widest text-black hover:bg-brand-accent-hover transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
