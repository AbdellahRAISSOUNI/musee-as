"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const CinemarocPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/zaubitzer/CineMaroc-de-Stephan-Zaubitzer.png"
            alt="CinéMaroc Exhibition"
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
              CinéMaroc
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              de Stephan Zaubitzer
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
                Projet Grands Écrans
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Du 16 avril au 16 mai
              </h3>
            </motion.div>

            {/* Exhibition Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/images/expositions-temporaires/zaubitzer/CineMaroc-de-Stephan-Zaubitzer.png"
                  alt="Ciné Maroc 2013 Exhibition"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
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
                CinéMaroc a été réalisé en mars 2014 dans six villes marocaines, Casablanca, Meknès, Marrakech, Tanger, Tétouan et Oujda. C'est l'étape marocaine du projet Grands Écrans entrepris depuis plus d'une dizaine d'années.
              </p>
              <p>
                Depuis 2003, Stephan Zaubitzer photographie les salles de cinéma dans le monde entier. Photo-trotteur passionné, ce travail a commencé au Burkina Faso sur les salles plein-air de Ouagadougou, et s'est poursuivi au Brésil, Madagascar, Roumanie, Londres et ses cinémas transformés, Inde, Égypte, République Dominicaine, Cuba, République Tchèque, Californie...
              </p>
              <p>
                Stephan Zaubitzer travaille à la chambre photographique Linhof. Ce cérémonial renforce l'hommage rendu à la salle de cinéma. Une salle, c'est un écran, une cabine de projection et aussi une architecture particulière régie par les lois de l'optique.
              </p>
              <p>
                C'est aussi un temple dans lequel officient un rite, une magie devant des fidèles en proie à une sorte de fascination presque hypnotique. La salle incarne un mystère ; les architectes se sont ingéniés avec le goût de chaque époque, de mettre en scène cette illusion.
              </p>
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

export default CinemarocPage; 