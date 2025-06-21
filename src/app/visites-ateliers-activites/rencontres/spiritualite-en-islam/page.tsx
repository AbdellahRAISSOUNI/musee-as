"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';
import { FaTools } from 'react-icons/fa';

const gold = '#bfa76a';

const SpiritualiteEnIslamPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/visites-ateliers-activites/rencontres/islam/visuel_conf_FB_1.jpg"
            alt="Spiritualité en Islam"
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
              CONFÉRENCE - La spiritualité en Islam
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Une quête de sens
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Le "matérialisme religieux" des salafistes et autres islamistes promeut la pensée unique, l'uniformité dans la tête et dans l'habit, ignorant la profusion de sens qu'offre le Coran (tanjim) et le pluralisme assumé de l'Islam classique. Cette sclérose a suscité le djihadisme, fer de lance du nihilisme contemporain. La spiritualité - le Soufisme en l'occurrence- semble être la seule méthode qui permette à l'homme contemporain de redécouvrir en lui le sens de la présence humaine sur terre.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-6">
                  Une spiritualité lucide et responsable, qui épouse le champ de la vie et contribue à élever la conscience humaine; une spiritualité qui transcende les idées réductrices et désarme les extrémismes. Comment la vivre et la donner en partage ?
                </p>

                <div className="my-12 relative h-[400px] overflow-hidden">
                  <Image
                    src="/images/visites-ateliers-activites/rencontres/islam/visuel_conf_FB_1.jpg"
                    alt="Conférence La spiritualité en Islam"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  À propos du conférencier
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Éric Geoffroy enseigne l'islamologie notamment à l'Université de Strasbourg. Il est un spécialiste académique du Soufisme, et également un de ses représentants majeurs en France. Il travaille aussi sur les enjeux de la spiritualité dans le monde contemporain (la mondialisation, la postmodernité, l'écologie).
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Détails pratiques
                  </h3>
                  <p className="mb-2">
                    <strong>Date :</strong> Vendredi 16 décembre
                  </p>
                  <p className="mb-2">
                    <strong>Heure :</strong> 19h
                  </p>
                  <p className="mb-2">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="mb-2">
                    <strong>Entrée :</strong> 100 dh
                  </p>
                  <p className="text-sm text-gray-600">
                    Dans la limite des places disponibles
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Return Button at Bottom */}
            <div className="mt-16">
              <ReturnButton href="/visites-ateliers-activites/rencontres" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpiritualiteEnIslamPage;
