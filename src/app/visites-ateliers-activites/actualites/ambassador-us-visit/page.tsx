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
            src="/images/actualites/ambassador-us-visit.jpg"
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
                During the visit, we had the opportunity to showcase the fascinating exhibits that highlight the life and legacy of Abderrahman Slaoui, a remarkable Moroccan art collector and philanthropist. The Ambassador showed great interest in our collections, particularly the orientalist posters and the traditional Moroccan jewelry.
              </p>
              
              <div className="my-10 relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/actualites/ambassador-us-visit-2.jpg"
                  alt="Ambassador touring the museum"
                  fill
                  className="object-cover"
                />
              </div>
              
              <p>
                We also discussed the importance and unique learning experience that museums provide to children. The Ambassador shared his thoughts on how cultural institutions like ours play a vital role in preserving heritage and fostering understanding between nations.
              </p>
              
              <p>
                The visit included a guided tour of our permanent collections, with special attention to pieces that showcase the rich artistic traditions of Morocco. The Ambassador was particularly impressed by the craftsmanship displayed in our kohl containers and snuffboxes collection.
              </p>
              
              <p>
                This visit highlights the strong cultural ties between Morocco and the United States, and we are grateful for the opportunity to strengthen these bonds through art and cultural exchange.
              </p>
              
              <blockquote className="italic border-l-4 pl-4 border-accent-gold">
                "Cultural diplomacy builds bridges between nations and peoples in ways that formal diplomacy sometimes cannot. Museums like the Abderrahman Slaoui Foundation are treasures that help us understand and appreciate each other's heritage."
              </blockquote>
              
              <p>
                We look forward to future collaborations and cultural exchanges that will continue to enrich the relationship between our two countries.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bodoni text-2xl text-premium-black mb-4">Galerie photos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/actualites/ambassador-us-visit.jpg"
                      alt="Ambassador of the US visit"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/actualites/ambassador-us-visit-2.jpg"
                      alt="Ambassador touring the museum"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="font-bodoni text-2xl text-premium-black mb-8">Autres actualités</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/visites-ateliers-activites/actualites/conference-art-contemporain" className="group">
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/actualites/conference-art-contemporain.jpg"
                      alt="Conférence: L'art contemporain marocain"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-accent-gold text-sm mb-1">12 avril 2023</p>
                      <h4 className="font-bodoni text-xl text-white">Conférence: L'art contemporain marocain</h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/collections-expositions/expositions-temporaires/memoire-des-cactus" className="group">
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/actualites/memoire-des-cactus.jpg"
                      alt="Mémoire des cactus et mystères des cochenilles"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-accent-gold text-sm mb-1">30 juin 2021</p>
                      <h4 className="font-bodoni text-xl text-white">Mémoire des cactus et mystères des cochenilles</h4>
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