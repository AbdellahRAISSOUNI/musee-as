"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const CasaDrawingPencilPage = () => {
  return (
    <PageLayout title="CASA DRAWING - exposition de dessins contemporains">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/casa_drawing_pencil/Said_afifi_dessin.jpg"
              alt="CASA DRAWING"
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
                <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                  CASA DRAWING
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  exposition de dessins contemporains
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
                    src="/images/expositions-temporaires/casa_drawing_pencil/Said_afifi_dessin.jpg"
                    alt="CASA DRAWING - exposition de dessins contemporains"
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
                    Si le dessin existe depuis la préhistoire, il a été pendant longtemps assujetti à d'autres disciplines artistiques comme la peinture, la sculpture et l'architecture. Le dessin est alors considéré comme une technique préparatoire (croquis, esquisse et étude) à l'œuvre principale. Il deviendra un art autonome à la fin du XIXème siècle grâce à l'apparition de nouvelles techniques, supports et outils.
                  </p>

                  <p>
                    La place accordée au dessin sur le champ de l'art contemporain international et sa popularité sont grandissantes notamment grâce à la multiplication de salons et de foires dédiés à cette discipline. Le dessin mérite toute sa place dans le paysage artistique et CASA DRAWING tend à faire connaître au public la diversité des techniques et de ses artistes au Maroc.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <p className="font-medium text-gray-900 mb-2">Pour cette première édition de CASA DRAWING</p>
                    <p className="text-gray-700">
                      6 artistes marocains et étrangers résidents au Maroc ouvrent la porte de leurs univers graphiques et artistiques.
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bodoni text-2xl text-gray-900 mb-6">Les artistes</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">AMINA BENBOUCHTA</h4>
                        <p className="text-gray-700">
                          lie ses dessins au travail sur ses archives familiales où les traits évoquent un schéma, une piste, un arbre généalogique, une géographie familiale que le flou et l'effacement renvoient aux rêves et à la symbolique.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">JULIE BERNET-ROLLANDE</h4>
                        <p className="text-gray-700">
                          évoque le mouvement et l'énergie d'une nature sensible et interdépendante de l'Homme.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">BADR EL HAMMAMI</h4>
                        <p className="text-gray-700">
                          questionne la notion de frontière géographique où se mélangent métaphore, histoire et ressenti individuel.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">SAID AFIFI</h4>
                        <p className="text-gray-700">
                          explore l'architecture et ses dimensions chaotique et utopique et associe avec finesse procédures chirurgicales et processus architectural.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">SIMOHAMMED FETTAKA</h4>
                        <p className="text-gray-700">
                          s'intéresse aux rapports entre individus et société pour en extraire les problématiques et thématiques qui lui sont chères.
                        </p>
                      </div>

                      <div className="bg-white p-6 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">YASSINE BALBZIOUI</h4>
                        <p className="text-gray-700">
                          tire son inspiration du quotidien pour en dessiner avec humour et dérision l'animalité et le grotesque de l'Homme.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Exposition organisée par</h3>
                    <p className="text-gray-700 mb-4">
                      le Musée de la Fondation Abderrahman Slaoui et Moroccan Contemporary Art Initiative
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Commissariat :</strong> BECHAR EL MAHFOUDI et YASSINE BALBZIOUI
                    </p>
                    <p className="text-gray-700">
                      <strong>Vernissage</strong> le 12 octobre à 19h
                    </p>
                  </div>
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

export default CasaDrawingPencilPage; 