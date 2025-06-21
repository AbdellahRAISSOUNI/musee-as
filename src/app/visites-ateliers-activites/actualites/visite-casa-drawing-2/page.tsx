"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const VisiteCasaDrawing2Page = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/casa-drawing2/Casa_Drawing_2_visuel_3.jpg"
            alt="Visite commentée Casa Drawing #2"
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
              Visite commentée Casa Drawing #2
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Par les artistes - Le 14 Octobre 2017 à 10h
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12"
            >
              <div className="prose prose-lg max-w-none">
                <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-6 mb-8">
                  <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                    Visite exceptionnelle
                  </h2>
                  <p className="text-gray-800 text-lg mb-2">
                    <strong>Le 14 Octobre 2017 à 10h</strong>
                  </p>
                  <p className="text-gray-800 text-lg">
                    Une visite exceptionnelle de l'exposition Casa Drawing #2 en présence des artistes participants.
                  </p>
                </div>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette visite commentée offre une occasion unique de découvrir l'exposition Casa Drawing #2 directement avec les artistes qui y participent. Un dialogue privilégié pour comprendre les démarches créatives, les techniques employées et les inspirations qui ont guidé chaque création.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/casa-drawing2/Casa_Drawing_2_visuel_3.jpg"
                    alt="Casa Drawing #2 - Exposition"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Casa Drawing #2
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Casa Drawing est une exposition collective qui met à l'honneur le dessin contemporain marocain. Cette deuxième édition rassemble des artistes aux univers graphiques variés, explorant différentes techniques et approches du dessin.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  L'exposition vise à faire reconnaître le dessin comme une discipline artistique à part entière, en présentant la diversité des techniques, des styles et des approches créatives des artistes marocains et internationaux résidant au Maroc.
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Rencontre avec les artistes
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette visite commentée par les artistes eux-mêmes permet d'explorer les œuvres sous un angle privilégié. Les participants pourront échanger directement avec les créateurs sur leurs démarches artistiques, leurs techniques et leur vision du dessin contemporain.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-3" style={{ color: gold }}>
                      Au programme
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Présentation des œuvres</li>
                      <li>• Dialogue avec les artistes</li>
                      <li>• Découverte des techniques</li>
                      <li>• Questions-réponses</li>
                      <li>• Échanges sur les démarches créatives</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-3" style={{ color: gold }}>
                      Thèmes abordés
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Diversité du dessin contemporain</li>
                      <li>• Techniques traditionnelles et modernes</li>
                      <li>• Inspiration et processus créatif</li>
                      <li>• Place du dessin dans l'art contemporain</li>
                      <li>• Scène artistique marocaine</li>
                    </ul>
                  </div>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Une discipline artistique reconnue
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Casa Drawing s'inscrit dans une démarche de valorisation du dessin en tant qu'art majeur, souvent considéré à tort comme un simple préparatoire à d'autres disciplines. Cette exposition collective démontre la richesse et la diversité des expressions graphiques contemporaines.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  La présence des artistes lors de cette visite permet d'approfondir la compréhension de leurs univers graphiques et de découvrir les multiples facettes du dessin contemporain au Maroc.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Détails de la visite
                  </h3>
                  <p className="mb-2">
                    <strong>Date :</strong> 14 Octobre 2017
                  </p>
                  <p className="mb-2">
                    <strong>Heure :</strong> 10h
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Avec :</strong> Les artistes participants à Casa Drawing #2
                  </p>
                  <p className="text-sm text-gray-600">
                    Visite commentée de l'exposition de dessin contemporain
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Return Button at Bottom */}
            <div className="mt-16">
              <ReturnButton href="/visites-ateliers-activites/actualites" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisiteCasaDrawing2Page; 