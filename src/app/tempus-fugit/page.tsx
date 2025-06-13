"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const gold = '#bfa76a';

const TempusFugitPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/tempus-fugit/Tempus-Fugit_1.jpg"
            alt="Tempus Fugit Exhibition"
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
            Tempus Fugit
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Le temps qui s'enfuit
            </p>
        </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Exhibition Image */}
        <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="mb-8 flex justify-center"
        >
              <div className="relative w-full max-w-xl h-[340px] md:h-[420px]">
            <Image 
                  src="/images/tempus-fugit/Tempus-Fugit_1.jpg"
                  alt="Tempus Fugit Exhibition"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
        </motion.div>
        
            {/* Exhibition Content */}
        <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="prose prose-lg max-w-none mx-auto mb-10"
            >
              <p className="font-bodoni text-gray-800 leading-relaxed">
                L'exposition <strong>"Tempus Fugit"</strong> rassemble les travaux de huit photographes marocains réalisés pendant les périodes de confinement et de déconfinement, témoignant ainsi d'un espace-temps particulier. Chacun des photographes a eu la liberté d'exprimer sa vision personnelle, offrant des portraits mélancoliques et poétiques, des explorations architecturales, des réorganisations visuelles de leur environnement et des documentations détachées de la vie en état de siège, tout en ajoutant une touche d'humanité aux moments quotidiens. Ces photographies forment un corpus varié de plus de 50 tirages, tissant plusieurs histoires qui dialoguent et s'assemblent grâce à une scénographie épurée. Cette cartographie exhaustive de la période atypique reflète les changements de perception de l'espace, du temps et des relations humaines, offrant une mosaïque captivante d'instants de vie, d'archives contemporaines et de facettes multiples du Maroc actuel, le tout convergeant dans un projet photographique empreint de sens, réinventant le monde à la lumière de l'absurdité de la condition humaine, selon les mots d'Albert Camus dans "Le Mythe de Sisyphe".
                </p>
        </motion.div>
        
            <div className="mt-10 flex justify-center space-x-6">
            <Link 
              href="/visites-ateliers-activites/visites-guidees" 
                className="inline-flex items-center font-bodoni text-[#bfa76a] border-b-2 border-transparent hover:border-[#bfa76a] transition-all duration-300 pb-1 tracking-wide group"
            >
                <span className="mr-2">Réserver une visite guidée</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
            
            <Link 
              href="/collections-expositions/expositions-temporaires" 
                className="inline-flex items-center font-bodoni text-[#bfa76a] border-b-2 border-transparent hover:border-[#bfa76a] transition-all duration-300 pb-1 tracking-wide group"
            >
                <span className="mr-2">Autres expositions</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TempusFugitPage; 