"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const CarnetsVoyagesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/carnets_de_voyages/Exposition-Carnets-de-voyages-et-croquis.png"
            alt="Carnets de voyages et croquis Exhibition"
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
              Carnets de voyages et croquis
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Onze lunes au Maroc - Titouan LAMAZOU
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
                Onze lunes au Maroc
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Du 14 décembre 2012 au 22 janvier 2013
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
                  src="/images/expositions-temporaires/carnets_de_voyages/Exposition-Carnets-de-voyages-et-croquis.png"
                  alt="Carnets de voyages et croquis Exhibition"
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
              <p>
                En 1982, Titouan Lamazou, jeune artiste - qui n'a pas encore fait parler de lui comme grand navigateur - , et sa compagne Karin Huet - écrivain - sillonnent à dos de mulet, d'un ramadan à l'autre, les vallées heureuses de Berbérie. La haute vallée des Ayt BouGmez et celle des Ayt Bou Oulli sont, en ces temps, très peu accessibles et bloquées quatre mois de l'année par les neiges.
              </p>
              <p>
                Les deux voyageurs ont appris la langue berbère avant leur départ : Karin rapporte de leur séjour dans le Haut-Atlas marocain un récit rare et singulier, qui met en lumière la vie quotidienne et le courage des femmes et de ces montagnes. Titouan, lui, remplit plusieurs carnets de ses croquis, peintures et dessins d'architecture.
              </p>
              <p>
                Pour s'intégrer dans la vie locale, ils ont étudié l'ornementation islamique traditionnelle et proposent leurs services de décorateurs d'intérieurs. Après la réalisation de deux décors, ils s'aperçoivent que l'inspiration locale est beaucoup plus subtile et originale que ce qu'ils avaient tout d'abord observé comme une simple reproduction naïve de la complexité des entrelacs étoilés arabes.
              </p>
              <p>
                Pour rendre compte du charme et de la spécificité de cet art populaire, Titouan photographie l'ensemble des décors peints, dans une soixantaine de village des deux vallées. Ces témoignages précieux et touchants prennent aujourd'hui toute leur dimension ethnologique.
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

export default CarnetsVoyagesPage; 