import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import FadeInSection from '../components/animations/FadeInSection';
import { videos as staticVideos, youtubeChannel } from '../data/content';
import { useYouTubeVideos } from '../hooks/useYouTubeVideos';
import { convertToEmbedUrl } from '../utils/youtube';

const Videos = () => {
  // Try to fetch videos from YouTube channel, fallback to static videos
  const { videos: youtubeVideos, loading, error } = useYouTubeVideos(youtubeChannel.handle, 20);
  const [useStaticVideos] = useState(!import.meta.env.VITE_YOUTUBE_API_KEY);
  
  // Use YouTube videos if available and API key is set, otherwise use static videos
  const videosToDisplay = (!useStaticVideos && youtubeVideos.length > 0) ? youtubeVideos : staticVideos;

  return (
    <div className="page-content section-padding" style={{ marginTop: '80px' }}>
      <div className="container">
        <SectionHeader title="Video Library" subtitle="Lectures & Talks" />
        
        {error && !useStaticVideos && (
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#fff3cd', 
            color: '#856404', 
            borderRadius: '8px', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Unable to load videos from YouTube channel. Showing static videos.
          </div>
        )}
        
        {loading && !useStaticVideos && (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Loading videos from YouTube channel...</p>
          </div>
        )}
        
        <div className="videos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {videosToDisplay.map((video, index) => (
             <FadeInSection key={video.id || `video-${index}`} delay={index * 0.1}>
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, backgroundColor: 'black' }}>
                    <iframe 
                      src={convertToEmbedUrl(video.url)} 
                      title={video.title} 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                    }}>{video.category || 'Lecture'}</span>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{video.title}</h3>
                  </div>
                </div>
             </FadeInSection>
          ))}
        </div>
        
        {youtubeChannel.url && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a 
              href={youtubeChannel.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-block' }}
            >
              Visit YouTube Channel
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;

