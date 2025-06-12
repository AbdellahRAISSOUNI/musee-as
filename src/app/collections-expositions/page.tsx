"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const CollectionsExpositionsPage = () => {
  return (
    <main className="min-h-screen bg-black text-premium-white pt-12">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-16"
      >
        <h1 className="font-bodoni-regular text-4xl md:text-5xl lg:text-6xl mb-8 text-center">
          Collections & Expositions
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <p className="text-soft-white text-lg mb-12 leading-relaxed text-center">
            Explorez les trésors artistiques et culturels du Musée Abderrahman Slaoui, 
            des collections permanentes aux expositions temporaires qui mettent en lumière 
            la richesse et la diversité du patrimoine marocain.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg mb-6 aspect-[4/3] relative bg-graphite">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/hero-background.jpg"
                      alt="Collections Permanentes"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-bodoni-regular text-3xl text-premium-white">
                    Collections Permanentes
                  </h2>
                </div>
              </div>
              
              <p className="text-soft-white mb-6">
                Découvrez notre collection permanente d'objets d'art marocain, comprenant 
                des pièces d'orfèvrerie, des peintures, des sculptures et des objets 
                historiques qui témoignent de la richesse culturelle du Maroc.
              </p>
              
              <Link 
                href="/collections-expositions/collections-permanentes" 
                className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
              >
                Explorer les Collections
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg mb-6 aspect-[4/3] relative bg-graphite">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png"
                      alt="Expositions Temporaires"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-bodoni-regular text-3xl text-premium-white">
                    Expositions Temporaires
                  </h2>
                </div>
              </div>
              
              <p className="text-soft-white mb-6">
                Nos expositions temporaires mettent en lumière des thématiques variées 
                liées à l'art marocain et international. Découvrez les expositions 
                actuelles, passées et à venir.
              </p>
              
              <Link 
                href="/collections-expositions/expositions-temporaires" 
                className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
              >
                Voir les Expositions
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default CollectionsExpositionsPage; 