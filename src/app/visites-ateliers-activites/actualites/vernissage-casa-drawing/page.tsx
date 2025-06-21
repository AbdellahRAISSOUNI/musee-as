"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const VernissageCasaDrawingPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black mt-20 md:mt-24">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/autour-casa-drawing/invit_site_internet_1.jpg"
            alt="VERNISSAGE CASA DRAWING"
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
              VERNISSAGE CASA DRAWING
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-xl text-white/90 font-light font-bodoni italic">
              Mercredi 12 octobre à 19h
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
                <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-6 mb-8">
                  <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                    VERNISSAGE LE MERCREDI 12 OCTOBRE A 19h
                  </h2>
                  <p className="text-gray-800 text-lg">
                    Première édition de CASA DRAWING au Musée de la Fondation Abderrahman Slaoui
                  </p>
                </div>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Pour cette première édition de CASA DRAWING, 6 artistes marocains et étrangers résidents au Maroc ouvrent la porte de leurs univers graphiques et artistiques.
                </p>

                <div className="my-12 relative h-[500px] overflow-hidden">
                  <Image
                    src="/images/actualites/autour-casa-drawing/invit_site_internet_1.jpg"
                    alt="CASA DRAWING - Vernissage"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Les artistes participants
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-2" style={{ color: gold }}>AMINA BENBOUCHTA</h3>
                    <p className="text-gray-800">
                      Lie ses dessins au travail sur ses archives familiales où les traits évoquent un schéma, une piste, un arbre généalogique, une géographie familiale que le flou et l'effacement revoient aux rêves et à la symbolique.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-2" style={{ color: gold }}>JULIE BERNET-ROLLANDE</h3>
                    <p className="text-gray-800">
                      Évoque le mouvement et l'énergie d'une nature sensible et interdépendante de l'Homme.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-2" style={{ color: gold }}>BADR EL HAMMAMI</h3>
                    <p className="text-gray-800">
                      Questionne la notion de frontière géographique où se mélangent métaphore, histoire et ressenti individuel.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-2" style={{ color: gold }}>SAID AFIFI</h3>
                    <p className="text-gray-800">
                      Explore l'architecture et ses dimensions chaotique et utopique et associe avec finesse procédures chirurgicales et processus architectural.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-2" style={{ color: gold }}>SIMOHAMMED FETTAKA</h3>
                    <p className="text-gray-800">
                      S'intéresse aux rapports entre individus et société pour en extraire les problématiques et thématiques qui lui sont chères.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bodoni text-xl mb-2" style={{ color: gold }}>YASSINE BALBZIOUI</h3>
                    <p className="text-gray-800">
                      Tire son inspiration du quotidien pour en dessiner avec humour et dérision l'animalité et le grotesque de l'Homme.
                    </p>
                  </div>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Une diversité d'univers graphiques
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Cette première édition de CASA DRAWING met en lumière la richesse et la diversité du dessin contemporain marocain. Chaque artiste apporte sa vision unique, ses techniques personnelles et son approche esthétique particulière, créant ensemble un panorama fascinant de la création graphique actuelle.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  L'exposition révèle comment les artistes contemporains s'approprient le dessin, entre tradition et modernité, pour exprimer leurs questionnements sur l'identité, la société, l'architecture et l'humain.
                </p>

                <div className="bg-amber-50 border-l-4 border-accent-gold p-6 mb-8">
                  <h3 className="font-bodoni text-xl mb-4" style={{ color: gold }}>
                    Commissariat
                  </h3>
                  <p className="text-gray-800 text-lg">
                    <strong>Commissaires :</strong> Bechar EL MAHFOUDI et Yassine BALBZIOUI
                  </p>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-lg mb-8">
                  <h3 className="font-bodoni text-xl mb-4 text-accent-gold">
                    Informations sur le vernissage
                  </h3>
                  <p className="mb-2 text-lg">
                    <strong>Date :</strong> Mercredi 12 octobre
                  </p>
                  <p className="mb-2 text-lg">
                    <strong>Heure :</strong> 19h
                  </p>
                  <p className="mb-2 text-lg">
                    <strong>Lieu :</strong> Musée de la Fondation Abderrahman Slaoui
                  </p>
                  <p className="text-accent-gold text-lg font-medium">
                    Première édition de CASA DRAWING
                  </p>
                </div>

                <h2 className="font-bodoni text-2xl mb-4" style={{ color: gold }}>
                  Le dessin, art à part entière
                </h2>
                
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  CASA DRAWING s'inscrit dans une démarche de reconnaissance du dessin comme discipline artistique autonome. Cette exposition collective témoigne de la vitalité de la scène artistique marocaine et de l'émergence de nouveaux talents dans le domaine des arts graphiques.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  Le vernissage marquera le début d'une nouvelle aventure artistique, ouvrant un espace de dialogue et de découverte autour du dessin contemporain au Maroc.
                </p>
              </div>
            </motion.div>

            {/* Return Button at Bottom */}
            <div className="mt-16">
              <ReturnButton href="/visites-ateliers-activites/actualites" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VernissageCasaDrawingPage; 