import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/animations/TiltCard';
import FadeInSection from '../components/animations/FadeInSection';
import { book } from '../data/content';

const Book = () => {
  return (
    <div className="page-content section-padding" style={{ marginTop: '80px' }}>
      <div className="container">
        <SectionHeader title={book.title} subtitle="The Book" />
        
        <div className="book-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <FadeInSection direction="right">
            <TiltCard>
              <div style={{ 
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '5px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}>
                <img 
                  src={book.coverImage} 
                  alt={`${book.title} - ${book.subtitle}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '5px'
                  }}
                />
              </div>
            </TiltCard>
          </FadeInSection>

          <FadeInSection direction="left">
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{book.subtitle}</h2>
             <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>{book.description}</p>
             
             <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>Why Read This Book?</h3>
             <p style={{ marginBottom: '2rem' }}>
               This memoir offers a unique perspective on the challenges and triumphs of spreading the message of Islam in the West. 
               Sheikh Joban shares personal stories that will inspire, educate, and move you.
             </p>

             <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
               Order Now via Google Form
             </a>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Book;

