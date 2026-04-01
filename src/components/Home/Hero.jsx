import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Wifi } from 'lucide-react';

const DEVICES = [
  { id: 'SYD-A1', label: 'Temp Sensor',   value: '24.8°C', color: '#4361ee', anim: ['40%','62%','45%'], dur: 4.2 },
  { id: 'SYD-B2', label: 'Humidity',       value: '62%',    color: '#4cc9f0', anim: ['70%','52%','65%'], dur: 3.1 },
];

const Hero = ({ onOpenAuth }) => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Grid mesh */}
    <div className="absolute inset-0 pointer-events-none -z-10"
         style={{
           backgroundImage: `
             linear-gradient(var(--border) 1px, transparent 1px),
             linear-gradient(90deg, var(--border) 1px, transparent 1px)
           `,
           backgroundSize: '56px 56px',
           maskImage: 'radial-gradient(ellipse 70% 60% at 60% 40%, black 0%, transparent 80%)',
           WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 60% 40%, black 0%, transparent 80%)',
         }} />

    {/* Color glows */}
    <div className="absolute inset-0 pointer-events-none -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]"
           style={{ backgroundColor: 'var(--glow-a)' }} />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]"
           style={{ backgroundColor: 'var(--glow-b)' }} />
    </div>

    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-primary text-xs font-bold uppercase tracking-wider mb-6"
            style={{ backgroundColor: 'rgba(67,97,238,0.10)', borderColor: 'rgba(67,97,238,0.25)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Next-Gen IoT Platform
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6" style={{ color: 'var(--text)' }}>
            Connect Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Devices in Seconds
            </span>
          </h1>

          <p className="text-lg mb-10 max-w-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Create, connect, and monitor your IoT devices in real-time with SenseYourDevice.
            The most developer-friendly platform for hardware integration.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => onOpenAuth('signup')}
                    className="btn-gradient px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25">
              Get Started Free <ArrowRight size={20} />
            </button>
            <a href="#docs"
               className="px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
               style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text)' }}
               onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'}
               onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}>
              <Play size={18} fill="currentColor" /> View Docs
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User"
                     className="w-10 h-10 rounded-full border-2" style={{ borderColor: 'var(--bg)' }}
                     referrerPolicy="no-referrer" />
              ))}
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <span className="font-bold" style={{ color: 'var(--text)' }}>500+</span> developers joined this week
            </p>
          </div>
        </motion.div>

        {/* Right — dashboard mockup */}
        <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.75, delay: 0.2 }} className="relative">

          <div className="relative z-10 rounded-2xl border p-4 shadow-2xl overflow-hidden"
               style={{ backgroundColor: 'var(--code-bg)', borderColor: 'var(--border)' }}>

            {/* Window chrome */}
            <div className="flex items-center justify-between mb-5 px-1">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-1.5">
                <Wifi size={12} className="text-green-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest"
                      style={{ color: '#FFFF' }}>Live Dashboard</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {DEVICES.map(d => (
                <div key={d.id} className="rounded-xl p-4"
                     style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div className="text-[10px] font-mono mb-0.5" style={{ color: 'var(--text-faintest)' }}>{d.id}</div>
                  <div className="text-xs mb-1.5 font-medium" style={{ color: 'var(--text-faint)' }}>{d.label}</div>
                  <div className="text-2xl font-bold" style={{ color: d.color }}>{d.value}</div>
                  <div className="mt-2 h-1 w-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-card-hover)' }}>
                    <motion.div animate={{ width: d.anim }} transition={{ duration: d.dur, repeat: Infinity }}
                                className="h-full rounded-full" style={{ backgroundColor: d.color }} />
                  </div>
                </div>
              ))}

              {/* Live chart */}
              <div className="col-span-2 rounded-xl p-4"
                   style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="flex justify-between items-center mb-3">
                  <div className="text-xs font-medium" style={{ color: 'var(--text-faint)' }}>Data Stream</div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold" style={{ color: '#4ade80' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    LIVE
                  </div>
                </div>
                <div className="flex gap-0.5 h-14 items-end">
                  {[...Array(28)].map((_, i) => (
                    <motion.div key={i}
                      animate={{ height: [`${12 + (i % 3) * 8}px`, `${20 + Math.sin(i) * 18 + 10}px`, `${12 + (i % 3) * 8}px`] }}
                      transition={{ duration: 1.8 + i * 0.05, repeat: Infinity, delay: i * 0.06 }}
                      className="flex-1 rounded-sm"
                      style={{
                        background: i % 2 === 0
                          ? 'linear-gradient(to top, rgba(67,97,238,0.6), rgba(76,201,240,0.3))'
                          : 'rgba(67,97,238,0.25)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full -z-10"
               style={{ border: '1px solid var(--border)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] h-[135%] rounded-full -z-10"
               style={{ border: '1px solid var(--border)' }} />


        </motion.div>

      </div>
    </div>
  </section>
);

export default Hero;
