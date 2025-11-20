import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/content';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          Sheikh Mohamad Joban
        </Link>

        <div className="navbar-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.path} 
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.title}
            </Link>
          ))}
          <Link to="/book" className="btn btn-primary btn-sm">
            Order Book
          </Link>
        </div>

        <div className="navbar-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="navbar-mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  to={link.path} 
                  className="navbar-mobile-link"
                  onClick={toggleMenu}
                >
                  {link.title}
                </Link>
              ))}
              <Link to="/book" className="btn btn-primary navbar-mobile-btn" onClick={toggleMenu}>
                Order Book
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

