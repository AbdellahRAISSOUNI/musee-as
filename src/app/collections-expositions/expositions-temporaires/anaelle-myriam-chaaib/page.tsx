"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const AnaelleMyriaChaaibPage = () => {
  return (
    <PageLayout title="Anaëlle Myriam Chaaib">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/mryiam_chaaib/AfficheSlaoui_10_1.jpg"
              alt="Anaëlle Myriam Chaaib"
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
                  ANAËLLE MYRIAM CHAAIB
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Artiste franco-marocaine
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
                    src="/images/expositions-temporaires/mryiam_chaaib/AfficheSlaoui_10_1.jpg"
                    alt="Anaëlle Myriam Chaaib"
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
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Première exposition</h3>
                    <p className="text-gray-700">
                      Le musée de la Fondation Abderrahman Slaoui accueille avec enthousiasme la première exposition de l'artiste franco-marocaine Anaëlle Myriam Chaaib, qui présente une collection de toiles inspirées de références culturelles marocaines et françaises.
                    </p>
                  </div>

                  <p>
                    À travers l'illustration, la peinture, le dessin et le film d'animation, l'artiste tisse des fabulations et des récits historiques qui nous invitent à un voyage empreint de souvenirs d'enfance, liés à ses deux pays d'origine. L'exposition, qui met en avant un mélange de peinture naïve marocaine du siècle dernier et de références culturelles reconnaissables, suscite une réflexion sur le passé, le présent, la réalité et la fiction.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">"Le mariage : deux fleuves se rencontrent"</h3>
                    <p className="text-gray-700">
                      Le point de départ de cette réflexion autobiographique évolutive est l'œuvre intitulée "Le mariage : deux fleuves se rencontrent", représentant l'allégorie des noces des parents de l'artiste. Anaëlle Myriam Chaaib dévoile ainsi des tranches de vie où les images de la France se mêlent à celles du Maroc, offrant une narration poétique empreinte d'humour et de sensibilité.
                    </p>
                  </div>

                  <p>
                    Entre ses explorations artistiques et sa passion pour la préparation culinaire, Anaëlle Myriam Chaaib exprime son univers à travers des peintures à l'acrylique et des gouaches sur papier, où le personnel et le politique se rencontrent dans un langage symbolique.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Une artiste aux multiples facettes</h3>
                    <p className="text-gray-700">
                      Cette exposition reflète la créativité et la diversité d'une artiste aux multiples facettes, soulignant la beauté et la richesse des souvenirs qui façonnent son histoire personnelle.
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

export default AnaelleMyriaChaaibPage; 