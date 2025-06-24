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
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Calculate the parallax effect with enhanced strength - only for mobile
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    reverse ? [`${parallaxStrength * 1.5}%`, '0%'] : ['0%', `-${parallaxStrength * 1.5}%`]
  );
  
  // Enhanced scale effect for more dramatic parallax - only for mobile
  const scale = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop, elementTop + clientHeight],
    [1.15, 1, 1.15]
  );
  
  // Dynamic overlay opacity based on scroll
  const overlayBlendOpacity = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop, elementTop + clientHeight],
    [0.4, 0.6, 0.4]
  );
  
  // Reduced text animations to keep content within image bounds
  const textY = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop, elementTop + clientHeight],
    ['0%', '0%', '0%']
  );
  
  const textOpacity = useTransform(
    scrollY,
    [elementTop - clientHeight/2, elementTop, elementTop + clientHeight/2],
    [1, 1, 1]
  );

  // Floating elements animation
  const floatY = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    ['20px', '-20px']
  );
  
  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        const element = sectionRef.current;
        const rect = element.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
        setClientHeight(window.innerHeight);
        setIsMobile(window.innerWidth < 768);
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
      case 'small': return 'h-[400px] md:h-[500px]';
      case 'large': return 'h-[700px] md:h-[800px]';
      default: return 'h-[600px] md:h-[700px]';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden bg-black ${getHeightClass()}`}
    >
      {/* Enhanced Parallax Image with Multiple Layers */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ 
          y: isMobile ? y : 0, 
          scale: isMobile ? scale : 1 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="w-full h-full relative">
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          
          {/* Multi-layered sophisticated overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <motion.div 
            className="absolute inset-0 bg-black/20 mix-blend-multiply"
            style={{ opacity: overlayBlendOpacity }}
          ></motion.div>
          
          {/* Geometric overlay pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(30deg, #bfa76a 12%, transparent 12.5%, transparent 87%, #bfa76a 87.5%, #bfa76a),
                linear-gradient(150deg, #bfa76a 12%, transparent 12.5%, transparent 87%, #bfa76a 87.5%, #bfa76a),
                linear-gradient(30deg, #bfa76a 12%, transparent 12.5%, transparent 87%, #bfa76a 87.5%, #bfa76a),
                linear-gradient(150deg, #bfa76a 12%, transparent 12.5%, transparent 87%, #bfa76a 87.5%, #bfa76a)
              `,
              backgroundSize: '80px 140px',
              backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
            }}
          ></div>
        </div>
      </motion.div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#bfa76a] rounded-full opacity-60"
        style={{ y: floatY }}
      ></motion.div>
      <motion.div 
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#bfa76a] rounded-full opacity-40"
        style={{ y: useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight], ['-30px', '30px']) }}
      ></motion.div>
      
      {/* Enhanced Content with Modern Layout */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          ref={contentRef}
          className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-8 text-white space-y-8">
                {subtitle && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-[1px] bg-gradient-to-r from-[#bfa76a] to-transparent"></div>
                    <p className="font-bodoni text-sm md:text-base text-[#bfa76a] uppercase tracking-[0.2em] font-medium">
                      {subtitle}
                    </p>
                  </motion.div>
                )}
                
                {title && (
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="font-bodoni text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-white font-light"
                  >
                    <span className="block">{title.split(' ')[0]}</span>
                    <span className="block text-[#bfa76a] font-normal">
                      {title.split(' ').slice(1).join(' ')}
                    </span>
                  </motion.h2>
                )}
                
                {description && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-4"
                  >
                    <div className="w-20 h-[2px] bg-[#bfa76a]"></div>
                    <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl font-light">
                      {description}
                    </p>
                  </motion.div>
                )}
              </div>
              
              {/* Right Side - Decorative Elements & Button */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-8">
                {/* Decorative geometric element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-32 h-32 border border-[#bfa76a]/30 rotate-45 relative">
                    <div className="absolute inset-4 border border-[#bfa76a]/60 rotate-45"></div>
                    <div className="absolute inset-8 bg-[#bfa76a]/20 rotate-45"></div>
                  </div>
                </motion.div>
                
                {buttonText && buttonLink && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10"
                  >
                    <Link 
                      href={buttonLink}
                      className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-medium text-white bg-transparent border border-[#bfa76a] transition-all duration-500 hover:border-white md:backdrop-blur-sm md:bg-black/10"
                    >
                      <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-[#bfa76a] group-hover:w-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black font-medium tracking-wide">
                        {buttonText}
                      </span>
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#bfa76a] to-transparent"></div>
    </section>
  );
};

export default ParallaxSection; 