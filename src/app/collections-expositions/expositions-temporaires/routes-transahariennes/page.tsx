"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '../../../../components/PageLayout';
import ReturnButton from '../../../../components/ReturnButton';

const RoutesTransahariennesPage = () => {
  return (
    <PageLayout title="Routes transahariennes">
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <Image
              src="/images/expositions-temporaires/routes-transahariennes/311589066_10159797637038153_2106760676544239899_n_1.jpg"
              alt="Routes transahariennes"
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
                  ROUTES TRANSAHARIENNES
                </h1>
                <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-white/90 font-light">
                  En partenariat avec African Arty
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
                    src="/images/expositions-temporaires/routes-transahariennes/311589066_10159797637038153_2106760676544239899_n_1.jpg"
                    alt="Routes transahariennes"
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
                    Le Musée de la Fondation Abderrahman Slaoui, en partenariat avec African Arty, présente une exposition captivante qui plonge le spectateur au cœur de l'Afrique, vue à travers le regard de quatre artistes qui évoquent un continent poétique, créatif et affectif.
                  </p>

                  <div className="bg-accent-gold/10 p-6 rounded-lg border-l-4 border-accent-gold">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Une chorégraphie multidimensionnelle</h3>
                    <p className="text-gray-700">
                      Dans cette chorégraphie multidimensionnelle, ordres et désordres s'entremêlent, offrant une réflexion sur la beauté complexe et indéfinissable de ce continent. Les artistes explorent des thèmes universels en puisant dans la richesse et la diversité de l'Afrique, créant ainsi des récits plastiques inspirants.
                    </p>
                  </div>

                  <p>
                    Pour eux, l'art africain incarne l'ordre et le désordre, la vie et la survie, une mélancolie teintée de profondeur et d'unicité. Les œuvres exposées transmettent des messages forts, portant à la fois une simplicité évidente et une profondeur émotionnelle.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bodoni text-xl text-gray-900 mb-4">Perspectives des directeurs</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-700">
                          <strong>Jacques-Antoine Gannat</strong>, directeur d'African Arty, souligne l'importance de cette exposition dans la promotion d'artistes africains et dans la célébration des récits artistiques qu'ils génèrent.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <strong>Ibrahim Slaoui</strong>, secrétaire général de la Fondation Abderrahman Slaoui, met en évidence la souveraineté et la liberté croissantes que l'Afrique revendique, tout en soulignant le rôle actif que jouent désormais les questions de muséologie et de muséographie dans le débat politique.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Cette exposition offre ainsi aux visiteurs une immersion dans l'immédiateté et l'humanité de l'Afrique, invitant à contempler les itinéraires mythiques d'un continent nomade et créatif, qui a toujours enrichi le Maroc et sa culture métissée à travers les siècles. Une expérience artistique inoubliable qui invite à la contemplation dans un monde qui court sans cesse.
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

export default RoutesTransahariennesPage; 