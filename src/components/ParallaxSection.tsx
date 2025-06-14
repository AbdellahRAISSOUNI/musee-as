"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imagePath: string;
  imageAlt: string;
  buttonText?: string;
  buttonLink?: string;
  reverse?: boolean;
  overlayOpacity?: number;
  height?: 'small' | 'medium' | 'large';
  parallaxStrength?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  title,
  subtitle,
  description,
  imagePath,
  imageAlt,
  buttonText,
  buttonLink,
  reverse = false,
  overlayOpacity = 30,
  height = 'medium',
  parallaxStrength = 20,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const { scrollY } = useScroll();
  
  // Calculate the parallax effect with dynamic strength
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    reverse ? [`${parallaxStrength}%`, '0%'] : ['0%', `-${parallaxStrength}%`]
  );
  
  // Add subtle scale effect
  const scale = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop, elementTop + clientHeight],
    [1.05, 1, 1.05]
  );
  
  // Add subtle blur effect
  const blur = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop, elementTop + clientHeight],
    ['1px', '0px', '1px']
  );
  
  // Add subtle text animations based on scroll
  const textY = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop, elementTop + clientHeight],
    ['-5%', '0%', '5%']
  );
  
  const textOpacity = useTransform(
    scrollY,
    [elementTop - clientHeight/2, elementTop, elementTop + clientHeight/2],
    [0.8, 1, 0.8]
  );
  
  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        const element = sectionRef.current;
        const rect = element.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
        setClientHeight(window.innerHeight);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', () => handleResize());
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', () => handleResize());
    };
  }, []);

  // Determine section height based on prop
  const getHeightClass = () => {
    switch(height) {
      case 'small': return 'h-[300px] md:h-[350px]';
      case 'large': return 'h-[500px] md:h-[550px]';
      default: return 'h-[400px] md:h-[450px]';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden bg-black ${getHeightClass()}`}
    >
      {/* Parallax Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y, scale }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div className="w-full h-full" style={{ filter: `blur(${blur})` }}>
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </motion.div>
        
        {/* Custom gradient overlay from bottom to top - about 1/3 of the image height */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent" style={{ 
          background: 'linear-gradient(to top, black 0%, black 10%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 30%, transparent 40%)' 
        }}></div>
        
        {/* Additional overlay for better text visibility */}
        <div className={`absolute inset-0 bg-black/${overlayOpacity}`}></div>
      </motion.div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          ref={contentRef}
          className="container relative z-10 mx-auto px-4 md:px-6"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="max-w-3xl mx-auto text-center text-white">
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-3 font-bodoni-italic text-lg md:text-xl text-white/90 text-shadow-sm"
              >
                {subtitle}
              </motion.p>
            )}
            
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-bodoni-regular text-3xl md:text-4xl lg:text-5xl mb-6 text-white text-shadow-lg"
              >
                {title}
              </motion.h2>
            )}
            
            {description && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg leading-relaxed text-white mb-8 max-w-2xl mx-auto font-medium text-shadow-sm"
              >
                {description}
              </motion.p>
            )}
            
            {buttonText && buttonLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10"
              >
                <Link 
                  href={buttonLink}
                  className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-white bg-transparent border-2 border-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-gold/20"
                >
                  <span className="absolute inset-0 w-full h-0 transition-all duration-500 ease-out bg-black group-hover:h-full"></span>
                  <span className="relative text-white group-hover:text-accent-gold transition-colors duration-300 font-semibold tracking-wide">
                    {buttonText}
                  </span>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>
    </section>
  );
};

export default ParallaxSection; 