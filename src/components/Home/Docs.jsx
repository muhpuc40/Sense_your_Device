import React from 'react';
import { motion } from 'motion/react';
import { Book, Code2, Cpu, ArrowUpRight } from 'lucide-react';

const docs = [
  { icon: <Cpu    className="text-primary"   />, title: 'Device Setup',     description: 'Learn how to register and configure your hardware devices on the SYD platform.' },
  { icon: <Code2  className="text-secondary" />, title: 'API Integration',  description: 'Detailed documentation for our REST, WebSocket, and MQTT integration methods.'   },
  { icon: <Book   className="text-primary"   />, title: 'Code Examples',    description: 'Ready-to-use snippets for Arduino, ESP32, Raspberry Pi, and Python.'             },
];

const Docs = () => (
  <section id="docs" className="py-24" style={{ backgroundColor: 'var(--bg)' }}>
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>Documentation</h2>
          <p className="max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Everything you need to know about integrating SenseYourDevice into your hardware projects.
          </p>
        </div>
        <button className="flex items-center gap-2 text-primary font-bold hover:underline group">
          View Full Documentation
          <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {docs.map((doc, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i*0.1 }}
                      className="p-8 rounded-3xl transition-all cursor-pointer group"
                      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(67,97,238,0.30)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                 style={{ backgroundColor: 'var(--bg-card-hover)' }}>
              {doc.icon}
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>{doc.title}</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{doc.description}</p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors"
                 style={{ color: 'var(--text-faint)' }}>
              Read Guide <ArrowUpRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Docs;
