"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
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

  return (
    <section 
      ref={heroRef}
      className="hero-section relative h-screen w-full overflow-hidden"
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
          className="object-cover object-center filter blur-[2px]"
          sizes="100vw"
        />
        
        {/* Darker overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Enhanced gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        {/* Additional dark overlay specifically for text areas */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 