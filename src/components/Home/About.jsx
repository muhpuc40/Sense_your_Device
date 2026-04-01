import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Heart } from 'lucide-react';

const cards = [
  { icon: <MapPin  className="text-primary"   size={28} />, title: 'Born in Bangladesh', desc: 'Founded with a vision to empower local and global hardware innovators.'      },
  { icon: <Users   className="text-secondary" size={28} />, title: 'Community Driven',   desc: "Built by developers, for developers. We grow with our users' feedback."     },
  { icon: <Heart   className="text-primary"   size={28} />, title: 'Our Mission',        desc: 'To make IoT integration as simple as writing a few lines of code.'           },
];

const About = () => (
  <section id="about" className="py-24" style={{ backgroundColor: 'var(--bg)' }}>
    <div className="container">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-8 text-left md:text-center" style={{ color: 'var(--text)' }}>About SenseYourDevice</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cards.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl text-left" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="mb-4">{c.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text)' }}>{c.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed text-left md:text-center" style={{ color: 'var(--text-muted)' }}>
            SenseYourDevice (SYD) is a Bangladesh-based IoT platform focused on simplifying the connection between physical hardware and the digital world. We believe that every developer should have access to powerful, real-time monitoring tools without the need for complex backend infrastructure.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
