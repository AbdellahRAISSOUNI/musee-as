"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const LesEcoMarocPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-12">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6">
              Les Eco Maroc
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Image - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-10"
            >
              <div className="relative w-full h-[200px] overflow-hidden mb-6">
                <Image
                  src="/images/presse/les-eco-maroc/les_eco_Pr54zxo.jpg"
                  alt="Les Eco Maroc"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
              
              <div className="text-center">
                <p className="text-gray-500 italic">
                  Écrit par Jihane BOUGRINE • Publication : 22 janvier 2018
                </p>
              </div>
            </motion.div>
            
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="font-bold text-lg" style={{ color: '#516b4d' }}>
                MUSÉE DE LA FONDATION SALOUI
              </h2>
              
              <h3 className="font-bold text-3xl text-gray-900 my-4">
                LES MYSTÈRES DE L'ÎLE SIDI ABDERRAHMAN DÉVOILÉS
              </h3>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Le Musée de la Fondation Abderrahman Slaoui présente depuis le 17 janvier jusqu'au 28 février 2018, le second accrochage de l'exposition AJAMMAR, projet de résidences, de recherche et de création autour de l'île de Sidi Abderrahman à Casablanca.
                </p>
                
                <p className="text-gray-700 mb-6">
                  L'art afin de percer le mystère de l'île de Sidi Abderrahman, c'est ce que propose l'exposition AJAMMAR au Musée de la Fondation Abderrahman Slaoui jusqu'au 28 février. Un projet mêlant les points de vue d'artistes nationaux et internationaux de générations, parcours, origines et formations différents. Ainsi, Ymane Fakhir, Mohssin Harraki, Caroline Trucco et Khalil El Gherib développent des pratiques pluridisciplinaires cultivant une même fascination pour les rituels, le sacré et les systèmes de croyances. «l'île de Sidi Abderrahman est réputée pour être le temple des voyants, guérisseurs et sorciers. Le nom de l'île vient d'un Saint homme du 19e siècle, originaire de Bagdad, échoué sur les côtes de l'île. Les habitants de Casablanca le sollicitent pour ses pouvoirs miraculeux. Depuis sa mort, les pouvoirs magiques de Sidi Abderrahman, semblent habiter l'île, où continuent de défiler des pèlerins à la recherche d'une certaine délivrance».
                </p>
                
                <p className="text-gray-700 mb-6">
                  Cette première restitution propose un parcours et un éclairage scientifique sur Sidi Abderrahman et sur la structure psychique et sociologique des cultes des Saints en général. Cette exposition est également l'occasion de poser les premiers jalons d'un vaste projet dans une perspective d'échanges et de dialogues autour d'une île cristallisant les fantasmes les plus contradictoires pour parler de spiritualité, de superstition, de magie, d'histoire et d'oralité. En effet, dans un second temps, le Musée de la Fondation Abderrahman Slaoui présentera l'exposition finale, partie intégrante d'un projet curatorial transdisciplinaire qui inclura un cycle d'études, un espace d'échanges et de rencontres à la croisée de l'art contemporain, de l'anthropologie, de l'histoire et de la sociologie en questionnant comment, à travers différentes cultures qui font notre monde, certaines pratiques et croyances se rejoignent.
                </p>
              </div>
            </motion.div>
            
            <div className="mt-12 flex justify-end">
              <ReturnButton href="/fondation/presse" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LesEcoMarocPage; 