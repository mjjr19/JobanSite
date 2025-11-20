import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import FeaturedVideos from '../components/home/FeaturedVideos';
import FadeInSection from '../components/animations/FadeInSection';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutPreview />
      <Testimonials />
      <FeaturedVideos />
    </div>
  );
};

export default Home;

