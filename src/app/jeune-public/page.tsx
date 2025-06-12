"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaSchool, FaPalette } from 'react-icons/fa';

const JeunePublicPage = () => {
  return (
    <main className="min-h-screen bg-black text-premium-white pt-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.jpg"
              alt="Jeune Public au Musée Abderrahman Slaoui"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bodoni-regular text-premium-white mb-6">
                  Jeune Public
                </h1>
                <p className="text-soft-white text-lg md:text-xl mb-8 max-w-2xl">
                  Le Musée Abderrahman Slaoui propose une programmation spécifique pour les enfants 
                  et les groupes scolaires, afin de rendre l'art et la culture accessibles aux plus jeunes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-6 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {/* Visites Scolaires */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <FaSchool className="text-accent-gold text-3xl mr-4" />
                <h2 className="font-bodoni-regular text-3xl text-premium-white">
                  Visites Scolaires Guidées
                </h2>
              </div>
              
              <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/hero-background.jpg"
                  alt="Visites Scolaires"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              <p className="text-soft-white mb-6">
                Nous accueillons les classes de tous niveaux, de la maternelle au lycée, 
                pour des visites adaptées à chaque âge. Nos médiateurs culturels sont formés 
                pour transmettre aux élèves les clés de compréhension des œuvres exposées, 
                tout en stimulant leur curiosité et leur créativité.
              </p>
              
              <div className="bg-charcoal p-6 rounded-lg mb-6">
                <h3 className="font-medium text-accent-gold mb-3">Ce que nous proposons :</h3>
                <ul className="text-soft-white space-y-2">
                  <li>• Visites thématiques adaptées au programme scolaire</li>
                  <li>• Parcours découverte des collections permanentes</li>
                  <li>• Visites des expositions temporaires</li>
                  <li>• Documentation pédagogique pour les enseignants</li>
                  <li>• Possibilité de combiner visite et atelier pratique</li>
                </ul>
              </div>
              
              <Link 
                href="/jeune-public/visites-scolaires" 
                className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
              >
                En savoir plus
              </Link>
            </motion.div>
            
            {/* Ateliers Pédagogiques */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <FaPalette className="text-accent-gold text-3xl mr-4" />
                <h2 className="font-bodoni-regular text-3xl text-premium-white">
                  Ateliers Pédagogiques
                </h2>
              </div>
              
              <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/hero-background.jpg"
                  alt="Ateliers Pédagogiques"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              <p className="text-soft-white mb-6">
                Nos ateliers pédagogiques permettent aux enfants de s'initier à différentes 
                techniques artistiques tout en s'inspirant des œuvres du musée. Encadrés par 
                des artistes-éducateurs, ces ateliers favorisent l'expression personnelle 
                et le développement des compétences créatives.
              </p>
              
              <div className="bg-charcoal p-6 rounded-lg mb-6">
                <h3 className="font-medium text-accent-gold mb-3">Nos ateliers :</h3>
                <ul className="text-soft-white space-y-2">
                  <li>• Initiation aux arts plastiques</li>
                  <li>• Calligraphie arabe</li>
                  <li>• Mosaïque et motifs traditionnels</li>
                  <li>• Contes et histoires autour des collections</li>
                  <li>• Ateliers thématiques liés aux expositions temporaires</li>
                </ul>
              </div>
              
              <Link 
                href="/jeune-public/ateliers-pedagogiques" 
                className="inline-block bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold/10 transition-colors px-6 py-3 font-bodoni-regular"
              >
                Découvrir les ateliers
              </Link>
            </motion.div>
          </div>
          
          {/* Information for Parents and Teachers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-charcoal p-8 rounded-lg border border-graphite/30"
          >
            <h2 className="font-bodoni-regular text-2xl text-premium-white mb-4 text-center">
              Informations pour les parents et les enseignants
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-accent-gold mb-3">Réservations</h3>
                <p className="text-soft-white mb-4">
                  Les visites scolaires et ateliers pédagogiques sont disponibles sur réservation uniquement, 
                  au moins deux semaines à l'avance. Vous pouvez réserver par téléphone ou par email.
                </p>
                <p className="text-soft-white mb-4">
                  <span className="font-medium text-premium-white">Téléphone :</span> +212 5 22 xx xx xx<br />
                  <span className="font-medium text-premium-white">Email :</span> education@musee-as.ma
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-accent-gold mb-3">Tarifs</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="font-medium text-premium-white">Visite guidée scolaire</div>
                  <div className="text-soft-white">30 DH par élève</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="font-medium text-premium-white">Atelier pédagogique</div>
                  <div className="text-soft-white">40 DH par élève</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="font-medium text-premium-white">Visite + atelier</div>
                  <div className="text-soft-white">60 DH par élève</div>
                </div>
                <p className="text-soft-white text-sm italic">
                  Gratuité pour les accompagnateurs (1 pour 10 élèves)
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/infos-pratiques/contact" 
                className="inline-block bg-transparent border border-soft-white text-soft-white hover:text-premium-white hover:border-premium-white transition-colors px-6 py-3 font-bodoni-regular"
              >
                Contactez-nous pour plus d'informations
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default JeunePublicPage; 