"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const IntimiteMarocPage = () => {
  return (
    <PageLayout title="Dans l'intimité du Maroc - Photographies de Gabriel Veyre">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/limite_maroc/Dans-lintimite-du-Maroc.png"
              alt="Dans l'intimité du Maroc"
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
                  DANS L'INTIMITÉ DU MAROC
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Photographies de Gabriel Veyre 1901-1936
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
                    src="/images/expositions-temporaires/limite_maroc/Dans-lintimite-du-Maroc.png"
                    alt="Dans l'intimité du Maroc - Photographies de Gabriel Veyre"
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
                    <p className="font-medium text-gray-900 mb-2">Le Musée de la Fondation Abderrahman Slaoui</p>
                    <p className="text-gray-700">
                      accueille du 16 mai au 17 juin 2012 l'exposition <strong>« Dans l'intimité du Maroc »</strong>, Photographies de Gabriel Veyre 1901-1936.
                    </p>
                  </div>

                  <p>
                    À 30 ans, Gabriel Veyre abandonne son métier d'opérateur du cinématographe pour les Frères Lumières et part au Maroc initier le jeune sultan Moulay Abd El-Aziz aux mystères de la chambre noire. Témoin privilégié de la vie animée de la cour. Gabriel Veyre photographie sans relâche l'intimité du palais, mais aussi des scènes de la vie quotidienne dans les ruelles de Marrakech.
                  </p>

                  <p>
                    Il trouve dans les paysages de l'Atlas et du littoral, dans l'architecture des villes et des villages, une source inépuisable d'inspiration. Jusqu'à sa mort en 1936, il va dresser un portrait unique du Maroc du début du XXe siècle, un Maroc poétique et légendaire, vibrant de luminosité.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Pour en savoir plus</h3>
                    <p className="text-gray-700 mb-4">
                      Autour de Gabriel Veyre : <Link href="http://www.gabrielveyre.com" className="text-accent-gold hover:underline" target="_blank" rel="noopener noreferrer">www.gabrielveyre.com</Link>
                    </p>
                    <p className="text-gray-700">
                      <strong>Sur le sujet :</strong> JACQUIER Philippe, PRANAL Marion, ABDELOUAHAD Farid. <em>Dans l'intimité du Maroc, Photographies de Gabriel Veyre 1901-1936</em>, Editions Malika, 2012.
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
    </PageLayout>
  );
};

export default IntimiteMarocPage; 