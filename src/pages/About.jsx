import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import FadeInSection from '../components/animations/FadeInSection';
import { bio } from '../data/content';

const About = () => {
  return (
    <div className="page-content section-padding" style={{ marginTop: '80px' }}>
      <div className="container">
        <SectionHeader title="About Sheikh Joban" subtitle="Biography" />
        
        <FadeInSection>
          <div className="about-full-bio">
            {bio.fullBio.map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>{paragraph}</p>
            ))}
          </div>
        </FadeInSection>

        <div className="mt-5"></div>

        <SectionHeader title="Education" subtitle="Background" />
        <FadeInSection>
          <ul className="education-list">
            {bio.education.map((edu, index) => (
              <li key={index} style={{ marginBottom: '1rem', borderLeft: '3px solid var(--color-gold)', paddingLeft: '1rem' }}>
                <h4 style={{ marginBottom: '0.2rem' }}>{edu.degree}</h4>
                <span style={{ color: 'var(--color-tan)' }}>{edu.institution}</span>
              </li>
            ))}
          </ul>
        </FadeInSection>

        <div className="mt-5"></div>

        <SectionHeader title="Roles & Service" subtitle="Community" />
        <FadeInSection>
           <ul className="roles-list">
            {bio.roles.map((role, index) => (
              <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-gold)', marginRight: '10px' }}>•</span>
                {role}
              </li>
            ))}
           </ul>
        </FadeInSection>
      </div>
    </div>
  );
};

export default About;

