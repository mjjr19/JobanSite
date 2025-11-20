import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Stats from '../components/home/Stats';
import FeaturedVideos from '../components/home/FeaturedVideos';
import FadeInSection from '../components/animations/FadeInSection';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutPreview />
      <Stats />
      <FeaturedVideos />
    </div>
  );
};

export default Home;

