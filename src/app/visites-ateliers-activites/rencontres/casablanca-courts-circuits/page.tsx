"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const CasablancaCourtsCircuitsPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/rencontres/courts-circuits/Invitation_public.png"
            alt="Casablanca Courts-circuits"
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
              Casablanca Courts-circuits
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Guide de tourisme culturel
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
                  Casablanca Courts-circuits est un guide de tourisme culturel sur la ville blanche. Entre témoignages, histoires, architecture et culture, découvrez 10 parcours pour se (re)connecter avec la ville !
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Les deux auteures, Mathilde Blondeau et Kenza Joundy Ouazzani, feront une présentation de ce guide riche et illustré et n'hésiteront pas à dédicacer votre exemplaire.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/visites-ateliers-activites/rencontres/courts-circuits/Invitation_public.png"
                    alt="Casablanca Courts-circuits"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  À propos du guide
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Ce guide propose une nouvelle approche de Casablanca, loin des circuits touristiques traditionnels. À travers 10 parcours soigneusement conçus, il invite à redécouvrir la métropole économique du Maroc sous un angle culturel et authentique.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Détails de l'événement
                  </h3>
                  <p className="mb-2">
                    <strong>Date :</strong> Jeudi 22 septembre
                  </p>
                  <p className="mb-2">
                    <strong>Heure :</strong> À partir de 19h
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Entrée :</strong> Libre
                  </p>
                  <p className="text-sm text-gray-600">
                    Présentation suivie d'une séance de dédicaces
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Les auteures
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  <strong>Mathilde Blondeau</strong> et <strong>Kenza Joundy Ouazzani</strong> sont les co-auteures de ce guide innovant. Passionnées par l'histoire et la culture de Casablanca, elles ont conçu ce projet pour offrir aux habitants et visiteurs une nouvelle manière d'appréhender la ville blanche.
                </p>
              </div>
            </motion.div>

            {/* Return Button at Bottom */}
            <div className="mt-16">
              <ReturnButton href="/visites-ateliers-activites/rencontres" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CasablancaCourtsCircuitsPage; 