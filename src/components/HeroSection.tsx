"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import HeroVideo from './HeroVideo';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate opacity based on scroll position
      // Start fading at 50px scroll, fully transparent at 500px
      const startFade = 50;
      const endFade = 500;
      
      if (currentScrollY <= startFade) {
        setOpacity(1);
      } else if (currentScrollY >= endFade) {
        setOpacity(0);
      } else {
        // Linear interpolation between 1 and 0
        const newOpacity = 1 - ((currentScrollY - startFade) / (endFade - startFade));
        setOpacity(newOpacity);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    // Get first section after hero
    const firstSection = document.querySelector('section:not(.hero-section)');
    if (firstSection) {
      const yOffset = -150; // Account for header height
      const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="hero-section relative h-screen w-full overflow-hidden mt-[-150px]"
      style={{ opacity }}
    >
      {/* Video background */}
      <HeroVideo />

      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 mt-[75px]" // Add extra top margin to account for header
        >
          <span className="text-accent-gold uppercase tracking-widest font-bodoni-regular text-sm md:text-base">
            Fondation
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bodoni-regular text-premium-white max-w-5xl leading-tight mb-4"
        >
          Musée Abderrahman Slaoui
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-soft-white max-w-2xl mb-10 font-bodoni-regular"
        >
          Un patrimoine artistique et culturel marocain d'exception
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button 
            className="px-8 py-4 bg-transparent border border-accent-gold text-premium-white hover:bg-accent-gold/10 transition-colors duration-300 font-bodoni-regular text-lg uppercase tracking-wider"
            onClick={() => window.location.href = '#exhibitions'}
          >
            Découvrir
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: [0.4, 1, 0.4], 
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        onClick={scrollToContent}
      >
        <FaChevronDown className="text-premium-white text-2xl" />
      </motion.div>
    </section>
  );
};

export default HeroSection; 