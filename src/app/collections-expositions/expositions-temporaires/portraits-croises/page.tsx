"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const PortraitsCroisesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/portraits_croises/Exposition-Portraits-Croises.png"
            alt="Portraits Croisés Exhibition"
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
              Portraits Croisés
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Du 26 juin au 10 juillet
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
                Exposition photographique
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Au profit d'Enfance Maghreb Avenir
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
                  src="/images/expositions-temporaires/portraits_croises/Exposition-Portraits-Croises.png"
                  alt="Portraits croisés Exhibition"
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
                Le Musée de la Fondation Slaoui organise du 26 juin au 10 juillet une exposition photographique "Portraits croisés", des clichés réalisés par Ghita Iben Mansour et Reda Cherif au profit de l'association Enfance Maghreb Avenir dont l'action sociale a touché plus de 5000 élèves en sept ans d'activité.
              </p>
              <p>
                Toutes les photographies présentées au public seront mises en vente afin que les recettes soutiennent les actions de cette association qui a pour principal objectif de redonner pleinement à l'école son rôle d'insertion sociale.
              </p>
              <p>
                Enfance Maghreb Avenir intervient en deux temps : reconstituer un cadre décent en investissant dans les infrastructures comme les branchements d'eau et d'électricité, la construction de sanitaires et fosses septiques, la construction de salles de classe, l'aménagement de salles culturelles polyvalentes...
              </p>
              <p>
                L'association sensibilise et accompagne également les élèves ainsi que leurs parents à travers des activités extra-scolaires, la création d'associations de parents d'élèves, des ateliers de lecture, des camps de vacances éducatifs, la sensibilisation à l'hygiène et à la préservation de l'environnement.
              </p>
              <div className="mt-8 p-6 border-l-4 border-current" style={{ borderColor: gold, backgroundColor: '#fffbe6' }}>
                <p className="text-sm" style={{ color: gold }}>
                  <strong>Une noble cause :</strong> Enfance Maghreb Avenir a jusqu'ici collaboré avec huit écoles en impliquant élèves, parents, enseignants et personnels administratifs dans une démarche participative et durable.
                </p>
              </div>
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

export default PortraitsCroisesPage; 