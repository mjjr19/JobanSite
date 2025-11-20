import React from 'react';
import { navLinks, youtubeChannel } from '../../data/content';
import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Sheikh Mohamad Joban</h3>
            <p>Serving the community with knowledge and compassion.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map(link => (
                <li key={link.title}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href={youtubeChannel.url} target="_blank" rel="noopener noreferrer" title="YouTube Channel"><FaYoutube /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <Link to="/contact"><FaEnvelope /></Link>
            </div>
            <p className="mt-2">Redmond, Washington</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sheikh Mohamad Joban. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

