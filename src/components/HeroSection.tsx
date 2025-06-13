"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle text opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate opacity based on scroll position
      // Start fading at 50px scroll, fully transparent at 300px
      const startFade = 50;
      const endFade = 300;
      
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

  return (
    <section 
      ref={heroRef}
      className="hero-section relative h-screen w-full overflow-hidden mt-[-150px]"
    >
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          y: isMobile ? 0 : y,
          scale,
          opacity: imageOpacity
        }}
    >
        <Image 
          src="/images/fondation/rbati_slide.jpg" 
          alt="Musée Abderrahman Slaoui" 
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"></div>
        
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
      </motion.div>

      {/* Content overlay */}
      <div 
        className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center z-10"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 sm:mb-8 mt-[85px] md:mt-[75px]" // Adjusted top margin for different screen sizes
        >
          <span className="text-accent-gold uppercase tracking-widest font-bodoni-regular text-sm md:text-base px-3 py-1 border-t border-b border-accent-gold/30 inline-block">
            Fondation
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bodoni-regular text-premium-white max-w-6xl leading-tight mb-6 sm:mb-8 tracking-tight px-2"
          style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Musée Abderrahman Slaoui
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-24 sm:w-32 h-0.5 bg-accent-gold mb-8 sm:mb-10 origin-center"
        ></motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-soft-white max-w-3xl font-bodoni-regular tracking-wide px-4"
          style={{ textShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          Un patrimoine artistique et culturel marocain d'exception
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection; 