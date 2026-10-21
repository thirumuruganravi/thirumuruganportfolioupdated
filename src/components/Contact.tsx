import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" style={{ background: 'rgba(15,23,42,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '12px' }}>— GET IN TOUCH —</div>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Open to exciting Java Developer opportunities, internships, and collaborations
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'start' }} className="contact-grid">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.4rem', marginBottom: '16px' }}>
              Ready to collaborate? <span className="gradient-text">Let's talk!</span>
            </h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.9, marginBottom: '36px', fontSize: '0.92rem' }}>
              I'm actively seeking Java Developer roles and entry-level software engineering positions. Whether you have an opportunity, a project, or just want to connect — feel free to reach out!
            </p>

            {/* Contact info items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              {[
                { icon: <Mail size={20} color="#F97316" />, label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}` },
                { icon: <Phone size={20} color="#F97316" />, label: 'Phone', value: resumeData.phone, href: `tel:${resumeData.phone}` },
                { icon: <MapPin size={20} color="#F97316" />, label: 'Location', value: resumeData.location, href: '' },
              ].map(item => (
                <motion.a
                  key={item.label}
                  href={item.href || '#'}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '16px 20px', borderRadius: '12px',
                    background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(148,163,184,0.08)',
                    textDecoration: 'none', transition: 'all 0.2s', color: 'inherit',
                  }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = 'rgba(234,88,12,0.3)')}
                  onMouseOut={e => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.08)')}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(234,88,12,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: '#94A3B8', fontSize: '0.75rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                    <div style={{ color: '#F8FAFC', fontWeight: 500, fontSize: '0.9rem' }}>{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <FaGithub size={20} />, url: resumeData.github, label: 'GitHub' },
                { icon: <FaLinkedin size={20} />, url: resumeData.linkedin, label: 'LinkedIn' },
              ].map(social => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(148,163,184,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94A3B8', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseOver={e => { (e.currentTarget as any).style.color = '#F97316'; (e.currentTarget as any).style.borderColor = 'rgba(234,88,12,0.4)'; }}
                  onMouseOut={e => { (e.currentTarget as any).style.color = '#94A3B8'; (e.currentTarget as any).style.borderColor = 'rgba(148,163,184,0.15)'; }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}
          >
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{
                    position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.97)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '16px', zIndex: 10, gap: '16px',
                  }}
                >
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6 }}>
                    <CheckCircle size={60} color="#22c55e" />
                  </motion.div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#F8FAFC' }}>Message Sent! 🎉</h3>
                  <p style={{ color: '#94A3B8', textAlign: 'center', maxWidth: '280px', lineHeight: 1.7 }}>
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: '24px', color: '#F8FAFC' }}>
              Send a Message ✉️
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <input
                    className="contact-input"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    id="contact-name"
                  />
                  {errors.name && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.name}</div>}
                </div>
                <div>
                  <input
                    className="contact-input"
                    placeholder="Your Email"
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    id="contact-email"
                  />
                  {errors.email && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.email}</div>}
                </div>
              </div>
              <div>
                <input
                  className="contact-input"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  id="contact-subject"
                />
                {errors.subject && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.subject}</div>}
              </div>
              <div>
                <textarea
                  className="contact-input"
                  placeholder="Your message..."
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  id="contact-message"
                  style={{ resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
                />
                {errors.message && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.message}</div>}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{ justifyContent: 'center', width: '100%', padding: '14px' }}
                id="contact-submit"
              >
                <Send size={17} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
