import React from 'react';
import { motion } from 'motion/react';
import { PlusCircle, Link as LinkIcon, BarChart3 } from 'lucide-react';

const steps = [
  { icon: <PlusCircle size={28} />, title: 'Create Device',  description: 'Define your device metadata and data schema in our intuitive dashboard. No complex setup required.',  num: '01' },
  { icon: <LinkIcon   size={28} />, title: 'Integrate API',  description: 'Connect your hardware using our simple SDKs or standard MQTT, REST, and WebSocket protocols.',     num: '02' },
  { icon: <BarChart3  size={28} />, title: 'View Live Data', description: 'Monitor real-time data streams and historical analytics with our built-in interactive dashboards.',       num: '03' },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-28 relative" style={{ backgroundColor: 'var(--bg-subtle)' }}>
    {/* subtle top divider */}
    <div className="absolute top-0 left-0 right-0 h-px"
         style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />

    <div className="container">
      <div className="text-center mb-20">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">The Process</span>
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>How It Works</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Get your IoT project from concept to production in three simple steps.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connector */}
        <div className="hidden md:block absolute top-12 left-[22%] right-[22%] h-px -z-0"
             style={{ background: 'linear-gradient(to right, rgba(67,97,238,0.3), rgba(76,201,240,0.3))' }} />

        {steps.map((step, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="relative flex flex-col items-center text-center group">

            {/* Step number */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-widest px-2 py-0.5 rounded-full"
                 style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text-faintest)' }}>
              {step.num}
            </div>

            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mt-4 relative z-10 transition-all duration-300 group-hover:scale-105"
                 style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                 onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(67,97,238,0.10)'; e.currentTarget.style.borderColor = 'rgba(67,97,238,0.35)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(67,97,238,0.15)'; }}
                 onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div className="text-primary">{step.icon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>{step.title}</h3>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px"
         style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
  </section>
);

export default HowItWorks;
