"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface GridItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  width?: number;
  height?: number;
  priority?: boolean;
  featured?: boolean;
  compact?: boolean;
  // New properties for artistic layout
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  offset?: boolean;
}

interface CreativeGridProps {
  items: GridItem[];
  title?: string;
  compact?: boolean;
  artistic?: boolean;
}

const CreativeGrid: React.FC<CreativeGridProps> = ({ 
  items, 
  title, 
  compact = false,
  artistic = true // Default to artistic layout
}) => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Assign random sizes and offsets to items if not already specified
  const enhancedItems = items.map((item, index) => {
    if (!artistic) return item;
    
    // If size is already specified, use it
    if (item.size) return item;
    
    // Determine a pseudo-random size based on the item's id
    const sizes = ['small', 'medium', 'large', 'wide', 'tall'];
    const sizeIndex = (index + item.id.length) % sizes.length;
    const size = sizes[sizeIndex] as 'small' | 'medium' | 'large' | 'wide' | 'tall';
    
    // Determine if this item should have an offset (for every 3rd item)
    const offset = index % 3 === 1;
    
    return {
      ...item,
      size: item.featured ? 'large' : size,
      offset
    };
  });

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {title && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bodoni-regular text-black text-center">
              {title}
            </h2>
            <motion.div 
              className="w-24 h-1 bg-accent-gold mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
          </motion.div>
        )}

        {artistic ? (
          // Artistic, asymmetrical layout
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {enhancedItems.map((item, index) => {
              // Determine styles based on size and offset
              let sizeClasses = '';
              let aspectRatio = '';
              let marginTop = '';
              
              if (item.featured) {
                sizeClasses = 'md:col-span-2 lg:col-span-2';
                aspectRatio = 'aspect-[16/9]';
              } else {
                switch(item.size) {
                  case 'small':
                    sizeClasses = '';
                    aspectRatio = 'aspect-square';
                    break;
                  case 'medium':
                    sizeClasses = 'lg:col-span-1';
                    aspectRatio = 'aspect-[4/3]';
                    break;
                  case 'large':
                    sizeClasses = 'md:col-span-2';
                    aspectRatio = 'aspect-[16/9]';
                    break;
                  case 'wide':
                    sizeClasses = 'md:col-span-2 lg:col-span-2';
                    aspectRatio = 'aspect-[2/1]';
                    break;
                  case 'tall':
                    sizeClasses = '';
                    aspectRatio = 'aspect-[2/3]';
                    break;
                  default:
                    sizeClasses = '';
                    aspectRatio = 'aspect-square';
                }
              }
              
              // Add offset for some items to create asymmetry
              if (item.offset && !item.featured) {
                marginTop = 'md:mt-12';
              }
              
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 ${sizeClasses} ${marginTop}`}
                >
                  <Link href={item.link} className="block h-full">
                    <div className="relative h-full">
                      {/* Category Label */}
                      <div className="absolute top-0 left-0 z-10">
                        <div className="bg-accent-gold text-white text-xs uppercase tracking-wider py-1 px-3 font-semibold">
                          {item.category}
                        </div>
                      </div>
                      
                      {/* Image Container */}
                      <div 
                        className={`relative overflow-hidden ${aspectRatio}`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={item.priority}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        
                        {/* Overlay gradient for text readability */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="p-4">
                        <h3 className="font-bodoni-regular text-lg md:text-xl text-black mb-2 group-hover:text-accent-gold transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="inline-flex items-center text-gray-800 border-b border-gray-800 group-hover:border-accent-gold group-hover:text-accent-gold transition-colors">
                          <span>En savoir plus</span>
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          // Original grid layout
          <motion.div 
            className={`grid ${compact 
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" 
              : "grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6"} auto-rows-auto`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {items.map((item, index) => {
              // Original grid layout code
              // Determine column and row spans based on compact mode and grid span
              let colSpan = "col-span-1";
              if (!compact && item.featured) {
                colSpan = "md:col-span-6 lg:col-span-8";
              } else if (compact && item.featured) {
                colSpan = "sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2";
              }
              
              const rowSpan = item.featured ? 'row-span-2' : 'row-span-1';
              
              // Determine image height based on compact mode and featured status
              const imageHeight = compact
                ? item.featured ? '300px' : '200px'
                : item.featured 
                  ? '600px' 
                  : item.height 
                    ? `${Math.min(500, item.height)}px` 
                    : '400px';
              
              // Determine text size based on compact mode
              const titleSize = compact ? "text-lg" : "text-xl md:text-2xl";
              const descriptionSize = compact ? "text-xs" : "text-sm md:text-base";
              const padding = compact ? "p-3" : "p-5";
              
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 ${colSpan} ${rowSpan}`}
                >
                  <Link href={item.link} className="block h-full">
                    <div className="relative h-full">
                      {/* Category Label */}
                      <div className="absolute top-0 left-0 z-10">
                        <div className="bg-accent-gold text-white text-xs uppercase tracking-wider py-1 px-3 font-semibold">
                          {item.category}
                        </div>
                      </div>
                      
                      {/* Image Container */}
                      <div 
                        className="relative overflow-hidden"
                        style={{ height: imageHeight }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={item.priority}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        
                        {/* Overlay gradient for text readability */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Text Content */}
                      <div className={`${padding} bg-white`}>
                        <h3 className={`font-bodoni-regular ${titleSize} text-black mb-2 group-hover:text-accent-gold transition-colors line-clamp-2`}>
                          {item.title}
                        </h3>
                        
                        <p className={`text-gray-700 ${descriptionSize} mb-3 line-clamp-2`}>
                          {item.description}
                        </p>
                        
                        <div className="inline-flex items-center text-gray-800 border-b border-gray-800 group-hover:border-accent-gold group-hover:text-accent-gold transition-colors">
                          <span>En savoir plus</span>
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CreativeGrid; 