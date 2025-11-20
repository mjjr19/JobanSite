import React from 'react';
import FadeInSection from '../animations/FadeInSection';
import './SectionHeader.scss';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <FadeInSection>
      <div className={`section-header ${centered ? 'text-center' : ''}`}>
        {subtitle && <span className="section-subtitle">{subtitle}</span>}
        <h2 className="section-title">{title}</h2>
        <div className="section-divider"></div>
      </div>
    </FadeInSection>
  );
};

export default SectionHeader;

