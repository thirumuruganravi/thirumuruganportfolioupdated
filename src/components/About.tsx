import { motion } from 'framer-motion';
import { User, Target, Heart, Zap, Sparkles } from 'lucide-react';
import { FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiLeetcode } from 'react-icons/si';
import { resumeData } from '../data/resumeData';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const highlights = [
  { icon: <Target size={22} color="#F97316" />, title: 'Career Goal', desc: 'Backend & Full-Stack Java Developer at a top-tier product company.' },
  { icon: <Heart size={22} color="#F97316" />, title: 'Passion', desc: 'Love building clean, efficient, and scalable Java applications.' },
  { icon: <Zap size={22} color="#F97316" />, title: 'Learning', desc: 'Continuously upskilling in Spring Boot, Microservices & Cloud.' },
  { icon: <User size={22} color="#F97316" />, title: 'About Me', desc: 'B.E. CSE graduate, problem solver, and Java backend enthusiast.' },
];

export default function About() {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="glow-divider" style={{ marginBottom: '80px', maxWidth: '600px' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '12px' }}>— WHO I AM —</div>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '16px', maxWidth: '550px', margin: '16px auto 0', lineHeight: 1.8, fontSize: '0.95rem' }}>
            A passionate Java Developer dedicated to crafting high-performance backend systems
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid">
          {/* Left - Photo & Catchy Tech Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            {/* Ambient Glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)',
                filter: 'blur(30px)',
                zIndex: 0,
              }}
            />

            {/* Profile Photo Frame */}
            <div
              className="card-hover"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
                borderRadius: '28px',
                padding: '8px',
                background: 'linear-gradient(135deg, rgba(234,88,12,0.5), rgba(249,115,22,0.1), rgba(15,23,42,0.8))',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(234,88,12,0.25)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '0.88',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  background: '#0F172A',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt={resumeData.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Gradient vignette at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.3) 40%, transparent 100%)',
                  }}
                />

                {/* Bottom Photo Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    padding: '14px 18px',
                    background: 'rgba(15,23,42,0.85)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(234,88,12,0.3)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#F8FAFC' }}>
                      {resumeData.name}
                    </div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '12px', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: '0.72rem', fontWeight: 600 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                      Active
                    </span>
                  </div>
                  <div style={{ color: '#F97316', fontSize: '0.82rem', fontWeight: 500 }}>
                    Java Developer • Backend Engineer
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '28px', height: '28px', borderTop: '3px solid #EA580C', borderLeft: '3px solid #EA580C', borderRadius: '10px 0 0 0' }} />
              <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '28px', height: '28px', borderBottom: '3px solid #EA580C', borderRight: '3px solid #EA580C', borderRadius: '0 0 10px 0' }} />
            </div>

            {/* Catchy Floating Tech Badges */}
            {/* Top-Right Badge: Spring Boot */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="glass"
              style={{
                position: 'absolute',
                top: '10px',
                right: '-12px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '16px',
                border: '1px solid rgba(109,179,63,0.3)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                zIndex: 2,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(109,179,63,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SiSpringboot color="#6DB33F" size={17} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F8FAFC' }}>Spring Boot</div>
                <div style={{ fontSize: '0.68rem', color: '#6DB33F' }}>Microservices</div>
              </div>
            </motion.div>

            {/* Top-Left Badge: Core Java */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="glass"
              style={{
                position: 'absolute',
                top: '70px',
                left: '-15px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '16px',
                border: '1px solid rgba(234,88,12,0.3)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                zIndex: 2,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(234,88,12,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaJava color="#EA580C" size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F8FAFC' }}>Java 17+</div>
                <div style={{ fontSize: '0.68rem', color: '#EA580C' }}>OOP & Streams</div>
              </div>
            </motion.div>

            {/* Bottom-Left Badge: MySQL */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="glass"
              style={{
                position: 'absolute',
                bottom: '90px',
                left: '-18px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '16px',
                border: '1px solid rgba(68,121,161,0.3)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                zIndex: 2,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(68,121,161,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SiMysql color="#4479A1" size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F8FAFC' }}>MySQL DB</div>
                <div style={{ fontSize: '0.68rem', color: '#4479A1' }}>SQL & Hibernate</div>
              </div>
            </motion.div>

            {/* Bottom-Right Badge: LeetCode */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="glass"
              style={{
                position: 'absolute',
                bottom: '25px',
                right: '-16px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '16px',
                border: '1px solid rgba(255,161,22,0.3)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                zIndex: 2,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,161,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SiLeetcode color="#FFA116" size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F8FAFC' }}>200+ Solved</div>
                <div style={{ fontSize: '0.68rem', color: '#FFA116' }}>DSA & Logic</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F97316', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              <Sparkles size={16} /> Backend Engineer & Problem Solver
            </div>

            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.8rem', marginBottom: '18px', color: '#F8FAFC' }}>
              Hi, I'm <span className="gradient-text">{resumeData.name}</span>
            </h3>

            <p style={{ color: '#94A3B8', lineHeight: 1.9, marginBottom: '28px', fontSize: '0.95rem' }}>
              {resumeData.objective}
            </p>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              {[
                { label: 'Full Name', value: resumeData.name },
                { label: 'Primary Role', value: 'Java Developer' },
                { label: 'College', value: 'RMK Engineering College' },
                { label: 'Degree', value: 'B.E. Computer Science' },
                { label: 'Status', value: 'Open to Work', isStatus: true },
                { label: 'Location', value: resumeData.location },
                { label: 'Graduation', value: '2026' },
              ].map(item => (
                <div key={item.label} style={{ padding: '12px', background: 'rgba(30,41,59,0.4)', borderRadius: '10px', border: '1px solid rgba(148,163,184,0.08)' }}>
                  <div style={{ color: '#94A3B8', fontSize: '0.72rem', fontWeight: 500, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                  <div style={{ color: '#F8FAFC', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {item.isStatus && (
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
                    )}
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="glass"
                  style={{ padding: '16px' }}
                >
                  <div style={{ marginBottom: '8px' }}>{h.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '4px', color: '#F8FAFC' }}>{h.title}</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.78rem', lineHeight: 1.6 }}>{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
