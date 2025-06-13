"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const NostalgieDuFuturPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/rencontres/nostalgie/TCHAT-PHOTO-Nostalgie-du-futur.png"
            alt="Nostalgie du futur"
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
              TCHAT PHOTO / "Nostalgie du futur"
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
            <ReturnButton href="/visites-ateliers-activites/rencontres" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="font-bodoni text-2xl mb-6" style={{ color: gold }}>
                  Rencontre autour de la photographie marocaine avec Hicham Gardaf et Marie Moignard
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  À l'occasion de son exposition organisée par le Musée de la Fondation Abderrahman Slaoui et l'Institut Français, Hicham Gardaf fera exceptionnellement une visite commentée de sa série "Excursion" au Musée de la Fondation Abderrahman Slaoui. Ce jeune photographe Tangérois, dont la carrière se confirme à l'international, a saisi en argentique et en couleur un Maroc en pleine transformation, entre modernisation galopante et nostalgie d'un futur rêvé.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/visites-ateliers-activites/rencontres/nostalgie/TCHAT-PHOTO-Nostalgie-du-futur.png"
                    alt="Nostalgie du futur"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Détails de l'événement
                </h2>
                
                <div className="mb-8">
                  <p className="mb-2">
                    <strong>Quand ?</strong> Samedi 23 janvier 2016 à 17H
                  </p>
                  <p className="mb-2">
                    <strong>Où ?</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Avec qui ?</strong> Hicham Gardaf et Marie Moignard
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  À propos de l'exposition
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  La série "Excursion" d'Hicham Gardaf capture un Maroc en pleine métamorphose, où tradition et modernité se côtoient dans un équilibre fragile. À travers son objectif, le photographe nous invite à observer les paysages urbains et ruraux du pays, révélant les contrastes saisissants qui caractérisent cette période de transition.
                </p>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Cette visite commentée est une occasion unique de découvrir le regard singulier de cet artiste émergent sur son pays natal et d'échanger avec lui sur sa démarche artistique et ses inspirations.
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

export default NostalgieDuFuturPage; 