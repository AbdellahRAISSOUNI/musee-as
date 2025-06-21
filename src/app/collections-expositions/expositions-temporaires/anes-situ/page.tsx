"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const AnesSituPage = () => {
  return (
    <PageLayout title="Exposition Ânes situ de Hicham Benohoud">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/anes_situ/Expositionanes-situ.png"
              alt="Ânes situ"
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
                <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                  ÂNES SITU
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  de Hicham Benohoud
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
                    src="/images/expositions-temporaires/anes_situ/Expositionanes-situ.png"
                    alt="Exposition Ânes situ de Hicham Benohoud"
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
                    <p className="font-medium text-gray-900 mb-2">Exposition</p>
                    <p className="text-gray-700">Du 29 novembre au 11 janvier 2014</p>
                  </div>

                  <p>
                    Pour Hicham Benohoud, tous les moyens sont bons pour parler du statut de l'individu au Maroc.
                  </p>

                  <p>
                    Dénoncer tout un système social et politique oppressant qui abolit l'altérité et le droit à la différence, l'artiste en fait un engagement.
                  </p>

                  <p>
                    Cette série de photographies, à la limite de l'improbable et du burlesque, transcende le modèle par une mise en scène des plus décalées. Réalisée en 2012, elle présente des ânes photographiés dans des intérieurs à Casablanca principalement. Ils sont mis en scène dans des installations conçues par l'artiste à partir d'objets aux formes géométriques créés spécialement pour ce projet (constructions en tôle, en fer, en brique, etc.).
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Hicham Benohoud</strong> est représenté par CulturesInterface pour son travail photographique
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

export default AnesSituPage; 