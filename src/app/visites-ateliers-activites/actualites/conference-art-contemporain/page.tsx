"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const gold = '#bfa76a';

const ConferenceArtContemporainPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/actualites/conference-art-contemporain.jpg"
            alt="Conférence: L'art contemporain marocain"
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
              12 avril 2023
            </p>
            <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Conférence: L'art contemporain marocain
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
                Le Musée de la Fondation Abderrahman Slaoui a le plaisir de vous convier à une conférence exceptionnelle sur l'évolution de l'art contemporain marocain, animée par le critique d'art et commissaire d'exposition Abdellah Karroum.
              </p>
              
              <p>
                Cette conférence explorera les tendances actuelles de la scène artistique marocaine et les défis auxquels font face les artistes contemporains dans un contexte de mondialisation et de transformation sociale. Abdellah Karroum, figure reconnue dans le monde de l'art contemporain, partagera son expertise et sa vision sur l'avenir de la création artistique au Maroc.
              </p>
              
              <div className="my-10 relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/actualites/conference-art-contemporain-salle.jpg"
                  alt="Salle de conférence"
                  fill
                  className="object-cover"
                />
              </div>
              
              <h2>Programme de la conférence</h2>
              
              <p>
                La conférence se déroulera le 12 avril 2023 à 18h30 dans l'auditorium du Musée de la Fondation Abderrahman Slaoui. Le programme de la soirée est le suivant:
              </p>
              
              <ul>
                <li>18h30 - 19h00: Accueil des participants</li>
                <li>19h00 - 20h00: Conférence d'Abdellah Karroum</li>
                <li>20h00 - 20h30: Session de questions-réponses</li>
                <li>20h30 - 21h30: Cocktail et networking</li>
              </ul>
              
              <h2>Le conférencier: Abdellah Karroum</h2>
              
              <p>
                Abdellah Karroum est un critique d'art, commissaire d'exposition et éditeur marocain. Il a fondé plusieurs projets artistiques innovants, dont L'appartement 22, un espace indépendant pour l'art contemporain à Rabat. Il a également été directeur artistique de plusieurs biennales internationales et a collaboré avec des institutions prestigieuses comme le Centre Pompidou à Paris et le MoMA à New York.
              </p>
              
              <p>
                Sa vision unique de l'art contemporain marocain, ancrée dans une compréhension profonde des traditions culturelles locales tout en étant ouverte aux influences globales, en fait l'un des acteurs les plus influents de la scène artistique actuelle.
              </p>
              
              <blockquote className="italic border-l-4 pl-4 border-accent-gold">
                "L'art contemporain marocain se trouve à un carrefour fascinant entre héritage culturel millénaire et expressions artistiques globalisées. Cette tension créative génère des œuvres d'une richesse et d'une originalité remarquables." - Abdellah Karroum
              </blockquote>
              
              <h2>Thèmes abordés</h2>
              
              <p>
                Parmi les thèmes qui seront abordés lors de cette conférence:
              </p>
              
              <ul>
                <li>L'évolution de l'art contemporain marocain depuis les années 1990</li>
                <li>Les influences traditionnelles dans l'art contemporain</li>
                <li>Les défis de la mondialisation pour les artistes marocains</li>
                <li>Les nouvelles plateformes de diffusion et de promotion de l'art</li>
                <li>Le rôle des institutions culturelles dans le développement de la scène artistique</li>
              </ul>
              
              <p>
                Cette conférence s'adresse aussi bien aux professionnels du monde de l'art qu'aux amateurs et curieux souhaitant approfondir leur connaissance de la scène artistique contemporaine marocaine.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bodoni text-2xl text-premium-black mb-4">Informations pratiques</h3>
                <ul>
                  <li><strong>Date:</strong> 12 avril 2023</li>
                  <li><strong>Heure:</strong> 18h30 - 21h30</li>
                  <li><strong>Lieu:</strong> Auditorium du Musée de la Fondation Abderrahman Slaoui</li>
                  <li><strong>Entrée:</strong> Gratuite sur réservation</li>
                  <li><strong>Réservation:</strong> Par téléphone au +212 5 22 20 98 76 ou par email à reservation@fondationslaoui.ma</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="font-bodoni text-2xl text-premium-black mb-8">Autres actualités</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/visites-ateliers-activites/actualites/ambassador-us-visit" className="group">
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/actualites/ambassador-us-visit.jpg"
                      alt="Ambassador of the United States visit"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-accent-gold text-sm mb-1">15 juillet 2023</p>
                      <h4 className="font-bodoni text-xl text-white">Ambassador of the United States visit</h4>
                    </div>
                  </div>
                </Link>
                
                <Link href="/visites-ateliers-activites/actualites/journee-portes-ouvertes" className="group">
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/actualites/journee-portes-ouvertes.jpg"
                      alt="Journée portes ouvertes au Musée"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-accent-gold text-sm mb-1">8 février 2023</p>
                      <h4 className="font-bodoni text-xl text-white">Journée portes ouvertes au Musée</h4>
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

export default ConferenceArtContemporainPage;
