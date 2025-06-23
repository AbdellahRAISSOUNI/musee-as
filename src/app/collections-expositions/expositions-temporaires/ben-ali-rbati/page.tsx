"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const BenAliRbatiPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/ben_ali/Exposition-Mohamed-Ben-Ali-Rbati_QS8fl8G.png"
            alt="Mohamed Ben Ali R'bati Exhibition"
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
              Mohamed Ben Ali R'bati
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Premier peintre figuratif marocain (1869-1939)
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
                R'bati Fils de Tanger
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                1869-1939
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
              <div className="relative w-full max-w-3xl">
                <Image
                  src="/images/expositions-temporaires/ben_ali/Exposition-Mohamed-Ben-Ali-Rbati_QS8fl8G.png"
                  alt="Mohamed Ben Ali R'bati Exhibition"
                  width={900}
                  height={700}
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
                Il y a des villes qui parlent à ceux qui les habitent. Elles les inspirent, dessinent des arcs de rêverie autour de leur enfance, soutiennent leur imagination et fortifient la conscience qu'elles peuvent avoir de la part manquante donnée à toute existence. Ainsi Tanger et R'bati.
              </p>
              <p>
                Mohammed ben Ali R'bati est né à Rabat, mais il a grandi à Tanger et Tanger semble l'avoir aidé à se construire un destin. La ville est un roman, à chacun de s'inventer son personnage. R'bati, premier peintre de la longue histoire marocaine, ne manque pas ce rendez-vous que la ville lui avait donné.
              </p>
              <p>
                R'bati, parce qu'il est sujet du royaume chérifien, participe à ce qui demeure pour l'Européen un inconnu. Mais en tant que fils adoptif de Tanger, il trouve chez lui, dans sa propre maison, le pays de son exil et la révélation de l'autre face du miroir : l'inconnu occidental.
              </p>
              <p>
                C'est dans les premières années de ce siècle que le peintre, alors dans sa quarantaine, rencontre un Nazaréen, Sir John Lavery, peintre de la cour de sa Gracieuse Majesté britannique. Sir John en fait son cuisinier et l'encourage dans son art. Il l'emmène à Londres avec ses tableaux. R'bati pose devant Buckingham en jellaba, fait la conquête des Londoniennes amies de son protecteur.
              </p>
              <p>
                Tanger l'a enfanté, lui a appris la générosité, une façon de s'accorder au monde. C'est son tour maintenant, fêté et reconnu, mais toujours prodigue de son art et de ses qualités d'homme, de rendre à la ville ce qu'elle lui a donné.
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

export default BenAliRbatiPage; 