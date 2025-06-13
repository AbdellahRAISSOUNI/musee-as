"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGift, FaBook, FaShoppingBag, FaTimes } from 'react-icons/fa';

const gold = '#bfa76a';

const ComptoirVentePage = () => {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/infos-pratiques/comptoir-vente/le-comptoir-des-ventes-.jpg"
            alt="Comptoir des Ventes"
            fill
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-5">
              Le Comptoir des Ventes
            </h1>
            <div className="w-28 h-[2px] mx-auto mb-7" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni italic">
              Art, Livres & Souvenirs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="mb-20 text-center"
            >
              <h2 className="font-bodoni text-3xl mb-6" style={{ color: gold }}>La Boutique du Musée</h2>
              <div className="w-16 h-[1px] mx-auto mb-10" style={{ backgroundColor: gold }} />
              <p className="font-bodoni text-lg leading-relaxed max-w-3xl mx-auto">
                Le Comptoir des Ventes du Musée Abderrahman Slaoui vous invite à prolonger votre expérience culturelle à travers une sélection raffinée d'objets d'art, de publications et de souvenirs inspirés par nos collections et expositions. Chaque article est choisi avec soin pour refléter l'esprit et l'esthétique du musée.
              </p>
            </motion.div>

            {/* Main Image with Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-24 relative"
            >
              <div 
                className="aspect-[16/9] relative max-w-4xl mx-auto cursor-pointer group"
                onClick={toggleFullscreen}
              >
                <Image
                  src="/images/infos-pratiques/comptoir-vente/le-comptoir-des-ventes-.jpg"
                  alt="Comptoir des Ventes du Musée"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-black/70 text-white font-bodoni px-4 py-2 rounded">
                    Cliquez pour agrandir
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <blockquote className="font-bodoni text-xl italic text-gray-700 max-w-2xl mx-auto">
                  "L'art est le plus beau des voyages que l'on puisse entreprendre, et le meilleur des souvenirs que l'on puisse rapporter."
                </blockquote>
                <div className="w-12 h-[1px] mx-auto my-4" style={{ backgroundColor: gold }} />
                <cite className="font-bodoni text-sm not-italic">Collection Fondation Abderrahman Slaoui</cite>
              </div>
            </motion.div>

            {/* Content Sections with Gold Border Top */}
            <div className="pt-8 border-t-[1px]" style={{ borderColor: gold }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="flex items-center mb-8">
                    <FaGift className="mr-4 text-2xl" style={{ color: gold }} />
                    <h3 className="font-bodoni text-2xl" style={{ color: gold }}>Objets d'Art & Souvenirs</h3>
                  </div>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <p className="font-bodoni text-lg leading-relaxed">
                      Notre boutique propose une collection exclusive d'objets inspirés des trésors du musée : reproductions d'œuvres, cartes postales artistiques, affiches d'expositions, bijoux et objets décoratifs créés par des artisans marocains d'exception.
                    </p>
                    <p className="font-bodoni text-lg mt-6 leading-relaxed">
                      Chaque pièce raconte une histoire liée au riche patrimoine culturel marocain et à l'héritage artistique de la Fondation Abderrahman Slaoui.
                    </p>
                    <ul className="font-bodoni text-lg mt-8 space-y-3">
                      <li className="flex items-start">
                        <span className="text-sm mr-3 mt-1.5" style={{ color: gold }}>◆</span>
                        <span>Cartes postales des œuvres emblématiques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sm mr-3 mt-1.5" style={{ color: gold }}>◆</span>
                        <span>Reproductions d'affiches orientalistes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sm mr-3 mt-1.5" style={{ color: gold }}>◆</span>
                        <span>Objets décoratifs inspirés des collections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sm mr-3 mt-1.5" style={{ color: gold }}>◆</span>
                        <span>Créations contemporaines d'artisans marocains</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="flex items-center mb-8">
                    <FaBook className="mr-4 text-2xl" style={{ color: gold }} />
                    <h3 className="font-bodoni text-2xl" style={{ color: gold }}>Éditions & Catalogues</h3>
                  </div>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <p className="font-bodoni text-lg leading-relaxed">
                      Découvrez notre bibliothèque soigneusement constituée : catalogues d'expositions richement illustrés, monographies d'artistes, ouvrages sur l'art marocain et l'histoire culturelle du pays.
                    </p>
                    <p className="font-bodoni text-lg mt-6 leading-relaxed">
                      Nos éditions exclusives, publiées à l'occasion des expositions temporaires, vous permettent d'approfondir votre connaissance des œuvres et des artistes présentés au musée.
                    </p>
                    <ul className="font-bodoni text-lg mt-8 space-y-3">
                      <li className="flex items-start">
                        <span className="text-sm mr-3 mt-1.5" style={{ color: gold }}>◆</span>
                        <span>Catalogues illustrés des expositions temporaires</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sm mr-3 mt-1.5" style={{ color: gold }}>◆</span>
                        <span>Livres d'art sur les collections permanentes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sm mr-3 mt-1.5" style={{ color: gold }}>◆</span>
                        <span>Ouvrages sur l'histoire de l'art marocain</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sm mr-3 mt-1.5" style={{ color: gold }}>◆</span>
                        <span>Publications éducatives pour le jeune public</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="bg-gray-50 p-10 border-l-4"
              style={{ borderColor: gold }}
            >
              <div className="flex items-center mb-6">
                <FaShoppingBag className="mr-4 text-2xl" style={{ color: gold }} />
                <h3 className="font-bodoni text-2xl">Informations pratiques</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bodoni text-lg mb-3" style={{ color: gold }}>Horaires</h4>
                  <p className="font-bodoni text-lg">
                    Le Comptoir des Ventes est accessible aux heures d'ouverture du musée, avec ou sans billet d'entrée.
                  </p>
                </div>
                <div>
                  <h4 className="font-bodoni text-lg mb-3" style={{ color: gold }}>Services</h4>
                  <p className="font-bodoni text-lg">
                    Notre équipe est à votre disposition pour vous conseiller et vous aider à trouver le souvenir idéal de votre visite.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link 
                  href="/infos-pratiques/horaires-tarifs-acces" 
                  className="inline-flex items-center font-bodoni text-[#bfa76a] border-b-2 border-transparent hover:border-[#bfa76a] transition-all duration-300 pb-1 tracking-wide group"
                >
                  <span className="mr-2">Consulter les horaires du musée</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isImageFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={toggleFullscreen}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-[#bfa76a] transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
            >
              <FaTimes size={30} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl h-[80vh]"
            >
              <Image
                src="/images/infos-pratiques/comptoir-vente/le-comptoir-des-ventes-.jpg"
                alt="Comptoir des Ventes du Musée"
                fill
                className="object-contain"
                priority
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ComptoirVentePage; 