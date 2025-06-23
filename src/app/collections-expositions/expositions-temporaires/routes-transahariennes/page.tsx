"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReturnButton from '@/components/ReturnButton';

const gold = '#bfa76a';

const RoutesTransahariennesPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/expositions-temporaires/routes-transahariennes/311589066_10159797637038153_2106760676544239899_n_1.jpg"
            alt="Routes transahariennes Exhibition"
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
              Routes transahariennes
            </h1>
            <div className="w-20 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
            <p className="text-lg md:text-2xl text-white/90 font-light font-bodoni">
              En partenariat avec African Arty
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
                Exposition collective
              </h2>
              <div className="w-12 h-[2px] mx-auto mb-4" style={{ backgroundColor: gold }} />
              <h3 className="font-bodoni text-3xl md:text-4xl text-gray-900 mb-4">
                L'Afrique poétique et créative
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
                  src="/images/expositions-temporaires/routes-transahariennes/311589066_10159797637038153_2106760676544239899_n_1.jpg"
                  alt="Routes transahariennes Exhibition"
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
                Le Musée de la Fondation Abderrahman Slaoui, en partenariat avec African Arty, présente une exposition captivante qui plonge le spectateur au cœur de l'Afrique, vue à travers le regard de quatre artistes qui évoquent un continent poétique, créatif et affectif.
              </p>
              <p>
                Dans cette chorégraphie multidimensionnelle, ordres et désordres s'entremêlent, offrant une réflexion sur la beauté complexe et indéfinissable de ce continent. Les artistes explorent des thèmes universels en puisant dans la richesse et la diversité de l'Afrique, créant ainsi des récits plastiques inspirants.
              </p>
              <p>
                Pour eux, l'art africain incarne l'ordre et le désordre, la vie et la survie, une mélancolie teintée de profondeur et d'unicité. Les œuvres exposées transmettent des messages forts, portant à la fois une simplicité évidente et une profondeur émotionnelle.
              </p>
              <p>
                Cette exposition offre ainsi aux visiteurs une immersion dans l'immédiateté et l'humanité de l'Afrique, invitant à contempler les itinéraires mythiques d'un continent nomade et créatif, qui a toujours enrichi le Maroc et sa culture métissée à travers les siècles.
              </p>
              <div className="mt-8 p-6 border-l-4 border-current" style={{ borderColor: gold, backgroundColor: '#fffbe6' }}>
                <p className="text-sm" style={{ color: gold }}>
                  <strong>En partenariat avec African Arty :</strong> Une expérience artistique inoubliable qui invite à la contemplation dans un monde qui court sans cesse.
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

export default RoutesTransahariennesPage; 