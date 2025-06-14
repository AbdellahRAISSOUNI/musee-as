"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HighlightItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface HighlightSectionProps {
  title: string;
  subtitle?: string;
  items: HighlightItem[];
}

const HighlightSection: React.FC<HighlightSectionProps> = ({ 
  title, 
  subtitle,
  items 
}) => {
  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bodoni-regular text-3xl md:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-[1px] bg-accent-gold mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <div className="relative h-[400px] mb-6 overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              
              <h3 className="font-bodoni-regular text-2xl mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-5 flex-grow">{item.description}</p>
              
              <Link 
                href={item.link} 
                className="inline-flex items-center text-accent-gold border-b border-accent-gold/0 hover:border-accent-gold transition-all duration-300 font-medium mt-auto"
              >
                Découvrir
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSection; 