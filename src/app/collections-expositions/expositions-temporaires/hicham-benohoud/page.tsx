"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const HichamBenohoudPage = () => {
  return (
    <PageLayout title="HICHAM BENOHOUD: 25 ANS DE PHOTOGRAPHIE">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/hicham-benohoud/Exposition-HICHAM-BENOHOUD-25-ANS-DE-PHOTOGRAPHIE.png"
              alt="HICHAM BENOHOUD: 25 ANS DE PHOTOGRAPHIE"
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
                  HICHAM BENOHOUD
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  25 ANS DE PHOTOGRAPHIE
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
                    src="/images/expositions-temporaires/hicham-benohoud/Exposition-HICHAM-BENOHOUD-25-ANS-DE-PHOTOGRAPHIE.png"
                    alt="HICHAM BENOHOUD: 25 ANS DE PHOTOGRAPHIE"
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
                    Les photographies d'Hicham Benohoud ne cessent d'interroger sur l'identité. La sienne bien sûr, mais dans un processus de création plus large que la seule expérience du récit autobiographique, son travail questionne aussi l'identité de ceux qui l'entourent. La prédestination sociale comme source d'enfermement, mise en scène dans des situations souvent inhabituelles, est une notion récurrente dans le travail d'Hicham Benohoud.
                  </p>

                  <p>
                    À travers ses portraits, Hicham Benouhoud présente un Maroc contrasté où des ânes laborieux trônent dans des salons luxueux et dans lequel le poids social peut conduire à se mettre dans un trou.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <p className="font-medium text-gray-900 mb-2">Exposition à voir</p>
                    <p className="text-gray-700 mb-4">Du 7 avril au 7 mai 2016</p>
                    <p className="font-medium text-gray-900 mb-2">Deux lieux :</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Musée de la Fondation Abderrahman Slaoui</li>
                      <li>• Loft Art Gallery : <Link href="http://loftartgallery.net/" className="text-accent-gold hover:underline" target="_blank" rel="noopener noreferrer">loftartgallery.net</Link></li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Pour aller plus loin :</h3>
                    <p className="text-gray-700">
                      Visite commentée de l'exposition par Hicham Benohoud et Marie Moignard le 16 avril à 17h
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bodoni text-2xl text-gray-900 mb-4">Exposition organisée par :</h3>
                    <div className="text-gray-700 space-y-2">
                      <p>• Institut français de Casablanca</p>
                      <p>• Musée de la Fondation Abderrahman Slaoui</p>
                      <p>• Loft Art Gallery</p>
                    </div>
                    
                    <h3 className="font-bodoni text-2xl text-gray-900 mb-4 mt-6">En partenariat avec :</h3>
                    <div className="text-gray-700 space-y-2">
                      <p>• Galerie Vu (Paris)</p>
                      <p>• Atelier 21 (Casablanca)</p>
                      <p>• CulturesInterface (Casablanca)</p>
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

export default HichamBenohoudPage; 