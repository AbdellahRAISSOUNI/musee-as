"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const MilCarasPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
          <div className="absolute inset-0">
            <Image
              src="/images/expositions-temporaires/mil_caras/Mil-Caras.png"
            alt="Mil Caras Exhibition"
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
              Mil Caras
                </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
                  Du 29 mai au 29 juillet 2014
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
                Projet interculturel
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Artistes marocaines et espagnoles
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
                    src="/images/expositions-temporaires/mil_caras/Mil-Caras.png"
                  alt="Mil Caras Exhibition"
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
                    Mil Caras est un projet promu par l'Agence espagnole de coopération internationale pour le développement (AECID), en collaboration avec l'Ambassade d'Espagne au Maroc et l'Institut Cervantès. Réunissant des artistes marocaines et espagnoles, il entend devenir une plateforme d'échange d'idées et d'expériences et, en définitive, créer une nouvelle passerelle entre deux cultures si proches.
                  </p>
                  <p>
                À cette occasion, les artistes ont spécialement créé des œuvres interagissant avec des objets issus de la collection permanente du musée : une collection privée singulière qui reflète la personnalité de son auteur, Feu Abderrahman Slaoui. Cultivé, amoureux de l'art et mécène, il a su s'entourer tout au long de sa vie d'œuvres d'art précieuses provenant de différentes cultures et époques.
                  </p>
                  <p>
                    L'exposition Mil Caras, revue pour le musée, renvoie à ce jeu de regards qui s'instaure entre deux mondes et deux époques, qui se contemplent et qui se reflètent l'un dans l'autre : moment de rencontre d'où naît la complicité entre les artistes et la collection du musée.
                  </p>
              <div className="mt-8 p-6 border-l-4 border-current" style={{ borderColor: gold, backgroundColor: '#fffbe6' }}>
                <p className="text-sm mb-4" style={{ color: gold }}>
                  <strong>Artistes participants :</strong><br/>
                  Amina Benbouchta • Zoulikha Bouabdellah • Clara Carvajal • Safâa Erruas • María Gimeno • Marina Vargas
                </p>
                <p className="text-sm" style={{ color: gold }}>
                  Un des objectifs de ce projet est de mettre en évidence le pouvoir de l'art et de la culture comme vecteurs de communication et de compréhension.
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

export default MilCarasPage; 