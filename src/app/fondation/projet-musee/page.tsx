"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const ProjetMuseePage = () => {
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
              Le Projet de Musée
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Return Button */}
            <ReturnButton href="/fondation" />

            {/* Two Main Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Abderrahman Slaoui Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white"
              >
                <h2 className="font-bodoni text-3xl text-accent-gold mb-6">
                  Abderrahman Slaoui, humaniste éclairé (1919-2001)
                </h2>
                
                <div className="mb-6 relative h-[300px] overflow-hidden">
                  <Image
                    src="/images/projet-musee/abderrahman-slaoui/abderrahman-slaoui_9MciH0M.jpg"
                    alt="Abderrahman Slaoui"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                
                <p className="text-gray-700 mb-6">
                  Né à Fès en 1919, Abderrahman Slaoui est un homme d'affaires et industriel à la fois esthète et humaniste : derrière le professionnel avisé, apparaît, comme une seconde nature, la sensibilité du collectionneur. Dès l'enfance, le souvenir de l'ambiance arabo-andalouse de la maison familiale, de ses éléments architecturaux et de ses ornements, ...
                </p>
                
                <Link 
                  href="/fondation/projet-musee/abderrahman-slaoui-humaniste-eclaire-1919-2001"
                  className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors font-bodoni"
                >
                  Lire la suite
                </Link>
              </motion.div>
              
              {/* L'espace muséographique Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white"
              >
                <h2 className="font-bodoni text-3xl text-accent-gold mb-6">
                  L'espace muséographique
                </h2>
                
                <div className="mb-6 relative h-[300px] overflow-hidden">
                  <Image
                    src="/images/projet-musee/espace-museographique/pxjg8psj.png"
                    alt="L'espace muséographique"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <p className="text-gray-700 mb-6">
                  Les collections du Musée de la Fondation Abderrahman Slaoui se développent sur 600 m² en 3 étages. La scénographie, pensée par le scénographe Philippe Délis, a été conçue dans l'esprit d'une maison de collectionneur : elle conserve la chaleur, l'invitation et la convivialité pour en faire un musée qui est bien plus large qu'...
                </p>
                
                <Link 
                  href="/fondation/projet-musee/espace-museographique"
                  className="inline-block text-accent-gold hover:text-accent-gold/80 transition-colors font-bodoni"
                >
                  Lire la suite
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjetMuseePage; 