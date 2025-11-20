import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import FadeInSection from '../components/animations/FadeInSection';
import { videos } from '../data/content';

const Videos = () => {
  return (
    <div className="page-content section-padding" style={{ marginTop: '80px' }}>
      <div className="container">
        <SectionHeader title="Video Library" subtitle="Lectures & Talks" />
        
        <div className="videos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {videos.map((video, index) => (
             <FadeInSection key={video.id} delay={index * 0.1}>
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, backgroundColor: 'black' }}>
                    <iframe 
                      src={video.url} 
                      title={video.title} 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                      color: 'var(--color-gold)', 
                      padding: '4px 10px', 
                      borderRadius: '20px', 
                      fontSize: '0.8rem', 
                      fontWeight: '600', 
                      marginBottom: '10px',
                      textTransform: 'uppercase'
                    }}>{video.category}</span>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{video.title}</h3>
                  </div>
                </div>
             </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;

