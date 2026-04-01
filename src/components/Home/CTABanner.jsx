import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

const CTABanner = ({ onOpenAuth }) => (
  <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
    {/* Animated grid mesh background */}
    <div className="absolute inset-0 pointer-events-none -z-10"
         style={{
           backgroundImage: `
             linear-gradient(var(--border) 1px, transparent 1px),
             linear-gradient(90deg, var(--border) 1px, transparent 1px)
           `,
           backgroundSize: '48px 48px',
           maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)',
           WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)',
         }} />

    {/* Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none -z-10"
         style={{ backgroundColor: 'var(--glow-a)' }} />

    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-primary text-xs font-bold uppercase tracking-wider mb-8"
             style={{ backgroundColor: 'rgba(67,97,238,0.10)', borderColor: 'rgba(67,97,238,0.25)' }}>
          <Zap size={12} fill="currentColor" />
          Start for free, no credit card required
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
            style={{ color: 'var(--text)' }}>
          Ready to connect your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            first device?
          </span>
        </h2>

        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          Join thousands of hardware developers who chose SenseYourDevice to power their IoT projects.
          Set up in minutes, scale to millions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenAuth('signup')}
            className="btn-gradient px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/25 text-base"
          >
            Get Started Free <ArrowRight size={20} />
          </button>
          <a href="#docs"
             className="px-8 py-4 rounded-xl font-bold text-base transition-all"
             style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text)' }}
             onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(67,97,238,0.40)'}
             onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            Read the Docs
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: 'var(--text-faint)' }}>
          {['Free tier forever', 'No credit card needed', 'Open-source SDKs', 'MQTT + WebSocket support'].map((t, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
