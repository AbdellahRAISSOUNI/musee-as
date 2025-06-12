"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const H24InfoPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-12">
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
              H24 info avec Le Figaro
            </h1>
            <p className="text-soft-white text-lg md:text-xl">
              Atelier d'initiation au zellige traditionnel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Left Column - Image */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="sticky top-32"
                >
                  <div className="relative w-full h-[400px] overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/images/presse/h24-info/zellige.jpg"
                      alt="Atelier d'initiation au zellige traditionnel"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-500 italic">
                      Écrit par Emilie Taillandier • 23 février 2019
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <div className="relative w-[150px] h-[60px] mx-auto">
                      <Image
                        src="/images/presse/h24-info/images (1).jpg"
                        alt="H24 info Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Column - Content */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h2 className="font-bodoni text-3xl text-gray-900 mb-6">
                    Atelier d'initiation au zellige traditionnel
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6">
                      Le musée Slaoui a fait appel à un maître passionné pour proposer une série d'ateliers de découverte de l'art de la mosaïque marocaine et de création de motifs personnels. L'occasion d'en apprendre davantage sur l'histoire et les gestes ancestraux de cet élément fondamental de l'architecture arabo-andalouse. A partir de 4 ans. Prix: 300 DH par personne, par atelier. Inscription par mail clementbernard.fas@gmail.com.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <p className="mb-3">
                        <span className="font-bold">Quand?</span> Samedi 23 février de 11 à 13h.
                      </p>
                      <p>
                        <span className="font-bold">Où?</span> Musée de la Fondation Abderrahman Slaoui, 12, rue du parc, Casablanca.
                      </p>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      <a 
                        href="https://www.h24info.ma/culture/les-rendez-vous-culturels-du-weekend/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-gold hover:text-accent-gold/80 transition-colors"
                      >
                        Lien vers l'article original
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-end">
              <ReturnButton href="/fondation/presse" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default H24InfoPage; 