"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const OfVoiceAndStonePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        {/* Background Poster with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/of-voice-and-stone/Exhibit_poster_600.jpeg"
            alt="Of Voice and Stone Exhibition Poster"
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
              Of Voice & Stone
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              200 Years of History in the American Legation Building & Morocco
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
                Célébration du 200e anniversaire
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Deux siècles d'amitié maroco-américaine
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
                  src="/images/expositions-temporaires/of-voice-and-stone/Exhibit_poster_600.jpeg"
                  alt="Of Voice and Stone Exhibition Poster"
                  fill
                  className="object-contain"
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
                L'exposition "Of voice and stone", qui célèbre le 200e anniversaire de la légation américaine à Tanger et plus de deux siècles d'amitié entre les peuples marocain et américain, a fait escale au musée de la Fondation Abderrahman Slaoui à Casablanca, après avoir été présentée du 10 juin au 15 septembre à la Bibliothèque nationale de la capitale, Rabat.
              </p>
              <p>
                L'exposition permet au grand public de découvrir des objets historiques précieux qui représentent les liens stratégiques, économiques et culturels entre les États-Unis et le Maroc, des bottes de Jimi Hendrix à la médaille d'or olympique de Nawal El Moutawakel, en passant par la robe de Lady Gaga et la veste de l'Office des services stratégiques américains, ainsi qu'une expérience immersive au cœur du film Casablanca, l'exposition met en lumière les multiples facettes de la relation entre les États-Unis et le Maroc, ainsi que des peuples des deux pays.
              </p>
              <div className="mt-8 flex items-center justify-center space-x-8">
                <div className="text-center">
                  <p className="text-xl font-bold tracking-wide" style={{ color: gold }}>9 Juin - 30 Septembre</p>
                  <p className="text-lg">2021</p>
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-lg font-semibold" style={{ color: gold }}>Entrée libre et gratuite</p>
                  <p className="text-gray-600">Ouvert du mardi au samedi</p>
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

export default OfVoiceAndStonePage; 