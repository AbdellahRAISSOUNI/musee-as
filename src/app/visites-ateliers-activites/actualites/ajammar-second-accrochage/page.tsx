"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const AjammarSecondAccrochagePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/ajammar/Clair_Obscur2_-_2_8Q863mE.jpg"
            alt="AJAMMAR, second accrochage"
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
              AJAMMAR, second accrochage*
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Du 17 janvier au 28 février 2018
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
                <div className="mb-8">
                  <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                    Les artistes
                  </h2>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    <strong>Ymane Fakhir, Mohssin Harraki, Caroline Trucco et Khalil El Gherib</strong>
                  </p>
                </div>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  AJAMMAR est un projet de résidences, de recherche et de création autour de l'île de Sidi Abderrahman à Casablanca. Située au Sud Ouest de Casablanca, sur un rocher qui défie l'océan, l'île de Sidi Abderrahman est réputée pour être le temple des voyants, guérisseurs et sorciers.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Ce projet associe des artistes marocains et internationaux, confirmés et émergents pour une multiplicité de points de vue sur les mystères de ce lieu : ses pratiques, ses légendes, ses habitants, son architecture…
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/ajammar/Clair_Obscur2_-_2_8Q863mE.jpg"
                    alt="AJAMMAR - Île de Sidi Abderrahman"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  De générations, parcours, origines et formations différents, Ymane Fakhir, Mohssin Harraki, Caroline Trucco et Khalil El Gherib, développent des pratiques pluridisciplinaires cultivant une même fascination pour les systèmes de croyance.
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Une première restitution
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette première restitution propose un parcours et un éclairage scientifique sur Sidi Abderrahman et sur la structure psychique et sociologique des cultes des saints en général.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette exposition est également l'occasion de poser les premiers jalons d'un vaste projet dans une perspective d'échanges et de dialogues autour d'une île cristallisant les fantasmes les plus contradictoires pour parler de rituels, du sacré, d'Histoire et d'oralité…
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <p className="text-gray-800 text-sm mb-2">
                    <strong>*Cette exposition fait suite au premier accrochage présenté en décembre 2017 à l'Institut Français de Casablanca.</strong>
                  </p>
                  <p className="text-gray-800 text-sm">
                    <strong>Commissaires d'exposition :</strong> Kenza Amrouk & Sonia Recasens
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Informations pratiques
                  </h3>
                  <p className="mb-2">
                    <strong>Période :</strong> Du 17 janvier au 28 février 2018
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Artistes :</strong> Ymane Fakhir, Mohssin Harraki, Caroline Trucco, Khalil El Gherib
                  </p>
                  <p className="text-sm text-gray-600">
                    Projet de résidences artistiques autour de l'île de Sidi Abderrahman
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  L'île de Sidi Abderrahman
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Située sur un rocher accessible à marée basse, l'île de Sidi Abderrahman est un lieu unique où se perpétuent des traditions séculaires. Voyants, guérisseurs et marabouts y accueillent les visiteurs en quête de soins spirituels et de guidance.
                </p>
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

export default AjammarSecondAccrochagePage; 