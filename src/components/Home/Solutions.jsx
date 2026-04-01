import React from 'react';
import { motion } from 'motion/react';
import { Activity, Settings, Layers, Lock } from 'lucide-react';

const solutions = [
  { icon: <Activity className="text-primary" />,   title: 'Smart Monitoring',     description: 'Advanced health checks and status monitoring for distributed device fleets.' },
  { icon: <Settings className="text-secondary" />, title: 'Automation Support',    description: 'Trigger actions and workflows based on real-time sensor data thresholds.'     },
  { icon: <Layers   className="text-primary" />,   title: 'Scalable Management',  description: 'Manage thousands of devices with ease using our hierarchical tagging system.' },
  { icon: <Lock     className="text-secondary" />, title: 'Secure Handling',      description: 'End-to-end encryption and granular access control for your sensitive data.'    },
];

const bullets = ['99.9% Uptime Guarantee', 'Global Edge Network', 'Custom Protocol Support'];

const Solutions = () => (
  <section id="solutions" className="py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--text)' }}>
            IoT Solutions for <br />Modern Challenges
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            SenseYourDevice provides a robust foundation for any IoT application, from industrial monitoring to smart home automation.
          </p>
          <div className="space-y-4">
            {bullets.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(67,97,238,0.20)' }}>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ delay: i*0.1 }}
                        className="p-8 rounded-2xl transition-all group"
                        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}>
              <div className="mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Solutions;
