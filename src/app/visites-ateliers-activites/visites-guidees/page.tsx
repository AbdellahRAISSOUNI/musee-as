"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserFriends, FaUsers, FaChild } from 'react-icons/fa';

const gold = '#bfa76a';

const VisitesGuideesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/entree_musee.jpg"
            alt="Visites Guidées"
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
              Visites Guidées
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Découvrez les collections avec nos guides experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Visite Adulte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <FaUserFriends className="mr-3 text-2xl" style={{ color: gold }} />
                <h2 className="font-bodoni text-2xl md:text-3xl">Visite adulte</h2>
              </div>
              <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                <p className="font-bodoni text-lg mb-6 leading-relaxed">
                  Entre symbolique, comparaison, remise en contexte et petits détails, la visite guidée vous accompagnera dans la découverte d'Abderrahman Slaoui et de ses collections.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="font-bodoni text-lg mb-2">
                    <strong>Tarif :</strong> 100 dh / personne + frais d'entrée au Musée
                  </p>
                  <p className="font-bodoni text-lg">
                    <strong>La réservation est obligatoire :</strong> par mail (<a href="mailto:fas.musee@gmail.com" className="text-black hover:text-[#bfa76a] transition-colors duration-300">fas.musee@gmail.com</a>) ou par téléphone (<a href="tel:+212522206217" className="text-black hover:text-[#bfa76a] transition-colors duration-300">+212 (0)5 22 20 62 17</a>)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visite en famille */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <FaChild className="mr-3 text-2xl" style={{ color: gold }} />
                <h2 className="font-bodoni text-2xl md:text-3xl">Visite en famille (2 adultes et au moins 1 enfant)</h2>
              </div>
              <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                <p className="font-bodoni text-lg mb-6 leading-relaxed">
                  Dans sa volonté de transmettre la connaissance du patrimoine à tous les publics et notamment les plus jeunes, cette visite a été conçue pour passer un moment agréable et instructif en famille.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="font-bodoni text-lg mb-2">
                    <strong>Tarif :</strong> forfait à 100 dh + frais d'entrée au Musée
                  </p>
                  <p className="font-bodoni text-lg">
                    <strong>La réservation est obligatoire :</strong> par mail (<a href="mailto:fas.musee@gmail.com" className="text-black hover:text-[#bfa76a] transition-colors duration-300">fas.musee@gmail.com</a>) ou par téléphone (<a href="tel:+212522206217" className="text-black hover:text-[#bfa76a] transition-colors duration-300">+212 (0)5 22 20 62 17</a>)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visite en groupe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <FaUsers className="mr-3 text-2xl" style={{ color: gold }} />
                <h2 className="font-bodoni text-2xl md:text-3xl">Visite en groupe (au moins 5 personnes)</h2>
              </div>
              <div className="border-l-2 pl-8" style={{ borderColor: gold }}>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="font-bodoni text-lg mb-2">
                    <strong>Tarif :</strong> forfait à 500 dh + frais d'entrée au Musée
                  </p>
                  <p className="font-bodoni text-lg">
                    <strong>La réservation est obligatoire :</strong> par mail (<a href="mailto:fas.musee@gmail.com" className="text-black hover:text-[#bfa76a] transition-colors duration-300">fas.musee@gmail.com</a>) ou par téléphone (<a href="tel:+212522206217" className="text-black hover:text-[#bfa76a] transition-colors duration-300">+212 (0)5 22 20 62 17</a>)
                  </p>
                </div>
                <p className="font-bodoni text-lg leading-relaxed">
                  Les groupes peuvent également faire une visite libre et autonome du Musée. Dès lors, seuls les frais d'entrée au Musée seront payés par les membres du groupe. La gratuité est offerte au guide accompagnateur.
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mt-12"
            >
              <Link
                href="/infos-pratiques/contact"
                className="inline-block px-8 py-4 font-bodoni text-white transition-colors duration-300 text-lg"
                style={{ backgroundColor: gold }}
              >
                Réserver une visite guidée
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisitesGuideesPage; 