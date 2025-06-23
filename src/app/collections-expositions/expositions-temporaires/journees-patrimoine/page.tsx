"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const JourneesPatrimoinePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/journes-de-patrimoins/Journees-du-Patrimoine-les-6-et-7-avril.png"
            alt="Journées du Patrimoine Exhibition"
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
              Journées du Patrimoine
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Les 6 et 7 avril
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
                Exposition spéciale
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Affiches orientalistes
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
                  src="/images/expositions-temporaires/journes-de-patrimoins/Journees-du-Patrimoine-les-6-et-7-avril.png"
                  alt="Journées du patrimoine Exhibition"
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
                Dans le cadre de "Les Journées du Patrimoine", le Musée de la Fondation Abderrahman Slaoui vous invite à une exposition d'affiches orientalistes les samedi 6 et dimanche 7 avril de 10h à 18h.
              </p>
              <p>
                Cette exposition spéciale dans le cadre des Journées du Patrimoine offre une opportunité exceptionnelle de découvrir la richesse de la collection d'affiches orientalistes de la Fondation Abderrahman Slaoui.
              </p>
              <p>
                Les Journées du Patrimoine constituent un moment privilégié pour célébrer et partager notre héritage culturel. Le Musée de la Fondation Abderrahman Slaoui participe à cet événement en ouvrant ses portes et en présentant une sélection remarquable d'affiches qui témoignent de l'histoire des représentations de l'Orient.
              </p>
              <div className="mt-8 text-center">
                <div className="inline-block p-6 border-2 border-current rounded-lg" style={{ borderColor: gold, backgroundColor: '#fffbe6' }}>
                  <h3 className="font-bodoni text-2xl text-gray-900 mb-4">Soyez au Rendez-vous !</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold">Samedi 6 avril</p>
                    <p className="font-semibold">Dimanche 7 avril</p>
                    <p>De 10h à 18h</p>
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
  );
};

export default JourneesPatrimoinePage; 