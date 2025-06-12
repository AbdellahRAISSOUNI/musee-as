"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const MadameLifeguidePage = () => {
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
              Madame Lifeguide Maroc
            </h1>
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
                      src="/images/presse/madame-lifeguide/Logo_wp_MAM_QVkFnE8.jpg"
                      alt="Madame Lifeguide Maroc"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-500 italic">
                      Écrit par Charlotte CORTES • Publication: juillet 2018
                    </p>
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
                    <span className="font-bold">CASABLANCA</span>
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6">
                      <span className="font-bold">"Orient Fantasmé"</span>
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      au Musée de la Fondation Abderrahman Slaoui
                    </p>
                    
                    <p className="text-gray-700 mb-6">
                      Quel rapport existe-t-il entre les réclames de l'époque coloniale et l'art contemporain ? Le fantasme oriental. Autour d'une sélection vintage d'affiches orientalistes issue de la collection du Musée de la Fondation Slaoui, l'exposition nous entraîne dans la vision occidentale des années 1930 et se confronte à la représentation de l'Orient actuel, par le biais d'œuvres contemporaines d'artistes marocaines et tunisiennes. En imaginant un dialogue entre ces deux époques, la commissaire d'exposition Laura Scemama, met en exergue la représentation de la femme : souvent simplifiée et exotisée, elle se réapproprie aujourd'hui son image à travers les questionnements de la nouvelle génération : des oeuvres "voilées" de Meriem Bouberbela aux photographies précieuses de corps languissants de Lalla Essaydi... La dualité de cet Orient féminin, si souvent interprété par l'occident, continue toujours de faire fantasmer l'imaginaire collectif.
                    </p>
                    
                    <p className="text-gray-700 mb-6 font-bold">
                      Du 26 avril au 29 septembre 2018 - Musée de la Fondation Abderrahman Slaoui - 12, rue du parc, Casablanca - +212 522 206 217
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

export default MadameLifeguidePage; 