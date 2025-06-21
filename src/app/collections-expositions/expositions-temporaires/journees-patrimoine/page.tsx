"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const JourneesPatrimoinePage = () => {
  return (
    <PageLayout title="Journées du Patrimoine les 6 et 7 avril">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/journes-de-patrimoins/Journees-du-Patrimoine-les-6-et-7-avril.png"
              alt="Journées du Patrimoine"
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
                  JOURNÉES DU PATRIMOINE
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Les 6 et 7 avril
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
                    src="/images/expositions-temporaires/journes-de-patrimoins/Journees-du-Patrimoine-les-6-et-7-avril.png"
                    alt="Journées du Patrimoine"
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
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Dans le cadre de "Les Journées du Patrimoine"</h3>
                    <p className="text-gray-700">
                      Le Musée de la Fondation Abderrahman Slaoui vous invite à une exposition d'affiches orientalistes les samedi 6 et dimanche 7 avril de 10h à 18h
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-block bg-gray-50 border-2 border-accent-gold px-8 py-6 rounded-lg">
                      <h2 className="font-bodoni text-2xl text-gray-900 mb-4">Soyez au Rendez-vous !</h2>
                      <div className="space-y-2 text-gray-700">
                        <p className="font-semibold">Samedi 6 avril</p>
                        <p className="font-semibold">Dimanche 7 avril</p>
                        <p>De 10h à 18h</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Une occasion unique</h3>
                    <p className="text-gray-700">
                      Cette exposition spéciale dans le cadre des Journées du Patrimoine offre une opportunité exceptionnelle de découvrir la richesse de la collection d'affiches orientalistes de la Fondation Abderrahman Slaoui.
                    </p>
                  </div>

                  <p>
                    Les Journées du Patrimoine constituent un moment privilégié pour célébrer et partager notre héritage culturel. Le Musée de la Fondation Abderrahman Slaoui participe à cet événement en ouvrant ses portes et en présentant une sélection remarquable d'affiches qui témoignent de l'histoire des représentations de l'Orient.
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
    </PageLayout>
  );
};

export default JourneesPatrimoinePage; 