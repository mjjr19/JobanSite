import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import FadeInSection from '../animations/FadeInSection';
import { videos } from '../../data/content';
import './FeaturedVideos.scss';

const FeaturedVideos = () => {
  // Take only the first 3 videos
  const featured = videos.slice(0, 3);

  return (
    <section className="featured-videos section-padding">
      <div className="container">
        <SectionHeader title="Latest Lectures" subtitle="Watch & Learn" />
        
        <div className="videos-grid">
          {featured.map((video, index) => (
            <FadeInSection key={video.id} delay={index * 0.1}>
              <div className="video-card">
                <div className="video-thumbnail">
                  <iframe 
                    src={video.url} 
                    title={video.title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <span className="video-category">{video.category}</span>
                  <h3>{video.title}</h3>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
        
        <div className="text-center mt-large">
          <Link to="/videos" className="btn btn-primary">
            See All Videos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;

