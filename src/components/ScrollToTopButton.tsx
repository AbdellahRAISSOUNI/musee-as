"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-200 hover:border-accent-gold hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Retour en haut de page"
        >
          <FiArrowUp 
            size={20} 
            className="text-accent-gold transition-transform duration-300 group-hover:-translate-y-0.5" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;