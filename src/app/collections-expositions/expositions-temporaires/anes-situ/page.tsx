"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const AnesSituPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/anes_situ/Expositionanes-situ.png"
            alt="Ânes situ Exhibition"
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
              Ânes situ
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              de Hicham Benohoud
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
                Du 29 novembre au 11 janvier 2014
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
              <div className="relative w-full max-w-3xl">
                <Image
                  src="/images/expositions-temporaires/anes_situ/Expositionanes-situ.png"
                  alt="Ânes situ Exhibition"
                  width={900}
                  height={700}
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
              <p>
                Pour Hicham Benohoud, tous les moyens sont bons pour parler du statut de l'individu au Maroc. Dénoncer tout un système social et politique oppressant qui abolit l'altérité et le droit à la différence, l'artiste en fait un engagement.
              </p>
              <p>
                Cette série de photographies, à la limite de l'improbable et du burlesque, transcende le modèle par une mise en scène des plus décalées. Réalisée en 2012, elle présente des ânes photographiés dans des intérieurs à Casablanca principalement.
              </p>
              <p>
                Ils sont mis en scène dans des installations conçues par l'artiste à partir d'objets aux formes géométriques créés spécialement pour ce projet (constructions en tôle, en fer, en brique, etc.).
              </p>
              <p>
                <strong>Hicham Benohoud</strong> est représenté par CulturesInterface pour son travail photographique.
              </p>
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

export default AnesSituPage; 