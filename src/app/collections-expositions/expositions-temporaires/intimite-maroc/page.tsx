"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const IntimiteMarocPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/limite_maroc/Dans-lintimite-du-Maroc.png"
            alt="Dans l'intimité du Maroc Exhibition"
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
              Dans l'intimité du Maroc
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Photographies de Gabriel Veyre 1901-1936
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
                Exposition photographique
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Du 16 mai au 17 juin 2012
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
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/images/expositions-temporaires/limite_maroc/Dans-lintimite-du-Maroc.png"
                  alt="Intimité du Maroc Exhibition"
                  width={800}
                  height={600}
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
                À 30 ans, Gabriel Veyre abandonne son métier d'opérateur du cinématographe pour les Frères Lumières et part au Maroc initier le jeune sultan Moulay Abd El-Aziz aux mystères de la chambre noire. Témoin privilégié de la vie animée de la cour. Gabriel Veyre photographie sans relâche l'intimité du palais, mais aussi des scènes de la vie quotidienne dans les ruelles de Marrakech.
              </p>
              <p>
                Il trouve dans les paysages de l'Atlas et du littoral, dans l'architecture des villes et des villages, une source inépuisable d'inspiration. Jusqu'à sa mort en 1936, il va dresser un portrait unique du Maroc du début du XXe siècle, un Maroc poétique et légendaire, vibrant de luminosité.
              </p>
              <div className="mt-8 p-6 border-l-4 border-current" style={{ borderColor: gold, backgroundColor: '#fffbe6' }}>
                <p className="text-sm" style={{ color: gold }}>
                  <strong>Pour en savoir plus :</strong><br/>
                  Autour de Gabriel Veyre : www.gabrielveyre.com<br/>
                  <strong>Sur le sujet :</strong> JACQUIER Philippe, PRANAL Marion, ABDELOUAHAD Farid. <em>Dans l'intimité du Maroc, Photographies de Gabriel Veyre 1901-1936</em>, Editions Malika, 2012.
                </p>
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

export default IntimiteMarocPage; 