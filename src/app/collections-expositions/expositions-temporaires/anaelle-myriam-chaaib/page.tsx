"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const AnaelleMyriaChaaibPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/mryiam_chaaib/AfficheSlaoui_10_1.jpg"
            alt="Anaëlle Myriam Chaaib Exhibition"
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
              Anaëlle Myriam Chaaib
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Artiste franco-marocaine
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
                Première exposition
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Une vision franco-marocaine
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
                  src="/images/expositions-temporaires/mryiam_chaaib/AfficheSlaoui_10_1.jpg"
                  alt="Anaëlle Myriam Chaaib Exhibition"
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
                Le musée de la Fondation Abderrahman Slaoui accueille avec enthousiasme la première exposition de l'artiste franco-marocaine Anaëlle Myriam Chaaib, qui présente une collection de toiles inspirées de références culturelles marocaines et françaises.
              </p>
              <p>
                À travers l'illustration, la peinture, le dessin et le film d'animation, l'artiste tisse des fabulations et des récits historiques qui nous invitent à un voyage empreint de souvenirs d'enfance, liés à ses deux pays d'origine. L'exposition, qui met en avant un mélange de peinture naïve marocaine du siècle dernier et de références culturelles reconnaissables, suscite une réflexion sur le passé, le présent, la réalité et la fiction.
              </p>
              <p>
                Le point de départ de cette réflexion autobiographique évolutive est l'œuvre intitulée <strong>"Le mariage : deux fleuves se rencontrent"</strong>, représentant l'allégorie des noces des parents de l'artiste. Anaëlle Myriam Chaaib dévoile ainsi des tranches de vie où les images de la France se mêlent à celles du Maroc, offrant une narration poétique empreinte d'humour et de sensibilité.
              </p>
              <p>
                Entre ses explorations artistiques et sa passion pour la préparation culinaire, Anaëlle Myriam Chaaib exprime son univers à travers des peintures à l'acrylique et des gouaches sur papier, où le personnel et le politique se rencontrent dans un langage symbolique.
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

export default AnaelleMyriaChaaibPage; 