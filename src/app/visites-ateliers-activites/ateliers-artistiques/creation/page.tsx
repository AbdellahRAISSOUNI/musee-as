"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const AteliersCreationPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/ateliers-artistiques/creation/Tour_de_monde_M_Azeroual_1.jpg"
            alt="Ateliers de création"
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
              Ateliers de création au Musée
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Return Button */}
            <ReturnButton href="/visites-ateliers-activites/ateliers-artistiques" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Left Column - Sticky Image */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="sticky top-32"
                >
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/images/visites-ateliers-activites/ateliers-artistiques/creation/Tour_de_monde_M_Azeroual_1.jpg"
                      alt="Ateliers de création"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-500 italic">
                      Atelier de création au Musée
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
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 text-lg leading-relaxed mb-8">
                      En cette rentrée 2018, le Musée de la Fondation Slaoui met en place des ateliers de création ouverts à tous afin de découvrir différentes pratiques artistiques dans le cadre convivial et informel du Musée.
                    </p>

                    <h2 className="font-bodoni text-2xl mb-6" style={{ color: gold }}>
                      Les ateliers proposés
                    </h2>
                    
                    <div className="mb-8">
                      <h3 className="font-bodoni text-xl mb-3">Atelier de tapisserie contemporaine</h3>
                      <p className="mb-6">
                        Ateliers de tissage végétal autour de la décoration murale. 
                        Une artisane initiera les participants à cette pratique traditionnelle et ancestrale en donnant au tissage une dimension contemporaine, puisqu'il s'agira de créer son propre élément de décoration murale.
                      </p>
                      <p className="mb-6 italic">
                        Les ateliers auront lieu au Musée le mercredi de 18h30 à 20h ou le samedi de 14h30 à 16h en fonction de la préférence des participants.
                      </p>
                      
                      <h3 className="font-bodoni text-xl mb-3">Ateliers d'initiation à la photographie</h3>
                      <p className="mb-6">
                        Le photographe Mustapha Azeroual guidera les participants à travers les bases de la photographie : de la découverte et prise en main de l'appareil photo à l'initiation à la narration photographique, le photographe enseignera aux participants à utiliser leur appareil photographique et à construire des séries d'images photographiques.
                      </p>
                      <p className="mb-6 italic">
                        Les ateliers auront lieu le samedi de 11h à 13h au Musée.
                      </p>
                      
                      <h3 className="font-bodoni text-xl mb-3">Ateliers de dessin destinés au jeune public</h3>
                      <p className="mb-6">
                        L'artiste Anne Teisseire animera cet atelier de dessin, découpage et collage pour les enfants à partir de 7 ans. 
                        Les enfants seront amenés à travailler autour du thème de l'affiche et créeront leur propre affiche.
                      </p>
                      <p className="mb-6 italic">
                        Les ateliers auront lieu le mercredi après midi de 14h à 16h.
                      </p>
                    </div>

                    <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                      Informations pratiques
                    </h2>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <p className="mb-2">
                        <strong>Durée :</strong> 3 mois, à raison d'une fois par semaine
                      </p>
                      <p className="mb-2">
                        <strong>Début des ateliers :</strong> Semaine du 22 janvier 2018
                      </p>
                      <p>
                        <strong>Contact :</strong> 05 22 27 97 32 ou fas.musee@gmail.com
                      </p>
                    </div>
                    
                    <p className="text-gray-800 text-lg leading-relaxed mb-10">
                      Pour plus de renseignements, n'hésitez pas à consulter les événements Facebook des ateliers qui vous intéressent ou à nous contacter. En espérant vous voir nombreux !
                    </p>
                    
                    <div className="mt-12 mb-8">
                      <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                        Bonus coloriage à télécharger et imprimer
                      </h2>
                      
                      <div className="mt-6">
                        <div className="relative w-full h-[500px] mb-6 border border-gray-200 rounded-lg overflow-hidden">
                          <Image 
                            src="/images/visites-ateliers-activites/ateliers-artistiques/creation/coloriage-rbati.jpg"
                            alt="Coloriage à télécharger"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex justify-center">
                          <a 
                            href="/images/visites-ateliers-activites/ateliers-artistiques/creation/coloriage-rbati.jpg" 
                            download="coloriage-rbati.jpg"
                            className="inline-flex items-center px-6 py-3 bg-accent-gold text-white font-medium hover:bg-accent-gold/80 transition-colors rounded"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Télécharger le coloriage
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Return Button at Bottom */}
            <div className="mt-16">
              <ReturnButton href="/visites-ateliers-activites/ateliers-artistiques" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AteliersCreationPage; 