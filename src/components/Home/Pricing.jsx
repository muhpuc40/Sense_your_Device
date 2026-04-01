import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  { name: 'Free',   price: '0',  description: 'Perfect for hobbyists and small projects.',    features: ['1 Active Device','100k Data Points/mo','7-day Data Retention','Community Support'] },
  { name: 'Pro 10', price: '10', description: 'For growing IoT applications.',                features: ['10 Active Devices','1M Data Points/mo','30-day Data Retention','Priority Email Support','API Access'], popular: true },
  { name: 'Pro 20', price: '20', description: 'Advanced features for professionals.',         features: ['25 Active Devices','5M Data Points/mo','90-day Data Retention','24/7 Support','Custom Dashboards'] },
];

const Pricing = () => (
  <section id="pricing" className="py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>Simple, Transparent Pricing</h2>
        <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>Choose the plan that fits your project. Scale as you grow.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i*0.1 }}
                      className={`relative p-8 rounded-3xl transition-all duration-300 ${plan.popular ? 'md:scale-105 z-10' : ''}`}
                      style={{
                        backgroundColor: plan.popular ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                        border: `1px solid ${plan.popular ? '#4361ee' : 'var(--border)'}`,
                        boxShadow: plan.popular ? '0 20px 60px -10px rgba(67,97,238,0.20)' : 'none',
                      }}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold" style={{ color: 'var(--text)' }}>${plan.price}</span>
              <span style={{ color: 'var(--text-faint)' }}>/month</span>
            </div>
            <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>{plan.description}</p>

            <div className="space-y-4 mb-8">
              {plan.features.map((feat, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: plan.popular ? 'rgba(67,97,238,0.20)' : 'var(--bg-card-hover)', color: plan.popular ? '#4361ee' : 'var(--text-faint)' }}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{feat}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'btn-gradient shadow-lg shadow-primary/20' : ''}`}
                    style={!plan.popular ? { backgroundColor: 'var(--bg-card-hover)', border: '1px solid var(--border)', color: 'var(--text)' } : {}}>
              {plan.name === 'Free' ? 'Get Started' : 'Upgrade Now'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
