"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const CarnetsVoyagesPage = () => {
  return (
    <PageLayout title="Exposition Carnets de voyages et croquis">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/carnets_de_voyages/Exposition-Carnets-de-voyages-et-croquis.png"
              alt="Carnets de voyages et croquis"
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
                  CARNETS DE VOYAGES ET CROQUIS
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Onze lunes au Maroc - Titouan LAMAZOU
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
                    src="/images/expositions-temporaires/carnets_de_voyages/Exposition-Carnets-de-voyages-et-croquis.png"
                    alt="Carnets de voyages et croquis - Titouan LAMAZOU"
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
                    <h2 className="font-bodoni text-2xl text-gray-900 mb-2">Onze lunes au Maroc</h2>
                    <p className="font-medium text-gray-900 mb-2">Titouan LAMAZOU</p>
                    <p className="text-gray-700">Du 14 décembre 2012 au 22 janvier 2013 au Musée de la Fondation Abderrahman Slaoui</p>
                  </div>

                  <p>
                    En 1982, Titouan Lamazou, jeune artiste - qui n'a pas encore fait parler de lui comme grand navigateur - , et sa compagne Karin Huet - écrivain - sillonnent à dos de mulet, d'un ramadan à l'autre, les vallées heureuses de Berbérie. La haute vallée des Ayt BouGmez et celle des Ayt Bou Oulli sont, en ces temps, très peu accessibles et bloquées quatre mois de l'année par les neiges.
                  </p>

                  <p>
                    Les deux voyageurs ont appris la langue berbère avant leur départ : Karin rapporte de leur séjour dans le Haut-Atlas marocain un récit rare et singulier, qui met en lumière la vie quotidienne et le courage des femmes et de ces montagnes. Titouan, lui, remplit plusieurs carnets de ses croquis, peintures et dessins d'architecture.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">L'art de l'ornementation</h3>
                    <p className="text-gray-700">
                      Pour s'intégrer dans la vie locale, ils ont étudié l'ornementation islamique traditionnelle et proposent leurs services de décorateurs d'intérieurs. Après la réalisation de deux décors, ils s'aperçoivent que l'inspiration locale est beaucoup plus subtile et originale que ce qu'ils avaient tout d'abord observé comme une simple reproduction naïve de la complexité des entrelacs étoilés arabes.
                    </p>
                  </div>

                  <p>
                    Pour rendre compte du charme et de la spécificité de cet art populaire, Titouan photographie l'ensemble des décors peints, dans une soixantaine de village des deux vallées.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <p className="font-medium text-gray-900 mb-2">Témoignages précieux</p>
                    <p className="text-gray-700">
                      Ces témoignages précieux et touchants prennent aujourd'hui toute leur dimension ethnologique.
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

export default CarnetsVoyagesPage; 