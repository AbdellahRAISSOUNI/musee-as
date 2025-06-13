"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const HichamBenohoudPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/rencontres/hicham-benohoud/TCHAT-PHOTO-Hicham-Benohoud-25-ans-de-reflexion.png"
            alt="Hicham Benohoud"
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
              TCHAT PHOTO / Hicham Benohoud
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              25 ans de réflexion
            </p>
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
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Le grand photographe Hicham Benohoud fête ses 25 ans de carrière au Maroc. En présence de l'artiste et de Marie Moignard spécialiste de la photographie marocaine contemporaine, venez découvrir le parcours d'Hicham Benohoud et échanger avec lui devant ses œuvres à l'occasion de cette visite commentée.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/visites-ateliers-activites/rencontres/hicham-benohoud/TCHAT-PHOTO-Hicham-Benohoud-25-ans-de-reflexion.png"
                    alt="Hicham Benohoud"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Détails de l'événement
                </h2>
                
                <div className="mb-8">
                  <p className="mb-2">
                    <strong>Quand ?</strong> Visite commentée au Musée le 16 avril 2016 à 17h
                  </p>
                  <p className="mb-2">
                    <strong>Où ?</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Avec qui ?</strong> Hicham Benohoud et Marie Moignard
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  À propos de l'artiste
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Hicham Benohoud est un photographe marocain de renommée internationale. Son travail, souvent autobiographique, questionne l'identité, la société et les traditions marocaines. À travers ses séries photographiques, il explore les contradictions de la société contemporaine et les tensions entre tradition et modernité.
                </p>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Cette rencontre est une occasion unique d'échanger avec l'artiste sur son parcours, sa démarche artistique et ses œuvres exposées au Musée de la Fondation Abderrahman Slaoui.
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

export default HichamBenohoudPage; 