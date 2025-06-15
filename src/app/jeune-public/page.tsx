"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaSchool, FaPalette } from 'react-icons/fa';

const gold = '#bfa76a';

const JeunePublicPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/jeune-public/visites-scolaires/visites-scolaires-guidees2.png"
            alt="Jeune Public au Musée Abderrahman Slaoui"
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
              Jeune Public
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
                Notre mission est d'éveiller la curiosité des jeunes visiteurs et de leur offrir une expérience 
                enrichissante à travers des activités éducatives et créatives adaptées à leur âge.
              </p>
            </div>
            
            {/* Services */}
            <div className="space-y-24">
              {/* Visites Scolaires */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                {/* Image Container */}
                <div className="w-full md:w-1/2 h-[400px] relative group">
                  <Link href="/jeune-public/visites-scolaires" className="block w-full h-full">
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
                        src="/images/jeune-public/visites-scolaires/visites-scolaires-guidees2.png"
                        alt="Visites Scolaires"
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
                      <FaSchool className="text-accent-gold text-2xl mr-3" />
                      <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900">
                        Visites Scolaires Guidées
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">
                      Nous accueillons les classes de tous niveaux, de la maternelle au lycée, 
                      pour des visites adaptées à chaque âge. Nos médiateurs culturels sont formés 
                      pour transmettre aux élèves les clés de compréhension des œuvres exposées, 
                      tout en stimulant leur curiosité et leur créativité.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
                      <h3 className="font-medium text-accent-gold mb-3">Ce que nous proposons :</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Visites thématiques adaptées au programme scolaire</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Parcours découverte des collections permanentes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Visites des expositions temporaires</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Documentation pédagogique pour les enseignants</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Possibilité de combiner visite et atelier pratique</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Link href="/jeune-public/visites-scolaires" className="inline-flex items-center text-accent-gold group">
                      <span className="mr-2 font-medium">En savoir plus</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Ateliers Pédagogiques */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
              >
                {/* Image Container */}
                <div className="w-full md:w-1/2 h-[400px] relative group">
                  <Link href="/jeune-public/ateliers-pedagogiques" className="block w-full h-full">
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
                        src="/images/jeune-public/ateliers-pedagogiques/ateliers-pedagogiques.jpg"
                        alt="Ateliers Pédagogiques"
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
                      <FaPalette className="text-accent-gold text-2xl mr-3" />
                      <h2 className="font-bodoni text-3xl md:text-4xl font-medium text-gray-900">
                        Ateliers Pédagogiques
                      </h2>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">
                      Nos ateliers pédagogiques permettent aux enfants de s'initier à différentes 
                      techniques artistiques tout en s'inspirant des œuvres du musée. Encadrés par 
                      des artistes-éducateurs, ces ateliers favorisent l'expression personnelle 
                      et le développement des compétences créatives.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
                      <h3 className="font-medium text-accent-gold mb-3">Nos ateliers :</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Initiation aux arts plastiques</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Calligraphie arabe</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Mosaïque et motifs traditionnels</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Contes et histoires autour des collections</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-gold mr-2">•</span>
                          <span>Ateliers thématiques liés aux expositions temporaires</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Link href="/jeune-public/ateliers-pedagogiques" className="inline-flex items-center text-accent-gold group">
                      <span className="mr-2 font-medium">Découvrir les ateliers</span>
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

export default JeunePublicPage; 