import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import BrandLogo from './BrandLogo';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{ background: '#0a111e', borderTop: '1px solid rgba(148,163,184,0.08)', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '40px', marginBottom: '48px', alignItems: 'start' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <BrandLogo size={38} />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC' }}>
                Thirumurugan<span className="gradient-text">.dev</span>
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '260px' }}>
              Java Developer passionate about building clean, scalable backend systems. Open to exciting opportunities.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[
                { icon: <FaGithub size={18} />, url: resumeData.github },
                { icon: <FaLinkedin size={18} />, url: resumeData.linkedin },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#F97316' }}
                  style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.88rem', marginBottom: '16px', fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Quick Links
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 3, color: '#F97316' }}
                  style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
                  onClick={e => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Status card */}
          <div style={{ textAlign: 'right' }}>
            <div
              className="glass"
              style={{
                display: 'inline-block',
                padding: '24px 28px',
                textAlign: 'center',
                borderRadius: '22px',
                border: '1px solid rgba(255, 122, 0, 0.25)',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.85))',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(234, 88, 12, 0.15)',
                position: 'relative',
              }}
            >
              {/* 2026 Trend Tech Emblem Badge */}
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 14px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #FF6B00, #EA580C)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(234, 88, 12, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.35)',
              }}>
                <Code2 size={30} color="#FFFFFF" strokeWidth={2.5} />
              </div>

              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#F8FAFC', fontSize: '0.96rem', marginBottom: '4px' }}>
                {resumeData.name}
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.78rem', marginBottom: '14px' }}>Java Developer • 2026</div>
              
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  background: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    animation: 'pulse-glow 2s infinite',
                  }}
                />
                <span style={{ color: '#22c55e', fontSize: '0.78rem', fontWeight: 600 }}>Available for Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Glow divider */}
        <div className="glow-divider" style={{ marginBottom: '32px' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: '#94A3B8', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Made with <Heart size={13} color="#EA580C" style={{ display: 'inline' }} /> by {resumeData.name} © 2025
          </p>
          <p style={{ color: '#4B5563', fontSize: '0.78rem' }}>
            Built with React • Vite • TypeScript • Tailwind CSS • Framer Motion
          </p>
          <motion.button
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollTop}
            style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #EA580C, #F97316)',
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(234,88,12,0.3)',
            }}
            id="back-to-top"
          >
            <ArrowUp size={18} color="white" />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: left !important; }
        }
      `}</style>
    </footer>
  );
}
