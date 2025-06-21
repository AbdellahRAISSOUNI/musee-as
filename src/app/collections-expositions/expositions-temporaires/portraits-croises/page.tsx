"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const PortraitsCroisesPage = () => {
  return (
    <PageLayout title="Exposition Portraits Croisés">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/portraits_croises/Exposition-Portraits-Croises.png"
              alt="Exposition Portraits Croisés"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-bodoni text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight">
                  PORTRAITS CROISÉS
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Du 26 juin au 10 juillet
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/expositions-temporaires/portraits_croises/Exposition-Portraits-Croises.png"
                    alt="Exposition Portraits Croisés"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div className="text-lg leading-relaxed space-y-6 text-gray-700">
                  <p>
                    Le Musée de la Fondation Slaoui organise du 26 juin au 10 juillet une exposition photographique "Portraits croisés", des clichés réalisés par Ghita Iben Mansour et Reda Cherif au profit de l'association Enfance Maghreb Avenir dont l'action sociale a touché plus de 5000 élèves en sept ans d'activité.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Au profit d'une noble cause</h3>
                    <p className="text-gray-700">
                      Toutes les photographies présentées au public seront mises en vente afin que les recettes soutiennent les actions de cette association qui a pour principal objectif de redonner pleinement à l'école son rôle d'insertion sociale.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Enfance Maghreb Avenir intervient en deux temps :</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">1. Reconstituer un cadre décent</h4>
                        <p className="text-gray-700">
                          En investissant dans les infrastructures comme les branchements d'eau et d'électricité, la construction de sanitaires et fosses septiques, la construction de salles de classe, l'aménagement de salles culturelles polyvalentes…
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">2. Sensibiliser et accompagner</h4>
                        <p className="text-gray-700">
                          Les élèves ainsi que leurs parents à travers des activités extra-scolaires, la création d'associations de parents d'élèves, des ateliers de lecture, des camps de vacances éducatifs, la sensibilisation à l'hygiène et à la préservation de l'environnement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Enfance Maghreb Avenir a jusqu'ici collaboré avec huit écoles en impliquant élèves, parents, enseignants et personnels administratifs dans une démarche participative et durable.
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
    </PageLayout>
  );
};

export default PortraitsCroisesPage; 