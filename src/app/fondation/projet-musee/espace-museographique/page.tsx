"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const EspaceMuseographiquePage = () => {
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
              L'espace muséographique
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Return Button */}
            <ReturnButton href="/fondation/projet-musee" />

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg mb-8">
                <Image
                  src="/images/projet-musee/espace-museographique/pxjg8psj.png"
                  alt="Musée Abderrahman Slaoui"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Les collections du Musée de la Fondation Abderrahman Slaoui se développent sur 600 m² répartis en 3 étages. La scénographie, pensée par le scénographe Philippe Délis, a été conçue dans l'esprit d'une maison de collectionneur : elle conserve la chaleur, l'invitation et la convivialité pour en faire un musée qui est bien plus large qu'un espace académique. Du papier peint créée pour identifier les différentes séquences d'exposition en reprenant les objets présentés, à la mémoire du bureau d'Abderrahman Slaoui qui ouvre l'espace muséographique, le Musée de la Fondation Abderrahman Slaoui est intimiste : une Maison-Musée qui offre un cadre agréable pour contempler et toute quiétude la multitude d'objets.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Les collections permanentes s'ouvrent sur les salles d'expositions temporaires où sont présentées, selon les périodes, des œuvres d'art contemporain ou des pièces en réserve de la collection d'Abderrahman Slaoui.
                </p>
              </div>
            </motion.div>

            {/* Floor Plans */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-bodoni text-3xl text-gray-900 mb-6">
                Les étages du musée
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <div className="my-8">
                  <h3 className="font-bodoni text-2xl text-accent-gold mb-4">1er étage</h3>
                  <div className="relative h-[500px] overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/images/projet-musee/espace-museographique/plan_etage_1.jpg"
                      alt="Plan du 1er étage"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="my-8">
                  <h3 className="font-bodoni text-2xl text-accent-gold mb-4">2ème étage</h3>
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-6 bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500 italic">Plan du 2ème étage</p>
                  </div>
                </div>
                
                <div className="my-8">
                  <h3 className="font-bodoni text-2xl text-accent-gold mb-4">3ème étage</h3>
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-6 bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500 italic">Plan du 3ème étage</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-12 flex justify-end">
              <ReturnButton href="/fondation/projet-musee" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EspaceMuseographiquePage; 