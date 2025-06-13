"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const gold = '#bfa76a';

const PrivatisationPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/projet-musee/espace-museographique/plan_etage_1.jpg"
            alt="Privatisation du Musée"
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
              Privatisation
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Un cadre exceptionnel pour vos événements
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
                    <FaCalendarAlt className="mr-3 text-2xl" style={{ color: gold }} />
                    <h2 className="font-bodoni text-2xl md:text-3xl">Besoin d'un espace pour vos</h2>
                  </div>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <ul className="space-y-6">
                      <li className="font-bodoni text-2xl">
                        <span className="inline-block w-3 h-3 mr-2 transform rotate-45" style={{ backgroundColor: gold }}></span>
                        évenements
                      </li>
                      <li className="font-bodoni text-2xl">
                        <span className="inline-block w-3 h-3 mr-2 transform rotate-45" style={{ backgroundColor: gold }}></span>
                        ateliers
                      </li>
                      <li className="font-bodoni text-2xl">
                        <span className="inline-block w-3 h-3 mr-2 transform rotate-45" style={{ backgroundColor: gold }}></span>
                        conferences
                      </li>
                    </ul>
                    
                    <p className="font-bodoni text-xl mt-10 mb-8 leading-relaxed">
                      Le musée Slaoui a ce qu'il vous faut !
                    </p>
                    
                    <div className="mt-8">
                      <p className="font-bodoni text-lg">
                        Renseignements ou réservations:
                      </p>
                      <div className="flex items-center mt-4">
                        <FaEnvelope className="mr-3" style={{ color: gold }} />
                        <a href="mailto:fas.musee@gmail.com" className="font-bodoni text-black hover:text-[#bfa76a] transition-colors duration-300">fas.musee@gmail.com</a>
                      </div>
                      <div className="flex items-center mt-2">
                        <FaPhoneAlt className="mr-3" style={{ color: gold }} />
                        <a href="tel:+212522206217" className="font-bodoni text-black hover:text-[#bfa76a] transition-colors duration-300">0522 20 62 17</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
                      src="/images/projet-musee/espace-museographique/plan_etage_1.jpg"
                      alt="Espace Muséographique"
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
                      Demander un devis
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

export default PrivatisationPage; 