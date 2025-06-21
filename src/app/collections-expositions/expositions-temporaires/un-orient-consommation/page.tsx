"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const UnOrientConsommationPage = () => {
  return (
    <PageLayout title="Un Orient de consommation">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/un orient de consommation/Un-Orient-de-consommation.png"
              alt="Un Orient de consommation"
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
                  UN ORIENT DE CONSOMMATION
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  Du mercredi 03 octobre au vendredi 30 novembre
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
                    src="/images/expositions-temporaires/un orient de consommation/Un-Orient-de-consommation.png"
                    alt="Un Orient de consommation"
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
                    Le musée de la Fondation Abderrahman Slaoui a accueilli une nouvelle exposition d'affiches orientalistes sur le thème de la « réclame» intitulée : <strong>Un Orient de consommation.</strong> Cette exposition a été conçue d'après la collection privée de la Fondation Abderrahman Slaoui.
                  </p>

                  <blockquote className="border-l-4 border-accent-gold pl-6 italic text-gray-600 bg-gray-50 p-6 rounded-r-lg">
                    <p className="mb-4">
                      « En matière de réclame, destination première de l'affiche, l'imagerie exotique, qui avait traditionnellement la faveur du public, a très largement imprégné l'imaginaire des artistes graphiques pour la représentation des produits coloniaux et orientaux. Dans la première moitié du XXe siècle, l'affiche de réclame de produits exotiques, fut même le principal support de la fascination qu'exerçait l'Orient sur les occidentaux.
                    </p>
                    <p>
                      Aussi, pour vanter les produits types orientaux, on rencontre le plus souvent l'arabe enturbanné ou les orientales lascives comme c'est toujours le cas pour le savon, le café, les tapis et les cigarettes. Dans le cas de promotion générale ou collective comme les foires-expositions, ce sont les paysages de rêve aux couleurs éclatantes qui prédominent. L'illustration de ces affiches par l'image exotique naît généralement plus du nom choisi que du produit lui-même et semble être motivée par le puissant pouvoir d'évocation des sujets représentés. »
                    </p>
                  </blockquote>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">L'affiche comme miroir de son époque</h3>
                    <p className="text-gray-700">
                      Cette exposition révèle comment l'affiche publicitaire de la première moitié du XXe siècle utilisait l'imagerie orientaliste pour séduire le consommateur occidental, créant un Orient fantasmé au service de la consommation.
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <footer className="text-right text-gray-900 font-medium">
                      Abdelaziz GHOZZI<br/>
                      <span className="text-sm text-gray-600">Extrait de l'Affiche Orientaliste d'Abderrahman Slaoui</span>
                    </footer>
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

export default UnOrientConsommationPage; 