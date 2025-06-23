"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const VoyagesEtDecouvertesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/voyages_decouvertes/Voyages-et-Decouvertes.png"
            alt="Voyages et Découvertes"
            fill
            className="object-cover object-center opacity-60"
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
              Voyages et Découvertes
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              À partir du mardi 25 mars
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mb-12"
            >
              <h2 className="font-bodoni text-2xl md:text-3xl uppercase tracking-wide mb-2" style={{ color: gold }}>
                Exposition temporaire
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Affiches orientalistes
              </h3>
            </motion.div>

            {/* Exhibition Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/expositions-temporaires/voyages_decouvertes/Voyages-et-Decouvertes.png"
                  alt="Voyages et Découvertes"
                  width={600}
                  height={450}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="prose prose-lg max-w-none mx-auto text-gray-800 font-light mb-10"
              style={{ fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)' }}
            >
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 mb-6" style={{ borderColor: gold }}>
                <p className="font-medium text-gray-900 mb-2">À partir du mardi 25 mars</p>
                <p className="text-gray-700">
                  Le musée de la Fondation Abderrahman Slaoui accueille une nouvelle exposition d'affiches anciennes sur le thème : <strong>Voyages et Découvertes</strong>
                </p>
              </div>

              <blockquote className="border-l-4 pl-6 italic text-gray-600 bg-gray-50 p-6 rounded-r-lg mb-6" style={{ borderColor: gold }}>
                <p className="mb-4">
                  « Les premières affiches orientalistes sont touristiques et datent du début des années 1890, quand le réseau P.L.M (Paris, Lyon, Méditerranée), prolongé par les compagnies maritimes ; pousse ses pions en Algérie et Tunisie. Mais c'est à partir du début de ce siècle que le genre va s'affirmer avec originalité. C'est entre les deux guerres que l'affiche orientaliste va connaître un grand essor, grâce surtout au développement rapide des moyens de transport.
                </p>
                <p className="mb-4">
                  Les compagnies maritimes, ferroviaires, aériennes et routières favorisèrent cet essor par l'appel au dépaysement sans éloignement.
                </p>
                <p className="mb-4">
                  Les affiches de la première période étaient chargées de textes et marquées par la recherche d'exotisme colonial faite de contraste et de quête de dépaysement, mais ces tendances changèrent rapidement après l'apparition des compagnies locales de transport et surtout de fédérations et syndicats d'initiative et de tourisme locaux à Alger, Tunis et Casablanca.
                </p>
                <p>
                  Les syndicats d'initiative qui se mettent en place à partir des années vingt vont recourir, pour la conception de leurs affiches, à des artistes résidents au Maghreb. Ces artistes qui connaissaient réellement le pays, vont dépouiller l'image de toute surcharge, bannir les textes informatifs qui s'étalaient à la surface de l'affiche, et ne laisser parler que la couleur et la lumière. »
                </p>
                <footer className="mt-4 text-right text-gray-900 font-medium">
                  — Abdelaziz Ghozzi
                </footer>
              </blockquote>

              <p className="mb-6">
                Cette exposition a été conçue d'après la collection privée de la Fondation Abderrahman Slaoui.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 mb-6" style={{ borderColor: gold }}>
                <p className="font-medium text-gray-900 mb-2">Exposition visible</p>
                <p className="text-gray-700">Jusqu'au samedi 20 avril inclus</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>Autour de l'exposition</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>L'Affiche orientaliste, 100 ans de création</strong> d'Abderrahman Slaoui (en vente au musée)
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-16 flex justify-end">
              <ReturnButton href="/collections-expositions/expositions-temporaires" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VoyagesEtDecouvertesPage; 