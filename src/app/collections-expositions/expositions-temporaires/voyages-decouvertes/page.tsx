"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const VoyagesEtDecouvertesPage = () => {
  return (
    <PageLayout title="Exposition Voyages et Découvertes">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/voyages_decouvertes/Voyages-et-Decouvertes.png"
              alt="Voyages et Découvertes"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-bodoni text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight">
                  VOYAGES ET DÉCOUVERTES
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  À partir du mardi 25 mars
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/expositions-temporaires/voyages_decouvertes/Voyages-et-Decouvertes.png"
                    alt="Voyages et Découvertes"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div className="text-lg leading-relaxed space-y-6 text-gray-700">
                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <p className="font-medium text-gray-900 mb-2">À partir du mardi 25 mars</p>
                    <p className="text-gray-700">
                      Le musée de la Fondation Abderrahman Slaoui accueille une nouvelle exposition d'affiches anciennes sur le thème : <strong>Voyages et Découvertes</strong>
                    </p>
                  </div>

                  <blockquote className="border-l-4 border-accent-gold pl-6 italic text-gray-600 bg-gray-50 p-6 rounded-r-lg">
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

                  <p>
                    Cette exposition a été conçue d'après la collection privée de la Fondation Abderrahman Slaoui.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <p className="font-medium text-gray-900 mb-2">Exposition visible</p>
                    <p className="text-gray-700">Jusqu'au samedi 20 avril inclus</p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bodoni text-2xl text-gray-900 mb-4">Autour de l'exposition</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        <strong>L'Affiche orientaliste, 100 ans de création</strong> d'Abderrahman Slaoui (en vente au musée)
                      </p>
                    </div>
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
    </PageLayout>
  );
};

export default VoyagesEtDecouvertesPage; 