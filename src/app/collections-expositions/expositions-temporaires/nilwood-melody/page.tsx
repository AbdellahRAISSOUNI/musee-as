"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const NilwoodMelodyPage = () => {
  return (
    <PageLayout title="NILWOOD MELODY - Qu'avons-nous fait de nos rêves ?">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/nilwood-melody/visuel_site_internet_2_1.jpg"
              alt="NILWOOD MELODY"
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
                  NILWOOD MELODY
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Qu'avons-nous fait de nos rêves ?
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
                    src="/images/expositions-temporaires/nilwood-melody/visuel_site_internet_2_1.jpg"
                    alt="NILWOOD MELODY - Qu'avons-nous fait de nos rêves ?"
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
                  <p>
                    Le Musée de la Fondation Abderrahman Slaoui vous invite à explorer la mémoire d'un temps fort du 7ème art que fut l'« âge d'or » du cinéma égyptien, à travers les travaux de six artistes contemporains :
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-medium text-gray-900 mb-4">Artistes participants :</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Mariam Abouzid Souali (Maroc)</li>
                      <li>Zoulikha Bouabdellah (Algérie-France)</li>
                      <li>Nabil Boutros (Égypte)</li>
                      <li>Mouna Jemal Siala (Tunisie)</li>
                      <li>Khalil Nemmaoui (Maroc)</li>
                      <li>Ghita Skali (Maroc)</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">
                      <strong>Un commissariat de Yasmina Bouzid.</strong>
                    </p>
                  </div>

                  <p>
                    Ce cinéma, héritier du music-hall et des comédies musicales populaires, issus de milieux, cultures, influences intellectuelles et arts variés alimentait une « industrie du rêve » et des salles de cinéma alors lieux de socialisation et de rencontres incontournables. Ses vedettes, sa musique et ses chants ont influé sur la réalité d'un monde alors en pleine mutation et fait rêver plusieurs générations d'hommes et de femmes. Son aura perdure jusqu'à aujourd'hui.
                  </p>

                  <p>
                    Dans un monde en pleine mutation, la réactivation de cette mémoire n'est pas un choix nostalgique mais le désir de mettre en miroir les projections du passé en écho au présent créant ainsi le reflet de nos mutations, explorant les récits intimes et la psyché collective, les images oubliées comme celles qui perdurent et continuent d'enrichir et nourrir notre créativité, nos songes et nos questionnements.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <p className="font-medium text-gray-900 mb-2">Vernissage</p>
                    <p className="text-gray-700">Le mercredi 15 février à 19h</p>
                    <p className="font-medium text-gray-900 mt-4 mb-2">Exposition visible</p>
                    <p className="text-gray-700">Jusqu'au 22 avril 2017</p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bodoni text-2xl text-gray-900 mb-4">Une exposition avec le soutien de :</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <ul className="space-y-2">
                        <li>• Ministère de la Culture du Royaume du Maroc</li>
                        <li>• CVA</li>
                        <li>• AEF Com : Entreprise de services linguistiques - Rabat</li>
                        <li>• Arrêt sur image</li>
                        <li>• The ultra laboratory</li>
                      </ul>
                      <ul className="space-y-2">
                        <li>• ZAA Studio</li>
                        <li>• Centre Culturel Égyptien à Rabat</li>
                        <li>• Ali n'Productions</li>
                      </ul>
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

export default NilwoodMelodyPage; 