import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ActiveView } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');

  // Render correct view with elegant slide-up/fade animations
  const renderView = () => {
    switch (activeView) {
      case 'home':
        return (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <HomeView setActiveView={setActiveView} />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ServicesView setActiveView={setActiveView} />
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div
            key="portfolio-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <PortfolioView />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ContactView />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="lexpo-app-root" className="min-h-screen flex flex-col bg-zinc-50 select-none">
      
      {/* Premium Navigation Header */}
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView} 
      />

      {/* Main View Transition Stage */}
      <main id="lexpo-main-stage" className="flex-grow">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>

      {/* Modern Global Trade Footer */}
      <Footer setActiveView={setActiveView} />

    </div>
  );
}
