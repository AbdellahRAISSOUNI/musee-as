"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const JourneesPatrimoinePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/redecouverte/A-la-redecouverte-des-collections.png"
            alt="Journées du Patrimoine de Casablanca"
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
              A la (re)découverte des collections
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Journées du Patrimoine de Casablanca
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
                    Journées portes ouvertes
                  </h2>
                  <p className="text-gray-800 text-lg mb-2">
                    <strong>Le samedi 2 et le dimanche 3 avril</strong>
                  </p>
                  <p className="text-gray-800 text-lg">
                    Au Musée de la Fondation Abderrahman Slaoui dans le cadre des Journées du Patrimoine de Casablanca.
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Au programme
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  <strong>VISITES COMMENTÉES</strong> à la (re)découverte des collections. Entre symbolique, comparaison, remise en contexte et petits détails, vous appréhenderez les collections d'Abderrahman Slaoui sous un angle nouveau.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/redecouverte/A-la-redecouverte-des-collections.png"
                    alt="Journées du Patrimoine - Collections du Musée"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Découvrez les collections sous un nouveau jour
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Ces journées spéciales offrent une occasion unique de redécouvrir les collections permanentes du Musée de la Fondation Abderrahman Slaoui. Nos guides experts vous accompagneront dans cette exploration enrichissante du patrimoine artistique marocain.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Les visites commentées mettent l'accent sur la symbolique des œuvres, les comparaisons stylistiques, la remise en contexte historique et les détails techniques souvent imperceptibles au premier regard.
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Les collections d'Abderrahman Slaoui
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  La collection privée d'Abderrahman Slaoui rassemble des pièces exceptionnelles d'art marocain traditionnel et contemporain. Ces journées du patrimoine permettront au public de mieux appréhender la richesse et la diversité de cet ensemble remarquable.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-3" style={{ color: gold }}>
                      Thèmes abordés
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Symbolique des œuvres</li>
                      <li>• Comparaisons stylistiques</li>
                      <li>• Contexte historique</li>
                      <li>• Détails techniques</li>
                      <li>• Évolution artistique</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-3" style={{ color: gold }}>
                      Collections présentées
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Affiches orientalistes</li>
                      <li>• Céramiques de Fès</li>
                      <li>• Bijoux marocains</li>
                      <li>• Cabinets de curiosité</li>
                      <li>• Arts décoratifs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Informations pratiques
                  </h3>
                  <p className="mb-2">
                    <strong>Dates :</strong> Samedi 2 et dimanche 3 avril
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Activité :</strong> Visites commentées des collections
                  </p>
                  <p className="text-sm text-gray-600">
                    Dans le cadre des Journées du Patrimoine de Casablanca
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

export default JourneesPatrimoinePage; 