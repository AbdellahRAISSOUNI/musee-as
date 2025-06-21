"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const VernissageNilwoodMelodyPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/nilwood/visuel_site_internet_2.jpg"
            alt="NILWOOD MELODY - Qu'avons-nous fait de nos rêves ?"
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
              NILWOOD MELODY
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Qu'avons-nous fait de nos rêves ?
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
                  Le Musée de la Fondation Abderrahman Slaoui vous invite à explorer la mémoire d'un temps fort du 7ème art que fut l'« âge d'or » du cinéma égyptien, à travers les travaux de six artistes contemporains :
                </p>

                <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-6 mb-8">
                  <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                    Les artistes participants
                  </h2>
                  <ul className="text-gray-800 text-lg space-y-2">
                    <li>• <strong>Mariam Abouzid Souali</strong> (Maroc)</li>
                    <li>• <strong>Zoulikha Bouabdellah</strong> (Algérie-France)</li>
                    <li>• <strong>Nabil Boutros</strong> (Egypte)</li>
                    <li>• <strong>Mouna Jemal Siala</strong> (Tunisie)</li>
                    <li>• <strong>Khalil Nemmaoui</strong> (Maroc)</li>
                    <li>• <strong>Ghita Skali</strong> (Maroc)</li>
                  </ul>
                  <p className="text-gray-800 text-sm mt-4">
                    <strong>Commissariat :</strong> Yasmina Bouzid
                  </p>
                </div>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/nilwood/visuel_site_internet_2.jpg"
                    alt="NILWOOD MELODY - Exposition"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Vernissage
                  </h3>
                  <p className="mb-2">
                    <strong>Date :</strong> Mercredi 15 février à 19h
                  </p>
                  <p className="mb-2">
                    <strong>Exposition visible :</strong> jusqu'au 22 avril 2017
                  </p>
                  <p className="text-sm text-gray-600">
                    Musée de la Fondation Abderrahman Slaoui
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  L'âge d'or du cinéma égyptien
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette exposition collective explore la mémoire collective de l'âge d'or du cinéma égyptien, période fascinante qui a marqué l'imaginaire de tout le monde arabe. À travers leurs créations, les artistes questionnent notre rapport à ces rêves d'antan.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Le titre "Qu'avons-nous fait de nos rêves ?" résonne comme une interrogation mélancolique sur l'évolution des aspirations et des idéaux véhiculés par ce cinéma populaire qui a nourri l'imaginaire de générations entières.
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Une réflexion artistique contemporaine
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Les six artistes contemporains du monde arabe proposent une relecture critique et poétique de cet héritage cinématographique. Leurs œuvres explorent les thèmes récurrents de cette époque : l'amour, l'espoir, la modernité, et la quête d'un avenir meilleur.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-3" style={{ color: gold }}>
                      Thèmes explorés
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Mémoire collective</li>
                      <li>• Nostalgie de l'âge d'or</li>
                      <li>• Rêves et aspirations</li>
                      <li>• Modernité arabe</li>
                      <li>• Héritage cinématographique</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-3" style={{ color: gold }}>
                      Médiums artistiques
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Installations vidéo</li>
                      <li>• Photographie</li>
                      <li>• Peinture contemporaine</li>
                      <li>• Arts numériques</li>
                      <li>• Performances</li>
                    </ul>
                  </div>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Le cinéma comme miroir social
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  L'exposition met en lumière comment le cinéma égyptien de l'âge d'or a fonctionné comme un miroir des aspirations sociales et politiques de son époque. Les artistes contemporains interrogent la persistance ou la transformation de ces idéaux dans le monde arabe d'aujourd'hui.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Informations sur l'exposition
                  </h3>
                  <p className="mb-2">
                    <strong>Titre :</strong> NILWOOD MELODY - Qu'avons-nous fait de nos rêves ?
                  </p>
                  <p className="mb-2">
                    <strong>Type :</strong> Exposition collective d'art contemporain
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Thème :</strong> Mémoire de l'âge d'or du cinéma égyptien
                  </p>
                  <p className="text-sm text-gray-600">
                    Six artistes contemporains du monde arabe
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

export default VernissageNilwoodMelodyPage; 