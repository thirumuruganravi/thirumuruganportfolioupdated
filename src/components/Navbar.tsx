import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon, FileText } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { useTheme } from '../context/ThemeContext';
import { resumeData } from '../data/resumeData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 24px',
          background: scrolled
            ? (theme === 'dark' ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.92)')
            : (theme === 'dark' ? 'rgba(15,23,42,0.4)' : 'rgba(255,255,255,0.6)'),
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? (theme === 'dark' ? '1px solid rgba(148,163,184,0.1)' : '1px solid rgba(0,0,0,0.08)')
            : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: 'none' }}
            onClick={() => scrollTo('#home')}
          >
            <BrandLogo size={38} />
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: theme === 'dark' ? '#F8FAFC' : '#0F172A' }}>
              Thirumurugan<span className="gradient-text">.dev</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="nav-link"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: active === link.href.replace('#', '') ? '#F97316' : (theme === 'dark' ? '#94A3B8' : '#64748B'),
                  fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.88rem',
                  transition: 'color 0.2s',
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            ))}

            {/* Resume button */}
            <a
              href={`/${resumeData.resumePdf}`}
              download={resumeData.resumePdf}
              className="btn-outline"
              style={{
                padding: '7px 14px',
                fontSize: '0.82rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
              }}
              title="Download Updated Resume PDF"
            >
              <FileText size={14} color="#EA580C" /> Resume
            </a>

            {/* Hire Me button */}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '8px' }}
            >
              <Download size={14} /> Hire Me
            </a>

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: theme === 'dark' ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                border: theme === 'dark' ? '1px solid rgba(148, 163, 184, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
              }}
              id="theme-toggle-desktop"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} color="#F59E0B" /> : <Moon size={18} color="#6366F1" />}
            </motion.button>
          </div>

          {/* Mobile Right Controls */}
          <div style={{ display: 'none', alignItems: 'center', gap: '10px' }} className="show-mobile">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: theme === 'dark' ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                border: theme === 'dark' ? '1px solid rgba(148, 163, 184, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {theme === 'dark' ? <Sun size={17} color="#F59E0B" /> : <Moon size={17} color="#6366F1" />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme === 'dark' ? '#F8FAFC' : '#0F172A' }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 150 }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="mobile-menu"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: active === link.href.replace('#', '') ? '#F97316' : '#94A3B8',
                    fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1.1rem',
                    textAlign: 'left', padding: '8px 0',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.06 }}
                href="#contact"
                onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
                className="btn-primary"
                style={{ marginTop: '16px', justifyContent: 'center' }}
              >
                <Download size={16} /> Hire Me
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
