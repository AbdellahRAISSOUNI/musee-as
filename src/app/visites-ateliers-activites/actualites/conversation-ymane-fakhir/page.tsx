"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const ConversationYmaneFakhirPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/ymane-fakhir/4-_Ymane_Fakhir_Portrait_6_Fanida_2014_c_Courtesy_Ymane_Fakhir.jpg.5_h6VTsLG.jpg"
            alt="Conversation avec Ymane Fakhir"
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
              Conversation(s) avec Ymane Fakhir
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Le jeudi 15 février 2018 à 19h au Musée
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
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  A l'occasion de l'exposition AJAMMAR, le Musée organise une rencontre avec Ymane Fakhir.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  L'artiste nous parlera de la démarche artistique à travers laquelle elle explore les mutations de la société contemporaine marocaine.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/ymane-fakhir/4-_Ymane_Fakhir_Portrait_6_Fanida_2014_c_Courtesy_Ymane_Fakhir.jpg.5_h6VTsLG.jpg"
                    alt="Ymane Fakhir - Artiste"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Elle abordera également le cheminement qui l'a menée à entreprendre un travail de recherche sur l'ile de Sidi Abderrahman et les questionnements que cela a éveillé...
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <p className="text-gray-800 text-sm">
                    <strong>Rencontre animée par Kenza Amrouk, co-commissaire de l'exposition.</strong>
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  À propos de l'artiste
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Ymane Fakhir est une artiste marocaine dont le travail explore les mutations sociales et culturelles de la société marocaine contemporaine. Ses œuvres interrogent les traditions, les croyances et les transformations urbaines du Maroc moderne.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Dans le cadre du projet AJAMMAR, elle a mené une recherche approfondie sur l'île de Sidi Abderrahman, lieu emblématique de Casablanca où se perpétuent des pratiques spirituelles ancestrales.
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Le projet AJAMMAR
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  AJAMMAR est un projet collectif de résidences artistiques qui rassemble plusieurs artistes autour de l'exploration de l'île de Sidi Abderrahman. Cette rencontre permettra de mieux comprendre la démarche individuelle d'Ymane Fakhir dans ce contexte collectif.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Détails de la rencontre
                  </h3>
                  <p className="mb-2">
                    <strong>Date :</strong> Jeudi 15 février 2018
                  </p>
                  <p className="mb-2">
                    <strong>Heure :</strong> 19h
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Avec :</strong> Ymane Fakhir, artiste
                  </p>
                  <p className="text-sm text-gray-600">
                    Dans le cadre de l'exposition AJAMMAR
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Thèmes abordés
                </h2>
                
                <ul className="text-gray-800 text-lg leading-relaxed mb-8 space-y-2">
                  <li>• Démarche artistique d'Ymane Fakhir</li>
                  <li>• Exploration des mutations de la société marocaine contemporaine</li>
                  <li>• Recherche sur l'île de Sidi Abderrahman</li>
                  <li>• Pratiques spirituelles et traditions populaires</li>
                  <li>• Processus créatif dans le cadre du projet AJAMMAR</li>
                </ul>
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

export default ConversationYmaneFakhirPage; 