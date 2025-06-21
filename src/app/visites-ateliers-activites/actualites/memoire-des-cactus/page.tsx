"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const MemoireDesCactusPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/cactus/58756870-43296925.jpg"
            alt="Mémoire des cactus et mystères des cochenilles"
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
              Mémoire des cactus et mystères des cochenilles
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Une exposition saisissante
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
                  Du 30 juin au 30 septembre, l'Atelier de l'Observatoire et le Musée de la Fondation Abderrahman Slaoui présentent une exposition saisissante intitulée "Mémoire des Cactus et Mystère des Cochenilles". Sous l'angle artistique, les visiteurs pourront découvrir l'effet dévastateur de la cochenille sur le figuier de barbarie.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette exposition collective, dirigée par les artistes et commissaires Mohamed Fariji et Eugénie Forno, explore la crise du figuier de barbarie à travers des recherches documentaires et artistiques, transformant ainsi le sentiment de disparition en acte créatif.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/cactus/58756870-43296925.jpg"
                    alt="Exposition Mémoire des cactus"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Les artistes participants
                </h2>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Six artistes talentueux, dont Chloé Despax, Chahine Fellahi, Kaïs Aïouch, Greta Hanako et les deux commissaires, s'efforcent de donner une dimension artistique à cette plante emblématique et tentent de reconsidérer la cochenille, traditionnellement perçue comme un insecte nuisible.
                </p>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Une exploration artistique unique
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  L'exposition offre aux visiteurs la possibilité de plonger dans l'univers des cactus et de la cochenille en observant, entre autres, des cactus malades au microscope et en découvrant le fascinant cycle de vie de la cochenille.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  De plus, ce projet s'inscrit dans le cadre du programme "Musée Collectif de Casablanca" de l'Atelier de l'Observatoire, un espace d'art et de recherche mettant en avant des projets socialement engagés impliquant artistes, étudiants, chercheurs et habitants.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette exposition, au-delà de son aspect artistique, permet ainsi d'écrire l'histoire de la ville de Casablanca à travers la revalorisation de cette plante emblématique et l'exploration du lien complexe entre les cactus et les cochenilles.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Informations pratiques
                  </h3>
                  <p className="mb-2">
                    <strong>Période :</strong> Du 30 juin au 30 septembre
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Organisateurs :</strong> Atelier de l'Observatoire et Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="text-sm text-gray-600">
                    Exposition collective sur l'impact de la cochenille sur le figuier de barbarie
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

export default MemoireDesCactusPage; 