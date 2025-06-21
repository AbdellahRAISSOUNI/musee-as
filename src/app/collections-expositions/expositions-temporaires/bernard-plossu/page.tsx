"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const BernardPlossuPage = () => {
  return (
    <PageLayout title="Maroc et autres sites - Exposition de photographies de Bernard Plossu">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/bernard_plossu/Maroc-et-autres-sites.png"
              alt="Maroc et autres sites - Bernard Plossu"
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
                  MAROC ET AUTRES SITES
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Exposition de photographies de Bernard Plossu
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
                    src="/images/expositions-temporaires/bernard_plossu/Maroc-et-autres-sites.png"
                    alt="Maroc et autres sites - Bernard Plossu"
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
                    Cette exposition présente une sélection d'une série d'images réalisées au Maroc en 1975 et pour partie inédites. D'autres photographies, extraites d'autres séries de son travail, la complètent et donnent ainsi à voir un ensemble rétrospectif de l'œuvre de cet artiste.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Bernard Plossu (né en 1945)</h3>
                    <p>
                      Considéré comme l'un des plus importants photographes de sa génération, Bernard Plossu a découvert ses sujets de travail au travers de voyages qui l'ont conduit au Mexique, en Inde, au Niger, en Amérique du Nord, au Maroc, ou encore dans le Sud de l'Espagne ou de l'Italie où il a longuement séjourné.
                    </p>
                  </div>

                  <p>
                    Ses sujets, il les rencontre aussi pendant ses marches qui l'entraînent sur les sentiers déserts des montagnes, des Alpes ou des calanques toutes proches de La Ciotat, dans le Sud de la France où il s'est installé depuis une vingtaine d'années. Comme le souligne l'écrivain Anne-Marie Garat, le travail de Bernard Plossu s'inscrit dans une démarche d'écriture visuelle toute emplie de "la grâce et de l'impureté de l'émotion" qui marque l'œuvre des plus grands artistes.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Tournée au Maroc</h3>
                    <p className="text-gray-700">
                      Cette exposition a déjà été programmée dans cinq villes au Maroc : Rabat, Tanger, Marrakech, Meknès et Fès dans le cadre de la saison France-Maroc de l'Institut Français du Maroc.
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

export default BernardPlossuPage; 