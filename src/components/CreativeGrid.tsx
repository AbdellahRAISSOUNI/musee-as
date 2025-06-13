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
}

interface CreativeGridProps {
  items: GridItem[];
  title?: string;
}

const CreativeGrid: React.FC<CreativeGridProps> = ({ items, title }) => {
  // Function to determine grid span based on image dimensions and featured status
  const getGridSpan = (item: GridItem) => {
    if (item.featured) {
      return {
        gridColumn: 'span 2',
        gridRow: 'span 2',
      };
    }
    
    // Determine span based on image dimensions
    const widthSpan = item.width && item.width > 600 ? 'span 2' : 'span 1';
    const heightSpan = item.height && item.height > 600 ? 'span 2' : 'span 1';
    
    // If image is portrait (taller than wide)
    if (item.width && item.height && item.height > item.width * 1.2) {
      return {
        gridColumn: 'span 1',
        gridRow: 'span 2',
      };
    }
    
    // If image is landscape (wider than tall)
    if (item.width && item.height && item.width > item.height * 1.2) {
      return {
        gridColumn: 'span 2',
        gridRow: 'span 1',
      };
    }
    
    return {
      gridColumn: widthSpan,
      gridRow: heightSpan,
    };
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bodoni-regular text-black text-center">
              {title}
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-auto">
          {items.map((item, index) => {
            const gridSpan = getGridSpan(item);
            const colSpan = gridSpan.gridColumn === 'span 2' ? 'md:col-span-6 lg:col-span-8' : 'md:col-span-3 lg:col-span-4';
            const rowSpan = gridSpan.gridRow === 'span 2' ? 'row-span-2' : 'row-span-1';
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group bg-white overflow-hidden ${colSpan} ${rowSpan}`}
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
                      style={{ 
                        height: item.featured 
                          ? '600px' 
                          : item.height 
                            ? `${Math.min(500, item.height)}px` 
                            : '400px' 
                      }}
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
                    <div className="p-5 bg-white">
                      <h3 className="font-bodoni-regular text-xl md:text-2xl text-black mb-2 group-hover:text-accent-gold transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-700 text-sm md:text-base mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="inline-flex items-center border-b border-accent-gold text-accent-gold group-hover:border-black group-hover:text-black transition-colors">
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
        </div>
      </div>
    </section>
  );
};

export default CreativeGrid; 