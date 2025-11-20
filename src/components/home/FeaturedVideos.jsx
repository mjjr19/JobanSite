import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import FadeInSection from '../animations/FadeInSection';
import { videos as staticVideos, youtubeChannel } from '../../data/content';
import { useYouTubeVideos } from '../../hooks/useYouTubeVideos';
import { convertToEmbedUrl } from '../../utils/youtube';
import './FeaturedVideos.scss';

const FeaturedVideos = () => {
  // Try to fetch videos from YouTube channel, fallback to static videos
  const hasApiKey = !!import.meta.env.VITE_YOUTUBE_API_KEY;
  const { videos: youtubeVideos, loading } = useYouTubeVideos(youtubeChannel.handle, 3);
  
  // Use YouTube videos if available and API key is set, otherwise use static videos
  const videos = (hasApiKey && youtubeVideos.length > 0 && !loading) ? youtubeVideos : staticVideos;
  
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
                    src={convertToEmbedUrl(video.url)} 
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
        
        <div className="text-center mt-large" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/videos" className="btn btn-primary">
            See All Videos
          </Link>
          <a 
            href={youtubeChannel.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;

