"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface QuoteSectionProps {
  quote: string;
  author: string;
  bgColor?: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ 
  quote, 
  author, 
  bgColor = "bg-charcoal" 
}) => {
  return (
    <section className={`py-24 px-6 ${bgColor}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-bodoni-italic text-3xl md:text-4xl lg:text-5xl text-premium-white mb-8 leading-relaxed">
            "{quote}"
          </h2>
          <p className="text-accent-gold text-lg">
            — {author}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection; 