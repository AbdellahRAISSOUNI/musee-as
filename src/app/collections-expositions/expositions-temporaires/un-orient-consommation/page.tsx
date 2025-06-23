"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const UnOrientConsommationPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/un orient de consommation/Un-Orient-de-consommation.png"
            alt="Un Orient de consommation"
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
              Un Orient de consommation
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              Du mercredi 03 octobre au vendredi 30 novembre
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
                Exposition temporaire
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                Affiches orientalistes publicitaires
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
                  src="/images/expositions-temporaires/un orient de consommation/Un-Orient-de-consommation.png"
                  alt="Un Orient de consommation"
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
              <p className="mb-6">
                Le musée de la Fondation Abderrahman Slaoui a accueilli une nouvelle exposition d'affiches orientalistes sur le thème de la « réclame» intitulée : <strong>Un Orient de consommation.</strong> Cette exposition a été conçue d'après la collection privée de la Fondation Abderrahman Slaoui.
              </p>

              <blockquote className="border-l-4 pl-6 italic text-gray-600 bg-gray-50 p-6 rounded-r-lg mb-6" style={{ borderColor: gold }}>
                <p className="mb-4">
                  « En matière de réclame, destination première de l'affiche, l'imagerie exotique, qui avait traditionnellement la faveur du public, a très largement imprégné l'imaginaire des artistes graphiques pour la représentation des produits coloniaux et orientaux. Dans la première moitié du XXe siècle, l'affiche de réclame de produits exotiques, fut même le principal support de la fascination qu'exerçait l'Orient sur les occidentaux.
                </p>
                <p>
                  Aussi, pour vanter les produits types orientaux, on rencontre le plus souvent l'arabe enturbanné ou les orientales lascives comme c'est toujours le cas pour le savon, le café, les tapis et les cigarettes. Dans le cas de promotion générale ou collective comme les foires-expositions, ce sont les paysages de rêve aux couleurs éclatantes qui prédominent. L'illustration de ces affiches par l'image exotique naît généralement plus du nom choisi que du produit lui-même et semble être motivée par le puissant pouvoir d'évocation des sujets représentés. »
                </p>
              </blockquote>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 mb-6" style={{ borderColor: gold }}>
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

export default UnOrientConsommationPage; 