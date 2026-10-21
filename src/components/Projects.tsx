import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Target, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { resumeData } from '../data/resumeData';

const projectColors = ['#EA580C', '#F97316', '#FB923C', '#FBBF24'];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '12px' }}>— WHAT I'VE BUILT —</div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Real-world projects demonstrating my Java and backend development skills
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="projects-grid">
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass card-hover"
              style={{ overflow: 'hidden', position: 'relative' }}
            >
              {/* Top accent line */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${projectColors[i]}, ${projectColors[(i+1)%4]})` }} />

              {/* Project header */}
              <div style={{ padding: '28px 28px 0' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <div style={{
                      display: 'inline-block', padding: '4px 12px', borderRadius: '6px',
                      background: `${projectColors[i]}15`, border: `1px solid ${projectColors[i]}30`,
                      color: projectColors[i], fontSize: '0.72rem', fontWeight: 600,
                      marginBottom: '10px', fontFamily: 'Space Grotesk, sans-serif',
                    }}>
                      Project {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#F8FAFC' }}>
                      {project.title}
                    </h3>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        style={{
                          width: '36px', height: '36px', borderRadius: '8px',
                          background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(148,163,184,0.15)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#94A3B8', textDecoration: 'none', flexShrink: 0,
                        }}
                      >
                        <FaGithub size={16} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        style={{
                          width: '36px', height: '36px', borderRadius: '8px',
                          background: 'rgba(234,88,12,0.15)', border: '1px solid rgba(234,88,12,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#F97316', textDecoration: 'none', flexShrink: 0,
                        }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '18px' }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.tech.slice(0, 5).map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="tech-badge" style={{ color: '#F97316', borderColor: 'rgba(234,88,12,0.3)' }}>
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Expand toggle */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '12px 28px',
                  borderTop: '1px solid rgba(148,163,184,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  color: '#94A3B8', fontSize: '0.82rem', fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#F97316')}
                onMouseOut={e => (e.currentTarget.style.color = '#94A3B8')}
              >
                <span>{expanded === i ? 'Show less' : 'View details'}</span>
                {expanded === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Expanded details */}
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '20px 28px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.8rem', color: '#F97316', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Target size={14} /> Problem
                        </div>
                        <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.7 }}>{project.problem}</p>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.8rem', color: '#F97316', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircle2 size={14} /> Solution
                        </div>
                        <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.7 }}>{project.solution}</p>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.8rem', color: '#F97316', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Sparkles size={14} /> Features
                        </div>
                        <ul style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.9, paddingLeft: '16px' }}>
                          {project.features.map(f => <li key={f}>{f}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.8rem', color: '#F97316', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <BookOpen size={14} /> Learnings
                        </div>
                        <ul style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.9, paddingLeft: '16px' }}>
                          {project.outcomes.map(o => <li key={o}>{o}</li>)}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex', gap: '8px' }}
          >
            <FaGithub size={18} /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
