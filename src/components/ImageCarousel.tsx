"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Use the same gold color from the contact page
const gold = '#bfa76a';

interface ImageCarouselProps {
  title?: string;
  subtitle?: string;
  images: {
    src: string;
    alt: string;
  }[];
  buttonLink: string;
  buttonText: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  title,
  subtitle,
  images, 
  buttonLink,
  buttonText
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle drag interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (carouselRef.current) {
      const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Update active index based on scroll position
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.scrollWidth / images.length;
      const index = Math.round(scrollPosition / itemWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-charcoal to-black text-premium-white relative">
      {/* Decorative white line at top - now wider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-[1px] bg-white"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <h2 className="font-bodoni-regular text-3xl md:text-4xl lg:text-5xl mb-4 relative" style={{ color: gold }}>
                {title}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></span>
              </h2>
              {subtitle && (
                <p className="text-soft-white mt-4 max-w-2xl mx-auto font-bodoni-italic">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}
        </div>

        {/* Draggable Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-8"
            style={{ 
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',  /* IE and Edge */
              scrollbarWidth: 'none',   /* Firefox */
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onScroll={handleScroll}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative flex-none w-[280px] md:w-[380px] h-[300px] md:h-[380px] snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 280px, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white text-sm sm:text-base font-bodoni-regular opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      {image.alt}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full border border-transparent group-hover:border-opacity-30" style={{ borderColor: gold }}></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    const scrollWidth = carouselRef.current.scrollWidth;
                    const itemWidth = scrollWidth / images.length;
                    carouselRef.current.scrollLeft = itemWidth * index;
                    setActiveIndex(index);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'w-6' 
                    : 'hover:bg-opacity-70'
                }`}
                style={{ 
                  backgroundColor: activeIndex === index ? gold : '#555555'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Button with premium fill-from-bottom effect */}
        <div className="flex justify-center mt-12">
          <Link href={buttonLink} className="group">
            <div className="relative inline-flex items-center">
              <div className="h-[1px] w-12 mr-6 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: `${gold}70` }}></div>
              <div className="relative overflow-hidden cursor-pointer">
                <button 
                  className="px-8 py-3 border rounded-sm font-bodoni-regular text-lg relative z-10 transition-colors duration-500 cursor-pointer"
                  style={{ 
                    borderColor: gold, 
                    color: gold
                  }}
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    {buttonText}
                  </span>
                  <span 
                    className="absolute bottom-0 left-0 w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full -z-10"
                    style={{ backgroundColor: gold }}
                  ></span>
                </button>
              </div>
              <div className="h-[1px] w-12 ml-6 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: `${gold}70` }}></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel; 