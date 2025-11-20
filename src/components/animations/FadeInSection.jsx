import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInSection = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const directionOffset = {
    up: 50,
    down: -50,
    left: 50,
    right: -50,
    none: 0
  };

  const axis = (direction === 'left' || direction === 'right') ? 'x' : 'y';

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        [axis]: directionOffset[direction] 
      }}
      animate={isInView ? { 
        opacity: 1, 
        [axis]: 0 
      } : { 
        opacity: 0, 
        [axis]: directionOffset[direction] 
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;

