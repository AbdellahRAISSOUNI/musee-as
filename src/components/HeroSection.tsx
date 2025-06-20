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

      {/* Mobile-only content - Centered logo and tagline */}
      {isMobile && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center z-10">
          {/* Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <div className="relative w-28 h-28 mb-6">
              <Image
                src="/images/projet-musee/pxjg8psj.png"
                alt="Logo Musée Abderrahman Slaoui"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Museum Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white font-bodoni text-2xl tracking-[0.15em] mb-4 leading-tight"
          >
            MUSÉE ABDERRAHMAN SLAOUI
          </motion.h1>

          {/* Elegant Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-16 h-px bg-white/60 mb-6"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white/90 font-bodoni text-base leading-relaxed max-w-xs tracking-wide"
          >
            Un patrimoine artistique et culturel marocain d'exception
          </motion.p>
        </div>
      )}
    </section>
  );
};

export default HeroSection; 