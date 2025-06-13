"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const gold = '#bfa76a';

const CafeMuseePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/infos-pratiques/cafe-musee/cafe-terasse1.jpg"
            alt="Café du Musée"
            fill
            className="object-cover opacity-60"
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
              Café du Musée
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Une pause agréable au cœur du musée
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="mb-16 text-center"
            >
              <h2 className="font-bodoni text-3xl mb-6" style={{ color: gold }}>Un espace de détente au cœur du musée</h2>
              <div className="w-16 h-[1px] mx-auto mb-8" style={{ backgroundColor: gold }} />
              <p className="font-bodoni text-lg leading-relaxed max-w-3xl mx-auto">
                Situé au dernier étage du musée, dans un cadre agréable, le Café du Musée vous propose une pause au cours de votre visite. Vous pouvez siroter un thé à la menthe tout en lisant les livres mis à votre disposition.
              </p>
            </motion.div>

            {/* Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* First Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/infos-pratiques/cafe-musee/cafe-terasse1.jpg"
                    alt="Intérieur du Café du Musée"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-center font-bodoni text-gray-700 mt-3 italic">L'intérieur lumineux du Café du Musée</p>
              </motion.div>

              {/* Second Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/infos-pratiques/cafe-musee/cafe-terasse2.jpg"
                    alt="Terrasse du Café du Musée"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-center font-bodoni text-gray-700 mt-3 italic">La terrasse ensoleillée du Café du Musée</p>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="font-bodoni text-2xl mb-6" style={{ color: gold }}>Ambiance & Confort</h3>
                <div className="border-l-2 pl-6" style={{ borderColor: gold }}>
                  <p className="font-bodoni text-lg leading-relaxed">
                    Profitez d'une vue imprenable sur la ville et savourez un moment de calme dans une atmosphère élégante et paisible. Notre café vous offre un espace de détente idéal entre deux visites d'exposition.
                  </p>
                  <p className="font-bodoni text-lg mt-4 leading-relaxed">
                    Des livres d'art et des magazines sont à votre disposition pour enrichir votre expérience culturelle au sein du musée.
                  </p>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="font-bodoni text-2xl mb-6" style={{ color: gold }}>Privatisation</h3>
                <div className="border-l-2 pl-6" style={{ borderColor: gold }}>
                  <p className="font-bodoni text-lg leading-relaxed">
                    Le Café du Musée est également privatisable pour vos conférences de presse, cocktails et conférences. Son cadre élégant et sa terrasse offrent un espace idéal pour vos événements professionnels ou privés.
                  </p>
                  <p className="font-bodoni text-lg mt-4 leading-relaxed">
                    Notre équipe se tient à votre disposition pour organiser votre événement sur mesure et vous proposer des formules adaptées à vos besoins.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="mt-16 text-center"
            >
              <Link 
                href="/infos-pratiques/horaires-tarifs-acces" 
                className="inline-flex items-center font-bodoni text-[#bfa76a] border-b-2 border-transparent hover:border-[#bfa76a] transition-all duration-300 pb-1 tracking-wide group"
              >
                <span className="mr-2">Voir les horaires et tarifs du musée</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CafeMuseePage; 