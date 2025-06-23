"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const HichamBenohoudPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/hicham-benohoud/Exposition-HICHAM-BENOHOUD-25-ANS-DE-PHOTOGRAPHIE.png"
            alt="Hicham Benohoud Exhibition"
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
              Hicham Benohoud
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              25 ans de photographie
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
                Exposition rétrospective
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Du 7 avril au 7 mai 2016
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
                  src="/images/expositions-temporaires/hicham-benohoud/Exposition-HICHAM-BENOHOUD-25-ANS-DE-PHOTOGRAPHIE.png"
                  alt="Hicham Benohoud Exhibition"
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
                Les photographies d'Hicham Benohoud ne cessent d'interroger sur l'identité. La sienne bien sûr, mais dans un processus de création plus large que la seule expérience du récit autobiographique, son travail questionne aussi l'identité de ceux qui l'entourent.
              </p>
              <p>
                La prédestination sociale comme source d'enfermement, mise en scène dans des situations souvent inhabituelles, est une notion récurrente dans le travail d'Hicham Benohoud. À travers ses portraits, Hicham Benouhoud présente un Maroc contrasté où des ânes laborieux trônent dans des salons luxueux et dans lequel le poids social peut conduire à se mettre dans un trou.
              </p>
              <div className="mt-8 p-6 border-l-4 border-current space-y-4" style={{ borderColor: gold, backgroundColor: '#fffbe6' }}>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Deux lieux d'exposition :</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Musée de la Fondation Abderrahman Slaoui</li>
                    <li>• Loft Art Gallery</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Visite commentée :</p>
                  <p className="text-gray-700">Le 16 avril à 17h par Hicham Benohoud et Marie Moignard</p>
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
  );
};

export default HichamBenohoudPage; 