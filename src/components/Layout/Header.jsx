import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../ThemeContext';

const NAV_LINKS = [
  { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { name: 'Features',     href: '#features',     id: 'features'     },
  { name: 'Solutions',    href: '#solutions',    id: 'solutions'    },
  { name: 'Pricing',      href: '#pricing',      id: 'pricing'      },
];

const Header = ({ onOpenAuth }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection,    setActiveSection]    = useState('');
  const sidebarRef = useRef(null);

  /* ── Scroll + active section ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sectionIds = NAV_LINKS.map(l => l.id);
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  /* ── Escape to close ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsMobileMenuOpen(false); };
    if (isMobileMenuOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor:      isScrolled ? 'var(--header-bg)'  : 'transparent',
          backdropFilter:        isScrolled ? 'blur(14px)'         : 'none',
          WebkitBackdropFilter:  isScrolled ? 'blur(14px)'         : 'none',
          boxShadow: isScrolled
            ? isDark ? '0 1px 0 rgba(255,255,255,0.05)' : '0 1px 0 rgba(67,97,238,0.08), 0 4px 24px rgba(67,97,238,0.06)'
            : 'none',
          padding: isScrolled ? '0.65rem 0' : '1.1rem 0',
        }}
      >
        <div className="container flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <div className="p-2 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(67,97,238,0.10)' }}>
              <Cpu className="text-primary transition-transform group-hover:rotate-12" size={20} />
            </div>
            <span className="text-[1.1rem] font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              SenseYour<span className="text-primary">Device</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a key={link.name} href={link.href}
                   className="relative px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary"
                   style={{ color: isActive ? '#4361ee' : 'var(--text-muted)' }}>
                  {link.name}
                  {isActive && (
                    <motion.div layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-primary"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }} />
                  )}
                </a>
              );
            })}

            <div className="flex items-center gap-2 ml-4 pl-4" style={{ borderLeft: '1px solid var(--border)' }}>
              <button onClick={toggleTheme} aria-label="Toggle theme"
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span key={isDark ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                    exit={{    rotate:  90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.18 }}>
                    {isDark ? <Sun size={15} /> : <Moon size={15} />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <button onClick={() => onOpenAuth('signin')}
                      className="px-3 py-1.5 text-sm font-medium transition-colors hover:text-primary rounded-lg"
                      style={{ color: 'var(--text-muted)' }}>
                Sign In
              </button>
              <button onClick={() => onOpenAuth('signup')}
                      className="btn-gradient px-4 py-2 rounded-lg text-sm font-bold">
                Get Started
              </button>
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open navigation menu" aria-expanded={isMobileMenuOpen}
                    className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
                    style={{ color: 'var(--text)', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Sidebar ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <motion.div key="overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }} onClick={closeMobileMenu}
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0,0,0,0.70)', backdropFilter: 'blur(5px)' }}
              aria-hidden="true" />

            <motion.div key="sidebar" ref={sidebarRef}
              role="dialog" aria-modal="true" aria-label="Navigation menu"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250, mass: 0.85 }}
              className="absolute top-0 right-0 bottom-0 flex flex-col shadow-2xl"
              style={{
                width: 'min(300px, 88vw)',
                backgroundColor: 'var(--sidebar-bg)',
                borderLeft: '1px solid var(--border)',
              }}>

              {/* Sidebar header */}
              <div className="flex items-center justify-between px-5 py-4"
                   style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2">
                  <Cpu className="text-primary" size={17} />
                  <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>
                    SenseYour<span className="text-primary">Device</span>
                  </span>
                </div>
                <button onClick={closeMobileMenu} aria-label="Close menu"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                  <X size={16} />
                </button>
              </div>

              {/* Sidebar nav */}
              <nav className="flex-1 overflow-y-auto px-4 pt-5 pb-4 flex flex-col gap-1">
                <p className="text-[10px] font-bold uppercase tracking-widest px-3 mb-2"
                   style={{ color: 'var(--text-faintest)' }}>Navigation</p>

                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a key={link.name} href={link.href}
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055 + 0.08 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all"
                      style={{
                        color: isActive ? '#4361ee' : 'var(--text-muted)',
                        backgroundColor: isActive ? 'rgba(67,97,238,0.08)' : 'transparent',
                      }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />}
                      {link.name}
                    </motion.a>
                  );
                })}

                {/* Account group */}
                <div className="mt-4 pt-4 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest px-3 mb-1"
                     style={{ color: 'var(--text-faintest)' }}>Account</p>

                  <motion.button initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: NAV_LINKS.length * 0.055 + 0.1 }}
                    onClick={() => { closeMobileMenu(); onOpenAuth('signin'); }}
                    className="w-full flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                    Sign In
                  </motion.button>

                  <motion.button initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: NAV_LINKS.length * 0.055 + 0.15 }}
                    onClick={() => { closeMobileMenu(); onOpenAuth('signup'); }}
                    className="btn-gradient w-full py-3 rounded-xl font-bold shadow-lg shadow-primary/20">
                    Get Started Free
                  </motion.button>
                </div>
              </nav>

              {/* Theme toggle footer */}
              <div className="px-5 py-4" style={{ borderTop: '1px solid var(--border)' }}>
                <button onClick={toggleTheme}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(67,97,238,0.30)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  {isDark
                    ? <><Sun size={15} className="text-yellow-400" /> Switch to Light Mode</>
                    : <><Moon size={15} className="text-primary"    /> Switch to Dark Mode</>
                  }
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
