import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TiltCard from '../animations/TiltCard';
import { book } from '../../data/content';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-subtitle">Now Available</span>
          <h1 className="hero-title">{book.title}</h1>
          <p className="hero-description">{book.subtitle}</p>
          <p className="hero-text">{book.description}</p>
          <div className="hero-actions">
            <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              Order the Book
            </a>
            <Link to="/book" className="btn btn-outline btn-large">
              Read More
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TiltCard className="hero-book-card">
            <div className="book-cover">
              {/* Placeholder for book cover */}
              <div className="book-spine"></div>
              <div className="book-front">
                <h2>{book.title}</h2>
                <p>Sheikh Mohamad Joban</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;

