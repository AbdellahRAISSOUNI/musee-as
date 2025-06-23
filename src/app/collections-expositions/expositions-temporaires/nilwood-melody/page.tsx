"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const NilwoodMelodyPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
          <div className="absolute inset-0">
            <Image
              src="/images/expositions-temporaires/nilwood-melody/visuel_site_internet_2_1.jpg"
            alt="Nilwood Melody Exhibition"
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
              Nilwood Melody
                </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
                  Qu'avons-nous fait de nos rêves ?
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
                Âge d'or du cinéma égyptien
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Jusqu'au 22 avril 2017
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
                    src="/images/expositions-temporaires/nilwood-melody/visuel_site_internet_2_1.jpg"
                  alt="Nilwood Melody Exhibition"
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
                Le Musée de la Fondation Abderrahman Slaoui vous invite à explorer la mémoire d'un temps fort du 7ème art que fut l'« âge d'or » du cinéma égyptien, à travers les travaux de six artistes contemporains.
              </p>
              <p>
                Ce cinéma, héritier du music-hall et des comédies musicales populaires, issus de milieux, cultures, influences intellectuelles et arts variés alimentait une « industrie du rêve » et des salles de cinéma alors lieux de socialisation et de rencontres incontournables. Ses vedettes, sa musique et ses chants ont influé sur la réalité d'un monde alors en pleine mutation et fait rêver plusieurs générations d'hommes et de femmes.
              </p>
              <p>
                Dans un monde en pleine mutation, la réactivation de cette mémoire n'est pas un choix nostalgique mais le désir de mettre en miroir les projections du passé en écho au présent créant ainsi le reflet de nos mutations, explorant les récits intimes et la psyché collective.
              </p>
              <div className="mt-8 p-6 border-l-4 border-current" style={{ borderColor: gold, backgroundColor: '#fffbe6' }}>
                <p className="text-sm mb-4" style={{ color: gold }}>
                  <strong>Artistes participants :</strong><br/>
                  Mariam Abouzid Souali (Maroc) • Zoulikha Bouabdellah (Algérie-France) • Nabil Boutros (Égypte) • Mouna Jemal Siala (Tunisie) • Khalil Nemmaoui (Maroc) • Ghita Skali (Maroc)
                </p>
                <p className="text-sm" style={{ color: gold }}>
                  <strong>Commissariat :</strong> Yasmina Bouzid<br/>
                  <strong>Vernissage :</strong> Le mercredi 15 février à 19h
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

export default NilwoodMelodyPage; 