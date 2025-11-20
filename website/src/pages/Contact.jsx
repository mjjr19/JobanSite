import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import FadeInSection from '../components/animations/FadeInSection';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const email = 'mjoban@comcast.net';

  return (
    <div className="page-content section-padding" style={{ marginTop: '80px' }}>
      <div className="container">
        <SectionHeader title="Contact Sheikh Joban" subtitle="Get in Touch" />
        
        <div className="contact-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeInSection>
            <div style={{ backgroundColor: 'white', padding: '60px 40px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ marginBottom: '3rem' }}>
                <FaEnvelope style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1.5rem' }} />
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>Email Sheikh Joban</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '2rem' }}>
                  For inquiries, event invitations, religious guidance, or any other matters, please reach out via email.
                </p>
                <a 
                  href={`mailto:${email}`}
                  className="btn btn-primary btn-large"
                  style={{ 
                    display: 'inline-block',
                    fontSize: '1.2rem',
                    padding: '15px 40px'
                  }}
                >
                  <FaEnvelope style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                  {email}
                </a>
              </div>

              <div style={{ borderTop: '1px solid #eee', paddingTop: '2rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FaMapMarkerAlt style={{ color: 'var(--color-gold)', fontSize: '1.5rem' }} />
                    <span style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)' }}>Redmond, Washington</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;

