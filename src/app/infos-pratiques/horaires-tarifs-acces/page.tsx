"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaTicketAlt, FaMapMarkerAlt } from 'react-icons/fa';

const gold = '#bfa76a';

const HorairesTarifsAccesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center bg-black mt-16 md:mt-20">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/entree_musee.jpg"
            alt="Musée Abderrahman Slaoui"
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
              Horaires, Tarifs et Accès
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Planifiez votre visite au Musée
            </p>
          </motion.div>
        </div>
      </section>
          
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left Column */}
              <div>
                {/* Horaires Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
          >
                  <div className="flex items-center mb-8">
                    <FaClock className="mr-3 text-2xl" style={{ color: gold }} />
                    <h2 className="font-bodoni text-2xl md:text-3xl">Horaires d'ouverture</h2>
            </div>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <p className="font-bodoni text-lg mb-4">
                      <strong>Ouvert du mardi au samedi</strong>
                    </p>
                    <p className="font-bodoni text-lg mb-6 leading-relaxed">
                      De 10h à 18h y compris les jours fériés (à l'exception des fêtes de l'Aïd Al Fitr, l'Aïd Al Adha et l'Aïd Al Mawlid)
                    </p>
            </div>
          </motion.div>
          
                {/* Tarifs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
          >
                  <div className="flex items-center mb-8">
                    <FaTicketAlt className="mr-3 text-2xl" style={{ color: gold }} />
                    <h2 className="font-bodoni text-2xl md:text-3xl">Tarifs</h2>
            </div>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <ul className="space-y-6 font-bodoni">
                      <li className="flex flex-col">
                        <span className="text-lg font-bodoni"><strong>Tarif public:</strong> 60 dh</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-lg font-bodoni"><strong>Tarif citoyens marocains et étrangers résidents au Maroc:</strong> 40 dh</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-lg font-bodoni"><strong>Tarif réduit:</strong> 10 dh (sur présentation d'un justificatif)</span>
                        <span className="text-gray-600 ml-4 font-bodoni mt-1">Etudiants, enfants de plus de 12 ans</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-lg font-bodoni"><strong>Gratuité</strong> (sur présentation d'un justificatif)</span>
                        <span className="text-gray-600 ml-4 font-bodoni mt-1">Enfants de moins de 12 ans (accompagnés de leurs parents), carte ICOM, étudiants en école d'art et d'architecture, journalistes</span>
                      </li>
                    </ul>
            </div>
          </motion.div>
        </div>
        
              {/* Right Column */}
        <div>
                {/* Visites Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="mb-16"
          >
                  <h2 className="font-bodoni text-2xl md:text-3xl mb-8" style={{ color: gold }}>Visite guidée</h2>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <p className="font-bodoni text-lg mb-6">
                      Sur réservation
                    </p>
                    <ul className="space-y-4 font-bodoni">
                      <li className="flex justify-between">
                        <span className="text-lg font-bodoni">Adulte:</span>
                        <span className="font-bodoni">100 dh par personne + frais d'entrée au Musée</span>
                </li>
                      <li className="flex justify-between">
                        <span className="text-lg font-bodoni">Famille:</span>
                        <span className="font-bodoni">forfait de 100 dh + frais d'entrée au Musée</span>
                </li>
                      <li className="flex justify-between">
                        <span className="text-lg font-bodoni">Groupe:</span>
                        <span className="font-bodoni">forfait de 500 dh + frais d'entrée au Musée</span>
                </li>
              </ul>
                    
                    <div className="mt-8">
                      <h3 className="font-bodoni text-xl mb-4">Visite scolaire</h3>
                      <p className="font-bodoni">
                        Sur réservation
                      </p>
                      <p className="font-bodoni mt-4">
                        Pour tout renseignement contactez-nous: <br />
                        <a href="mailto:fas.musee@gmail.com" className="font-bodoni text-black hover:text-[#bfa76a] transition-colors duration-300">fas.musee@gmail.com</a> <br />
                        <a href="tel:+212522206217" className="font-bodoni text-black hover:text-[#bfa76a] transition-colors duration-300">+212 (0)5 22 20 62 17</a>
                      </p>
                    </div>
            </div>
          </motion.div>
          
                {/* Accès Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
                  <div className="flex items-center mb-8">
                    <FaMapMarkerAlt className="mr-3 text-2xl" style={{ color: gold }} />
                    <h2 className="font-bodoni text-2xl md:text-3xl">Venir au Musée</h2>
            </div>
                  <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                    <address className="not-italic font-bodoni mb-8 leading-relaxed">
                      <strong className="font-bodoni">Musée de la Fondation Abderrahman Slaoui</strong><br />
                      12 rue du parc<br />
                      20070 Casablanca<br />
                      <a href="tel:+212522206217" className="font-bodoni text-black hover:text-[#bfa76a] transition-colors duration-300">+212 (0)5 22 20 62 17</a>
                    </address>
                    
                    <div className="font-bodoni leading-relaxed">
                      <p className="mb-4 font-bodoni"><strong>En tramway:</strong> arrêt Mohammed V</p>
                      <p className="font-bodoni"><strong>En taxi:</strong> si le chauffeur ne connait pas le Musée, demandez lui de vous conduire à l'Agence Urbaine de Casablanca ou l'école des Beaux-arts.</p>
                    </div>
            </div>
          </motion.div>
        </div>
      </div>
          </div>
        </div>
      </section>

      {/* Contact Button Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="font-bodoni text-lg text-gray-700 mb-8">
                Contactez-nous si vous avez des questions
              </p>
              <Link href="/infos-pratiques/contact">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden px-8 py-4 bg-transparent border-2 text-gray-900 font-bodoni text-lg font-medium transition-all duration-300 hover:text-white group cursor-pointer"
                  style={{ borderColor: gold }}
                >
                  <span className="relative z-10">Nous Contacter</span>
                  <div 
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: gold }}
                  ></div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HorairesTarifsAccesPage; 