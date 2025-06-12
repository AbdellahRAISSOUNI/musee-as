"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ReturnButton from '@/components/ReturnButton';

const LesBijouxMarocainsPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6">
              Les bijoux marocains
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Placeholder Content */}
            <div className="mt-8 text-center">
              <p className="text-gray-800 text-lg">
                Cette page est en cours de développement. Les images de la collection seront ajoutées prochainement.
              </p>
            </div>
            
            {/* Return Button */}
            <div className="mt-20">
              <ReturnButton href="/collections-expositions/collections-permanentes" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LesBijouxMarocainsPage; 