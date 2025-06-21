"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const gold = '#bfa76a';

const AmbassadorUSVisitPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/ambassador-us-visit/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg"
            alt="Ambassador of the United States visit"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <p className="text-accent-gold uppercase tracking-widest font-bodoni-regular text-sm md:text-base mb-4">
              15 juillet 2023
            </p>
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Ambassador of the United States visit
            </h1>
            <div className="w-24 h-[2px] mx-auto mb-6" style={{ backgroundColor: gold }} />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/visites-ateliers-activites/actualites" 
              className="inline-block mb-8 text-accent-gold hover:text-accent-gold/80 transition-colors font-medium flex items-center"
            >
              <span className="mr-2">←</span>
              <span>Retour aux actualités</span>
            </Link>
            
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="prose prose-lg max-w-none mx-auto text-gray-800"
            >
              <p className="lead text-xl">
                We had the absolute honor to welcome his Excellency the Ambassador of the United States and his wife to the "Abderrahman Slaoui Museum"!
              </p>
              
              <p>
                During the visit, we had the opportunity to showcase the fascinating exhibits that highlight the life and legacy of Abderrahman Slaoui, a remarkable Moroccan art collector and philanthropist, we also discussed the importance and unique learning experience that museums provide to children.
              </p>
              
              <div className="my-10 relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/actualites/ambassador-us-visit/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg"
                  alt="Ambassador touring the museum"
                  fill
                  className="object-cover"
                />
              </div>
              
              <p>
                The Ambassador's keen interest and enthusiasm for the art and history displayed in our museum were truly inspiring! Reinforcing the importance of preserving and sharing cultural treasures that bridge nations and generations.
              </p>
              
              <p>
                Thank you, Ambassador Talwar for your visit, we hope you enjoyed exploring the wonders of Moroccan art and history as much as we cherished hosting you.
              </p>
              

            </motion.div>
            
            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="font-bodoni text-2xl text-premium-black mb-8">Autres actualités</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/visites-ateliers-activites/actualites/memoire-des-cactus" className="group">
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/actualites/cactus/58756870-43296925.jpg"
                      alt="Mémoire des cactus et mystères des cochenilles"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-accent-gold text-sm mb-1">30 juin au 30 septembre</p>
                      <h4 className="font-bodoni text-xl text-white">Mémoire des cactus et mystères des cochenilles</h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/visites-ateliers-activites/actualites/vernissage-nilwood-melody" className="group">
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/actualites/nilwood/visuel_site_internet_2.jpg"
                      alt="Vernissage NILWOOD MELODY"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-accent-gold text-sm mb-1">15 février 2017</p>
                      <h4 className="font-bodoni text-xl text-white">Vernissage NILWOOD MELODY</h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AmbassadorUSVisitPage; 