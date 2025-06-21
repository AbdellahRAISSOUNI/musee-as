"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const UnOrientConsommationPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/orient consommation/3.2_Bijoux_1.jpg"
            alt="Un orient de consommation"
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
              Un orient de consommation
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Nouvelle exposition temporaire
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
                    Nouvelle exposition temporaire
                  </h2>
                  <p className="text-gray-800 text-lg mb-2">
                    <strong>À partir de mardi 10 juillet 2012</strong>
                  </p>
                  <p className="text-gray-800 text-lg">
                    Le musée de la Fondation Abderrahman Slaoui accueille une nouvelle exposition d'affiches orientalistes sur le thème de la réclame intitulée : « Un Orient de consommation ».
                  </p>
                </div>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette exposition a été conçue d'après la collection privée de la Fondation Abderrahman Slaoui, qui rassemble un ensemble exceptionnel d'affiches publicitaires orientalistes. Ces œuvres témoignent de l'utilisation de l'imagerie orientaliste à des fins commerciales au cours du XXe siècle.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/orient consommation/3.2_Bijoux_1.jpg"
                    alt="Un Orient de consommation - Affiches orientalistes"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  L'orientalisme publicitaire
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  L'exposition « Un Orient de consommation » explore la façon dont l'imagerie orientaliste a été détournée et réappropriée par la publicité commerciale. Ces affiches révèlent comment les stéréotypes visuels de l'Orient ont été instrumentalisés pour vendre des produits de consommation.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  À travers une sélection d'affiches publicitaires, l'exposition questionne la construction de l'imaginaire orientaliste et son impact sur la perception occidentale du monde arabe et musulman.
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  La collection d'affiches orientalistes
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  La Fondation Abderrahman Slaoui possède l'une des plus importantes collections d'affiches orientalistes au monde. Cette exposition présente une sélection focalisée sur le thème de la consommation et de la réclame commerciale.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-3" style={{ color: gold }}>
                      Thèmes abordés
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Orientalisme commercial</li>
                      <li>• Stéréotypes visuels</li>
                      <li>• Histoire de la publicité</li>
                      <li>• Représentations de l'Orient</li>
                      <li>• Société de consommation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-3" style={{ color: gold }}>
                      Types d'affiches
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      <li>• Produits alimentaires</li>
                      <li>• Cosmétiques et parfums</li>
                      <li>• Voyage et tourisme</li>
                      <li>• Tabac et cigarettes</li>
                      <li>• Articles de luxe</li>
                    </ul>
                  </div>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Une réflexion critique
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Au-delà de leur valeur esthétique, ces affiches constituent un témoignage historique précieux sur la façon dont l'Orient a été fantasmé et commercialisé par l'Occident. L'exposition invite à une réflexion critique sur ces représentations et leur persistance dans l'imaginaire contemporain.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette approche s'inscrit dans la mission du Musée de la Fondation Abderrahman Slaoui de questionner et contextualiser les représentations orientalistes, en offrant un regard nuancé et critique sur cet héritage visuel complexe.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Informations pratiques
                  </h3>
                  <p className="mb-2">
                    <strong>Ouverture :</strong> À partir de mardi 10 juillet 2012
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Type :</strong> Exposition d'affiches orientalistes
                  </p>
                  <p className="mb-2">
                    <strong>Thème :</strong> La réclame et la consommation
                  </p>
                  <p className="text-sm text-gray-600">
                    D'après la collection privée de la Fondation Abderrahman Slaoui
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

export default UnOrientConsommationPage; 