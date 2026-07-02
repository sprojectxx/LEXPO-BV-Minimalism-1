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

  React.useEffect(() => {
    // Dynamic SEO Titles and Descriptions
    let title = "Lexpo B.V. | Netherlands Wholesale Trading & Brand Distribution";
    let metaDescription = "Lexpo B.V. is a premier Netherlands-based wholesale trading and brand distribution enterprise.";

    switch (activeView) {
      case 'home':
        title = "Lexpo B.V. | Netherlands Wholesale Trading & Brand Distribution";
        metaDescription = "Lexpo B.V. is a premier Netherlands-based wholesale trading and brand distribution enterprise. We synchronize bulk sourcing, brand distribution, and regulatory compliance.";
        break;
      case 'services':
        title = "Services & Solutions | Lexpo B.V.";
        metaDescription = "Explore our commercial wholesale services, including brand manufacturing agreements, secure escrow, regulatory compliance, and temperature-controlled logistics.";
        break;
      case 'portfolio':
        title = "Trade Network Footprint | Lexpo B.V.";
        metaDescription = "Browse our secure trade corridors, regional terminal hubs, and live vessel logistics linking the Netherlands with the APAC and Americas regions.";
        break;
      case 'contact':
        title = "Contact Sourcing Desk | Lexpo B.V.";
        metaDescription = "Submit a sourcing prospectus, coordinate custom clearances, or chat with our live automated compliance advisory desk in the Netherlands.";
        break;
    }

    document.title = title;
    
    // Update meta description dynamically
    const metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (metaDescriptionEl) {
      metaDescriptionEl.setAttribute('content', metaDescription);
    }
  }, [activeView]);

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
