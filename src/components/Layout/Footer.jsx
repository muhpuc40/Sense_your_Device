import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-20" style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2 lg:col-span-2">
          <a href="#" className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(67,97,238,0.10)' }}>
              <Cpu className="text-primary" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              SenseYour<span className="text-primary">Device</span>
            </span>
          </a>
          <p className="max-w-xs mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Empowering hardware innovators with real-time monitoring and seamless device management.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#"
                 className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:text-primary"
                 style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                 onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(67,97,238,0.15)'; }}
                 onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: 'Platform',  links: ['How It Works','Features','Pricing','Dashboard'] },
          { title: 'Resources', links: ['Documentation','API Reference','Community','Support'] },
          { title: 'Company',   links: ['About Us','Privacy Policy','Terms of Service','Contact'] },
        ].map(({ title, links }) => (
          <div key={title}>
            <h4 className="font-bold mb-6" style={{ color: 'var(--text)' }}>{title}</h4>
            <ul className="space-y-4 text-sm">
              {links.map(l => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
           style={{ borderTop: '1px solid var(--border)', color: 'var(--text-faint)' }}>
        <p>© 2026 SenseYourDevice. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <Mail size={14} /><span>hello@senseyourdevice.com</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
