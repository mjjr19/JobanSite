import React from 'react';
import FadeInSection from '../animations/FadeInSection';
import { bio } from '../../data/content';
import './Stats.scss';

const Stats = () => {
  return (
    <section className="stats section-padding">
      <div className="container stats-container">
        {bio.stats.map((stat, index) => (
          <FadeInSection key={index} delay={index * 0.1} direction="up">
            <div className="stat-item">
              <div className="stat-value">
                {stat.value}<span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Stats;

