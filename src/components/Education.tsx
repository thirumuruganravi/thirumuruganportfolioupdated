import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, Briefcase } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" style={{ background: 'rgba(15,23,42,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '12px' }}>— BACKGROUND & JOURNEY —</div>
          <h2 className="section-heading">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Academic foundation and professional internship experience
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: '18px', top: '20px', bottom: '20px', width: '2px', background: 'linear-gradient(180deg, #EA580C, rgba(234,88,12,0.1))', borderRadius: '2px' }} />

          {/* Internship Card */}
          {resumeData.internship && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', gap: '24px', marginBottom: '36px', position: 'relative' }}
            >
              <div className="timeline-dot" style={{ flexShrink: 0, marginTop: '4px', background: 'linear-gradient(135deg, #10B981, #059669)' }}>
                <Briefcase size={18} color="white" />
              </div>

              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
                className="glass"
                style={{ flex: 1, padding: '28px', transition: 'all 0.3s', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '12px', background: 'rgba(16,185,129,0.15)', color: '#10B981', fontSize: '0.72rem', fontWeight: 600, marginBottom: '6px' }}>
                      INTERNSHIP
                    </div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '4px' }}>
                      {resumeData.internship.role}
                    </h3>
                    <div style={{ color: '#F97316', fontWeight: 600, fontSize: '0.9rem' }}>
                      {resumeData.internship.company}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '0.82rem' }}>
                    <Calendar size={14} />
                    {resumeData.internship.period}
                  </div>
                </div>

                <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '16px' }}>
                  {resumeData.internship.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {resumeData.internship.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        padding: '4px 12px', borderRadius: '6px',
                        background: 'rgba(16,185,129,0.08)',
                        border: '1px solid rgba(16,185,129,0.2)',
                        color: '#10B981', fontSize: '0.76rem', fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Education list */}
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{ display: 'flex', gap: '24px', marginBottom: '32px', position: 'relative' }}
            >
              {/* Dot */}
              <div className="timeline-dot" style={{ flexShrink: 0, marginTop: '4px' }}>
                <GraduationCap size={18} color="white" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
                className="glass"
                style={{ flex: 1, padding: '28px', transition: 'all 0.3s' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F8FAFC', marginBottom: '6px' }}>
                      {edu.degree}
                    </h3>
                    <div style={{ color: '#F97316', fontWeight: 600, fontSize: '0.88rem', marginBottom: '4px' }}>
                      {edu.institution}
                    </div>
                    <div style={{ color: '#94A3B8', fontSize: '0.82rem' }}>{edu.university}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '0.82rem', marginBottom: '8px', justifyContent: 'flex-end' }}>
                      <Calendar size={14} />
                      {edu.year}
                    </div>
                    <div style={{
                      padding: '6px 16px', borderRadius: '20px',
                      background: 'linear-gradient(135deg, rgba(234,88,12,0.2), rgba(249,115,22,0.1))',
                      border: '1px solid rgba(234,88,12,0.3)',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      <Award size={14} color="#F97316" />
                      <span style={{ color: '#F97316', fontWeight: 700, fontSize: '0.88rem' }}>{edu.cgpa}</span>
                    </div>
                  </div>
                </div>

                {edu.coursework.length > 0 && (
                  <div style={{ borderTop: '1px solid rgba(148,163,184,0.08)', paddingTop: '16px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '0.78rem', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      <BookOpen size={13} /> Key Coursework
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {edu.coursework.map(course => (
                        <span
                          key={course}
                          style={{
                            padding: '4px 12px', borderRadius: '6px',
                            background: 'rgba(148,163,184,0.06)',
                            border: '1px solid rgba(148,163,184,0.1)',
                            color: '#94A3B8', fontSize: '0.76rem',
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
