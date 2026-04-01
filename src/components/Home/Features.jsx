import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Globe, Code, Terminal } from 'lucide-react';

const features = [
  { icon: <Zap className="text-primary" />, title: 'Easy device creation', description: 'Set up your virtual device in our dashboard in less than a minute.' },
  { icon: <Code className="text-secondary" />, title: 'Simple API integration', description: 'Use our lightweight SDKs or direct REST/WebSocket APIs to connect any hardware.' },
  { icon: <Globe className="text-primary" />, title: 'Real-time monitoring', description: 'Watch your data flow instantly with WebSocket-powered live updates.' },
  { icon: <Shield className="text-secondary" />, title: 'Secure data handling', description: 'Enterprise-grade encryption for all data in transit and at rest.' },
];

const codeSnippet = `import syd_sdk

# Initialize client
client = syd_sdk.Client(api_key="SYD_72x_992")

# Create device connection
device = client.connect_device("temp_sensor_01")

# Send real-time data
while True:
    temp = read_sensor()
    device.push_data({
        "temperature": temp,
        "unit": "celsius"
    })
    
    print(f"Pushed: {temp}°C")
    time.sleep(1)`;

const Features = () => (
  <section id="features" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg)' }}>
    <div className="container px-4 md:px-6">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>Built for Developers</h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>
          Everything you need to build, scale, and manage your IoT ecosystem without the infrastructure headache.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
        {/* Feature Cards - Compressed on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-8 order-2 lg:order-1">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl transition-all duration-200 group"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(67,97,238,0.30)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--bg-card-hover)' }}>
                {React.cloneElement(f.icon, { size: 16, className: f.icon.props.className + ' sm:w-5 sm:h-5 md:w-6 md:h-6' })}
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1.5 md:mb-2" style={{ color: 'var(--text)' }}>{f.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Code Terminal - Perfectly fitted on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="rounded-xl md:rounded-2xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--border)' }}>
            {/* Terminal Header */}
            <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-3" style={{ backgroundColor: 'var(--code-bar)', borderBottom: '1px solid var(--border)' }}>
              <Terminal size={12} className="md:w-4 md:h-4" style={{ color: '#FFFF' }} />
              <span className="text-[9px] md:text-xs font-mono" style={{ color: '#FFFF' }}>integration_example.py</span>
            </div>

            {/* Code Content - Scrollable on small screens */}
            <div className="p-3 md:p-5 lg:p-6 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs md:text-sm font-mono text-left leading-relaxed">
                <code>
                  {codeSnippet.split('\n').map((line, i) => (
                    <div key={i} className="flex gap-2 md:gap-4 min-w-max">
                      <span className="select-none w-4 text-right shrink-0 text-[9px] md:text-xs" style={{ color: '#ffff' }}>{i + 1}</span>
                      <span style={{
                        color: line.startsWith('#') ? 'rgba(74,222,128,0.7)' :
                          line.includes('import') ? '#4361ee' :
                            line.includes('while') || line.includes('print') ? '#4cc9f0' :
                              'rgba(255,255,255,0.8)',
                        fontSize: 'inherit'
                      }}>
                        {line}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>

          {/* Performance Badge - Hidden on small mobile, visible on tablet+ */}
          <div className="absolute -bottom-3 -right-2 md:-bottom-5 md:-right-5 p-2 md:p-3 rounded-lg md:rounded-xl backdrop-blur-md shadow-xl hidden sm:flex"
            style={{ backgroundColor: 'rgba(67,97,238,0.10)', border: '1px solid rgba(67,97,238,0.20)' }}>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap size={12} className="text-white md:w-4 md:h-4" />
              </div>
              <div>
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>Performance</div>
                <div className="text-[10px] md:text-xs font-bold" style={{ color: 'var(--text)' }}>10ms Latency</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Features;