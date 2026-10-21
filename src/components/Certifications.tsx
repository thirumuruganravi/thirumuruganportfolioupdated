import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Trophy } from 'lucide-react';
import { FaGithub, FaLinkedin, FaJava, FaDatabase, FaReact } from 'react-icons/fa6';
import { SiLeetcode, SiHackerrank, SiSpringboot, SiGit } from 'react-icons/si';
import { resumeData } from '../data/resumeData';

const providerColors: Record<string, string> = {
  'Udemy': '#EC5252',
  'Coursera': '#0056D2',
  'NPTEL – IIT Kharagpur': '#F59E0B',
  'Infosys Springboard': '#00C4CC',
  'Great Learning Academy': '#0A66C2',
  'Simplilearn SkillUp': '#F59E0B',
};

const getCertBadge = (iconType: string) => {
  switch (iconType) {
    case 'java':
      return {
        icon: <FaJava size={30} color="#FF6B00" />,
        accentColor: '#FF6B00',
        bg: 'linear-gradient(135deg, rgba(255,107,0,0.24), rgba(234,88,12,0.08), rgba(15,23,42,0.92))',
        border: 'rgba(255,107,0,0.45)',
        glow: 'rgba(255,107,0,0.4)',
        tag: 'Core Java',
      };
    case 'springboot':
      return {
        icon: <SiSpringboot size={28} color="#10B981" />,
        accentColor: '#10B981',
        bg: 'linear-gradient(135deg, rgba(16,185,129,0.24), rgba(109,179,63,0.08), rgba(15,23,42,0.92))',
        border: 'rgba(16,185,129,0.45)',
        glow: 'rgba(16,185,129,0.4)',
        tag: 'Spring Boot',
      };
    case 'nptel':
      return {
        icon: <FaJava size={30} color="#F59E0B" />,
        accentColor: '#F59E0B',
        bg: 'linear-gradient(135deg, rgba(245,158,11,0.24), rgba(217,119,6,0.08), rgba(15,23,42,0.92))',
        border: 'rgba(245,158,11,0.45)',
        glow: 'rgba(245,158,11,0.4)',
        tag: 'IIT Kharagpur',
      };
    case 'sql':
      return {
        icon: <FaDatabase size={26} color="#38BDF8" />,
        accentColor: '#38BDF8',
        bg: 'linear-gradient(135deg, rgba(56,189,248,0.24), rgba(14,165,233,0.08), rgba(15,23,42,0.92))',
        border: 'rgba(56,189,248,0.45)',
        glow: 'rgba(56,189,248,0.4)',
        tag: 'SQL & Data',
      };
    case 'api':
      return {
        icon: <SiSpringboot size={28} color="#A855F7" />,
        accentColor: '#A855F7',
        bg: 'linear-gradient(135deg, rgba(168,85,247,0.24), rgba(124,58,237,0.08), rgba(15,23,42,0.92))',
        border: 'rgba(168,85,247,0.45)',
        glow: 'rgba(168,85,247,0.4)',
        tag: 'RESTful API',
      };
    case 'git':
      return {
        icon: <SiGit size={28} color="#F05032" />,
        accentColor: '#F05032',
        bg: 'linear-gradient(135deg, rgba(240,80,50,0.24), rgba(220,38,38,0.08), rgba(15,23,42,0.92))',
        border: 'rgba(240,80,50,0.45)',
        glow: 'rgba(240,80,50,0.4)',
        tag: 'Version Control',
      };
    case 'react':
      return {
        icon: <FaReact size={28} color="#00D8FF" />,
        accentColor: '#00D8FF',
        bg: 'linear-gradient(135deg, rgba(0,216,255,0.24), rgba(14,165,233,0.08), rgba(15,23,42,0.92))',
        border: 'rgba(0,216,255,0.45)',
        glow: 'rgba(0,216,255,0.4)',
        tag: 'Frontend React',
      };
    default:
      return {
        icon: <Award size={28} color="#F97316" />,
        accentColor: '#F97316',
        bg: 'linear-gradient(135deg, rgba(249,115,22,0.24), rgba(234,88,12,0.08), rgba(15,23,42,0.92))',
        border: 'rgba(249,115,22,0.45)',
        glow: 'rgba(249,115,22,0.4)',
        tag: 'Verified',
      };
  }
};

export default function Certifications() {
  return (
    <section id="certifications">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '12px' }}>— VERIFIED SKILLS —</div>
          <h2 className="section-heading">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Continuous learning through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginBottom: '64px' }} className="cert-grid">
          {resumeData.certifications.map((cert, i) => {
            const badge = getCertBadge(cert.icon);
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: `0 24px 50px -10px ${badge.glow}` }}
                className="glass card-hover"
                style={{
                  padding: '28px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Ambient Corner Glow */}
                <div style={{
                  position: 'absolute', top: '-40px', right: '-40px',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${badge.accentColor}35 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                  {/* 2026 Trend 3D Floating Glass Badge */}
                  <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '16px',
                    background: badge.bg,
                    border: `1.5px solid ${badge.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 10px 25px -4px ${badge.glow}, inset 0 1px 2px rgba(255,255,255,0.3)`,
                    position: 'relative',
                  }}>
                    {badge.icon}
                  </div>

                  {/* Verified Micro-Tag */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: '#94A3B8',
                    letterSpacing: '0.5px',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: badge.accentColor, boxShadow: `0 0 6px ${badge.accentColor}` }} />
                    {badge.tag}
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.98rem', color: '#F8FAFC', marginBottom: '12px', lineHeight: 1.45 }}>
                  {cert.name}
                </h3>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '4px 12px', borderRadius: '8px', marginBottom: '16px',
                  background: `${providerColors[cert.provider] || '#EA580C'}15`,
                  border: `1px solid ${providerColors[cert.provider] || '#EA580C'}30`,
                }}>
                  <Award size={13} color={providerColors[cert.provider] || '#F97316'} />
                  <span style={{ color: providerColors[cert.provider] || '#F97316', fontSize: '0.76rem', fontWeight: 600 }}>
                    {cert.provider}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(148,163,184,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '0.78rem' }}>
                    <Calendar size={13} /> {cert.date}
                  </div>
                  {cert.credential && (
                    <a href={cert.credential} target="_blank" rel="noopener noreferrer" style={{ color: '#F97316' }}>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>— MILESTONES —</div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.8rem' }}>
              Key <span className="gradient-text">Achievements</span>
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '14px', maxWidth: '700px', margin: '0 auto' }}>
            {resumeData.achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="glass"
                style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '18px', transition: 'all 0.3s' }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(245,158,11,0.05))',
                  border: '1px solid rgba(245,158,11,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(245,158,11,0.2)',
                }}>
                  <Trophy size={20} color="#F59E0B" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#F8FAFC', marginBottom: '4px' }}>
                    {ach.title}
                  </div>
                  <div style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.6 }}>{ach.desc}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#EA580C', flexShrink: 0 }}>
                  <Award size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coding Profiles */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-label" style={{ marginBottom: '12px' }}>— FIND ME ON —</div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.8rem' }}>
              Coding <span className="gradient-text">Profiles</span>
            </h3>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {resumeData.codingProfiles.map((profile, i) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                style={{
                  padding: '24px 36px', borderRadius: '16px',
                  background: 'rgba(30,41,59,0.5)',
                  border: `1px solid ${profile.color}30`,
                  textDecoration: 'none', textAlign: 'center',
                  minWidth: '160px', transition: 'all 0.3s',
                  boxShadow: `0 4px 20px ${profile.color}10`,
                }}
                onMouseOver={e => { (e.currentTarget as any).style.boxShadow = `0 8px 30px ${profile.color}25`; (e.currentTarget as any).style.borderColor = `${profile.color}60`; }}
                onMouseOut={e => { (e.currentTarget as any).style.boxShadow = `0 4px 20px ${profile.color}10`; (e.currentTarget as any).style.borderColor = `${profile.color}30`; }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
                  {profile.name === 'GitHub' ? <FaGithub color={profile.color} size={32} /> :
                   profile.name === 'LinkedIn' ? <FaLinkedin color={profile.color} size={32} /> :
                   profile.name === 'LeetCode' ? <SiLeetcode color={profile.color} size={32} /> :
                   <SiHackerrank color={profile.color} size={32} />}
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: profile.color, fontSize: '0.95rem' }}>
                  {profile.name}
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.75rem', marginTop: '4px' }}>{profile.handle}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
