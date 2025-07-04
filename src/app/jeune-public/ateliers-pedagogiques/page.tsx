"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaPalette } from 'react-icons/fa';

const gold = '#bfa76a';

const AteliersPedagogiquesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/jeune-public/ateliers-pedagogiques/ateliers-pedagogiques.jpg"
            alt="Ateliers Pédagogiques"
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
              Ateliers Pédagogiques
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Éveil artistique et culturel pour les enfants
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Left Column - Content */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
                >
                  <div className="flex items-center mb-8">
                    <FaPalette className="mr-3 text-2xl" style={{ color: gold }} />
                    <h2 className="font-bodoni text-2xl md:text-3xl">Ateliers créatifs</h2>
                  </div>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <p className="font-bodoni text-lg mb-6 leading-relaxed">
                      Le musée propose régulièrement des ateliers à destination du jeune public. Pour plus d'information, merci de consulter l'équipe du musée.
                    </p>
                    <div className="mt-8">
                      <p className="font-bodoni mt-4">
                        Pour tout renseignement contactez-nous: <br />
                        <a href="mailto:fas.musee@gmail.com" className="font-bodoni text-black hover:text-[#bfa76a] transition-colors duration-300">fas.musee@gmail.com</a> <br />
                        <a href="tel:+212522206217" className="font-bodoni text-black hover:text-[#bfa76a] transition-colors duration-300">+212 (0)5 22 20 62 17</a>
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <div className="mb-16">
                  <h3 className="font-bodoni text-2xl mb-6" style={{ color: gold }}>Types d'ateliers</h3>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <ul className="space-y-4">
                      <li className="font-bodoni text-lg">
                        <span className="inline-block w-3 h-3 mr-2 transform rotate-45" style={{ backgroundColor: gold }}></span>
                        Initiation à la peinture et au dessin
                      </li>
                      <li className="font-bodoni text-lg">
                        <span className="inline-block w-3 h-3 mr-2 transform rotate-45" style={{ backgroundColor: gold }}></span>
                        Calligraphie arabe et art du zellige
                      </li>
                      <li className="font-bodoni text-lg">
                        <span className="inline-block w-3 h-3 mr-2 transform rotate-45" style={{ backgroundColor: gold }}></span>
                        Ateliers de modelage et sculpture
                      </li>
                      <li className="font-bodoni text-lg">
                        <span className="inline-block w-3 h-3 mr-2 transform rotate-45" style={{ backgroundColor: gold }}></span>
                        Contes et illustrations du patrimoine marocain
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Sticky Image */}
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="sticky top-32"
                >
                  <div className="relative h-[400px] overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/images/jeune-public/ateliers-pedagogiques/ateliers-pedagogiques.jpg"
                      alt="Ateliers Pédagogiques"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link
                      href="/infos-pratiques/contact"
                      className="inline-block px-6 py-3 font-bodoni text-white transition-colors duration-300"
                      style={{ backgroundColor: gold }}
                    >
                      Réserver un atelier
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AteliersPedagogiquesPage;

 