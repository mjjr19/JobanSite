import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/global.scss';

const Button = ({ children, to, onClick, variant = 'primary', size = 'medium', className = '' }) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button 
      className={classes} 
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;

