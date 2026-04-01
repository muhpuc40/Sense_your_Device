import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Stats from './components/Home/Stats';
import HowItWorks from './components/Home/HowItWorks';
import Features from './components/Home/Features';
import Solutions from './components/Home/Solutions';
import About from './components/Home/About';
import Pricing from './components/Home/Pricing';
import Docs from './components/Home/Docs';
import CTABanner from './components/Home/CTABanner';
import AuthModal from './components/Auth/AuthModal';
import ScrollToTop from './components/Common/ScrollToTop';

const App = () => {
  const { isDark } = useTheme();
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signin' });

  const openAuth  = (mode = 'signin') => setAuthModal({ isOpen: true, mode });
  const closeAuth = () => setAuthModal(prev => ({ ...prev, isOpen: false }));

  useEffect(() => {
    document.body.style.overflow = authModal.isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [authModal.isOpen]);

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary overflow-x-hidden transition-colors duration-300"
         style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <Header onOpenAuth={openAuth} />

      <main>
        <Hero        onOpenAuth={openAuth} />
        <Stats       />
        <HowItWorks  />
        <Features    />
        <Solutions   />
        <About       />
        <Pricing     />
        <Docs        />
        <CTABanner   onOpenAuth={openAuth} />
      </main>

      <Footer />

      <AuthModal isOpen={authModal.isOpen} onClose={closeAuth} initialMode={authModal.mode} />
      <ScrollToTop />
    </div>
  );
};

export default App;
