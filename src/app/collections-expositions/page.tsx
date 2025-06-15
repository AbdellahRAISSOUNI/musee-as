"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaBook, FaCalendarAlt } from 'react-icons/fa';

const gold = '#bfa76a';

const CollectionsExpositionsPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png"
            alt="Collections et Expositions du Musée Abderrahman Slaoui"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
              Collections & Expositions
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Introduction Text */}
            <div className="mb-16">
              <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto text-center">
                Explorez les trésors artistiques et culturels du Musée Abderrahman Slaoui, 
                des collections permanentes aux expositions temporaires qui mettent en lumière 
                la richesse et la diversité du patrimoine marocain.
              </p>
            </div>
            
            {/* Services */}
            <div className="space-y-24">
              {/* Collections Permanentes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                {/* Image Container */}
                <div className="w-full md:w-1/2 h-[400px] relative group">
                  <Link href="/collections-expositions/collections-permanentes" className="block w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                    <motion.div 
                      className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold z-20"
                      initial={false}
                      whileHover={{ 
                        scale: 0.97,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Image
                        src="/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png"
                        alt="Collections Permanentes"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </Link>
                </div>
                
                {/* Content Container */}
                <div className="w-full md:w-1/2 p-6">
                  <motion.div
                    initial={false}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <div className="flex items-center mb-4">
                      <FaBook className="text-accent-gold text-2xl mr-3" />
                      <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900">
                        Collections Permanentes
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">
                      Découvrez notre collection permanente d'objets d'art marocain, comprenant 
                      des pièces d'orfèvrerie, des peintures, des sculptures et des objets 
                      historiques qui témoignent de la richesse culturelle du Maroc.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
                      <h3 className="font-medium text-accent-gold mb-3">Nos collections comprennent :</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Les bijoux marocains</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Les affiches orientalistes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>La céramique de Fès</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Les flacons de khôl et tabatières</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Les cabinets de curiosité</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Link href="/collections-expositions/collections-permanentes" className="inline-flex items-center text-accent-gold group">
                      <span className="mr-2 font-medium">Explorer les Collections</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Expositions Temporaires */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
              >
                {/* Image Container */}
                <div className="w-full md:w-1/2 h-[400px] relative group">
                  <Link href="/collections-expositions/expositions-temporaires" className="block w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                    <motion.div 
                      className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold z-20"
                      initial={false}
                      whileHover={{ 
                        scale: 0.97,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Image
                        src="/images/expositions-temporaires/casa-drawing/Casa_Drawing_2_visuel_1.jpg"
                        alt="Expositions Temporaires"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </Link>
                </div>
                
                {/* Content Container */}
                <div className="w-full md:w-1/2 p-6">
                  <motion.div
                    initial={false}
                    whileHover={{ x: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="flex items-center mb-4">
                      <FaCalendarAlt className="text-accent-gold text-2xl mr-3" />
                      <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900">
                        Expositions Temporaires
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">
                      Nos expositions temporaires mettent en lumière des thématiques variées 
                      liées à l'art marocain et international. Découvrez les expositions 
                      actuelles, passées et à venir qui enrichissent l'expérience du musée.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
                      <h3 className="font-medium text-accent-gold mb-3">Expositions récentes :</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Orient Fantasmé</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Casa Drawing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Noise on Paper</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Of Voice and Stone</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Mémoire des Cactus</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Link href="/collections-expositions/expositions-temporaires" className="inline-flex items-center text-accent-gold group">
                      <span className="mr-2 font-medium">Voir les Expositions</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionsExpositionsPage; 