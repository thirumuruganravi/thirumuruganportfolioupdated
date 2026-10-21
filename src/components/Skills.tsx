import { motion } from 'framer-motion';
import { FaJava, FaGithub, FaCode, FaDatabase, FaLaptopCode, FaGears } from 'react-icons/fa6';
import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiApachemaven,
  SiDocker,
  SiPostman,
  SiLinux,
} from 'react-icons/si';
import { resumeData } from '../data/resumeData';

const getSkillIcon = (name: string) => {
  switch (name) {
    case 'Java':
      return <FaJava color="#EA580C" size={14} />;
    case 'Spring Boot':
    case 'Spring MVC':
    case 'Spring Data JPA':
      return <SiSpringboot color="#6DB33F" size={13} />;
    case 'Hibernate ORM':
      return <SiHibernate color="#94A3B8" size={13} />;
    case 'MySQL':
      return <SiMysql color="#4479A1" size={14} />;
    case 'PostgreSQL':
      return <SiPostgresql color="#4169E1" size={13} />;
    case 'Git':
      return <SiGit color="#F05032" size={13} />;
    case 'GitHub':
      return <FaGithub color="#F8FAFC" size={13} />;
    case 'Maven':
      return <SiApachemaven color="#C71A36" size={13} />;
    case 'Docker':
    case 'Docker Basics':
      return <SiDocker color="#2496ED" size={13} />;
    case 'Postman':
      return <SiPostman color="#FF6C37" size={13} />;
    case 'Linux':
      return <SiLinux color="#FCC624" size={13} />;
    default:
      return null;
  }
};

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode color="#EA580C" size={20} />,
    color: '#EA580C',
    skills: resumeData.skills.languages.map(s => ({
      name: s,
      level: s === 'Java' ? 95 : s === 'SQL' ? 88 : 75,
    })),
  },
  {
    title: 'Core Java',
    icon: <FaJava color="#F97316" size={22} />,
    color: '#F97316',
    skills: resumeData.skills.coreJava.map(s => ({ name: s, level: 88 })),
  },
  {
    title: 'Frameworks',
    icon: <SiSpringboot color="#6DB33F" size={20} />,
    color: '#6DB33F',
    skills: resumeData.skills.frameworks.map(s => ({
      name: s,
      level: s === 'Spring Boot' ? 90 : 80,
    })),
  },
  {
    title: 'Database',
    icon: <FaDatabase color="#FBBF24" size={18} />,
    color: '#FBBF24',
    skills: resumeData.skills.database.map(s => ({ name: s, level: 82 })),
  },
  {
    title: 'Frontend',
    icon: <FaLaptopCode color="#FB923C" size={20} />,
    color: '#FB923C',
    skills: resumeData.skills.frontend.map(s => ({ name: s, level: 70 })),
  },
  {
    title: 'Tools & DevOps',
    icon: <FaGears color="#F97316" size={20} />,
    color: '#F97316',
    skills: resumeData.skills.tools.map(s => ({ name: s, level: 78 })),
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'rgba(15,23,42,0.5)', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '12px' }}>— WHAT I KNOW —</div>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '16px', maxWidth: '520px', margin: '16px auto 0', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Core Java, Spring Boot, Databases, and Full Stack Backend technologies I specialize in
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }} className="skills-grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 20px 45px rgba(0,0,0,0.4)` }}
              className="glass card-hover"
              style={{
                padding: '24px',
                borderRadius: '18px',
                border: '1px solid rgba(148,163,184,0.12)',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '12px',
                  background: `linear-gradient(135deg, ${cat.color}25, ${cat.color}10)`,
                  border: `1px solid ${cat.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 15px ${cat.color}20`,
                }}>
                  {cat.icon}
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#F8FAFC' }}>
                  {cat.title}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map(skill => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.08 }}
                    className="skill-badge"
                    style={{ fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    {getSkillIcon(skill.name)}
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
