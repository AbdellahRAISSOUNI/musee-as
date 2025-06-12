"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const OrientFantasmePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        {/* Background Poster with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/orient-fantasme/Exposition-Orient-Fantasme.jpg"
            alt="Exposition Orient Fantasmé Poster"
            fill
            className="object-cover opacity-60"
            style={{ objectPosition: 'center 30%' }}
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
              Orient Fantasmé
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              26 avril – 29 septembre 2018
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
                Exposition
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Orient Fantasmé
              </h3>
            </motion.div>

            {/* Poster again, centered, not too large */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-10 flex justify-center"
            >
              <div className="relative w-full max-w-xl h-[340px] md:h-[420px]">
                <Image
                  src="/images/expositions-temporaires/orient-fantasme/Exposition-Orient-Fantasme.jpg"
                  alt="Exposition Orient Fantasmé Poster"
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'center 30%' }}
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
                Orient Fantasmé met en regard affiches orientalistes de la collection du Musée de la Fondation Slaoui et œuvres des artistes contemporaines Héla Ammar, Meriem Bouderbala, Yasmina Bouziane et Lalla Essaydi. En imaginant un dialogue entre affiches d'époque coloniale et création contemporaine, l'exposition dessine une analyse des codes de représentation utilisés dans la construction par l'image d'un certain Orient.
              </p>
              <p>
                Les affiches publicitaires des années 1930 à 1960, vantant les colonies aux peuples européens, reflètent cette construction de l'Orient par l'Occident. Diffusées en masse, les « réclames » ont contribué à la création d'un Autre fantasmé, exotisé et bien souvent essentialisé.
              </p>
              <p>
                Les artistes contemporaines marocaines et tunisiennes présentées dans l'exposition empruntent, quant à elles, l'imagerie de l'Autre pour questionner leur propre condition aujourd'hui et à travers l'histoire et penser une (ré)-appropriation du corps et des codes…
              </p>
            </motion.div>

            {/* Vernissage info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mt-12 mb-8"
            >
              <div className="inline-block bg-[#fffbe6] border border-[#bfa76a] px-6 py-3 rounded-none font-bodoni text-lg text-gray-900 tracking-wide">
                <span className="font-semibold" style={{ color: gold }}>// Vernissage mercredi 25 avril 2018 à 19h //</span>
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

export default OrientFantasmePage; 