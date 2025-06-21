"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down more than 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 8px 25px rgba(212, 175, 55, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-accent-gold hover:bg-accent-gold/80 text-white rounded-full shadow-2xl border-2 border-white/20 flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
          aria-label="Retour en haut de la page"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaChevronUp 
              size={16} 
              className="group-hover:text-white transition-colors duration-200" 
            />
          </motion.div>
          
          {/* Elegant border ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-60"
            initial={{ scale: 0.8 }}
            whileHover={{ 
              scale: 1.2,
              opacity: 0.6,
              transition: { duration: 0.3 }
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton; 