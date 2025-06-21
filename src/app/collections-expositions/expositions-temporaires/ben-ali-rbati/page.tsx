"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const BenAliRbatiPage = () => {
  return (
    <PageLayout title="Exposition Mohamed Ben Ali R'bati (1869-1939), premier peintre figuratif marocain">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/ben_ali/Exposition-Mohamed-Ben-Ali-Rbati_QS8fl8G.png"
              alt="Mohamed Ben Ali R'bati"
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
                  MOHAMED BEN ALI R'BATI
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Premier peintre figuratif marocain (1869-1939)
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
                    src="/images/expositions-temporaires/ben_ali/Exposition-Mohamed-Ben-Ali-Rbati_QS8fl8G.png"
                    alt="Mohamed Ben Ali R'bati (1869-1939), premier peintre figuratif marocain"
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
                    <h2 className="font-bodoni text-2xl text-gray-900 mb-2">R'Bati Fils de Tanger</h2>
                    <p className="text-gray-700">1869-1939</p>
                  </div>

                  <p>
                    Il y a des villes qui parlent à ceux qui les habitent. Elles les inspirent, dessinent des arcs de rêverie autour de leur enfance, soutiennent leur imagination et fortifient la conscience qu'elles peuvent avoir de la part manquante donnée à toute existence. Ainsi Tanger et R'bati.
                  </p>

                  <p>
                    Mohammed ben Ali R'bati est né à Rabat, mais il a grandi à Tanger et Tanger semble l'avoir aidé à se construire un destin. La ville est un roman, à chacun de s'inventer son personnage. R'bati, premier peintre de la longue histoire marocaine, ne manque pas ce rendez-vous que la ville lui avait donné.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Entre deux mondes</h3>
                    <p className="text-gray-700">
                      R'bati, parce qu'il est sujet du royaume chérifien, participe à ce qui demeure pour l'Européen un inconnu. Mais en tant que fils adoptif de Tanger, il trouve chez lui, dans sa propre maison, le pays de son exil et la révélation de l'autre face du miroir : l'inconnu occidental.
                    </p>
                  </div>

                  <p>
                    C'est dans les premières années de ce siècle que le peintre, alors dans sa quarantaine, rencontre un Nazaréen, Sir John Lavery, peintre de la cour de sa Gracieuse Majesté britannique. Sir John en fait son cuisinier et l'encourage dans son art. Il l'emmène à Londres avec ses tableaux. R'bati pose devant Buckingham en jellaba, fait la conquête des Londoniennes amies de son protecteur.
                  </p>

                  <div className="bg-white p-6 border border-gray-200 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Un parcours singulier</h3>
                    <p className="text-gray-700 mb-4">
                      On le retrouve à Marseille après la Grande Guerre. Le voici pérégrin, à la découverte du pays de l'autre côté de la mer. Il travaille dans une usine de sucre, les établissements Saint-Louis, avant d'être recruté par le Tabor espagnol, puis rentre dans sa ville.
                    </p>
                    <p className="text-gray-700">
                      Il s'assied derrière un guichet de la banque de Bilbao, au Petit Socco, puis maître chez lui, enfin, fait vivre un restaurant où il exerce ses talents, sans jamais négliger sa peinture.
                    </p>
                  </div>

                  <p>
                    Tanger l'a enfanté, lui a appris la générosité, une façon de s'accorder au monde. C'est son tour maintenant, fêté et reconnu, mais toujours prodigue de son art et de ses qualités d'homme, de rendre à la ville ce qu'elle lui a donné.
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
    </PageLayout>
  );
};

export default BenAliRbatiPage; 