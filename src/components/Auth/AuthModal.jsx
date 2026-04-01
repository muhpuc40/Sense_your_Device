import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, initialMode = 'signin' }) => {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  useEffect(() => { if (isOpen) setMode(initialMode); }, [isOpen, initialMode]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${mode} data:`, formData);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose} className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }} />

        <motion.div key="modal" initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl"
                    style={{ backgroundColor: 'var(--sidebar-bg)', border: '1px solid var(--border)' }}>
          {/* Glows */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
               style={{ backgroundColor: 'var(--glow-a)' }} />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
               style={{ backgroundColor: 'var(--glow-b)' }} />

          <div className="relative p-8">
            <button onClick={onClose} className="absolute top-4 right-4 p-2 transition-colors hover:text-primary"
                    style={{ color: 'var(--text-muted)' }}>
              <X size={20} />
            </button>

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                {mode === 'signin' ? 'Enter your credentials to access your dashboard' : 'Join SenseYourDevice and start monitoring today'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="space-y-1">
                  <label className="text-sm font-medium ml-1" style={{ color: 'var(--text-muted)' }}>User Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: 'var(--text-faint)' }} />
                    <input type="text" placeholder="johndoe"
                           className="w-full rounded-xl py-3 pl-10 pr-4 outline-none transition-colors"
                           style={{ backgroundColor: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text)' }}
                           onFocus={e => e.currentTarget.style.borderColor = 'rgba(67,97,238,0.50)'}
                           onBlur={e => e.currentTarget.style.borderColor = 'var(--input-border)'}
                           value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} required />
                  </div>
                </div>
              )}

              {[
                { label: mode === 'signin' ? 'Email or Username' : 'Email Address', icon: <Mail />, key: 'email', type: 'text', placeholder: 'name@example.com' },
                { label: 'Password', icon: <Lock />, key: 'password', type: 'password', placeholder: '••••••••' },
              ].map(({ label, icon, key, type, placeholder }) => (
                <div key={key} className="space-y-1">
                  <label className="text-sm font-medium ml-1" style={{ color: 'var(--text-muted)' }}>{label}</label>
                  <div className="relative">
                    {React.cloneElement(icon, { className: 'absolute left-3 top-1/2 -translate-y-1/2', size: 18, style: { color: 'var(--text-faint)' } })}
                    <input type={type} placeholder={placeholder}
                           className="w-full rounded-xl py-3 pl-10 pr-4 outline-none transition-colors"
                           style={{ backgroundColor: 'var(--input-bg)', border: '1px solid var(--input-border)', color: 'var(--text)' }}
                           onFocus={e => e.currentTarget.style.borderColor = 'rgba(67,97,238,0.50)'}
                           onBlur={e => e.currentTarget.style.borderColor = 'var(--input-border)'}
                           value={formData[key]} onChange={e => setFormData({ ...formData, [key]: e.target.value })} required />
                  </div>
                </div>
              ))}

              <button type="submit" className="btn-gradient !mt-6 w-full border-0 uppercase py-4 rounded-xl font-bold tracking-wider shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] flex items-center justify-center gap-2">
                {mode === 'signin' ? 'Sign In' : 'Sign Up'} <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p style={{ color: 'var(--text-muted)' }}>
                {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
                <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                        className="ml-2 text-primary font-bold hover:underline">
                  {mode === 'signin' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;
