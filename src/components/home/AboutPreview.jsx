import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../animations/FadeInSection';
import { bio } from '../../data/content';
import './AboutPreview.scss';

const AboutPreview = () => {
  return (
    <section className="about-preview section-padding">
      <div className="container about-preview-container">
        <FadeInSection direction="right">
          <div className="about-image">
            <div className="image-placeholder">
              <img 
                src={`${import.meta.env.BASE_URL}Biopic.jpg`}
                alt={bio.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </FadeInSection>
        
        <FadeInSection direction="left">
          <div className="about-content">
            <span className="subtitle">Meet the Scholar</span>
            <h2>{bio.name}</h2>
            <h3>{bio.title}</h3>
            <p>{bio.shortBio}</p>
            <p className="mt-4">
              He has served as the Imam of the Islamic Center of Olympia for over 20 years and continues to lead as the President of the Imam Fatwa Committee of Washington State.
            </p>
            <Link to="/about" className="btn btn-outline mt-6">
              Learn More
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutPreview;

