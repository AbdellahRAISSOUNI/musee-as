"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageLayoutProps {
  title: string;
  description?: string;
  parentLink?: {
    href: string;
    label: string;
  };
  children: ReactNode;
  maxWidth?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  parentLink,
  children,
  maxWidth = 'max-w-7xl'
}) => {
  return (
    <main className="min-h-screen bg-black text-premium-white pt-12">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-16"
      >
        <div className={`${maxWidth} mx-auto`}>
          {parentLink && (
            <Link 
              href={parentLink.href} 
              className="inline-block mb-8 text-soft-white hover:text-accent-gold transition-colors"
            >
              ← {parentLink.label}
            </Link>
          )}
          
          <h1 className="font-bodoni-regular text-4xl md:text-5xl lg:text-6xl mb-8">
            {title}
          </h1>
          
          {description && (
            <p className="text-soft-white text-lg mb-12 leading-relaxed max-w-4xl">
              {description}
            </p>
          )}
          
          {children}
        </div>
      </motion.section>
    </main>
  );
};

export default PageLayout; 