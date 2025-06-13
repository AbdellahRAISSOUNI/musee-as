"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const gold = '#bfa76a';

// Ateliers items based on the screenshot
const ateliersItems = [
  {
    id: 'creation',
    title: 'Ateliers de création au Musée',
    image: '/images/visites-ateliers-activites/ateliers-artistiques/creation/Tour_de_monde_M_Azeroual_1.jpg',
    description: 'En cette rentrée 2018, le Musée de la Fondation Slaoui met en place des ateliers de création ouverts à tous afin de découvrir différentes pratiques artistiques dans le cadre convivial et informel du Musée : Atelier de tapisserie contemporaine : Ateliers de tissage végétal autour de la décoration murale. Une artisane initiera les participants à ce...',
    href: '/visites-ateliers-activites/ateliers-artistiques/creation'
  },
  {
    id: 'calligraphie',
    title: 'Ateliers d\'initiation à la calligraphie',
    image: '/images/visites-ateliers-activites/ateliers-artistiques/calligraphie/calligraphie.png',
    description: 'Le Musée de la Fondation Slaoui propose un atelier d\'initiation et de perfectionnement à la calligraphie accessible à tous. Cet atelier d\'initiation sera l\'occasion d\'apprendre à reconnaître les écritures marocaines à travers les manuscrits anciens et les objets de la collection du Musée. Les participants apprendront également à écrire au Qalam et...',
    href: '/visites-ateliers-activites/ateliers-artistiques/calligraphie'
  }
];

const AteliersArtistiquesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/ateliers-artistiques/creation/Tour_de_monde_M_Azeroual_1.jpg"
            alt="Ateliers Artistiques"
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
              Ateliers Artistiques
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
                Le Musée de la Fondation Abderrahman Slaoui organise régulièrement des ateliers artistiques pour tous les âges et tous les niveaux. Ces ateliers permettent de découvrir et d'explorer différentes techniques artistiques dans un cadre convivial et enrichissant.
              </p>
            </div>
          
            {/* Ateliers Showcase - With more space between items for better visual balance */}
            <div className="space-y-40">
              {ateliersItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <div className="max-w-5xl w-full">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
                      {/* Image Container */}
                      <div className="w-full md:w-1/2 h-[450px] relative group overflow-hidden rounded-sm">
                        <Link href={item.href} className="block w-full h-full">
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
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </motion.div>
                        </Link>
                      </div>
                      
                      {/* Content Container */}
                      <div className="w-full md:w-1/2 p-6">
                        <motion.div
                          initial={false}
                          whileHover={{ x: index % 2 === 0 ? 10 : -10, transition: { duration: 0.3 } }}
                        >
                          <Link href={item.href} className="block">
                            <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-accent-gold mb-6 hover:text-accent-gold/80 transition-colors duration-300">
                              {item.title}
                            </h2>
                            <p className="text-gray-700 text-lg mb-8">
                              {item.description}
                            </p>
                            <div className="inline-flex items-center text-accent-gold group">
                              <span className="mr-2 font-medium">Lire la suite</span>
                              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </div>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AteliersArtistiquesPage; 