import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { value: 12000, suffix: '+', label: 'Devices Connected'  },
  { value: 99.9,  suffix: '%', label: 'Uptime Guarantee',  decimal: true },
  { value: 500,   suffix: '+', label: 'Active Developers'  },
  { value: 10,    suffix: 'ms',label: 'Avg Latency'        },
];

function useCounter(target, duration = 1800, start = false, decimal = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(decimal ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, decimal]);
  return count;
}

const StatCard = ({ value, suffix, label, decimal, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useCounter(value, 1600 + index * 100, inView, decimal);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center text-center px-6 py-8 rounded-2xl relative overflow-hidden group"
      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      {/* hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
           style={{ background: 'radial-gradient(circle at 50% 0%, rgba(67,97,238,0.08) 0%, transparent 70%)' }} />

      <div className="text-4xl lg:text-5xl font-bold mb-2 tabular-nums"
           style={{ color: 'var(--text)', fontVariantNumeric: 'tabular-nums' }}>
        {decimal ? count.toFixed(1) : count.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </motion.div>
  );
};

const Stats = () => (
  <section className="py-16" style={{ backgroundColor: 'var(--bg)' }}>
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
