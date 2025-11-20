import React from 'react';
import FadeInSection from '../animations/FadeInSection';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sheikh Joban's teachings have profoundly impacted my understanding of Islam. His approachable manner and deep knowledge make complex topics accessible to everyone.",
      author: "Community Member"
    },
    {
      quote: "Through Sheikh Joban's guidance, I found my path to Islam. His patience, wisdom, and genuine care for others is truly inspiring.",
      author: "New Muslim"
    },
    {
      quote: "Sheikh Joban has been a pillar of our community for decades. His dedication to serving others and spreading knowledge is unmatched.",
      author: "Community Leader"
    }
  ];

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">Testimonials from the Community</p>
        </FadeInSection>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={index} delay={index * 0.15} direction="up">
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-quote">{testimonial.quote}</p>
                <p className="testimonial-author">— {testimonial.author}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

