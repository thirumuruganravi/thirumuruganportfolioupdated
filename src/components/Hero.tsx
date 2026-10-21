import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, ChevronDown, Code2, Terminal, User } from 'lucide-react';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiDocker, SiPostman, SiGit, SiLeetcode, SiHibernate } from 'react-icons/si';
import { resumeData } from '../data/resumeData';

const floatingIcons = [
  { icon: <FaJava color="#EA580C" size={32} />, top: '18%', left: '7%', delay: 0 },
  { icon: <SiSpringboot color="#6DB33F" size={30} />, top: '15%', right: '9%', delay: 1 },
  { icon: <SiMysql color="#4479A1" size={32} />, top: '65%', left: '5%', delay: 0.5 },
  { icon: <SiDocker color="#2496ED" size={30} />, top: '70%', right: '7%', delay: 0.3 },
  { icon: <SiPostman color="#FF6C37" size={28} />, top: '40%', left: '3%', delay: 0.8 },
  { icon: <SiLeetcode color="#FFA116" size={28} />, top: '38%', right: '4%', delay: 1.2 },
];

const techPills = [
  { name: 'Java 17+', icon: <FaJava color="#EA580C" size={16} />, bg: 'rgba(234,88,12,0.12)', border: 'rgba(234,88,12,0.3)' },
  { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" size={15} />, bg: 'rgba(109,179,63,0.12)', border: 'rgba(109,179,63,0.3)' },
  { name: 'Hibernate', icon: <SiHibernate color="#59666C" size={15} />, bg: 'rgba(89,102,108,0.15)', border: 'rgba(89,102,108,0.3)' },
  { name: 'MySQL', icon: <SiMysql color="#4479A1" size={16} />, bg: 'rgba(68,121,161,0.12)', border: 'rgba(68,121,161,0.3)' },
  { name: 'Docker', icon: <SiDocker color="#2496ED" size={15} />, bg: 'rgba(36,150,237,0.12)', border: 'rgba(36,150,237,0.3)' },
  { name: 'Postman', icon: <SiPostman color="#FF6C37" size={15} />, bg: 'rgba(255,108,55,0.12)', border: 'rgba(255,108,55,0.3)' },
  { name: 'Git', icon: <SiGit color="#F05032" size={15} />, bg: 'rgba(240,80,50,0.12)', border: 'rgba(240,80,50,0.3)' },
];

const codeLines = [
  { indent: 0, text: 'public class ThirumuruganRavi {', color: '#F97316' },
  { indent: 1, text: 'private String name = "Thirumurugan Ravi";', color: '#94A3B8' },
  { indent: 1, text: 'private String role = "Java Developer";', color: '#94A3B8' },
  { indent: 1, text: 'private String status = "Open to Opportunities 🚀";', color: '#94A3B8' },
  { indent: 1, text: '', color: '' },
  { indent: 1, text: 'public void build() {', color: '#FB923C' },
  { indent: 2, text: 'learn(Java17, SpringBoot, Hibernate, MySQL);', color: '#94A3B8' },
  { indent: 2, text: 'solve(LeetCode_DSA, 200+);', color: '#94A3B8' },
  { indent: 2, text: 'deploy(Scalable_REST_APIs);', color: '#94A3B8' },
  { indent: 1, text: '}', color: '#FB923C' },
  { indent: 0, text: '}', color: '#F97316' },
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'code'>('profile');
  const roles = resumeData.typingRoles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 45 : 85;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '40px' }}>
      {/* Background orbs */}
      <div className="orb" style={{ width: '600px', height: '600px', background: '#EA580C', top: '-200px', right: '-200px' }} />
      <div className="orb" style={{ width: '400px', height: '400px', background: '#F97316', bottom: '-100px', left: '-100px' }} />

      {/* Floating catchy tech icons in the background */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -18, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: (item as any).right,
            opacity: 0.35,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 12px rgba(234,88,12,0.3))',
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '50px', alignItems: 'center' }} className="hero-grid">
          {/* Left Content */}
          <div>
            {/* User Avatar + Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, rgba(30,41,59,0.7), rgba(15,23,42,0.85))',
                border: '1px solid rgba(255,107,0,0.3)',
                borderRadius: '50px',
                padding: '8px 20px',
                marginBottom: '24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3), 0 0 20px rgba(234,88,12,0.15)',
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 10px #22c55e',
                  animation: 'pulse-glow 2s infinite',
                }} />
              </div>
              <span style={{
                color: '#F8FAFC',
                fontSize: '0.88rem',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.3px',
              }}>
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px' }}
            >
              <span style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#F8FAFC', display: 'block' }}>Hi, I'm</span>
              <span className="animated-gradient" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', display: 'block' }}>
                {resumeData.name}
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: '20px', minHeight: '44px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(234,88,12,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code2 size={20} color="#EA580C" />
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)', color: '#F8FAFC' }}>
                {typedText}<span className="cursor-blink">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ color: '#94A3B8', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '28px', maxWidth: '520px' }}
            >
              A passionate Java Developer focused on building robust, scalable backend systems. Skilled in Spring Boot, REST APIs, and Database Design. Ready to create impact from day one.
            </motion.p>

            {/* Catchy Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}
            >
              {techPills.map(tech => (
                <div
                  key={tech.name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    background: tech.bg,
                    border: `1px solid ${tech.border}`,
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: '#F8FAFC',
                  }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}
            >
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                <Mail size={17} /> Contact Me
              </button>
              <a href={`/${resumeData.resumePdf}`} download={resumeData.resumePdf} className="btn-outline">
                <Download size={17} /> Download CV
              </a>
              <button className="btn-outline" onClick={() => scrollTo('projects')} style={{ borderColor: 'rgba(148,163,184,0.3)', color: '#94A3B8' }}>
                View Projects
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: '14px', alignItems: 'center' }}
            >
              {[
                { icon: <FaGithub size={20} />, url: resumeData.github, label: 'GitHub', color: '#F8FAFC' },
                { icon: <FaLinkedin size={20} />, url: resumeData.linkedin, label: 'LinkedIn', color: '#0A66C2' },
                { icon: <SiLeetcode size={20} />, url: resumeData.leetcode, label: 'LeetCode', color: '#FFA116' },
              ].map(social => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(30,41,59,0.7)',
                    border: '1px solid rgba(148,163,184,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: social.color, textDecoration: 'none',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
              <span style={{ color: '#4B5563', fontSize: '0.8rem', marginLeft: '6px' }}>Let's connect & build</span>
            </motion.div>
          </div>

          {/* Right Showcase Column (Toggle between Photo Profile & Java Code) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* View Switcher Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '14px' }}>
              <button
                onClick={() => setActiveTab('profile')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 16px',
                  borderRadius: '20px',
                  background: activeTab === 'profile' ? 'linear-gradient(135deg, #EA580C, #F97316)' : 'rgba(30,41,59,0.7)',
                  color: activeTab === 'profile' ? '#FFFFFF' : '#94A3B8',
                  border: activeTab === 'profile' ? 'none' : '1px solid rgba(148,163,184,0.15)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: activeTab === 'profile' ? '0 4px 15px rgba(234,88,12,0.4)' : 'none',
                  transition: 'all 0.3s',
                }}
              >
                <User size={15} /> Photo Profile
              </button>
              <button
                onClick={() => setActiveTab('code')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 16px',
                  borderRadius: '20px',
                  background: activeTab === 'code' ? 'linear-gradient(135deg, #EA580C, #F97316)' : 'rgba(30,41,59,0.7)',
                  color: activeTab === 'code' ? '#FFFFFF' : '#94A3B8',
                  border: activeTab === 'code' ? 'none' : '1px solid rgba(148,163,184,0.15)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: activeTab === 'code' ? '0 4px 15px rgba(234,88,12,0.4)' : 'none',
                  transition: 'all 0.3s',
                }}
              >
                <Terminal size={15} /> Thirumurugan.java
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'profile' ? (
                /* TAB 1: Profile Photo Card with Floating Catchy Icons */
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass card-hover"
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(234,88,12,0.3)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 35px rgba(234,88,12,0.2)',
                  }}
                >
                  {/* Photo with gradient overlay */}
                  <div style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
                    <img
                      src="/profile.jpg"
                      alt={resumeData.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)',
                      }}
                    />

                    {/* Floating Catchy Badge: Spring Boot */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'rgba(15,23,42,0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(109,179,63,0.4)',
                        borderRadius: '20px',
                        padding: '6px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                      }}
                    >
                      <SiSpringboot color="#6DB33F" size={17} />
                      <span style={{ color: '#F8FAFC', fontSize: '0.78rem', fontWeight: 600 }}>Spring Boot</span>
                    </motion.div>

                    {/* Floating Catchy Badge: Java */}
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: 'rgba(15,23,42,0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(234,88,12,0.4)',
                        borderRadius: '20px',
                        padding: '6px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                      }}
                    >
                      <FaJava color="#EA580C" size={17} />
                      <span style={{ color: '#F8FAFC', fontSize: '0.78rem', fontWeight: 600 }}>Java Backend</span>
                    </motion.div>

                    {/* Info Overlay at bottom of photo */}
                    <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px' }}>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.35rem', color: '#F8FAFC', marginBottom: '2px' }}>
                        {resumeData.name}
                      </div>
                      <div style={{ color: '#F97316', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>Java Developer</span>
                        <span style={{ color: '#4B5563' }}>•</span>
                        <span style={{ color: '#22c55e', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                          Fresher
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div style={{ borderTop: '1px solid rgba(148,163,184,0.1)', padding: '16px 20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', textAlign: 'center', background: 'rgba(15,23,42,0.9)' }}>
                    <div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.35rem', color: '#F97316' }}>4+</div>
                      <div style={{ color: '#94A3B8', fontSize: '0.72rem', fontFamily: 'Space Grotesk, sans-serif' }}>Projects Built</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.35rem', color: '#F97316' }}>200+</div>
                      <div style={{ color: '#94A3B8', fontSize: '0.72rem', fontFamily: 'Space Grotesk, sans-serif' }}>LeetCode Solved</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.35rem', color: '#F97316' }}>8.2</div>
                      <div style={{ color: '#94A3B8', fontSize: '0.72rem', fontFamily: 'Space Grotesk, sans-serif' }}>B.E. CGPA</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* TAB 2: Live Java Code Editor Window */
                <motion.div
                  key="code"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="code-window"
                  style={{ position: 'relative' }}
                >
                  {/* Glow behind */}
                  <div style={{
                    position: 'absolute', inset: '-20px',
                    background: 'radial-gradient(ellipse, rgba(234,88,12,0.15) 0%, transparent 70%)',
                    borderRadius: '20px', pointerEvents: 'none'
                  }} />

                  <div className="code-dots">
                    <div className="dot" style={{ background: '#ff5f57' }} />
                    <div className="dot" style={{ background: '#febc2e' }} />
                    <div className="dot" style={{ background: '#28c840' }} />
                    <span style={{ marginLeft: 'auto', color: '#94A3B8', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
                      ThirumuruganRavi.java
                    </span>
                  </div>

                  <div style={{ padding: '24px 20px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', lineHeight: 2 }}>
                    {codeLines.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        style={{ paddingLeft: `${line.indent * 20}px`, color: line.color || '#4B5563' }}
                      >
                        {line.text || '\u00A0'}
                      </motion.div>
                    ))}
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                      style={{ display: 'inline-block', width: '10px', height: '18px', background: '#EA580C', verticalAlign: 'middle', marginTop: '4px' }}
                    />
                  </div>

                  {/* Stats row */}
                  <div style={{ borderTop: '1px solid rgba(148,163,184,0.08)', padding: '16px 20px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', textAlign: 'center' }}>
                    {[
                      { num: '4+', label: 'Projects' },
                      { num: '200+', label: 'LeetCode' },
                      { num: '6+', label: 'Certs' },
                    ].map(stat => (
                      <div key={stat.label}>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#F97316' }}>{stat.num}</div>
                        <div style={{ color: '#4B5563', fontSize: '0.72rem', fontFamily: 'Space Grotesk, sans-serif' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ textAlign: 'center', marginTop: '50px' }}
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollTo('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}
          >
            <ChevronDown size={28} />
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
