"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const AteliersCalligraphiePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/ateliers-artistiques/calligraphie/calligraphie.png"
            alt="Ateliers d'initiation à la calligraphie"
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
              Ateliers d'initiation à la calligraphie
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

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12"
            >
              <div className="prose prose-lg max-w-none">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                  <div className="md:w-1/2">
                    <div className="relative h-[350px] w-full overflow-hidden rounded-lg mb-6">
                      <Image
                        src="/images/visites-ateliers-activites/ateliers-artistiques/calligraphie/calligraphie.png"
                        alt="Atelier de calligraphie"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Le Musée de la Fondation Slaoui propose un atelier d'initiation et de perfectionnement à la calligraphie accessible à tous.
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed mt-6">
                      Cet atelier d'initiation sera l'occasion d'apprendre à reconnaître les écritures marocaines à travers les manuscrits anciens et les objets de la collection du Musée. Les participants apprendront également à écrire au Qalam et à l'encre de chine une des écritures marocaines (Mabsout, Tuluth, Moujawhar).
                    </p>
                  </div>
                </div>

                <div className="my-16">
                  <h2 className="font-bodoni text-2xl mb-6 text-center" style={{ color: gold }}>
                    L'art de la calligraphie marocaine
                  </h2>
                  
                  <div className="relative w-full h-[600px] overflow-hidden rounded-lg border border-gray-100 shadow-sm my-8">
                    <Image
                      src="/images/visites-ateliers-activites/ateliers-artistiques/calligraphie/calligraphy-maghribi.jpg"
                      alt="Calligraphie maghribi"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-lg mt-12">
                    <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                      Informations pratiques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-2">
                          <strong>Public :</strong> Tous niveaux, débutants bienvenus
                        </p>
                        <p className="mb-2">
                          <strong>Durée :</strong> 3 mois, une séance par semaine
                        </p>
                        <p className="mb-2">
                          <strong>Matériel :</strong> Fourni par le musée
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          <strong>Début des ateliers :</strong> Janvier 2018
                        </p>
                        <p className="mb-2">
                          <strong>Lieu :</strong> Musée de la Fondation Slaoui
                        </p>
                        <p>
                          <strong>Contact :</strong> 05 22 27 97 32 ou fas.musee@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <blockquote className="border-l-4 pl-6 italic border-accent-gold">
                    <p className="text-gray-700">
                      "La calligraphie est la géométrie de l'âme exprimée à travers le corps."
                    </p>
                  </blockquote>
                </div>
              </div>
            </motion.div>

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

export default AteliersCalligraphiePage; 